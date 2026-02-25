"use client";
import { DashboardTabs } from "@/src/components/ui";
import { ProductFeature, UsersFeature } from "@/src/features";
import { Flex, Box, ScrollArea } from "@chakra-ui/react";
import { useState } from "react";

export function DashboardFeature() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      h="700px"
      w="full"
      alignItems={{ base: "center" }}
      justify={{ base: "center", md: "space-between" }}
    >
      <Box mb={{ base: 4, md: 0 }}>
        <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </Box>

      <Box flex="1" minH="0" maxH="700px" minW={{ base: "100%", md: "700px" }}>
        <ScrollArea.Root maxH="700px" w="full">
          <ScrollArea.Viewport>
            <ScrollArea.Content spaceY="4" textStyle="sm">
              {activeTab === "users" && <UsersFeature />}
              {activeTab === "products" && <ProductFeature />}
            </ScrollArea.Content>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar>
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner />
        </ScrollArea.Root>
      </Box>
    </Flex>
  );
}

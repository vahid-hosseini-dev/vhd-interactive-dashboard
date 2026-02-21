"use client";
import { DashboardTabs } from "@/src/components/ui";
import { ProductFeature, UsersFeature } from "@/src/features";
import { Grid, GridItem, Box, ScrollArea } from "@chakra-ui/react";
import { useState } from "react";

export function DashboardFeature() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <Grid
      h="80vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      px="5"
    >
      <GridItem rowSpan={2} colSpan={1}>
        <Box>
          <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </Box>
      </GridItem>

      <GridItem colSpan={4}>
        <Box>
          <ScrollArea.Root height="700px" w="full">
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
      </GridItem>
    </Grid>
  );
}

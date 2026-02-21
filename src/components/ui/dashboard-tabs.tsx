"use client";

import { Dashboard } from "@/src/types/dashboard.types";
import { Button, Flex, Tabs, Box } from "@chakra-ui/react";
import { LogOut, LucideUser, ShoppingBag , Settings } from "lucide-react";


export const DashboardTabs = ({ activeTab, setActiveTab }: Dashboard) => {
  return (
    <Flex flexDir="column" justify="space-between" minH="700px" minW="250px">
      <Box>
        <Box
          background="blue.500"
          textAlign="center"
          width="100%"
          rounded="md"
          padding="4"
          color="white"
          mt="5"
        >
          DASHBOARD
        </Box>

        <Tabs.Root
          value={activeTab}
          onValueChange={(details) => {
            console.log(details.value);
            setActiveTab(details.value);
          }}
          orientation="vertical"
          colorPalette="blue"
          size="lg"
          variant="subtle"
          mt="5"
          css={{
            "--tabs-indicator-bg": "colors.gray.subtle",
            "--tabs-indicator-shadow": "shadows.xs",
            "--tabs-trigger-radius": "radii.full",
          }}
        >
          <Tabs.List>
            <Tabs.Trigger value="users">
              <LucideUser />
              Users
            </Tabs.Trigger>
            <Tabs.Trigger value="products">
              <ShoppingBag />
              Products
            </Tabs.Trigger>
            <Tabs.Indicator />
          </Tabs.List>
          <Tabs.Content value="users"></Tabs.Content>
          <Tabs.Content value="products"></Tabs.Content>
        </Tabs.Root>
      </Box>

      <Button
        colorPalette="blue"
        mt="auto"
        w="full"
        px="5"
        variant="surface"
        color="black"
        fontSize="sm"
      >
          <Settings /> Setting
      </Button>
    </Flex>
  );
};

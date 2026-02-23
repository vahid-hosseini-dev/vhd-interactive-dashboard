"use client";

import { Button, CloseButton, Drawer, Portal, Flex } from "@chakra-ui/react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const HambergerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <Button
          variant="ghost"
          size="lg"
          color="white"
          _hover={{ color: "blue.500" }}
        >
          <Menu />
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content dir="rtl">
            <Drawer.Header>
              <Drawer.Title>Online Shop</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Flex direction="column" gap="4" fontSize="lg">
                <Link href="/">Home</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/products">Products</Link>
                <Link href="/games">Games</Link>
              </Flex>
            </Drawer.Body>
            <Drawer.Footer></Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

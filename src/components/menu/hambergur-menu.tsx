"use client";

import {
  Button,
  CloseButton,
  Drawer,
  Portal,
  Flex,
  Box,
} from "@chakra-ui/react";
import { Menu } from "lucide-react";
import Image from "next/image";
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
              <Drawer.Title>
                <Flex align="center" gap="2" w="full" mb="4">
                  <Box>
                    <Image
                      src="/png/main-logo.png"
                      alt="Online Shop"
                      width={100}
                      height={50}
                    />
                  </Box>
                  Online Shop
                </Flex>
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Flex direction="column" gap="4" fontSize="lg">
                <Box onClick={() => setOpen(false)}>
                  <Link href="/">Home</Link>
                </Box>
                <Box onClick={() => setOpen(false)}>
                  <Link href="/dashboard">Dashboard</Link>
                </Box>
                <Box onClick={() => setOpen(false)}>
                  <Link href="/products">Products</Link>
                </Box>
                <Box onClick={() => setOpen(false)}>
                  <Link href="/games">Games</Link>
                </Box>
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

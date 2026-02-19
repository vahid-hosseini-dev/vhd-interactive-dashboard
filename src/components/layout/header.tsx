import { Flex, Box, Button, Separator } from "@chakra-ui/react";
import Link from "next/link";
import { LuHouse } from "react-icons/lu";

export const Header = () => {
  return (
    <Flex
      colorPalette="blue"
      bg="blue.500"
      gap="1"
      align="center"
      justify="space-around"
      p="3"
      h="20"
      position="fixed"
      w="full"
      zIndex="50"
      opacity="0.8"
    >
      <Link href="/">
        <LuHouse size="32" color="white" />
      </Link>
      <Box
        height="10"
        color="gray.200"
        fontSize="xl"
        display="flex"
        alignItems="center"
        gap="10"
        borderWidth="1px"
        borderRadius="md"
        px="10"
        py="2"
      >
        <Link href="/games">Games</Link>
        <Separator orientation="vertical" height="4" />

        <Link href="/products">Products</Link>
      </Box>
      <Button size="sm" px="5" variant="surface" color="black" fontSize="sm">
        <Link href="/login">Login</Link>
      </Button>
    </Flex>
  );
};

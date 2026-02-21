"use client";

import { Flex, Box, Button, Separator, Text, Avatar } from "@chakra-ui/react";
import { LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import { LuHouse } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";

export const Header = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <Flex
      bg="blue.500"
      align="center"
      justify="space-evenly"
      p="3"
      h="20"
      position="fixed"
      w="full"
      zIndex="50"
      opacity="0.9"
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

      {user ? (
        <Flex align="center" gap="3">
          <Avatar.Root size="sm">
            <Avatar.Image src={user.avatar} />
            <Avatar.Fallback name={user.username} />
          </Avatar.Root>
          <Text color="white">{user.username}</Text>

          <Button
            size="sm"
            px="4"
            variant="solid"
            colorPalette="red"
            onClick={handleLogout}
          >
            <LogOut size={16} />
            Logout
          </Button>
        </Flex>
      ) : (
        <Link href="/login">
          <Button colorPalette="blue" size="sm" px="5" variant="solid">
            <LogIn size={16} />
            Login
          </Button>
        </Link>
      )}
    </Flex>
  );
};

import { cookies } from "next/headers";
import { Flex, Box, Text, Avatar, Separator } from "@chakra-ui/react";
import Link from "next/link";
import { LogoutButton, LoginButton } from "@/src/components/ui";
import Image from "next/image";
import { HambergerMenu } from "../menu/hambergur-menu";

export const Header = async () => {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user");
  const user = userCookie ? JSON.parse(userCookie.value) : null;

  return (
    <Flex
      bg="blue.500"
      align="center"
      justify="center"
      gap="20"
      p="3"
      h="20"
      position="fixed"
      w="full"
      zIndex="50"
      opacity="0.9"
    >
      <Box display={{ base: "none", md: "block" }}>
        <Link href="/">
          <Image src="/png/main-logo.png" width={100} height={100} alt="Logo" />
        </Link>
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <HambergerMenu />
      </Box>
      <Flex
        display={{ base: "none", md: "flex" }}
        height="10"
        color="gray.200"
        fontSize="xl"
        gap="10"
        borderWidth="1px"
        borderRadius="md"
        px="10"
        py="2"
      >
        <Link href="/games">Games</Link>
        <Separator orientation="vertical" height="4" />
        <Link href="/products">Products</Link>
        {user && <Separator orientation="vertical" height="4" />}
        {user && <Link href="/dashboard">Dashboard</Link>}
      </Flex>

      {user ? (
        <Flex align="center" gap="3">
          <Link href="/dashboard">
            <Avatar.Root size="sm">
              <Avatar.Image src={user.avatar} />
              <Avatar.Fallback name={user.username} />
            </Avatar.Root>
          </Link>
          <Text color="white">{user.username}</Text>

          <LogoutButton />
        </Flex>
      ) : (
        <Link href="/login">
          <LoginButton />
        </Link>
      )}
    </Flex>
  );
};

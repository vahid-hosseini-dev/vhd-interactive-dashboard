import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export function HeroSection() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="center"
      textAlign={{ base: "center", md: "left" }}
      py={{ base: 5, md: 10 }}
      px={{ base: 5, md: 25 }}
      bg="gray.100"
      gap={{ base: 8, md: 9 }}
    >
      <Box flex="1" maxW={{ base: "full", md: "50%" }} pl={10}>
        <Text as="h1" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
          Welcome to Online Shop
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} mt={4}>
          Discover and explore your favorite games!
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }} mt={2}>
          Online shopping for games and more!
        </Text>
      </Box>

      <Box flex="1" maxW={{ base: "full", md: "50%" }}>
        <Image
          src="/png/hero-section.png"
          alt="Hero Image"
          width={800}
          height={400}
          style={{ width: "100%", height: "auto", borderRadius: "12px" }}
        />
      </Box>
    </Flex>
  );
}

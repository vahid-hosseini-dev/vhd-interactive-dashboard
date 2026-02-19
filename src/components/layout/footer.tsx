import { Flex, Box } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      colorPalette="blue"
      bg="blue.500"
      gap="4"
      align="center"
      justify="space-around"
      p="10"
      w="full"
      mx="auto"
      zIndex="50"
    >
      <Box height="10" color="gray.100">
        Interactive Dashboard - Vahid Hosseini - 2025
      </Box>
    </Flex>
  );
};

import { HomeProductsFeature, HeroSection } from "@/src/features";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex direction="column" align="center" w="full">
      <HeroSection />
      <HomeProductsFeature />
    </Flex>
  );
}

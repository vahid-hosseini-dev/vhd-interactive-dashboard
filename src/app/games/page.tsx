import { Flex } from "@chakra-ui/react";
import { Search, GamesList } from "@/src/components/ui";

export default async function GamesPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search } = await searchParams;
  const initialSearch = search || "";
  return (
    <Flex direction="column" w="full" p="5" my={5}>
      <Search initialValue={initialSearch} />
      <GamesList initialSearch={initialSearch} />
    </Flex>
  );
}

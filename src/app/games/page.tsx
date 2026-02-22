import { Flex } from "@chakra-ui/react";
import { Search, GamesList, GenreButton } from "@/src/components/ui";

export default async function GamesPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; genre?: string }>;
}) {
  const { search, genre } = await searchParams;
  const initialSearch = search || "";
  const initialGenre = genre || "";

  return (
    <>
      <Flex direction="column" w="full" p="5" my={5} mx="auto">
        <Flex direction="column" align="center" mb={10}>
          <Search initialValue={initialSearch} initialGenre={initialGenre} />
          <GenreButton initialGenre={initialGenre} />
        </Flex>
        <GamesList />
      </Flex>
    </>
  );
}

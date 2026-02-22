"use client";

import { Grid, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GameCard } from "@/src/components/ui";
import type { Games } from "@/src/types/games.type";
import { useSearchParams } from "next/navigation";

const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;

type GamesListProps = {
  initialSearch?: string;
};

export function GamesList({ initialSearch = "" }: GamesListProps) {
  const [games, setGames] = useState<Games[]>([]);
  const [search, setSearch] = useState(initialSearch);

  const searchParams = useSearchParams();
  const urlSearch = searchParams.get("search") || "";

  useEffect(() => {
    setSearch(urlSearch);
  }, [urlSearch]);

  useEffect(() => {
    async function fetchGames() {
      const res = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}&page_size=12${search ? `&search=${search}` : ""}`,
      );
      const data = await res.json();
      setGames(data.results);
    }

    fetchGames();
  }, [search]);

  return (
    <Container p="0">
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap={6}
      >
        {games.map((game: Games) => (
          <GameCard
            id={game.id}
            key={game.id}
            image={game.background_image}
            alt={game.name}
            title={game.name}
            description={`Released: ${game.released}, Rating: ${game.rating}`}
          />
        ))}
      </Grid>
    </Container>
  );
}

import { Grid, Container } from "@chakra-ui/react";
import type { Games } from "@/src/types/games.type";
import { GameCard } from "@/src/components/ui";

const API_KEY = process.env.RAWG_API_KEY;

async function getGames() {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${API_KEY}&page_size=10`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }

  return res.json();
}

async function GamesPage() {
  const data = await getGames();

  return (
    <Container p="5">
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {data.results.map((game: Games) => {
          const { id, name, background_image, released, rating } = game;

          return (
            <GameCard
              key={id}
              image={background_image}
              alt={name}
              title={name}
              description={`Released: ${released}, Rating: ${rating}`}
            />
          );
        })}
      </Grid>
    </Container>
  );
}

export default GamesPage;

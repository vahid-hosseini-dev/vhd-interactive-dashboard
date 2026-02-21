import { games } from "@/src/types/games.type";
import { Box } from "@chakra-ui/react";

export default async function GamePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/games`);

  const data = await res.json();
  console.log(data);

  if (!data.results || !data.results.length) {
    return <Box>No games found</Box>;
  }

  return (
    <div>
      {data.results.map((game: games) => (
        <div key={game.id}>{game.name}</div>
      ))}
    </div>
  );
}

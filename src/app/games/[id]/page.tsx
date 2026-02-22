import { Container, Heading, Text, Image, Box } from "@chakra-ui/react";

const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;

export default async function GamePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
  const game = await res.json();

  return (
    <Container maxW="container.lg" py={10}>
      <Image
        src={game.background_image}
        alt={game.name}
        borderRadius="lg"
        mb={6}
      />
      <Heading mb={4}>{game.name}</Heading>
      <Text mb={2}>
        <strong>Released:</strong> {game.released}
      </Text>
      <Text mb={2}>
        <strong>Rating:</strong> {game.rating}
      </Text>
      <Box mt={6}>
        <Text>{game.description_raw}</Text>
      </Box>
    </Container>
  );
}

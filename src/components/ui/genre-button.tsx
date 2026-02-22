"use client";

import { Button, HStack } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  initialGenre?: string;
};

export function GenreButton({ initialGenre = "" }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search") || "";
  const currentGenre =
    searchParams.get("genre")?.toLowerCase() || initialGenre.toLowerCase();

  const genres = ["action", "adventure", "strategy"];

  const handleGenre = (genre: string) => {
    const params = new URLSearchParams();

    if (currentSearch) params.set("search", currentSearch);

    if (genre) params.set("genre", genre.toLowerCase());

    router.push(`/games?${params.toString()}`);
  };

  return (
    <HStack mb={5}>
      {genres.map((g) => (
        <Button
          key={g}
          onClick={() => handleGenre(g)}
          rounded="3xl"
          size={{ base: "md", md: "lg" }}
          colorScheme={currentGenre === g ? "blackAlpha" : "gray"}
        >
          {g}
        </Button>
      ))}
      <Button
        key="All"
        onClick={() => handleGenre("")}
        rounded="3xl"
        size={{ base: "md", md: "lg" }}
        colorScheme={currentGenre === "" ? "blackAlpha" : "gray"}
      >
        All
      </Button>
    </HStack>
  );
}

"use client";

import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchProps } from "@/src/types/search.types";

export function Search({ initialValue = "", initialGenre = "" }: SearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (value !== searchParams.get("search")) {
        router.push(`/games?search=${value}&genre=${initialGenre}`);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [value, router, searchParams, initialGenre]);

  return (
    <InputGroup
      minW="full"
      mb={5}
      startElement={<LuSearch size={20} color="gray.500" />}
    >
      <Input
        placeholder="Search games..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputGroup>
  );
}

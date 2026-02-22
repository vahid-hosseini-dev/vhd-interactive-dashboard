"use client";

import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface SearchProps {
  initialValue?: string;
}

export function Search({ initialValue = "" }: SearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (value !== searchParams.get("search")) {
        router.push(`/games?search=${value}`);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [value, router, searchParams]);

  return (
    <InputGroup
      w="full"
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

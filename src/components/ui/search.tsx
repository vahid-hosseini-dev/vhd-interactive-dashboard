"use client";

import { Input, InputGroup } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";

export function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("search") || "");

  const handleSearch = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/games?search=${value}`);
  };
  return (
    <form onSubmit={handleSearch}>
      <InputGroup flex="1" startElement={<LuSearch />}>
        <Input
          placeholder="Search games..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </InputGroup>
    </form>
  );
}

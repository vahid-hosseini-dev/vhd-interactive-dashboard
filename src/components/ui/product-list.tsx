"use client";

import { useState } from "react";
import { Grid, Container, Flex , Box} from "@chakra-ui/react";
import type { Product, Item } from "@/src/types";
import { ProductCard, DropDownSelect } from "@/src/components/ui";

interface Props {
  products: Product[];
  items: Item[];
}

export function ProductList({ products, items }: Props) {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const filteredProducts =
    selectedProducts.length === 0
      ? products
      : products.filter((p) => selectedProducts.includes(p.id.toString()));

  return (
    <Flex gap="4" alignItems="center" direction="column" mt="10">
      <Box bg="gray.100" p="4" rounded="md" w="full" maxW="md" shadow="md" gap="4" display="flex" flexDirection="column" alignItems="center">
        <DropDownSelect
          items={items}
          value={selectedProducts}
          onChange={setSelectedProducts}
        />
      </Box>
      <Container p="5">
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.images[0]}
              alt={product.title}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </Grid>
      </Container>
    </Flex>
  );
}

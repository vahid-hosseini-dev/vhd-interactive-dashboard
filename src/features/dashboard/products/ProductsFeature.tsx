"use client";
import { Grid, Container, Spinner, Center, Text } from "@chakra-ui/react";
import { ProductCard } from "@/src/components/ui";
import { useProducts } from "@/src/hooks/useProducts";

export function ProductFeature() {
  const { products, loading, error } = useProducts();

  if (loading)
    return (
      <Center h="300px">
        <Spinner />
      </Center>
    );

  if (error)
    return (
      <Center h="300px">
        <Text color="red.500">{error}</Text>
      </Center>
    );

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
        {products.map((product) => {
          const { id, title, description, price, images } = product;

          return (
            <ProductCard
              key={id}
              image={images[0]}
              alt={title}
              title={title}
              description={description}
              price={price}
            />
          );
        })}
      </Grid>
    </Container>
  );
}

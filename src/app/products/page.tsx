import { Grid, Container } from "@chakra-ui/react";
import type { Product } from "@/src/types/products.types";
import { ProductCard } from "@/src/components/ui";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });

  return res.json();
}

async function ProductPage() {
  const data = await getProducts();

  return (
    <>
      <Container p="5">
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {data.products.map((product: Product) => {
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
    </>
  );
}

export default ProductPage;

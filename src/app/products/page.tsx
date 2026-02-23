import type { Product , Item } from "@/src/types";
import { ProductList } from "@/src/components/ui";

async function getProducts(): Promise<{ products: Product[] }> {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });

  return res.json();
}

export default async function ProductPage() {
  const data = await getProducts();

  const categories = Array.from(
    new Set(data.products.map((p: Product) => p.category)),
  );

  const items: Item[] = [];

  categories.forEach((cat) => {
    data.products
      .filter((p: Product) => p.category === cat)
      .forEach((p: Product) => {
        items.push({
          label: p.title,
          value: p.id.toString(),
          group: cat,
        });
      });
  });

  return <ProductList products={data.products} items={items} />;
}

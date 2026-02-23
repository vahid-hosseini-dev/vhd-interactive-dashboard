"use client";

import { useState, useEffect } from "react";
import type { Product } from "@/src/types";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        if (isMounted) setProducts(data.products);
      } catch (err) {
        if (isMounted) setError("Failed to fetch products");
        console.error(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return { products, loading, error };
}

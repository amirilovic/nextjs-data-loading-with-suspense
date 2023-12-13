"use client";

import { useEffect, useState } from "react";
import { ProductList, ProductListSkeleton } from "./product-list";
import { Product, fetchProducts } from "../api-client/fetch-products";

export function ProductListWithEffect({ products }: { products?: Product[] }) {
  const [productsState, setProductsState] = useState<Product[] | undefined>(
    products
  );

  useEffect(() => {
    if (!productsState) {
      fetchProducts().then((products) => setProductsState(products));
    }
  }, [productsState]);

  if (!productsState) {
    return <ProductListSkeleton />;
  }

  return <ProductList products={productsState} />;
}



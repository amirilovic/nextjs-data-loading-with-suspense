import { Suspense } from "react";
import { Product, fetchProducts } from "../api-client/fetch-products";
import { ProductList, ProductListSkeleton } from "./product-list";
import { SuspenseIf } from "./suspense-if";

async function ProductListLoader() {
  const products = await fetchProducts();

  return <ProductList products={products} />;
}

export function ProductListWithSuspense({
  products,
}: {
  products?: Product[];
}) {
  return (
    <SuspenseIf condition={!products} fallback={<ProductListSkeleton />}>
      <ProductListLoader />
    </SuspenseIf>
  );
}

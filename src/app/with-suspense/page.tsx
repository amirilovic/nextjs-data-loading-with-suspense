import { ProductListWithSuspense } from "../../components/product-list-with-suspense";
import { Product, fetchProducts } from "../../api-client/fetch-products";
import { isInitialPageLoad } from "../../is-initial-page-load";

export default async function Page() {
  let products: Product[] | undefined;

  // for initial page load we want to preload all the data
  // for client side navigation we want to lazy load the data and show loading state
  if (isInitialPageLoad()) {
    products = await fetchProducts();
  }

  return <ProductListWithSuspense products={products} />;
}

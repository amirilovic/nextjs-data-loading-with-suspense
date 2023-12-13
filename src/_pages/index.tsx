import { Box, ChakraProvider } from "@chakra-ui/react";
import { Product, fetchProducts } from "../api-client/fetch-products";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { ProductListWithEffect } from "../components/product-list-with-effect";

export default function Page({ products }: { products: Product[] }) {
  return (
    <ChakraProvider>
      <Header />
      <Box width="full">
        <ProductListWithEffect products={products} />
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export async function getServerSideProps() {
  const products = await fetchProducts();
  return {
    props: {
      products,
    },
  };
}

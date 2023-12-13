"use client";

import { Box, Center, ChakraProvider, Container } from "@chakra-ui/react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Header />
          <Box width="full">{children}</Box>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}

import React, { use, useEffect } from "react";
import Image from "next/image";
import { HStack, Heading, Skeleton, Text, VStack } from "@chakra-ui/react";
import { Product } from "../api-client/fetch-products";

function ProductCard({ product }: { product?: Product }) {
  return (
    <VStack
      borderRadius="xl"
      borderWidth="1px"
      borderColor="gray.200"
      boxShadow={"md"}
      width="180px"
      padding={2}
      gap={1}
    >
      {product ? (
        <Image
          src={product.image}
          width={158}
          height={200}
          alt={product.title}
          style={{ objectFit: "contain", height: "200px", width: "158px" }}
        />
      ) : (
        <Skeleton height="200px" width="158px" />
      )}
      <VStack gap={1} w="full">
        {product ? (
          <Heading
            fontSize="sm"
            as="h5"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            maxW="150px"
          >
            {product.title}
          </Heading>
        ) : (
          <Skeleton w="full" h="20px" />
        )}
        {product ? (
          <Text>{product.price}</Text>
        ) : (
          <Skeleton w="50px" h="20px" />
        )}
      </VStack>
    </VStack>
  );
}

export function ProductList({ products }: { products: Product[] }) {
  return (
    <HStack width="full" padding={2} overflow="auto" gap={4}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </HStack>
  );
}

export function ProductListSkeleton() {
  return (
    <HStack width="full" padding={2} overflow="auto" gap={4}>
      {Array.from({ length: 10 }).map((_, index) => (
        <ProductCard key={index} />
      ))}
    </HStack>
  );
}

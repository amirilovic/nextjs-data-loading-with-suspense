import { HStack, Heading } from "@chakra-ui/react";

export function Header() {
  return (
    <HStack width="full" height="80px" backgroundColor={"black"}>
      <Heading color="white">Next.js Data Loading</Heading>
    </HStack>
  );
}

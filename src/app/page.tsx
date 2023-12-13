import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js data loading",
};

export default function Page() {
  return (
    <>
      <Text>
        Click on the link below 👇 to havigate to the page on the client side
      </Text>
      <Link href="/with-suspense">🔗 Open with suspense</Link>
    </>
  );
}

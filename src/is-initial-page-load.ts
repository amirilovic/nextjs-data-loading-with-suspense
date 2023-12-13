import { headers } from "next/headers";

export function isInitialPageLoad() {
  return !!headers().get("accept")?.includes("text/html");
}

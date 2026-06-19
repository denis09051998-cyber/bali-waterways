import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/freediving")({
  beforeLoad: () => {
    throw redirect({ to: "/freediving-bali", statusCode: 301 });
  },
});
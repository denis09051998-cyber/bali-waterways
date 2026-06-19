import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/kids-swimming")({
  beforeLoad: () => {
    throw redirect({ to: "/kids-swimming-lessons-bali", statusCode: 301 });
  },
});
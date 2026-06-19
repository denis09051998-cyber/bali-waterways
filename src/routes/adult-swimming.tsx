import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/adult-swimming")({
  beforeLoad: () => {
    throw redirect({ to: "/adult-swimming-lessons-bali", statusCode: 301 });
  },
});
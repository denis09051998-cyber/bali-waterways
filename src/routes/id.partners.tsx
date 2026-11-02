import { createFileRoute } from "@tanstack/react-router";
import { PartnersPage, partnersHead } from "@/components/site/PartnersPage";

export const Route = createFileRoute("/id/partners")({
  head: () => partnersHead("id"),
  component: PartnersPage,
});

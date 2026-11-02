import { createFileRoute } from "@tanstack/react-router";
import { PartnersPage, partnersHead } from "@/components/site/PartnersPage";

export const Route = createFileRoute("/partners")({
  head: () => partnersHead("en"),
  component: PartnersPage,
});

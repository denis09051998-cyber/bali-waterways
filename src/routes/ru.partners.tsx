import { createFileRoute } from "@tanstack/react-router";
import { PartnersPage, partnersHead } from "@/components/site/PartnersPage";

export const Route = createFileRoute("/ru/partners")({
  head: () => partnersHead("ru"),
  component: PartnersPage,
});

import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";

const URL = "https://unityswimmingbali.com/locations/canggu";

export const Route = createFileRoute("/locations/canggu")({
  head: () => ({
    meta: [
      { title: "Swimming Lessons Canggu Bali | Kids & Adults | UNITY" },
      { name: "description", content: "Swimming lessons in Canggu, Bali for kids and adults. Private and personalized swimming training with UNITY Swimming School Bali." },
      { property: "og:title", content: "Swimming Lessons Canggu Bali | Kids & Adults | UNITY" },
      { property: "og:description", content: "Swimming lessons in Canggu, Bali for kids and adults. Private and personalized swimming training with UNITY Swimming School Bali." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Swimming lessons in Canggu, Bali",
        serviceType: "Swimming lessons",
        provider: { "@type": "SportsActivityLocation", name: "UNITY Swimming School Bali", url: "https://unityswimmingbali.com" },
        areaServed: { "@type": "Place", name: "Canggu, Bali, Indonesia" },
        url: URL,
      }),
    }],
  }),
  component: () => <LocationPage slug="canggu" />,
});

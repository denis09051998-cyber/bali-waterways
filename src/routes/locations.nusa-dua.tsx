import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";

const URL = "https://unityswimmingbali.com/locations/nusa-dua";

export const Route = createFileRoute("/locations/nusa-dua")({
  head: () => ({
    meta: [
      { title: "Swimming Lessons Nusa Dua Bali | Kids & Adults | UNITY" },
      { name: "description", content: "Swimming lessons in Nusa Dua, Bali for children and adults with UNITY Swimming School. Professional swimming coaching for different skill levels." },
      { property: "og:title", content: "Swimming Lessons Nusa Dua Bali | Kids & Adults | UNITY" },
      { property: "og:description", content: "Swimming lessons in Nusa Dua, Bali for children and adults with UNITY Swimming School. Professional swimming coaching for different skill levels." },
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
        name: "Swimming lessons in Nusa Dua, Bali",
        serviceType: "Swimming lessons",
        provider: { "@type": "SportsActivityLocation", name: "UNITY Swimming School Bali", url: "https://unityswimmingbali.com" },
        areaServed: { "@type": "Place", name: "Nusa Dua, Bali, Indonesia" },
        url: URL,
      }),
    }],
  }),
  component: () => <LocationPage slug="nusa-dua" />,
});

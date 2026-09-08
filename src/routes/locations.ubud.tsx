import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";

const URL = "https://unityswimmingbali.com/locations/ubud";

export const Route = createFileRoute("/locations/ubud")({
  head: () => ({
    meta: [
      { title: "Swimming Lessons Ubud Bali | Kids & Adults | UNITY" },
      { name: "description", content: "Swimming lessons in Ubud, Bali for kids and adults. Private swimming coaching and personalized training with UNITY Swimming School Bali." },
      { property: "og:title", content: "Swimming Lessons Ubud Bali | Kids & Adults | UNITY" },
      { property: "og:description", content: "Swimming lessons in Ubud, Bali for kids and adults. Private swimming coaching and personalized training with UNITY Swimming School Bali." },
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
        name: "Swimming lessons in Ubud, Bali",
        serviceType: "Swimming lessons",
        provider: { "@type": "SportsActivityLocation", name: "UNITY Swimming School Bali", url: "https://unityswimmingbali.com" },
        areaServed: { "@type": "Place", name: "Ubud, Bali, Indonesia" },
        url: URL,
      }),
    }],
  }),
  component: () => <LocationPage slug="ubud" />,
});

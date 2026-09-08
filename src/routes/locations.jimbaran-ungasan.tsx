import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";

const URL = "https://unityswimmingbali.com/locations/jimbaran-ungasan";

export const Route = createFileRoute("/locations/jimbaran-ungasan")({
  head: () => ({
    meta: [
      { title: "Swimming Lessons Jimbaran & Ungasan Bali | UNITY" },
      { name: "description", content: "Swimming lessons in Jimbaran and Ungasan, Bali for children and adults with professional UNITY swimming coaches." },
      { property: "og:title", content: "Swimming Lessons Jimbaran & Ungasan Bali | UNITY" },
      { property: "og:description", content: "Swimming lessons in Jimbaran and Ungasan, Bali for children and adults with professional UNITY swimming coaches." },
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
        name: "Swimming lessons in Jimbaran and Ungasan, Bali",
        serviceType: "Swimming lessons",
        provider: { "@type": "SportsActivityLocation", name: "UNITY Swimming School Bali", url: "https://unityswimmingbali.com" },
        areaServed: [
          { "@type": "Place", name: "Jimbaran, Bali, Indonesia" },
          { "@type": "Place", name: "Ungasan, Bali, Indonesia" },
        ],
        url: URL,
      }),
    }],
  }),
  component: () => <LocationPage slug="jimbaran-ungasan" />,
});

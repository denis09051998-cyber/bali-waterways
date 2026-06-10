import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionEyebrow, WhatsAppCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Swimming Lessons Bukit, Sanur, Ubud — Unity Swimming Bali" },
      { name: "description", content: "Swimming lessons in Bukit, Sanur, Ubud, Ungasan, Jimbaran, Uluwatu and Nusa Dua. Private villa pool sessions across Bali." },
      { property: "og:title", content: "Swimming Lesson Locations in Bali" },
      { property: "og:description", content: "Lessons in Bukit, Sanur, Ubud, Ungasan, Jimbaran, Uluwatu and Nusa Dua." },
      { property: "og:url", content: "/locations" },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
  }),
  component: Locations,
});

const LOCATIONS = [
  { name: "Swimming lessons in Bukit", text: "We cover the full Bukit peninsula — including Uluwatu, Pecatu, Ungasan, Jimbaran, Kutuh and Nusa Dua. Most lessons happen in private villa pools." },
  { name: "Swimming lessons in Sanur", text: "Sanur's calm waters and family-friendly villas make it one of our favorite teaching environments — especially for kids and beginners." },
  { name: "Swimming lessons in Ubud", text: "Private villa lessons in Ubud's lush jungle setting. Perfect for families staying inland who still want serious coaching." },
  { name: "Swimming lessons in Ungasan", text: "Beautiful clifftop villas with stunning pools — ideal for private adult and kids sessions in Bukit's quietest corner." },
  { name: "Swimming lessons in Jimbaran", text: "Family villas and resort pools in Jimbaran are a great fit for kids lessons and beginner adults." },
  { name: "Swimming lessons in Uluwatu", text: "Uluwatu villa pools by day and ocean confidence sessions for confident swimmers — the full Bali coaching experience." },
  { name: "Swimming lessons in Nusa Dua", text: "Resort and villa lessons in Nusa Dua — calm waters, easy access, perfect for families." },
];

function Locations() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Swimming lessons across Bali — Bukit, Sanur, Ubud."
        subtitle="We come to your villa or partner pool. Private and group lessons across the island's premier areas."
      />
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-20 space-y-6">
        {LOCATIONS.map((loc, i) => (
          <article key={loc.name} className="grid gap-6 rounded-3xl border border-ocean/10 bg-white p-6 sm:p-10 lg:grid-cols-[1fr_2fr] items-center">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-pool/30 via-ocean/20 to-tropical/20" />
            <div>
              <SectionEyebrow>Area {String(i + 1).padStart(2, "0")}</SectionEyebrow>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-ocean">{loc.name}</h2>
              <p className="mt-3 text-ink/70 leading-relaxed">{loc.text}</p>
              <div className="mt-6">
                <WhatsAppCTA message={`Hi Unity! I'd like ${loc.name.toLowerCase()}.`} label="Book on WhatsApp" />
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
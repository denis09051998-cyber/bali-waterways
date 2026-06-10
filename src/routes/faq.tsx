import { createFileRoute } from "@tanstack/react-router";
import { PageHero, WhatsAppCTA } from "@/components/site/CTA";

const FAQS: [string, string][] = [
  ["Do you teach kids?", "Yes — children from age 3 upward. We specialize in gentle, game-based teaching that builds water confidence."],
  ["Do you teach adults?", "Absolutely. Many of our students are adult beginners, returners, or improvers."],
  ["Can you come to our villa?", "Yes — most private lessons happen in our students' own villa pools across Bukit, Sanur and Ubud."],
  ["Do you offer group classes?", "Yes — small groups of 2–4 students of similar level. Siblings and friend groups are very popular."],
  ["Can you help with fear of water?", "Yes. Our Fear of Water program is built specifically for adults and children with water anxiety."],
  ["Do you teach beginners?", "Beginners are the heart of what we do — both kids and adults."],
  ["Do you offer ocean swimming?", "Yes, for confident pool swimmers ready for open water. See our Ocean Swimming page."],
  ["Which areas do you cover?", "Bukit (Uluwatu, Pecatu, Ungasan, Jimbaran, Kutuh, Nusa Dua), Sanur and Ubud."],
  ["How do I book?", "Message us on WhatsApp at +62 821-4723-2648 with your area, age and level — we'll suggest the best format."],
  ["How many lessons are usually needed?", "It depends on age and starting point. Children typically need 6–12 lessons to swim short distances independently. Adults vary widely."],
  ["What should students bring?", "Swimwear, goggles, a towel and a water bottle. We provide any teaching equipment needed."],
  ["Can siblings train together?", "Yes — sibling pairs and small groups are a great option, with special pricing."],
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Unity Swimming School Bali" },
      { name: "description", content: "Frequently asked questions about swimming lessons at Unity Swimming School Bali — kids, adults, locations, formats and booking." },
      { property: "og:title", content: "FAQ — Unity Swimming School Bali" },
      { property: "og:description", content: "Answers about kids, adults, formats, locations and booking lessons." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map(([q, a]) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }),
      },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions." subtitle="Everything you need to know before booking a lesson with Unity Swimming Bali." />
      <section className="mx-auto max-w-3xl px-5 lg:px-10 py-20">
        <div className="space-y-3">
          {FAQS.map(([q, a]) => (
            <details key={q} className="group rounded-xl border border-ocean/10 bg-white p-5">
              <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-ocean">
                {q}<span className="text-pool group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
        <div className="mt-12 rounded-3xl bg-ocean p-8 text-center text-surface">
          <h3 className="font-display text-2xl">Still have a question?</h3>
          <p className="mt-2 text-surface/80">Message us directly on WhatsApp — we usually reply within an hour.</p>
          <div className="mt-6 flex justify-center">
            <WhatsAppCTA message="Hi Unity! I have a question about your swimming lessons." />
          </div>
        </div>
      </section>
    </>
  );
}
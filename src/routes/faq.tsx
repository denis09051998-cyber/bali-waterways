import { createFileRoute } from "@tanstack/react-router";
import { PageHero, WhatsAppCTA } from "@/components/site/CTA";
import { useI18n } from "@/lib/i18n";

const FAQS_EN: [string, string][] = [
  ["What age do you start teaching children?", "From 2 months old with the Head Coach. We specialize in gentle, play-based learning."],
  ["Do you teach adults?", "Yes. Many of our students are adult beginners or swimmers looking to improve their technique."],
  ["Can you come to our villa?", "Yes — most private lessons happen in our students' own villa pools across Bukit, Sanur, Ubud and Canggu."],
  ["Do you offer group classes?", "Yes — small groups of 4–6 students of a similar level. Very popular for families and friends."],
  ["Can you help with fear of water?", "Yes. Our Fear of Water program is built specifically for adults and children."],
  ["Do you teach beginners?", "Beginners are the heart of what we do — both kids and adults."],
  ["Do you offer ocean swimming?", "Yes, for confident pool swimmers ready for open water, as well as beginners who would like to try it under close supervision from a coach."],
  ["Which areas do you cover?", "Bukit, Sanur, Ubud and Canggu."],
  ["How do I book?", "Message us on WhatsApp at +62 821-4723-2648 or use our booking form."],
  ["How many lessons are usually needed?", "It depends on age and starting point. Children typically need 6–12 lessons."],
  ["What should students bring?", "Swimwear, goggles, a towel and a water bottle."],
  ["Can siblings train together?", "Yes — sibling pairs and small groups are a great option."],
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — UNITY Swimming School Bali" },
      { name: "description", content: "Frequently asked questions about swimming lessons at UNITY Swimming School Bali — kids, adults, locations, formats and booking." },
      { property: "og:title", content: "FAQ — UNITY Swimming School Bali" },
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
          mainEntity: FAQS_EN.map(([q, a]) => ({
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
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("faq.eyebrow")} title={t("faq.title")} subtitle={t("faq.sub")} />
      <section className="mx-auto max-w-3xl px-5 lg:px-10 py-20">
        <div className="space-y-3">
          {[1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
            <details key={i} className="group rounded-xl border border-ocean/10 bg-white p-5">
              <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-ocean">
                {t(`faq.q${i}`)}<span className="text-pool group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">{t(`faq.a${i}`)}</p>
            </details>
          ))}
        </div>
        <div className="mt-12 rounded-3xl bg-ocean p-8 text-center text-surface">
          <h3 className="font-display text-2xl">{t("faq.stillQ")}</h3>
          <p className="mt-2 text-surface/80">{t("faq.stillQSub")}</p>
          <div className="mt-6 flex justify-center">
            <WhatsAppCTA message={t("faq.msg")} />
          </div>
        </div>
      </section>
    </>
  );
}

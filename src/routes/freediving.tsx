import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionEyebrow, WhatsAppCTA } from "@/components/site/CTA";
import { useI18n } from "@/lib/i18n";
import freediveImg from "@/assets/ph_freedive.jpg.asset.json";
import underwaterImg from "@/assets/ph_underwater.jpg.asset.json";

export const Route = createFileRoute("/freediving")({
  head: () => ({
    meta: [
      { title: "Freediving Bali — Breath-hold Courses & Ocean Sessions | Unity" },
      { name: "description", content: "Freediving lessons in Bali for beginners and improvers. Breath-hold techniques, relaxation, equalization and safe ocean practice with certified-style coaching." },
      { name: "keywords", content: "freediving Bali, freediving lessons Bali, breath hold Bali, Unity Swimming School" },
      { property: "og:title", content: "Freediving in Bali — Unity Swimming School" },
      { property: "og:description", content: "Beginner freediving courses in Bali. Breath-hold, relaxation, ocean safety." },
      { property: "og:url", content: "/freediving" },
      { property: "og:image", content: freediveImg.url },
      { name: "twitter:image", content: freediveImg.url },
    ],
    links: [{ rel: "canonical", href: "/freediving" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Freediving Bali — Beginner Course",
        description: "Learn breath-hold, relaxation, equalization and ocean safety with Unity Swimming School in Bali.",
        provider: { "@type": "Organization", name: "Unity Swimming School Bali" },
      }),
    }],
  }),
  component: Freediving,
});

function Freediving() {
  const { t } = useI18n();
  const blocks: [string, string][] = [
    ["Beginner freediving", "Never held your breath underwater? Our intro course is built for first-timers — gentle, patient, no equipment knowledge required."],
    ["Breath-hold techniques", "Static apnea, CO2 and O2 tables, recovery breathing — the foundations of safe breath-hold practice."],
    ["Relaxation & water confidence", "Freediving is 80% relaxation. We rebuild your relationship with breath, water and stillness."],
    ["Equalization", "Frenzel and mouthfill techniques explained simply, with dry-land drills before you ever descend."],
    ["Ocean practice sessions", "Once foundations click, we move to Bali's clear coastal waters. Always with safety buddies and surface protocols."],
    ["Safety procedures", "Buddy systems, hand signals, blackout recognition and rescue posture — non-negotiable in every session."],
    ["Private freediving lessons", "One-on-one or small group, fully personalised pace and goals — from first breath-hold to 20m+ depths."],
  ];
  return (
    <>
      <PageHero eyebrow={t("fd.eyebrow")} title={t("fd.title")} subtitle={t("fd.sub")} />
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <img src={freediveImg.url} alt="Freediver descending in clear blue ocean" className="aspect-[4/5] w-full rounded-3xl object-cover" loading="lazy" />
          <img src={underwaterImg.url} alt="Underwater seagrass and swimmers" className="aspect-[4/5] w-full rounded-3xl object-cover" loading="lazy" />
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-5 lg:px-10 pb-20 space-y-10">
        {blocks.map(([h, b]) => (
          <div key={h}>
            <h2 className="font-display text-2xl font-semibold text-ocean">{h}</h2>
            <p className="mt-3 text-ink/70 leading-relaxed">{b}</p>
          </div>
        ))}
        <div className="rounded-3xl bg-ocean p-8 text-center text-surface">
          <SectionEyebrow>Start your freediving journey</SectionEyebrow>
          <h3 className="mt-2 font-display text-2xl">{t("cta.start")}</h3>
          <p className="mt-2 text-surface/80 text-sm">{t("cta.startSub")}</p>
          <div className="mt-6 flex justify-center">
            <WhatsAppCTA message="Hi Unity! I'd like to learn freediving in Bali." label={t("cta.book")} />
          </div>
        </div>
      </section>
    </>
  );
}
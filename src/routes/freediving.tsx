import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionEyebrow, WhatsAppCTA } from "@/components/site/CTA";
import { useI18n } from "@/lib/i18n";
import freediveImg from "@/assets/ph_freediving_v2.jpg.asset.json";
import oceanImg from "@/assets/ph_ocean.jpg.asset.json";

export const Route = createFileRoute("/freediving")({
  head: () => ({
    meta: [
      { title: "Freediving Bali — Breath-hold Courses & Ocean Sessions | UNITY" },
      { name: "description", content: "Freediving lessons in Bali for beginners and improvers. Breath-hold techniques, relaxation, equalization and safe ocean practice with certified-style coaching." },
      { name: "keywords", content: "freediving Bali, freediving lessons Bali, breath hold Bali, UNITY Swimming School" },
      { property: "og:title", content: "Freediving in Bali — UNITY Swimming School" },
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
        description: "Learn breath-hold, relaxation, equalization and ocean safety with UNITY Swimming School in Bali.",
        provider: { "@type": "Organization", name: "UNITY Swimming School Bali" },
      }),
    }],
  }),
  component: Freediving,
});

function Freediving() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("fd.eyebrow")} title={t("fd.title")} subtitle={t("fd.sub")} />
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <img src={freediveImg.url} alt="Freediver descending in clear blue ocean" className="aspect-[4/5] w-full rounded-3xl object-cover" loading="lazy" />
          <img src={oceanImg.url} alt="Swimmers and seagrass in clear ocean water" className="aspect-[4/5] w-full rounded-3xl object-cover" loading="lazy" />
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-5 lg:px-10 pb-20 space-y-10">
        {[1,2,3,4,5,6,7].map((i) => (
          <div key={i}>
            <h2 className="font-display text-2xl font-semibold text-ocean">{t(`fd.b${i}.t`)}</h2>
            <p className="mt-3 text-ink/70 leading-relaxed">{t(`fd.b${i}.d`)}</p>
          </div>
        ))}
        <div className="rounded-3xl bg-ocean p-8 text-center text-surface">
          <SectionEyebrow>{t("fd.ctaEyebrow")}</SectionEyebrow>
          <h3 className="mt-2 font-display text-2xl">{t("cta.start")}</h3>
          <p className="mt-2 text-surface/80 text-sm">{t("cta.startSub")}</p>
          <div className="mt-6 flex justify-center">
            <WhatsAppCTA message={t("fd.msg")} label={t("cta.book")} />
          </div>
        </div>
      </section>
    </>
  );
}

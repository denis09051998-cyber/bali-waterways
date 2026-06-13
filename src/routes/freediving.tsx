import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionEyebrow, BookingCTA } from "@/components/site/CTA";
import { useI18n } from "@/lib/i18n";
import freediveImg from "@/assets/ph_freediving_hero.jpg.asset.json";
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
      {/* Hero — full-bleed freediving image */}
      <section className="relative min-h-[80vh] overflow-hidden text-surface flex items-end">
        <img src={freediveImg.url} alt="Freediver descending into deep blue ocean" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean/40 via-ocean/30 to-ocean/85" />
        <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-10 pb-16 pt-32 sm:pb-24 sm:pt-40">
          <p className="text-[11px] font-semibold tracking-[0.25em] text-surface/85 uppercase">{t("fd.eyebrow")}</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-balance">
            {t("fd.title")}
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-surface/85 text-pretty">{t("fd.sub")}</p>
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-pool px-5 py-3 text-sm font-semibold text-surface hover:bg-surface hover:text-ocean transition-colors">
              {t("cta.bookLesson")}
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 lg:px-10 py-16">
        <img src={oceanImg.url} alt="Swimmers and seagrass in clear ocean water" className="aspect-[16/9] w-full rounded-3xl object-cover" loading="lazy" />
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
            <BookingCTA label={t("cta.bookLesson")} />
          </div>
        </div>
      </section>
    </>
  );
}

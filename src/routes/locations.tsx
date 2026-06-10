import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionEyebrow, WhatsAppCTA } from "@/components/site/CTA";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Swimming Lessons Bukit, Sanur, Ubud, Canggu — UNITY Swimming Bali" },
      { name: "description", content: "Swimming lessons in Bukit, Sanur, Ubud and Canggu. Private villa pool sessions across Bali — Ungasan, Jimbaran, Uluwatu, Nusa Dua included." },
      { name: "keywords", content: "swimming lessons Bukit, swimming lessons Sanur, swimming lessons Ubud, swimming lessons Canggu, private swimming lessons Bali" },
      { property: "og:title", content: "Swimming Lesson Locations in Bali" },
      { property: "og:description", content: "Lessons in Bukit, Sanur, Ubud and Canggu." },
      { property: "og:url", content: "/locations" },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
  }),
  component: Locations,
});

const LOCATIONS = [
  { k: "bukit" },
  { k: "sanur" },
  { k: "ubud" },
  { k: "canggu" },
] as const;

function Locations() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("loc.eyebrow")} title={t("loc.title")} subtitle={t("loc.sub")} />
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-20 space-y-6">
        {LOCATIONS.map((loc, i) => (
          <article key={loc.k} className="grid gap-6 rounded-3xl border border-ocean/10 bg-white p-6 sm:p-10 lg:grid-cols-[1fr_2fr] items-center">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-pool/30 via-ocean/20 to-tropical/20" />
            <div>
              <SectionEyebrow>{t("loc.areaLabel")} {String(i + 1).padStart(2, "0")}</SectionEyebrow>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-ocean">{t(`loc.${loc.k}.t`)}</h2>
              <p className="mt-3 text-ink/70 leading-relaxed">{t(`loc.${loc.k}.d`)}</p>
              <div className="mt-6">
                <WhatsAppCTA message={`Hi UNITY! I'd like ${t(`loc.${loc.k}.t`).toLowerCase()}.`} label={t("loc.bookOnWa")} />
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionEyebrow } from "@/components/site/CTA";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/prices")({
  head: () => ({
    meta: [
      { title: "Prices — UNITY Swimming School Bali" },
      { name: "description", content: "Transparent pricing for adult swimming lessons in Bali. Single sessions and 8-lesson packs. Contact us for kids and freediving pricing." },
      { property: "og:title", content: "Prices — UNITY Swimming School Bali" },
      { property: "og:description", content: "Transparent pricing for swimming lessons in Bali." },
      { property: "og:url", content: "/prices" },
    ],
    links: [{ rel: "canonical", href: "/prices" }],
  }),
  component: Prices,
});

function Prices() {
  const { t } = useI18n();
  const rows = [
    { label: t("ad.price.g.t"), price: t("ad.price.g.p") },
    { label: t("ad.price.g.pack"), price: "2 MLN IDR" },
    { label: t("ad.price.p45.t"), price: t("ad.price.p45.p") },
    { label: t("ad.price.p45.pack"), price: "4.2 MLN IDR" },
    { label: t("ad.price.p60.t"), price: t("ad.price.p60.p") },
    { label: t("ad.price.p60.pack"), price: "5 MLN IDR" },
  ];
  return (
    <>
      <PageHero eyebrow={t("pr.eyebrow")} title={t("pr.title")} subtitle={t("pr.sub")} />
      <section className="mx-auto max-w-2xl px-5 lg:px-10 py-12 sm:py-16">
        <SectionEyebrow>{t("ad.price.header")}</SectionEyebrow>
        <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-ocean">{t("ad.price.title")}</h2>
        <div className="mt-6 space-y-1">
          {rows.map((row, i) => (
            <div key={i} className="flex items-baseline gap-2 py-2">
              <span className="text-sm text-ink/80 shrink-0">{row.label}</span>
              <span className="flex-1 border-b border-dotted border-ink/20 self-end mb-1.5 min-w-[1rem]" />
              <span className="text-sm font-semibold text-pool whitespace-nowrap">{row.price}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink/65 leading-relaxed">{t("pr.contactNote")}</p>
        <div className="mt-6">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-pool px-5 py-3 text-sm font-semibold text-surface hover:bg-ocean">{t("cta.bookLesson")}</Link>
        </div>
      </section>
    </>
  );
}
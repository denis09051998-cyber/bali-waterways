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
  const adultRows = [
    { label: t("ad.price.g.t"), price: t("ad.price.g.p") },
    { label: t("ad.price.g.pack"), price: "2 MLN IDR" },
    { label: t("ad.price.p45.t"), price: t("ad.price.p45.p") },
    { label: t("ad.price.p45.pack"), price: "4.2 MLN IDR" },
    { label: t("ad.price.p60.t"), price: t("ad.price.p60.p") },
    { label: t("ad.price.p60.pack"), price: "5 MLN IDR" },
  ];
  const kidsRows = [
    { label: t("pr.kids.g.t"), price: t("pr.kids.g.p") },
    { label: t("pr.kids.g.pack"), price: t("pr.kids.g.packP") },
    { label: t("pr.kids.p30.t"), price: t("pr.kids.p30.p") },
    { label: t("pr.kids.p30.pack"), price: t("pr.kids.p30.packP") },
    { label: t("pr.kids.p45.t"), price: t("pr.kids.p45.p") },
    { label: t("pr.kids.p45.pack"), price: t("pr.kids.p45.packP") },
    { label: t("pr.kids.villa.t"), price: t("pr.kids.villa.p") },
    { label: t("pr.kids.villa.pack"), price: t("pr.kids.villa.packP") },
  ];
  const fdRows = [
    { label: t("pr.fd.t"), price: t("pr.fd.p") },
  ];
  const PriceList = ({ rows }: { rows: { label: string; price: string }[] }) => (
    <div className="mt-4 space-y-1">
      {rows.map((row, i) => (
        <div key={i} className="flex items-baseline gap-2 py-2">
          <span className="text-sm text-ink/80 shrink-0">{row.label}</span>
          <span className="flex-1 border-b border-dotted border-ink/20 self-end mb-1.5 min-w-[1rem]" />
          <span className="text-sm font-semibold text-pool whitespace-nowrap">{row.price}</span>
        </div>
      ))}
    </div>
  );
  return (
    <>
      <PageHero eyebrow={t("pr.eyebrow")} title={t("pr.title")} subtitle={t("pr.sub")} />
      <section className="mx-auto max-w-2xl px-5 lg:px-10 py-12 sm:py-16 space-y-10">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ocean">{t("ad.price.header")}</h2>
          <PriceList rows={adultRows} />
        </div>
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ocean">{t("pr.kids.header")}</h2>
          <PriceList rows={kidsRows} />
        </div>
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ocean">{t("pr.fd.header")}</h2>
          <PriceList rows={fdRows} />
        </div>
        <p className="text-xs text-ink/55 leading-relaxed">{t("pr.cancel")}</p>
        <div className="rounded-2xl border border-ocean/10 bg-sand/40 p-6 sm:p-8">
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-ocean">{t("pr.trial.title")}</h3>
          <ul className="mt-4 space-y-2 text-ink/80">
            {[1,2].map((i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 size-1.5 rounded-full bg-pool shrink-0" />
                <span className="leading-relaxed">{t(`pr.trial.li${i}`)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-ink/70 leading-relaxed">{t("pr.trial.body")}</p>
          <p className="mt-3 text-sm text-ink/70 leading-relaxed">{t("pr.trial.body2")}</p>
          <div className="mt-6">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-pool px-5 py-3 text-sm font-semibold text-surface hover:bg-ocean">{t("pr.trial.cta")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
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
  const adultGroups = [
    [
      { label: t("ad.price.g.t"), price: t("ad.price.g.p") },
      { label: t("ad.price.g.pack"), price: t("ad.price.g.packP"), strong: true },
    ],
    [
      { label: t("ad.price.p45.t"), price: t("ad.price.p45.p") },
      { label: t("ad.price.p45.pack"), price: t("ad.price.p45.packP"), strong: true },
    ],
    [
      { label: t("ad.price.p60.t"), price: t("ad.price.p60.p") },
      { label: t("ad.price.p60.pack"), price: t("ad.price.p60.packP"), strong: true },
    ],
    [
      { label: t("ad.price.villa.t"), price: t("ad.price.villa.p") },
      { label: t("ad.price.villa.pack"), price: t("ad.price.villa.packP"), strong: true },
    ],
  ];
  const kidsGroups = [
    [
      { label: t("pr.kids.g.t"), price: t("pr.kids.g.p") },
      { label: t("pr.kids.g.pack"), price: t("pr.kids.g.packP"), strong: true },
    ],
    [
      { label: t("pr.kids.p30.t"), price: t("pr.kids.p30.p") },
      { label: t("pr.kids.p30.pack"), price: t("pr.kids.p30.packP"), strong: true },
    ],
    [
      { label: t("pr.kids.p45.t"), price: t("pr.kids.p45.p") },
      { label: t("pr.kids.p45.pack"), price: t("pr.kids.p45.packP"), strong: true },
    ],
    [
      { label: t("pr.kids.villa.t"), price: t("pr.kids.villa.p") },
      { label: t("pr.kids.villa.pack"), price: t("pr.kids.villa.packP"), strong: true },
    ],
  ];
  const fdGroups = [[{ label: t("pr.fd.t"), price: t("pr.fd.p") }]];
  type Row = { label: string; price: string; strong?: boolean };
  const PriceList = ({ groups }: { groups: Row[][] }) => (
    <div className="mt-6 space-y-6">
      {groups.map((rows, gi) => (
        <div key={gi} className="space-y-1">
          {rows.map((row, i) => (
            <div key={i} className="flex items-baseline justify-between gap-4">
              <span className={`text-sm sm:text-base ${row.strong ? "font-semibold text-ink" : "text-ink/80"}`}>{row.label}</span>
              <span className={`text-sm sm:text-base whitespace-nowrap text-right ${row.strong ? "font-semibold text-ocean" : "text-pool"}`}>{row.price}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
  return (
    <>
      <PageHero eyebrow={t("pr.eyebrow")} title={t("pr.title")} subtitle={t("pr.sub")} />
      <section className="mx-auto max-w-2xl px-5 lg:px-10 py-12 sm:py-16 space-y-12">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ocean uppercase tracking-wide">{t("pr.kids.header")}</h2>
          <PriceList groups={kidsGroups} />
        </div>
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ocean uppercase tracking-wide">{t("ad.price.header")}</h2>
          <PriceList groups={adultGroups} />
        </div>
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ocean uppercase tracking-wide">{t("pr.fd.header")}</h2>
          <PriceList groups={fdGroups} />
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
            <Link to="/contact" data-fbq-lead="" className="inline-flex items-center justify-center rounded-full bg-pool px-5 py-3 text-sm font-semibold text-surface hover:bg-ocean">{t("pr.trial.cta")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
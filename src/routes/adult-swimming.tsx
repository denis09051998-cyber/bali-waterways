import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionEyebrow, WhatsAppCTA } from "@/components/site/CTA";
import { useI18n } from "@/lib/i18n";
import phOcean from "@/assets/ph_ocean.jpg.asset.json";

export const Route = createFileRoute("/adult-swimming")({
  head: () => ({
    meta: [
      { title: "Adult Swimming Lessons Bali — Learn to Swim & Private Coach | UNITY" },
      { name: "description", content: "Adult swimming lessons in Bali. Beginners, fear of water, breathing, technique and endurance with a private swimming coach in Bukit, Sanur, Ubud, Canggu." },
      { name: "keywords", content: "adult swimming lessons Bali, learn to swim Bali, private swimming lessons Bali, fear of water Bali" },
      { property: "og:title", content: "Adult Swimming Lessons in Bali" },
      { property: "og:description", content: "Learn to swim Bali — adult beginners, fear of water, technique and endurance coaching." },
      { property: "og:url", content: "/adult-swimming" },
    ],
    links: [{ rel: "canonical", href: "/adult-swimming" }],
  }),
  component: Adults,
});

function Adults() {
  const { t } = useI18n();

  const priceRows = [
    { label: t("ad.price.g.t"), price: t("ad.price.g.p") },
    { label: t("ad.price.g.pack"), price: "2 MLN IDR" },
    { label: t("ad.price.p45.t"), price: t("ad.price.p45.p") },
    { label: t("ad.price.p45.pack"), price: "4.2 MLN IDR" },
    { label: t("ad.price.p60.t"), price: t("ad.price.p60.p") },
    { label: t("ad.price.p60.pack"), price: "5 MLN IDR" },
  ];

  return (
    <>
      <PageHero eyebrow={t("ad.eyebrow")} title={t("ad.title")} subtitle={t("ad.sub")} />

      {/* Who these lessons are for */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-12 sm:py-16">
        <div className="max-w-3xl">
          <SectionEyebrow>{t("ad.eyebrow")}</SectionEyebrow>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-ocean">{t("ad.who.title")}</h2>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-ocean/10 bg-white p-4 sm:p-5">
              <h3 className="font-display text-base font-semibold text-ocean">{t(`ad.who.${i}.t`)}</h3>
              <p className="mt-1.5 text-sm text-ink/70 leading-relaxed">{t(`ad.who.${i}.d`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-ocean/5 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="max-w-3xl">
            <SectionEyebrow>UNITY</SectionEyebrow>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-ocean">{t("ad.exp.title")}</h2>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <li key={i} className="flex items-start gap-2.5 rounded-xl bg-white p-3.5 border border-ocean/10">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pool text-surface text-[10px] font-bold">✓</span>
                <span className="text-sm font-medium text-ink/85">{t(`ad.exp.${i}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Location & Schedule */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-12 sm:py-16">
        <div className="max-w-3xl">
          <SectionEyebrow>UNITY</SectionEyebrow>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-ocean">{t("ad.loc.title")}</h2>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-ocean/10 shadow-sm">
          <iframe
            title="UNITY Swimming locations on Bali"
            src="https://maps.google.com/maps?q=Bukit%20Bali%7CSanur%20Bali%7CUbud%20Bali%7CCanggu%20Bali&z=10&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[260px] w-full sm:h-[340px]"
            allowFullScreen
          />
        </div>
        <p className="mt-2 text-xs text-ink/60">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Bukit+Sanur+Ubud+Canggu+Bali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pool hover:underline"
          >
            Открыть в Google Maps →
          </a>
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-ocean/10 bg-white p-4 sm:p-5">
            <h3 className="font-display text-base font-semibold text-ocean">{t("ad.loc.indiv.t")}</h3>
            <p className="mt-1.5 text-sm text-ink/70">Bukit • Sanur • Ubud • Canggu • Villa visit</p>
          </div>
          <div className="rounded-2xl border border-ocean/10 bg-white p-4 sm:p-5">
            <h3 className="font-display text-base font-semibold text-ocean">{t("ad.loc.group.t")}</h3>
            <p className="mt-1.5 text-sm text-ink/70">Bukit</p>
            <p className="mt-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-pool">{t("ad.loc.scheduleTitle")}</p>
            <ul className="mt-1.5 space-y-0.5 text-sm font-medium text-ink/85">
              <li>{t("ad.loc.s1")}</li>
              <li>{t("ad.loc.s2")}</li>
              <li>{t("ad.loc.s3")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing — compact list */}
      <section className="bg-ocean/5 py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-5 lg:px-10">
          <SectionEyebrow>{t("ad.price.header")}</SectionEyebrow>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-ocean">{t("ad.price.title")}</h2>
          <ul className="mt-6 divide-y divide-ocean/10 rounded-2xl border border-ocean/10 bg-white">
            {priceRows.map((row, i) => (
              <li key={i} className="flex items-baseline justify-between gap-4 px-4 py-3 sm:px-5">
                <span className="text-sm text-ink/80">{row.label}</span>
                {row.price && (
                  <span className="font-display text-sm font-semibold text-pool whitespace-nowrap">{row.price}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-5xl px-5 lg:px-10 py-12 sm:py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ocean via-ocean to-pool p-8 sm:p-12 text-center text-surface shadow-2xl">
          <img src={phOcean.url} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="relative">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold">{t("ad.ctaTitle")}</h3>
            <p className="mt-3 mx-auto max-w-2xl text-sm sm:text-base text-surface/85 leading-relaxed">{t("ad.ctaBody")}</p>
            <div className="mt-6 flex justify-center">
              <WhatsAppCTA message={t("ad.msg")} label={t("cta.book")} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

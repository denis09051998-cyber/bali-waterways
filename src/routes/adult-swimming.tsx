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
  return (
    <>
      <PageHero eyebrow={t("ad.eyebrow")} title={t("ad.title")} subtitle={t("ad.sub")} />

      {/* Who these lessons are for */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-20">
        <div className="max-w-3xl">
          <SectionEyebrow>{t("ad.eyebrow")}</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ocean">{t("ad.who.title")}</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-3xl border border-ocean/10 bg-white p-6 transition-shadow hover:shadow-lg">
              <h3 className="font-display text-lg font-semibold text-ocean">{t(`ad.who.${i}.t`)}</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">{t(`ad.who.${i}.d`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-ocean/5 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="max-w-3xl">
            <SectionEyebrow>UNITY</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ocean">{t("ad.exp.title")}</h2>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <li key={i} className="flex items-start gap-3 rounded-2xl bg-white p-5 border border-ocean/10">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pool text-surface text-xs font-bold">✓</span>
                <span className="text-sm font-medium text-ink/85">{t(`ad.exp.${i}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Location & Schedule */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-20">
        <div className="max-w-3xl">
          <SectionEyebrow>UNITY</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ocean">{t("ad.loc.title")}</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-ocean/10 bg-white p-6">
            <h3 className="font-display text-lg font-semibold text-ocean">{t("ad.loc.indiv.t")}</h3>
            <p className="mt-2 text-sm text-ink/70 leading-relaxed">{t("ad.loc.indiv.d")}</p>
          </div>
          <div className="rounded-3xl border border-ocean/10 bg-white p-6">
            <h3 className="font-display text-lg font-semibold text-ocean">{t("ad.loc.group.t")}</h3>
            <p className="mt-2 text-sm text-ink/70 leading-relaxed">{t("ad.loc.group.d")}</p>
          </div>
          <div className="rounded-3xl border border-ocean/20 bg-gradient-to-br from-ocean to-pool p-6 text-surface">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-surface/80">{t("ad.loc.scheduleTitle")}</p>
            <ul className="mt-4 space-y-2 text-sm font-medium">
              <li>{t("ad.loc.s1")}</li>
              <li>{t("ad.loc.s2")}</li>
              <li>{t("ad.loc.s3")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-ocean/5 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="max-w-3xl">
            <SectionEyebrow>{t("ad.price.header")}</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ocean">{t("ad.price.title")}</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { t: t("ad.price.g.t"), p: t("ad.price.g.p"), pack: t("ad.price.g.pack") },
              { t: t("ad.price.p45.t"), p: t("ad.price.p45.p"), pack: t("ad.price.p45.pack"), featured: true },
              { t: t("ad.price.p60.t"), p: t("ad.price.p60.p"), pack: t("ad.price.p60.pack") },
            ].map((card, i) => (
              <div
                key={i}
                className={`flex flex-col rounded-3xl border p-8 ${
                  card.featured
                    ? "border-pool bg-white shadow-xl ring-2 ring-pool/20"
                    : "border-ocean/10 bg-white"
                }`}
              >
                <h3 className="font-display text-lg font-semibold text-ocean">{card.t}</h3>
                <p className="mt-4 font-display text-3xl font-bold text-pool">{card.p}</p>
                <p className="mt-3 text-sm text-ink/70">{card.pack}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-5xl px-5 lg:px-10 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ocean via-ocean to-pool p-10 sm:p-14 text-center text-surface shadow-2xl">
          <img src={phOcean.url} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="relative">
            <h3 className="font-display text-3xl sm:text-4xl font-semibold">{t("ad.ctaTitle")}</h3>
            <p className="mt-4 mx-auto max-w-2xl text-surface/85 leading-relaxed">{t("ad.ctaBody")}</p>
            <div className="mt-8 flex justify-center">
              <WhatsAppCTA message={t("ad.msg")} label={t("cta.book")} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

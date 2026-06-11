import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionEyebrow, WhatsAppCTA } from "@/components/site/CTA";
import { useI18n } from "@/lib/i18n";
import phAdults from "@/assets/ph_adults.jpg.asset.json";
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
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-3xl border border-ocean/10 bg-white p-6 transition-shadow hover:shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pool/10 font-display text-lg font-bold text-pool">
                {String(i).padStart(2, "0")}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ocean">{t(`ad.who.${i}.t`)}</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">{t(`ad.who.${i}.d`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What you will learn */}
      <section className="bg-ocean/5 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
            <img
              src={phAdults.url}
              alt={t("ad.learn.title")}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
            />
            <div>
              <SectionEyebrow>UNITY</SectionEyebrow>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ocean">{t("ad.learn.title")}</h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i}>
                    <p className="font-display text-base font-semibold text-ocean">{t(`ad.l${i}.t`)}</p>
                    <p className="mt-1 text-sm text-ink/70 leading-relaxed">{t(`ad.l${i}.d`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why adults choose UNITY */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-20">
        <div className="max-w-3xl">
          <SectionEyebrow>UNITY</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ocean">{t("ad.why.title")}</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="rounded-3xl border border-ocean/10 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-ocean">{t(`ad.w${i}.t`)}</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">{t(`ad.w${i}.d`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common results */}
      <section className="bg-ocean/5 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="max-w-3xl">
            <SectionEyebrow>Results</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ocean">{t("ad.res.title")}</h2>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <li key={i} className="flex items-start gap-3 rounded-2xl bg-white p-5 border border-ocean/10">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pool text-surface text-xs font-bold">✓</span>
                <span className="text-sm font-medium text-ink/85">{t(`ad.r${i}`)}</span>
              </li>
            ))}
          </ul>
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

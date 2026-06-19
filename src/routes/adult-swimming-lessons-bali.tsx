import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionEyebrow, BookingCTA } from "@/components/site/CTA";
import { useI18n } from "@/lib/i18n";
import phOcean from "@/assets/ph_ocean.jpg.asset.json";

export const Route = createFileRoute("/adult-swimming-lessons-bali")({
  head: () => ({
    meta: [
      { title: "Adult Swimming Lessons Bali | Unity Swimming School" },
      { name: "description", content: "Adult swimming lessons in Bali for beginners, swimmers who want to improve technique, and people who want to feel confident in the water. Private and group swimming classes by Unity Swimming School." },
      { name: "keywords", content: "adult swimming lessons Bali, learn to swim Bali, private swimming lessons Bali, private swimming coach Bali, fear of water Bali, swimming lessons Jimbaran, swimming lessons Ungasan, swimming lessons Nusa Dua" },
      { property: "og:title", content: "Adult Swimming Lessons Bali | Unity Swimming School" },
      { property: "og:description", content: "Adult swimming lessons in Bali — beginners, technique, confidence. Private and group classes by Unity Swimming School." },
      { property: "og:url", content: "https://unityswimmingbali.com/adult-swimming-lessons-bali" },
    ],
    links: [
      { rel: "canonical", href: "https://unityswimmingbali.com/adult-swimming-lessons-bali" },
      { rel: "alternate", hrefLang: "en", href: "https://unityswimmingbali.com/adult-swimming-lessons-bali" },
      { rel: "alternate", hrefLang: "ru", href: "https://unityswimmingbali.com/ru/adult-swimming-lessons-bali" },
      { rel: "alternate", hrefLang: "id", href: "https://unityswimmingbali.com/id/adult-swimming-lessons-bali" },
      { rel: "alternate", hrefLang: "x-default", href: "https://unityswimmingbali.com/adult-swimming-lessons-bali" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Do you offer adult swimming lessons in Bali?", acceptedAnswer: { "@type": "Answer", text: "Yes. Unity Swimming School Bali offers swimming lessons for adults across Bali — beginners, intermediate swimmers, and people working on technique." } },
          { "@type": "Question", name: "Can complete beginner adults learn to swim with you?", acceptedAnswer: { "@type": "Answer", text: "Yes. Many of our adult students start from zero. We focus on breathing, floating, and water confidence before introducing strokes." } },
          { "@type": "Question", name: "Can you help me improve my swimming technique?", acceptedAnswer: { "@type": "Answer", text: "Yes. Our coaches work on freestyle, breaststroke and backstroke technique, breathing patterns, and efficiency for swimmers who already know the basics." } },
          { "@type": "Question", name: "Do you offer private and group adult classes?", acceptedAnswer: { "@type": "Answer", text: "Yes. We offer 1-on-1 private adult swimming lessons and small group classes. Private lessons are best for fast progress or specific goals." } },
          { "@type": "Question", name: "I am afraid of water. Can you still help me?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. We regularly work with adults who are afraid of water. Lessons begin in shallow water with calm, step-by-step exercises to build trust and confidence." } },
          { "@type": "Question", name: "How do I book an adult swimming lesson?", acceptedAnswer: { "@type": "Answer", text: "Book directly via WhatsApp at +62 821-4723-2648. We will confirm location, coach, and schedule." } },
        ],
      }),
    }],
  }),
  component: Adults,
});

export function Adults() {
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

      {/* Health */}
      <section className="mx-auto max-w-3xl px-5 lg:px-10 py-12 sm:py-16">
        <div className="rounded-2xl border border-ocean/10 bg-white p-5 sm:p-6">
            <h3 className="font-display text-lg sm:text-xl font-semibold text-ocean">{t("ad.health.title")}</h3>
            <p className="mt-3 text-sm text-ink/75 leading-relaxed">{t("ad.health.lead")}</p>
            <p className="mt-4 text-sm font-semibold text-ocean">{t("ad.health.fit")}</p>
            <ul className="mt-2 space-y-1.5 text-sm text-ink/80">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-2 size-1.5 rounded-full bg-pool shrink-0" />
                  <span>{t(`ad.health.f${i}`)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-medium text-pool">{t("ad.health.foot")}</p>
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
            title="UNITY Swimming School Bali on Google Maps"
            src="https://maps.google.com/maps?q=UNITY+Swimming+School+Bali&z=11&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[260px] w-full sm:h-[340px]"
            allowFullScreen
          />
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
          <span className="inline-flex items-center gap-1.5 font-semibold text-ocean">
            <span aria-hidden>📍</span> UNITY Swimming School Bali
          </span>
          <a
            href="https://www.google.com/maps/search/?api=1&query=UNITY+Swimming+School+Bali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pool font-medium hover:underline"
          >
            Open in Google Maps →
          </a>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px]">
          <span className="font-semibold uppercase tracking-[0.16em] text-ink/60">Service areas:</span>
          {["Bukit", "Sanur", "Ubud", "Canggu"].map((area) => (
            <span
              key={area}
              className="rounded-full border border-ocean/15 bg-white px-2.5 py-0.5 text-ink/75"
            >
              {area}
            </span>
          ))}
        </div>

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
          <div className="mt-6 space-y-1">
            {priceRows.map((row, i) => (
              <div key={i} className="flex items-baseline gap-2 py-2">
                <span className="text-sm text-ink/80 shrink-0">{row.label}</span>
                <span className="flex-1 border-b border-dotted border-ink/20 self-end mb-1.5 min-w-[1rem]" />
                <span className="text-sm font-semibold text-pool whitespace-nowrap">{row.price}</span>
              </div>
            ))}
          </div>
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
              <BookingCTA label={t("cta.bookLesson")} />
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-ink/70 leading-relaxed">
          Bringing the family? See our{" "}
          <Link to="/kids-swimming-lessons-bali" className="text-pool font-semibold hover:underline">
            kids swimming lessons in Bali
          </Link>
          , or take it deeper with{" "}
          <Link to="/freediving-bali" className="text-pool font-semibold hover:underline">
            freediving in Bali
          </Link>
          .
        </p>
      </section>
    </>
  );
}

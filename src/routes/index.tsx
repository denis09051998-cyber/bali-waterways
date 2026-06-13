import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/site/CTA";
import { SITE } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { BrandText } from "@/components/site/Logo";
import heroImg from "@/assets/ph_crawl.jpg.asset.json";
import kidImg from "@/assets/ph_kid.jpg.asset.json";
import freediveImg from "@/assets/ph_freediving_v6.jpg.asset.json";
import oceanImg from "@/assets/ph_ocean.jpg.asset.json";
import adultsImg from "@/assets/ph_adults.jpg.asset.json";
import kidsGroupImg from "@/assets/ph_kids_group.jpg.asset.json";
import moment1 from "@/assets/ph_moment_1.jpg.asset.json";
import moment2 from "@/assets/ph_moment_2.jpg.asset.json";
import moment3 from "@/assets/ph_moment_3.webp.asset.json";
import moment4 from "@/assets/ph_moment_4.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UNITY Swimming School Bali — Lessons in Bukit, Sanur, Ubud & Canggu" },
      { name: "description", content: "Private and group swimming lessons for kids and adults in Bali. Safety-first coaching across Bukit, Sanur and Ubud. Book via WhatsApp." },
      { name: "keywords", content: "swimming school Bali, kids swimming lessons Bali, adult swimming lessons Bali, freediving Bali, private swimming lessons Bali, ocean swimming Bali, swimming lessons Bukit, swimming lessons Sanur, swimming lessons Ubud" },
      { property: "og:title", content: "UNITY Swimming School Bali" },
      { property: "og:description", content: "Private and group swimming lessons for kids and adults across Bukit, Sanur and Ubud." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg.url },
      { name: "twitter:image", content: heroImg.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const PROGRAMS = [
  { to: "/kids-swimming", img: kidImg.url, k: "kids" },
  { to: "/adult-swimming", img: adultsImg.url, k: "adults" },
  { to: "/ocean-swimming", img: oceanImg.url, k: "ocean" },
  { to: "/freediving", img: freediveImg.url, k: "freedive" },
] as const;

const PHILOSOPHY = [
  { slug: "water-safety", k: "safety" },
  { slug: "learn-to-swim", k: "learn" },
  { slug: "technique", k: "technique" },
  { slug: "ocean-swimming", k: "ocean" },
  { slug: "freediving", k: "freedive" },
  { slug: "confidence", k: "confidence" },
] as const;

const LOCATIONS = [
  { k: "bukit" },
  { k: "sanur" },
  { k: "ubud" },
  { k: "canggu" },
] as const;

const MOMENTS = [moment1, moment2, moment3, moment4] as const;
const REVIEWS = [1, 2, 3, 4] as const;
const FAQS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

function Index() {
  const { t } = useI18n();
  return (
    <>
      {/* Hero — full-bleed swimming photo */}
      <section className="relative min-h-[88vh] overflow-hidden text-surface flex items-end">
        <img src={heroImg.url} alt="Swimmer practicing freestyle stroke in clear blue pool" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-ocean/85 via-ocean/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean/80 via-transparent to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-10 pb-16 pt-32 sm:pb-24 sm:pt-40">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.25em] text-surface/85 uppercase">{t("home.eyebrow")}</p>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] text-balance">
              <BrandText /> {t("home.title").replace(/UNITY\s*/i, "")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl text-surface/90 text-pretty">
              {t("home.sub")}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-pool px-5 py-3 text-sm font-semibold text-surface hover:bg-ocean transition-colors"
              >
                {t("cta.bookLesson")}
              </Link>
              <Link to="/programs" className="inline-flex items-center justify-center rounded-full border border-surface/40 bg-white/5 backdrop-blur px-5 py-3 text-sm font-semibold hover:bg-surface/15">
                {t("cta.viewPrograms")}
              </Link>
            </div>
            <div className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-surface/20 pt-6">
              <div><p className="font-display text-3xl">1000+</p><p className="mt-1 text-xs text-surface/75">{t("home.stat.students")}</p></div>
              <div><p className="font-display text-3xl">9</p><p className="mt-1 text-xs text-surface/75">{t("home.stat.areas")}</p></div>
              <div><p className="font-display text-3xl">100%</p><p className="mt-1 text-xs text-surface/75">{t("home.stat.safety")}</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <SectionEyebrow>{t("home.welcome")}</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
              {t("home.welcomeTitle")}
            </h2>
          </div>
          <p className="text-base sm:text-lg text-ink/70 text-pretty">
            {t("home.welcomeBody")}
          </p>
        </div>
      </section>

      {/* Programs with real photos */}
      <section className="bg-sand/40 border-y border-ocean/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionEyebrow>{t("home.programs")}</SectionEyebrow>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">{t("home.programsTitle")}</h2>
            </div>
            <Link to="/programs" className="text-sm font-semibold text-pool hover:text-ocean">{t("cta.allPrograms")} →</Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.map((p) => (
              <Link key={p.to} to={p.to} className="group overflow-hidden rounded-2xl border border-ocean/10 bg-white transition-all hover:-translate-y-0.5 hover:border-pool/40 hover:shadow-xl">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-tropical">{t(`prog.${p.k}.tag`)}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ocean">{t(`prog.${p.k}.t`)}</h3>
                  <p className="mt-2 text-sm text-ink/60">{t(`prog.${p.k}.d`)}</p>
                  <p className="mt-4 text-sm font-semibold text-pool group-hover:text-ocean">{t("cta.learnMore")} →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Philosophy — interactive cards */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-20">
        <div className="max-w-2xl">
          <SectionEyebrow>{t("home.philosophy")}</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">{t("home.philosophyTitle")}</h2>
          <p className="mt-3 text-ink/65">{t("home.philosophySub")}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PHILOSOPHY.map((p, i) => (
            <Link
              key={p.slug}
              to="/philosophy/$topic"
              params={{ topic: p.slug }}
              className="group relative overflow-hidden rounded-2xl border border-ocean/10 bg-gradient-to-br from-ocean to-pool p-6 text-surface min-h-[180px] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-tropical/30 opacity-0 transition-opacity group-hover:opacity-100" />
              <p className="relative text-[11px] font-semibold tracking-widest uppercase text-surface/70">{String(i + 1).padStart(2, "0")}</p>
              <div className="relative">
                <h3 className="font-display text-xl font-semibold">{t(`phil.${p.k}.t`)}</h3>
                <p className="mt-1 text-sm text-surface/80">{t(`phil.${p.k}.d`)}</p>
                  <p className="mt-4 text-xs font-semibold tracking-widest uppercase text-surface group-hover:text-tropical">{t("home.philosophyRead")} →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why us with real image */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl">
            <img src={kidsGroupImg.url} alt="Coach teaching a group of kids by the pool in Bali" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean/40 via-transparent to-transparent" />
          </div>
          <div>
            <SectionEyebrow>{t("home.why")}</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">{t("home.whyTitle")}</h2>
            <div className="mt-8 space-y-6">
              {[1,2,3,4].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-pool/15">
                    <div className="size-2 rounded-full bg-pool" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ocean">{t(`home.why.${i}.t`)}</h4>
                    <p className="mt-1 text-sm text-ink/65">{t(`home.why.${i}.d`)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/coaches" className="text-sm font-semibold text-pool hover:text-ocean">{t("nav.coaches")} →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="bg-ocean/5 border-y border-ocean/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 py-16">
          <SectionEyebrow>{t("home.moments")}</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold">{t("home.momentsTitle")}</h2>
          <div className="mt-10 grid gap-3 grid-cols-2 lg:grid-cols-4">
            {MOMENTS.map((g, i) => (
              <div key={i} className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-ocean/10">
                <img src={g.url} alt="UNITY Swimming School moment" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-sand/40 border-y border-ocean/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 py-20">
          <div className="max-w-2xl">
            <SectionEyebrow>{t("home.areas")}</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">{t("home.areasTitle")}</h2>
            <p className="mt-3 text-ink/65">{t("home.areasSub")}</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS.map((l) => (
              <Link key={l.k} to="/locations" className="group rounded-2xl border border-ocean/10 bg-white p-6 hover:border-pool/40">
                <h3 className="font-display text-xl font-semibold text-ocean">{t(`loc.${l.k}.t`)}</h3>
                <p className="mt-2 text-sm text-ink/65">{t(`loc.${l.k}.d`)}</p>
                <p className="mt-6 text-xs font-semibold tracking-widest uppercase text-pool group-hover:text-ocean">{t("cta.learnMore")} →</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {SITE.areas.map((a) => (
              <span key={a} className="rounded-full border border-ocean/15 bg-white px-3 py-1 text-xs font-medium text-ink/70">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-ocean to-ocean/90 text-surface">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 py-24">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-tropical">{t("home.testimonialsEyebrow")}</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">{t("home.testimonialsTitle")}</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {REVIEWS.map((i) => (
              <figure key={i} className="relative rounded-3xl bg-white/[0.06] backdrop-blur-sm border border-white/10 p-7 sm:p-8 flex flex-col">
                <span aria-hidden className="font-display text-6xl leading-none text-tropical/70 select-none">“</span>
                <blockquote className="-mt-4 text-surface/90 leading-relaxed text-[15px] sm:text-base whitespace-pre-line">
                  {t(`home.rev${i}.text`)}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-white/10">
                  <div className="grid size-10 place-items-center rounded-full bg-tropical/20 text-tropical font-semibold text-sm">
                    {t(`home.rev${i}.name`).trim().charAt(0)}
                  </div>
                  <div className="font-semibold text-surface">{t(`home.rev${i}.name`)}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="mx-auto max-w-3xl px-5 lg:px-10 py-20">
        <div className="text-center">
          <SectionEyebrow>{t("home.faq")}</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">{t("home.faqTitle")}</h2>
        </div>
        <div className="mt-10 space-y-3">
          {FAQS.map((i) => (
            <details key={i} className="group rounded-xl border border-ocean/10 bg-white p-5">
              <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-ocean">
                {t(`home.faq${i}.q`)}
                <span className="text-pool group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-ink/70">{t(`home.faq${i}.a`)}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/faq" className="text-sm font-semibold text-pool hover:text-ocean">{t("home.viewFaq")} →</Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ocean via-pool to-tropical px-8 py-16 sm:px-12 sm:py-20 text-surface">
          <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_85%_20%,white,transparent_45%)]" />

          {/* Animated waves */}
          <svg
            aria-hidden
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-40 w-full opacity-40"
          >
            <defs>
              <linearGradient id="ctaWave" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0.6" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path fill="url(#ctaWave)">
              <animate
                attributeName="d"
                dur="9s"
                repeatCount="indefinite"
                values="
                  M0,120 C200,170 400,70 600,110 C800,150 1000,90 1200,120 L1200,200 L0,200 Z;
                  M0,110 C220,80 420,160 620,120 C820,90 1020,150 1200,110 L1200,200 L0,200 Z;
                  M0,120 C200,170 400,70 600,110 C800,150 1000,90 1200,120 L1200,200 L0,200 Z" />
            </path>
            <path fill="white" fillOpacity="0.15">
              <animate
                attributeName="d"
                dur="6s"
                repeatCount="indefinite"
                values="
                  M0,150 C200,120 400,180 600,150 C800,120 1000,180 1200,150 L1200,200 L0,200 Z;
                  M0,150 C200,180 400,120 600,150 C800,180 1000,120 1200,150 L1200,200 L0,200 Z;
                  M0,150 C200,120 400,180 600,150 C800,120 1000,180 1200,150 L1200,200 L0,200 Z" />
            </path>
          </svg>

          {/* Animated swimmer */}
          <svg
            aria-hidden
            viewBox="0 0 200 80"
            className="pointer-events-none absolute right-6 sm:right-10 top-8 sm:top-10 w-40 sm:w-56 text-surface/80"
          >
            <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {/* arm */}
              <path d="M70 38 Q95 10 130 28">
                <animate attributeName="d" dur="2.2s" repeatCount="indefinite"
                  values="
                    M70 38 Q95 10 130 28;
                    M70 38 Q95 60 130 48;
                    M70 38 Q95 10 130 28" />
              </path>
              {/* body */}
              <path d="M40 42 Q90 50 150 40" />
              {/* head */}
              <circle cx="155" cy="38" r="6" />
              {/* splash */}
              <g opacity="0.7">
                <path d="M30 44 q-6 -2 -10 2">
                  <animate attributeName="opacity" dur="1.1s" repeatCount="indefinite" values="0.2;0.9;0.2" />
                </path>
                <path d="M22 50 q-5 0 -8 4">
                  <animate attributeName="opacity" dur="1.1s" begin="0.3s" repeatCount="indefinite" values="0.2;0.9;0.2" />
                </path>
              </g>
            </g>
          </svg>

          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">{t("home.finalTitle")}</h2>
            <p className="mt-4 text-surface/85">{t("home.finalSub")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-surface px-5 py-3 text-sm font-semibold text-ocean hover:bg-white">
                {t("cta.bookLesson")}
              </Link>
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-surface/40 px-5 py-3 text-sm font-semibold hover:bg-surface/10">
                {t("cta.book")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

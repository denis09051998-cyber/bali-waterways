import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionEyebrow, WhatsAppCTA } from "@/components/site/CTA";
import { SITE } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/ph_crawl.jpg.asset.json";
import kidImg from "@/assets/ph_kid.jpg.asset.json";
import freediveImg from "@/assets/ph_freedive.jpg.asset.json";
import underwaterImg from "@/assets/ph_underwater.jpg.asset.json";
import adultsImg from "@/assets/ph_adults.jpg.asset.json";
import kidsGroupImg from "@/assets/ph_kids_group.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unity Swimming School Bali — Lessons in Bukit, Sanur & Ubud" },
      { name: "description", content: "Private and group swimming lessons for kids and adults in Bali. Safety-first coaching across Bukit, Sanur and Ubud. Book via WhatsApp." },
      { name: "keywords", content: "swimming school Bali, kids swimming lessons Bali, adult swimming lessons Bali, freediving Bali, private swimming lessons Bali, ocean swimming Bali, swimming lessons Bukit, swimming lessons Sanur, swimming lessons Ubud" },
      { property: "og:title", content: "Unity Swimming School Bali" },
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
  { to: "/ocean-swimming", img: underwaterImg.url, k: "ocean" },
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
  { name: "Bukit Peninsula", text: "Uluwatu, Ungasan, Pecatu, Jimbaran, Kutuh, Nusa Dua." },
  { name: "Sanur", text: "Calm waters perfect for beginners and family lessons." },
  { name: "Ubud", text: "Private villa pool sessions in Bali's jungle heart." },
];

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
              {t("home.title")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl text-surface/90 text-pretty">
              {t("home.sub")}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <WhatsAppCTA message="Hi Unity! I'd like to book a swimming lesson." label={t("cta.bookLesson")} />
              <Link to="/programs" className="inline-flex items-center justify-center rounded-full border border-surface/40 bg-white/5 backdrop-blur px-5 py-3 text-sm font-semibold hover:bg-surface/15">
                {t("cta.viewPrograms")}
              </Link>
            </div>
            <div className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-surface/20 pt-6">
              <div><p className="font-display text-3xl">500+</p><p className="mt-1 text-xs text-surface/75">{t("home.stat.students")}</p></div>
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
                <p className="mt-4 text-xs font-semibold tracking-widest uppercase text-surface group-hover:text-tropical">Read article →</p>
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
          <SectionEyebrow>Moments</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold">From our pools and the Bali ocean.</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[kidImg, adultsImg, freediveImg, underwaterImg].map((g, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-2xl">
                <img src={g.url} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
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
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {LOCATIONS.map((l) => (
              <Link key={l.name} to="/locations" className="group rounded-2xl border border-ocean/10 bg-white p-6 hover:border-pool/40">
                <h3 className="font-display text-xl font-semibold text-ocean">{l.name}</h3>
                <p className="mt-2 text-sm text-ink/65">{l.text}</p>
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

      {/* Testimonial */}
      <section className="bg-ocean text-surface">
        <div className="mx-auto max-w-4xl px-5 lg:px-10 py-24 text-center">
          <p className="font-display text-2xl sm:text-3xl lg:text-4xl leading-snug text-balance">
            {t("home.testimonial")}
          </p>
          <p className="mt-6 text-xs font-semibold tracking-widest uppercase text-pool">{t("home.testimonialAuthor")}</p>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="mx-auto max-w-3xl px-5 lg:px-10 py-20">
        <div className="text-center">
          <SectionEyebrow>{t("home.faq")}</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">{t("home.faqTitle")}</h2>
        </div>
        <div className="mt-10 space-y-3">
          {[
            ["Can you come to our villa?", "Yes — most private lessons happen in our students' own villa pools across Bukit, Sanur and Ubud."],
            ["Do you teach adults afraid of the water?", "Absolutely. Our Fear of Water program is built specifically for adults, at your own pace."],
            ["Do you teach absolute beginners?", "Yes — kids and adults. Beginners are the heart of what we do."],
            ["Do you teach freediving?", "Yes — we offer beginner freediving courses, breath-hold technique and ocean practice with safety protocols."],
          ].map(([q, a]) => (
            <details key={q} className="group rounded-xl border border-ocean/10 bg-white p-5">
              <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-ocean">
                {q}
                <span className="text-pool group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-ink/70">{a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/faq" className="text-sm font-semibold text-pool hover:text-ocean">{t("home.viewFaq")} →</Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-tropical via-tropical/80 to-pool px-8 py-16 sm:px-12 sm:py-20 text-surface">
          <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_80%_20%,white,transparent_40%)]" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">{t("home.finalTitle")}</h2>
            <p className="mt-4 text-surface/85">{t("home.finalSub")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-surface px-5 py-3 text-sm font-semibold text-ocean hover:bg-white">
                {t("cta.book")}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-surface/40 px-5 py-3 text-sm font-semibold hover:bg-surface/10">
                {t("cta.contactForm")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

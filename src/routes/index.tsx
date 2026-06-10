import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionEyebrow, WhatsAppCTA } from "@/components/site/CTA";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unity Swimming School Bali — Lessons in Bukit, Sanur & Ubud" },
      { name: "description", content: "Private and group swimming lessons for kids and adults in Bali. Safety-first coaching across Bukit, Sanur and Ubud. Book via WhatsApp." },
      { property: "og:title", content: "Unity Swimming School Bali" },
      { property: "og:description", content: "Private and group swimming lessons for kids and adults across Bukit, Sanur and Ubud." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const PROGRAMS = [
  { to: "/kids-swimming", title: "Kids Swimming", text: "Safety-first, confidence-building lessons through play.", tag: "Ages 3–14" },
  { to: "/adult-swimming", title: "Adult Lessons", text: "Beginners, fear of water, technique & endurance.", tag: "All levels" },
  { to: "/programs", title: "Private Sessions", text: "One-on-one coaching at your villa or partner pool.", tag: "Private" },
  { to: "/ocean-swimming", title: "Ocean Swimming", text: "Open-water confidence for advanced swimmers.", tag: "Advanced" },
] as const;

const LOCATIONS = [
  { name: "Bukit Peninsula", text: "Uluwatu, Ungasan, Pecatu, Jimbaran, Kutuh, Nusa Dua." },
  { name: "Sanur", text: "Calm waters perfect for beginners and family lessons." },
  { name: "Ubud", text: "Private villa pool sessions in Bali's jungle heart." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ocean via-ocean to-pool text-surface">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_15%_20%,white,transparent_40%),radial-gradient(circle_at_85%_70%,#f43f5e,transparent_45%),radial-gradient(circle_at_50%_100%,#0d9488,transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-10 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <SectionEyebrow>Professional Swim School · Bali</SectionEyebrow>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-balance">
              Unity Swimming School in Bali
            </h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl text-surface/85 text-pretty">
              Private and group swimming lessons for kids and adults in Bukit, Sanur and Ubud. Build confidence, master technique, enjoy the water safely.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <WhatsAppCTA message="Hi Unity! I'd like to book a swimming lesson." label="Book a Lesson" />
              <Link to="/programs" className="inline-flex items-center justify-center rounded-full border border-surface/30 px-5 py-3 text-sm font-semibold hover:bg-surface/10">
                View Programs
              </Link>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-surface/15 pt-6">
              <div><p className="font-display text-2xl">500+</p><p className="text-xs text-surface/70">Students taught</p></div>
              <div><p className="font-display text-2xl">9</p><p className="text-xs text-surface/70">Areas covered</p></div>
              <div><p className="font-display text-2xl">100%</p><p className="text-xs text-surface/70">Safety record</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <SectionEyebrow>Welcome</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
              A trusted swim school for Bali's international community.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-ink/70 text-pretty">
            Unity Swimming School is built around safety, individualized attention and the joy of being in the water. We teach children and adults — from absolute beginners and those with fear of water, to swimmers refining technique or training for the open ocean.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-sand/40 border-y border-ocean/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionEyebrow>Programs</SectionEyebrow>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">Professional coaching for every level</h2>
            </div>
            <Link to="/programs" className="text-sm font-semibold text-pool hover:text-ocean">All programs →</Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.map((p) => (
              <Link key={p.to} to={p.to} className="group rounded-2xl border border-ocean/10 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-pool/40 hover:shadow-lg">
                <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-pool/30 via-pool/10 to-tropical/20" />
                <p className="mt-4 text-[11px] font-semibold tracking-widest uppercase text-tropical">{p.tag}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ocean">{p.title}</h3>
                <p className="mt-2 text-sm text-ink/60">{p.text}</p>
                <p className="mt-4 text-sm font-semibold text-pool group-hover:text-ocean">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-gradient-to-br from-pool via-pool/70 to-ocean">
            <div className="absolute inset-0 [background:radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_45%)]" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/15 backdrop-blur-md p-5 text-surface">
              <p className="text-xs uppercase tracking-widest opacity-80">Photo placeholder</p>
              <p className="mt-1 font-display text-lg">Coach with student · Bukit villa pool</p>
            </div>
          </div>
          <div>
            <SectionEyebrow>Why Unity</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">Built on trust, safety and progress.</h2>
            <div className="mt-8 space-y-6">
              {[
                ["Safety-first methodology", "Water survival and safety skills come before strokes — every lesson, every level."],
                ["Individual approach", "We tailor pace, drills and atmosphere to each student's temperament and goals."],
                ["Kids & adults specialists", "Years of experience with international families, expats, tourists and adult beginners."],
                ["Ocean experience", "Real open-water coaching from coaches who actually swim Bali's coastline."],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-4">
                  <div className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-pool/15">
                    <div className="size-2 rounded-full bg-pool" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ocean">{t}</h4>
                    <p className="mt-1 text-sm text-ink/65">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-sand/40 border-y border-ocean/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 py-20">
          <div className="max-w-2xl">
            <SectionEyebrow>Service Areas</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">We come to your villa across Bali</h2>
            <p className="mt-3 text-ink/65">From Uluwatu's cliffs to the calm shores of Sanur and the lush Ubud highlands.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {LOCATIONS.map((l) => (
              <Link key={l.name} to="/locations" className="group rounded-2xl border border-ocean/10 bg-white p-6 hover:border-pool/40">
                <h3 className="font-display text-xl font-semibold text-ocean">{l.name}</h3>
                <p className="mt-2 text-sm text-ink/65">{l.text}</p>
                <p className="mt-6 text-xs font-semibold tracking-widest uppercase text-pool group-hover:text-ocean">Explore →</p>
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
            "Our kids went from being afraid of the water to swimming independently in two weeks. Patient, professional, and genuinely warm coaches."
          </p>
          <p className="mt-6 text-xs font-semibold tracking-widest uppercase text-pool">Sarah M. · Expat parent, Sanur</p>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="mx-auto max-w-3xl px-5 lg:px-10 py-20">
        <div className="text-center">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">Common questions</h2>
        </div>
        <div className="mt-10 space-y-3">
          {[
            ["Can you come to our villa?", "Yes — most private lessons happen in our students' own villa pools across Bukit, Sanur and Ubud."],
            ["Do you teach adults afraid of the water?", "Absolutely. Our Fear of Water program is built specifically for adults, at your own pace."],
            ["Do you teach absolute beginners?", "Yes — kids and adults. Beginners are the heart of what we do."],
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
          <Link to="/faq" className="text-sm font-semibold text-pool hover:text-ocean">View all FAQs →</Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-tropical via-tropical/80 to-pool px-8 py-16 sm:px-12 sm:py-20 text-surface">
          <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_80%_20%,white,transparent_40%)]" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">Ready to get in the water?</h2>
            <p className="mt-4 text-surface/85">Message us on WhatsApp — tell us the area, age and level, and we'll recommend the best format.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-surface px-5 py-3 text-sm font-semibold text-ocean hover:bg-white">
                Book via WhatsApp
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-surface/40 px-5 py-3 text-sm font-semibold hover:bg-surface/10">
                Contact form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

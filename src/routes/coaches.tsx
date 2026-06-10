import { createFileRoute } from "@tanstack/react-router";
import { PageHero, WhatsAppCTA } from "@/components/site/CTA";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/coaches")({
  head: () => ({
    meta: [
      { title: "Coaches — Unity Swimming School Bali" },
      { name: "description", content: "Meet the Unity Swimming School Bali coaches. Internationally experienced head coach plus specialist coaches for kids, adults, ocean swimming and freediving." },
      { property: "og:title", content: "Our Coaches — Unity Swimming School Bali" },
      { property: "og:description", content: "Head coach plus specialist coaches across Bukit, Sanur and Ubud." },
      { property: "og:url", content: "/coaches" },
    ],
    links: [{ rel: "canonical", href: "/coaches" }],
  }),
  component: Coaches,
});

type Coach = {
  head?: boolean;
  name: string;
  role: string;
  exp: string;
  spec: string;
  bio: string;
  tags: string[];
  placeholder?: boolean;
};

const COACHES: Coach[] = [
  {
    head: true,
    name: "Denis Kozhenkov",
    role: "co.head",
    exp: "8+ years coaching",
    spec: "Adults, ocean swimming, freediving fundamentals, fear of water",
    bio: "Denis leads Unity Swimming School with a calm, methodical approach. He prepares swimmers for open water and ocean swims, helps adults overcome fear of water, gets competitive swimmers race-ready, and even works with babies from 2 months old. His coaching combines international training standards with a deeply personal style.",
    tags: ["Gentle Water Adaptation", "Fear Overcoming", "Kids' Freediving Basics", "Safe Play-Based Environment"],
  },
  {
    name: "Julianta Pradnyana",
    role: "co.coach",
    exp: "Specialist in kids and family lessons",
    spec: "Kids ages 2 months+, technique foundations, competition prep",
    bio: "Julianta brings a gentle, play-based approach to teaching children — from 2 months old upwards. She helps young swimmers overcome fears, develops proper technique, and prepares motivated kids for competitions. Patient, warm and endlessly creative with drills.",
    tags: ["Proper Technique", "Expert Guidance", "Progress Monitoring", "Exercise Variations"],
  },
  {
    name: "Coach — name coming soon",
    role: "co.coach",
    exp: "Specialist coach",
    spec: "Stroke technique, intermediate swimmers",
    bio: "Photo and full bio coming soon. Specialises in stroke refinement for intermediate swimmers and supports our private lesson schedule across South Bali.",
    tags: ["Stroke Refinement", "Endurance", "Adult Improvers"],
    placeholder: true,
  },
  {
    name: "Coach — name coming soon",
    role: "co.coach",
    exp: "Specialist coach",
    spec: "Ocean swimming support, group classes",
    bio: "Photo and full bio coming soon. Supports ocean swimming sessions and group classes across Bukit and Sanur.",
    tags: ["Ocean Support", "Group Classes", "Safety"],
    placeholder: true,
  },
];

function CoachCard({ c, t, featured }: { c: Coach; t: (k: string) => string; featured?: boolean }) {
  return (
    <article className={`rounded-3xl border border-ocean/10 bg-white overflow-hidden ${featured ? "lg:col-span-2 lg:grid lg:grid-cols-[1.1fr_1fr]" : ""}`}>
      <div className={`relative ${featured ? "aspect-[4/5] lg:aspect-auto" : "aspect-[4/5]"} w-full bg-gradient-to-br from-ocean via-ocean/85 to-pool/60 flex items-end p-6`}>
        <div className="text-surface">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase opacity-80">{t(c.role)}</p>
          <h3 className="mt-1 font-display text-2xl sm:text-3xl font-semibold leading-tight">{c.name}</h3>
        </div>
        <span className="absolute right-4 top-4 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-surface">
          {c.placeholder ? "Photo coming soon" : "Real photo placeholder"}
        </span>
      </div>
      <div className="p-6 sm:p-8">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-tropical">{t("co.exp")}</p>
        <p className="mt-1 text-sm text-ink/80 font-medium">{c.exp}</p>
        <p className="mt-4 text-[11px] font-semibold tracking-widest uppercase text-tropical">{t("co.spec")}</p>
        <p className="mt-1 text-sm text-ink/80">{c.spec}</p>
        <p className="mt-4 text-[11px] font-semibold tracking-widest uppercase text-tropical">{t("co.bio")}</p>
        <p className="mt-2 text-sm text-ink/70 leading-relaxed">{c.bio}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {c.tags.map((tg) => (
            <span key={tg} className="rounded-full bg-pool/10 px-3 py-1 text-[11px] font-semibold text-pool">{tg}</span>
          ))}
        </div>
        <div className="mt-6">
          <WhatsAppCTA message={`Hi Unity! I'd like to book a lesson with ${c.name}.`} label={t("cta.book")} />
        </div>
      </div>
    </article>
  );
}

function Coaches() {
  const { t } = useI18n();
  const [head, ...rest] = COACHES;
  return (
    <>
      <PageHero eyebrow={t("co.eyebrow")} title={t("co.title")} subtitle={t("co.sub")} />
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-20 space-y-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <CoachCard c={head} t={t} featured />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((c) => <CoachCard key={c.name} c={c} t={t} />)}
        </div>
      </section>
    </>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionEyebrow, WhatsAppCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Swimming Programs — Unity Swimming School Bali" },
      { name: "description", content: "All swimming programs at Unity Bali: kids, adults, private, group, beginners, fear of water, technique, and ocean swimming." },
      { property: "og:title", content: "Swimming Programs — Unity Swimming School Bali" },
      { property: "og:description", content: "Kids, adults, private, group, beginners, fear of water, technique and ocean swimming." },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: Programs,
});

const PROGRAMS = [
  {
    title: "Kids Swimming Lessons",
    who: "Children ages 3–14, including total beginners.",
    learn: "Water safety, breathing, floating, kicking, basic strokes, pool and ocean safety.",
    benefits: "Confidence, independence, lifelong safety skills, fitness through play.",
    format: "Private or sibling pairs, 45–60 min, 2× per week recommended.",
    msg: "Hi Unity! I'd like to book kids swimming lessons.",
  },
  {
    title: "Adult Swimming Lessons",
    who: "Adults — beginners, returners, or those refining technique.",
    learn: "Breathing rhythm, body position, freestyle, backstroke, breaststroke, endurance.",
    benefits: "Fitness, calm in the water, real confidence in pool and ocean.",
    format: "Private 60 min sessions, 1–2× per week.",
    msg: "Hi Unity! I'd like adult swimming lessons.",
  },
  {
    title: "Private Swimming Lessons",
    who: "Anyone wanting one-on-one attention at your villa or partner pool.",
    learn: "Fully personalized curriculum — your goals, your pace.",
    benefits: "Fastest progress, total focus, schedule flexibility.",
    format: "60 min private sessions, weekly packages available.",
    msg: "Hi Unity! I'd like private swimming lessons.",
  },
  {
    title: "Group Swimming Classes",
    who: "Siblings, friends, or small groups of similar levels.",
    learn: "Same curriculum as private, with peer motivation and shared fun.",
    benefits: "Lower per-person cost, social and motivating environment.",
    format: "Small groups of 2–4 students, 60 min sessions.",
    msg: "Hi Unity! I'd like group swimming classes.",
  },
  {
    title: "Beginner Swimming Lessons",
    who: "Anyone who's never swum before — kids or adults.",
    learn: "Comfort in water, breathing, floating, first strokes — step by step.",
    benefits: "A safe, calm start with zero pressure.",
    format: "Private 45–60 min sessions, 2× per week recommended.",
    msg: "Hi Unity! I'm a beginner — I'd like to start lessons.",
  },
  {
    title: "Fear of Water Program",
    who: "Adults and children with anxiety or fear of water.",
    learn: "Trust building, breathing, gradual submersion, calm body control.",
    benefits: "Overcome fear in a patient, judgment-free environment.",
    format: "Private 45–60 min sessions, slow and steady progression.",
    msg: "Hi Unity! I'd like the Fear of Water program.",
  },
  {
    title: "Swimming Technique Improvement",
    who: "Intermediate and advanced swimmers wanting cleaner strokes.",
    learn: "Stroke analysis, body position, catch, rotation, breathing efficiency.",
    benefits: "Faster, more efficient swimming with less fatigue.",
    format: "Private 60 min sessions with video feedback on request.",
    msg: "Hi Unity! I'd like to improve my swimming technique.",
  },
  {
    title: "Ocean Swimming Sessions",
    who: "Confident pool swimmers ready for open water.",
    learn: "Sighting, current reading, breathing in chop, safety protocols.",
    benefits: "Open-water confidence, endurance, and Bali coastline mastery.",
    format: "Private or small group, 60–90 min ocean sessions in South Bali.",
    msg: "Hi Unity! I'd like to book an ocean swimming session.",
  },
];

function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Eight swimming programs — for every age, level and goal."
        subtitle="From first splashes to mastering Bali's open ocean. Each program is built around individual progress and safety."
      />
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-20 space-y-6">
        {PROGRAMS.map((p, i) => (
          <article key={p.title} className="grid gap-8 rounded-3xl border border-ocean/10 bg-white p-6 sm:p-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <SectionEyebrow>Program {String(i + 1).padStart(2, "0")}</SectionEyebrow>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-ocean">{p.title}</h2>
              <div className="mt-6 aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-pool/30 via-pool/10 to-tropical/20" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 self-center">
              <Field label="Who it's for" value={p.who} />
              <Field label="What students learn" value={p.learn} />
              <Field label="Benefits" value={p.benefits} />
              <Field label="Recommended format" value={p.format} />
              <div className="sm:col-span-2 mt-2">
                <WhatsAppCTA message={p.msg} label={`Book ${p.title}`} />
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-widest uppercase text-tropical">{label}</p>
      <p className="mt-1.5 text-sm text-ink/75 leading-relaxed">{value}</p>
    </div>
  );
}
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, SectionEyebrow, WhatsAppCTA } from "@/components/site/CTA";
import { useI18n } from "@/lib/i18n";
import kidImg from "@/assets/ph_kid.jpg.asset.json";
import crawlImg from "@/assets/ph_crawl.jpg.asset.json";
import oceanImg from "@/assets/ph_underwater.jpg.asset.json";
import freediveImg from "@/assets/ph_freedive.jpg.asset.json";
import kidsGroupImg from "@/assets/ph_kids_group.jpg.asset.json";
import adultsImg from "@/assets/ph_adults.jpg.asset.json";

type Topic = {
  slug: string;
  titleKey: string;
  descKey: string;
  hero: { url: string };
  body: string[];
  gallery: { url: string }[];
  related: { to: string; label: string }[];
};

const TOPICS: Record<string, Topic> = {
  "water-safety": {
    slug: "water-safety", titleKey: "phil.safety.t", descKey: "phil.safety.d", hero: kidsGroupImg,
    body: [
      "At Unity, water safety is not an add-on — it is the very first thing we teach, and we return to it every single lesson, at every level.",
      "Children learn rescue posture, controlled breathing and self-rescue floats before they learn strokes. Adults learn the same skills with calm, judgement-free progression.",
      "Our safety curriculum includes pool exits, recognising fatigue, buddy awareness and basic ocean awareness — the foundation that lets everything else become possible.",
    ],
    gallery: [kidsGroupImg, kidImg], related: [{ to: "/kids-swimming", label: "Kids Swimming" }, { to: "/ocean-swimming", label: "Ocean Swimming" }],
  },
  "learn-to-swim": {
    slug: "learn-to-swim", titleKey: "phil.learn.t", descKey: "phil.learn.d", hero: kidImg,
    body: [
      "Learning to swim is a step-by-step journey. We start with comfort in water — face submersion, breath control, floating — long before we introduce a stroke.",
      "Once the foundations are confident, we layer in kicking, then arm patterns, then full coordination. The pace is yours.",
      "Most of our students go from 'I can't swim' to a calm, continuous 25m within weeks — not because we rush, but because we never skip a step.",
    ],
    gallery: [kidImg, kidsGroupImg], related: [{ to: "/kids-swimming", label: "Kids Swimming" }, { to: "/adult-swimming", label: "Adult Lessons" }],
  },
  "technique": {
    slug: "technique", titleKey: "phil.technique.t", descKey: "phil.technique.d", hero: crawlImg,
    body: [
      "Beautiful, efficient swimming is the product of deliberate practice — not just laps. Every stroke at Unity is built from body position, rotation, catch and breath rhythm.",
      "We use simple, focused drills that isolate one element at a time, then reassemble them into smooth full-stroke swimming.",
      "Video feedback is available on request for intermediate and advanced swimmers refining freestyle, backstroke or breaststroke.",
    ],
    gallery: [crawlImg, adultsImg], related: [{ to: "/programs", label: "All Programs" }, { to: "/adult-swimming", label: "Adult Lessons" }],
  },
  "ocean-swimming": {
    slug: "ocean-swimming", titleKey: "phil.ocean.t", descKey: "phil.ocean.d", hero: oceanImg,
    body: [
      "The ocean is not a bigger pool. It moves, breathes and demands awareness. Our ocean programme bridges pool fitness and real open-water competence.",
      "Sessions begin with safety briefings — buddy systems, exit points, how to read a rip current. Then we work on sighting, breathing in chop and pacing.",
      "Available only to confident pool swimmers (200m+) for everyone's safety.",
    ],
    gallery: [oceanImg, crawlImg], related: [{ to: "/ocean-swimming", label: "Ocean Swimming" }, { to: "/freediving", label: "Freediving" }],
  },
  "freediving": {
    slug: "freediving", titleKey: "phil.freedive.t", descKey: "phil.freedive.d", hero: freediveImg,
    body: [
      "Freediving teaches you to relax, breathe and trust the water in a completely new way. We start dry — never in deep water — building breath-hold confidence step by step.",
      "Beginner courses cover static apnea, CO2/O2 tolerance, equalization (Frenzel) and rescue protocols before we head to Bali's clear coastal water.",
      "Always with a safety buddy, surface signals and recovery protocols. Calm, patient, certified-style coaching.",
    ],
    gallery: [freediveImg, oceanImg], related: [{ to: "/freediving", label: "Freediving Page" }, { to: "/ocean-swimming", label: "Ocean Swimming" }],
  },
  "confidence": {
    slug: "confidence", titleKey: "phil.confidence.t", descKey: "phil.confidence.d", hero: adultsImg,
    body: [
      "Many adults carry a fear of water for decades. We see it every week — and we know how to dissolve it gently.",
      "Trust comes first. We move at your pace, with no pressure, no audience and no embarrassing drills. Just calm, patient, professional coaching.",
      "Most adults who were terrified at lesson one are floating, breathing and laughing within a few sessions.",
    ],
    gallery: [adultsImg, kidImg], related: [{ to: "/adult-swimming", label: "Adult Lessons" }, { to: "/programs", label: "Fear of Water Program" }],
  },
};

export const Route = createFileRoute("/philosophy/$topic")({
  loader: ({ params }) => {
    const topic = TOPICS[params.topic];
    if (!topic) throw notFound();
    return { topic };
  },
  head: ({ params }) => {
    const topic = TOPICS[params.topic];
    const title = topic ? `${params.topic.replace(/-/g, " ")} — Coaching Philosophy | Unity Swimming Bali` : "Philosophy — Unity Swimming Bali";
    return {
      meta: [
        { title },
        { name: "description", content: topic ? topic.body[0].slice(0, 158) : "Unity Swimming School coaching philosophy." },
        { property: "og:url", content: `/philosophy/${params.topic}` },
        ...(topic ? [{ property: "og:image", content: topic.hero.url } as const] : []),
      ],
      links: [{ rel: "canonical", href: `/philosophy/${params.topic}` }],
    };
  },
  component: Article,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 lg:px-10 py-32 text-center">
      <h1 className="font-display text-3xl text-ocean">Article not found</h1>
      <Link to="/" className="mt-6 inline-block text-pool font-semibold">← Back home</Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="mx-auto max-w-3xl px-5 lg:px-10 py-32 text-center">
      <h1 className="font-display text-3xl text-ocean">Something went wrong</h1>
      <button onClick={reset} className="mt-6 rounded-full bg-pool px-5 py-2 text-surface">Try again</button>
    </div>
  ),
});

function Article() {
  const { topic } = Route.useLoaderData();
  const { t } = useI18n();
  return (
    <>
      <section className="relative overflow-hidden">
        <img src={topic.hero.url} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-ocean/85 via-ocean/70 to-pool/60" />
        <div className="relative mx-auto max-w-5xl px-5 lg:px-10 py-24 sm:py-32 text-surface">
          <Link to="/" className="text-xs font-semibold uppercase tracking-widest text-surface/80 hover:text-surface">← {t("nav.home")}</Link>
          <p className="mt-6 text-[11px] font-semibold tracking-[0.25em] uppercase text-surface/80">{t("home.philosophy")}</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-balance">{t(topic.titleKey)}</h1>
          <p className="mt-4 max-w-2xl text-surface/85">{t(topic.descKey)}</p>
        </div>
      </section>
      <article className="mx-auto max-w-3xl px-5 lg:px-10 py-20">
        <div className="space-y-6 text-lg text-ink/75 leading-relaxed">
          {topic.body.map((p: string, i: number) => <p key={i}>{p}</p>)}
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {topic.gallery.map((g: { url: string }, i: number) => (
            <img key={i} src={g.url} alt="" className="aspect-[4/3] w-full rounded-2xl object-cover" loading="lazy" />
          ))}
        </div>
        <div className="mt-12 rounded-3xl bg-sand/50 border border-ocean/10 p-8">
          <SectionEyebrow>Related programs</SectionEyebrow>
          <div className="mt-4 flex flex-wrap gap-3">
            {topic.related.map((r: { to: string; label: string }) => (
              <Link key={r.to} to={r.to} className="rounded-full border border-ocean/15 bg-white px-4 py-2 text-sm font-semibold text-ocean hover:border-pool/40 hover:text-pool">{r.label} →</Link>
            ))}
          </div>
          <div className="mt-8">
            <WhatsAppCTA message={`Hi Unity! I'd like to learn more about ${t(topic.titleKey)}.`} label={t("cta.book")} />
          </div>
        </div>
      </article>
    </>
  );
}
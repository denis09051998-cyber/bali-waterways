import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionEyebrow, WhatsAppCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/adult-swimming")({
  head: () => ({
    meta: [
      { title: "Adult Swimming Lessons Bali — Learn to Swim & Private Coach" },
      { name: "description", content: "Adult swimming lessons in Bali. Beginners, fear of water, breathing, technique and endurance with a private swimming coach in Bukit, Sanur, Ubud." },
      { property: "og:title", content: "Adult Swimming Lessons in Bali" },
      { property: "og:description", content: "Learn to swim Bali — adult beginners, fear of water, technique and endurance coaching." },
      { property: "og:url", content: "/adult-swimming" },
    ],
    links: [{ rel: "canonical", href: "/adult-swimming" }],
  }),
  component: Adults,
});

function Adults() {
  return (
    <>
      <PageHero
        eyebrow="Adult Lessons"
        title="Adult swimming lessons in Bali."
        subtitle="Patient, professional coaching for adult beginners, returners and improvers. Calm, judgment-free, and tailored to you."
      />
      <section className="mx-auto max-w-4xl px-5 lg:px-10 py-20 space-y-10">
        {[
          ["Lessons for beginners", "Never swam before? You're not alone. Our adult beginners' curriculum starts with comfort, breath and floating — no rush, no embarrassment."],
          ["Fear of water", "We work with many adults who've carried a fear of water for years. Trust, patience and gradual exposure rebuild your confidence."],
          ["Breathing", "Most adult struggles in the water are breathing problems. We focus on calm, rhythmic breathing patterns from lesson one."],
          ["Technique", "Once basics click, we refine: body position, catch, rotation, efficient kick. Move with less effort and more grace."],
          ["Endurance", "Build the stamina to swim continuously — 200m, 500m, 1km — at your own pace."],
          ["Confidence in pool and ocean", "We can progress your training from villa pool to open water once you're ready."],
        ].map(([t, d]) => (
          <div key={t}>
            <h2 className="font-display text-2xl font-semibold text-ocean">{t}</h2>
            <p className="mt-3 text-ink/70 leading-relaxed">{d}</p>
          </div>
        ))}

        <div className="rounded-3xl bg-ocean p-8 text-center text-surface">
          <SectionEyebrow>Start today</SectionEyebrow>
          <h3 className="mt-2 font-display text-2xl">Book a private adult lesson</h3>
          <div className="mt-6 flex justify-center">
            <WhatsAppCTA message="Hi Unity! I'd like adult swimming lessons in Bali." label="Book on WhatsApp" />
          </div>
        </div>
      </section>
    </>
  );
}
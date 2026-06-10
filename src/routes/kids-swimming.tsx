import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionEyebrow, WhatsAppCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/kids-swimming")({
  head: () => ({
    meta: [
      { title: "Kids Swimming Lessons Bali — Children Swimming School" },
      { name: "description", content: "Kids swimming lessons in Bali — safety-first, gentle, game-based teaching for children in Bukit, Sanur and Ubud. Private and sibling lessons." },
      { property: "og:title", content: "Kids Swimming Lessons in Bali" },
      { property: "og:description", content: "Gentle, safety-first children's swimming school in Bali — Bukit, Sanur, Ubud." },
      { property: "og:url", content: "/kids-swimming" },
    ],
    links: [{ rel: "canonical", href: "/kids-swimming" }],
  }),
  component: Kids,
});

function Kids() {
  return (
    <>
      <PageHero
        eyebrow="Kids Swimming"
        title="Kids swimming lessons in Bali."
        subtitle="A gentle, safety-first swimming school for children in Bukit, Sanur and Ubud. Confidence built through games, patience and individual attention."
      />
      <section className="mx-auto max-w-4xl px-5 lg:px-10 py-20 space-y-10">
        <Block title="Safety and confidence first" body="Every child learns water survival skills before strokes — calm breathing, safe floating, and how to find the wall. We build confidence one small win at a time." />
        <Block title="A gentle approach" body="No pressure, no fear. We follow each child's pace and temperament, with coaches who genuinely love working with kids." />
        <Block title="Learning through games" body="Our youngest swimmers learn through play — animal walks, treasure dives, breathing games — so skills stick without feeling like a lesson." />
        <Block title="Pool safety basics" body="From entries and exits to staying calm if they slip in fully clothed. Pool safety is not an afterthought." />
        <Block title="Ocean safety basics" body="Bali is an island. We introduce age-appropriate ocean awareness: waves, currents, rip tides, what to do if you can't touch." />

        <div>
          <SectionEyebrow>Parent FAQ</SectionEyebrow>
          <div className="mt-5 space-y-3">
            {[
              ["What age do you start?", "From age 3 — younger if the child is comfortable and motivated."],
              ["Do parents stay during lessons?", "Yes, parents are welcome. Some kids settle faster when parents are nearby; others prefer space."],
              ["What if my child is scared of water?", "Perfect — that's where we shine. The first lesson focuses entirely on comfort and trust."],
              ["Can siblings train together?", "Yes, and we offer special sibling pair pricing."],
              ["How many lessons until they can swim?", "Most children swim short distances independently within 6–12 lessons, depending on age and starting point."],
            ].map(([q, a]) => (
              <details key={q} className="group rounded-xl border border-ocean/10 bg-white p-5">
                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-ocean">
                  {q}<span className="text-pool group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-ink/70">{a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-ocean p-8 text-center text-surface">
          <h3 className="font-display text-2xl">Book your child's first lesson</h3>
          <p className="mt-2 text-surface/80">We'll match a coach to your child's age and personality.</p>
          <div className="mt-6 flex justify-center">
            <WhatsAppCTA message="Hi Unity! I'd like to book kids swimming lessons in Bali." label="Book on WhatsApp" />
          </div>
        </div>
      </section>
    </>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ocean">{title}</h2>
      <p className="mt-3 text-ink/70 leading-relaxed">{body}</p>
    </div>
  );
}
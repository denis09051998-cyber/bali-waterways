import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionEyebrow, WhatsAppCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Unity Swimming School Bali — Our Coaching Philosophy" },
      { name: "description", content: "Meet Unity Swimming School Bali — safety-first coaching for kids and adults across Bukit, Sanur and Ubud. Ocean experience, individual approach." },
      { property: "og:title", content: "About Unity Swimming School Bali" },
      { property: "og:description", content: "Safety-first coaching for kids and adults across Bukit, Sanur and Ubud." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A trusted swim school for Bali's international families."
        subtitle="Built on safety, individualized attention, and a genuine love for the water. We coach kids, adults, beginners, and ocean swimmers across the island."
      />
      <section className="mx-auto max-w-4xl px-5 lg:px-10 py-20 space-y-12">
        <div>
          <SectionEyebrow>Our Story</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold">Born in Bali, for Bali.</h2>
          <p className="mt-5 text-ink/70 leading-relaxed">
            Unity Swimming School was founded by coaches who fell in love with Bali's waters and recognized something missing: a calm, professional, family-friendly swim school for the international community. We bring international coaching standards to villa pools across Bukit, Sanur and Ubud — and to the open ocean for those ready for it.
          </p>
        </div>

        <div>
          <SectionEyebrow>Coaching Philosophy</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold">Patience, progression, presence.</h2>
          <p className="mt-5 text-ink/70 leading-relaxed">
            We don't push students. We meet them where they are. A nervous four-year-old, an adult who's never put their face under water, a triathlete refining their freestyle — each gets a curriculum tailored to their pace, body and goals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            ["Safety-first approach", "Water safety, rescue posture and breathing are non-negotiable foundations in every lesson."],
            ["Individual approach", "Plans, pace, and even music are adapted to each student. No assembly-line teaching."],
            ["Kids & adults", "Two distinct teaching mindsets. We're fluent in both — playful with kids, calm with adults."],
            ["Ocean experience", "We swim Bali's coastline ourselves. Our open-water coaching comes from real practice, not theory."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-ocean/10 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-ocean">{t}</h3>
              <p className="mt-2 text-sm text-ink/65">{d}</p>
            </div>
          ))}
        </div>

        <div>
          <SectionEyebrow>Our Coaches</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold">The team</h2>
          <p className="mt-5 text-ink/70">Real photos coming soon. Below are placeholder cards for our coaches.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {["Head Coach", "Kids Specialist", "Ocean Coach"].map((role) => (
              <div key={role} className="rounded-2xl border border-ocean/10 bg-white p-5">
                <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-pool/30 to-ocean/30" />
                <p className="mt-4 text-xs font-semibold tracking-widest uppercase text-tropical">{role}</p>
                <p className="mt-1 font-display text-lg text-ocean">Photo placeholder</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-ocean/10 bg-sand/40 p-8 text-center">
          <h3 className="font-display text-2xl font-semibold text-ocean">Ready to start?</h3>
          <p className="mt-2 text-ink/70">Tell us your area, the student's age and level — we'll suggest the best lesson format.</p>
          <div className="mt-6 flex justify-center">
            <WhatsAppCTA message="Hi Unity! I'd like to learn more about your lessons." />
          </div>
        </div>
      </section>
    </>
  );
}
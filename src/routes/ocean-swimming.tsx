import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionEyebrow, WhatsAppCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/ocean-swimming")({
  head: () => ({
    meta: [
      { title: "Ocean Swimming Bali — Open Water Confidence & Coaching" },
      { name: "description", content: "Ocean swimming sessions in Bali for confident pool swimmers. Open water confidence, sighting, current reading and safety." },
      { property: "og:title", content: "Ocean Swimming in Bali" },
      { property: "og:description", content: "Open water confidence coaching for confident swimmers in Bali." },
      { property: "og:url", content: "/ocean-swimming" },
    ],
    links: [{ rel: "canonical", href: "/ocean-swimming" }],
  }),
  component: Ocean,
});

function Ocean() {
  return (
    <>
      <PageHero
        eyebrow="Premium Program"
        title="Ocean Swimming in Bali."
        subtitle="A premium program for confident swimmers ready to step beyond the pool. Master Bali's currents, sighting and breathing in open water — safely."
      />
      <section className="mx-auto max-w-4xl px-5 lg:px-10 py-20 space-y-10">
        <Block title="Ocean confidence" body="The ocean isn't a bigger pool — it moves, breathes and demands awareness. We bridge the gap between pool fitness and real open-water confidence." />
        <Block title="Safety rules" body="Every ocean session opens with safety briefing — buddy systems, surface signals, exit points and how to read a rip current. Safety is the foundation, not an add-on." />
        <Block title="Who this is for" body="Adults and teenage swimmers who can comfortably swim 200m+ in a pool and want to expand their range into the ocean." />

        <div className="rounded-2xl border-2 border-tropical/40 bg-tropical/5 p-6">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-tropical">Important</p>
          <h3 className="mt-2 font-display text-xl text-ocean">Requirement: confident pool swimmer</h3>
          <p className="mt-2 text-sm text-ink/70">For your safety this program is only available to swimmers who can already swim continuously in a pool. If you're not there yet, start with our Adult Swimming Lessons.</p>
        </div>

        <Block title="Benefits" body="Build true endurance, learn to relax under chop, sharpen sighting, and unlock the joy of swimming Bali's coastline. Many of our ocean swimmers prep for triathlons or open-water events." />

        <div className="rounded-3xl bg-ocean p-8 text-center text-surface">
          <SectionEyebrow>Ready for the ocean?</SectionEyebrow>
          <h3 className="mt-2 font-display text-2xl">Book an ocean session</h3>
          <div className="mt-6 flex justify-center">
            <WhatsAppCTA message="Hi Unity! I'd like to book an ocean swimming session." label="Book on WhatsApp" />
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
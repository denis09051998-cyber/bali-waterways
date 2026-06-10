import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionEyebrow, WhatsAppCTA } from "@/components/site/CTA";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/adult-swimming")({
  head: () => ({
    meta: [
      { title: "Adult Swimming Lessons Bali — Learn to Swim & Private Coach | UNITY" },
      { name: "description", content: "Adult swimming lessons in Bali. Beginners, fear of water, breathing, technique and endurance with a private swimming coach in Bukit, Sanur, Ubud, Canggu." },
      { name: "keywords", content: "adult swimming lessons Bali, learn to swim Bali, private swimming lessons Bali, fear of water Bali" },
      { property: "og:title", content: "Adult Swimming Lessons in Bali" },
      { property: "og:description", content: "Learn to swim Bali — adult beginners, fear of water, technique and endurance coaching." },
      { property: "og:url", content: "/adult-swimming" },
    ],
    links: [{ rel: "canonical", href: "/adult-swimming" }],
  }),
  component: Adults,
});

function Adults() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("ad.eyebrow")} title={t("ad.title")} subtitle={t("ad.sub")} />
      <section className="mx-auto max-w-4xl px-5 lg:px-10 py-20 space-y-10">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i}>
            <h2 className="font-display text-2xl font-semibold text-ocean">{t(`ad.b${i}.t`)}</h2>
            <p className="mt-3 text-ink/70 leading-relaxed">{t(`ad.b${i}.d`)}</p>
          </div>
        ))}
        <div className="rounded-3xl bg-ocean p-8 text-center text-surface">
          <SectionEyebrow>{t("ad.ctaEyebrow")}</SectionEyebrow>
          <h3 className="mt-2 font-display text-2xl">{t("ad.ctaTitle")}</h3>
          <div className="mt-6 flex justify-center">
            <WhatsAppCTA message={t("ad.msg")} label={t("loc.bookOnWa")} />
          </div>
        </div>
      </section>
    </>
  );
}

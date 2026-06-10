import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionEyebrow, WhatsAppCTA } from "@/components/site/CTA";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/ocean-swimming")({
  head: () => ({
    meta: [
      { title: "Ocean Swimming Bali — Open Water Confidence & Coaching | UNITY" },
      { name: "description", content: "Ocean swimming sessions in Bali for confident pool swimmers. Open water confidence, sighting, current reading and safety with UNITY Swimming School." },
      { name: "keywords", content: "ocean swimming Bali, open water swimming Bali, UNITY Swimming School" },
      { property: "og:title", content: "Ocean Swimming in Bali" },
      { property: "og:description", content: "Open water confidence coaching for confident swimmers in Bali." },
      { property: "og:url", content: "/ocean-swimming" },
    ],
    links: [{ rel: "canonical", href: "/ocean-swimming" }],
  }),
  component: Ocean,
});

function Ocean() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("oc.eyebrow")} title={t("oc.title")} subtitle={t("oc.sub")} />
      <section className="mx-auto max-w-4xl px-5 lg:px-10 py-20 space-y-10">
        {[1,2,3].map((i) => (
          <div key={i}>
            <h2 className="font-display text-2xl font-semibold text-ocean">{t(`oc.b${i}.t`)}</h2>
            <p className="mt-3 text-ink/70 leading-relaxed">{t(`oc.b${i}.d`)}</p>
          </div>
        ))}
        <div className="rounded-2xl border-2 border-tropical/40 bg-tropical/5 p-6">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-tropical">{t("oc.warnLabel")}</p>
          <h3 className="mt-2 font-display text-xl text-ocean">{t("oc.warnTitle")}</h3>
          <p className="mt-2 text-sm text-ink/70">{t("oc.warnBody")}</p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-ocean">{t("oc.b4.t")}</h2>
          <p className="mt-3 text-ink/70 leading-relaxed">{t("oc.b4.d")}</p>
        </div>
        <div className="rounded-3xl bg-ocean p-8 text-center text-surface">
          <SectionEyebrow>{t("oc.ctaEyebrow")}</SectionEyebrow>
          <h3 className="mt-2 font-display text-2xl">{t("oc.ctaTitle")}</h3>
          <div className="mt-6 flex justify-center">
            <WhatsAppCTA message={t("oc.msg")} label={t("loc.bookOnWa")} />
          </div>
        </div>
      </section>
    </>
  );
}

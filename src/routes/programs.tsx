import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionEyebrow, WhatsAppCTA } from "@/components/site/CTA";
import { useI18n } from "@/lib/i18n";
import pgKids from "@/assets/pg_kids.jpg.asset.json";
import pgAdults from "@/assets/pg_adults.jpg.asset.json";
import pgPrivate from "@/assets/pg_private.jpg.asset.json";
import pgGroup from "@/assets/pg_group.jpg.asset.json";
import pgOcean from "@/assets/pg_ocean.webp.asset.json";
import pgDiving from "@/assets/pg_diving.jpg.asset.json";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Swimming Programs — UNITY Swimming School Bali" },
      { name: "description", content: "All swimming programs at UNITY Bali: kids, adults, private, group, beginners, fear of water, technique, and ocean swimming." },
      { name: "keywords", content: "swimming school Bali, swimming programs Bali, private swimming lessons Bali, group swimming lessons Bali" },
      { property: "og:title", content: "Swimming Programs — UNITY Swimming School Bali" },
      { property: "og:description", content: "Kids, adults, private, group, beginners, fear of water, technique and ocean swimming." },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: Programs,
});

function Programs() {
  const { t } = useI18n();
  const programImages = [pgKids, pgAdults, pgPrivate, pgGroup, pgOcean, pgDiving];
  const programs = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <PageHero eyebrow={t("pgs.eyebrow")} title={t("pgs.title")} subtitle={t("pgs.sub")} />
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-20 space-y-6">
        {programs.map((i) => (
          <article key={i} className="grid gap-8 rounded-3xl border border-ocean/10 bg-white p-6 sm:p-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <SectionEyebrow>{t("pgs.programLabel")} {String(i).padStart(2, "0")}</SectionEyebrow>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-ocean">{t(`pgs.p${i}.t`)}</h2>
              <img
                src={programImages[i - 1].url}
                alt={t(`pgs.p${i}.t`)}
                loading="lazy"
                className="mt-6 aspect-[4/3] w-full rounded-2xl object-cover"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 self-center">
              <Field label={t("pgs.who")} value={t(`pgs.p${i}.who`)} />
              <Field label={t("pgs.learn")} value={t(`pgs.p${i}.learn`)} />
              <Field label={t("pgs.benefits")} value={t(`pgs.p${i}.benefits`)} />
              <Field label={t("pgs.format")} value={t(`pgs.p${i}.format`)} />
              <div className="sm:col-span-2 mt-2">
                <WhatsAppCTA message={t(`pgs.p${i}.msg`)} label={`${t("pgs.book")} — ${t(`pgs.p${i}.t`)}`} />
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

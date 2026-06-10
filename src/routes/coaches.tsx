import { createFileRoute } from "@tanstack/react-router";
import { PageHero, WhatsAppCTA } from "@/components/site/CTA";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/coaches")({
  head: () => ({
    meta: [
      { title: "Coaches — UNITY Swimming School Bali" },
      { name: "description", content: "Meet the UNITY Swimming School Bali coaches. Head Coach plus a specialist Coach for kids, adults, ocean swimming and freediving." },
      { property: "og:title", content: "Our Coaches — UNITY Swimming School Bali" },
      { property: "og:description", content: "Head Coach and specialist Coach across Bukit, Sanur, Ubud and Canggu." },
      { property: "og:url", content: "/coaches" },
    ],
    links: [{ rel: "canonical", href: "/coaches" }],
  }),
  component: Coaches,
});

type Coach = {
  num: 1 | 2;
  roleKey: string;
  head?: boolean;
};

const COACHES: Coach[] = [
  { num: 1, roleKey: "co.head", head: true },
  { num: 2, roleKey: "co.coach" },
];

function CoachCard({ c, featured }: { c: Coach; featured?: boolean }) {
  const { t } = useI18n();
  const name = t(`co.name${c.num}`);
  return (
    <article className={`rounded-3xl border border-ocean/10 bg-white overflow-hidden ${featured ? "lg:grid lg:grid-cols-[1.1fr_1fr]" : ""}`}>
      <div className={`relative ${featured ? "aspect-[4/5] lg:aspect-auto" : "aspect-[4/5]"} w-full bg-gradient-to-br from-ocean via-ocean/85 to-pool/60 flex items-end p-6`}>
        <div className="text-surface">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase opacity-80">{t(c.roleKey)}</p>
          <h3 className="mt-1 font-display text-2xl sm:text-3xl font-semibold leading-tight">{name}</h3>
        </div>
        <span className="absolute right-4 top-4 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-surface">
          {t("co.photoSoon")}
        </span>
      </div>
      <div className="p-6 sm:p-8">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-tropical">{t("co.exp")}</p>
        <p className="mt-1 text-sm text-ink/80 font-medium">{t(`co.exp${c.num}`)}</p>
        <p className="mt-4 text-[11px] font-semibold tracking-widest uppercase text-tropical">{t("co.spec")}</p>
        <p className="mt-1 text-sm text-ink/80">{t(`co.spec${c.num}`)}</p>
        <p className="mt-4 text-[11px] font-semibold tracking-widest uppercase text-tropical">{t("co.bio")}</p>
        <p className="mt-2 text-sm text-ink/70 leading-relaxed">{t(`co.bio${c.num}`)}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {[1,2,3,4].map((tg) => (
            <span key={tg} className="rounded-full bg-pool/10 px-3 py-1 text-[11px] font-semibold text-pool">{t(`co.tag${c.num}.${tg}`)}</span>
          ))}
        </div>
        <div className="mt-6">
          <WhatsAppCTA message={`Hi UNITY! I'd like to book a lesson with the ${t(c.roleKey)}.`} label={t("cta.bookLesson")} />
        </div>
      </div>
    </article>
  );
}

function Coaches() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("co.eyebrow")} title={t("co.title")} subtitle={t("co.sub")} />
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-20 space-y-8">
        <CoachCard c={COACHES[0]} featured />
        <CoachCard c={COACHES[1]} />
      </section>
    </>
  );
}

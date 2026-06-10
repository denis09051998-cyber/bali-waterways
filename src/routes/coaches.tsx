import { createFileRoute } from "@tanstack/react-router";
import { PageHero, WhatsAppCTA } from "@/components/site/CTA";
import { useI18n } from "@/lib/i18n";
import denisImg from "@/assets/coach_denis.png.asset.json";
import assistantImg from "@/assets/coach_assistant.png.asset.json";

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
  photo: string;
  head?: boolean;
};

const COACHES: Coach[] = [
  { num: 1, roleKey: "co.head", photo: denisImg.url, head: true },
  { num: 2, roleKey: "co.coach", photo: assistantImg.url },
];

function CoachCard({ c }: { c: Coach }) {
  const { t } = useI18n();
  const name = t(`co.name${c.num}`);
  return (
    <article className="group rounded-3xl border border-ocean/10 bg-white overflow-hidden flex flex-col h-full transition-shadow hover:shadow-xl">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-ocean/90 via-pool/70 to-tropical/60">
        <img
          src={c.photo}
          alt={`${name} — ${t(c.roleKey)} at UNITY Swimming School Bali`}
          className="absolute inset-0 h-full w-full object-cover object-top"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean/85 via-ocean/10 to-transparent" />
        {c.head && (
          <span className="absolute left-4 top-4 rounded-full bg-tropical px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-surface shadow">
            {t("co.head")}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-6 text-surface">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase opacity-90">{t(c.roleKey)}</p>
          <h3 className="mt-1 font-display text-2xl sm:text-3xl font-semibold leading-tight">{name}</h3>
        </div>
      </div>
      <div className="p-6 sm:p-8 flex-1 flex flex-col">
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
        <div className="mt-auto pt-6">
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
      <section className="mx-auto max-w-6xl px-5 lg:px-10 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {COACHES.map((c) => (
            <CoachCard key={c.num} c={c} />
          ))}
        </div>
      </section>
    </>
  );
}

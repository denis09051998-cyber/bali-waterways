import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionEyebrow, BookingCTA } from "@/components/site/CTA";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/kids-swimming")({
  head: () => ({
    meta: [
      { title: "Kids Swimming Lessons Bali — Children Swimming School | UNITY" },
      { name: "description", content: "Kids swimming lessons in Bali — safety-first, game-based teaching for children in Jimbaran, Ungasan, Nusa Dua, Sanur, Ubud and Canggu. Private, sibling and small-group lessons." },
      { name: "keywords", content: "kids swimming lessons Bali, children swimming Bali, kids swimming school Bali, swimming lessons Jimbaran, swimming lessons Ungasan, swimming lessons Nusa Dua, swimming lessons Sanur, swimming lessons Ubud, swimming lessons Canggu" },
      { property: "og:title", content: "Kids Swimming Lessons in Bali — UNITY Swimming School" },
      { property: "og:description", content: "Children's swimming school in Bali — Jimbaran, Ungasan, Nusa Dua, Sanur, Ubud, Canggu." },
      { property: "og:url", content: "/kids-swimming" },
    ],
    links: [{ rel: "canonical", href: "/kids-swimming" }],
  }),
  component: Kids,
});

function Kids() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("kids.eyebrow")} title={t("kids.title")} subtitle={t("kids.sub")} />
      <section className="mx-auto max-w-4xl px-5 lg:px-10 py-20 space-y-10">
        {[1,2,3,5].map((i) => (
          <div key={i}>
            <h2 className="font-display text-2xl font-semibold text-ocean">{t(`kids.b${i}.t`)}</h2>
            <p className="mt-3 text-ink/70 leading-relaxed">{t(`kids.b${i}.d`)}</p>
          </div>
        ))}

        <div>
          <SectionEyebrow>KIDS</SectionEyebrow>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ocean">{t("kids.sched.title")}</h2>
          <div className="mt-5 space-y-6">
            <div>
              <h3 className="font-display text-lg font-semibold text-ocean">{t("kids.area.nusadua")}</h3>
              <div className="mt-3 space-y-3">
            <div className="rounded-xl border border-ocean/10 bg-white p-4">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-pool">{t("kids.sched.adv")}</h3>
              <ul className="mt-2 space-y-1 text-sm text-ink/80">
                <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-pool" />{t("kids.sched.m1")}</li>
                <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-pool" />{t("kids.sched.w1")}</li>
                <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-pool" />{t("kids.sched.f1")}</li>
              </ul>
            </div>
            <div className="rounded-xl border border-ocean/10 bg-white p-4">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-pool">{t("kids.sched.int")}</h3>
              <ul className="mt-2 space-y-1 text-sm text-ink/80">
                <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-pool" />{t("kids.sched.m2")}</li>
                <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-pool" />{t("kids.sched.th2")}</li>
              </ul>
            </div>
            <div className="rounded-xl border border-ocean/10 bg-white p-4">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-pool">{t("kids.sched.beg")}</h3>
              <ul className="mt-2 space-y-1 text-sm text-ink/80">
                <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-pool" />{t("kids.sched.w3")}</li>
                <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-pool" />{t("kids.sched.f3")}</li>
              </ul>
            </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-ocean">{t("kids.area.sanur")}</h3>
              <div className="mt-3 rounded-xl border border-ocean/10 bg-white p-4">
                <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-pool">{t("kids.group.title")}</h4>
                <ul className="mt-2 space-y-1 text-sm text-ink/80">
                  <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-pool" />{t("kids.sanur.t")}</li>
                  <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-pool" />{t("kids.sanur.th")}</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-ocean">{t("kids.area.canggu")}</h3>
              <div className="mt-3 rounded-xl border border-ocean/10 bg-white p-4">
                <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-pool">{t("kids.group.title")}</h4>
                <p className="mt-2 text-sm text-ink/80">{t("kids.canggu.note")}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SectionEyebrow>{t("kids.faq")}</SectionEyebrow>
          <div className="mt-5 space-y-3">
            {[1,2,3,4,5].map((i) => (
              <details key={i} className="group rounded-xl border border-ocean/10 bg-white p-5">
                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-ocean">
                  {t(`kids.faq${i}.q`)}<span className="text-pool group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-ink/70">{t(`kids.faq${i}.a`)}</p>
              </details>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ocean">{t("kids.pr.title")}</h2>
          <div className="mt-4 space-y-1">
            {[
              { label: t("pr.kids.g.t"), price: t("pr.kids.g.p") },
              { label: t("pr.kids.g.pack"), price: t("pr.kids.g.packP") },
              { label: t("pr.kids.p30.t"), price: t("pr.kids.p30.p") },
              { label: t("pr.kids.p30.pack"), price: t("pr.kids.p30.packP") },
              { label: t("pr.kids.p45.t"), price: t("pr.kids.p45.p") },
              { label: t("pr.kids.p45.pack"), price: t("pr.kids.p45.packP") },
              { label: t("pr.kids.villa.t"), price: t("pr.kids.villa.p") },
              { label: t("pr.kids.villa.pack"), price: t("pr.kids.villa.packP") },
            ].map((row, i) => (
              <div key={i} className="flex items-baseline gap-2 py-2">
                <span className="text-sm text-ink/80 shrink-0">{row.label}</span>
                <span className="flex-1 border-b border-dotted border-ink/20 self-end mb-1.5 min-w-[1rem]" />
                <span className="text-sm font-semibold text-pool whitespace-nowrap">{row.price}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-ink/55 leading-relaxed">{t("pr.cancel")}</p>
        </div>

        <div className="rounded-3xl bg-ocean p-8 text-center text-surface">
          <h3 className="font-display text-2xl">{t("kids.ctaTitle")}</h3>
          <p className="mt-2 text-surface/80">{t("kids.ctaSub")}</p>
          <div className="mt-6 flex justify-center">
            <BookingCTA label={t("cta.bookLesson")} />
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageHero, SectionEyebrow } from "@/components/site/CTA";
import { useI18n } from "@/lib/i18n";
import kidsGroupImg from "@/assets/ph_kids_group.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About UNITY Swimming School Bali — Our Coaching Philosophy" },
      { name: "description", content: "Meet UNITY Swimming School Bali — safety-first coaching for kids and adults across Bukit, Sanur and Ubud. Ocean experience, individual approach." },
      { property: "og:title", content: "About UNITY Swimming School Bali" },
      { property: "og:description", content: "Safety-first coaching for kids and adults across Bukit, Sanur and Ubud." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  const { t } = useI18n();
  return (
    <>
      <PageHero
        eyebrow={t("ab.eyebrow")}
        title={t("ab.title")}
        subtitle={t("ab.sub")}
      />
      <section className="mx-auto max-w-7xl px-5 lg:px-10 -mt-10">
        <img src={kidsGroupImg.url} alt="Coach teaching kids by the pool in Bali" className="aspect-[16/9] w-full rounded-3xl object-cover shadow-xl" />
      </section>
      <section className="mx-auto max-w-4xl px-5 lg:px-10 py-20 space-y-12">
        <div>
          <SectionEyebrow>{t("ab.story")}</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold">{t("ab.storyTitle")}</h2>
          <p className="mt-5 text-ink/70 leading-relaxed">{t("ab.storyBody")}</p>
        </div>

        <div>
          <SectionEyebrow>{t("ab.phil")}</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold">{t("ab.philTitle")}</h2>
          <p className="mt-5 text-ink/70 leading-relaxed">{t("ab.philBody")}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {[1,2,3,4].map((i) => (
            <div key={i} className="rounded-2xl border border-ocean/10 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-ocean">{t(`ab.v${i}.t`)}</h3>
              <p className="mt-2 text-sm text-ink/65">{t(`ab.v${i}.d`)}</p>
            </div>
          ))}
        </div>

        <div>
          <SectionEyebrow>{t("co.eyebrow")}</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold">{t("co.title")}</h2>
          <h3 className="mt-5 font-display text-xl font-semibold text-ocean">{t("ab.teamTitle")}</h3>
          <ul className="mt-3 space-y-2 text-ink/70">
            {[1,2,3].map((i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-2 size-1.5 rounded-full bg-pool shrink-0" />
                <span>{t(`ab.teamLi${i}`)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-ink/70">{t("ab.teamClosing")}</p>
          <div className="mt-6">
            <Link to="/coaches" className="inline-flex items-center justify-center rounded-full bg-pool px-5 py-3 text-sm font-semibold text-surface hover:bg-ocean">{t("nav.coaches")} →</Link>
          </div>
        </div>

        <div className="rounded-3xl border border-ocean/10 bg-sand/40 p-8 text-center">
          <h3 className="font-display text-2xl font-semibold text-ocean">{t("cta.start")}</h3>
          <p className="mt-2 text-ink/70">{t("cta.startSub")}</p>
          <div className="mt-6 flex justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-pool px-5 py-3 text-sm font-semibold text-surface hover:bg-ocean">{t("cta.bookLesson")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
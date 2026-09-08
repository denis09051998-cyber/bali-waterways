import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionEyebrow } from "@/components/site/CTA";
import { useI18n } from "@/lib/i18n";
import { LOCATION_SLUGS, LOCATION_ROUTES, locKey } from "@/components/site/LocationPage";

const BASE = "https://unityswimmingbali.com";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: [
      { title: "Swimming Lessons Across Bali | Locations | UNITY" },
      {
        name: "description",
        content:
          "Swimming lessons across Bali with UNITY Swimming School — Canggu, Ubud, Nusa Dua, Sanur, Jimbaran and Ungasan. Private and group lessons for kids and adults.",
      },
      { property: "og:title", content: "Swimming Lessons Across Bali | Locations | UNITY" },
      {
        property: "og:description",
        content:
          "Choose your area in Bali — Canggu, Ubud, Nusa Dua, Sanur, Jimbaran & Ungasan — and see how swimming lessons work there.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE}/locations` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${BASE}/locations` }],
  }),
  component: LocationsHub,
});

function LocationsHub() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("lx.eyebrow")} title={t("lx.hub.h1")} subtitle={t("lx.hub.intro")} />
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-16 sm:py-20">
        <SectionEyebrow>{t("lx.eyebrow")}</SectionEyebrow>
        <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-ocean">{t("loc.title")}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATION_SLUGS.map((s) => {
            const k = locKey(s);
            return (
              <article
                key={s}
                className="flex flex-col rounded-3xl border border-ocean/10 bg-white p-6 transition-colors hover:border-pool/40"
              >
                <div className="aspect-[16/9] w-full rounded-2xl bg-gradient-to-br from-pool/30 via-ocean/20 to-tropical/20" />
                <h3 className="mt-5 font-display text-xl font-semibold text-ocean">{t(`lx.${k}.name`)}</h3>
                <p className="mt-2 flex-1 text-sm text-ink/70 leading-relaxed">{t(`lx.${k}.card`)}</p>
                <Link
                  to={LOCATION_ROUTES[s]}
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-pool px-5 py-3 text-sm font-semibold text-surface transition-colors hover:bg-ocean"
                >
                  {t("lx.view")}
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://unityswimmingbali.com";

const LANGS = ["en", "ru", "id"] as const;
type LangCode = (typeof LANGS)[number];

function altPath(lang: LangCode, path: string): string {
  // English (default) lives at the unprefixed URL; ru/id use language prefixes.
  if (lang === "en") return path;
  // Homepage is "/" → "/ru/" or "/id/"; subpages prefix the path.
  return path === "/" ? `/${lang}/` : `/${lang}${path}`;
}

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
  // When true, emit one <url> per language with xhtml:link hreflang alternates.
  multilingual?: boolean;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0", multilingual: true },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/programs", changefreq: "monthly", priority: "0.9" },
          { path: "/prices", changefreq: "monthly", priority: "0.8" },
          { path: "/kids-swimming-lessons-bali", changefreq: "monthly", priority: "0.9", multilingual: true },
          { path: "/adult-swimming-lessons-bali", changefreq: "monthly", priority: "0.9", multilingual: true },
          { path: "/locations", changefreq: "monthly", priority: "0.8" },
          { path: "/ocean-swimming", changefreq: "monthly", priority: "0.8" },
          { path: "/freediving-bali", changefreq: "monthly", priority: "0.9", multilingual: true },
          { path: "/coaches", changefreq: "monthly", priority: "0.8" },
          { path: "/philosophy/water-safety", changefreq: "monthly", priority: "0.6" },
          { path: "/philosophy/learn-to-swim", changefreq: "monthly", priority: "0.6" },
          { path: "/philosophy/technique", changefreq: "monthly", priority: "0.6" },
          { path: "/philosophy/ocean-swimming", changefreq: "monthly", priority: "0.6" },
          { path: "/philosophy/freediving", changefreq: "monthly", priority: "0.6" },
          { path: "/philosophy/confidence", changefreq: "monthly", priority: "0.6" },
          { path: "/faq", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
        ];

        const urls: string[] = [];
        for (const e of entries) {
          if (e.multilingual) {
            const alternates = LANGS.map(
              (l) =>
                `      <xhtml:link rel="alternate" hreflang="${l}" href="${BASE_URL}${altPath(l, e.path)}" />`,
            ).join("\n");
            const xDefault = `      <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${e.path}" />`;
            for (const l of LANGS) {
              const loc = `${BASE_URL}${altPath(l, e.path)}`;
              urls.push(
                `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n${alternates}\n${xDefault}\n  </url>`,
              );
            }
          } else {
            urls.push(
              `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
            );
          }
        }

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
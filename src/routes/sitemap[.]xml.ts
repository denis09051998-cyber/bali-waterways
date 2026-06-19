import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://unityswimmingbali.com";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/programs", changefreq: "monthly", priority: "0.9" },
          { path: "/prices", changefreq: "monthly", priority: "0.8" },
          { path: "/kids-swimming", changefreq: "monthly", priority: "0.9" },
          { path: "/adult-swimming", changefreq: "monthly", priority: "0.9" },
          { path: "/locations", changefreq: "monthly", priority: "0.8" },
          { path: "/ocean-swimming", changefreq: "monthly", priority: "0.8" },
          { path: "/freediving", changefreq: "monthly", priority: "0.9" },
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
        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
import { createFileRoute } from "@tanstack/react-router";
import { Index } from "./index";
import heroImg from "@/assets/ph_crawl.jpg.asset.json";

export const Route = createFileRoute("/id/")({
  head: () => ({
    meta: [
      { title: "Sekolah Renang di Bali | Unity Swimming School Bali" },
      { name: "description", content: "Unity Swimming School Bali menawarkan les renang untuk anak-anak dan dewasa, pelatih renang pribadi, latihan renang di laut, dan kelas freediving pemula di Bali." },
      { name: "keywords", content: "sekolah renang Bali, les renang Bali, les renang anak Bali, les renang dewasa Bali, pelatih renang pribadi Bali, freediving Bali" },
      { property: "og:locale", content: "id_ID" },
      { property: "og:title", content: "Sekolah Renang di Bali | Unity Swimming School Bali" },
      { property: "og:description", content: "Les renang untuk anak-anak dan dewasa, pelatih renang pribadi, latihan renang di laut, dan kelas freediving pemula di Bali." },
      { property: "og:url", content: "https://unityswimmingbali.com/id/" },
      { property: "og:image", content: heroImg.url },
      { name: "twitter:image", content: heroImg.url },
    ],
    links: [
      { rel: "canonical", href: "https://unityswimmingbali.com/id/" },
      { rel: "alternate", hrefLang: "en", href: "https://unityswimmingbali.com/" },
      { rel: "alternate", hrefLang: "ru", href: "https://unityswimmingbali.com/ru/" },
      { rel: "alternate", hrefLang: "id", href: "https://unityswimmingbali.com/id/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://unityswimmingbali.com/" },
    ],
  }),
  component: Index,
});
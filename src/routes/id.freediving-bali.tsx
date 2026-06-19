import { createFileRoute } from "@tanstack/react-router";
import { Freediving } from "./freediving-bali";
import freediveImg from "@/assets/ph_freediving_hero.jpg.asset.json";

export const Route = createFileRoute("/id/freediving-bali")({
  head: () => ({
    meta: [
      { title: "Freediving Bali untuk Pemula | Unity Swimming School" },
      { name: "description", content: "Kelas freediving pemula di Bali: pernapasan, relaksasi, kepercayaan diri di air, dan dasar-dasar freediving yang aman bersama pelatih profesional." },
      { name: "keywords", content: "freediving Bali, kelas freediving pemula Bali, kursus freediving Bali, tahan napas Bali, apnea Bali" },
      { property: "og:locale", content: "id_ID" },
      { property: "og:title", content: "Freediving Bali untuk Pemula | Unity Swimming School" },
      { property: "og:description", content: "Kelas freediving pemula di Bali — pernapasan, relaksasi, kepercayaan diri di air, dasar yang aman." },
      { property: "og:url", content: "https://unityswimmingbali.com/id/freediving-bali" },
      { property: "og:image", content: freediveImg.url },
      { name: "twitter:image", content: freediveImg.url },
    ],
    links: [
      { rel: "canonical", href: "https://unityswimmingbali.com/id/freediving-bali" },
      { rel: "alternate", hrefLang: "en", href: "https://unityswimmingbali.com/freediving-bali" },
      { rel: "alternate", hrefLang: "ru", href: "https://unityswimmingbali.com/ru/freediving-bali" },
      { rel: "alternate", hrefLang: "id", href: "https://unityswimmingbali.com/id/freediving-bali" },
      { rel: "alternate", hrefLang: "x-default", href: "https://unityswimmingbali.com/freediving-bali" },
    ],
  }),
  component: Freediving,
});
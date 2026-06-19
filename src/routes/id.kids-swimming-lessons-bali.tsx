import { createFileRoute } from "@tanstack/react-router";
import { Kids } from "./kids-swimming-lessons-bali";

export const Route = createFileRoute("/id/kids-swimming-lessons-bali")({
  head: () => ({
    meta: [
      { title: "Les Renang Anak di Bali | Unity Swimming School" },
      { name: "description", content: "Les renang yang aman dan menyenangkan untuk anak-anak di Bali bersama pelatih profesional. Kelas privat dan grup di Nusa Dua, Jimbaran, Ungasan, Sanur, Ubud, dan Canggu." },
      { name: "keywords", content: "les renang anak Bali, sekolah renang anak Bali, kursus renang anak Bali, les renang anak Nusa Dua, les renang anak Canggu" },
      { property: "og:locale", content: "id_ID" },
      { property: "og:title", content: "Les Renang Anak di Bali | Unity Swimming School" },
      { property: "og:description", content: "Les renang anak di Bali bersama pelatih profesional di Nusa Dua, Jimbaran, Ungasan, Sanur, Ubud, dan Canggu." },
      { property: "og:url", content: "https://unityswimmingbali.com/id/kids-swimming-lessons-bali" },
    ],
    links: [
      { rel: "canonical", href: "https://unityswimmingbali.com/id/kids-swimming-lessons-bali" },
      { rel: "alternate", hrefLang: "en", href: "https://unityswimmingbali.com/kids-swimming-lessons-bali" },
      { rel: "alternate", hrefLang: "ru", href: "https://unityswimmingbali.com/ru/kids-swimming-lessons-bali" },
      { rel: "alternate", hrefLang: "id", href: "https://unityswimmingbali.com/id/kids-swimming-lessons-bali" },
      { rel: "alternate", hrefLang: "x-default", href: "https://unityswimmingbali.com/kids-swimming-lessons-bali" },
    ],
  }),
  component: Kids,
});
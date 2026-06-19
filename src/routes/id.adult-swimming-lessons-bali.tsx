import { createFileRoute } from "@tanstack/react-router";
import { Adults } from "./adult-swimming-lessons-bali";

export const Route = createFileRoute("/id/adult-swimming-lessons-bali")({
  head: () => ({
    meta: [
      { title: "Les Renang Dewasa di Bali | Unity Swimming School" },
      { name: "description", content: "Les renang dewasa di Bali untuk pemula, peningkatan teknik, dan mengatasi rasa takut air. Kelas privat dan grup bersama Unity Swimming School." },
      { name: "keywords", content: "les renang dewasa Bali, belajar renang dewasa Bali, les renang privat Bali, pelatih renang pribadi Bali, takut air Bali" },
      { property: "og:locale", content: "id_ID" },
      { property: "og:title", content: "Les Renang Dewasa di Bali | Unity Swimming School" },
      { property: "og:description", content: "Les renang dewasa di Bali — pemula, teknik, mengatasi rasa takut air, kelas privat dan grup." },
      { property: "og:url", content: "https://unityswimmingbali.com/id/adult-swimming-lessons-bali" },
    ],
    links: [
      { rel: "canonical", href: "https://unityswimmingbali.com/id/adult-swimming-lessons-bali" },
      { rel: "alternate", hrefLang: "en", href: "https://unityswimmingbali.com/adult-swimming-lessons-bali" },
      { rel: "alternate", hrefLang: "ru", href: "https://unityswimmingbali.com/ru/adult-swimming-lessons-bali" },
      { rel: "alternate", hrefLang: "id", href: "https://unityswimmingbali.com/id/adult-swimming-lessons-bali" },
      { rel: "alternate", hrefLang: "x-default", href: "https://unityswimmingbali.com/adult-swimming-lessons-bali" },
    ],
  }),
  component: Adults,
});
import { createFileRoute } from "@tanstack/react-router";
import { Freediving } from "./freediving-bali";
import freediveImg from "@/assets/ph_freediving_hero.jpg.asset.json";

export const Route = createFileRoute("/ru/freediving-bali")({
  head: () => ({
    meta: [
      { title: "Фридайвинг на Бали для начинающих | Unity Swimming School" },
      { name: "description", content: "Фридайвинг на Бали для начинающих: дыхание, расслабление, уверенность в воде и безопасные основы фридайвинга с профессиональными тренерами." },
      { name: "keywords", content: "фридайвинг Бали, фридайвинг для начинающих Бали, курс фридайвинга Бали, задержка дыхания Бали, апноэ Бали" },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:title", content: "Фридайвинг на Бали для начинающих | Unity Swimming School" },
      { property: "og:description", content: "Фридайвинг на Бали для начинающих — дыхание, расслабление, уверенность в воде, безопасные основы." },
      { property: "og:url", content: "https://unityswimmingbali.com/ru/freediving-bali" },
      { property: "og:image", content: freediveImg.url },
      { name: "twitter:image", content: freediveImg.url },
    ],
    links: [
      { rel: "canonical", href: "https://unityswimmingbali.com/ru/freediving-bali" },
      { rel: "alternate", hrefLang: "en", href: "https://unityswimmingbali.com/freediving-bali" },
      { rel: "alternate", hrefLang: "ru", href: "https://unityswimmingbali.com/ru/freediving-bali" },
      { rel: "alternate", hrefLang: "id", href: "https://unityswimmingbali.com/id/freediving-bali" },
      { rel: "alternate", hrefLang: "x-default", href: "https://unityswimmingbali.com/freediving-bali" },
    ],
  }),
  component: Freediving,
});
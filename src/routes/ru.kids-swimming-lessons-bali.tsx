import { createFileRoute } from "@tanstack/react-router";
import { Kids } from "./kids-swimming-lessons-bali";

export const Route = createFileRoute("/ru/kids-swimming-lessons-bali")({
  head: () => ({
    meta: [
      { title: "Детское плавание на Бали | Уроки плавания для детей" },
      { name: "description", content: "Уроки плавания для детей на Бали. Безопасные индивидуальные и групповые занятия с профессиональными тренерами в Нуса Дуа, Джимбаране, Унгасане, Сануре, Убуде и Чангу." },
      { name: "keywords", content: "детское плавание Бали, уроки плавания для детей Бали, школа плавания для детей Бали, плавание дети Нуса Дуа, плавание дети Джимбаран" },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:title", content: "Детское плавание на Бали | Уроки плавания для детей" },
      { property: "og:description", content: "Безопасные уроки плавания для детей на Бали с профессиональными тренерами в Нуса Дуа, Джимбаране, Унгасане, Сануре, Убуде и Чангу." },
      { property: "og:url", content: "https://unityswimmingbali.com/ru/kids-swimming-lessons-bali" },
    ],
    links: [
      { rel: "canonical", href: "https://unityswimmingbali.com/ru/kids-swimming-lessons-bali" },
      { rel: "alternate", hrefLang: "en", href: "https://unityswimmingbali.com/kids-swimming-lessons-bali" },
      { rel: "alternate", hrefLang: "ru", href: "https://unityswimmingbali.com/ru/kids-swimming-lessons-bali" },
      { rel: "alternate", hrefLang: "id", href: "https://unityswimmingbali.com/id/kids-swimming-lessons-bali" },
      { rel: "alternate", hrefLang: "x-default", href: "https://unityswimmingbali.com/kids-swimming-lessons-bali" },
    ],
  }),
  component: Kids,
});
import { createFileRoute } from "@tanstack/react-router";
import { Adults } from "./adult-swimming-lessons-bali";

export const Route = createFileRoute("/ru/adult-swimming-lessons-bali")({
  head: () => ({
    meta: [
      { title: "Плавание для взрослых на Бали | Unity Swimming School" },
      { name: "description", content: "Уроки плавания для взрослых на Бали: обучение с нуля, преодоление страха воды, улучшение техники и индивидуальные тренировки." },
      { name: "keywords", content: "плавание для взрослых Бали, уроки плавания для взрослых Бали, обучение плаванию с нуля Бали, страх воды Бали, частный тренер по плаванию Бали" },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:title", content: "Плавание для взрослых на Бали | Unity Swimming School" },
      { property: "og:description", content: "Уроки плавания для взрослых на Бали — с нуля, техника, преодоление страха воды, индивидуальные и групповые занятия." },
      { property: "og:url", content: "https://unityswimmingbali.com/ru/adult-swimming-lessons-bali" },
    ],
    links: [
      { rel: "canonical", href: "https://unityswimmingbali.com/ru/adult-swimming-lessons-bali" },
      { rel: "alternate", hrefLang: "en", href: "https://unityswimmingbali.com/adult-swimming-lessons-bali" },
      { rel: "alternate", hrefLang: "ru", href: "https://unityswimmingbali.com/ru/adult-swimming-lessons-bali" },
      { rel: "alternate", hrefLang: "id", href: "https://unityswimmingbali.com/id/adult-swimming-lessons-bali" },
      { rel: "alternate", hrefLang: "x-default", href: "https://unityswimmingbali.com/adult-swimming-lessons-bali" },
    ],
  }),
  component: Adults,
});
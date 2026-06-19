import { createFileRoute } from "@tanstack/react-router";
import { Index } from "./index";
import heroImg from "@/assets/ph_crawl.jpg.asset.json";

export const Route = createFileRoute("/ru/")({
  head: () => ({
    meta: [
      { title: "Школа плавания на Бали | Unity Swimming School Bali" },
      { name: "description", content: "Unity Swimming School Bali — школа плавания на Бали для детей и взрослых. Индивидуальные и групповые занятия, обучение с нуля, техника плавания, безопасность на воде и фридайвинг." },
      { name: "keywords", content: "школа плавания Бали, уроки плавания Бали, плавание для детей Бали, плавание для взрослых Бали, частный тренер по плаванию Бали, фридайвинг Бали" },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:title", content: "Школа плавания на Бали | Unity Swimming School Bali" },
      { property: "og:description", content: "Школа плавания на Бали для детей и взрослых. Индивидуальные и групповые занятия, техника плавания, безопасность на воде и фридайвинг." },
      { property: "og:url", content: "https://unityswimmingbali.com/ru/" },
      { property: "og:image", content: heroImg.url },
      { name: "twitter:image", content: heroImg.url },
    ],
    links: [
      { rel: "canonical", href: "https://unityswimmingbali.com/ru/" },
      { rel: "alternate", hrefLang: "en", href: "https://unityswimmingbali.com/" },
      { rel: "alternate", hrefLang: "ru", href: "https://unityswimmingbali.com/ru/" },
      { rel: "alternate", hrefLang: "id", href: "https://unityswimmingbali.com/id/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://unityswimmingbali.com/" },
    ],
  }),
  component: Index,
});
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О компании | Эксента",
  description:
    "Эксента — консалтинговая компания. Инсайты, которые двигают бизнес. Консалтинг и аутсорсинг инвестиционных проектов для среднего и крупного бизнеса.",
  openGraph: {
    title: "О компании | Эксента",
    description:
      "Эксента — лидер на рынке инвестиционного консалтинга. Комплексные решения в области стратегии, ТЭО и бизнес-планов.",
    url: "https://exenta.ru/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

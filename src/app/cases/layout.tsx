import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Кейсы | Эксента",
  description:
    "Реализованные проекты Эксенты: консалтинг, финансовое моделирование, развитие территорий, мастер-планирование и цифровая трансформация.",
  openGraph: {
    title: "Кейсы | Эксента",
    description:
      "Опыт и результаты проектов Эксенты для крупного бизнеса, госсектора и девелопмента.",
    url: "https://exenta.ru/cases",
  },
};

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

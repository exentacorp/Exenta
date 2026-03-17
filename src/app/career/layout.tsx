import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Карьера | Эксента",
  description:
    "Твоя карьера начинается там, где ценят идеи. Присоединяйтесь к команде Эксенты — консалтинг, аналитика, технологии и инжиниринг.",
  openGraph: {
    title: "Карьера | Эксента",
    description:
      "Мы ищем талантливых специалистов. Разнообразие проектов, профессиональный рост, дружный коллектив.",
    url: "https://exenta.ru/career",
  },
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

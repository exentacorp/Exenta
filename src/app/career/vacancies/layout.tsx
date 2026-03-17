import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вакансии | Эксента",
  description:
    "Открытые вакансии в Эксенте: консалтинг, аналитика, инжиниринг, технологии. Санкт-Петербург. Отправьте резюме на hr@exenta.ru.",
};

export default function VacanciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pro Bono | Эксента",
  description:
    "Эксента оказывает консалтинговые услуги pro bono для НКО и социальных проектов: стратегия, управление проектами, аналитика.",
  openGraph: {
    title: "Услуги Pro Bono | Эксента",
    description:
      "Безвозмездная консалтинговая поддержка для некоммерческих организаций и социальных проектов.",
    url: "https://exenta.ru/pro-bono",
  },
};

export default function ProBonoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

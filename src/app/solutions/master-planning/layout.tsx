import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Платформа мастер-планирования | Решение Эксента и ЦЕНТР",
  description:
    "Цифровая платформа мастер-планирования для управления инвестиционными программами развития территорий. Совместный продукт Эксента и Агентства стратегического развития «ЦЕНТР». GovTech и PropTech.",
  openGraph: {
    title: "Платформа мастер-планирования | Эксента и ЦЕНТР",
    description:
      "Единая цифровая среда для стратегического территориального планирования и управления инвестиционными программами. Методология ЦЕНТР + технологии Эксента.",
    url: "https://exenta.ru/solutions/master-planning",
  },
};

export default function SolutionMasterPlanningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

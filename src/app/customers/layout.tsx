import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Клиенты | Эксента",
  description:
    "Нам доверяют клиенты из списка ТОП 100 крупнейших компаний России. Росатом, Сибур, Новатэк, ПИК и другие — промышленный, финансовый и государственный секторы.",
  openGraph: {
    title: "Клиенты | Эксента",
    description:
      "Крупнейшие российские и международные компании доверяют Эксенте. Промышленность, нефтегаз, атомная отрасль, девелопмент и малый бизнес.",
    url: "https://exenta.ru/customers",
  },
};

export default function CustomersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

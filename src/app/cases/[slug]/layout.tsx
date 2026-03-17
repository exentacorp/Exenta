import type { Metadata } from "next";
import { getCaseBySlug, getCases } from "@/data/cases";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseItem = getCaseBySlug(slug);
  if (!caseItem)
    return { title: "Кейс | Эксента" };
  return {
    title: `${caseItem.title} | Кейсы | Эксента`,
    description: caseItem.excerpt,
    openGraph: {
      title: `${caseItem.title} | Эксента`,
      description: caseItem.excerpt,
      url: `https://exenta.ru/cases/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return getCases().map((c) => ({ slug: c.slug }));
}

export default function CaseSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

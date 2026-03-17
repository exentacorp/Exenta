import type { Metadata } from "next";
import { industries } from "@/data/industries";

type Props = { params: Promise<{ slug: string }>; children: React.ReactNode };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return { title: "Отрасль | Эксента" };
  return {
    title: `${industry.name} | Эксента`,
    description: industry.description,
  };
}

export default function IndustrySlugLayout({ children }: Props) {
  return children;
}

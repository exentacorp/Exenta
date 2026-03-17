"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { industries } from "@/data/industries";
import { industryPageContent } from "@/data/industryPages";
import type { LucideIcon } from "lucide-react";

export default function IndustrySlugPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";

  const industry = industries.find((i) => i.slug === slug);
  const content = industry ? industryPageContent[industry.slug] : null;

  if (!industry) {
    return (
      <main className="min-h-screen bg-white flex flex-col items-center justify-center py-24">
        <div className="container-kept text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Отрасль не найдена
          </h1>
          <Link
            href="/industries"
            className="text-[#02818a] hover:underline inline-flex items-center gap-1"
          >
            Все отрасли
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    );
  }

  const tagline = content?.tagline ?? industry.description;
  const introParagraphs = content?.intro ?? [industry.description];
  const competencies = content?.competencies ?? [];
  const Icon = industry.icon as LucideIcon;

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-[#e8f5f3] to-white overflow-hidden">
        <div className="container-kept">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#02818a]">
              Главная
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/industries" className="hover:text-[#02818a]">
              Отрасли
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#02818a]">{industry.name}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-start md:justify-between gap-8"
          >
            <div className="max-w-3xl">
              {industry.isCore && (
                <span className="inline-block px-3 py-1 bg-[#02818a] text-white text-xs font-medium rounded mb-4">
                  Ключевая экспертиза
                </span>
              )}
              <h1 className="text-4xl lg:text-5xl font-bold text-[#02818a] mb-4">
                {industry.name}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {tagline}
              </p>
            </div>
            <div className="hidden md:flex shrink-0 w-24 h-24 rounded-2xl bg-[#02818a]/10 items-center justify-center">
              <Icon className="w-12 h-12 text-[#02818a]" />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[40px]"
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
          >
            <path d="M0,40 L600,0 L1200,40 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Об отрасли */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl prose prose-gray"
          >
            {introParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-gray-600 leading-relaxed mb-6 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Компетенции */}
      {competencies.length > 0 && (
        <section className="py-12 lg:py-20 bg-gray-50">
          <div className="container-kept">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10"
            >
              Чем мы помогаем в этой отрасли
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competencies.map((comp, index) => (
                <motion.div
                  key={comp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    href={comp.href}
                    className="block h-full p-6 bg-white border border-gray-200 rounded-lg hover:border-[#02818a]/30 hover:shadow-md transition-all group"
                  >
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#02818a] transition-colors mb-2">
                      {comp.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      {comp.shortDescription}
                    </p>
                    {comp.keywords && comp.keywords.length > 0 && (
                      <p className="text-xs text-gray-400 mb-4">
                        {comp.keywords.join(" · ")}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[#02818a] group-hover:gap-2 transition-all">
                      Подробнее
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#02818a] relative overflow-hidden">
        <div className="container-kept relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8"
          >
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Обсудим ваш проект
              </h2>
              <p className="text-white/80 max-w-xl">
                Расскажите о задаче — подготовим коммерческое предложение или
                договоримся о встрече.
              </p>
            </div>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#fd5a42] text-white font-medium hover:bg-[#e54d38] transition-colors shrink-0"
            >
              Запросить КП
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-white rounded-full blur-3xl" />
        </div>
      </section>
    </main>
  );
}

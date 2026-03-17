"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Filter } from "lucide-react";
import { getCases, getAllCaseTags } from "@/data/cases";

export default function CasesPage() {
  const cases = getCases();
  const allTags = getAllCaseTags();
  const [selectedTagSlug, setSelectedTagSlug] = useState<string | null>(null);

  const filteredCases = useMemo(() => {
    if (!selectedTagSlug) return cases;
    return cases.filter((c) => c.tags.some((t) => t.slug === selectedTagSlug));
  }, [cases, selectedTagSlug]);

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
            <span className="text-[#02818a]">Кейсы</span>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-[#02818a] mb-4">
              Кейсы
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Реализованные проекты Эксенты: консалтинг, финансовое моделирование,
              развитие территорий и цифровая трансформация для бизнеса и госсектора.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + List */}
      <section className="py-12 lg:py-16">
        <div className="container-kept">
          {allTags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-10">
              <span className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Направление / отрасль:
              </span>
              <button
                onClick={() => setSelectedTagSlug(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTagSlug === null
                    ? "bg-[#02818a] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Все
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag.slug}
                  onClick={() => setSelectedTagSlug(tag.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTagSlug === tag.slug
                      ? "bg-[#02818a] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          )}

          <div className="space-y-8">
            {filteredCases.length === 0 ? (
              <p className="text-gray-500 py-12">
                По выбранному фильтру кейсов пока нет.
              </p>
            ) : (
              filteredCases.map((c, index) => (
                <motion.article
                  key={c.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    href={`/cases/${c.slug}`}
                    className="block p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-[#02818a]/30 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {c.tags.slice(0, 3).map((t) => (
                            <span
                              key={t.slug}
                              className="px-2.5 py-1 bg-[#e8f5f3] text-[#02818a] text-xs font-medium rounded-md"
                            >
                              {t.label}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#02818a] transition-colors line-clamp-2">
                          {c.title}
                        </h2>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {c.excerpt}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {c.client}
                          {c.year && ` · ${c.year}`}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[#02818a] font-medium text-sm group-hover:gap-2 transition-all shrink-0">
                        Подробнее
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-kept text-center">
          <p className="text-gray-600 mb-6">
            Хотите обсудить похожий проект или запросить кейс под вашу задачу?
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#fd5a42] text-white font-medium hover:bg-[#e54d38] transition-colors rounded-lg"
          >
            Связаться с нами
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

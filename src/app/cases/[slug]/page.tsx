"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Building2,
  Target,
  CheckCircle2,
  Award,
} from "lucide-react";
import {
  getCaseBySlug,
  getCases,
  type CaseWithTaskSolutionResult,
  type CaseCustom,
} from "@/data/cases";

function CaseTaskSolutionResult({ c }: { c: CaseWithTaskSolutionResult }) {
  return (
    <>
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-kept max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-[#e8f5f3] rounded-xl">
              <Target className="w-6 h-6 text-[#02818a]" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Задача</h2>
          </div>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {c.task}
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container-kept max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-[#e8f5f3] rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-[#02818a]" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Решение</h2>
          </div>
          <ul className="space-y-4">
            {c.solution.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#02818a] text-white text-sm flex items-center justify-center font-medium">
                  {i + 1}
                </span>
                <span className="text-gray-600 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="container-kept max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-[#e8f5f3] rounded-xl">
              <Award className="w-6 h-6 text-[#02818a]" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Результат</h2>
          </div>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {c.result}
          </p>
        </div>
      </section>
    </>
  );
}

function CaseCustomSections({ c }: { c: CaseCustom }) {
  return (
    <div className="space-y-0">
      {c.sections.map((section, i) => (
        <section
          key={i}
          className={`py-12 lg:py-16 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container-kept max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {section.title}
            </h2>
            {Array.isArray(section.content) ? (
              <ul className="space-y-3">
                {section.content.map((item, j) => (
                  <li key={j} className="text-gray-600 leading-relaxed flex gap-2">
                    <span className="text-[#02818a]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export default function CaseDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const caseItem = getCaseBySlug(slug);
  const otherCases = getCases().filter((c) => c.slug !== slug);

  if (!caseItem) {
    return (
      <main className="min-h-screen bg-white flex flex-col items-center justify-center py-24">
        <p className="text-gray-500 mb-6">Кейс не найден.</p>
        <Link href="/cases" className="text-[#02818a] font-medium hover:underline">
          Вернуться к списку кейсов
        </Link>
      </main>
    );
  }

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
            <Link href="/cases" className="hover:text-[#02818a]">
              Кейсы
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#02818a] line-clamp-1">{caseItem.title}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {caseItem.tags.map((t) => (
                <span
                  key={t.slug}
                  className="px-3 py-1.5 bg-white/80 border border-[#02818a]/20 text-[#02818a] text-sm font-medium rounded-lg"
                >
                  {t.label}
                </span>
              ))}
            </div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {caseItem.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <span className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#02818a]" />
                {caseItem.client}
              </span>
              {caseItem.year && (
                <span className="text-gray-500">{caseItem.year}</span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Excerpt */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-kept max-w-3xl">
          <p className="text-lg text-gray-600 leading-relaxed">
            {caseItem.excerpt}
          </p>
        </div>
      </section>

      {/* Content by structure */}
      {caseItem.structure === "task-solution-result" && (
        <CaseTaskSolutionResult c={caseItem} />
      )}
      {caseItem.structure === "custom" && (
        <CaseCustomSections c={caseItem} />
      )}

      {/* Related services */}
      {caseItem.relatedServices && caseItem.relatedServices.length > 0 && (
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="container-kept">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Связанные услуги и решения
            </h2>
            <ul className="flex flex-wrap gap-4">
              {caseItem.relatedServices.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium hover:border-[#02818a]/30 hover:text-[#02818a] transition-colors"
                  >
                    {s.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Other cases */}
      {otherCases.length > 0 && (
        <section className="py-12 lg:py-16 bg-white">
          <div className="container-kept">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Другие кейсы
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherCases.slice(0, 2).map((c) => (
                <Link
                  key={c.slug}
                  href={`/cases/${c.slug}`}
                  className="block p-6 rounded-xl border border-gray-200 hover:border-[#02818a]/30 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#02818a] transition-colors line-clamp-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{c.excerpt}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[#02818a]">
                    Подробнее
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/cases"
                className="inline-flex items-center gap-2 text-[#02818a] font-medium hover:underline"
              >
                Все кейсы
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#01313d] text-white">
        <div className="container-kept text-center">
          <p className="text-white/80 mb-6">
            Нужен похожий проект или консультация?
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#fd5a42] text-white font-medium hover:bg-[#e54d38] transition-colors rounded-lg"
          >
            Связаться с нами
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

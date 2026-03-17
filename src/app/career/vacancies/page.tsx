"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  MapPin,
  Briefcase,
  Filter,
} from "lucide-react";

// Примеры вакансий (по образцу kept.ru/career/vacancies)
const vacanciesList = [
  {
    id: "1",
    title: "Консультант по стратегии",
    department: "Консалтинг",
    location: "Санкт-Петербург",
    type: "Полная занятость",
    description:
      "Участие в проектах по разработке стратегии, организационному развитию и трансформации для клиентов из промышленности и госсектора.",
  },
  {
    id: "2",
    title: "Аналитик (исследования и данные)",
    department: "Аналитика и исследования",
    location: "Санкт-Петербург",
    type: "Полная занятость",
    description:
      "Проведение маркетинговых и отраслевых исследований, подготовка аналитических отчётов и визуализация данных.",
  },
  {
    id: "3",
    title: "Специалист по проектному управлению",
    department: "Инжиниринг",
    location: "Санкт-Петербург",
    type: "Полная занятость",
    description:
      "Сопровождение инвестиционных и строительных проектов: планирование, контроль сроков и бюджета, отчётность.",
  },
  {
    id: "4",
    title: "Консультант по цифровой трансформации",
    department: "Технологии",
    location: "Санкт-Петербург",
    type: "Полная занятость",
    description:
      "Участие в проектах по внедрению ИТ-решений, оценке зрелости и разработке дорожных карт цифровизации.",
  },
  {
    id: "5",
    title: "Специалист по господдержке",
    department: "Консалтинг",
    location: "Санкт-Петербург",
    type: "Полная занятость",
    description:
      "Подготовка заявок на меры господдержки, сопровождение проектов по привлечению льготного финансирования.",
  },
];

const departments = [
  "Все направления",
  "Консалтинг",
  "Аналитика и исследования",
  "Инжиниринг",
  "Технологии",
];

export default function VacanciesPage() {
  const [filterDept, setFilterDept] = useState("Все направления");

  const filtered =
    filterDept === "Все направления"
      ? vacanciesList
      : vacanciesList.filter((v) => v.department === filterDept);

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
            <Link href="/career" className="hover:text-[#02818a]">
              Карьера
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#02818a]">Вакансии</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-[#02818a] mb-4">
              Вакансии
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Открытые позиции в Эксенте. Не нашли подходящую? Отправьте резюме
              на{" "}
              <a
                href="mailto:hr@exenta.ru"
                className="text-[#02818a] hover:underline"
              >
                hr@exenta.ru
              </a>
            </p>
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

      {/* Фильтр */}
      <section className="py-6 bg-gray-50 border-y border-gray-200">
        <div className="container-kept">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-2 text-sm text-gray-500">
              <Filter className="w-4 h-4" />
              Направление:
            </span>
            <select
              value={filterDept}
              onChange={(e) => setFilterDept(e.target.value)}
              className="px-4 py-2 border border-gray-300 text-sm text-gray-700 bg-white focus:border-[#02818a] focus:outline-none focus:ring-1 focus:ring-[#02818a] rounded"
            >
              {departments.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            <span className="text-sm text-gray-400 ml-auto">
              {filtered.length} {filtered.length === 1 ? "вакансия" : "вакансий"}
            </span>
          </div>
        </div>
      </section>

      {/* Список вакансий */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-kept">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              <p className="text-lg mb-4">В выбранном направлении пока нет открытых вакансий.</p>
              <p className="text-sm mb-6">
                Отправьте резюме на{" "}
                <a href="mailto:hr@exenta.ru" className="text-[#02818a] hover:underline">
                  hr@exenta.ru
                </a>
                , и мы свяжемся с вами при появлении подходящей позиции.
              </p>
              <Link
                href="/career"
                className="inline-flex items-center gap-2 text-[#02818a] font-medium"
              >
                Назад к карьере
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="space-y-0 border border-gray-200 rounded-lg overflow-hidden">
              {filtered.map((vacancy, index) => (
                <motion.article
                  key={vacancy.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 lg:p-8 hover:bg-gray-50/50 transition-colors group">
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#02818a] transition-colors">
                        {vacancy.title}
                      </h2>
                      <p className="text-gray-500 text-sm mb-3">
                        {vacancy.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {vacancy.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {vacancy.location}
                        </span>
                        <span>{vacancy.type}</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <a
                        href={`mailto:hr@exenta.ru?subject=Отклик на вакансию: ${encodeURIComponent(vacancy.title)}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#02818a] text-[#02818a] font-medium hover:bg-[#02818a] hover:text-white transition-colors"
                      >
                        Откликнуться
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* CTA внизу */}
          <div className="mt-16 p-8 bg-gray-50 rounded-xl border border-gray-200 text-center">
            <p className="text-gray-600 mb-4">
              Не нашли подходящую вакансию? Отправьте резюме — мы рассмотрим его
              при появлении новых позиций.
            </p>
            <a
              href="mailto:hr@exenta.ru?subject=Резюме"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#02818a] text-white font-medium hover:bg-[#02757d] transition-colors"
            >
              Отправить CV
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

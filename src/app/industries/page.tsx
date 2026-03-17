"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ArrowRight, Wrench } from "lucide-react";
import { industries } from "@/data/industries";

const interestingArticles = [
  {
    title: "Цифровая трансформация в промышленности",
    category: "Аналитика",
    date: "15 января 2026",
    image: "/api/placeholder/400/250",
  },
  {
    title: "Тренды развития энергетики в 2026 году",
    category: "Энергетика",
    date: "12 января 2026",
    image: "/api/placeholder/400/250",
  },
  {
    title: "Господдержка судостроения: новые программы",
    category: "Судостроение",
    date: "10 января 2026",
    image: "/api/placeholder/400/250",
  },
  {
    title: "Устойчивое развитие в АПК",
    category: "АПК",
    date: "8 января 2026",
    image: "/api/placeholder/400/250",
  },
  {
    title: "Инвестиции в телеком-инфраструктуру",
    category: "Телеком",
    date: "5 января 2026",
    image: "/api/placeholder/400/250",
  },
  {
    title: "Фармацевтический рынок: итоги года",
    category: "Здравоохранение",
    date: "3 января 2026",
    image: "/api/placeholder/400/250",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-b from-[#e8f5f3] to-white overflow-hidden">
        <div className="container-kept">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#02818a]">
              Главная
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#02818a]">Отрасли</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-[#02818a] mb-6">
              Отрасли
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Российская экономика многогранна — от высокотехнологичной
              энергетики и атомной промышленности до агропромышленного
              комплекса и цифровых платформ. Мы имеем широкий практический опыт
              в различных областях экономики.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#02818a] rounded-full blur-3xl" />
        </div>

        {/* Decorative triangle */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[60px]"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 L500,0 L900,40 L1200,0 L1200,60 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Направления
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                >
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="flex gap-4 p-6 bg-white hover:bg-[#f1f2f4] transition-colors group h-full"
                  >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#e8f5f3] group-hover:bg-[#02818a] transition-colors">
                      <industry.icon className="w-6 h-6 text-[#02818a] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <h3 className="font-semibold text-gray-900 group-hover:text-[#02818a] transition-colors">
                          {industry.name}
                        </h3>
                        {industry.isCore && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-[#02818a] text-white rounded">
                            Ключевая экспертиза
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#02818a] group-hover:translate-x-1 transition-all flex-shrink-0 self-center" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA: Не нашли свою отрасль? — до блока «Вам может быть интересно» */}
      <section className="py-16 lg:py-20 bg-[#02818a] relative overflow-hidden">
        <div className="container-kept relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
          >
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Не нашли свою отрасль?
              </h2>
              <p className="text-white/70 max-w-xl">
                Свяжитесь с нами для консультации. Мы работаем с широким
                спектром отраслей и готовы обсудить ваш проект.
              </p>
            </div>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#fd5a42] text-white font-medium hover:bg-[#e54d38] transition-colors group"
            >
              Связаться с нами
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl" />
        </div>
      </section>

      {/* Вам может быть интересно */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Вам может быть интересно
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interestingArticles.map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 hover:shadow-lg transition-shadow group"
                >
                  <div className="aspect-video bg-gradient-to-br from-[#e8f5f3] to-[#02818a]/20 flex items-center justify-center">
                    <Wrench className="w-12 h-12 text-[#02818a]/30" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-[#02818a] text-white">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#02818a] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

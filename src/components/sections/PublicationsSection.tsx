"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";

const publications = [
  {
    title: "Тренды цифровой трансформации 2026",
    category: "Технологии",
    date: "15 января 2026",
    description:
      "Ключевые направления цифровизации бизнеса: искусственный интеллект, автоматизация процессов.",
  },
  {
    title: "Российский рынок M&A: итоги года",
    category: "Инвестиции",
    date: "10 января 2026",
    description:
      "Ежегодный обзор рынка слияний и поглощений: ключевые сделки и прогнозы.",
  },
  {
    title: "ESG-трансформация бизнеса",
    category: "Стратегия",
    date: "5 января 2026",
    description:
      "Как интегрировать принципы устойчивого развития в бизнес-процессы.",
  },
];

export default function PublicationsSection() {
  return (
    <section id="publications" className="relative flex bg-white">
      {/* Left: Teal Sidebar */}
      <div className="hidden lg:block w-[380px] bg-[#02818a] flex-shrink-0 relative">
        <div className="sticky top-16 h-[calc(100vh-64px)] flex flex-col justify-center p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-white/30 text-sm font-medium mb-4">03</div>
            <h2 className="text-5xl font-bold text-white mb-6">Публикации</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Актуальные статьи, обзоры и исследования от наших экспертов.
            </p>
            <Link
              href="/media"
              className="inline-flex items-center gap-2 text-white font-medium group"
            >
              Все публикации
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Right: Publications List */}
      <div className="flex-1">
        {/* Mobile header */}
        <div className="lg:hidden bg-[#02818a] p-8">
          <div className="text-white/30 text-sm font-medium mb-4">03</div>
          <h2 className="text-4xl font-bold text-white">Публикации</h2>
        </div>

        {/* Publications cards */}
        <div className="divide-y divide-gray-200">
          {publications.map((publication, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href="#"
                className="block p-8 lg:p-12 bg-white hover:bg-gray-50 transition-colors group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-400 lg:w-32 lg:flex-shrink-0">
                    <Calendar className="w-4 h-4" />
                    {publication.date}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-1 bg-[#e8f5f3] text-[#02818a] text-xs font-medium">
                        {publication.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#02818a] transition-colors">
                      {publication.title}
                    </h3>
                    <p className="text-gray-500">{publication.description}</p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex items-center">
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#02818a] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* All publications link on mobile */}
        <div className="lg:hidden p-8 bg-gray-50">
          <Link
            href="/media"
            className="inline-flex items-center gap-2 text-[#02818a] font-medium group"
          >
            Все публикации
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

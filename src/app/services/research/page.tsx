"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BarChart3,
  TrendingUp,
  Database,
  ArrowRight,
  ChevronRight,
  LineChart,
  PieChart,
  Users,
  Target,
  FileSearch,
  Globe,
} from "lucide-react";

// Service groups with their sub-services
const serviceGroups = [
  {
    id: "market-research",
    icon: TrendingUp,
    title: "Рыночная аналитика и конкурентные исследования",
    description:
      "Оценка емкости и потенциала рынков, выявление тенденций, конкурентных преимуществ и слабых мест, стратегические выводы на основе рыночной информации.",
    href: "/services/market-research",
    services: [
      "Оценка емкости и потенциала рынка",
      "Анализ конкурентной среды",
      "Исследование потребительского поведения",
      "Сегментация и таргетирование",
      "Тестирование концепций и продуктов",
      "Мониторинг цен и ассортимента",
    ],
  },
  {
    id: "economic-research",
    icon: Globe,
    title: "Экономические и отраслевые исследования",
    description:
      "Глубокий анализ отраслей и экономики: тренды, сценарии, макрофакторы, риски и возможности для стратегического планирования и инвестиционных решений.",
    href: "/services/economic-research",
    services: [
      "Отраслевые исследования и обзоры",
      "Макроэкономический анализ",
      "Сценарное моделирование",
      "Анализ инвестиционного климата",
      "Оценка экономической эффективности",
      "Прогнозирование и планирование",
    ],
  },
  {
    id: "data-analytics",
    icon: Database,
    title: "Аналитика данных и моделирование",
    description:
      "От бизнес-аналитики до математического моделирования: структурируем данные, визуализируем закономерности, выявляем инсайты и поддерживаем принятие решений.",
    href: "/services/data-analytics",
    services: [
      "Бизнес-аналитика и BI-решения",
      "Математическое и финансовое моделирование",
      "Визуализация данных и дашборды",
      "Предиктивная аналитика",
      "Машинное обучение и AI",
      "Интеграция источников данных",
    ],
  },
];

export default function ResearchServicePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-[#e8f5f3] to-white overflow-hidden">
        <div className="container-kept">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#02818a]">
              Главная
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-[#02818a]">
              Услуги
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#02818a]">
              Аналитика и исследования
            </span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e8f5f3] text-[#02818a] text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4" />
                Основное направление
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#02818a] mb-6">
                Аналитика и исследования
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Аналитика и исследования обеспечивают глубокое понимание рынков,
                отраслей и данных, поддерживая стратегические и операционные
                решения. Мы превращаем данные в знания, а знания — в действия.
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-[#e8f5f3] rounded-full animate-pulse" />
                <div className="absolute inset-8 bg-[#02818a]/20 rounded-full" />
                <div className="absolute inset-16 bg-[#02818a]/30 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-20 h-20 text-[#02818a]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative triangle */}
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

      {/* Service Groups Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Направления исследований
            </h2>
            <p className="text-gray-500 max-w-2xl mb-12">
              Мы предлагаем комплексные решения в области аналитики и
              исследований, разделённые на три ключевых направления.
            </p>

            <div className="grid lg:grid-cols-3 gap-0 border border-gray-200 bg-gray-200">
              {serviceGroups.map((group, index) => (
                <motion.div
                  key={group.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white"
                >
                  <div className="p-8 border-r border-gray-200 last:border-r-0 h-full">
                    {/* Icon */}
                    <div className="w-14 h-14 flex items-center justify-center bg-[#e8f5f3] mb-6">
                      <group.icon className="w-7 h-7 text-[#02818a]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {group.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 leading-relaxed mb-6">
                      {group.description}
                    </p>

                    {/* Services list */}
                    <ul className="space-y-2 mb-8">
                      {group.services.slice(0, 4).map((service, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span className="w-1.5 h-1.5 bg-[#02818a] rounded-full mt-2 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <Link
                      href={group.href}
                      className="inline-flex items-center gap-2 text-[#02818a] font-medium group"
                    >
                      Подробнее
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Наш подход
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: FileSearch,
                  title: "Сбор данных",
                  description:
                    "Комплексный сбор первичных и вторичных данных из надежных источников",
                },
                {
                  icon: PieChart,
                  title: "Анализ",
                  description:
                    "Применение современных методологий и инструментов анализа",
                },
                {
                  icon: LineChart,
                  title: "Интерпретация",
                  description:
                    "Глубокая интерпретация результатов в контексте бизнеса",
                },
                {
                  icon: Target,
                  title: "Рекомендации",
                  description:
                    "Практические рекомендации для принятия решений",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#e8f5f3] mb-4">
                    <item.icon className="w-8 h-8 text-[#02818a]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
                Нужны исследования или аналитика?
              </h2>
              <p className="text-white/70 max-w-xl">
                Свяжитесь с нами для обсуждения вашего проекта. Мы поможем
                подобрать оптимальные методы исследования.
              </p>
            </div>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#fd5a42] text-white font-medium hover:bg-[#e54d38] transition-colors group"
            >
              Запросить консультацию
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl" />
        </div>
      </section>

    </main>
  );
}

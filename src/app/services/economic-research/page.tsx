"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  ArrowRight,
  ChevronRight,
  LineChart,
  Building2,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Calculator,
  Map,
} from "lucide-react";

const services = [
  {
    title: "Отраслевые исследования и обзоры",
    description:
      "Комплексный анализ состояния и тенденций развития конкретных отраслей экономики, выявление ключевых игроков и драйверов роста.",
  },
  {
    title: "Макроэкономический анализ",
    description:
      "Анализ макроэкономических показателей, их влияние на бизнес-среду и инвестиционный климат. Прогнозирование экономических трендов.",
  },
  {
    title: "Сценарное моделирование",
    description:
      "Разработка сценариев развития событий при различных макроэкономических и отраслевых условиях для стратегического планирования.",
  },
  {
    title: "Анализ инвестиционного климата",
    description:
      "Оценка привлекательности регионов и отраслей для инвестирования, анализ рисков и возможностей, барьеров и драйверов.",
  },
  {
    title: "Оценка экономической эффективности",
    description:
      "Расчёт экономических показателей проектов и программ, оценка их влияния на экономику региона или отрасли.",
  },
  {
    title: "Прогнозирование и планирование",
    description:
      "Разработка прогнозов развития рынков и отраслей, формирование стратегических планов на основе аналитических данных.",
  },
  {
    title: "Госрегулирование и политика",
    description:
      "Анализ влияния государственного регулирования и политики на отрасли и рынки, оценка последствий регуляторных изменений.",
  },
  {
    title: "Региональная экономика",
    description:
      "Исследование экономического состояния регионов, их специализации, конкурентных преимуществ и точек роста.",
  },
];

const industries = [
  "Нефтегазовая отрасль",
  "Энергетика",
  "Металлургия",
  "Машиностроение",
  "Химическая промышленность",
  "Агропромышленный комплекс",
  "Транспорт и логистика",
  "Телекоммуникации",
  "Финансовый сектор",
  "Здравоохранение",
  "Строительство",
  "Государственный сектор",
];

export default function EconomicResearchPage() {
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
            <Link href="/services/research" className="hover:text-[#02818a]">
              Аналитика и исследования
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#02818a]">
              Экономические исследования
            </span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#02818a]/10 text-[#02818a] text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                Отраслевая экспертиза
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#02818a] mb-6">
                Экономические и отраслевые исследования
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Глубокий анализ отраслей и экономики: тренды, сценарии,
                макрофакторы, риски и возможности для стратегического
                планирования и инвестиционных решений.
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-[#02818a]/10 rounded-full" />
                <div className="absolute inset-6 bg-[#02818a]/20 rounded-full flex items-center justify-center">
                  <Globe className="w-24 h-24 text-[#02818a]" />
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

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Наши услуги
            </h2>

            <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-6 lg:p-8 bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#02818a]/10 flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-[#02818a]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Отраслевая экспертиза
            </h2>
            <p className="text-gray-500 max-w-2xl mb-12">
              Мы проводим исследования в ключевых отраслях российской экономики,
              обладая глубокой экспертизой и пониманием отраслевой специфики.
            </p>

            <div className="flex flex-wrap gap-3">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="px-4 py-2 bg-white border border-gray-200 text-sm text-gray-700 hover:border-[#02818a] hover:text-[#02818a] transition-colors cursor-default"
                >
                  {industry}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Методология исследований
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Calculator,
                  title: "Количественный анализ",
                  description:
                    "Статистические методы и эконометрическое моделирование",
                },
                {
                  icon: LineChart,
                  title: "Трендовый анализ",
                  description:
                    "Выявление долгосрочных тенденций и цикличности",
                },
                {
                  icon: AlertTriangle,
                  title: "Оценка рисков",
                  description:
                    "Анализ факторов риска и их влияния на развитие",
                },
                {
                  icon: Map,
                  title: "Сценарное планирование",
                  description:
                    "Моделирование различных сценариев развития",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 bg-gray-50 border border-gray-200"
                >
                  <item.icon className="w-8 h-8 text-[#02818a] mb-4" />
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

      {/* Related Services */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Смежные услуги
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/services/market-research"
                className="p-6 bg-white border border-gray-200 hover:bg-[#f1f2f4] transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#02818a] transition-colors">
                      Рыночная аналитика
                    </h3>
                    <p className="text-sm text-gray-500">
                      Исследования рынков, конкурентов и потребителей
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#02818a] group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
              <Link
                href="/services/data-analytics"
                className="p-6 bg-white border border-gray-200 hover:bg-[#f1f2f4] transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#02818a] transition-colors">
                      Аналитика данных
                    </h3>
                    <p className="text-sm text-gray-500">
                      BI-решения, визуализация и моделирование данных
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#02818a] group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
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
                Нужны отраслевые исследования?
              </h2>
              <p className="text-white/70 max-w-xl">
                Свяжитесь с нами для обсуждения вашего проекта и получения
                коммерческого предложения.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#02818a] font-medium hover:bg-white/90 transition-colors group"
              >
                Запросить КП
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
              >
                Написать нам
              </Link>
            </div>
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

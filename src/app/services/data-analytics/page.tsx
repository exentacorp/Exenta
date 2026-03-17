"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Database,
  ArrowRight,
  ChevronRight,
  BarChart3,
  LineChart,
  PieChart,
  Activity,
  Cpu,
  Layers,
  CheckCircle,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Бизнес-аналитика и BI-решения",
    description:
      "Разработка и внедрение BI-систем для мониторинга KPI, создания дашбордов и отчётности в режиме реального времени.",
  },
  {
    title: "Математическое и финансовое моделирование",
    description:
      "Построение финансовых моделей, оценка инвестиционных проектов, моделирование бизнес-процессов и сценариев развития.",
  },
  {
    title: "Визуализация данных и дашборды",
    description:
      "Создание интерактивных визуализаций и дашбордов для наглядного представления данных и поддержки принятия решений.",
  },
  {
    title: "Предиктивная аналитика",
    description:
      "Использование статистических методов и машинного обучения для прогнозирования трендов, спроса и бизнес-показателей.",
  },
  {
    title: "Машинное обучение и AI",
    description:
      "Разработка и внедрение решений на основе искусственного интеллекта для автоматизации анализа и принятия решений.",
  },
  {
    title: "Интеграция источников данных",
    description:
      "Объединение данных из различных систем и источников, создание единого аналитического контура организации.",
  },
  {
    title: "Data Governance",
    description:
      "Разработка политик и процедур управления данными, обеспечение их качества и доступности для аналитики.",
  },
  {
    title: "Аналитические платформы",
    description:
      "Проектирование и внедрение аналитических платформ, выбор и интеграция инструментов для работы с данными.",
  },
];

const technologies = [
  { name: "Power BI", category: "BI-платформы" },
  { name: "Tableau", category: "BI-платформы" },
  { name: "Python", category: "Языки и библиотеки" },
  { name: "R", category: "Языки и библиотеки" },
  { name: "SQL", category: "Базы данных" },
  { name: "Apache Spark", category: "Big Data" },
  { name: "TensorFlow", category: "Machine Learning" },
  { name: "Azure Data", category: "Облачные сервисы" },
];

export default function DataAnalyticsPage() {
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
              Аналитика данных
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
                <Zap className="w-4 h-4" />
                Цифровые решения
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#02818a] mb-6">
                Аналитика данных и моделирование
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                От бизнес-аналитики до математического моделирования:
                структурируем данные, визуализируем закономерности, выявляем
                инсайты и поддерживаем принятие решений с помощью цифровых
                инструментов.
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-[#02818a]/10 rounded-full" />
                <div className="absolute inset-6 bg-[#02818a]/20 rounded-full flex items-center justify-center">
                  <Database className="w-24 h-24 text-[#02818a]" />
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

      {/* Capabilities Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Возможности
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: BarChart3,
                  title: "BI и отчётность",
                  description:
                    "Дашборды и отчёты в реальном времени",
                },
                {
                  icon: LineChart,
                  title: "Прогнозирование",
                  description:
                    "Предиктивные модели и сценарный анализ",
                },
                {
                  icon: Cpu,
                  title: "Machine Learning",
                  description:
                    "Алгоритмы ML для анализа данных",
                },
                {
                  icon: Layers,
                  title: "Интеграция",
                  description:
                    "Объединение данных из разных источников",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 bg-white border border-gray-200"
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

      {/* Technologies Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Технологии и инструменты
            </h2>
            <p className="text-gray-500 max-w-2xl mb-12">
              Мы используем современные технологии и инструменты для работы с
              данными, выбирая оптимальные решения под задачи клиента.
            </p>

            <div className="flex flex-wrap gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200"
                >
                  <div className="w-2 h-2 bg-[#02818a] rounded-full" />
                  <div>
                    <span className="font-medium text-gray-900">
                      {tech.name}
                    </span>
                    <span className="text-sm text-gray-400 ml-2">
                      {tech.category}
                    </span>
                  </div>
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
                href="/services/economic-research"
                className="p-6 bg-white border border-gray-200 hover:bg-[#f1f2f4] transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#02818a] transition-colors">
                      Экономические исследования
                    </h3>
                    <p className="text-sm text-gray-500">
                      Отраслевой анализ и макроэкономические прогнозы
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
                Нужна аналитика данных?
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

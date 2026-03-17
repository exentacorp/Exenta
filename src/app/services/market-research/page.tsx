"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  TrendingUp,
  ArrowRight,
  ChevronRight,
  Users,
  Target,
  BarChart2,
  Search,
  LineChart,
  PieChart,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    title: "Оценка емкости и потенциала рынка",
    description:
      "Количественная оценка объёма рынка, его сегментов и потенциала роста. Определение ключевых драйверов и барьеров развития.",
  },
  {
    title: "Анализ конкурентной среды",
    description:
      "Глубокий анализ конкурентов: их стратегии, сильные и слабые стороны, рыночные доли и конкурентные преимущества.",
  },
  {
    title: "Исследование потребительского поведения",
    description:
      "Изучение потребностей, предпочтений и паттернов поведения целевой аудитории для оптимизации продуктов и маркетинговой стратегии.",
  },
  {
    title: "Сегментация и таргетирование",
    description:
      "Выделение целевых сегментов рынка, оценка их привлекательности и разработка стратегий позиционирования.",
  },
  {
    title: "Тестирование концепций и продуктов",
    description:
      "Оценка привлекательности новых продуктов и концепций до вывода на рынок, выявление точек роста и улучшений.",
  },
  {
    title: "Мониторинг цен и ассортимента",
    description:
      "Регулярный отслеживание ценовой динамики и ассортиментных матриц для принятия обоснованных решений о ценообразовании.",
  },
  {
    title: "Канальный анализ",
    description:
      "Оценка эффективности каналов сбыта и дистрибуции, выявление оптимальных путей доведения продукта до потребителя.",
  },
  {
    title: "Бенчмаркинг",
    description:
      "Сравнительный анализ бизнес-практик и показателей с лидерами отрасли для выявления лучших практик и точек роста.",
  },
];

const methodologies = [
  { icon: Users, name: "Опросы и интервью", description: "Количественные и качественные исследования" },
  { icon: Search, name: "Desk research", description: "Анализ вторичных источников и данных" },
  { icon: Target, name: "Фокус-группы", description: "Глубинное изучение мнений и отношений" },
  { icon: BarChart2, name: "Mystery shopping", description: "Оценка качества обслуживания" },
];

export default function MarketResearchPage() {
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
              Рыночная аналитика
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
                <TrendingUp className="w-4 h-4" />
                Рыночная аналитика
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#02818a] mb-6">
                Рыночная аналитика и конкурентные исследования
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Оценка емкости и потенциала рынков, выявление тенденций,
                конкурентных преимуществ и слабых мест. Стратегические выводы на
                основе рыночной информации для принятия обоснованных решений.
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-[#02818a]/10 rounded-full" />
                <div className="absolute inset-6 bg-[#02818a]/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-24 h-24 text-[#02818a]" />
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

      {/* Methodology Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Методология
            </h2>
            <p className="text-gray-500 max-w-2xl mb-12">
              Мы применяем комплексный подход, используя различные методы сбора и
              анализа данных для получения достоверных результатов.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodologies.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 bg-white border border-gray-200"
                >
                  <method.icon className="w-8 h-8 text-[#02818a] mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {method.name}
                  </h3>
                  <p className="text-sm text-gray-500">{method.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 lg:py-24 bg-white">
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
                href="/services/economic-research"
                className="p-6 bg-gray-50 border border-gray-200 hover:bg-[#f1f2f4] transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#02818a] transition-colors">
                      Экономические и отраслевые исследования
                    </h3>
                    <p className="text-sm text-gray-500">
                      Глубокий анализ отраслей и макроэкономических факторов
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#02818a] group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
              <Link
                href="/services/data-analytics"
                className="p-6 bg-gray-50 border border-gray-200 hover:bg-[#f1f2f4] transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#02818a] transition-colors">
                      Аналитика данных и моделирование
                    </h3>
                    <p className="text-sm text-gray-500">
                      BI-решения, визуализация и предиктивная аналитика
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
                Нужны рыночные исследования?
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

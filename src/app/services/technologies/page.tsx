"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Cpu,
  ArrowRight,
  ChevronRight,
  Rocket,
  Search,
  Code2,
  Lightbulb,
  Factory,
  Cloud,
  FileSearch,
  Target,
  Layers,
  Shield,
} from "lucide-react";

// Подразделы как на exenta.ru/services/technologies — «Наши услуги»
const serviceGroups = [
  {
    id: "digital-transformation",
    icon: Rocket,
    title: "Цифровая трансформация и стратегия",
    description:
      "Создание стратегий цифровой трансформации, дорожные карты внедрения, повышение технологической зрелости и эффективности бизнеса.",
    href: "/services/technologies/digital-transformation",
    services: [
      "Стратегия цифровой трансформации",
      "Оценка технологической зрелости",
      "Дорожные карты и приоритизация",
      "Управление изменениями",
    ],
  },
  {
    id: "it-audit",
    icon: Search,
    title: "ИТ-аудит и Due Diligence",
    description:
      "Независимая оценка ИТ-инфраструктуры, рисков и возможностей. Due Diligence при сделках M&A и инвестиционных решениях.",
    href: "/services/technologies/it-audit",
    services: [
      "Аудит ИТ-инфраструктуры и процессов",
      "Due Diligence в сделках M&A",
      "Оценка рисков и возможностей",
      "Рекомендации по оптимизации",
    ],
  },
  {
    id: "development",
    icon: Code2,
    title: "Разработка и внедрение ИТ-решений",
    description:
      "Разработка и внедрение корпоративных систем, интеграция приложений, автоматизация процессов и поддержка внедрений.",
    href: "/services/technologies/development",
    services: [
      "Разработка корпоративных систем",
      "Интеграция приложений и данных",
      "Автоматизация бизнес-процессов",
      "Сопровождение внедрений",
    ],
  },
  {
    id: "innovation",
    icon: Lightbulb,
    title: "Корпоративные инновации и R&D",
    description:
      "Развитие корпоративных инноваций, R&D-стратегии, управление портфелем инновационных проектов и акселерация идей.",
    href: "/services/technologies/innovation",
    services: [
      "Стратегия инноваций и R&D",
      "Управление портфелем проектов",
      "Акселерация и пилоты",
      "Партнёрства и экосистемы",
    ],
  },
  {
    id: "industrial-automation",
    icon: Factory,
    title: "Промышленная автоматизация и IIoT",
    description:
      "Промышленная автоматизация, IIoT, цифровые двойники и повышение эффективности производственных процессов.",
    href: "/services/technologies/industrial-automation",
    services: [
      "Промышленная автоматизация",
      "IIoT и сбор данных с оборудования",
      "Цифровые двойники",
      "Оптимизация производства",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Облачные решения и инфраструктура",
    description:
      "Облачная инфраструктура, миграция в облако, гибридные решения и управление ИТ-инфраструктурой.",
    href: "/services/technologies/cloud",
    services: [
      "Облачная инфраструктура и миграция",
      "Гибридные и мультиоблачные решения",
      "Управление инфраструктурой",
      "Безопасность и отказоустойчивость",
    ],
  },
];

export default function TechnologiesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-[#e8f5f3] to-white overflow-hidden">
        <div className="container-kept">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#02818a]">Главная</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-[#02818a]">Услуги</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#02818a]">Технологии</span>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e8f5f3] text-[#02818a] text-sm font-medium mb-6">
                <Cpu className="w-4 h-4" />
                Основное направление
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#02818a] mb-6">
                Технологии
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Соединяем технологии с практикой: создание стратегий цифровой трансформации, внедрение ИТ-решений, развитие корпоративных инноваций, автоматизация и переход в облако. Повышение технологической зрелости и эффективности бизнеса.
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-[#e8f5f3] rounded-full" />
                <div className="absolute inset-8 bg-[#02818a]/20 rounded-full" />
                <div className="absolute inset-16 bg-[#02818a]/30 rounded-full flex items-center justify-center">
                  <Cpu className="w-20 h-20 text-[#02818a]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[40px]" viewBox="0 0 1200 40" preserveAspectRatio="none">
            <path d="M0,40 L600,0 L1200,40 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Наши услуги — подразделы как в Аналитика и исследования */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-gray-500 max-w-2xl mb-12">
              Комплексные технологические решения: от стратегии до внедрения и поддержки.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-200 bg-gray-200">
              {serviceGroups.map((group, index) => (
                <motion.div
                  key={group.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white"
                >
                  <div className="p-8 border-r border-b border-gray-200 last:border-r-0 lg:last:border-b-0 h-full">
                    <div className="w-14 h-14 flex items-center justify-center bg-[#e8f5f3] mb-6">
                      <group.icon className="w-7 h-7 text-[#02818a]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {group.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-6 text-sm">
                      {group.description}
                    </p>
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

      {/* Наш подход */}
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
                { icon: FileSearch, title: "Диагностика", description: "Оценка текущего состояния и возможностей" },
                { icon: Layers, title: "Стратегия", description: "Дорожные карты и приоритизация проектов" },
                { icon: Target, title: "Внедрение", description: "Реализация решений и управление изменениями" },
                { icon: Shield, title: "Устойчивость", description: "Импортозамещение и надёжность систем" },
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
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Нужны технологические решения?</h2>
              <p className="text-white/70 max-w-xl">Обсудим ваши задачи по цифровизации и ИТ.</p>
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
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl" />
        </div>
      </section>
    </main>
  );
}

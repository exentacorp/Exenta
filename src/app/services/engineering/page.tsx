"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Wrench,
  ArrowRight,
  ChevronRight,
  FileSearch,
  Ruler,
  Building2,
  Calculator,
  Scale,
} from "lucide-react";

const serviceGroups = [
  {
    id: "pre-project",
    icon: FileSearch,
    title: "Предпроектный анализ и ТЭО",
    description:
      "Обоснование инвестиций в строительство, варианты реализации и оценка рисков до начала проектирования.",
    href: "/services/engineering/pre-project",
    services: [
      "Предпроектный анализ",
      "Технико-экономическое обоснование",
      "Варианты реализации",
      "Оценка рисков",
    ],
  },
  {
    id: "cost-expertise",
    icon: Calculator,
    title: "Экспертиза смет и капитальных затрат",
    description:
      "Проверка сметной документации, оптимизация капитальных затрат и контроль соответствия нормативам.",
    href: "/services/engineering/cost-expertise",
    services: [
      "Экспертиза смет",
      "Оптимизация КЗ",
      "Сравнительный анализ",
      "Нормативная база",
    ],
  },
  {
    id: "construction-management",
    icon: Building2,
    title: "Управление строительством",
    description:
      "Управление стройкой, контроль сроков и бюджета, координация подрядчиков и приёмка работ.",
    href: "/services/engineering/construction-management",
    services: [
      "Управление стройкой",
      "Контроль сроков и бюджета",
      "Координация подрядчиков",
      "Приёмка работ",
    ],
  },
  {
    id: "tech-expertise",
    icon: Scale,
    title: "Технологическая и правовая экспертиза",
    description:
      "Техническая и правовая экспертиза проектов, соответствие нормативам и сопровождение споров.",
    href: "/services/engineering/tech-expertise",
    services: [
      "Технологическая экспертиза",
      "Правовая экспертиза",
      "Соответствие нормативам",
      "Сопровождение споров",
    ],
  },
];

const approach = [
  { icon: FileSearch, title: "Оценка", description: "Предпроектный анализ и обоснование" },
  { icon: Ruler, title: "Проектирование", description: "Контроль и управление стройкой" },
  { icon: Building2, title: "Реализация", description: "Надёжная сдача сложных объектов" },
];

export default function EngineeringPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-[#e8f5f3] to-white overflow-hidden">
        <div className="container-kept">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#02818a]">Главная</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-[#02818a]">Услуги</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#02818a]">Инжиниринг</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e8f5f3] text-[#02818a] text-sm font-medium mb-6">
                <Wrench className="w-4 h-4" />
                Дополнительное направление
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#02818a] mb-6">
                Инжиниринг
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Оценка, проектирование, контроль и управление стройкой — для надёжной реализации сложных объектов. Технологическая, правовая и организационная поддержка проектов.
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-[#e8f5f3] rounded-full" />
                <div className="absolute inset-8 bg-[#02818a]/20 rounded-full" />
                <div className="absolute inset-16 bg-[#02818a]/30 rounded-full flex items-center justify-center">
                  <Wrench className="w-20 h-20 text-[#02818a]" />
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

      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-gray-500 max-w-2xl mb-12">
              Строительство и техэкспертиза: от обоснования до сдачи объекта.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 bg-gray-200">
              {serviceGroups.map((group, index) => (
                <motion.div key={group.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="bg-white">
                  <div className="p-8 border-r border-b border-gray-200 last:border-r-0 lg:last:border-b-0 h-full">
                    <div className="w-14 h-14 flex items-center justify-center bg-[#e8f5f3] mb-6">
                      <group.icon className="w-7 h-7 text-[#02818a]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{group.title}</h3>
                    <p className="text-gray-500 leading-relaxed mb-6 text-sm">{group.description}</p>
                    <ul className="space-y-2 mb-8">
                      {group.services.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-[#02818a] rounded-full mt-2 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <Link href={group.href} className="inline-flex items-center gap-2 text-[#02818a] font-medium group">
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

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-kept">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Наш подход</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {approach.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="text-center p-6 bg-white border border-gray-200 rounded-xl">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#e8f5f3] mb-4 rounded-xl">
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

      <section className="py-16 lg:py-20 bg-[#02818a] relative overflow-hidden">
        <div className="container-kept relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Обсудить инжиниринговый проект?</h2>
              <p className="text-white/70 max-w-xl">Поможем с обоснованием, экспертизой и управлением стройкой.</p>
            </div>
            <Link href="/contacts" className="inline-flex items-center gap-2 px-8 py-4 bg-[#fd5a42] text-white font-medium hover:bg-[#e54d38] transition-colors shrink-0">
              Запросить консультацию
              <ArrowRight className="w-4 h-4" />
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

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Rocket,
  ArrowRight,
  ChevronRight,
  Lightbulb,
  TrendingUp,
  Zap,
  Sparkles,
  Scale,
  Wallet,
} from "lucide-react";

const serviceGroups = [
  {
    id: "acceleration",
    icon: Sparkles,
    title: "Акселерация и запуск",
    description:
      "Запуск и валидация идеи, разработка продукта, прототипирование и выход на рынок. Акселерационные программы и менторская поддержка.",
    href: "/services/startups/acceleration",
    services: [
      "Запуск и валидация идеи",
      "Разработка продукта и прототипирование",
      "Выход на рынок и первые клиенты",
      "Акселерация и менторская поддержка",
    ],
  },
  {
    id: "scaling",
    icon: Scale,
    title: "Масштабирование",
    description:
      "Масштабирование бизнес-модели, рост выручки, операционная эффективность и выход на новые рынки.",
    href: "/services/startups/scaling",
    services: [
      "Масштабирование и рост",
      "Оптимизация бизнес-модели",
      "Выход на новые рынки",
      "Партнёрства и дистрибуция",
    ],
  },
  {
    id: "investment",
    icon: Wallet,
    title: "Привлечение инвестиций",
    description:
      "Подготовка к привлечению инвестиций, pitch-материалы, работа с инвесторами и сделки.",
    href: "/services/startups/investment",
    services: [
      "Привлечение инвестиций",
      "Pitch и презентации для инвесторов",
      "Due Diligence и структура сделки",
      "Работа с фондами и ангелами",
    ],
  },
];

const approach = [
  { icon: Lightbulb, title: "Стартапы", description: "От идеи до продукта и первых продаж" },
  { icon: TrendingUp, title: "Инновации", description: "Масштабирование и привлечение инвестиций" },
  { icon: Zap, title: "Акселерация", description: "Программы и менторская поддержка" },
];

export default function StartupsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-[#e8f5f3] to-white overflow-hidden">
        <div className="container-kept">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#02818a]">Главная</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-[#02818a]">Услуги</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#02818a]">Стартапы и инновации</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e8f5f3] text-[#02818a] text-sm font-medium mb-6">
                <Rocket className="w-4 h-4" />
                Дополнительное направление
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#02818a] mb-6">
                Стартапы и инновации
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Помогаем запускать, масштабировать и привлекать инвестиции — от идеи до выручки и акселерации. Комплексное сопровождение технологических инициатив и стартапов.
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-[#e8f5f3] rounded-full" />
                <div className="absolute inset-8 bg-[#02818a]/20 rounded-full" />
                <div className="absolute inset-16 bg-[#02818a]/30 rounded-full flex items-center justify-center">
                  <Rocket className="w-20 h-20 text-[#02818a]" />
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
              От идеи до масштабирования и привлечения инвестиций.
            </p>
            <div className="grid md:grid-cols-3 gap-0 border border-gray-200 bg-gray-200">
              {serviceGroups.map((group, index) => (
                <motion.div key={group.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="bg-white">
                  <div className="p-8 border-r border-b border-gray-200 last:border-r-0 lg:last:border-b-0 h-full">
                    <div className="w-14 h-14 flex items-center justify-center bg-[#e8f5f3] mb-6">
                      <group.icon className="w-7 h-7 text-[#02818a]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{group.title}</h3>
                    <p className="text-gray-500 leading-relaxed mb-6 text-sm">{group.description}</p>
                    <ul className="space-y-2 mb-8">
                      {group.services.slice(0, 4).map((s, idx) => (
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
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Запускаете стартап или масштабируете проект?</h2>
              <p className="text-white/70 max-w-xl">Поможем с акселерацией, масштабированием и привлечением инвестиций.</p>
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

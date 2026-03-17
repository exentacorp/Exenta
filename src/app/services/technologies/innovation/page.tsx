"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Lightbulb,
  ArrowRight,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

const services = [
  { title: "Стратегия инноваций и R&D", description: "Построение системы управления инновациями и приоритизация направлений R&D." },
  { title: "Управление портфелем проектов", description: "Отбор, оценка и развитие инновационных проектов и пилотов." },
  { title: "Акселерация и пилоты", description: "Запуск пилотных проектов, тестирование гипотез и масштабирование." },
  { title: "Партнёрства и экосистемы", description: "Взаимодействие со стартапами, вузами и технологическими партнёрами." },
  { title: "Корпоративные акселераторы", description: "Организация программ акселерации для внутренних и внешних команд." },
];

export default function InnovationPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-[#e8f5f3] to-white overflow-hidden">
        <div className="container-kept">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#02818a]">Главная</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-[#02818a]">Услуги</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services/technologies" className="hover:text-[#02818a]">Технологии</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#02818a]">Корпоративные инновации и R&D</span>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#02818a]/10 text-[#02818a] text-sm font-medium mb-6">
                <Lightbulb className="w-4 h-4" />
                Направление
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#02818a] mb-6">
                Корпоративные инновации и R&D
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Развитие корпоративных инноваций, R&D-стратегии, управление портфелем инновационных проектов и акселерация идей. От идеи до пилота и масштабирования.
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-[#02818a]/10 rounded-full" />
                <div className="absolute inset-6 bg-[#02818a]/20 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-24 h-24 text-[#02818a]" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Наши услуги</h2>
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
                      <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                    </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Смежные услуги</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/services/technologies/digital-transformation" className="p-6 bg-white border border-gray-200 hover:bg-[#f1f2f4] transition-colors group">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#02818a] transition-colors">Цифровая трансформация и стратегия</h3>
                    <p className="text-sm text-gray-500">Стратегия и дорожные карты</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#02818a] group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
              <Link href="/services/technologies/industrial-automation" className="p-6 bg-white border border-gray-200 hover:bg-[#f1f2f4] transition-colors group">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#02818a] transition-colors">Промышленная автоматизация и IIoT</h3>
                    <p className="text-sm text-gray-500">IIoT и цифровые двойники</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#02818a] group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

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
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Хотите развивать корпоративные инновации?</h2>
              <p className="text-white/70 max-w-xl">Поможем с R&D-стратегией и портфелем проектов.</p>
            </div>
            <Link href="/contacts" className="inline-flex items-center gap-2 px-8 py-4 bg-[#fd5a42] text-white font-medium hover:bg-[#e54d38] transition-colors group">
              Запросить КП
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

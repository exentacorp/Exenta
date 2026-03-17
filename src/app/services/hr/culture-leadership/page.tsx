"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, ArrowRight, ChevronRight, CheckCircle } from "lucide-react";

const services = [
  { title: "Трансформация корпоративной культуры", description: "Диагностика культуры, ценности и практики для достижения стратегических целей." },
  { title: "Развитие лидерства", description: "Программы развития лидеров и управленческих компетенций." },
  { title: "Управление талантами", description: "Системы выявления, развития и удержания ключевых сотрудников." },
  { title: "Вовлечённость и ценности", description: "Повышение вовлечённости и согласование ценностей с целями компании." },
];

export default function HRCultureLeadershipPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-[#e8f5f3] to-white overflow-hidden">
        <div className="container-kept">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#02818a]">Главная</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-[#02818a]">Услуги</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services/hr" className="hover:text-[#02818a]">HR и организационное развитие</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#02818a]">Культура и развитие лидерства</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#02818a]/10 text-[#02818a] text-sm font-medium mb-6">
                <Heart className="w-4 h-4" /> Направление
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#02818a] mb-6">Культура и развитие лидерства</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Трансформация корпоративной культуры, развитие лидерства и управление талантами.
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-[#02818a]/10 rounded-full" />
                <div className="absolute inset-6 bg-[#02818a]/20 rounded-full flex items-center justify-center">
                  <Heart className="w-24 h-24 text-[#02818a]" />
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
              {services.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="p-6 lg:p-8 bg-white hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#02818a]/10 flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-[#02818a]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
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
              <Link href="/services/hr/organizational-design" className="p-6 bg-white border border-gray-200 hover:bg-[#f1f2f4] transition-colors group">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#02818a] transition-colors">Оргструктура и дизайн ролей</h3>
                    <p className="text-sm text-gray-500">Структура и процессы HR</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#02818a] group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
              <Link href="/services/hr/competencies-kpi" className="p-6 bg-white border border-gray-200 hover:bg-[#f1f2f4] transition-colors group">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#02818a] transition-colors">Компетенции, KPI и мотивация</h3>
                    <p className="text-sm text-gray-500">KPI и HR-аналитика</p>
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Трансформация культуры или развитие лидеров?</h2>
              <p className="text-white/70 max-w-xl">Поможем с культурой и программами развития.</p>
            </div>
            <Link href="/contacts" className="inline-flex items-center gap-2 px-8 py-4 bg-[#fd5a42] text-white font-medium hover:bg-[#e54d38] transition-colors shrink-0">
              Запросить КП
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

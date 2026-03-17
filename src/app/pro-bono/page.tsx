"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Heart,
  HandHeart,
  FileCheck,
  MessageCircle,
} from "lucide-react";

export default function ProBonoPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-gradient-to-b from-[#e8f5f3] to-white overflow-hidden">
        <div className="container-kept">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#02818a]">
              Главная
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/about" className="hover:text-[#02818a]">
              Компания
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#02818a]">Pro bono</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-[#02818a] mb-6 leading-tight">
              Услуги Pro Bono
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Мы оказываем консалтинговую поддержку на безвозмездной основе
              некоммерческим организациям и социальным проектам, которым важна
              профессиональная экспертиза.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[50px]"
            viewBox="0 0 1200 50"
            preserveAspectRatio="none"
          >
            <path d="M0,50 L600,0 L1200,50 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Что мы предлагаем */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Чем мы можем помочь
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mb-12 text-lg"
          >
            В рамках pro bono мы предоставляем консалтинговые услуги в областях,
            в которых у нас есть экспертиза: стратегия, экономика, управление
            проектами, аналитика и организационное развитие.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileCheck,
                title: "Стратегия и планирование",
                text: "Помощь в разработке стратегий, целей и планов развития для НКО и социальных проектов.",
              },
              {
                icon: HandHeart,
                title: "Управление проектами",
                text: "Консультации по постановке процессов, управлению рисками и контролю результатов.",
              },
              {
                icon: MessageCircle,
                title: "Аналитика и исследования",
                text: "Экспертная поддержка в анализе данных, оценке эффективности и подготовке отчётности.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#02818a]/30 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#e8f5f3] rounded-lg mb-4">
                  <item.icon className="w-6 h-6 text-[#02818a]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Для кого */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Для кого
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Мы рассматриваем заявки от некоммерческих организаций, фондов,
              образовательных и просветительских проектов, инициатив в сфере
              культуры и социальной поддержки — тех, кому важна профессиональная
              консалтинговая помощь, но нет возможности оплачивать её в полном
              объёме.
            </p>
            <p className="text-gray-500">
              Объём и формат поддержки определяются индивидуально в зависимости
              от запроса и наших возможностей.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#02818a] text-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                  Расскажите о вашем проекте
                </h2>
                <p className="text-white/80 max-w-xl">
                  Если вы представляете НКО или социальный проект и вам нужна
                  консалтинговая поддержка — напишите нам. Мы рассмотрим заявку и
                  свяжемся с вами.
                </p>
              </div>
            </div>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#02818a] font-medium hover:bg-gray-100 transition-colors shrink-0"
            >
              Написать нам
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Назад в О компании */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container-kept">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[#02818a] font-medium hover:underline"
          >
            О компании
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

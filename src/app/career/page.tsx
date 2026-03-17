"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Briefcase,
  TrendingUp,
  Users,
  Gift,
  BarChart3,
  FileSearch,
  Wrench,
  Cpu,
  Shield,
} from "lucide-react";

// По образцу exenta.ru/career и kept.ru/career
const tagline = "Твоя карьера начинается там, где ценят идеи.";

const leadText = [
  "Эксента — это команда профессионалов, объединённых стремлением к развитию и совершенству. Мы ищем талантливых, любознательных и амбициозных специалистов, которые готовы расти, бросать вызов привычному и вместе с нами находить решения, способные менять индустрии. У нас ценится инициативность, критическое мышление и стремление к постоянному развитию.",
  "Работа в Эксенте — это не просто проекты и задачи. Это возможность стать частью сильного экспертного сообщества, где каждый голос важен, а вклад каждого сотрудника влияет на общий результат. Мы предлагаем участие в сложных и интересных проектах, понятную траекторию карьерного роста, доступ к знаниям, наставничество и поддержку команды.",
];

const benefits = [
  {
    icon: Briefcase,
    title: "Разнообразие проектов",
    description:
      "Участие в интересных и значимых проектах, которые влияют на развитие бизнеса и экономики.",
  },
  {
    icon: TrendingUp,
    title: "Профессиональный рост",
    description:
      "Возможность обучения, повышения квалификации и карьерного роста.",
  },
  {
    icon: Users,
    title: "Дружный коллектив",
    description:
      "Работа в команде единомышленников в поддерживающей атмосфере.",
  },
  {
    icon: Gift,
    title: "Конкурентоспособные условия",
    description:
      "Конкурентоспособные условия труда и социальные гарантии.",
  },
];

const directions = [
  {
    icon: BarChart3,
    title: "Консалтинг",
    description: "Помогаем бизнесу расти через стратегию, эффективность и трансформации.",
    href: "/services/consulting",
  },
  {
    icon: FileSearch,
    title: "Аналитика и исследования",
    description: "Аналитика, сочетающая точность данных с глубоким пониманием бизнес-среды.",
    href: "/services/research",
  },
  {
    icon: Wrench,
    title: "Инжиниринг",
    description: "Инжиниринг, соединяющий технологии, нормативную базу и интересы бизнеса.",
    href: "/services/engineering",
  },
  {
    icon: Cpu,
    title: "Технологии",
    description: "Соединяем технологии с практикой: знаем, как бизнес работает изнутри.",
    href: "/services/technologies",
  },
  {
    icon: Shield,
    title: "Господдержка",
    description: "Помогаем компаниям эффективно использовать возможности господдержки для роста.",
    href: "/services/consulting",
  },
];

const CV_EMAIL = "hr@exenta.ru";

export default function CareerPage() {
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
            <span className="text-[#02818a]">Карьера</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-[#02818a] mb-6 leading-tight">
              Карьера
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-700 font-medium leading-snug mb-10">
              {tagline}
            </p>
            <Link
              href="/career/vacancies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#02818a] text-white font-medium hover:bg-[#02757d] transition-colors"
            >
              Смотреть вакансии
              <ArrowRight className="w-5 h-5" />
            </Link>
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

      {/* Кто мы ищем */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl prose prose-lg"
          >
            {leadText.map((paragraph, i) => (
              <p
                key={i}
                className="text-gray-600 leading-relaxed mb-6 last:mb-0 text-lg"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Эксента предлагает */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-kept">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-12"
          >
            Эксента предлагает
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:border-[#02818a]/30 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#e8f5f3] rounded-lg mb-4">
                  <item.icon className="w-6 h-6 text-[#02818a]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Направления */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Направления
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-12 max-w-2xl"
          >
            Мы постоянно ищем талантливых специалистов в различных областях.
            Ознакомьтесь с вакансиями или отправьте резюме.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directions.map((dir, index) => (
              <motion.div
                key={dir.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={dir.href}
                  className="block p-6 border border-gray-200 rounded-xl hover:border-[#02818a]/30 hover:bg-gray-50/50 transition-all group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-[#e8f5f3] rounded-lg mb-4 group-hover:bg-[#02818a] transition-colors">
                    <dir.icon className="w-5 h-5 text-[#02818a] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#02818a] transition-colors">
                    {dir.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {dir.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#02818a]">
                    Подробнее
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA: Вакансии + Отправить CV */}
      <section className="py-16 lg:py-24 bg-[#02818a] text-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-10"
          >
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                Присоединяйтесь к команде
              </h2>
              <p className="text-white/80 max-w-xl">
                Посмотрите открытые вакансии или отправьте резюме — мы свяжемся
                с вами, когда появится подходящая возможность.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/career/vacancies"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#02818a] font-medium hover:bg-gray-100 transition-colors"
              >
                Смотреть вакансии
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`mailto:${CV_EMAIL}?subject=Резюме`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-medium hover:bg-white hover:text-[#02818a] transition-colors"
              >
                Отправить CV
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

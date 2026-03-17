"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  BarChart3,
  Cpu,
  Wrench,
  MapPin,
  Rocket,
  GraduationCap,
  Users,
  Megaphone,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Layers,
  Target,
} from "lucide-react";

// Primary services - Main focus
const primaryServices = [
  {
    icon: Briefcase,
    name: "Консалтинг",
    description:
      "Разрабатываем стратегии развития, совершенствуем финансовые модели, оптимизируем процессы и сопровождаем инвестиционные проекты. Всё об управлении проектами, инвестициями, бизнесом — от стратегии до реализации.",
    slug: "consulting",
    color: "#02818a",
  },
  {
    icon: BarChart3,
    name: "Аналитика и исследования",
    description:
      "Аналитика и исследования обеспечивают глубокое понимание рынков, отраслей и данных, поддерживая стратегические и операционные решения. Комплексный анализ для принятия обоснованных решений.",
    slug: "research",
    color: "#02818a",
  },
  {
    icon: Cpu,
    name: "Технологии",
    description:
      "Создание стратегий цифровой трансформации, внедрение ИТ-решений, развитие корпоративных инноваций, автоматизация и переход в облако. Цифровые решения для современного бизнеса.",
    slug: "technologies",
    color: "#02818a",
  },
];

// Secondary services - Additional directions
const secondaryServices = [
  {
    icon: Wrench,
    name: "Инжиниринг",
    description:
      "Предпроектный анализ, экспертиза капитальных затрат, управление строительством. Технологическая, правовая и организационная поддержка сложных проектов.",
    slug: "engineering",
  },
  {
    icon: MapPin,
    name: "Развитие территорий и урбанистика",
    description:
      "Сценарное моделирование, мастер-планы, экономическое обоснование и сопровождение развития территорий. Стратегии, инфраструктура и устойчивое развитие.",
    slug: "urban",
  },
  {
    icon: Rocket,
    name: "Стартапы и инновации",
    description:
      "Комплексное сопровождение технологических инициатив и стартапов — от идеи и прототипа до выхода на рынок и масштабирования.",
    slug: "startups",
  },
  {
    icon: GraduationCap,
    name: "Обучение и развитие",
    description:
      "Обеспечение трансформации бизнеса за счёт системного развития компетенций, внедрения корпоративного и производственного обучения, образовательной стратегии.",
    slug: "learning",
  },
];

// Tertiary services - Specialized services
const tertiaryServices = [
  {
    icon: Users,
    name: "HR и организационное развитие",
    description:
      "Создание систем управления персоналом, развитие лидерства и организационного потенциала, внедрение HR-аналитики и цифровых инструментов.",
    slug: "hr",
  },
  {
    icon: Megaphone,
    name: "Коммуникации и бренд",
    description:
      "Обеспечение системного подхода к внутренним и внешним коммуникациям, управлению брендом и репутацией.",
    slug: "communications",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-b from-[#e8f5f3] to-white overflow-hidden">
        <div className="container-kept">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#02818a]">
              Главная
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#02818a]">Услуги</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-[#02818a] mb-6">
              Услуги
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Мы специализируемся на повышении эффективности управления, цифровой
              трансформации и управлении инвестиционными программами. Надёжный
              партнёр для тех, кто строит, развивает и трансформирует бизнес.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#02818a] rounded-full blur-3xl" />
        </div>

        {/* Decorative triangle */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[60px]"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 L500,0 L900,40 L1200,0 L1200,60 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Primary Services - Main Directions */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#02818a]">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-[#02818a] uppercase tracking-wider">
                Основные направления
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
              Ключевые услуги
            </h2>

            <div className="grid lg:grid-cols-3 gap-0 bg-gray-200 border border-gray-200">
              {primaryServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="block p-8 lg:p-10 bg-white hover:bg-[#f1f2f4] transition-all group h-full border-r border-b lg:border-b-0 border-gray-200 last:border-r-0"
                  >
                    <div className="w-16 h-16 flex items-center justify-center bg-[#e8f5f3] group-hover:bg-[#02818a] transition-colors mb-6">
                      <service.icon className="w-8 h-8 text-[#02818a] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#02818a] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#02818a] font-medium">
                      <span>Подробнее</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Secondary Services - Additional Directions */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#02757d]">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-[#02757d] uppercase tracking-wider">
                Дополнительные направления
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
              Специализированные услуги
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
              {secondaryServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex flex-col p-6 bg-white hover:bg-[#f1f2f4] transition-colors group h-full"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-[#e8f5f3] group-hover:bg-[#02757d] transition-colors mb-4">
                      <service.icon className="w-6 h-6 text-[#02757d] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#02757d] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-1 text-[#02757d] text-sm font-medium">
                      <span>Подробнее</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tertiary Services - Specialized Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#01313d]">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-[#01313d] uppercase tracking-wider">
                Узкие специализации
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
              Экспертные услуги
            </h2>

            <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
              {tertiaryServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex gap-6 p-6 bg-white hover:bg-[#f1f2f4] transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#e8f5f3] group-hover:bg-[#01313d] transition-colors">
                      <service.icon className="w-5 h-5 text-[#01313d] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#01313d] transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#01313d] group-hover:translate-x-1 transition-all flex-shrink-0 self-center" />
                  </Link>
                </motion.div>
              ))}
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
                Нужна консультация?
              </h2>
              <p className="text-white/70 max-w-xl">
                Свяжитесь с нами для обсуждения вашего проекта. Мы поможем
                подобрать оптимальные решения для ваших задач.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#fd5a42] text-white font-medium hover:bg-[#e54d38] transition-colors group"
              >
                Запросить консультацию
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
              >
                Связаться
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

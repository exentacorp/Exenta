"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Target,
  MessageSquare,
  BarChart3,
  Layers,
  Heart,
  Quote,
  HandHeart,
  Building2,
} from "lucide-react";

// По данным exenta.ru/about
const tagline = "Инсайты, которые двигают бизнес.";

const leadText = [
  "Эксента — одна из наиболее динамично развивающихся компаний, осуществляющих консалтинг и аутсорсинг инвестиционных проектов. Лидер на рынке инвестиционного консалтинга, специализирующийся на разработке и реализации стратегий для среднего и крупного бизнеса.",
  "Мы предоставляем комплексные решения в области финансово-экономических моделей, бизнес-планов, маркетинговых исследований и технико-экономических обоснований (ТЭО) для крупных промышленных и индустриальных компаний. Наша цель — помочь клиентам минимизировать риски, повысить эффективность и достигать устойчивых результатов через профессиональную экспертизу и индивидуальный подход.",
];

const projectClients = [
  "ГК «Росатом»",
  "ПАО «Новатэк»",
  "ПАО «Сибур»",
  "Группа «ПИК»",
];

const stats = [
  { value: "10+", label: "отраслей экономики" },
  { value: "80+", label: "проектов ежегодно" },
  { value: "8 лет", label: "работаем с бизнесом" },
  { value: "7", label: "направлений бизнеса" },
  { value: "60+", label: "консультантов" },
  { value: "75%", label: "повторных заказов" },
  { value: "40+", label: "благодарственных писем" },
  { value: "27%", label: "рост заказов ежегодно" },
  { value: "9", label: "направлений консалтинга" },
  { value: "36", label: "охватываемых сфер" },
  { value: "100+", label: "задач решаем" },
];

const principles = [
  {
    icon: Target,
    title: "Ориентируемся на долгосрочную ценность",
    text: "Мы предлагаем решения, которые приносят устойчивые результаты, а не просто краткосрочный эффект.",
  },
  {
    icon: MessageSquare,
    title: "Говорим правду, даже когда это сложно",
    text: "Наша независимость и честность — основа доверия. Мы не боимся поднимать неудобные вопросы, если это в интересах клиента.",
  },
  {
    icon: BarChart3,
    title: "Работаем на стыке данных, стратегии и интуиции",
    text: "Соединяем аналитическую точность с бизнес-чутьём, чтобы находить действительно работающие решения.",
  },
  {
    icon: Layers,
    title: "Углубляемся в суть, действуем системно",
    text: "Мы не просто консультируем — разбираемся в бизнесе клиента до деталей, чтобы построить стратегию, которая работает.",
  },
  {
    icon: Heart,
    title: "Делаем успех клиента — своим приоритетом",
    text: "Мы не просто советуем, а сопровождаем на каждом этапе изменений, чтобы вместе достигать реальных результатов.",
  },
];

const industryHighlights = [
  "Атомная энергетика",
  "Нефть и газ",
  "Машиностроение",
  "Судостроение",
  "Строительство",
  "ИТ-индустрия",
  "Медицина",
  "Производство",
  "Госсектор",
];

export default function AboutPage() {
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
            <span className="text-[#02818a]">О компании</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-[#02818a] mb-6 leading-tight">
              О компании
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-700 font-medium leading-snug">
              {tagline}
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

      {/* Кто мы */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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

          {/* Проекты — цитата-блок */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-16 p-8 lg:p-10 bg-[#01313d] text-white rounded-2xl"
          >
            <Quote className="w-10 h-10 text-[#02818a] mb-4 opacity-80" />
            <p className="text-xl lg:text-2xl font-medium leading-snug mb-6">
              В активе Эксента — множество масштабных проектов. В их числе:{" "}
              {projectClients.join(", ")} и др.
            </p>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-[#6cdebb] font-medium hover:text-white transition-colors"
            >
              Все отрасли
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Pro bono */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10"
          >
            <Link
              href="/pro-bono"
              className="flex items-center gap-4 p-6 bg-[#e8f5f3] border border-[#02818a]/20 rounded-2xl hover:bg-[#d8f0ed] transition-colors group"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-[#02818a]/10 rounded-xl shrink-0">
                <HandHeart className="w-7 h-7 text-[#02818a]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#02818a] transition-colors">
                  Услуги Pro Bono
                </h3>
                <p className="text-gray-600 mt-1">
                  Мы оказываем консалтинговую поддержку на безвозмездной основе
                  НКО и социальным проектам. Подробнее о том, чем можем помочь и
                  как с нами связаться — на отдельной странице.
                </p>
              </div>
              <ArrowRight className="w-6 h-6 text-[#02818a] group-hover:translate-x-1 transition-transform shrink-0 self-center" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Эксента в цифрах */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-kept">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12"
          >
            Эксента в цифрах
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-[#02818a]/30 hover:shadow-md transition-all"
              >
                <div className="text-2xl lg:text-3xl font-bold text-[#02818a] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Клиенты — выжимка */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 lg:p-10 bg-gray-50 border border-gray-200 rounded-2xl"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#e8f5f3] rounded-xl">
                    <Building2 className="w-6 h-6 text-[#02818a]" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Клиенты
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Нам доверяют клиенты из списка ТОП 100 крупнейших компаний России. С нами на постоянной основе работают крупнейшие российские и международные компании из промышленного, финансового и государственного секторов — а также стартапы и представители малого бизнеса.
                </p>
                <p className="text-gray-500 text-sm mb-6">
                  В их числе: Росатом, Сибур, Новатэк, Атомэнергомаш, Группа ПИК, Клуб Лидеров и другие.
                </p>
                <Link
                  href="/customers"
                  className="inline-flex items-center gap-2 text-[#02818a] font-medium hover:gap-3 transition-all"
                >
                  Все клиенты
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Отрасли */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Клиенты и отрасли
              </h2>
              <p className="text-gray-600 max-w-xl mb-6">
                Работаем с ключевыми отраслями экономики — от атомной энергетики
                и нефтегаза до строительства, IT и госсектора.
              </p>
              <div className="flex flex-wrap gap-2">
                {industryHighlights.map((name) => (
                  <span
                    key={name}
                    className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#02818a] text-[#02818a] font-medium hover:bg-[#02818a] hover:text-white transition-colors shrink-0"
            >
              Все отрасли
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Ключевые принципы */}
      <section className="py-16 lg:py-24 bg-[#02818a] text-white">
        <div className="container-kept">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold mb-4"
          >
            Ключевые принципы работы
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/80 max-w-2xl mb-14"
          >
            То, как мы работаем с клиентами и почему нам доверяют.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/15 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Подберём оптимальное решение для вашего бизнеса
            </h2>
            <p className="text-gray-600 mb-10">
              Расскажите о задаче — подготовим предложение или договоримся о
              встрече.
            </p>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#fd5a42] text-white font-medium hover:bg-[#e54d38] transition-colors text-lg"
            >
              Обсудить проект
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

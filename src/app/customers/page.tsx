"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ArrowRight, Building2, ExternalLink } from "lucide-react";

// По данным https://exenta.ru/customers
const tagline =
  "Нам доверяют клиенты из списка ТОП 100 крупнейших компаний России";

const leadText = `За время работы наша компания зарекомендовала себя как честная и сплочённая команда профессионалов, ценящих и доверяющих своим клиентам. Вот уже несколько лет на постоянной основе с нами работают крупнейшие российские и международные компании из промышленного, финансового и государственного секторов. В то же время мы рады сотрудничать с компаниями любого уровня. В нашем портфолио большое место уделено стартапам и представителям малого и микро-бизнеса.`;

const clients = [
  {
    name: "Госкорпорация Росатом",
    description:
      "Многопрофильный холдинг, обеспечивающий полный цикл ядерных технологий, строительство АЭС, производство топлива и развитие энергетических и цифровых решений.",
    url: "https://www.rosatom.ru",
  },
  {
    name: "ПАО «Сибур»",
    description:
      "Крупнейшая нефтегазохимическая компания России, занимающаяся переработкой углеводородного сырья и производством полимеров, каучуков и других нефтехимических продуктов.",
    url: "https://www.sibur.ru",
  },
  {
    name: "ПАО «Новатэк»",
    description:
      "Крупнейший производитель природного газа в России, специализируется на разведке, добыче, переработке и сжижении газа, реализует проекты по производству СПГ.",
    url: "https://www.novatek.ru",
  },
  {
    name: "АО «ОКБМ Африкантов»",
    description:
      "Ведущий разработчик ядерных энергетических установок в России, специализируется на проектировании и производстве реакторных технологий.",
    url: "https://www.okbm.nnov.ru",
  },
  {
    name: "АО «Атомэнергомаш»",
    description:
      "Машиностроительный дивизион Госкорпорации «Росатом», ведущий производитель оборудования для атомной и тепловой энергетики, нефтегазовой отрасли, судостроения и др.",
    url: "https://www.aem-group.ru",
  },
  {
    name: "Клуб Лидеров",
    description:
      "Сообщество предпринимателей России, объединяющее владельцев и топ-менеджеров крупных компаний для обмена опытом, развития бизнеса и взаимодействия с гос. структурами.",
    url: "https://www.leaders.club",
  },
  {
    name: "АО «МосЦентрГаз»",
    description:
      "Специализированная компания, занимающаяся эксплуатацией, обслуживанием и строительством газораспределительных сетей в Москве и Московской области.",
    url: "https://www.mcgaz.ru",
  },
  {
    name: "Группа ПИК",
    description:
      "Крупнейший девелопер жилой недвижимости в России, специализируется на комплексном строительстве жилых кварталов, производстве строительных материалов и управлении недвижимостью.",
    url: "https://www.pik.ru",
  },
  {
    name: "TSC (The Chilled Snack Company)",
    description:
      "Международная компания, специализирующаяся на производстве охлаждённых молочных снеков, выпускает продукцию под собственными брендами, сотрудничает с ритейлерами и FMCG-компаниями.",
    url: "https://www.tsc-ru.com",
  },
  {
    name: "ООО «Интеллико»",
    description:
      "Российский разработчик и производитель систем видеонаблюдения, специализируется на IP- и AHD-камерах, видеорегистраторах и сетевом оборудовании для различных отраслей.",
    url: "https://www.intelliko.ru",
  },
];

export default function CustomersPage() {
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
            <span className="text-[#02818a]">Клиенты</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-[#02818a] mb-6 leading-tight">
              Клиенты
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-700 font-medium leading-snug mb-10">
              {tagline}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {leadText}
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

      {/* Сетка клиентов */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {clients.map((client, index) => (
              <motion.article
                key={client.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="group flex flex-col p-6 lg:p-8 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#02818a]/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#e8f5f3] rounded-lg shrink-0 group-hover:bg-[#02818a]/10 transition-colors">
                    <Building2 className="w-6 h-6 text-[#02818a]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#02818a] transition-colors line-clamp-2">
                      {client.name}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                      {client.description}
                    </p>
                  </div>
                </div>
                {client.url && (
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#02818a] hover:gap-3 transition-all"
                  >
                    Сайт компании
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA: запросить релевантный опыт */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Здесь представлена небольшая часть наших заказчиков
            </h2>
            <p className="text-gray-600 mb-8">
              Чтобы запросить более релевантный опыт по вашей отрасли или задаче,
              свяжитесь с нами — подготовим подборку кейсов и рекомендаций.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#02818a] text-white font-medium hover:bg-[#02757d] transition-colors group"
              >
                Отправить запрос
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about#principles"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#02818a] text-[#02818a] font-medium hover:bg-[#02818a] hover:text-white transition-colors group"
              >
                О компании
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Рекомендации */}
      <section className="py-16 lg:py-24 bg-[#02818a] text-white relative overflow-hidden">
        <div className="container-kept relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
          >
            <div className="max-w-xl">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Рекомендации и отзывы
              </h2>
              <p className="text-white/80 leading-relaxed">
                У нас есть раздел с рекомендациями, где вы можете ознакомиться с
                отзывами и множеством положительных откликов от наших клиентов и
                партнёров.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#02818a] font-medium hover:bg-gray-100 transition-colors shrink-0 group"
            >
              Подробнее о компании
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-white rounded-full blur-3xl" />
        </div>
      </section>
    </main>
  );
}

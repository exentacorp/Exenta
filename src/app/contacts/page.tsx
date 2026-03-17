"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Mail,
  ArrowRight,
  ChevronRight,
  Clock,
  Phone,
} from "lucide-react";

// Один офис — Санкт-Петербург (по данным exenta.ru)
const office = {
  country: "Россия",
  city: "Санкт-Петербург",
  address: "Санкт-Петербург, Лиговский проспект, дом 56, литер «Г»",
  email: "info@exenta.ru",
  workingHours: "Пн-Пт: 9:00 – 18:00",
  // Карта: ссылка на место в Яндекс.Картах. Для виджета используется короткий код из вашей ссылки (https://yandex.ru/maps/-/CPuj5KKw).
  mapEmbedUrl: "https://yandex.ru/map-widget/v1/-/CPuj5KKw",
  mapOpenUrl: "https://yandex.ru/maps/-/CPuj5KKw",
};

// Контакты по направлениям — формат как на Kept (табы + карточка слева)
const contactBlocks = [
  {
    id: "proposals",
    label: "Для запроса коммерческих предложений",
    name: "Николай Завьялов",
    title: "Руководитель Группы подготовки коммерческих предложений",
    phone: null,
    email: "request@exenta.ru",
    description: null,
  },
  {
    id: "press",
    label: "Для прессы",
    name: null,
    title: "Руководитель пресс-службы",
    phone: null,
    email: "press@exenta.ru",
    description: null,
  },
  {
    id: "accounting",
    label: "Бухгалтерия",
    name: null,
    title: null,
    phone: null,
    email: "buh@exenta.ru",
    description: "По вопросам закрывающих документов просьба обращаться по электронной почте.",
  },
  {
    id: "partners",
    label: "Партнёрские предложения",
    name: null,
    title: null,
    phone: null,
    email: "partners@exenta.ru",
    description: "Если Вы хотите предложить нам сотрудничество или свои идеи — обращайтесь по электронной почте.",
  },
  {
    id: "careers",
    label: "Для соискателей вакансий",
    name: null,
    title: "Руководитель отдела подбора персонала",
    phone: null,
    email: "hr@exenta.ru",
    description: null,
  },
];

// Варианты для поля «Тип обращения» в форме
const inquiryTypes = [
  { value: "proposals", label: "Запрос коммерческого предложения" },
  { value: "press", label: "Обращение в пресс-службу" },
  { value: "accounting", label: "Вопросы бухгалтерии" },
  { value: "partners", label: "Партнёрские предложения" },
  { value: "careers", label: "Поиск вакансий / Карьера" },
  { value: "other", label: "Другое" },
];

// Адрес для приёма сообщений формы обратной связи
const FORM_TO_EMAIL = "info@exenta.ru";

export default function ContactsPage() {
  const [activeTab, setActiveTab] = useState("proposals");
  const [inquiryType, setInquiryType] = useState("proposals");

  const activeContact = contactBlocks.find((c) => c.id === activeTab);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const typeLabel =
      inquiryTypes.find((opt) => opt.value === inquiryType)?.label ?? inquiryType;
    const body = [
      `Тип обращения: ${typeLabel}`,
      `ФИО: ${(form.elements.namedItem("fio") as HTMLInputElement)?.value ?? ""}`,
      `Телефон: ${(form.elements.namedItem("phone") as HTMLInputElement)?.value ?? ""}`,
      `Почта: ${(form.elements.namedItem("email") as HTMLInputElement)?.value ?? ""}`,
      `Компания: ${(form.elements.namedItem("company") as HTMLInputElement)?.value ?? ""}`,
      `Роль в компании: ${(form.elements.namedItem("role") as HTMLInputElement)?.value ?? ""}`,
      "",
      "Сообщение:",
      (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? "",
    ].join("\n");
    const subject = `Обращение с сайта: ${typeLabel}`;
    window.location.href = `mailto:${FORM_TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Hero — отступ как на остальных страницах */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-[#e8f5f3] to-white">
        <div className="container-kept">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#02818a]">
              Главная
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#02818a]">Контакты</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-[#02818a] mb-6">
              Контакты
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Рады вашим обращениям и готовы ответить на любые вопросы.
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

      {/* Офис + карта */}
      <section className="py-16 lg:py-24 bg-[#02818a] relative">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-12">
              Центральный офис
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-[#01313d] text-white text-sm font-medium">
                    {office.country}
                  </span>
                  <span className="text-white/60 text-sm">{office.city}</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-white/50 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{office.address}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-white/50 flex-shrink-0" />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-white hover:text-[#6cdebb] transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-white/50 flex-shrink-0" />
                    <span className="text-white/60">{office.workingHours}</span>
                  </div>

                  <p className="mt-6 pt-4 border-t border-white/10 text-sm text-white/70">
                    Ввиду наличия системы пропусков, встречи и мероприятия проводятся по предварительному согласованию.
                  </p>
                </div>
              </div>

              {/* Карта — Лиговский 56, СПб. Обновить: Яндекс.Карты → адрес → Поделиться → Встроить карту. */}
              <div className="rounded-lg overflow-hidden border border-white/10 bg-white/5">
                <div className="relative h-[280px] lg:min-h-[320px] w-full">
                  <iframe
                    title="Офис Эксента на карте"
                    src={office.mapEmbedUrl}
                    className="absolute inset-0 w-full h-full min-h-[280px]"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                  />
                </div>
                <a
                  href={office.mapOpenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 text-sm text-white/70 hover:text-white transition-colors"
                >
                  Открыть в Яндекс.Картах
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[80px]"
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 L400,0 L800,60 L1200,0 L1200,80 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Напишите нам — формат как на Kept: табы + карточка слева, форма справа */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-kept">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-10">
              Напишите нам
            </h2>

            {/* Табы как на Kept */}
            <div className="flex flex-wrap gap-1 border-b border-gray-200 mb-12">
              {contactBlocks.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id);
                    setInquiryType(tab.id);
                  }}
                  className={`relative px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "text-[#02818a]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#02818a]" />
                  )}
                </button>
              ))}
            </div>

            {/* Две колонки: карточка контакта слева, форма справа */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Левая колонка — карточка контакта (блок 3 в формате Kept) */}
              {activeContact && (
                <div className="bg-gray-50/80 border border-gray-200 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {activeContact.name || activeContact.title || activeContact.label}
                  </h3>
                  {activeContact.title && activeContact.name && (
                    <p className="text-gray-500 text-sm mt-0.5 mb-6">
                      {activeContact.title}
                    </p>
                  )}
                  {activeContact.description && (
                    <p className="text-gray-500 text-sm mb-6">
                      {activeContact.description}
                    </p>
                  )}
                  {!activeContact.description && activeContact.title && !activeContact.name && (
                    <div className="mb-6" />
                  )}
                  {activeContact.name && !activeContact.title && <div className="mb-6" />}

                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Телефон</p>
                      <p className="text-gray-900">
                        {activeContact.phone || "—"}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Email</p>
                      <a
                        href={`mailto:${activeContact.email}`}
                        className="text-gray-900 hover:text-[#02818a] transition-colors"
                      >
                        {activeContact.email}
                      </a>
                    </div>
                  </div>

                  <a
                    href={`mailto:${activeContact.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 bg-white text-gray-900 font-medium hover:border-[#02818a] hover:text-[#02818a] transition-colors"
                  >
                    Написать сообщение
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}

              {/* Правая колонка — форма (форма 4), поля в 2 ряда. Отправка через mailto на info@exenta.ru */}
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                {/* Ряд 1: Тип обращения | ФИО */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Тип обращения *
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 focus:border-[#02818a] focus:outline-none focus:ring-1 focus:ring-[#02818a] transition-colors"
                      required
                    >
                      {inquiryTypes.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ФИО *
                    </label>
                    <input
                      name="fio"
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-[#02818a] focus:outline-none focus:ring-1 focus:ring-[#02818a] transition-colors"
                      placeholder="Фамилия Имя Отчество"
                      required
                    />
                  </div>
                </div>

                {/* Ряд 2: Телефон | Почта */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-[#02818a] focus:outline-none focus:ring-1 focus:ring-[#02818a] transition-colors"
                      placeholder="+7 (___) ___-__-__"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Почта *
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-[#02818a] focus:outline-none focus:ring-1 focus:ring-[#02818a] transition-colors"
                      placeholder="email@company.ru"
                      required
                    />
                  </div>
                </div>

                {/* Ряд 3: Компания | Роль в компании */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Компания
                    </label>
                    <input
                      name="company"
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-[#02818a] focus:outline-none focus:ring-1 focus:ring-[#02818a] transition-colors"
                      placeholder="Название компании"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Роль в компании
                    </label>
                    <input
                      name="role"
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-[#02818a] focus:outline-none focus:ring-1 focus:ring-[#02818a] transition-colors"
                      placeholder="Например: директор, менеджер проекта, специалист"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-[#02818a] focus:outline-none focus:ring-1 focus:ring-[#02818a] transition-colors resize-none"
                    placeholder="Опишите ваш запрос"
                    required
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1 w-4 h-4 text-[#02818a] border-gray-300 rounded focus:ring-[#02818a]"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    Я согласен на обработку персональных данных в соответствии с{" "}
                    <Link href="#" className="text-[#02818a] hover:underline">
                      Политикой конфиденциальности
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#fd5a42] text-white font-medium hover:bg-[#e54d38] transition-colors flex items-center justify-center gap-2 group"
                >
                  Отправить сообщение
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

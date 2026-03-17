"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, Search, ChevronDown, X, ArrowRight } from "lucide-react"
import { coreIndustries } from "@/data/industries"

// SIBUR Color Palette
const SIBUR = {
  primary: "#02818a",      // Main teal
  primaryHover: "#02757d", // Slightly darker teal for hover
  primaryDark: "#01313d",  // Dark teal for sidebar
  accent: "#6cdebb",       // Mint accent
  coral: "#fd5a42",        // CTA accent
  textGray: "#494a4a",     // Text gray
  bgLight: "#f1f2f4",      // Light background
}

// Полная навигация — используется в бургер-меню
const navigation = [
  {
    name: "Услуги",
    href: "/services",
    inHeader: true,
    description: "Консалтинг, аналитика и исследования, технологии, инжиниринг, развитие территорий, HR, обучение, коммуникации и стартапы.",
    submenu: [
      { name: "Консалтинг", href: "/services/consulting" },
      { name: "Аналитика и исследования", href: "/services/research" },
      { name: "Технологии", href: "/services/technologies" },
      { name: "Инжиниринг", href: "/services/engineering" },
      { name: "Развитие территорий и урбанистика", href: "/services/urban" },
      { name: "HR и организационное развитие", href: "/services/hr" },
      { name: "Обучение и развитие", href: "/services/learning" },
      { name: "Коммуникации и бренд", href: "/services/communications" },
      { name: "Стартапы и инновации", href: "/services/startups" },
      { name: "Все услуги", href: "/services" },
    ],
  },
  {
    name: "Отрасли",
    href: "/industries",
    inHeader: true,
    description: "Ключевая экспертиза: атомная отрасль, строительство, градостроительство, ИТ, госсектор, машиностроение, судостроение и другие отрасли.",
    submenu: [
      ...coreIndustries.map((i) => ({ name: i.name, href: `/industries/${i.slug}` })),
      { name: "Все отрасли", href: "/industries" },
    ],
  },
  {
    name: "Медиа",
    href: "/media",
    inHeader: true,
    description: "Новости, статьи экспертов и аналитические материалы о рынке и наших проектах.",
    submenu: [
      { name: "Новости компании", href: "/media/news" },
      { name: "Статьи", href: "/media/articles" },
      { name: "Инсайты и аналитика", href: "/media/insights" },
      { name: "Все материалы", href: "/media" },
    ],
  },
  {
    name: "Решения",
    href: "/solutions/master-planning",
    inHeader: false,
    description: "Продукты и платформенные решения Эксенты для управления развитием территорий и инвестиционными программами.",
    submenu: [
      { name: "Платформа мастер-планирования", href: "/solutions/master-planning" },
    ],
  },
  {
    name: "Компания",
    href: "/about",
    inHeader: true,
    description: "Эксента — консалтинговая компания. Повышаем эффективность бизнеса через управленческий консалтинг, цифровую трансформацию и инвестиционное консультирование.",
    submenu: [
      { name: "О нас", href: "/about" },
      { name: "Кейсы", href: "/cases" },
      { name: "Клиенты", href: "/customers" },
      { name: "Карьера", href: "/career" },
      { name: "Вакансии", href: "/career/vacancies" },
      { name: "Pro bono", href: "/pro-bono" },
      { name: "Мероприятия", href: "#events" },
      { name: "Публикации", href: "/media" },
    ],
  },
  { name: "Карьера", href: "/career", inHeader: false, description: "Присоединяйтесь к команде Эксенты. Мы ищем талантливых специалистов в консалтинг и аналитику." },
  { name: "Контакты", href: "/contacts", inHeader: true, description: "Свяжитесь с нами: офис в Санкт-Петербурге, форма обратной связи и контакты по направлениям." },
]

// Пункты только для шапки (desktop nav)
const headerNavigation = navigation.filter((item) => item.inHeader)

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [burgerActive, setBurgerActive] = useState(navigation[0].name)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const activeNav = navigation.find((n) => n.name === burgerActive)

  return (
    <>
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-sibur",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-white"
      )}
    >
      <div className="container-kept">
        <div className="flex items-center justify-between h-16">
          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-4">
            {/* Burger — открывает полноэкранное меню (доступно на всех экранах) */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="p-2 text-gray-600 hover:text-[#02818a]"
              aria-label="Открыть меню"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#02818a]">
                ЭКСЕНТА
              </span>
            </Link>
          </div>

          {/* Center: Navigation with dropdowns */}
          <nav className="hidden lg:flex items-center gap-1">
            {headerNavigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm transition-colors relative group",
                    activeDropdown === item.name
                      ? "text-[#02818a]"
                      : "text-gray-600 hover:text-[#02818a]"
                  )}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform",
                      activeDropdown === item.name && "rotate-180"
                    )} />
                  )}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#02818a] group-hover:w-3/4 transition-all duration-300" />
                </Link>

                {/* Dropdown menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 min-w-[220px] bg-white shadow-lg border border-gray-100 py-2 animate-fade-in">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-[#02818a] hover:bg-gray-50 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Lang, Search, Social, CTA */}
          <div className="flex items-center gap-3">
            {/* Language */}
            <button className="hidden md:block text-sm text-gray-600 hover:text-[#02818a] px-2">
              En
            </button>

            {/* Search */}
            <button className="p-2 text-gray-600 hover:text-[#02818a]">
              <Search className="w-5 h-5" />
            </button>

            {/* Social icons - desktop */}
            <div className="hidden xl:flex items-center gap-2">
              <a href="#" className="p-2 text-gray-400 hover:text-[#02818a] transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-[#02818a] transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.42 4 7.996c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.305-.491.745-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
                </svg>
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-[#02818a] transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>

            {/* CTA - Coral accent */}
            <Button className="hidden sm:flex bg-[#fd5a42] hover:bg-[#e54d38] text-white px-4 py-2 text-sm font-medium gap-2">
              Подписаться на рассылку
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>

    {/* Полноэкранное бургер-меню (как на Kept) */}
    {isOpen && (
      <div className="fixed inset-0 z-[100] bg-white flex flex-col" role="dialog" aria-modal="true">
        {/* Шапка меню: логотип + закрыть */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-[#02818a]">
            ЭКСЕНТА
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-500 hover:text-gray-900"
            aria-label="Закрыть меню"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Две колонки: основная навигация | подразделы и контент */}
        <div className="flex-1 flex min-h-0">
          {/* Левая колонка — пункты меню */}
          <nav className="w-[280px] shrink-0 border-r border-gray-100 py-6 overflow-y-auto">
            {navigation.map((item) => (
              <div key={item.name}>
                <button
                  type="button"
                  onClick={() => setBurgerActive(item.name)}
                  className={cn(
                    "w-full text-left flex items-center justify-between gap-2 px-6 py-3 text-sm font-medium transition-colors",
                    burgerActive === item.name
                      ? "bg-[#02818a]/10 text-[#02818a] border-l-2 border-[#02818a]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#02818a] border-l-2 border-transparent"
                  )}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4 shrink-0" />}
                </button>
              </div>
            ))}
          </nav>

          {/* Правая колонка — подразделы, описание, CTA, соцсети */}
          <div className="flex-1 py-8 px-8 lg:px-12 overflow-y-auto">
            {activeNav && (
              <>
                <div className="max-w-xl">
                  {activeNav.submenu ? (
                    <ul className="space-y-1 mb-8">
                      {activeNav.submenu.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 text-gray-700 hover:text-[#02818a] font-medium"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="mb-8">
                      <Link
                        href={activeNav.href}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-2 text-[#02818a] font-medium"
                      >
                        Перейти в раздел
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                  {"description" in activeNav && activeNav.description && (
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">
                      {activeNav.description}
                    </p>
                  )}
                  <Button
                    asChild
                    className="bg-[#02818a] hover:bg-[#02757d] text-white gap-2"
                  >
                    <a href="#" onClick={() => setIsOpen(false)}>
                      Подписаться на рассылку
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                  <div className="flex items-center gap-4 mt-10">
                    <a href="#" className="text-gray-400 hover:text-[#02818a] transition-colors" aria-label="Дзен">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[#02818a] transition-colors" aria-label="ВКонтакте">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0z"/></svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[#02818a] transition-colors" aria-label="Telegram">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Подвал меню */}
        <div className="bg-[#01313d] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <Button asChild variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-0 gap-2">
            <a href="#" onClick={() => setIsOpen(false)}>
              Подписаться на рассылку
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <p className="text-sm text-white/80">
            Консалтинг и аналитика для устойчивого роста бизнеса
          </p>
        </div>
      </div>
    )}
    </>
  )
}

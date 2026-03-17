import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Эксента — Консалтинговая компания",
  description: "Управленческий консалтинг, цифровая трансформация и инвестиционное консультирование для компаний, нацеленных на устойчивый рост.",
  keywords: ["консалтинг", "управление", "цифровая трансформация", "инвестиции", "бизнес-консалтинг", "Эксента", "эффективность", "стратегия"],
  authors: [{ name: "Эксента" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Эксента — Консалтинговая компания",
    description: "Повышаем эффективность вашего бизнеса. Управленческий консалтинг, цифровая трансформация и инвестиционное консультирование.",
    url: "https://exenta.ru",
    siteName: "Эксента",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}

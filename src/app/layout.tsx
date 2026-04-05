import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Čeština pro Rusky — Изучение чешского языка",
  description: "Интерактивное приложение для изучения чешского языка для русскоговорящих. Алфавит, словарь, грамматика и упражнения.",
  keywords: ["чешский язык", "чешский для русских", "учить чешский", "Čeština", "Czech language"],
  authors: [{ name: "Čeština pro Rusky" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Čeština pro Rusky — Изучение чешского языка",
    description: "Интерактивное приложение для изучения чешского языка для русскоговорящих",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Čeština pro Rusky — Изучение чешского языка",
    description: "Интерактивное приложение для изучения чешского языка для русскоговорящих",
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}

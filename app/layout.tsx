// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";
import LiveChat from "@/components/ui/LiveChat";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  // 👇 Adicione um ícone/emoji antes do título
  title: {
    default: "NXT Digital Company",
    template: "⚡ %s | NXT Digital",
  },
  
  description: "A NXT Digital cria sites, sistemas e soluções digitais.",
  keywords: ["desenvolvimento web", "NXT Digital"],
  
  // 👇 Ícone para a aba
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  openGraph: {
    title: "⚡ NXT Digital — Soluções Digitais Premium",
    description: "A NXT Digital cria sites, sistemas e soluções digitais.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-surface text-white antialiased">
        <CursorGlow />
        <Header />
        {children}
        <LiveChat />
        <Footer />
      </body>
    </html>
  );
}
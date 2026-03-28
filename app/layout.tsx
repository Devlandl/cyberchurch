import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "CyberChurch Onchain - The AI-First Sanctuary for the Multiverse",
  description: "Enterprise-grade infrastructure for 550,000+ users. Powered by Google Cloud, NVIDIA GPUs, and Gemini AI.",
  openGraph: {
    title: "CyberChurch Onchain - The AI-First Sanctuary for the Multiverse",
    description: "Enterprise-grade infrastructure for 550,000+ users.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#007BFF" />
      </head>
      <body className="bg-[#0A0A0A] text-[#F5F5F5] antialiased font-[family-name:var(--font-inter)]">
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

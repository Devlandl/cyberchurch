import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "CCONCHAIN - Enterprise Infrastructure for the Decentralized Multiverse",
  description: "The enterprise-grade foundation for the decentralized Multiverse. Build, control, and scale spatial environments on Google Cloud infrastructure.",
  openGraph: {
    title: "CCONCHAIN - Your Vision. Our Infrastructure. Sovereign Control.",
    description: "Enterprise-grade infrastructure for spatial computing, real-time 3D rendering, and large-scale digital collaboration.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${mono.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#007BFF" />
      </head>
      <body className="bg-[#06080C] text-[#E8ECF1] antialiased font-[family-name:var(--font-dm)]">
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

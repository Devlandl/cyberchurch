import Link from "next/link";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <Globe size={20} className="text-[#007BFF]" />
              <span className="font-bold">CyberChurch Onchain</span>
            </div>
            <p className="text-sm text-[#888] max-w-sm">
              The AI-First Sanctuary for the Multiverse. Providing enterprise-grade infrastructure for digital community sovereignty.
            </p>
            <p className="text-xs text-[#555] mt-3">
              Part of the Google Cloud for Startups Program
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Platform</h4>
            <div className="space-y-2">
              <Link href="/product" className="block text-sm text-[#888] hover:text-white transition">Product</Link>
              <Link href="/roadmap" className="block text-sm text-[#888] hover:text-white transition">Roadmap</Link>
              <Link href="/about" className="block text-sm text-[#888] hover:text-white transition">About</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-[#888] hover:text-white transition">Team</Link>
              <Link href="/about#contact" className="block text-sm text-[#888] hover:text-white transition">Contact</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#555]">&copy; 2026 CyberChurch Onchain. All rights reserved.</p>
          <p className="text-xs text-[#555]">GC Startup Case #00256566</p>
        </div>
      </div>
    </footer>
  );
}

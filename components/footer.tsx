import Link from "next/link";
import { Hexagon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#1C2333] bg-[#06080C]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <Hexagon size={18} className="text-[#007BFF]" />
              <span className="font-display font-bold tracking-tight">CCONCHAIN</span>
            </div>
            <p className="text-sm text-[#7A8599] leading-relaxed">
              The enterprise-grade foundation for the decentralized Multiverse.
            </p>
            <p className="text-xs text-[#4A5568] mt-3 font-mono">
              Google Cloud for Startups Program
            </p>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-[#E8ECF1]">Platform</h4>
            <div className="space-y-2">
              <Link href="/product" className="block text-sm text-[#7A8599] hover:text-white transition-colors">Product</Link>
              <Link href="/roadmap" className="block text-sm text-[#7A8599] hover:text-white transition-colors">Roadmap</Link>
              <Link href="/about" className="block text-sm text-[#7A8599] hover:text-white transition-colors">About</Link>
              <Link href="/about#contact" className="block text-sm text-[#7A8599] hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Multiverse links */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-[#E8ECF1]">Multiverse</h4>
            <div className="space-y-2">
              <a href="https://multiverseonline.io/" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#7A8599] hover:text-white transition-colors">
                Launch Platform
              </a>
              <a href="https://www.multiverseupdates.com/" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#7A8599] hover:text-white transition-colors">
                Updates
              </a>
              <a href="https://www.multiverseupdates.com/events" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#7A8599] hover:text-white transition-colors">
                Events
              </a>
              <a href="https://www.multiverseupdates.com/tutorial" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#7A8599] hover:text-white transition-colors">
                Tutorials
              </a>
            </div>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-[#E8ECF1]">Community</h4>
            <div className="space-y-2">
              <a href="https://www.multiverseupdates.com/newsletter-sign-up-form" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#7A8599] hover:text-white transition-colors">
                Newsletter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1C2333] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#4A5568]">&copy; 2026 CCONCHAIN. All rights reserved.</p>
          <p className="text-xs text-[#4A5568] font-mono">GC Startup Case #00256566</p>
        </div>
      </div>
    </footer>
  );
}

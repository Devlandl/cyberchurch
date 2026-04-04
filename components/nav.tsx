"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Hexagon } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#06080C]/90 backdrop-blur-md border-b border-[#1C2333]/60">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Hexagon size={22} className="text-[#007BFF]" />
          <div>
            <div className="font-display font-bold text-lg tracking-tight leading-none">
              CCON<span className="text-[#007BFF]">CHAIN</span>
            </div>
            <span className="block text-[10px] text-[#4A5568] tracking-wide leading-none mt-0.5">
              CyberChurch Onchain, Inc.
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-[#7A8599] hover:text-white transition-colors duration-200">
              {l.label}
            </Link>
          ))}
          <a
            href="https://multiverseonline.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-[#007BFF] text-white text-sm font-semibold rounded-lg hover:bg-[#0056b3] transition-colors duration-200"
          >
            Deploy Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-[#7A8599]">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#06080C] border-t border-[#1C2333]/60 px-6 py-4 space-y-3">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-[#7A8599] hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
          <a href="https://multiverseonline.io/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="block w-full text-center px-4 py-2 bg-[#007BFF] text-white text-sm font-semibold rounded-lg">
            Deploy Now
          </a>
        </div>
      )}
    </nav>
  );
}

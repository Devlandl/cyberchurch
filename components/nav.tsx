"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Globe size={24} className="text-[#007BFF]" />
          <span className="font-bold text-lg">
            Cyber<span className="text-[#007BFF]">Church</span> Onchain
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-[#888] hover:text-white transition">
              {l.label}
            </Link>
          ))}
          <Link
            href="/product"
            className="px-4 py-2 bg-[#007BFF] text-white text-sm font-semibold rounded-lg hover:bg-[#0056b3] transition"
          >
            Enter the Multiverse
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-[#888]">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[#1a1a1a] px-6 py-4 space-y-3">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-[#888] hover:text-white transition">
              {l.label}
            </Link>
          ))}
          <Link href="/product" onClick={() => setOpen(false)} className="block w-full text-center px-4 py-2 bg-[#007BFF] text-white text-sm font-semibold rounded-lg">
            Enter the Multiverse
          </Link>
        </div>
      )}
    </nav>
  );
}

import Link from "next/link";
import { ParticleBg } from "@/components/particle-bg";
import {
  ArrowRight, Globe2, Building2, Map, Box,
  Users, Orbit, Shield, Server, Layers,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBg />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-30" />

        {/* Radial glow from top */}
        <div className="absolute inset-0 bg-gradient-radial-blue" />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#06080C]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Status badge */}
          <div className="animate-fade-up inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#0E1219] border border-[#1C2333] text-sm mb-10">
            <span className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse-glow" />
            <span className="text-[#7A8599]">Enterprise Infrastructure</span>
            <span className="text-[#007BFF] font-semibold font-mono text-xs">ACTIVE</span>
          </div>

          <h1 className="animate-fade-up delay-100 font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
            <span className="text-[#E8ECF1]">Your Vision.</span>
            <br />
            <span className="text-gradient-blue">Our Infrastructure.</span>
            <br />
            <span className="text-[#E8ECF1]">Sovereign Control.</span>
          </h1>

          <p className="animate-fade-up delay-300 text-base md:text-lg text-[#7A8599] max-w-2xl mx-auto mb-12 leading-relaxed">
            CCONCHAIN is the enterprise-grade foundation for the decentralized Multiverse.
            We provide the tools for organizations to build, control, and scale their own
            spatial environments&mdash;from immersive digital cities to autonomous AI-driven agents.
          </p>

          <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://multiverseonline.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#007BFF] text-white font-semibold rounded-lg hover:bg-[#0056b3] transition-all duration-300 glow-blue"
            >
              Deploy Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/roadmap"
              className="px-8 py-4 bg-[#0E1219] border border-[#1C2333] text-[#E8ECF1] rounded-lg hover:border-[#007BFF]/40 transition-all duration-300"
            >
              View Architecture
            </Link>
          </div>

          {/* Infrastructure partners */}
          <div className="animate-fade-up delay-600 mt-20 flex items-center justify-center gap-6 md:gap-10">
            <span className="text-xs text-[#4A5568] uppercase tracking-widest">Powered by</span>
            <div className="h-4 w-px bg-[#1C2333]" />
            <span className="text-sm text-[#7A8599] font-semibold tracking-wide">Google Cloud</span>
            <span className="text-sm text-[#7A8599] font-semibold tracking-wide">NVIDIA</span>
            <span className="text-sm text-[#7A8599] font-semibold tracking-wide">Gemini AI</span>
          </div>
        </div>

        {/* Bottom scan line accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#007BFF]/30 to-transparent" />
      </section>

      {/* ===== SECTION 2: CORE UTILITY ===== */}
      <section className="relative py-28 px-6 overflow-hidden">
        {/* Background atmosphere */}
        <div className="absolute inset-0 bg-gradient-radial-cyan" />
        <div className="absolute inset-0 bg-grid-fine opacity-20" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E1219] border border-[#1C2333] text-xs font-mono text-[#00D4FF] mb-6 uppercase tracking-widest">
              <Globe2 size={14} />
              Core Platform
            </div>

            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Collaborate at the{" "}
              <span className="text-gradient-blue">Speed of the Cloud</span>
            </h2>

            <p className="text-[#7A8599] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Link your device to our Multiverse gateway to unlock a new dimension of productivity.
              CCONCHAIN transforms traditional cloud storage into a collaborative spatial experience,
              allowing you to bring your most important files and media into an immersive VR environment.
              Meet, showcase, and build with anyone, anywhere, on the infrastructure built for the
              next generation of global content.
            </p>
          </div>

          {/* Capability indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Cloud Storage", sublabel: "Spatial sync", icon: <Server size={20} /> },
              { label: "VR Environments", sublabel: "Immersive collab", icon: <Globe2 size={20} /> },
              { label: "Real-time Render", sublabel: "GPU-accelerated", icon: <Layers size={20} /> },
              { label: "Global Scale", sublabel: "Multi-region", icon: <Users size={20} /> },
            ].map((item, i) => (
              <div
                key={i}
                className="card-infrastructure rounded-xl p-5 text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#007BFF]/10 text-[#007BFF] mb-3">
                  {item.icon}
                </div>
                <div className="text-sm font-semibold text-[#E8ECF1]">{item.label}</div>
                <div className="text-xs text-[#4A5568] mt-1 font-mono">{item.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1C2333] to-transparent" />
      </section>

      {/* ===== SECTION 3: SOLUTIONS GRID ===== */}
      <section className="relative py-28 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E1219] border border-[#1C2333] text-xs font-mono text-[#007BFF] mb-6 uppercase tracking-widest">
              <Layers size={14} />
              Solutions
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Enterprise <span className="text-gradient-blue">Use Cases</span>
            </h2>
            <p className="text-[#7A8599] max-w-xl mx-auto">
              GPU-powered spatial computing for every organizational need.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Column 1: Executive Suites */}
            <div className="group card-infrastructure rounded-2xl p-8 relative overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#007BFF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#007BFF]/10 text-[#007BFF] mb-6">
                <Building2 size={24} />
              </div>

              <div className="text-xs font-mono text-[#4A5568] uppercase tracking-widest mb-2">Executive Suites</div>

              <h3 className="font-display text-xl font-bold mb-4 text-[#E8ECF1]">
                Spatial Governance &amp; Executive Immersion
              </h3>

              <p className="text-[#7A8599] text-sm leading-relaxed mb-6">
                Elevate organizational leadership through high-fidelity, immersive executive
                environments. CCONCHAIN provides the infrastructure for secure board meetings,
                client presentations, and strategic team synchronization within custom-architected
                virtual suites. Designed for maximum focus and professional presence, our platform
                ensures that your high-stakes digital interactions command the same authority as a
                physical headquarters.
              </p>

              <div className="flex items-center gap-2 text-[#007BFF] text-sm font-semibold group-hover:gap-3 transition-all">
                Learn more <ChevronRight size={16} />
              </div>
            </div>

            {/* Column 2: Real Estate */}
            <div className="group card-infrastructure rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#00D4FF]/10 text-[#00D4FF] mb-6">
                <Map size={24} />
              </div>

              <div className="text-xs font-mono text-[#4A5568] uppercase tracking-widest mb-2">Real Estate / Digital Twins</div>

              <h3 className="font-display text-xl font-bold mb-4 text-[#E8ECF1]">
                Global Asset Intelligence &amp; Strategic Real Estate Galleries
              </h3>

              <p className="text-[#7A8599] text-sm leading-relaxed mb-6">
                CCONCHAIN streamlines the presentation of high-value property portfolios through
                advanced spatial orchestration. By linking your cloud-stored architectural assets
                to our immersive environments, we provide a unified platform for global investor
                relations and project development. This high-scale environment ensures that your
                strategic properties are showcased with the fidelity and security required by
                institutional partners.
              </p>

              <div className="flex items-center gap-2 text-[#00D4FF] text-sm font-semibold group-hover:gap-3 transition-all">
                Learn more <ChevronRight size={16} />
              </div>
            </div>

            {/* Column 3: 3D Rendering */}
            <div className="group card-infrastructure rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] mb-6">
                <Box size={24} />
              </div>

              <div className="text-xs font-mono text-[#4A5568] uppercase tracking-widest mb-2">3D Rendering</div>

              <h3 className="font-display text-xl font-bold mb-4 text-[#E8ECF1]">
                Accelerated 3D Asset Deployment &amp; Interactive Visualization
              </h3>

              <p className="text-[#7A8599] text-sm leading-relaxed mb-6">
                CCONCHAIN leverages Google Cloud&apos;s GPU-accelerated infrastructure to deliver
                high-fidelity, real-time 3D environments for complex project visualization. By
                transforming static architectural data into interactive spatial assets, we enable
                businesses to conduct remote, high-performance &ldquo;walk-throughs&rdquo; with
                global stakeholders. Our low-latency rendering engine ensures that off-plan
                projects are experienced with unprecedented visual accuracy and technical stability.
              </p>

              <div className="flex items-center gap-2 text-[#F59E0B] text-sm font-semibold group-hover:gap-3 transition-all">
                Learn more <ChevronRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: INFRASTRUCTURE PROOF (PLANETARIUM) ===== */}
      <section className="relative py-28 px-6 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[#0C1017]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-radial-blue" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E1219] border border-[#1C2333] text-xs font-mono text-[#00C853] mb-6 uppercase tracking-widest">
              <Orbit size={14} />
              Live Infrastructure Proof
            </div>

            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Persistent Public Domains &amp;{" "}
              <span className="text-gradient-blue">High-Fidelity Event Hosting</span>
            </h2>

            <p className="text-[#7A8599] max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              Experience the future of global digital engagement in our high-fidelity virtual
              planetarium. CCONCHAIN hosts daily large-scale interactive events, leveraging
              high-performance compute to sync thousands of concurrent users in a shared spatial
              environment. From interactive puzzle-solving to real-time orbital tracking, the
              Planetarium demonstrates our platform&apos;s ability to manage complex, data-rich
              public spaces with zero latency.
            </p>
          </div>

          {/* Planetarium visual card */}
          <div className="relative rounded-2xl border border-[#1C2333] overflow-hidden glow-blue-soft">
            {/* Simulated planetarium view */}
            <div className="aspect-[21/9] bg-[#080C14] relative flex items-center justify-center">
              {/* Orbital rings decoration */}
              <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-[#1C2333]/50 animate-[spin_60s_linear_infinite]" />
              <div className="absolute w-[220px] h-[220px] md:w-[380px] md:h-[380px] rounded-full border border-[#007BFF]/10 animate-[spin_45s_linear_infinite_reverse]" />
              <div className="absolute w-[140px] h-[140px] md:w-[260px] md:h-[260px] rounded-full border border-[#00D4FF]/10 animate-[spin_30s_linear_infinite]" />

              {/* Center element */}
              <div className="relative z-10 text-center">
                <Orbit size={48} className="text-[#007BFF]/60 mx-auto mb-4 animate-float" />
                <div className="text-xs font-mono text-[#4A5568] uppercase tracking-widest">The Planetarium</div>
                <div className="text-sm text-[#7A8599] mt-1">Real-time Orbital Telemetry</div>
                <a
                  href="https://www.multiverseupdates.com/events"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-[#007BFF] hover:text-[#00D4FF] transition-colors"
                >
                  View Events <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#1C2333]">
              {[
                { value: "1,000+", label: "Concurrent Users" },
                { value: "24/7", label: "Persistent Uptime" },
                { value: "<50ms", label: "Sync Latency" },
                { value: "Daily", label: "Live Events" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`p-5 text-center ${i < 3 ? "border-r border-[#1C2333]" : ""} ${i < 2 ? "border-b md:border-b-0 border-[#1C2333]" : ""}`}
                >
                  <div className="text-lg md:text-xl font-bold font-display text-[#E8ECF1]">{stat.value}</div>
                  <div className="text-xs text-[#4A5568] font-mono mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1C2333] to-transparent" />
      </section>

      {/* ===== SECTION 5: TECHNICAL SUMMARY ===== */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#06080C] via-[#06080C] to-[#0C1017]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E1219] border border-[#1C2333] text-xs font-mono text-[#007BFF] mb-6 uppercase tracking-widest">
            <Shield size={14} />
            Platform Overview
          </div>

          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Distributed Spatial Collaboration &amp;{" "}
            <span className="text-gradient-blue">Secure Multi-Domain Hosting</span>
          </h2>

          <p className="text-[#7A8599] max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-12">
            CCONCHAIN represents the most versatile architectural framework for global spatial
            collaboration. Our platform enables organizations to seamlessly navigate persistent
            public domains or deploy high-security private environments for proprietary asset
            management. By leveraging Google Cloud&apos;s distributed infrastructure, we provide a
            unified gateway for large-scale user synchronization and high-fidelity project hosting.
          </p>

          {/* Architecture pillars */}
          <div className="grid md:grid-cols-3 gap-4 mb-14">
            {[
              {
                label: "Distributed Infrastructure",
                description: "Multi-region deployment on Google Cloud with automatic failover",
                icon: <Server size={20} />,
              },
              {
                label: "Spatial Collaboration",
                description: "Real-time synchronization across persistent public and private domains",
                icon: <Users size={20} />,
              },
              {
                label: "Sovereign Security",
                description: "Enterprise-grade encryption with user-owned domain control",
                icon: <Shield size={20} />,
              },
            ].map((pillar, i) => (
              <div key={i} className="card-infrastructure rounded-xl p-6 text-left">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#007BFF]/10 text-[#007BFF] mb-4">
                  {pillar.icon}
                </div>
                <div className="text-sm font-semibold text-[#E8ECF1] mb-1">{pillar.label}</div>
                <div className="text-xs text-[#4A5568] leading-relaxed">{pillar.description}</div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="https://multiverseonline.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#007BFF] text-white font-semibold rounded-lg hover:bg-[#0056b3] transition-all duration-300 glow-blue"
            >
              Get Started
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0E1219] border border-[#1C2333] text-[#E8ECF1] rounded-lg hover:border-[#007BFF]/40 transition-all duration-300"
            >
              Contact Our Team
            </Link>
          </div>

          {/* Bottom brand stamp */}
          <div className="mt-20 pt-10 border-t border-[#1C2333]">
            <p className="text-sm text-[#4A5568] leading-relaxed max-w-xl mx-auto">
              The future is yours to create.{" "}
              <span className="text-[#7A8599] font-semibold">Build it on CCONCHAIN.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

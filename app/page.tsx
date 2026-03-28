import Link from "next/link";
import { ParticleBg } from "@/components/particle-bg";
import { StatCard } from "@/components/stat-card";
import { Timeline } from "@/components/timeline";
import { FounderCard } from "@/components/founder-card";
import { PartnerCard } from "@/components/partner-card";
import { MediaPlaceholder } from "@/components/media-placeholder";
import {
  Users, Clock, Cpu, Server, Brain, Shield, Rocket,
  ArrowRight, Quote,
} from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBg />
        <div className="absolute inset-0 bg-gradient-to-b from-[#007BFF]/5 via-transparent to-[#0A0A0A]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#007BFF]/10 border border-[#007BFF]/20 text-[#007BFF] text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse-glow" />
            Enterprise Infrastructure Migration - Active
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            CyberChurch Onchain:{" "}
            <span className="text-gradient-blue">The AI-First Sanctuary</span>{" "}
            for the Multiverse
          </h1>

          <p className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto mb-10">
            Providing enterprise-grade infrastructure for 550,000+ users through
            Google Cloud&apos;s AI-First program. Powered by NVIDIA GPUs and Gemini AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/product"
              className="px-8 py-4 bg-[#007BFF] text-white font-semibold rounded-lg hover:bg-[#0056b3] transition glow-blue"
            >
              View the Platform
            </Link>
            <Link
              href="/roadmap"
              className="px-8 py-4 bg-[#111] border border-[#2A2A2A] text-white rounded-lg hover:border-[#007BFF]/50 transition"
            >
              Read the Roadmap
            </Link>
          </div>

          {/* Partner logos */}
          <div className="mt-16 flex items-center justify-center gap-8 text-xs text-[#555]">
            <span>Powered by</span>
            <span className="text-[#888] font-semibold">Google Cloud</span>
            <span className="text-[#888] font-semibold">NVIDIA</span>
            <span className="text-[#888] font-semibold">Gemini AI</span>
          </div>
        </div>
      </section>

      {/* ===== THE PRODUCT ===== */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Multiverse <span className="text-gradient-blue">Sanctuary</span>
            </h2>
            <p className="text-[#888] max-w-xl mx-auto">
              CyberChurch is the Technical Sponsor and Platform Operator providing the AI
              infrastructure layer for the Multiverse - a social VR platform with over half
              a million registered users undergoing enterprise migration to Google Cloud.
            </p>
          </div>

          {/* Media placeholder */}
          <div className="mb-12">
            <MediaPlaceholder label="Multiverse Platform Preview - Media Assets Coming Soon" />
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-4">
            <StatCard value="550,000+" label="Registered Global Users" icon={<Users size={24} className="text-[#007BFF]" />} />
            <StatCard value="38 Months" label="Infrastructure Sanctuary" icon={<Clock size={24} className="text-[#007BFF]" />} />
            <StatCard value="GPU-Powered" label="NVIDIA L4 Clusters" icon={<Cpu size={24} className="text-[#007BFF]" />} />
          </div>
        </div>
      </section>

      {/* ===== ROADMAP PREVIEW ===== */}
      <section className="py-24 px-6 bg-[#111]/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI-First <span className="text-gradient-blue">Technical Roadmap</span>
            </h2>
            <p className="text-[#888] max-w-xl mx-auto">
              A phased approach to migrating and scaling the Multiverse platform on Google Cloud infrastructure.
            </p>
          </div>

          <Timeline
            compact
            phases={[
              {
                phase: "Phase 1 - Months 1-6",
                title: "Infrastructure Migration",
                description: "Migrate 550k user platform to Google Kubernetes Engine with enterprise-grade reliability.",
                icon: <Server size={20} />,
              },
              {
                phase: "Phase 2 - Months 4-12",
                title: "GPU Scaling",
                description: "Deploy NVIDIA L4 GPU clusters for spatial computing and real-time rendering at scale.",
                icon: <Cpu size={20} />,
              },
              {
                phase: "Phase 3 - Months 8-18",
                title: "Gemini Integration",
                description: "Implement Gemini Enterprise CX for community governance and automated support.",
                icon: <Brain size={20} />,
              },
              {
                phase: "Phase 4 - Months 12-38",
                title: "Full Sovereignty",
                description: "Decentralized infrastructure sanctuary protocols for long-term community independence.",
                icon: <Shield size={20} />,
              },
            ]}
          />

          <div className="text-center mt-10">
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#111] border border-[#2A2A2A] rounded-lg text-sm hover:border-[#007BFF]/50 transition"
            >
              View Full Roadmap <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== INSTITUTIONAL CREDIBILITY ===== */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Strategic Partnerships &{" "}
              <span className="text-gradient-blue">Stewardship</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Founder */}
            <FounderCard
              name="Jean Frantzy Sylvain Italien"
              role="CEO & Protocol Researcher"
              background="Former L2 Operator, Waymo/Alphabet (Google) - Mountain View, CA"
              education="Colorado Christian University"
              bio="Bridging autonomous vehicle infrastructure expertise from Waymo to autonomous community infrastructure. The same principles of reliability, scale, and AI-first design that power self-driving cars now power the Multiverse Sanctuary."
            />

            {/* Partners */}
            <div className="space-y-6">
              <PartnerCard
                name="Future Tech Labs (FTL)"
                role="Platform Creators & Visionary Partners"
                description="The technology company behind the Multiverse platform. FTL brings deep expertise in spatial computing, VR environments, and community-scale digital worlds."
              />
              <PartnerCard
                name="San Shepherd"
                role="Multiverse Creator & Community Steward"
                description="The visionary creator of the Multiverse. San Shepherd brings the community relationships and creative vision that made the platform home to over half a million users worldwide."
              />
            </div>
          </div>

          {/* Mission quote */}
          <div className="bg-[#111] border border-[#007BFF]/20 rounded-2xl p-8 md:p-12 text-center glow-blue">
            <Quote size={32} className="text-[#007BFF]/40 mx-auto mb-4" />
            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
              &ldquo;Our mission is to provide a 38-month Infrastructure Sanctuary, ensuring
              community continuity through the Google Cloud AI-First grant.&rdquo;
            </p>
            <p className="text-sm text-[#888] mt-4">- CyberChurch Onchain Mission Statement</p>
          </div>
        </div>
      </section>

      {/* ===== THE MISSION ===== */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/10 via-transparent to-[#00D4FF]/10" />
        <div className="relative max-w-3xl mx-auto text-center">
          <Rocket size={40} className="text-[#007BFF] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Preserving Digital Communities Through{" "}
            <span className="text-gradient-blue">Enterprise Infrastructure</span>
          </h2>
          <p className="text-[#888] leading-relaxed mb-8">
            The Multiverse is more than a platform - it&apos;s a home for over half a million
            creators, builders, and dreamers. CyberChurch Onchain exists to ensure that
            community never goes dark. Through a 38-month infrastructure sanctuary powered
            by Google Cloud&apos;s AI-First program, we&apos;re building the bridge from legacy
            infrastructure to a sovereign, AI-powered future.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#007BFF] text-white font-semibold rounded-lg hover:bg-[#0056b3] transition"
          >
            Learn About Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

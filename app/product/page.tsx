import { MediaPlaceholder } from "@/components/media-placeholder";
import { StatCard } from "@/components/stat-card";
import {
  Server, Cpu, Brain, Globe, Shield, Database,
  Users, Clock, Zap,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Multiverse Sanctuary Platform - CCONCHAIN",
  description: "Enterprise-grade infrastructure for the world's largest community VR environment. 550,000+ users. GPU-powered. AI-first.",
};

const techStack = [
  { icon: Server, name: "Google Kubernetes Engine", desc: "Container orchestration at scale" },
  { icon: Cpu, name: "NVIDIA L4 GPUs", desc: "Spatial computing acceleration" },
  { icon: Brain, name: "Google Cloud Vertex AI", desc: "AI model serving and training" },
  { icon: Globe, name: "Gemini Enterprise CX", desc: "Community interaction AI" },
  { icon: Zap, name: "Cloud CDN", desc: "Global content delivery" },
  { icon: Database, name: "Cloud SQL", desc: "User data management" },
];

export default function ProductPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00C853]/10 border border-[#00C853]/20 text-[#00C853] text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse-glow" />
            Production / Migration Phase
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Multiverse <span className="text-gradient-blue">Sanctuary</span> Platform
          </h1>
          <p className="text-lg text-[#888] max-w-2xl">
            Enterprise-grade infrastructure for the world&apos;s largest community VR
            environment. Currently in active migration to Google Cloud.
          </p>
        </div>
      </section>

      {/* Platform Showcase */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Platform Preview</h2>
          {/* Large hero media */}
          <div className="mb-6">
            <MediaPlaceholder label="Multiverse Environment - Full Platform View" />
          </div>
          {/* Grid of smaller previews */}
          <div className="grid md:grid-cols-3 gap-4">
            <MediaPlaceholder label="User Interface" />
            <MediaPlaceholder label="Virtual Spaces" />
            <MediaPlaceholder label="Community Hub" />
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-24 px-6 bg-[#111]/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Technical Stack</h2>
          <p className="text-[#888] mb-8">
            Enterprise infrastructure built on Google Cloud&apos;s most advanced services.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {techStack.map((t) => (
              <div key={t.name} className="bg-[#0A0A0A] border border-[#1a1a1a] rounded-xl p-6 hover:border-[#007BFF]/30 transition">
                <div className="w-10 h-10 bg-[#007BFF]/10 rounded-xl flex items-center justify-center mb-4">
                  <t.icon size={20} className="text-[#007BFF]" />
                </div>
                <h3 className="font-bold mb-1">{t.name}</h3>
                <p className="text-sm text-[#888]">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Model */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">The CCONCHAIN Operating Model</h2>
          <p className="text-[#888] mb-8">
            A tripartite partnership delivering enterprise infrastructure for digital communities.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#111] border border-[#007BFF]/20 rounded-xl p-6 text-center glow-blue">
              <div className="w-12 h-12 bg-[#007BFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={24} className="text-[#007BFF]" />
              </div>
              <h3 className="font-bold text-lg mb-2">CCONCHAIN</h3>
              <p className="text-sm text-[#007BFF] mb-2">Technical Sponsor & Platform Operator</p>
              <p className="text-xs text-[#888]">AI infrastructure, cloud operations, and enterprise-grade scaling through Google Cloud partnership.</p>
            </div>
            <div className="bg-[#111] border border-[#1a1a1a] rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-[#007BFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu size={24} className="text-[#007BFF]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Future Tech Labs</h3>
              <p className="text-sm text-[#007BFF] mb-2">Platform Development & Innovation</p>
              <p className="text-xs text-[#888]">Core platform technology, spatial computing engine, and next-generation feature development.</p>
            </div>
            <div className="bg-[#111] border border-[#1a1a1a] rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-[#007BFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-[#007BFF]" />
              </div>
              <h3 className="font-bold text-lg mb-2">San Shepherd</h3>
              <p className="text-sm text-[#007BFF] mb-2">Community Vision & Content Stewardship</p>
              <p className="text-xs text-[#888]">Creative direction, community relationships, and the vision that built a 550,000-user digital world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Metrics */}
      <section className="py-24 px-6 bg-[#111]/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Platform Scale</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <StatCard value="550,000+" label="Registered Users" icon={<Users size={24} className="text-[#007BFF]" />} />
            <StatCard value="100+" label="Countries Worldwide" icon={<Globe size={24} className="text-[#007BFF]" />} />
            <StatCard value="38 Months" label="Infrastructure Commitment" icon={<Clock size={24} className="text-[#007BFF]" />} />
            <StatCard value="Enterprise" label="Google Cloud Tier" icon={<Shield size={24} className="text-[#007BFF]" />} />
          </div>
        </div>
      </section>
    </div>
  );
}

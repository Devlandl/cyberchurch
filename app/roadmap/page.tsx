import { Timeline } from "@/components/timeline";
import {
  Server, Cpu, Brain, Shield, Briefcase,
  HardDrive, Globe, Zap, Database,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-First Technical Roadmap - CyberChurch Onchain",
  description: "How we're scaling infrastructure for 550,000+ users with Google Cloud's $350k AI-First credits.",
};

const allocations = [
  { icon: Cpu, label: "GPU Compute", desc: "NVIDIA L4 clusters for spatial computing", pct: "35%" },
  { icon: Brain, label: "Gemini Enterprise CX", desc: "Community AI interactions and governance", pct: "20%" },
  { icon: Server, label: "GKE Infrastructure", desc: "Container orchestration at scale", pct: "20%" },
  { icon: HardDrive, label: "Cloud Storage & CDN", desc: "Global asset delivery network", pct: "15%" },
  { icon: Database, label: "Vertex AI", desc: "Custom model training and serving", pct: "10%" },
];

export default function RoadmapPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI-First <span className="text-gradient-blue">Technical Roadmap</span>
          </h1>
          <p className="text-lg text-[#888] max-w-2xl">
            How we&apos;re scaling infrastructure for 550,000+ users with Google Cloud&apos;s
            AI-First program credits.
          </p>
        </div>
      </section>

      {/* Credit Allocation */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Credit Allocation</h2>
          <div className="space-y-3">
            {allocations.map((a) => (
              <div key={a.label} className="bg-[#111] border border-[#1a1a1a] rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 bg-[#007BFF]/10 rounded-xl flex items-center justify-center shrink-0">
                  <a.icon size={20} className="text-[#007BFF]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-sm">{a.label}</h3>
                    <span className="text-sm font-mono text-[#007BFF]">{a.pct}</span>
                  </div>
                  <p className="text-xs text-[#888]">{a.desc}</p>
                  {/* Progress bar */}
                  <div className="mt-2 h-1.5 bg-[#2A2A2A] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#007BFF] to-[#00D4FF] rounded-full"
                      style={{ width: a.pct }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Timeline */}
      <section className="py-24 px-6 bg-[#111]/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Implementation Timeline</h2>
          <Timeline
            phases={[
              {
                phase: "Phase 1 - Months 1-6",
                title: "Infrastructure Migration",
                description: "Establish enterprise-grade foundation on Google Cloud for the complete Multiverse platform.",
                icon: <Server size={20} />,
                details: [
                  "Migrate user database and authentication systems",
                  "Deploy GKE clusters for application workloads",
                  "Establish Cloud CDN for global asset delivery",
                  "Set up monitoring, logging, and observability",
                  "Zero-downtime migration for 550k user accounts",
                ],
              },
              {
                phase: "Phase 2 - Months 4-12",
                title: "GPU Scaling",
                description: "Deploy NVIDIA L4 GPU infrastructure for spatial computing at community scale.",
                icon: <Cpu size={20} />,
                details: [
                  "Deploy NVIDIA L4 GPU node pools on GKE",
                  "Scale spatial computing for concurrent users",
                  "Optimize rendering pipeline for cloud delivery",
                  "Load testing at 550k+ user scale",
                  "Auto-scaling policies for peak usage",
                ],
              },
              {
                phase: "Phase 3 - Months 8-18",
                title: "Gemini Integration",
                description: "Implement Google's Gemini AI for community governance and intelligent platform management.",
                icon: <Brain size={20} />,
                details: [
                  "Implement Gemini Enterprise CX for community support",
                  "Automated content moderation and governance",
                  "AI-powered community interaction tools",
                  "Natural language infrastructure management",
                  "Predictive scaling based on usage patterns",
                ],
              },
              {
                phase: "Phase 4 - Months 12-38",
                title: "Full Sovereignty",
                description: "Achieve infrastructure independence with community-governed protocols.",
                icon: <Shield size={20} />,
                details: [
                  "Decentralized identity and data ownership",
                  "Community-governed infrastructure protocols",
                  "Self-sustaining economic model",
                  "Platform independence and resilience",
                  "Long-term sanctuary guarantee fulfilled",
                ],
              },
            ]}
          />
        </div>
      </section>

      {/* Waymo Connection */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111] border border-[#007BFF]/20 rounded-2xl p-8 md:p-12 glow-blue">
            <div className="flex items-start gap-4 mb-4">
              <Briefcase size={24} className="text-[#007BFF] shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-2">The Waymo Connection</h2>
                <p className="text-[#888] leading-relaxed">
                  Our CEO Jean Italien brings direct experience from Waymo/Alphabet (Google),
                  where he worked on the infrastructure that powers autonomous vehicles at
                  scale. The same principles apply here: reliability at massive scale,
                  AI-first architecture, real-time decision making, and zero-tolerance
                  for downtime.
                </p>
                <p className="text-[#888] leading-relaxed mt-3">
                  From autonomous vehicle infrastructure to autonomous community
                  infrastructure - the engineering discipline is the same. The Multiverse
                  Sanctuary is built on the same foundation of reliability, scale, and
                  AI-first design that powers self-driving cars.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

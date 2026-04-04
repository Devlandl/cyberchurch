"use client";
import { FounderCard } from "@/components/founder-card";
import { PartnerCard } from "@/components/partner-card";
import { useState } from "react";
import {
  Rocket, Cloud, Send, CheckCircle,
} from "lucide-react";

export default function AboutPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      // silent fail
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient-blue">CCONCHAIN</span>
          </h1>
          <a href="https://cyberchurchonchain.org" target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-[#4A5568] hover:text-[#007BFF] transition-colors mb-3">CyberChurch Onchain, Inc.</a>
          <p className="text-lg text-[#888] max-w-2xl">
            Building the infrastructure layer for digital community sovereignty.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-8 md:p-12">
            <Rocket size={32} className="text-[#007BFF] mb-4" />
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-[#888] leading-relaxed mb-4">
              CCONCHAIN exists at the intersection of faith, technology, and
              community. We believe that digital communities deserve the same permanence
              and sovereignty as physical ones.
            </p>
            <p className="text-[#888] leading-relaxed mb-4">
              When the Multiverse - a VR platform home to over 550,000 users - faced
              shutdown, we stepped in as the Technical Sponsor and Platform Operator. Our
              mission is to provide a 38-month Infrastructure Sanctuary, ensuring community
              continuity through the Google Cloud AI-First grant.
            </p>
            <p className="text-[#888] leading-relaxed">
              Using enterprise-grade Google Cloud infrastructure, NVIDIA GPU compute, and
              Gemini AI, we&apos;re building the bridge from legacy infrastructure to a
              sovereign, AI-powered future where communities own their digital homes.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Leadership</h2>
          <FounderCard
            name="Jean Italien"
            role="CEO & Protocol Researcher"
            background="Former L2 Operator, Waymo/Alphabet (Google) - Mountain View, CA"
            education="Colorado Christian University"
            bio="Jean brings direct experience from the heart of Google's most ambitious infrastructure projects. At Waymo, he worked alongside the systems that power autonomous vehicles at scale - the same principles of reliability, real-time AI, and zero-downtime architecture that now power the Multiverse Sanctuary. His unique combination of protocol research, AI infrastructure expertise, and faith-driven mission makes CCONCHAIN a truly distinctive enterprise."
            linkedin="https://www.linkedin.com/in/jean-italien-0270b368"
          />
        </div>
      </section>

      {/* Partners */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Strategic Partners</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <PartnerCard
              name="Future Tech Labs (FTL)"
              role="Platform Creators & Visionary Partners"
              description="The technology company behind the Multiverse platform. FTL brings deep expertise in spatial computing, VR environments, and community-scale digital worlds. As CCONCHAIN&apos;s primary technology partner, FTL provides the platform foundation that we scale and operate."
            />
            <PartnerCard
              name="San Shepherd"
              role="Multiverse Creator & Community Steward"
              description="The visionary creator of the Multiverse. San Shepherd built a digital world that became home to over 550,000 users across 100+ countries. His vision and community relationships are the foundation upon which the Sanctuary is built."
            />
          </div>
        </div>
      </section>

      {/* Google Cloud */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111] border border-[#007BFF]/20 rounded-xl p-8 flex items-start gap-4 glow-blue">
            <Cloud size={28} className="text-[#007BFF] shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-bold mb-2">Google Cloud for Startups Program</h2>
              <p className="text-sm text-[#888] leading-relaxed">
                CCONCHAIN is a participant in the Google Cloud for Startups program,
                providing access to enterprise-tier infrastructure, AI-First credits, and
                technical support for scaling the Multiverse Sanctuary platform.
              </p>
              <p className="text-xs text-[#555] mt-3 font-mono">Case #00256566</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-[#111]/50">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">Get in Touch</h2>
          <p className="text-sm text-[#888] text-center mb-8">
            For partnership inquiries, press, and enterprise discussions.
          </p>

          {sent ? (
            <div className="bg-[#111] border border-[#00C853]/30 rounded-xl p-8 text-center">
              <CheckCircle size={32} className="text-[#00C853] mx-auto mb-3" />
              <p className="font-bold">Message Sent</p>
              <p className="text-sm text-[#888] mt-1">We&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg text-sm focus:border-[#007BFF] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg text-sm focus:border-[#007BFF] focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg text-sm focus:border-[#007BFF] focus:outline-none resize-none"
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#007BFF] text-white font-semibold rounded-lg hover:bg-[#0056b3] transition disabled:opacity-50"
              >
                <Send size={16} /> {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

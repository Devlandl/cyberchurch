import { Briefcase, GraduationCap } from "lucide-react";

interface FounderCardProps {
  name: string;
  role: string;
  background: string;
  education: string;
  bio: string;
}

export function FounderCard({ name, role, background, education, bio }: FounderCardProps) {
  return (
    <div className="bg-[#111] border border-[#1a1a1a] rounded-xl p-8 hover:border-[#007BFF]/30 transition">
      {/* Avatar placeholder */}
      <div className="w-20 h-20 bg-gradient-to-br from-[#007BFF] to-[#00D4FF] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
        <span className="text-2xl font-bold text-white">
          {name.split(" ").map((n) => n[0]).join("")}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-[#007BFF] text-sm font-semibold mb-4">{role}</p>
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-[#888]">
          <Briefcase size={14} className="text-[#007BFF]" />
          {background}
        </div>
        <div className="flex items-center gap-2 text-sm text-[#888]">
          <GraduationCap size={14} className="text-[#007BFF]" />
          {education}
        </div>
      </div>
      <p className="text-sm text-[#888] leading-relaxed">{bio}</p>
    </div>
  );
}

import { Building2 } from "lucide-react";

interface PartnerCardProps {
  name: string;
  role: string;
  description: string;
}

export function PartnerCard({ name, role, description }: PartnerCardProps) {
  return (
    <div className="bg-[#111] border border-[#1a1a1a] rounded-xl p-6 hover:border-[#007BFF]/30 transition">
      <div className="w-12 h-12 bg-[#007BFF]/10 rounded-xl flex items-center justify-center mb-4">
        <Building2 size={24} className="text-[#007BFF]" />
      </div>
      <h3 className="font-bold text-lg mb-1">{name}</h3>
      <p className="text-sm text-[#007BFF] mb-3">{role}</p>
      <p className="text-sm text-[#888]">{description}</p>
    </div>
  );
}

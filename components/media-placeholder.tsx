import { Monitor } from "lucide-react";

interface MediaPlaceholderProps {
  aspect?: "video" | "square";
  label?: string;
}

export function MediaPlaceholder({ aspect = "video", label = "Platform Preview" }: MediaPlaceholderProps) {
  return (
    <div
      className={`relative bg-[#111] border border-[#1a1a1a] rounded-xl overflow-hidden flex items-center justify-center ${
        aspect === "video" ? "aspect-video" : "aspect-square"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/5 to-[#00D4FF]/5" />
      <div className="text-center z-10">
        <Monitor size={48} className="text-[#2A2A2A] mx-auto mb-3" />
        <p className="text-sm text-[#555]">{label}</p>
      </div>
    </div>
  );
}

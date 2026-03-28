interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="bg-[#111] border border-[#1a1a1a] rounded-xl p-6 text-center hover:border-[#007BFF]/30 transition">
      {icon && <div className="flex justify-center mb-3">{icon}</div>}
      <div className="text-3xl md:text-4xl font-bold text-gradient-blue mb-1">{value}</div>
      <div className="text-sm text-[#888]">{label}</div>
    </div>
  );
}

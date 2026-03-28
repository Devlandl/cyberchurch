interface TimelinePhase {
  phase: string;
  title: string;
  description: string;
  details?: string[];
  icon: React.ReactNode;
}

interface TimelineProps {
  phases: TimelinePhase[];
  compact?: boolean;
}

export function Timeline({ phases, compact = false }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#007BFF] via-[#00D4FF] to-[#007BFF]/20" />

      <div className="space-y-8">
        {phases.map((phase, i) => (
          <div key={i} className="relative pl-16">
            {/* Dot */}
            <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-[#007BFF] border-4 border-[#0A0A0A] glow-blue" />

            <div className="bg-[#111] border border-[#1a1a1a] rounded-xl p-6 hover:border-[#007BFF]/30 transition">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-[#007BFF]">{phase.icon}</div>
                <span className="text-xs font-mono text-[#007BFF] uppercase tracking-wider">{phase.phase}</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{phase.title}</h3>
              <p className="text-sm text-[#888] mb-3">{phase.description}</p>
              {!compact && phase.details && (
                <ul className="space-y-1">
                  {phase.details.map((d, j) => (
                    <li key={j} className="text-xs text-[#666] flex items-start gap-2">
                      <span className="text-[#007BFF] mt-0.5">-</span> {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

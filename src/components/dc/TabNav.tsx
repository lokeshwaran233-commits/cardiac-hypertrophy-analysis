import { motion } from "framer-motion";

export type TabKey = "blueprint" | "experiment" | "evidence" | "mechanism" | "verdict";

const tabs: { key: TabKey; label: string; sub: string }[] = [
  { key: "blueprint", label: "The Blueprint", sub: "01" },
  { key: "experiment", label: "The Experiment", sub: "02" },
  { key: "evidence", label: "The Evidence", sub: "03" },
  { key: "mechanism", label: "The Mechanism", sub: "04" },
  { key: "verdict", label: "The Verdict", sub: "05" },
];

export function TabNav({ active, onChange }: { active: TabKey; onChange: (k: TabKey) => void }) {
  return (
    <nav className="sticky top-[57px] z-30 border-b border-[#1E3A5F]/70 bg-[#0D1B2A]/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6">
        <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
          {tabs.map((t) => {
            const isActive = t.key === active;
            return (
              <button
                key={t.key}
                onClick={() => onChange(t.key)}
                className={`relative shrink-0 rounded-md px-3 py-2 text-left text-sm transition ${
                  isActive ? "text-[#00D4FF]" : "text-[#94A3B8] hover:text-[#E2E8F0]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="dc-mono text-[10px] text-[#1E3A5F]">{t.sub}</span>
                  <span className="font-medium">{t.label}</span>
                </div>
                {isActive && (
                  <motion.div
                    layoutId="dc-tab-underline"
                    className="absolute inset-x-2 -bottom-2 h-[2px] bg-[#00D4FF]"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
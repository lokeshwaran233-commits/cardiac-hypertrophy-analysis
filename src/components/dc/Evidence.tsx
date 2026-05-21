import { useState } from "react";
import { MTTChart } from "./MTTChart";
import { MorphologyComparator } from "./MorphologyComparator";
import { PCRDashboard } from "./PCRDashboard";

type Sub = "safety" | "morph" | "molecular";

const subs: { key: Sub; label: string }[] = [
  { key: "safety", label: "A · Safety profile" },
  { key: "morph", label: "B · Morphological rescue" },
  { key: "molecular", label: "C · Molecular dashboard" },
];

export function Evidence() {
  const [sub, setSub] = useState<Sub>("safety");
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="text-xs uppercase tracking-[0.18em] text-[#00D4FF]">Phase 03</div>
      <h2 className="mt-1 text-3xl font-semibold text-[#E2E8F0]">The Evidence</h2>
      <p className="mt-2 max-w-2xl text-sm text-[#94A3B8]">
        Three interactive dashboards — one per assay class. Every value reflects a real measurement.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {subs.map((s) => (
          <button
            key={s.key}
            onClick={() => setSub(s.key)}
            className={`rounded-full px-3 py-1.5 text-xs transition ${
              sub === s.key
                ? "bg-[#00D4FF] text-[#0D1B2A]"
                : "border border-[#1E3A5F] text-[#94A3B8] hover:text-[#00D4FF]"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {sub === "safety" && <MTTChart />}
        {sub === "morph" && <MorphologyComparator />}
        {sub === "molecular" && <PCRDashboard />}
      </div>
    </section>
  );
}
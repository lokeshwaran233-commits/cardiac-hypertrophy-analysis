import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { verdictData } from "@/data/verdictData";
import { buildReadme } from "@/lib/readmeTemplate";
import { downloadBlob } from "@/lib/dc-utils";

const levelStyles = {
  bad: { bg: "#FF2D87", emoji: "🔴" },
  moderate: { bg: "#F59E0B", emoji: "🟡" },
  good: { bg: "#22C55E", emoji: "🟢" },
} as const;

export function VerdictPanel() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="text-xs uppercase tracking-[0.18em] text-[#00D4FF]">Phase 05</div>
      <h2 className="mt-1 text-3xl font-semibold text-[#E2E8F0]">The Verdict</h2>
      <p className="mt-2 max-w-2xl text-sm text-[#94A3B8]">
        How Diosgenin compares to Valsartan across every measured axis, and what it means.
      </p>

      {/* Comparison table */}
      <div className="dc-glass mt-6 overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-[#1E3A5F] text-left text-xs uppercase tracking-wider text-[#94A3B8]">
              <th className="px-4 py-3">Metric</th>
              <th className="px-4 py-3">T3 effect</th>
              <th className="px-4 py-3">Valsartan</th>
              <th className="px-4 py-3">Diosgenin</th>
            </tr>
          </thead>
          <tbody>
            {verdictData.map((row) => (
              <tr key={row.metric} className="border-b border-[#1E3A5F]/50 last:border-0">
                <td className="px-4 py-3 font-medium text-[#E2E8F0]">{row.metric}</td>
                {[row.t3, row.valsartan, row.diosgenin].map((c, i) => {
                  const s = levelStyles[c.level];
                  return (
                    <td key={i} className="px-4 py-3">
                      <span
                        className="inline-flex items-center gap-2 rounded-md border px-2.5 py-1 text-xs"
                        style={{ borderColor: `${s.bg}55`, background: `${s.bg}12`, color: "#E2E8F0" }}
                      >
                        <span>{s.emoji}</span>
                        {c.text}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Conclusion cards */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          { color: "#00D4FF", title: "Safe & potent", body: "Favorable cytotoxicity profile. Operates safely at the 10 µM optimal dose with preserved mitochondrial viability." },
          { color: "#FF2D87", title: "Architectural rescue", body: "64% surface area reduction vs. T3 control. Superior nuclear volume restoration vs. Valsartan benchmark." },
          { color: "#F59E0B", title: "Molecular reset", body: "Silences the fetal gene program (α-SK, β-MHC, ANP, c-Jun). Regulates pathological reprogramming at its transcriptional root." },
        ].map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border-2 bg-[#0D1B2A]/60 p-5"
            style={{ borderColor: `${c.color}66` }}
          >
            <div className="text-xs uppercase tracking-wider" style={{ color: c.color }}>{c.title}</div>
            <p className="mt-3 text-sm leading-relaxed text-[#E2E8F0]">{c.body}</p>
          </motion.div>
        ))}
      </div>

      {/* Statement */}
      <div className="mt-10 mx-auto max-w-3xl text-center">
        <p className="text-xl font-semibold leading-snug text-[#E2E8F0] md:text-2xl">
          “Diosgenin represents a powerful, pleiotropic candidate for arresting the cellular blueprints of
          heart failure — matching the efficacy of a dedicated RAAS blocker through broader, multi-target
          antioxidant and MAPK interception mechanisms.”
        </p>
      </div>

      {/* Export + reflection */}
      <div className="mt-10 grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <div className="dc-glass flex flex-col items-start gap-3 p-5">
          <div className="text-xs uppercase tracking-wider text-[#00D4FF]">Repository artifact</div>
          <div className="text-base font-semibold text-[#E2E8F0]">Export the README.md</div>
          <p className="text-sm text-[#94A3B8]">
            One-click download of the full project README with badges, data tables, mechanism summary,
            and academic context — ready to drop into the GitHub repo.
          </p>
          <button
            onClick={() => downloadBlob(buildReadme(), "README.md", "text/markdown")}
            className="inline-flex items-center gap-2 rounded-md bg-[#00D4FF] px-4 py-2 text-sm font-medium text-[#0D1B2A] hover:bg-[#00D4FF]/90"
          >
            <Download className="h-4 w-4" /> Export README.md
          </button>
        </div>

        <div className="dc-glass p-5">
          <div className="text-xs uppercase tracking-wider text-[#FF2D87]">What I learned</div>
          <ul className="mt-3 space-y-3 text-sm text-[#E2E8F0]">
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D4FF]" />
              Designed multi-arm pharmacological studies with appropriate positive controls.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D4FF]" />
              Mastered RT-PCR protocol design and statistical interpretation of fold-change data.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D4FF]" />
              Built competency correlating molecular-level gene expression changes to morphological
              phenotypes — a core skill in translational research.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
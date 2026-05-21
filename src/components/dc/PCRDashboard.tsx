import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  ReferenceLine, Legend,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import { pcrData, groupColors } from "@/data/pcrData";
import { CSVButton } from "./CSVButton";
import { InfoTooltip } from "./InfoTooltip";
import { LabImage } from "./LabImage";

export function PCRDashboard() {
  const [selected, setSelected] = useState<string>(pcrData[0].gene);
  const active = pcrData.find((p) => p.gene === selected)!;

  const csvRows = pcrData.map((p) => ({
    gene: p.gene, full_name: p.full,
    Control: p.Control, T3: p.T3, "T3+Diosgenin": p.Diosgenin, "T3+Valsartan": p.Valsartan,
  }));

  return (
    <div className="dc-glass p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-[#E2E8F0]">Molecular dashboard — RT-PCR</h3>
            <InfoTooltip>
              Semi-quantitative RT-PCR. Fold change expressed relative to untreated control (set to 1.0).
              Normalized to β-actin (206 bp) housekeeping gene. Amplicon sizes: α-sk 207 bp, β-MHC 202 bp,
              ANP 312 bp, c-Jun 255 bp. Click a gene cluster to read its biological role.
            </InfoTooltip>
          </div>
          <p className="mt-1 text-xs text-[#94A3B8]">
            Four-gene fetal program panel across all treatment arms. Dashed line = control baseline.
          </p>
        </div>
        <CSVButton rows={csvRows} filename="rtpcr_fold_change.csv" />
      </div>

      <div className="mt-5 rounded-lg border border-[#1E3A5F] bg-[#0D1B2A]/40 p-4">
        <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-wider text-[#00D4FF]">
          <span>🧫</span> Gel Evidence
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <LabImage
            src="/rtpcr_combined.jpg"
            alt="RT-PCR agarose gel and densitometric quantification"
            badge="ORIGINAL LAB DATA"
            caption="Figure 1.3 — RT-PCR gel electrophoresis (Panel A) and densitometric quantification (Panel B). Each value expressed as mean ± SD (n=3). * p<0.01 Control vs T3; ** p<0.001 T3 vs Diosgenin/Valsartan."
          />
          <div className="text-xs leading-relaxed text-[#94A3B8]">
            <p>
              Panel A shows agarose gel bands for the five amplicons; band intensity for each fetal-program
              gene rises sharply under T3 and collapses back toward baseline with Diosgenin or Valsartan
              co-treatment.
            </p>
            <p className="mt-3">
              Panel B is the densitometric quantification — the interactive chart below is the digital
              reconstruction of that quantification across all four treatment arms.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <div className="h-[380px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={pcrData}
              margin={{ top: 20, right: 16, left: 0, bottom: 8 }}
              onClick={(e) => {
                const g = (e?.activePayload?.[0]?.payload as { gene?: string } | undefined)?.gene;
                if (g) setSelected(g);
              }}
            >
              <CartesianGrid stroke="#1E3A5F" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="gene" stroke="#94A3B8" fontSize={12} tickLine={false} />
              <YAxis stroke="#94A3B8" fontSize={11} domain={[0, 8]} tickLine={false}
                label={{ value: "Relative expression (fold change)", angle: -90, position: "insideLeft", fill: "#94A3B8", fontSize: 11 }}
              />
              <ReferenceLine y={1} stroke="#94A3B8" strokeDasharray="4 4"
                label={{ value: "Baseline", position: "right", fill: "#94A3B8", fontSize: 10 }}
              />
              <Tooltip
                cursor={{ fill: "rgba(0,212,255,0.06)" }}
                contentStyle={{ background: "#0D1B2A", border: "1px solid #1E3A5F", borderRadius: 8, color: "#E2E8F0", fontSize: 12 }}
              />
              <Legend wrapperStyle={{ fontSize: 11, color: "#94A3B8" }} />
              <Bar dataKey="Control" fill={groupColors.Control} radius={[4,4,0,0]} />
              <Bar dataKey="T3" fill={groupColors.T3} radius={[4,4,0,0]} />
              <Bar dataKey="Diosgenin" name="T3 + Diosgenin" fill={groupColors.Diosgenin} radius={[4,4,0,0]} />
              <Bar dataKey="Valsartan" name="T3 + Valsartan" fill={groupColors.Valsartan} radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.gene}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg border border-[#1E3A5F] bg-[#0D1B2A]/60 p-4"
          >
            <div className="text-xs uppercase tracking-wider text-[#00D4FF]">{active.gene}</div>
            <div className="mt-1 text-base font-semibold text-[#E2E8F0]">{active.full}</div>
            <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">{active.insight}</p>

            <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs">
              {[
                { label: "Control", v: active.Control, c: groupColors.Control },
                { label: "T3", v: active.T3, c: groupColors.T3 },
                { label: "DG", v: active.Diosgenin, c: groupColors.Diosgenin },
                { label: "Val", v: active.Valsartan, c: groupColors.Valsartan },
              ].map((row) => (
                <div key={row.label} className="rounded-md border border-[#1E3A5F] p-2">
                  <div className="text-[10px] uppercase tracking-wider" style={{ color: row.c }}>{row.label}</div>
                  <div className="mt-1 dc-mono text-sm text-[#E2E8F0]">{row.v.toFixed(1)}×</div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {pcrData.map((g) => (
                <button
                  key={g.gene}
                  onClick={() => setSelected(g.gene)}
                  className={`rounded-full px-2.5 py-1 text-xs transition ${
                    g.gene === active.gene
                      ? "bg-[#00D4FF] text-[#0D1B2A]"
                      : "border border-[#1E3A5F] text-[#94A3B8] hover:text-[#00D4FF]"
                  }`}
                >
                  {g.gene}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
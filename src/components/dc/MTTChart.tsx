import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  ReferenceArea, ReferenceLine, Cell, LabelList,
} from "recharts";
import { mttData } from "@/data/mttData";
import { CSVButton } from "./CSVButton";
import { InfoTooltip } from "./InfoTooltip";
import { LabImage } from "./LabImage";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Camera } from "lucide-react";

const zoneColor = { safe: "#22C55E", warn: "#F59E0B", danger: "#FF2D87" } as const;

export function MTTChart() {
  const [showRaw, setShowRaw] = useState(false);
  const csvRows = mttData.map((d) => ({
    concentration_uM: d.conc,
    viability_pct: d.viability,
    significance: d.significance,
  }));
  return (
    <div className="dc-glass p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-[#E2E8F0]">Safety profile — MTT cytotoxicity</h3>
            <InfoTooltip>
              MTT assay measures mitochondrial succinate dehydrogenase activity as a proxy for cell viability.
              Formazan crystal absorbance read at 570 nm via spectrophotometry. % viability normalized to untreated control.
            </InfoTooltip>
          </div>
          <p className="mt-1 text-xs text-[#94A3B8]">
            Diosgenin dose response in H9c2 cells (24h treatment). NS = not significant, * p&lt;0.05, ** p&lt;0.01.
          </p>
        </div>
        <CSVButton rows={csvRows} filename="mtt_diosgenin_dose_response.csv" />
      </div>

      <div className="mt-5 h-[360px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={mttData} margin={{ top: 30, right: 20, left: 0, bottom: 10 }}>
            <CartesianGrid stroke="#1E3A5F" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="label" stroke="#94A3B8" fontSize={11} tickLine={false} />
            <YAxis stroke="#94A3B8" fontSize={11} domain={[0, 120]} tickLine={false}
              label={{ value: "Cell viability (%)", angle: -90, position: "insideLeft", fill: "#94A3B8", fontSize: 11 }}
            />
            <ReferenceArea x1="Control" x2="10 µM" y1={0} y2={120} fill="#22C55E" fillOpacity={0.06} />
            <ReferenceLine x="10 µM" stroke="#00D4FF" strokeDasharray="4 4"
              label={{ value: "Optimal therapeutic window", position: "top", fill: "#00D4FF", fontSize: 11 }}
            />
            <Tooltip
              cursor={{ fill: "rgba(0,212,255,0.06)" }}
              contentStyle={{ background: "#0D1B2A", border: "1px solid #1E3A5F", borderRadius: 8, color: "#E2E8F0", fontSize: 12 }}
              formatter={(value: number, _n, p: { payload?: { significance?: string } }) => [
                `${value}% (${p.payload?.significance})`, "Viability",
              ]}
            />
            <Bar dataKey="viability" radius={[6, 6, 0, 0]} isAnimationActive>
              <LabelList dataKey="significance" position="top" fill="#E2E8F0" fontSize={11} />
              {mttData.map((d, i) => (
                <Cell key={i} fill={zoneColor[d.zone]} fillOpacity={d.label === "10 µM" ? 1 : 0.85} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-[#94A3B8]">
        <Legend swatch="#22C55E" label="Safe zone (0–10 µM)" />
        <Legend swatch="#F59E0B" label="Warning (20 µM)" />
        <Legend swatch="#FF2D87" label="Cytotoxic (40 µM)" />
      </div>

      <div className="mt-5 border-t border-[#1E3A5F] pt-4">
        <button
          type="button"
          onClick={() => setShowRaw((v) => !v)}
          className="inline-flex items-center gap-2 text-xs font-medium text-[#00D4FF] hover:text-[#00D4FF]/80"
        >
          <Camera className="h-3.5 w-3.5" />
          Raw Lab Output
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform ${showRaw ? "rotate-180" : ""}`}
          />
        </button>
        <AnimatePresence initial={false}>
          {showRaw && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 max-w-3xl">
                <LabImage
                  src="/mtt_chart.jpg"
                  alt="MTT assay bar chart"
                  badge="ORIGINAL LAB DATA"
                  caption="Figure 1.1 — Dose-dependent cytotoxicity of Diosgenin in H9c2 cells. Mean ± SD (n=6). NS, no significance; *, p<0.05; **, p<0.01; ***, p<0.001."
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Legend({ swatch, label }: { swatch: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="h-2.5 w-2.5 rounded-sm" style={{ background: swatch }} />
      {label}
    </span>
  );
}
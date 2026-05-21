import { motion } from "framer-motion";
import { morphologyData } from "@/data/morphologyData";
import { CSVButton } from "./CSVButton";
import { InfoTooltip } from "./InfoTooltip";
import { LabImage } from "./LabImage";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Camera, ChevronDown } from "lucide-react";

export function MorphologyComparator() {
  const [showMicro, setShowMicro] = useState(false);
  const maxArea = Math.max(...morphologyData.map((m) => m.area));
  const t3Area = morphologyData.find((m) => m.role === "patho")!.area;
  const control = morphologyData.find((m) => m.role === "control")!.area;

  const csvRows = morphologyData.map((m) => ({
    group: m.group, width_um: m.width, area_um2: m.area,
  }));

  return (
    <div className="dc-glass p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-[#E2E8F0]">Morphological rescue</h3>
            <InfoTooltip>
              Phase contrast microscopy (20×) with Giemsa nuclear staining. Width and surface area
              measured per cell; mean values reported. Circles below are visually scaled to surface area.
            </InfoTooltip>
          </div>
          <p className="mt-1 text-xs text-[#94A3B8]">
            Cell footprint by treatment arm. Circle radius ∝ √(surface area).
          </p>
        </div>
        <CSVButton rows={csvRows} filename="morphometry_h9c2.csv" />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {morphologyData.map((m, i) => {
          const ratio = Math.sqrt(m.area / maxArea);
          const size = Math.round(40 + ratio * 130); // 40–170 px
          const vsControl = ((m.area - control) / control) * 100;
          const vsT3 = ((t3Area - m.area) / t3Area) * 100;
          const tooltip =
            m.role === "control"
              ? "Baseline cellular footprint."
              : m.role === "patho"
              ? `${vsControl.toFixed(0)}% increase vs. control`
              : `${vsT3.toFixed(0)}% rescue vs. T3`;
          return (
            <div key={m.group} className="flex flex-col items-center text-center">
              <div className="relative flex h-44 w-full items-end justify-center">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.15, type: "spring", stiffness: 110, damping: 14 }}
                  className={`rounded-full border-2 ${m.role === "patho" ? "dc-pulse-red" : ""}`}
                  style={{
                    width: size, height: size,
                    borderColor: m.color,
                    background: `radial-gradient(circle at 35% 30%, ${m.color}55, ${m.color}10 60%, transparent 70%)`,
                  }}
                  title={tooltip}
                />
              </div>
              <div className="mt-2 text-xs font-semibold" style={{ color: m.color }}>{m.short}</div>
              <div className="mt-1 text-[11px] text-[#94A3B8]">{m.group}</div>
              <div className="mt-2 dc-mono text-xs text-[#E2E8F0]">
                {m.width} µm · {m.area} µm²
              </div>
              <div className="mt-1 text-[11px] text-[#94A3B8]">{tooltip}</div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 border-t border-[#1E3A5F] pt-4">
        <button
          type="button"
          onClick={() => setShowMicro((v) => !v)}
          className="inline-flex items-center gap-2 text-xs font-medium text-[#00D4FF] hover:text-[#00D4FF]/80"
        >
          <Camera className="h-3.5 w-3.5" />
          {showMicro ? "Hide" : "View"} Microscopy Images
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform ${showMicro ? "rotate-180" : ""}`}
          />
        </button>
        <AnimatePresence initial={false}>
          {showMicro && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 grid gap-5 md:grid-cols-2">
                <div>
                  <TreatmentLabels />
                  <LabImage
                    src="/phase_contrast.jpg"
                    alt="Phase contrast microscopy of H9c2 cells across treatment groups"
                    badge="PHASE CONTRAST"
                    badgeColor="#00D4FF"
                    caption="Figure 1.2(A) — Phase contrast microscopy (20X, Inverted LABOMED). Arrows indicate cellular morphology across the four treatment arms."
                  />
                </div>
                <div>
                  <TreatmentLabels />
                  <LabImage
                    src="/giemsa_staining.jpg"
                    alt="Giemsa-stained H9c2 cells across treatment groups"
                    badge="GIEMSA STAINING"
                    badgeColor="#FF2D87"
                    caption="Figure 1.2(B) — Giemsa staining (40X). Arrows indicate nuclear enlargement in T3-treated cells and rescue under Diosgenin and Valsartan."
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const TREATMENT_LABELS: { label: string; color: string }[] = [
  { label: "Control", color: "#22D3EE" },     // cyan-400
  { label: "T3 Treated", color: "#F87171" },  // red-400
  { label: "T3 + DG", color: "#4ADE80" },     // green-400
  { label: "T3 + Val", color: "#FACC15" },    // yellow-400
];

function TreatmentLabels() {
  return (
    <div className="mb-2 grid grid-cols-4 gap-1 rounded-md border border-[#1E3A5F] bg-[#0D1B2A]/60 px-2 py-1.5">
      {TREATMENT_LABELS.map((t) => (
        <div
          key={t.label}
          className="text-center text-xs font-semibold"
          style={{ color: t.color }}
        >
          {t.label}
        </div>
      ))}
    </div>
  );
}
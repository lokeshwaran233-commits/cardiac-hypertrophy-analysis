import { useState } from "react";
import { motion } from "framer-motion";

type Node = {
  id: 1 | 2 | 3;
  x: number; y: number;
  title: string;
  text: string;
};

const intercepts: Node[] = [
  {
    id: 1, x: 180, y: 110,
    title: "Intercept 1 — Oxidative stress",
    text: "Stabilizes mitochondrial metabolism, blocks T3-driven ROS accumulation.",
  },
  {
    id: 2, x: 360, y: 250,
    title: "Intercept 2 — Signaling",
    text: "Dampens MAPK/ERK routes that translate T3 stress into nuclear commands.",
  },
  {
    id: 3, x: 360, y: 400,
    title: "Intercept 3 — Transcriptional",
    text: "Blocks activation of c-Jun and NFAT/GATA4 fetal gene programs.",
  },
];

export function MechanismPathway() {
  const [open, setOpen] = useState<number | null>(1);
  const active = intercepts.find((i) => i.id === open) ?? null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="text-xs uppercase tracking-[0.18em] text-[#00D4FF]">Phase 04</div>
      <h2 className="mt-1 text-3xl font-semibold text-[#E2E8F0]">The Mechanism</h2>
      <p className="mt-2 max-w-2xl text-sm text-[#94A3B8]">
        Diosgenin intercepts pathological remodeling at three points along the T3-driven cascade.
        Click each ✕ node to read the intervention.
      </p>

      <div className="mt-6 grid gap-5 lg:grid-cols-[2fr_1fr]">
        <div className="dc-glass overflow-hidden p-3">
          <svg viewBox="0 0 700 500" className="h-[460px] w-full">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M0 0 L10 5 L0 10 z" fill="#FF2D87" />
              </marker>
              <radialGradient id="mito" cx="50%" cy="50%" r="50%">
                <stop offset="0" stopColor="#F59E0B" stopOpacity="0.9" />
                <stop offset="1" stopColor="#F59E0B" stopOpacity="0.2" />
              </radialGradient>
              <linearGradient id="mapk" x1="0" x2="1">
                <stop offset="0" stopColor="#3B82F6" />
                <stop offset="1" stopColor="#1E3A5F" />
              </linearGradient>
            </defs>

            {/* T3 input */}
            <g>
              <rect x="60" y="40" width="120" height="40" rx="8" fill="#FF2D87" fillOpacity="0.18" stroke="#FF2D87" />
              <text x="120" y="65" textAnchor="middle" fill="#FF2D87" fontSize="13" fontWeight="600">T3 (10 nM)</text>
            </g>

            {/* Mitochondria */}
            <g>
              <ellipse cx="180" cy="160" rx="80" ry="38" fill="url(#mito)" stroke="#F59E0B" />
              <text x="180" y="158" textAnchor="middle" fill="#0D1B2A" fontSize="12" fontWeight="700">Mitochondria</text>
              <text x="180" y="174" textAnchor="middle" fill="#0D1B2A" fontSize="10">ROS generation site</text>
            </g>

            {/* MAPK */}
            <g>
              <rect x="270" y="270" width="190" height="56" rx="10" fill="url(#mapk)" stroke="#3B82F6" />
              <text x="365" y="295" textAnchor="middle" fill="#E2E8F0" fontSize="12" fontWeight="700">ERK → MAPK signaling</text>
              <text x="365" y="312" textAnchor="middle" fill="#94A3B8" fontSize="10">stress → nuclear command</text>
            </g>

            {/* Nucleus */}
            <g>
              <ellipse cx="365" cy="420" rx="150" ry="50" fill="#0D1B2A" stroke="#00D4FF" strokeOpacity="0.5" />
              <text x="365" y="418" textAnchor="middle" fill="#E2E8F0" fontSize="12" fontWeight="700">Nuclear envelope</text>
              <text x="365" y="434" textAnchor="middle" fill="#94A3B8" fontSize="10">NFAT / GATA4 / c-Jun → fetal gene program</text>
            </g>

            {/* Pathological arrows */}
            <motion.path d="M120 80 C 140 110, 160 120, 180 122"
              stroke="#FF2D87" strokeWidth="2" fill="none" markerEnd="url(#arrow)"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }} />
            <motion.path d="M220 195 C 260 240, 290 260, 320 270"
              stroke="#FF2D87" strokeWidth="2" fill="none" markerEnd="url(#arrow)"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.3 }} />
            <motion.path d="M365 326 C 365 360, 365 380, 365 388"
              stroke="#FF2D87" strokeWidth="2" fill="none" markerEnd="url(#arrow)"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.6 }} />

            {/* Intercept nodes */}
            {intercepts.map((n) => (
              <g key={n.id} style={{ cursor: "pointer" }} onClick={() => setOpen(n.id)}>
                <motion.circle
                  cx={n.x} cy={n.y} r={18}
                  fill={open === n.id ? "#00D4FF" : "#0D1B2A"}
                  stroke="#FF2D87" strokeWidth="2"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
                <text x={n.x} y={n.y + 4} textAnchor="middle"
                  fill={open === n.id ? "#0D1B2A" : "#FF2D87"} fontSize="14" fontWeight="700">✕</text>
                <text x={n.x + 26} y={n.y + 4} fill="#E2E8F0" fontSize="11" fontWeight="600">Intercept {n.id}</text>
              </g>
            ))}
          </svg>
        </div>

        <div className="dc-glass p-5">
          {active ? (
            <motion.div key={active.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-xs uppercase tracking-wider text-[#00D4FF]">Mechanism focus</div>
              <div className="mt-1 text-base font-semibold text-[#E2E8F0]">{active.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">{active.text}</p>
            </motion.div>
          ) : (
            <div className="text-sm text-[#94A3B8]">Click any ✕ on the pathway to learn how Diosgenin blocks it.</div>
          )}

          <div className="mt-5 space-y-2">
            {intercepts.map((n) => (
              <button
                key={n.id}
                onClick={() => setOpen(n.id)}
                className={`w-full rounded-md border px-3 py-2 text-left text-xs transition ${
                  open === n.id ? "border-[#00D4FF] bg-[#00D4FF]/10 text-[#E2E8F0]" : "border-[#1E3A5F] text-[#94A3B8] hover:border-[#00D4FF]/50"
                }`}
              >
                <span className="dc-mono mr-2 text-[#FF2D87]">0{n.id}</span>{n.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
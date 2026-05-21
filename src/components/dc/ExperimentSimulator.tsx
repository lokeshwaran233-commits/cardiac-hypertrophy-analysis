import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FlaskConical, Microscope, Dna, CheckCircle2, Play, Pause } from "lucide-react";
import type { TabKey } from "./TabNav";

const phases = [
  { title: "Seeding & Induction", caption: "H9c2 myoblasts (rat cardiomyoblasts) cultured and treated with T3 (10 nM) for 24h." },
  { title: "Treatment Arms", caption: "Four arms run in parallel: Control, T3 alone, T3 + Diosgenin 10 µM, T3 + Valsartan 5 µM." },
  { title: "Validation Battery", caption: "MTT cytotoxicity → Phase contrast + Giemsa morphometry → RT-PCR transcriptional profiling." },
  { title: "Results Unlocked", caption: "Diosgenin = Safe + Morphological Rescue + Molecular Reset." },
];

const arms = [
  { label: "Control", sub: "Untreated", color: "#94A3B8", emoji: "🔵" },
  { label: "Pathological", sub: "T3 (10 nM)", color: "#FF2D87", emoji: "🔴" },
  { label: "Experimental", sub: "T3 + Diosgenin 10 µM", color: "#00D4FF", emoji: "🟢" },
  { label: "Benchmark", sub: "T3 + Valsartan 5 µM", color: "#F59E0B", emoji: "🟡" },
];

export function ExperimentSimulator({ onNavigate }: { onNavigate: (k: TabKey) => void }) {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setStep((s) => (s + 1) % phases.length), 2200);
    return () => clearTimeout(t);
  }, [step, playing]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-[#00D4FF]">Phase 02</div>
          <h2 className="mt-1 text-3xl font-semibold text-[#E2E8F0]">The Experiment</h2>
          <p className="mt-2 max-w-2xl text-sm text-[#94A3B8]">
            A live, four-phase walkthrough of the wet-lab pipeline that produced every number in this app.
          </p>
        </div>
        <button
          onClick={() => setPlaying((p) => !p)}
          className="inline-flex items-center gap-1.5 rounded-md border border-[#1E3A5F] px-3 py-1.5 text-xs text-[#94A3B8] hover:text-[#00D4FF] hover:border-[#00D4FF]/60"
        >
          {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          {playing ? "Pause" : "Play"}
        </button>
      </div>

      {/* Stepper */}
      <div className="mt-8 grid grid-cols-4 gap-2">
        {phases.map((p, i) => (
          <button
            key={p.title}
            onClick={() => { setPlaying(false); setStep(i); }}
            className="text-left"
          >
            <div className="flex items-center gap-2">
              <div
                className={`grid h-7 w-7 place-items-center rounded-full border text-xs dc-mono transition ${
                  i <= step
                    ? "border-[#00D4FF] bg-[#00D4FF]/15 text-[#00D4FF]"
                    : "border-[#1E3A5F] text-[#94A3B8]"
                }`}
              >
                {i + 1}
              </div>
              <div className="flex-1">
                <div className={`h-[2px] rounded ${i <= step ? "bg-[#00D4FF]" : "bg-[#1E3A5F]"}`} />
              </div>
            </div>
            <div className={`mt-2 text-xs font-medium ${i === step ? "text-[#E2E8F0]" : "text-[#94A3B8]"}`}>
              {p.title}
            </div>
          </button>
        ))}
      </div>

      <div className="dc-glass mt-8 min-h-[360px] p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45 }}
          >
            <div className="text-xs uppercase tracking-wider text-[#94A3B8]">Phase {step + 1}</div>
            <h3 className="mt-1 text-xl font-semibold text-[#E2E8F0]">{phases[step].title}</h3>
            <p className="mt-2 max-w-2xl text-sm text-[#94A3B8]">{phases[step].caption}</p>

            <div className="mt-6">
              {step === 0 && <PhaseSeeding />}
              {step === 1 && <PhaseArms />}
              {step === 2 && <PhaseAssays />}
              {step === 3 && <PhaseUnlock onNavigate={onNavigate} />}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function PhaseSeeding() {
  return (
    <div className="grid grid-cols-6 gap-3 sm:grid-cols-10">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 1, opacity: 0 }}
          animate={{ opacity: 1, scale: i % 3 === 0 ? 1.6 : 1 }}
          transition={{ duration: 0.8, delay: (i % 10) * 0.04 }}
          className="h-8 rounded-full"
          style={{
            background:
              i % 3 === 0
                ? "linear-gradient(135deg, rgba(255,45,135,0.6), rgba(255,45,135,0.2))"
                : "linear-gradient(135deg, rgba(0,212,255,0.5), rgba(0,212,255,0.15))",
            border: i % 3 === 0 ? "1px solid #FF2D87" : "1px solid #00D4FF",
          }}
        />
      ))}
    </div>
  );
}

function PhaseArms() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {arms.map((a, i) => (
        <motion.div
          key={a.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.12 }}
          className="rounded-lg border p-4"
          style={{ borderColor: `${a.color}66`, background: `${a.color}10` }}
        >
          <div className="flex items-center gap-2 text-lg">
            <span>{a.emoji}</span>
            <span className="text-sm font-semibold text-[#E2E8F0]">{a.label}</span>
            <span
              className="ml-auto h-2 w-2 rounded-full"
              style={{ background: a.color, boxShadow: `0 0 12px ${a.color}` }}
            />
          </div>
          <div className="mt-2 text-xs text-[#94A3B8]">{a.sub}</div>
        </motion.div>
      ))}
    </div>
  );
}

function PhaseAssays() {
  const items = [
    { icon: FlaskConical, title: "MTT Assay", caption: "Cytotoxicity screen" },
    { icon: Microscope, title: "Phase Contrast + Giemsa", caption: "Morphometric assessment" },
    { icon: Dna, title: "RT-PCR", caption: "Transcriptional profiling" },
  ];
  return (
    <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
      {items.map((it, i) => (
        <div key={it.title} className="flex flex-1 items-center gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.25 }}
            className="flex-1 rounded-lg border border-[#1E3A5F] bg-[#0D1B2A]/60 p-4"
          >
            <it.icon className="h-5 w-5 text-[#00D4FF]" />
            <div className="mt-2 text-sm font-semibold text-[#E2E8F0]">{it.title}</div>
            <div className="text-xs text-[#94A3B8]">{it.caption}</div>
          </motion.div>
          {i < items.length - 1 && (
            <ArrowRight className="hidden h-4 w-4 shrink-0 text-[#1E3A5F] sm:block" />
          )}
        </div>
      ))}
    </div>
  );
}

function PhaseUnlock({ onNavigate }: { onNavigate: (k: TabKey) => void }) {
  return (
    <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="dc-mono text-xs tracking-widest text-[#22C55E]">RESULTS UNLOCKED</div>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          {["Safe", "Morphological Rescue", "Molecular Reset"].map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#22C55E]/40 bg-[#22C55E]/10 px-3 py-1 text-[#22C55E]"
            >
              <CheckCircle2 className="h-3.5 w-3.5" /> {s}
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={() => onNavigate("evidence")}
        className="inline-flex items-center gap-2 rounded-md bg-[#00D4FF] px-4 py-2 text-sm font-medium text-[#0D1B2A] hover:bg-[#00D4FF]/90"
      >
        Explore Results <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
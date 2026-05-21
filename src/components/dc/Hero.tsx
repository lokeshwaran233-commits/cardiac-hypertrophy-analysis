import { motion } from "framer-motion";
import { CountUp } from "./CountUp";
import { ArrowRight, Github } from "lucide-react";
import type { TabKey } from "./TabNav";

export function Hero({ onNavigate }: { onNavigate: (k: TabKey) => void }) {
  return (
    <section className="relative overflow-hidden">
      <div className="dc-grid-bg absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 px-3 py-1 text-xs text-[#00D4FF]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
            Postgraduate Dissertation · University of Madras
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-4xl font-semibold leading-[1.05] text-[#E2E8F0] md:text-6xl"
          >
            Architectural Restoration <br />
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#FF2D87] bg-clip-text text-transparent">
              of the Heart
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-[#94A3B8]"
          >
            Diosgenin's anti-hypertrophic activity in T3-stressed H9c2 cardiac progenitors. A 5-month
            postgraduate investigation evaluating cytotoxic, morphological, and transcriptional dimensions
            of pathological cardiac remodeling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => onNavigate("experiment")}
              className="inline-flex items-center gap-2 rounded-md bg-[#00D4FF] px-4 py-2 text-sm font-medium text-[#0D1B2A] hover:bg-[#00D4FF]/90 transition"
            >
              Walk through the experiment <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="https://github.com/lokeshwaran233-commits"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[#1E3A5F] px-3 py-2 text-xs text-[#E2E8F0] hover:border-[#00D4FF]/60"
            >
              <Github className="h-3.5 w-3.5" />
              View on GitHub
              <span className="ml-1 rounded bg-[#22C55E]/15 px-1.5 py-0.5 text-[10px] text-[#22C55E]">MIT</span>
            </a>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { value: 10, suffix: " µM", label: "Safe Therapeutic Window", accent: "#00D4FF" },
              { value: 64, suffix: "%", label: "Cell Surface Area Reduction", accent: "#FF2D87" },
              { value: 4, suffix: "", label: "Fetal Gene Targets Suppressed", accent: "#F59E0B" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                className="dc-glass p-4"
              >
                <div className="text-3xl font-semibold" style={{ color: s.accent }}>
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-[#94A3B8]">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <AnimatedHeart />
        </div>
      </div>
    </section>
  );
}

function AnimatedHeart() {
  return (
    <motion.div
      className="relative"
      animate={{ scale: [1, 1.04, 0.98, 1] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 -z-10 rounded-full bg-[#FF2D87]/15 blur-3xl" />
      <svg viewBox="0 0 300 300" className="h-72 w-72 md:h-96 md:w-96">
        <defs>
          <linearGradient id="heartLine" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#00D4FF" />
            <stop offset="1" stopColor="#FF2D87" />
          </linearGradient>
          <radialGradient id="heartGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#00D4FF" stopOpacity="0.25" />
            <stop offset="1" stopColor="#00D4FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="150" cy="150" r="120" fill="url(#heartGlow)" />
        {/* concentric wireframe rings */}
        {[110, 90, 70, 50].map((r, i) => (
          <motion.circle
            key={r}
            cx="150" cy="150" r={r}
            fill="none" stroke="url(#heartLine)" strokeOpacity={0.35 - i * 0.06} strokeWidth="0.6"
            animate={{ rotate: 360 }}
            transition={{ duration: 24 + i * 6, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "150px 150px" }}
          />
        ))}
        <motion.path
          d="M150 220 C 70 170, 60 100, 110 80 C 135 70, 150 90, 150 105 C 150 90, 165 70, 190 80 C 240 100, 230 170, 150 220 Z"
          fill="none" stroke="url(#heartLine)" strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        {/* grid mesh */}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h-${i}`} x1="40" x2="260" y1={70 + i * 30} y2={70 + i * 30} stroke="#1E3A5F" strokeOpacity="0.4" strokeWidth="0.4" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`v-${i}`} y1="40" y2="260" x1={70 + i * 30} x2={70 + i * 30} stroke="#1E3A5F" strokeOpacity="0.4" strokeWidth="0.4" />
        ))}
      </svg>
    </motion.div>
  );
}
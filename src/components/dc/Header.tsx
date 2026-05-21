import { useState } from "react";
import { Github, Mail, Linkedin, HelpCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-[#1E3A5F]/70 bg-[#0D1B2A]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-md border border-[#00D4FF]/40 bg-[#00D4FF]/10 text-[#00D4FF] text-base">
            ♥
          </div>
          <div className="leading-tight">
            <div className="text-xs uppercase tracking-[0.18em] text-[#94A3B8]">Research Portfolio</div>
            <div className="text-sm font-semibold text-[#E2E8F0]">Diosgenin · Cardiac Blueprint</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-1.5 rounded-md border border-[#1E3A5F] px-2.5 py-1.5 text-xs text-[#94A3B8] hover:text-[#00D4FF] hover:border-[#00D4FF]/60 transition"
          >
            <HelpCircle className="h-3.5 w-3.5" />
            About
          </button>
          <a
            href="https://github.com/lokeshwaran233-commits"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-[#1E3A5F] px-2.5 py-1.5 text-xs text-[#E2E8F0] hover:text-[#00D4FF] hover:border-[#00D4FF]/60 transition"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              className="dc-glass max-w-lg p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-semibold text-[#E2E8F0]">About this research</h2>
                <button onClick={() => setOpen(false)} className="text-[#94A3B8] hover:text-white">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                I conducted this 5-month project as part of my PG dissertation at the University of Madras,
                personally running MTT assays, Giemsa staining, and RT-PCR. This app visualizes my real data —
                no fabricated numbers. Every chart maps directly to a wet-lab measurement from H9c2 rat
                cardiomyoblast experiments.
              </p>
              <div className="mt-5 grid grid-cols-1 gap-2 text-sm">
                <a className="flex items-center gap-2 text-[#94A3B8] hover:text-[#00D4FF]" href="mailto:lokeshwaran233@gmail.com">
                  <Mail className="h-3.5 w-3.5" /> lokeshwaran233@gmail.com
                </a>
                <a className="flex items-center gap-2 text-[#94A3B8] hover:text-[#00D4FF]" target="_blank" rel="noreferrer" href="https://linkedin.com/in/lokesh-waran-r/">
                  <Linkedin className="h-3.5 w-3.5" /> linkedin.com/in/lokesh-waran-r
                </a>
                <a className="flex items-center gap-2 text-[#94A3B8] hover:text-[#00D4FF]" target="_blank" rel="noreferrer" href="https://github.com/lokeshwaran233-commits">
                  <Github className="h-3.5 w-3.5" /> github.com/lokeshwaran233-commits
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
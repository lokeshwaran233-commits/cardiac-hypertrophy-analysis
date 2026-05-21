import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/dc/Header";
import { TabNav, type TabKey } from "@/components/dc/TabNav";
import { Footer } from "@/components/dc/Footer";
import { Hero } from "@/components/dc/Hero";
import { ExperimentSimulator } from "@/components/dc/ExperimentSimulator";
import { Evidence } from "@/components/dc/Evidence";
import { MechanismPathway } from "@/components/dc/MechanismPathway";
import { VerdictPanel } from "@/components/dc/VerdictPanel";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Architectural Restoration of the Heart — Diosgenin Cardiac Blueprint" },
      {
        name: "description",
        content:
          "Interactive research portfolio by Lokeshwaran R: Diosgenin's anti-hypertrophic activity in T3-stressed H9c2 cardiac progenitors. MTT, morphometry, and RT-PCR dashboards.",
      },
    ],
  }),
});

function Index() {
  const [tab, setTab] = useState<TabKey>("blueprint");
  return (
    <div className="min-h-screen bg-[#0D1B2A] text-[#E2E8F0]">
      <Header />
      <TabNav active={tab} onChange={setTab} />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {tab === "blueprint" && <Hero onNavigate={setTab} />}
            {tab === "experiment" && <ExperimentSimulator onNavigate={setTab} />}
            {tab === "evidence" && <Evidence />}
            {tab === "mechanism" && <MechanismPathway />}
            {tab === "verdict" && <VerdictPanel />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

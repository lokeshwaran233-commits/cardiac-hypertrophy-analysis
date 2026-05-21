export function buildReadme(): string {
  return `# Architectural Restoration of the Heart
### Diosgenin Anti-Hypertrophic Activity in T3-Stressed H9c2 Cardiac Progenitor Models

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_App-00D4FF?style=for-the-badge)](#)
[![GitHub](https://img.shields.io/badge/GitHub-lokeshwaran233--commits-FF2D87?style=for-the-badge&logo=github)](https://github.com/lokeshwaran233-commits)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)](LICENSE)
[![Built With](https://img.shields.io/badge/Built_With-React_+_Recharts-61DAFB?style=for-the-badge)](https://reactjs.org/)

> A postgraduate research portfolio application presenting the experimental findings of a
> 5-month investigation into Diosgenin's capacity to intercept T3-induced pathological cardiac
> remodeling in H9c2 myoblast progenitor cells.

**Author:** Lokeshwaran R — PG Gold Medallist, Biochemistry, University of Madras
**Contact:** lokeshwaran233@gmail.com · [LinkedIn](https://linkedin.com/in/lokesh-waran-r/) · [GitHub](https://github.com/lokeshwaran233-commits)

---

## 🧬 Research Summary

| Parameter | Value |
|---|---|
| Cell Model | H9c2 Rat Cardiomyoblasts |
| Hypertrophic Inducer | Triiodothyronine (T3), 10 nM, 24h |
| Test Compound | Diosgenin (DG), 10 µM |
| Benchmark Drug | Valsartan (AT1 antagonist), 5 µM |
| Assays | MTT Cytotoxicity, Phase Contrast Microscopy, Giemsa Staining, RT-PCR |

---

## 📊 Key Results

### 1. Safety (MTT Assay)
- DG is non-toxic from 0.5–10 µM (NS vs. control)
- Cytotoxicity begins at ≥20 µM (gradual, no abrupt threshold)
- **10 µM selected as optimal therapeutic dose** (~88% viability, ** significance)

### 2. Morphological Rescue (Phase Contrast + Giemsa)
- T3 induced: width 40 µm, surface area 2500 µm²
- DG restored: width 15 µm, surface area 900 µm²
- DG demonstrated **superior nuclear volume restoration** vs. Valsartan benchmark

### 3. Transcriptional Rescue (RT-PCR Fold Change)

| Gene | Control | T3 | T3+DG | T3+Valsartan |
|---|---|---|---|---|
| α-SK | 1.0 | 6.3 | 3.3 | 3.1 |
| β-MHC | 1.0 | 5.5 | 3.3 | 3.4 |
| ANP | 1.0 | 3.0 | 2.3 | 1.6 |
| c-Jun | 1.0 | 4.0 | 3.0 | 2.5 |

---

## 🔬 Mechanism of Action

Diosgenin intercepts pathological remodeling at 3 levels:
1. **Oxidative Stress** — Stabilizes mitochondrial metabolism, blocks T3-driven ROS
2. **Signaling Cascades** — Dampens MAPK/ERK routes translating T3 stress to nuclear commands
3. **Transcriptional** — Blocks c-Jun and NFAT/GATA4 fetal gene program activation

---

## 📚 Academic Context

This application presents the results of a postgraduate dissertation project submitted to the
University of Madras. The research evaluates Diosgenin — a naturally occurring steroidal
sapogenin (C₂₇H₄₂O₃) from Dioscorea species — as a pleiotropic anti-hypertrophic agent.

**Key finding:** Diosgenin matches the efficacy of a dedicated RAAS blocker (Valsartan) through
broader multi-target actions (antioxidant + MAPK interception), making it a compelling phytochemical
candidate for arresting the cellular architecture of heart failure.

---

## ⚠️ Disclaimer

This is a research portfolio. The data represents in vitro findings in H9c2 cell models.
Clinical translation requires further in vivo validation.

---

*Built with React, Recharts, and Framer Motion. Data sourced from direct laboratory experimentation.*
`;
}
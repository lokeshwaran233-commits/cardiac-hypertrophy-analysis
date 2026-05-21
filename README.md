<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0D1B2A,50:1E3A5F,100:00D4FF&height=200&section=header&text=Architectural%20Restoration%20of%20the%20Heart&fontSize=28&fontColor=E2E8F0&fontAlignY=42&desc=Diosgenin%20Anti-Hypertrophic%20Activity%20in%20T3-Stressed%20H9c2%20Cardiac%20Progenitors&descAlignY=62&descSize=14&descColor=94A3B8" width="100%"/>

<br/>

[![Vercel Live](https://img.shields.io/badge/Live_Demo-Vercel_Deploy-00D4FF?style=for-the-badge&logo=vercel&logoColor=white)](https://diosgenin-cardiac.vercel.app)
[![GitHub Pages](https://img.shields.io/badge/Mirror-GitHub_Pages-FF2D87?style=for-the-badge&logo=github&logoColor=white)](https://lokeshwaran233.github.io/cardiac-hypertrophy-analysis/)
[![CI Status](https://img.shields.io/badge/CI-Build_Passing-22C55E?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/lokeshwaran233/cardiac-hypertrophy-analysis/actions)
[![License](https://img.shields.io/badge/License-MIT-F59E0B?style=for-the-badge)](LICENSE)

<br/>

[![React](https://img.shields.io/badge/React_+_TypeScript-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Recharts](https://img.shields.io/badge/Recharts-Data_Viz-FF2D87?style=flat-square)](https://recharts.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-00D4FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styling-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

<br/>

> **A portfolio-grade, fully interactive research application presenting the real experimental findings of a 5-month postgraduate investigation.**
> Every number, every chart, and every pathway diagram traces back to direct laboratory work — MTT assays, phase contrast microscopy, Giemsa staining, and RT-PCR — conducted at the Department of Biochemistry, University of Madras.

<br/>

---

</div>

## 🧬 About This Project

This is not a template or a mock study. This application visualizes **original in vitro findings** from my PG dissertation research into **Diosgenin (DG)** — a naturally occurring steroidal sapogenin (C₂₇H₄₂O₃) sourced from *Dioscorea* species — as a pleiotropic anti-hypertrophic agent against T3-induced pathological cardiac remodeling.

The app was built to serve as a **live, recruiter-facing research portfolio**: interactive charts pull from exact experimental datasets, the mechanism pathway diagram maps real molecular interception points, and the raw lab outputs (gel images, microscopy photographs) are embedded alongside the visualizations.

**Research conducted at:** Department of Biochemistry, University of Madras, Guindy Campus  
**Duration:** 5 months of active laboratory experimentation  
**Personal contribution:** Cell culture, MTT assay design, Giemsa staining, RT-PCR protocol execution, statistical analysis, and data interpretation — all performed independently under faculty supervision.

---

## 🔬 Experimental Design at a Glance

| Parameter | Detail |
|---|---|
| **Cell Model** | H9c2 Rat Cardiomyoblasts (cardiac progenitor lineage) |
| **Hypertrophic Inducer** | Triiodothyronine (T3), 10 nM, 24h treatment |
| **Test Compound** | Diosgenin (DG), dose range 0.5–40 µM; **10 µM selected as therapeutic dose** |
| **Benchmark Drug** | Valsartan (AT₁ receptor antagonist), 5 µM |
| **Treatment Arms** | Control · T3 alone · T3 + DG · T3 + Valsartan |
| **Assays** | MTT Cytotoxicity · Phase Contrast Microscopy · Giemsa Staining · RT-PCR |
| **Housekeeping Gene** | β-Actin (206 bp) — used for normalization across all RT-PCR data |
| **Statistical Approach** | Mean ± SD; significance expressed as NS / * / ** / *** |

---

## 📊 Key Results & Raw Data

### 1 · Safety Profile — MTT Cytotoxicity Assay

> *Dose-dependent cytotoxicity of Diosgenin in H9c2 cells. Mean ± SD, n=6.*  
> *Image: `mtt_chart.jpg` — Original GraphPad output embedded in app.*

| Concentration | Viability (%) | Significance |
|---|---|---|
| Control (0 µM) | 100 | — |
| 0.5 µM | 99 | NS |
| 1 µM | 97 | NS |
| 5 µM | 95 | * |
| **10 µM** | **88** | **✦ Selected Dose** |
| 20 µM | 73 | *** |
| 40 µM | 55 | *** |

**✅ Finding:** Diosgenin is non-toxic from 0.5–10 µM. Cytotoxicity begins gradually at ≥20 µM — no abrupt threshold. **10 µM preserves 88% mitochondrial viability** while remaining pharmacologically active.

---

### 2 · Morphological Rescue — Phase Contrast + Giemsa Staining

> *Figure 1.2(A): Phase contrast microscopy, 20X magnification, Inverted LABOMED microscope.*  
> *Figure 1.2(B): Giemsa staining, 40X magnification — nuclear enlargement analysis.*  
> *Images: `phase_contrast.jpg` · `giemsa_staining.jpg` — original lab captures embedded in app.*

| Treatment Group | Cell Width (µm) | Surface Area (µm²) | vs. T3 Control |
|---|---|---|---|
| Control (Untreated) | 12 | ~800 | Baseline |
| **T3 10 nM (Pathological)** | **40** | **2500** | — (induced) |
| T3 + Diosgenin 10 µM | 15 | 900 | **64% area reduction** ✅ |
| T3 + Valsartan 5 µM | 18 | ~1100 | 56% area reduction |

**✅ Finding:** DG achieves **superior nuclear volume restoration** vs. Valsartan. Width returns from 40 µm → 15 µm (near-control baseline of 12 µm).

---

### 3 · Transcriptional Rescue — RT-PCR Fold Change

> *Figure 1.3: RT-PCR agarose gel (Panel A) + densitometric quantification (Panel B).*  
> *Image: `rtpcr_combined.jpg` — gel electrophoresis + band quantification from original PPT.*  
> *Gene amplicon sizes: α-SK 207 bp · β-MHC 202 bp · ANP 312 bp · c-Jun 255 bp · β-Actin 206 bp*  
> *Significance: \* p<0.01 Control vs T3; \*\* p<0.001 T3 vs DG/Valsartan.*

| Gene | Role | Control | T3 | T3 + DG | T3 + Valsartan |
|---|---|---|---|---|---|
| **α-SK** | Contractile machinery shift | 1.0 | 6.3 | 3.3 | 3.1 |
| **β-MHC** | Fetal isoform / HF marker | 1.0 | 5.5 | 3.3 | 3.4 |
| **ANP** | Atrial stress hallmark | 1.0 | 3.0 | 2.3 | 1.3 |
| **c-Jun** | Proto-oncogene / growth cascade | 1.0 | 4.0 | 3.0 | 2.5 |

**✅ Finding:** DG matches or exceeds Valsartan across all 4 fetal gene targets. Notably, DG achieves **deeper ANP suppression** than the dedicated RAAS blocker.

---

## 🔴 → 🟢 Comparative Efficacy Summary

| Metric | T3 Effect | Valsartan Rescue | Diosgenin Rescue |
|---|---|---|---|
| Cellular Viability | 🔴 Slight reduction at high dose | 🟡 Preserved at 5 µM | 🟢 Preserved at 10 µM (Optimal) |
| Morphological Reversal | 🔴 Severe distortion & engorgement | 🟡 Moderate restoration | 🟢 Superior nuclear volume restoration |
| Fetal Gene Suppression | 🔴 Massive upregulation (ANP, β-MHC) | 🟡 Significant suppression | 🟢 Equal or deeper transcript suppression |

---

## ⚙️ Mechanism of Action — 3 Interception Points

Diosgenin intercepts pathological T3-driven cardiac remodeling at **three independent nodes**:

```
T3 Stimulus (10 nM, 24h)
        │
        ▼
┌─────────────────────┐
│   Mitochondria      │ ◀──── ❌ INTERCEPT 1 — Oxidative Stress
│   ROS Generation    │       Stabilizes mitochondrial metabolism.
└──────────┬──────────┘       Blocks T3-driven ROS accumulation.
           │
           ▼
┌─────────────────────┐
│  MAPK / ERK         │ ◀──── ❌ INTERCEPT 2 — Signaling Cascade
│  Signaling Cascade  │       Dampens ERK routes that translate
└──────────┬──────────┘       T3 stress into nuclear commands.
           │
           ▼
┌─────────────────────┐
│  NFAT / GATA4       │ ◀──── ❌ INTERCEPT 3 — Transcriptional
│  c-Jun Activation   │       Blocks c-Jun and NFAT/GATA4
│  Fetal Gene Program │       fetal gene program activation.
└─────────────────────┘
           │
           ▼
    [BLOCKED BY DG]
    α-SK ↓ · β-MHC ↓ · ANP ↓ · c-Jun ↓
```

---

## 🖥️ App Architecture — 5 Interactive Tabs

| Tab | Name | What It Shows |
|---|---|---|
| **01** | 🫀 The Blueprint | Animated hero · Stat counters · Research context |
| **02** | 🧪 The Experiment | 4-phase animated experimental simulator (stepper UI) |
| **03** | 📊 The Evidence | MTT chart · Morphology comparator · RT-PCR dashboard + **raw lab images** |
| **04** | 🔬 The Mechanism | Interactive SVG pathway diagram — 3 DG interception nodes |
| **05** | ⚖️ The Verdict | DG vs. Valsartan comparison · Conclusion cards · README export |

### Raw Lab Images Embedded in App

All 4 original experimental outputs from the laboratory are embedded in **Tab 3 — The Evidence** as collapsible "Raw Lab Data" panels alongside the interactive Recharts visualizations:

| Image File | Figure | Where in App |
|---|---|---|
| `mtt_chart.jpg` | Figure 1.1 — GraphPad MTT dose-response | Sub-tab A · Safety Profile |
| `phase_contrast.jpg` | Figure 1.2(A) — 20X phase contrast, 4 groups | Sub-tab B · Morphological Rescue |
| `giemsa_staining.jpg` | Figure 1.2(B) — 40X Giemsa, nuclear analysis | Sub-tab B · Morphological Rescue |
| `rtpcr_combined.jpg` | Figure 1.3 — Gel (Panel A) + Densitometry (Panel B) | Sub-tab C · Molecular Dashboard |

> A 4th sub-tab **📸 Lab Gallery** presents all images in a 2×2 lightbox grid with full-screen zoom.

---

## 🗂️ Project Structure

```
cardiac-hypertrophy-analysis/
├── public/
│   ├── mtt_chart.jpg             ← Original MTT GraphPad output
│   ├── phase_contrast.jpg        ← Phase contrast microscopy (20X, LABOMED)
│   ├── giemsa_staining.jpg       ← Giemsa staining (40X, LABOMED)
│   └── rtpcr_combined.jpg        ← RT-PCR gel + densitometry (from viva PPT)
│
├── src/
│   ├── components/
│   │   ├── Hero.tsx              ← Tab 1 — animated landing
│   │   ├── ExperimentSimulator.tsx ← Tab 2 — 4-phase stepper
│   │   ├── MTTChart.tsx          ← Tab 3A — Recharts + raw image panel
│   │   ├── MorphologyComparator.tsx ← Tab 3B — cell circles + microscopy
│   │   ├── PCRDashboard.tsx      ← Tab 3C — grouped bar chart + gel panel
│   │   ├── MechanismPathway.tsx  ← Tab 4 — interactive SVG pathway
│   │   ├── VerdictPanel.tsx      ← Tab 5 — comparison + conclusions
│   │   └── Lightbox.tsx          ← Reusable full-screen image modal
│   │
│   ├── data/
│   │   ├── mttData.ts            ← Dataset A — exact MTT values
│   │   ├── morphologyData.ts     ← Dataset B — cell morphometry
│   │   └── pcrData.ts            ← Dataset C — RT-PCR fold changes
│   │
│   ├── App.tsx                   ← Navigation shell + tab routing
│   └── index.css                 ← Dark navy global theme (#0D1B2A)
│
├── .github/
│   └── workflows/
│       ├── deploy.yml            ← GitHub Pages auto-deploy on push to main
│       └── ci.yml                ← TypeScript check + build verification
│
├── vite.config.ts                ← Vite config (base: '/', Vercel-compatible)
├── vercel.json                   ← SPA rewrites + cache + security headers
├── .gitignore
└── package.json
```

---

## 🚀 Run Locally

```bash
# Clone the repository
git clone https://github.com/lokeshwaran233/cardiac-hypertrophy-analysis.git

# Navigate into the project
cd cardiac-hypertrophy-analysis

# Install dependencies
npm install

# Start development server
npm run dev
```

Available scripts:

```bash
npm run dev          # Start local dev server (Vite)
npm run build        # TypeScript check + production build
npm run preview      # Preview the production build locally
npm run lint         # ESLint check (zero warnings mode)
npm run typecheck    # tsc --noEmit (type-check only)
```

---

## 🌐 Deployment

This project maintains **two live URLs simultaneously** via a dual-pipeline CI/CD setup:

```
git push → main branch
    │
    ├──▶ ci.yml         → TypeScript check + build verification → green badge
    │
    ├──▶ deploy.yml     → GitHub Actions build → GitHub Pages (mirror URL)
    │                      https://lokeshwaran233.github.io/cardiac-hypertrophy-analysis/
    │
    └──▶ Vercel         → Git integration auto-deploy → Primary CDN URL
                           https://diosgenin-cardiac.vercel.app
```

**Vercel config** (`vercel.json`): SPA rewrites, 1-year asset caching, security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection).

---

## 🎓 Academic Context

> **Submitted to:** University of Madras  
> **Department:** Biochemistry  
> **Degree:** Master of Science (Biochemistry) — **Gold Medallist** 🥇  
> **Scope:** 5-month active laboratory investigation

**Key Conclusion:**

> *Diosgenin represents a powerful, pleiotropic candidate for arresting the cellular blueprints of heart failure — matching the efficacy of a dedicated RAAS blocker (Valsartan) through broader, multi-target antioxidant and MAPK interception mechanisms.*

**What I personally executed in the lab:**
- Designed and ran the multi-arm pharmacological study with appropriate positive controls
- Executed MTT assay protocol (n=6 replicates; formazan crystal absorbance at 570 nm)
- Performed cell culture, T3-induction, and treatment across all 4 arms
- Captured phase contrast (20X) and Giemsa-stained (40X) images on inverted LABOMED microscope
- Designed RT-PCR primers, ran gel electrophoresis, performed densitometric quantification
- Correlated molecular gene expression changes to observable morphological phenotypes

---

## ⚠️ Disclaimer

This is a research portfolio application. All data represents **original in vitro findings** in H9c2 cardiomyoblast cell models. Clinical translation requires further in vivo validation and peer-reviewed publication. The microscopy images and gel photographs are original experimental outputs from the University of Madras laboratory and are used here for academic portfolio purposes only.

---

## 👤 Author

<div align="center">

**Lokeshwaran R.**  
PG Gold Medallist · Biochemistry · University of Madras  
Transitioning into AI Product Management

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/lokesh-waran-r/)
[![GitHub](https://img.shields.io/badge/GitHub-lokeshwaran233-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/lokeshwaran233)
[![Email](https://img.shields.io/badge/Email-lokeshwaran233%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:lokeshwaran233@gmail.com)
[![Location](https://img.shields.io/badge/Based_in-Chennai%2C_India-FF9933?style=for-the-badge&logo=googlemaps&logoColor=white)](#)

</div>

---

<div align="center">

*Built with React · Recharts · Framer Motion · Vite · Tailwind CSS*  
*Data sourced exclusively from direct laboratory experimentation — University of Madras, 2024*

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00D4FF,50:1E3A5F,100:0D1B2A&height=100&section=footer" width="100%"/>

</div>

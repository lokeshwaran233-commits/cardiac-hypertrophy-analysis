# Diosgenin Cardiac Blueprint — Implementation Plan

A single-page React + TypeScript portfolio app visualizing real MTT, morphometry, RT-PCR, and pathway data for Lokeshwaran R's PG dissertation on Diosgenin's anti-hypertrophic activity in T3-stressed H9c2 cells.

## Stack
React + TypeScript + Vite + Tailwind + Recharts + Framer Motion. Dark navy theme (#0D1B2A) with cyan/magenta/amber/green accents per spec.

## File Structure
```
src/
  data/
    mttData.ts            Dataset A (7 doses, viability, significance)
    morphologyData.ts     Dataset B (4 groups, width µm, area µm²)
    pcrData.ts            Dataset C (4 genes × 4 groups fold change)
    verdictData.ts        Dataset D comparative table
    geneInfo.ts           Per-gene explanatory copy
  components/
    layout/
      Header.tsx          Title, About modal trigger, GitHub badge
      TabNav.tsx          Sticky top/side nav, mobile hamburger
      Footer.tsx          Name | LinkedIn | GitHub | mail | Chennai
      AboutModal.tsx      Plain-English research summary
      InfoTooltip.tsx     Reusable (i) icon w/ methodology copy
      CountUp.tsx         Framer Motion animated counter
      CSVDownloadButton.tsx
    Hero.tsx              Tab 1 — animated heart SVG + 3 count-up stats
    ExperimentSimulator.tsx  Tab 2 — 4-phase auto-play stepper
    evidence/
      EvidenceTabs.tsx    Pill sub-tabs router
      MTTChart.tsx        3A — color-coded bars, safe zone, 10µM marker
      MorphologyComparator.tsx  3B — animated scaled circles + labels
      PCRDashboard.tsx    3C — grouped bars, click-to-info panel
    MechanismPathway.tsx  Tab 4 — interactive SVG, 3 intercept points
    VerdictPanel.tsx      Tab 5 — comparison table, conclusion cards, statement, README export, "What I Learned"
  lib/
    readmeTemplate.ts     Generates the exact README markdown
    csv.ts                Blob-based CSV download helper
  App.tsx                 Tab state + routing shell
  index.css               Theme tokens, Inter font, glass card utilities
```

## Tab-by-Tab Build

**Tab 1 — The Blueprint**
Animated wireframe heart SVG (Framer Motion pulse). Three CountUp stat cards: "10 µM / Safe Therapeutic Window", "64% / Cell Surface Area Reduction", "4 / Fetal Gene Targets Suppressed". Research blurb + GitHub shield badge.

**Tab 2 — The Experiment**
Horizontal 4-phase stepper with progress bar, 1.5s auto-advance + click. Phase 1 cell grid morph, Phase 2 four treatment cards with pulsing badges, Phase 3 three assay icons with connecting arrows, Phase 4 "RESULTS UNLOCKED" scorecard + CTA to Tab 3.

**Tab 3 — The Evidence**
- 3A MTT: Recharts BarChart, green/orange/red bars, ReferenceArea safe zone 0–10µM, dashed line at 10µM, significance stars above bars.
- 3B Morphology: Animated SVG circles scaled to area (Control 800, T3 2500, DG 900, Val 1100) with width/area labels and rescue % tooltips. Pulsing red border on T3.
- 3C PCR: Recharts grouped BarChart for α-SK, β-MHC, ANP, c-Jun with 4-color legend, dashed reference at y=1. Click a cluster → side info panel with per-gene narrative.
- Each chart: (i) methodology tooltip + ⬇ CSV button.

**Tab 4 — The Mechanism**
700×500 SVG canvas: T3 input → Mitochondria (orange) → ERK/MAPK (blue) → Nuclear envelope (ellipse) → Fetal genes. Three red X intercept nodes; clicking expands tooltip card with the exact text from spec. Animated red pathological arrows; X nodes flash cyan when "blocked."

**Tab 5 — The Verdict**
Comparison table (Dataset D) with 🔴/🟡/🟢 badges, 3 conclusion cards (cyan/magenta/amber borders), centered big statement, "📄 Export README.md" button (downloads via Blob), "What I Learned" 3-bullet reflection, footer contacts.

## Data Integrity
All numbers hard-coded from Datasets A–D verbatim in `src/data/*.ts`. No placeholders, no fabrication. DG always #00D4FF, T3 always #FF2D87, Valsartan #F59E0B, Control gray.

## Deployment Files (root)
- `vite.config.ts` with `base: '/'` and manualChunks (vendor/charts/motion)
- `vercel.json` with rewrites + cache + security headers
- `.github/workflows/deploy.yml` — GitHub Pages via Actions
- `.github/workflows/ci.yml` — tsc + build check
- `.gitignore` per spec
- `package.json` scripts: dev, build, preview, lint, typecheck

## Personal Identity Hooks
Name "Lokeshwaran R" in header credit + footer. Links: github.com/lokeshwaran233-commits, linkedin.com/in/lokesh-waran-r/, lokeshwaran233@gmail.com. README template updated to use these handles instead of `YOUR_USERNAME`.

## Technical Notes
- Tailwind config extends theme with the exact hex tokens; `index.css` defines `.glass-card` utility (backdrop-blur 8px, 1px cyan border, 12px radius, cyan glow on hover).
- Mobile: TabNav collapses to hamburger sheet; charts use ResponsiveContainer; morphology circles scale-down for narrow viewports.
- All Framer Motion entrances use `initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}` with staggered delays; charts use Recharts `isAnimationActive`.
- CSV helper builds `Blob([csv], {type:'text/csv'})` and triggers anchor download.
- README export uses same Blob pattern with `text/markdown`.

## Quality Gates Before Done
Verify all checkboxes from the spec: data matches datasets exactly, 10µM annotated, gene full names, color discipline, 3 intercepts, README download valid, CSV downloads correct, stepper plays all 4 phases, gene info panel works, tooltips present, all 6 deploy files exist, build + tsc clean, responsive.

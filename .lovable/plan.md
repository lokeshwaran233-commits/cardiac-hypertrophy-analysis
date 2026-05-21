## Real Lab Image Integration

Integrate the 4 uploaded experimental images (MTT chart, phase contrast, Giemsa staining, RT-PCR gel+densitometry) into the existing Evidence tab as authentic "Raw Lab Data" panels — without replacing the existing interactive Recharts visualizations.

### 1. Asset setup
- Copy the 4 user-uploaded images into `public/` so they're served at root URLs:
  - `public/mtt_chart.jpg`
  - `public/phase_contrast.jpg`
  - `public/giemsa_staining.jpg`
  - `public/rtpcr_combined.jpg`

### 2. Reusable Lightbox component
- New `src/components/dc/Lightbox.tsx` — full-screen dark overlay (`bg-black/90`), centered image, close button (top-right), ESC-to-close, Framer Motion zoom-in/fade. Props: `src`, `alt`, `caption?`, `isOpen`, `onClose`.

### 3. Reusable LabImage card
- New `src/components/dc/LabImage.tsx` — image with cyan-tinted border, rounded corners, optional "ORIGINAL LAB DATA" / custom badge top-right, caption below. Clickable → opens Lightbox.

### 4. MTTChart.tsx — add collapsible "📷 Raw Lab Output"
- Below the Recharts bar chart, add a `<details>`-style collapsible (Framer Motion height animation) showing `/mtt_chart.jpg` via LabImage with caption: *"Figure 1.1 — Dose-dependent cytotoxicity of Diosgenin in H9c2 cells. Mean ± SD (n=6). NS, no significance; *, p<0.05; **, p<0.01; ***, p<0.001."*

### 5. MorphologyComparator.tsx — add "📷 View Microscopy Images" toggle
- Toggle button reveals a 2-column responsive grid (stacks on mobile):
  - Left: `/phase_contrast.jpg`, badge "PHASE CONTRAST", caption *Figure 1.2(A) — Phase contrast microscopy (20X, Inverted LABOMED). Arrows indicate cellular morphology.*
  - Right: `/giemsa_staining.jpg`, badge "GIEMSA STAINING", caption *Figure 1.2(B) — Giemsa staining (40X). Arrows indicate nuclear enlargement in T3-treated cells.*
- Both clickable → Lightbox.

### 6. PCRDashboard.tsx — add "🧫 Gel Evidence" panel above chart
- Show `/rtpcr_combined.jpg` (clickable → Lightbox) with caption: *Figure 1.3 — RT-PCR gel electrophoresis (Panel A) and densitometric quantification (Panel B). Mean ± SD (n=3). * p<0.01 Control vs T3; ** p<0.001 T3 vs Diosgenin/Valsartan.*
- Update InfoTooltip text to mention β-actin (206 bp) housekeeping gene used for normalization, and gene amplicon sizes: α-sk 207 bp, β-MHC 202 bp, ANP 312 bp, c-Jun 255 bp.

### 7. New 4th sub-tab "📸 Lab Gallery" in Evidence.tsx
- Add `gallery` to the Sub type and subs array.
- New `src/components/dc/LabGallery.tsx`: 2×2 responsive grid of cards, each with thumbnail, title, technique badge, and click → Lightbox. Cards:
  - MTT Chart — "Cytotoxicity Profile" — Spectrophotometry at 570 nm
  - Phase Contrast — "Morphological Survey" — 20X, Inverted LABOMED
  - Giemsa Staining — "Nuclear Enlargement Analysis" — 40X, LABOMED
  - RT-PCR + Densitometry — "Transcriptional Evidence" — Agarose Gel + Band Quantification

### 8. Data corrections
- `src/data/mttData.ts`: 20 µM significance `"*"` → `"***"`; 40 µM significance `"*"` → `"***"`. Extend the union type to include `"***"`.
- `src/data/pcrData.ts`: ANP Valsartan `1.6` → `1.3`. Update the ANP insight string accordingly.

### 9. Out of scope (deferred unless asked)
- No "About This Research" modal exists in Header today, so the about-paragraph addition is skipped. (Can add in a follow-up if you want a `?` info modal in the header.)
- Options A/B/C (live-view simulation, pan-zoom, hotspot annotations) are not built in this pass — they're optional creative extensions.

### Technical notes
- Lightbox uses `AnimatePresence` + a `useEffect` keydown listener for ESC; `document.body.style.overflow = 'hidden'` while open.
- Images load lazily (`loading="lazy"`) except in Lightbox.
- Collapsibles/toggles preserve dark navy / cyan theme; badges use existing tokens (`#00D4FF`, `#FF2D87`).
- No new npm packages required (framer-motion already installed).

# README.md

````md
<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0D1B2A,50:1E3A5F,100:00D4FF&height=200&section=header&text=Architectural%20Restoration%20of%20the%20Heart&fontSize=28&fontColor=E2E8F0&fontAlignY=42&desc=Diosgenin%20Anti-Hypertrophic%20Activity%20in%20T3-Stressed%20H9c2%20Cardiac%20Progenitors&descAlignY=62&descSize=14&descColor=94A3B8" width="100%"/>

<br/>

[![Vercel Live](https://img.shields.io/badge/Live_Demo-Vercel-00D4FF?style=for-the-badge&logo=vercel&logoColor=white)](https://cardiac-hypertrophy-analysis.vercel.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/lokeshwaran233/cardiac-hypertrophy-analysis)
[![GitHub Pages](https://img.shields.io/badge/Mirror-GitHub_Pages-FF2D87?style=for-the-badge&logo=github&logoColor=white)](https://lokeshwaran233.github.io/cardiac-hypertrophy-analysis/)
[![CI Status](https://img.shields.io/badge/CI-Build_Passing-22C55E?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/lokeshwaran233/cardiac-hypertrophy-analysis/actions)
[![License](https://img.shields.io/badge/License-MIT-F59E0B?style=for-the-badge)](LICENSE)

<br/>

> **A portfolio-grade interactive biomedical research platform visualizing original postgraduate laboratory findings on cardiac hypertrophy reversal using Diosgenin.**

> Every chart, microscopy panel, RT-PCR output, and pathway visualization in this application is derived directly from wet-lab experimentation conducted at the Department of Biochemistry, University of Madras.

</div>

---

# 🧬 About The Project

This project presents the findings of a postgraduate dissertation investigating the anti-hypertrophic potential of **Diosgenin (DG)** against **T3-induced pathological cardiac remodeling** in H9c2 cardiomyoblasts.

Rather than a static thesis document, the study has been transformed into a fully interactive research application combining:

- Scientific storytelling
- Dynamic data visualization
- Experimental simulation
- Molecular pathway mapping
- Embedded raw laboratory outputs

The application functions simultaneously as:

- 📘 Research portfolio
- 🧪 Experimental showcase
- 💼 Recruiter-facing technical project
- 🤖 AI-assisted scientific visualization platform

---

# 🔬 Experimental Design

| Parameter | Details |
|---|---|
| **Cell Model** | H9c2 Rat Cardiomyoblasts |
| **Induction Agent** | Triiodothyronine (T3), 10 nM |
| **Therapeutic Candidate** | Diosgenin (0.5–40 µM) |
| **Selected Dose** | Diosgenin 10 µM |
| **Benchmark Drug** | Valsartan 5 µM |
| **Treatment Duration** | 24 Hours |
| **Assays Performed** | MTT · Phase Contrast Microscopy · Giemsa Staining · RT-PCR |
| **Normalization Gene** | β-Actin (206 bp) |
| **Statistical Method** | Mean ± SD |

---

# 📊 Key Findings

## 1️⃣ MTT Cytotoxicity Assay

| Concentration | Cell Viability |
|---|---|
| 0 µM | 100% |
| 0.5 µM | 99% |
| 1 µM | 97% |
| 5 µM | 95% |
| **10 µM** | **88%** |
| 20 µM | 73% |
| 40 µM | 55% |

### Conclusion
Diosgenin remained pharmacologically safe between 0.5–10 µM, with 10 µM selected as the optimal therapeutic concentration balancing viability and anti-hypertrophic activity.

---

## 2️⃣ Morphological Restoration

| Group | Cell Width | Surface Area |
|---|---|---|
| Control | 12 µm | ~800 µm² |
| T3-Induced | 40 µm | 2500 µm² |
| T3 + DG | 15 µm | 900 µm² |
| T3 + Valsartan | 18 µm | ~1100 µm² |

### Conclusion
Diosgenin demonstrated superior reversal of pathological hypertrophy and nuclear enlargement compared with Valsartan.

---

## 3️⃣ RT-PCR Gene Suppression

| Gene | T3 | T3 + DG | T3 + Valsartan |
|---|---|---|---|
| α-SK | 6.3 | 3.3 | 3.1 |
| β-MHC | 5.5 | 3.3 | 3.4 |
| ANP | 3.0 | 2.3 | 1.3 |
| c-Jun | 4.0 | 3.0 | 2.5 |

### Conclusion
Diosgenin significantly suppressed hypertrophic fetal gene activation and demonstrated transcript-level rescue comparable to established RAAS blockade therapy.

---

# ⚙️ Proposed Mechanism

Diosgenin appears to attenuate pathological remodeling through three major interception nodes:

```text
T3 Stress Signal
      ↓
ROS Generation
      ↓
MAPK / ERK Cascade
      ↓
NFAT / GATA4 / c-Jun Activation
      ↓
Fetal Gene Program
      ↓
Cardiac Hypertrophy
````

### Diosgenin Action Nodes

* Reduces oxidative stress
* Dampens MAPK/ERK signaling
* Suppresses fetal transcription activation
* Limits pathological hypertrophic remodeling

---

# 🖥️ Application Features

| Section           | Functionality                                   |
| ----------------- | ----------------------------------------------- |
| 🫀 The Blueprint  | Animated scientific landing experience          |
| 🧪 The Experiment | Interactive experimental workflow simulator     |
| 📊 The Evidence   | Recharts dashboards + raw lab image integration |
| 🔬 The Mechanism  | Interactive molecular pathway visualization     |
| ⚖️ The Verdict    | Comparative therapeutic interpretation          |

---

# 🧪 Raw Experimental Assets

The application embeds original laboratory outputs directly inside the interface.

| Asset                 | Description                               |
| --------------------- | ----------------------------------------- |
| `mtt_chart.jpg`       | GraphPad MTT viability curve              |
| `phase_contrast.jpg`  | 20X phase contrast microscopy             |
| `giemsa_staining.jpg` | 40X Giemsa nuclear morphology             |
| `rtpcr_combined.jpg`  | RT-PCR gel electrophoresis + densitometry |

---

# 🗂️ Project Structure

```bash
cardiac-hypertrophy-analysis/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── App.tsx
│   └── index.css
├── .github/
├── vite.config.ts
├── vercel.json
├── package.json
└── README.md
```

---

# 🚀 Local Development

## Clone Repository

```bash
git clone https://github.com/lokeshwaran233/cardiac-hypertrophy-analysis.git
```

## Navigate Into Project

```bash
cd cardiac-hypertrophy-analysis
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

---

# 📦 Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run typecheck
```

---

# 🌐 Deployment

## Primary Deployment

🔗 https://cardiac-hypertrophy-analysis.vercel.app

Hosted using:

* Vercel
* Vite
* GitHub Integration CI/CD

---

## GitHub Pages Mirror

🔗 https://lokeshwaran233.github.io/cardiac-hypertrophy-analysis/

---

# ⚡ CI/CD Workflow

```text
git push → main
        │
        ├── GitHub Actions CI
        │      ├── TypeScript validation
        │      ├── ESLint verification
        │      └── Production build
        │
        ├── GitHub Pages deployment
        │
        └── Vercel automatic deployment
```

---

# 🎓 Academic Context

| Field                 | Information          |
| --------------------- | -------------------- |
| **Institution**       | University of Madras |
| **Department**        | Biochemistry         |
| **Degree**            | M.Sc. Biochemistry   |
| **Achievement**       | Gold Medallist 🥇    |
| **Research Duration** | 5 Months             |

---

# 👨‍🔬 Laboratory Contributions

This work includes independent execution of:

* H9c2 cell culture handling
* T3 hypertrophic induction
* Multi-arm pharmacological treatment design
* MTT assay execution
* Phase contrast microscopy
* Giemsa staining
* RT-PCR workflow
* Gel electrophoresis
* Densitometric quantification
* Statistical interpretation
* Experimental visualization

---

# ⚠️ Disclaimer

This project represents original in vitro experimental findings using H9c2 cardiomyoblast models and is intended solely for academic and portfolio purposes.

Further in vivo validation and peer-reviewed publication are required before clinical translation.

---

# 👤 Author

<div align="center">

## Lokeshwaran R.

**PG Gold Medallist · Biochemistry · University of Madras**
Transitioning into AI Product Management & Scientific Technology

<br/>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge\&logo=linkedin\&logoColor=white)](https://linkedin.com/in/lokesh-waran-r/)
[![GitHub](https://img.shields.io/badge/GitHub-lokeshwaran233-181717?style=for-the-badge\&logo=github\&logoColor=white)](https://github.com/lokeshwaran233)
[![Email](https://img.shields.io/badge/Email-lokeshwaran233%40gmail.com-EA4335?style=for-the-badge\&logo=gmail\&logoColor=white)](mailto:lokeshwaran233@gmail.com)

</div>

---

<div align="center">

Built with React · TypeScript · Recharts · Framer Motion · Tailwind CSS · Vite

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00D4FF,50:1E3A5F,100:0D1B2A&height=100&section=footer" width="100%"/>

</div>
```

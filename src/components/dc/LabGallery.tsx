import { LabImage } from "./LabImage";

const items = [
  {
    src: "/mtt_chart.jpg",
    title: "Cytotoxicity Profile",
    technique: "Spectrophotometry at 570 nm",
    badge: "MTT ASSAY",
    color: "#22C55E",
    caption:
      "Figure 1.1 — Dose-dependent cytotoxicity of Diosgenin in H9c2 cells. Mean ± SD (n=6).",
  },
  {
    src: "/phase_contrast.jpg",
    title: "Morphological Survey",
    technique: "20X, Inverted LABOMED",
    badge: "PHASE CONTRAST",
    color: "#00D4FF",
    caption: "Figure 1.2(A) — Phase contrast microscopy across 4 treatment arms.",
  },
  {
    src: "/giemsa_staining.jpg",
    title: "Nuclear Enlargement Analysis",
    technique: "40X, LABOMED",
    badge: "GIEMSA STAINING",
    color: "#FF2D87",
    caption: "Figure 1.2(B) — Giemsa-stained nuclei across 4 treatment arms.",
  },
  {
    src: "/rtpcr_combined.jpg",
    title: "Transcriptional Evidence",
    technique: "Agarose Gel + Band Quantification",
    badge: "RT-PCR",
    color: "#F59E0B",
    caption: "Figure 1.3 — RT-PCR gel (A) and densitometric quantification (B).",
  },
];

export function LabGallery() {
  return (
    <div className="dc-glass p-5">
      <div>
        <h3 className="text-lg font-semibold text-[#E2E8F0]">Lab Gallery</h3>
        <p className="mt-1 text-xs text-[#94A3B8]">
          Original experimental outputs from a 5-month project at the Department of Biochemistry,
          University of Madras. Click any image to enlarge.
        </p>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {items.map((it) => (
          <div key={it.src} className="rounded-xl border border-[#1E3A5F] bg-[#0D1B2A]/60 p-3">
            <LabImage
              src={it.src}
              alt={it.title}
              badge={it.badge}
              badgeColor={it.color}
              caption={it.caption}
            />
            <div className="mt-3 flex items-center justify-between">
              <div className="text-sm font-semibold text-[#E2E8F0]">{it.title}</div>
              <span
                className="rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider"
                style={{ color: it.color, border: `1px solid ${it.color}55` }}
              >
                {it.technique}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
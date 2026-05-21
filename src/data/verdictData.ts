export type VerdictRow = {
  metric: string;
  t3: { text: string; level: "bad" | "moderate" | "good" };
  valsartan: { text: string; level: "bad" | "moderate" | "good" };
  diosgenin: { text: string; level: "bad" | "moderate" | "good" };
};

export const verdictData: VerdictRow[] = [
  {
    metric: "Cellular Viability",
    t3: { text: "Slight reduction at high dose", level: "moderate" },
    valsartan: { text: "Preserved at 5 µM", level: "good" },
    diosgenin: { text: "Preserved at 10 µM (Optimal)", level: "good" },
  },
  {
    metric: "Morphological Reversal",
    t3: { text: "Severe distortion & engorgement", level: "bad" },
    valsartan: { text: "Moderate restoration", level: "moderate" },
    diosgenin: { text: "Superior nuclear volume restoration", level: "good" },
  },
  {
    metric: "Fetal Gene Suppression",
    t3: { text: "Massive upregulation (ANP, β-MHC)", level: "bad" },
    valsartan: { text: "Significant suppression", level: "good" },
    diosgenin: { text: "Equal or deeper transcript suppression", level: "good" },
  },
];
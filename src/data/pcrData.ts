export type PCRRow = {
  gene: string;
  full: string;
  Control: number;
  T3: number;
  Diosgenin: number;
  Valsartan: number;
  insight: string;
};

export const pcrData: PCRRow[] = [
  {
    gene: "α-SK",
    full: "Alpha Skeletal Actin",
    Control: 1.0, T3: 6.3, Diosgenin: 3.3, Valsartan: 3.1,
    insight:
      "Pathological shifts in contractile machinery. T3 induces 6.3× upregulation. DG reduces to 3.3×.",
  },
  {
    gene: "β-MHC",
    full: "Beta Myosin Heavy Chain",
    Control: 1.0, T3: 5.5, Diosgenin: 3.3, Valsartan: 3.4,
    insight:
      "Fetal isoform switch. Classic heart failure marker. DG restores from 5.5× → 3.3×.",
  },
  {
    gene: "ANP",
    full: "Atrial Natriuretic Peptide",
    Control: 1.0, T3: 3.0, Diosgenin: 2.3, Valsartan: 1.3,
    insight:
      "Atrial natriuretic peptide. Hallmark of atrial stress. DG suppresses to 2.3×; Valsartan drives expression closest to baseline at 1.3×.",
  },
  {
    gene: "c-Jun",
    full: "Proto-oncogene c-Jun",
    Control: 1.0, T3: 4.0, Diosgenin: 3.0, Valsartan: 2.5,
    insight:
      "Proto-oncogene driving aggressive growth cascades. DG reduces from 4.0× → 3.0×.",
  },
];

export const groupColors = {
  Control: "#94A3B8",
  T3: "#FF2D87",
  Diosgenin: "#00D4FF",
  Valsartan: "#F59E0B",
} as const;
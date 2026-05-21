export type MorphRow = {
  group: string;
  short: string;
  width: number; // µm
  area: number;  // µm²
  color: string;
  role: "control" | "patho" | "rescue" | "benchmark";
};

export const morphologyData: MorphRow[] = [
  { group: "Control (Untreated)", short: "Control", width: 12, area: 800, color: "#94A3B8", role: "control" },
  { group: "T3 10 nM (Pathological)", short: "T3", width: 40, area: 2500, color: "#FF2D87", role: "patho" },
  { group: "T3 + Diosgenin 10 µM", short: "T3 + DG", width: 15, area: 900, color: "#00D4FF", role: "rescue" },
  { group: "T3 + Valsartan 5 µM", short: "T3 + Val", width: 18, area: 1100, color: "#F59E0B", role: "benchmark" },
];
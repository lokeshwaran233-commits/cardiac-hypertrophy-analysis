export type MTTPoint = {
  label: string;
  conc: number; // µM
  viability: number; // %
  significance: "—" | "NS" | "*" | "**";
  zone: "safe" | "warn" | "danger";
};

export const mttData: MTTPoint[] = [
  { label: "Control", conc: 0, viability: 100, significance: "—", zone: "safe" },
  { label: "0.5 µM", conc: 0.5, viability: 99, significance: "NS", zone: "safe" },
  { label: "1 µM", conc: 1, viability: 97, significance: "NS", zone: "safe" },
  { label: "5 µM", conc: 5, viability: 95, significance: "*", zone: "safe" },
  { label: "10 µM", conc: 10, viability: 88, significance: "**", zone: "safe" },
  { label: "20 µM", conc: 20, viability: 73, significance: "*", zone: "warn" },
  { label: "40 µM", conc: 40, viability: 55, significance: "*", zone: "danger" },
];

export const optimalDoseLabel = "10 µM";
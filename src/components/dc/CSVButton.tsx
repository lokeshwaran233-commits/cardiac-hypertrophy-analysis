import { Download } from "lucide-react";
import { downloadBlob, toCSV } from "@/lib/dc-utils";

type Props = {
  rows: Array<Record<string, string | number>>;
  filename: string;
};

export function CSVButton({ rows, filename }: Props) {
  return (
    <button
      type="button"
      onClick={() => downloadBlob(toCSV(rows), filename, "text/csv")}
      className="inline-flex items-center gap-1.5 rounded-md border border-[#1E3A5F] bg-[#0D1B2A]/60 px-2.5 py-1 text-xs text-[#94A3B8] hover:text-[#00D4FF] hover:border-[#00D4FF]/60 transition"
    >
      <Download className="h-3 w-3" />
      CSV
    </button>
  );
}
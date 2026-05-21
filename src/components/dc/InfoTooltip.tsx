import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function InfoTooltip({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            aria-label="Methodology details"
            className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#00D4FF]/40 text-[#00D4FF] hover:bg-[#00D4FF]/10 transition"
          >
            <Info className="h-3 w-3" />
          </button>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="max-w-xs bg-[#0D1B2A] border border-[#00D4FF]/40 text-[#E2E8F0] text-xs leading-relaxed"
        >
          {children}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
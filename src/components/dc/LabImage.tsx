import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { Lightbox } from "./Lightbox";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  badge?: string;
  badgeColor?: string;
  className?: string;
};

export function LabImage({ src, alt, caption, badge, badgeColor = "#00D4FF", className }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <figure className={className}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative block w-full overflow-hidden rounded-lg border border-[#00D4FF]/30 bg-[#0D1B2A]/40 transition hover:border-[#00D4FF]/70"
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="block h-auto w-full transition group-hover:scale-[1.01]"
          />
          {badge && (
            <span
              className="absolute right-2 top-2 rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-wider"
              style={{
                background: `${badgeColor}1a`,
                border: `1px solid ${badgeColor}66`,
                color: badgeColor,
              }}
            >
              {badge}
            </span>
          )}
          <span className="pointer-events-none absolute bottom-2 right-2 inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#0D1B2A]/80 text-[#94A3B8] opacity-0 transition group-hover:opacity-100">
            <Maximize2 className="h-3.5 w-3.5" />
          </span>
        </button>
        {caption && (
          <figcaption className="mt-2 text-xs leading-relaxed text-[#94A3B8]">{caption}</figcaption>
        )}
      </figure>
      <Lightbox src={src} alt={alt} caption={caption} isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
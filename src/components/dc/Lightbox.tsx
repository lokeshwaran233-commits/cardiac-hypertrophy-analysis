import { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  isOpen: boolean;
  onClose: () => void;
};

export function Lightbox({ src, alt, caption, isOpen, onClose }: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#00D4FF]/40 bg-[#0D1B2A]/80 text-[#E2E8F0] hover:text-[#00D4FF] transition"
          >
            <X className="h-5 w-5" />
          </button>
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="relative flex max-h-full max-w-6xl flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className="max-h-[80vh] w-auto max-w-full rounded-lg border border-[#00D4FF]/30 shadow-2xl"
            />
            {caption && (
              <p className="max-w-3xl text-center text-xs leading-relaxed text-[#94A3B8]">{caption}</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
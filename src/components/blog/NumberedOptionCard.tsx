"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  number: string;
  category: string;
  title: string;
  body: ReactNode;
}

const VANGUARD_EASE = [0.32, 0.72, 0, 1] as const;

const CATEGORY_ICONS: Record<string, string> = {
  Option: "◇",
  Falle: "⚠",
  Schritt: "→",
  Fehler: "✕",
  Frage: "?",
  Kipppunkt: "⇅",
  Wahrheit: "·",
  Methode: "◉",
  Hebel: "↑",
  Phase: "○",
};

/**
 * Editorial Option/Falle/Schritt-Card mit Number-Badge in Stefanies Branding.
 * Wird vom ArticleBody erkannt für Pattern wie:
 *   **Option 1: Externe Geschäftsführung.** Du behältst...
 *   **Falle 2: Die Beratungs-Brücke.** Der Senior...
 */
export default function NumberedOptionCard({
  number,
  category,
  title,
  body,
}: Props) {
  const reduce = useReducedMotion();
  const icon = CATEGORY_ICONS[category] || "·";

  const motionProps = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-10%" },
        transition: { duration: 0.9, ease: VANGUARD_EASE },
      };

  return (
    <motion.div
      {...motionProps}
      className="group relative my-7 bg-canvas border border-slate/10 hover:border-[#C27347]/30 transition-all duration-500 overflow-hidden"
    >
      {/* Left accent rail */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C27347] via-[#C27347]/40 to-transparent" />

      <div className="grid grid-cols-[auto_1fr] gap-x-6 lg:gap-x-8 p-7 lg:p-9 pl-8 lg:pl-10">
        {/* Number Block */}
        <div className="flex flex-col items-start">
          <div className="font-serif text-[2.75rem] lg:text-[3.25rem] leading-[0.85] text-[#C27347] font-light tabular-nums">
            {number.padStart(2, "0")}
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-[#C27347]/60 text-sm font-serif" aria-hidden="true">
              {icon}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate/55 font-semibold">
              {category}
            </span>
          </div>
        </div>

        {/* Text-Block */}
        <div className="pt-2">
          <h4 className="font-serif text-xl lg:text-[1.625rem] text-slate font-medium leading-[1.25] mb-3 tracking-tight">
            {title}
          </h4>
          <div className="font-sans text-[16px] lg:text-[17px] text-slate/75 leading-[1.7] font-normal">
            {body}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

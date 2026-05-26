"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Props {
  /** Die Nummer (z.B. "1" aus "Frühwarnzeichen 1 — ...") */
  number: string;
  /** Die Kategorie (z.B. "Frühwarnzeichen", "Option", "Falle") */
  category: string;
  /** Der eigentliche Titel der Section */
  title: string;
}

const VANGUARD_EASE = [0.32, 0.72, 0, 1] as const;

/**
 * Editorial-Section-Heading mit großer Number-Counter und Kategorie-Label.
 * Wird automatisch für Headings wie "Frühwarnzeichen 3 — Loyalität blockiert Klarheit" verwendet.
 */
export default function NumberedSectionHeading({ number, category, title }: Props) {
  const reduce = useReducedMotion();
  const motionProps = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-15%" },
        transition: { duration: 0.9, ease: VANGUARD_EASE },
      };

  return (
    <motion.div
      {...motionProps}
      className="mt-20 mb-8 first:mt-0 grid grid-cols-[auto_1fr] gap-x-7 lg:gap-x-10 items-start"
    >
      <div className="flex flex-col items-start pt-2">
        <span className="font-serif text-[3.5rem] lg:text-[4.5rem] leading-[0.85] text-[#C27347] font-light tabular-nums">
          {number}
        </span>
        <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-slate/50 font-semibold">
          {category}
        </span>
      </div>
      <div className="pt-3">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-[2.5rem] text-slate font-medium tracking-tight leading-[1.15]">
          {title}
        </h2>
      </div>
    </motion.div>
  );
}

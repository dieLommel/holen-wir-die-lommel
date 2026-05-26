"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}

const VANGUARD_EASE = [0.32, 0.72, 0, 1] as const;

/**
 * Subtiles Reveal-Pattern für Section-Content beim Scrollen.
 * Respektiert prefers-reduced-motion automatisch (zero-motion bei a11y-setting).
 */
export default function RevealOnScroll({
  children,
  delay = 0,
  y = 24,
  duration = 1,
  className = "",
}: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration, ease: VANGUARD_EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

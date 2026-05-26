"use client";

import { motion } from "framer-motion";

const VANGUARD_EASE = [0.32, 0.72, 0, 1] as const;

export default function BlogHeroReveal() {
  return (
    <div className="absolute bottom-12 md:bottom-20 left-0 right-0 z-10 text-canvas">
      <div className="container mx-auto px-[5%] lg:px-[10%] max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: VANGUARD_EASE, delay: 0.2 }}
          className="font-serif italic text-xl text-canvas/85 flex items-center gap-4 mb-6"
        >
          <span className="block w-8 h-[1px] bg-canvas/40" />
          Aus meinem Schreibtisch
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: VANGUARD_EASE, delay: 0.35 }}
          className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] font-medium tracking-tight max-w-3xl text-balance"
        >
          Was Inhaber spüren,
          <br />
          <span className="italic text-canvas/80 font-light">aber nicht aussprechen.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: VANGUARD_EASE, delay: 0.6 }}
          className="font-sans text-base md:text-lg text-canvas/80 mt-8 max-w-xl leading-relaxed font-light"
        >
          Beiträge zu Übergabe, Krisenprävention und Entscheidungsebene. Vom Schreibtisch am Starnberger See.
        </motion.p>
      </div>
    </div>
  );
}

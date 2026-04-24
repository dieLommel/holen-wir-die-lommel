"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.05]);

  return (
    <footer ref={containerRef} className="relative px-[5%] pb-12 pt-32 lg:pb-12 lg:pt-48 bg-[#050505] text-surface overflow-hidden">
      
      {/* Massive Background Text Animation */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="absolute bottom-[-5%] left-0 w-full text-center pointer-events-none select-none z-0 flex justify-center"
      >
        <span className="font-serif text-[20vw] leading-[0.8] tracking-tighter text-white font-bold">
          LOMMEL
        </span>
      </motion.div>

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col min-h-[40vh] justify-between">
        <div className="flex flex-col items-center pb-16 lg:pb-32">
          
          <Link href="/" className="mb-16 md:mb-24 group">
            <span className="font-serif text-[2.5rem] md:text-5xl lg:text-6xl tracking-tight text-[#C27347] group-hover:text-white transition-colors duration-700">
              Holen wir die Lommel.
            </span>
          </Link>
          
          <ul className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-10 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start text-[11px] uppercase tracking-[0.25em] font-sans text-white/50 font-semibold">
            <li>
              <Link href="#problem" className="hover:text-white transition-colors duration-300">Ansatz</Link>
            </li>
            <li>
              <Link href="#loesung" className="hover:text-white transition-colors duration-300">Lösung</Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-white transition-colors duration-300">Über Mich</Link>
            </li>
            <li>
              <Link href="#angebote" className="hover:text-white transition-colors duration-300">Formate</Link>
            </li>
          </ul>
        </div>
        
        <div className="w-full">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
          
          <div className="flex flex-col-reverse items-center justify-between text-center md:flex-row font-sans text-white/30">
            <p className="mt-8 md:mt-0 text-[9px] uppercase tracking-widest font-semibold">© {new Date().getFullYear()} Stefanie Lommel.</p>
            <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-6 text-[9px] uppercase tracking-widest font-semibold md:grid-flow-col md:gap-x-10 md:gap-y-0">
              <li>
                <Link href="/impressum" className="hover:text-[#C27347] transition-colors duration-300">Impressum</Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-[#C27347] transition-colors duration-300">Datenschutz</Link>
              </li>
              <li>
                <Link href="/agb" className="hover:text-[#C27347] transition-colors duration-300">AGB</Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}

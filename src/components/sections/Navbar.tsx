"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav 
      className={`fixed z-[1000] w-full flex justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        isScrolled ? "top-6 lg:top-8" : "top-0"
      }`}
    >
      <div 
        className={`mx-auto flex max-w-[1400px] items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden ${
          isScrolled 
            ? "px-6 py-3.5 bg-surface/80 backdrop-blur-md border border-slate/10 rounded-full mx-[5%] shadow-[0_10px_40px_-10px_rgba(26,26,24,0.1)] w-[calc(100%-10%)] lg:w-[70%]" 
            : "px-[5%] md:px-8 h-24 bg-canvas border-b border-slate/10 rounded-none w-full"
        }`}
      >
        
        {/* Brand Name */}
        <Link href="/">
          <span className="font-serif text-[1.4rem] font-semibold tracking-tight text-slate whitespace-nowrap">
            Holen wir die Lommel.
          </span>
        </Link>
        
        {/* Mobile Menu Button */}
        <button className="flex flex-col items-center justify-center lg:hidden w-10 h-10 gap-1.5 focus:outline-none shrink-0">
          <div className="h-[1px] w-6 bg-slate transition-transform"></div>
          <div className="h-[1px] w-6 bg-slate transition-transform"></div>
        </button>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="#problem" className="font-sans text-[13px] font-medium tracking-normal text-slate/60 hover:text-slate transition-colors">
            Das Problem
          </Link>
          <Link href="#about" className="font-sans text-[13px] font-medium tracking-normal text-slate/60 hover:text-slate transition-colors">
            Über mich
          </Link>
          <Link href="#angebote" className="font-sans text-[13px] font-medium tracking-normal text-slate/60 hover:text-slate transition-colors">
            Formate
          </Link>
          
          {/* CTA - Vanguard Premium Pill */}
          <Link
            href="https://zeeg.me/info8723/15"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 rounded-full bg-[#C27347] pl-6 pr-2 py-2.5 flex items-center gap-4 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#A85E3A] hover:shadow-[0_4px_16px_rgba(194,115,71,0.3)] group"
          >
            <span>15 Min. Telefonat</span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:bg-white/30">
              <ArrowUpRight className="w-3 h-3 text-white" strokeWidth={2} />
            </div>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

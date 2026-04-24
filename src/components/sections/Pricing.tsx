"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const VANGUARD_EASE = [0.32, 0.72, 0, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: VANGUARD_EASE } },
};

export default function Pricing() {
  return (
    <section id="angebote" className="px-[5%] py-32 lg:py-48 bg-canvas border-b border-t border-slate/10 relative">

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: VANGUARD_EASE }}
          className="mx-auto mb-20 md:mb-32 max-w-2xl text-center"
        >
          <div className="font-serif italic text-slate/60 text-xl md:text-2xl mb-8">
            Handlungsfähigkeit
          </div>
          <h2 className="mb-8 text-5xl font-serif leading-[1.1] text-slate md:text-6xl lg:text-7xl">
            Der nächste <span className="font-script text-coral text-[4rem] md:text-[5.5rem] leading-none inline-block -rotate-2">Schritt</span>
          </h2>
          <p className="md:text-xl font-sans text-slate/80 leading-relaxed font-normal">
            Jede Situation ist einzigartig. Deshalb fangen wir immer mit Klarheit an.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          
          {/* Card 1 */}
          <motion.div variants={cardVariants} className="bg-surface border border-slate/10 flex flex-col p-8 lg:p-12">
            <h3 className="mb-2 text-3xl font-serif text-slate">Vorgespräch</h3>
            <p className="font-sans text-slate/40 text-[10px] uppercase tracking-widest font-semibold mb-8">Kostenlos · 15 Minuten</p>
            <div className="mb-8 h-px w-full bg-slate/10"></div>
            <p className="flex-1 font-sans text-slate/70 leading-relaxed mb-10 font-normal">
              Ein kurzes Abklopfen, ob die Chemie stimmt und ob meine Begleitung in deiner drängendsten Phase die richtige ist.
            </p>
            
            <Link
              href="#kontakt"
              className="mt-auto w-full text-center border-b border-slate/20 pb-2 text-xs font-sans font-semibold uppercase tracking-widest text-slate transition-all hover:border-slate/60"
            >
              Termin wählen
            </Link>
          </motion.div>

          {/* Card 2 - Highlighted */}
          <motion.div variants={cardVariants} className="bg-surface border border-slate flex flex-col p-8 lg:p-12 relative z-10">
            <div className="absolute top-0 left-0 bg-slate px-4 py-1 text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-surface">
              Akut-Empfehlung
            </div>
            
            <h3 className="mt-4 mb-2 text-4xl md:text-5xl font-serif text-slate tracking-tight font-medium leading-[1.1]">Die Entlastung</h3>
            <p className="font-sans text-slate/50 text-[10px] uppercase tracking-widest font-semibold mb-8">90 Minuten</p>
            <div className="mb-8 h-px w-full bg-slate/10"></div>
            <p className="flex-1 font-sans text-slate/80 leading-relaxed mb-10 font-normal text-lg">
              Wir gehen sofort in die Tiefe. 90 Minuten radikale Konzentration auf das Hauptproblem. Du bekommst ungeschönte Klarheit, woran es gerade wirklich hakt. Kein langes Vorgeplänkel, sondern erste Handlungsfähigkeit.
            </p>
            
            <Link
              href="#kontakt"
              className="mt-auto w-full rounded-full bg-mint border border-slate px-6 py-3 flex items-center justify-between text-xs font-sans font-semibold uppercase tracking-widest text-slate transition-all hover:bg-slate hover:text-surface shadow-[2px_2px_0px_0px_rgba(26,26,24,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
            >
              <span>Jetzt buchen</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={cardVariants} className="bg-surface border border-slate/10 flex flex-col p-8 lg:p-12">
            <h3 className="mb-2 text-3xl font-serif text-slate">Begleitung</h3>
            <p className="font-sans text-slate/40 text-[10px] uppercase tracking-widest font-semibold mb-8">Langfristig · Projektbezogen</p>
            <div className="mb-8 h-px w-full bg-slate/10"></div>
            <p className="flex-1 font-sans text-slate/70 leading-relaxed mb-10 font-normal">
              Längerfristige Prozessbegleitung vor und während komplexer struktureller Umbrüche in deinem Unternehmen.
            </p>
            
            <Link
              href="#kontakt"
              className="mt-auto w-full text-center border-b border-slate/20 pb-2 text-xs font-sans font-semibold uppercase tracking-widest text-slate transition-all hover:border-slate/60"
            >
              Kennenlerngespräch
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

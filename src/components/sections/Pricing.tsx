"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const VANGUARD_EASE = [0.32, 0.72, 0, 1];

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
    <section id="angebote" className="px-[5%] py-32 lg:py-56 bg-canvas border-b border-t border-slate/10 relative overflow-hidden">
      
      {/* Lake Background Video - Clearly Visible */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="/videos/see-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-canvas/80 via-transparent to-canvas/80"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: VANGUARD_EASE }}
          className="mx-auto mb-20 md:mb-32 max-w-2xl text-center"
        >
          <div className="font-serif italic text-[#C27347] text-xl md:text-2xl mb-8 flex items-center justify-center gap-4">
            <div className="w-8 h-[1px] bg-[#C27347]/40"></div>
            Handlungsfähigkeit
            <div className="w-8 h-[1px] bg-[#C27347]/40"></div>
          </div>
          <h2 className="mb-8 text-5xl font-serif leading-[1.05] text-slate md:text-6xl lg:text-[5rem] tracking-tight">
            Der nächste <span className="font-script text-[#A85E3A] text-[5rem] md:text-[6.5rem] leading-[0.6] inline-block -rotate-2 mt-4">Schritt</span>
          </h2>
          <p className="md:text-xl font-sans text-slate/75 leading-relaxed font-light mt-8">
            Jede Situation ist einzigartig. Deshalb fangen wir immer mit radikaler Klarheit an.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch relative"
        >
          
          {/* Card 1 */}
          <motion.div variants={cardVariants} className="bg-surface/50 backdrop-blur-sm border border-slate/10 flex flex-col p-8 lg:p-12 transition-all duration-500 hover:border-[#C27347]/30 hover:bg-surface">
            <h3 className="mb-2 text-3xl font-serif text-slate">Vorgespräch</h3>
            <p className="font-sans text-[#C27347] text-xs uppercase tracking-[0.15em] font-medium mb-8">Kostenlos · 15 Min. Telefonat</p>
            
            <div className="mb-8 h-px w-full bg-gradient-to-r from-slate/10 to-transparent"></div>
            
            <p className="font-sans text-slate/70 leading-[1.6] mb-8 font-light text-sm">
              Ein kurzes Abklopfen, ob die Chemie stimmt und ob meine Begleitung in deiner drängendsten Phase die richtige ist.
            </p>

            {/* Nutzenpunkte */}
            <ul className="flex-1 space-y-4 mb-10 list-outside text-slate/80">
              {[
                "Unverbindliches Kennenlernen",
                "Erste Einschätzung der Lage",
                "Risikofreier System-Check"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 font-sans text-sm font-light">
                  <ArrowUpRight className="size-4 shrink-0 text-[#C27347] mt-0.5" strokeWidth={1.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Link
              href="https://zeeg.me/info8723/15"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full text-center border-b border-slate/20 pb-4 text-xs font-sans font-semibold uppercase tracking-widest text-slate transition-all hover:border-[#C27347] hover:text-[#C27347]"
            >
              Termin wählen
            </Link>
          </motion.div>

          {/* Card 2 - Highlighted */}
          <motion.div variants={cardVariants} className="bg-surface border border-slate flex flex-col p-8 lg:p-12 relative z-10 shadow-[0_10px_40px_-15px_rgba(165,136,97,0.15)] transform lg:-translate-y-4">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C27347] to-[#A85E3A]"></div>
            <div className="absolute top-4 right-4 bg-[#C27347]/10 px-3 py-1.5 text-[10px] font-sans font-semibold uppercase tracking-widest text-[#C27347]">
              Akut-Empfehlung
            </div>
            
            <h3 className="mt-8 mb-2 text-4xl font-serif text-slate tracking-tight font-medium">Die Entlastung</h3>
            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-serif text-3xl text-slate font-semibold">320 €</span>
              <span className="font-sans text-slate/50 text-xs uppercase tracking-[0.15em] font-semibold">· 90 Minuten</span>
            </div>
            
            <div className="mb-8 h-px w-full bg-slate/10"></div>
            
            <p className="font-sans text-slate/80 leading-[1.6] mb-8 font-light text-[15px]">
              Kein langes Vorgeplänkel. 90 Minuten tiefgehende, radikale Konzentration auf das Kernproblem, um die erste Handlungsfähigkeit sofort wiederherzustellen.
            </p>

            {/* Nutzenpunkte (Enhanced) */}
            <ul className="flex-1 space-y-4 mb-10 list-outside text-slate">
              {[
                "Sofortige Identifikation des Blockers",
                "Ungeschönte, neutrale Klarheit",
                "Entwicklung erster Handlungsschritte",
                "Wiederherstellung mentaler Ruhe",
                "Audiomitschnitt der Session"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 font-sans text-[15px] font-normal">
                  <div className="rounded-full bg-[#C27347]/10 p-1 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C27347" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Link
              href="https://zeeg.me/info8723/90"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full rounded-full bg-[#C27347] border border-transparent px-6 py-4 flex items-center justify-between text-xs font-sans font-semibold uppercase tracking-widest text-white transition-all hover:bg-[#A85E3A] shadow-[0px_4px_14px_0px_rgba(194,115,71,0.3)] hover:shadow-[0px_6px_20px_0px_rgba(194,115,71,0.4)]"
            >
              <span>Jetzt buchen</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={cardVariants} className="bg-surface/50 backdrop-blur-sm border border-slate/10 flex flex-col p-8 lg:p-12 transition-all duration-500 hover:border-[#C27347]/30 hover:bg-surface">
            <h3 className="mb-2 text-3xl font-serif text-slate">Begleitung</h3>
            <p className="font-sans text-[#C27347] text-xs uppercase tracking-[0.15em] font-medium mb-8">Langfristig · Projekt</p>
            
            <div className="mb-0 h-px w-full bg-gradient-to-r from-slate/10 to-transparent"></div>
            
            <p className="font-sans text-slate/70 leading-[1.6] mt-8 mb-8 font-light text-sm">
              Längerfristige Prozessbegleitung vor und während komplexer struktureller Umbrüche im Unternehmen.
            </p>

            {/* Nutzenpunkte */}
            <ul className="flex-1 space-y-4 mb-10 list-outside text-slate/80">
              {[
                "Regelmäßiges Führungs-Sparring",
                "Begleitung von Schlüssel-Entscheidungen",
                "Organische Konfliktabfederung",
                "Bewahrung der System-Würde"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 font-sans text-sm font-light">
                  <ArrowUpRight className="size-4 shrink-0 text-[#C27347] mt-0.5" strokeWidth={1.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Link
              href="#kontakt"
              className="mt-auto w-full text-center border-b border-slate/20 pb-4 text-xs font-sans font-semibold uppercase tracking-widest text-slate transition-all hover:border-[#C27347] hover:text-[#C27347]"
            >
              Anfragen
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

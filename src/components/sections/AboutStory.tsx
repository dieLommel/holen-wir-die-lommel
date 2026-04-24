"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const VANGUARD_EASE = [0.32, 0.72, 0, 1] as const;

export default function AboutStory() {
  return (
    <section id="about" className="relative bg-canvas px-[5%] pt-16 pb-32 lg:py-48 overflow-hidden z-10 border-b border-slate/10">

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Mobile Headline (Only visible on mobile) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: VANGUARD_EASE }}
          className="lg:hidden w-full mb-12"
        >
          <div className="font-serif italic text-slate/50 text-xl md:text-2xl mb-6 flex items-center gap-4">
            <div className="w-8 h-[1px] bg-slate/20"></div>
            Über die Person
          </div>
          <h2 className="text-4xl md:text-5xl font-serif leading-[1.05] text-slate tracking-tight text-balance">
            "Wenn keiner weiß, wer es machen kann,<br />
            <span className="font-script text-[#A85E3A] text-[3.5rem] md:text-[5rem] leading-[0.8] mt-4 inline-block">dann holen wir mal die Lommel."</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 xl:gap-32 items-center">
          
          {/* Left Text Column (Body Text) */}
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: VANGUARD_EASE }}
            className="w-full flex flex-col justify-center order-2 lg:order-1 mt-12 lg:mt-0"
          >
            {/* Desktop Headline (Hidden on mobile) */}
            <div className="hidden lg:block">
              <div className="font-serif italic text-slate/50 text-xl md:text-2xl mb-8 flex items-center gap-4">
                <div className="w-8 h-[1px] bg-slate/20"></div>
                Über die Person
              </div>
              
              <h2 className="mb-12 text-5xl font-serif leading-[1.05] text-slate md:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] tracking-tight text-balance">
                "Wenn keiner weiß, wer es machen kann,<br />
                <span className="font-script text-[#A85E3A] text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] leading-[0.8] mt-6 inline-block">dann holen wir mal die Lommel."</span>
              </h2>
            </div>
            
            <div className="font-sans text-lg md:text-xl text-slate/80 space-y-8 max-w-xl font-normal leading-[1.6]">
              <p>
                Über 30 Jahre in großen Systemen und Konzernen. Von der Insolvenzbegleitung mit 200 Mitarbeitenden im Jahr 2008 bis zur tiefen Wandelbegleitung heute. Ich kenne das Gewicht von Entscheidungen, die Existenzen betreffen – aus eigener Erfahrung.
              </p>
              <p>
                Mein Weg führte mich vom Kopf-Füßler zum Herz-Lauscher. Nicht gegen den Verstand, sondern mit ihm. Denn Spiritualität ohne Bodenhaftung ist mir genauso fremd wie Business ohne Menschlichkeit.
              </p>
              
              <blockquote className="mt-12 pl-8 border-l border-[#C27347]/40 w-max">
                <p className="font-script text-4xl md:text-5xl text-slate leading-[1.2] tracking-normal opacity-90">
                  Struktur halten. <br/>Würde bewahren.
                </p>
              </blockquote>
            </div>
            
            <div className="mt-16">
              {/* Elegant Accent Button */}
              <a
                href="#kontakt"
                className="w-full sm:w-max rounded-full bg-[#C27347] border border-transparent px-8 py-3 flex items-center justify-between sm:justify-center gap-4 text-xs font-sans font-semibold uppercase tracking-widest text-white transition-all hover:bg-slate shadow-[3px_3px_0px_0px_rgba(26,26,24,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <span>Akut anfragen</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </motion.div>
          
          {/* Right Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: VANGUARD_EASE, delay: 0.2 }}
            className="w-full order-1 lg:order-2"
          >
            {/* Elegant Balanced Framed Image Container */}
            <div className="w-full mx-auto relative p-2 md:p-3 border-[1px] border-slate/10 bg-canvas/40 shadow-sm">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate/5">
                <Image
                  src="/images/stefanie-portrait.png"
                  alt="Stefanie Lommel"
                  fill
                  className="object-contain saturate-100 contrast-[1.05] hover:saturate-[1.1] transition-all duration-[1.5s] ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

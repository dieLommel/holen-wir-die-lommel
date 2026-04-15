"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GoldenRockScene } from "@/components/ui/GoldenRock3D";

const VANGUARD_EASE = [0.32, 0.72, 0, 1] as const;

const listItems = [
  {
    num: "01",
    title: "Maßgeschneiderte Logik",
    desc: <>Wir entwickeln punktgenaue Hebelwirkungen statt theoretischer Kataloge. <strong className="font-semibold text-slate">Der wahre Kern der Herausforderung wird direkt gelöst.</strong></>,
  },
  {
    num: "02",
    title: "Klarheit auf Entscheidungsebene",
    desc: <>Wahrer Wandel beginnt an der Spitze. Wir etablieren souveräne Führung und <strong className="font-semibold text-slate">Ruhe direkt im Auge des Orkans.</strong></>,
  },
  {
    num: "03",
    title: "Würde bewahren. Haltung zeigen.",
    desc: <>Ihre einmalige Unternehmenskultur wird geformt, niemals gepresst. Wir erneuern Systeme organisch und <strong className="font-semibold text-slate">wahren die Würde der Tradition.</strong></>,
  }
];

export default function Solution() {
  return (
    <section id="loesung" className="relative w-full min-h-screen bg-canvas text-slate overflow-hidden border-b border-slate/10 flex items-center py-24 lg:py-32">
      
      <div className="container mx-auto px-[5%] relative z-10 w-full flex flex-col items-center">
        
        {/* Centered Headline Block */}
        <div className="w-full max-w-5xl flex flex-col items-center text-center mb-20 lg:mb-28 mix-blend-multiply">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-6 lg:w-10 bg-gradient-to-l from-[#A85E3A]/40 to-transparent"></div>
            <div className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#A85E3A] to-slate/80 text-lg md:text-xl tracking-wider">
              Die Systemische Methode
            </div>
            <div className="h-[1px] w-6 lg:w-10 bg-gradient-to-r from-[#A85E3A]/40 to-transparent"></div>
          </div>
          
          <h2 className="font-serif text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] leading-[1.05] text-slate tracking-tight">
            Echtes Handwerk am System.<br />
            <span className="italic text-[#A85E3A] font-normal mt-3 inline-block">Präzision statt Standard.</span>
          </h2>
        </div>

        {/* Content Grid: Text Left, Ball Right */}
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: List Items */}
          <div className="flex flex-col gap-10">
            {listItems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: VANGUARD_EASE, delay: i * 0.15 }}
                className="relative grid grid-cols-[auto_1fr] gap-6 items-start pb-8 border-b border-slate/5 group"
              >
                <div className="font-serif text-[#C27347] text-xl font-medium tracking-tight mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.num}
                </div>
                <div>
                  <h3 className="block font-sans font-medium tracking-wide text-2xl text-slate mb-3">{item.title}</h3> 
                  <p className="font-sans text-lg text-slate/75 leading-[1.6] font-light max-w-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: 3D Rock */}
          <div className="w-full flex items-center justify-center pointer-events-auto">
            <GoldenRockScene />
          </div>

        </div>
      </div>
    </section>
  );
}

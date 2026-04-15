"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const VANGUARD_EASE = [0.32, 0.72, 0, 1];

const steps = [
  {
    num: "01",
    title: "Akut-Check",
    desc: "Ohne Schönreden schauen wir uns an, was wirklich brennt. Keine Blocker, keine Ausreden. Die reine Realität des Systems.",
    offset: "lg:mt-[24%]"
  },
  {
    num: "02",
    title: "Innere Knoten lösen",
    desc: "Wir legen frei, wem du unbewusst loyal bist und warum der Wandel stockt. Das muss spürbar werden, bevor es heilt.",
    offset: "lg:mt-[12%]"
  },
  {
    num: "03",
    title: "Würdevoll entscheiden",
    desc: "Vom Kopf-Füßler zum Herz-Lauscher: Wir erarbeiten Schritte, die wirtschaftlich zwingend und menschlich intakt sind.",
    offset: "lg:mt-0"
  }
];

export default function Process() {
  return (
    <section id="prozess" className="relative px-[5%] py-32 lg:py-56 overflow-hidden">
      
      {/* Nature Background Image & Overlays - Flattened for Heritage Editorial */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/nature_path_background.png" 
          alt="Beruhigende Wasser und Landschaft" 
          fill 
          sizes="100vw"
          className="object-cover sepia-[0.15] saturate-[0.8] opacity-30" 
          priority
        />
        <div className="absolute inset-0 bg-canvas/90 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col">
          
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: VANGUARD_EASE }}
            className="mb-32 md:mb-40 max-w-4xl"
          >
            <div className="font-serif italic text-[#C27347] text-xl md:text-2xl mb-8 flex items-center gap-4">
              <div className="w-8 h-[1px] bg-[#C27347]/40"></div>
              Der Weg ins Orkangebiet
            </div>
            <h2 className="text-5xl font-serif text-slate leading-[1.05] md:text-6xl lg:text-[5rem] tracking-tight text-balance">
              Ab in die Ruhe.<br />
              <span className="font-script text-[#A85E3A] text-[4.5rem] md:text-[6rem] lg:text-[7rem] leading-[0.7] mt-8 -rotate-2 inline-block">In drei Schritten.</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-3 md:gap-8 lg:gap-14 relative">
            
            {/* Elegant Rising Connecting Line */}
            <div className="hidden md:block absolute top-[55%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#C27347]/30 to-transparent -z-10 -rotate-[6deg]"></div>

            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 80, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.4, ease: VANGUARD_EASE, delay: i * 0.2 }}
                className={`relative group ${step.offset}`}
              >
                {/* Floating Number Behind */}
                <span className="absolute -top-16 -left-4 text-[8rem] lg:text-[10rem] font-serif italic tracking-tighter text-[#C27347]/5 font-bold z-0 select-none transition-all duration-700 group-hover:text-[#C27347]/10 group-hover:-translate-y-4">
                  {step.num}
                </span>

                {/* Flat Premium Print Card */}
                <div className="w-full h-full bg-surface/95 backdrop-blur-sm border border-slate/10 p-10 lg:p-12 flex flex-col items-start relative overflow-hidden transition-all duration-700 hover:border-[#C27347]/40 hover:shadow-[0_20px_40px_-15px_rgba(165,136,97,0.1)] hover:-translate-y-2 z-10">
                  
                  <div className="h-[1px] w-12 bg-gradient-to-r from-[#C27347] to-transparent mb-10 transition-all duration-500 group-hover:w-24"></div>
                  
                  <h3 className="mb-6 text-3xl font-serif text-slate tracking-tight">
                    {step.title}
                  </h3>
                  
                  <p className="font-sans text-lg text-slate/75 leading-[1.7] font-light">
                    {step.desc}
                  </p>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

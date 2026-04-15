"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const VANGUARD_EASE = [0.32, 0.72, 0, 1] as const;

const STICKY_CARDS = [
  {
    id: "01",
    label: "Die Last der Tradition",
    title: "Du spürst, dass das System wankt.",
    desc: "Das Unternehmen funktioniert noch auf dem Papier, aber die gewachsenen Strukturen zerbrechen leise. Entscheidungen werden vertagt, weil zu viele Existenzen betroffen sind. Die Krise kündigt sich bereits an.",
    img: "/sequence/ezgif-frame-001.jpg",
    imgClass: "object-cover saturate-[0.9] contrast-[1.05] sepia-[0.1] hover:saturate-100 hover:sepia-0 transition-all duration-1000",
    rotate: "lg:-rotate-1",
    imageLeft: true
  },
  {
    id: "02",
    label: "Der Akute Konflikt",
    title: "Eigentlich wissen wir es längst.",
    desc: "Du willst das Unternehmen in die Zukunft führen, ohne zu zerstören, was es ausmacht. Jede Alternative scheint einen fundamentalen Wert aufzugeben. Diese Zerrissenheit kostet jeden Tag Geld und Kraft.",
    img: "/images/ich_im_gespraech.jpg",
    imgClass: "object-cover object-[80%_center] md:object-right scale-[1.3] saturate-[0.9] contrast-[1.05] sepia-[0.1] hover:saturate-100 hover:sepia-0 transition-all duration-1000",
    rotate: "lg:rotate-[1.5deg]",
    imageLeft: false
  },
  {
    id: "03",
    label: "Die Angst vor Verrat",
    title: "Wir können das den Menschen nicht antun.",
    desc: "Jeder Ausweg fühlt sich an, als müsse man jemandes Vertrauen verraten. So wie früher geht es nicht mehr – aber wie dann? Diese Starre führt schleichend, aber todsicher in die Katastrophe.",
    img: "/images/stefanie-steinmauer.png",
    imgClass: "object-cover object-top saturate-[0.9] contrast-[1.05] sepia-[0.1] hover:saturate-100 hover:sepia-0 transition-all duration-1000",
    rotate: "lg:-rotate-[0.5deg]",
    imageLeft: false
  }
];

export default function ProblemSticky() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative bg-canvas text-slate overflow-hidden">
      
      {/* Background Journey Path - Western Map Style */}
      <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none flex justify-center z-0 opacity-60 hidden md:flex">
        <svg className="h-full w-full max-w-[800px] overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Faded Base Path */}
          <path 
            d="M 50 0 C 80 20, 20 40, 50 60 C 80 80, 20 100, 50 120"
            fill="none" 
            stroke="#C27347" 
            strokeWidth="0.2" 
             
            className="opacity-20"
          />
          {/* Animated Path */}
          <motion.path 
            d="M 50 0 C 80 20, 20 40, 50 60 C 80 80, 20 100, 50 120"
            fill="none" 
            stroke="#C27347" 
            strokeWidth="0.3" 
            
            style={{ pathLength }}
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl px-[5%] py-32 md:py-48 relative z-10">
        
        {/* Sticky Cascade Viewport */}
        <div className="relative pb-[20vh] lg:pb-[10vh]">
          {STICKY_CARDS.map((card, index) => (
            <div 
              key={card.id} 
              className="sticky top-8 lg:top-[15vh] mb-[15vh] lg:mb-[25vh] last:mb-0 flex items-center justify-center w-full"
              style={{ zIndex: index * 10 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 120, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: VANGUARD_EASE }}
                className={`w-full ${card.rotate} bg-surface border border-slate/10 rounded-none p-6 md:p-14 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center`}
              >
                {/* Text Inner Core */}
                <div className={`flex flex-col relative ${card.imageLeft ? 'lg:order-last lg:pl-10' : 'lg:pr-10'}`}>
                  <div className="flex items-center mb-10">
                    <span className="font-serif italic text-3xl font-light text-slate/40 mr-6">{card.id}</span>
                    <div className="h-px bg-slate/20 w-16 mr-6"></div>
                    <span className="font-serif italic text-lg text-slate">
                      {card.label}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-5xl md:text-6xl text-slate mb-8 font-medium leading-[1.1] text-balance tracking-tight">
                    {card.title}
                  </h3>
                  
                  <p className="font-sans text-lg md:text-xl text-slate/80 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                {/* Flat Image Box */}
                <div className={`border border-slate/10 relative w-full aspect-[4/5] lg:aspect-square ${card.imageLeft ? 'lg:order-first' : ''}`}>
                    <Image
                      src={card.img}
                      alt={card.label}
                      fill
                      className={`${card.imgClass}`}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
                
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

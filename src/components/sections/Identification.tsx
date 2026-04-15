"use client";

import { motion } from "framer-motion";

const VANGUARD_EASE = [0.32, 0.72, 0, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.4, ease: VANGUARD_EASE } },
};

export default function Identification() {
  return (
    <section id="problem" className="relative px-[5%] py-32 lg:py-56 bg-canvas text-slate overflow-hidden border-b border-slate/10">
      
      <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-center text-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-col items-center"
        >
          {/* Editorial Eyebrow */}
          <motion.div variants={itemVariants} className="font-serif italic text-[#C27347] text-xl md:text-2xl mb-10 flex items-center justify-center gap-4">
            <div className="w-8 h-[1px] bg-[#C27347]/40"></div>
            Status Quo
            <div className="w-8 h-[1px] bg-[#C27347]/40"></div>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="font-serif text-5xl md:text-6xl lg:text-[5rem] text-slate mb-12 leading-[1.05] tracking-tight">
            Wer ist der Mensch auf dem Bild? <br className="hidden md:block" />
            <span className="font-script text-[#A85E3A] text-6xl md:text-[6.5rem] lg:text-[8rem] mt-8 inline-block -rotate-2 leading-[0.7]">Das bist vielleicht du.</span>
          </motion.h2>
          
          <motion.div variants={itemVariants} className="h-px w-24 bg-gradient-to-r from-transparent via-slate/20 to-transparent mx-auto mb-14" />
          
          <motion.p variants={itemVariants} className="font-sans text-xl md:text-2xl text-slate leading-[1.6] font-light text-balance mx-auto max-w-3xl">
            Unternehmer, Inhaber oder Geschäftsführer an der Spitze eines etablierten Systems. 
            Du siehst glasklar den Bedarf für Innovation – doch die Fronten verhärten sich.
          </motion.p>
          
          <motion.p variants={itemVariants} className="font-sans text-lg md:text-xl text-slate/75 leading-[1.7] font-light text-balance mx-auto mt-8 max-w-2xl px-4">
            Zwischen unantastbarer Tradition, loyaler Beständigkeit und der gnadenlosen wirtschaftlichen Notwendigkeit stehst du oft ganz allein. An diesem Punkt entscheidet sich alles.
          </motion.p>
        </motion.div>
      </div>
      
    </section>
  );
}

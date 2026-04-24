"use client";

import { motion } from "framer-motion";

const VANGUARD_EASE = [0.32, 0.72, 0, 1] as const;

export default function FAQ() {
  return (
    <section id="faq" className="px-[5%] py-24 lg:py-32 bg-canvas text-slate border-t border-slate/10">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: VANGUARD_EASE }}
          className="flex flex-col items-start"
        >
          <div className="font-serif italic text-slate/60 text-xl md:text-2xl mb-6">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate mb-16 leading-tight tracking-tight">
            Noch etwas unklar?
          </h2>

          <div className="space-y-12 w-full">
            <div className="border-b border-slate/10 pb-8">
              <h3 className="font-serif text-2xl md:text-3xl text-slate mb-4">
                Ich bin Unternehmerin. Kann ich trotzdem dieses Angebot in Anspruch nehmen?
              </h3>
              <p className="font-sans text-lg md:text-xl text-slate/80 leading-relaxed font-normal">
                Auf jeden Fall, ja! Dieses Angebot bezieht sich nicht nur auf Unternehmer, sondern natürlich auch auf Unternehmerinnen.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

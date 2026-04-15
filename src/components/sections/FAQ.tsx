"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VANGUARD_EASE = [0.32, 0.72, 0, 1] as const;

const faqs = [
  {
    question: "Wie laufen die Gespräche ab?",
    answer:
      "Das 15-Minuten-Vorgespräch ist ein einfaches Telefonat – du rufst an oder wirst angerufen. Die 90-Minuten-Sessions finden online per Videocall statt, bequem von überall. Kein Anfahrtsweg, keine Wartezeiten. Die Atmosphäre ist vertraulich, direkt und auf Augenhöhe.",
  },
  {
    question: "Für wen ist das Angebot gedacht?",
    answer:
      "Für Inhaber, Geschäftsführer und Entscheidungsträger in Familien- und Traditionsunternehmen. Besonders dann, wenn du spürst, dass sich im Unternehmen etwas ändern muss – aber die bisherigen Ansätze nicht greifen oder auf Widerstand stoßen.",
  },
  {
    question: "Was unterscheidet das hier von klassischer Unternehmensberatung?",
    answer:
      "Hier geht es nicht um PowerPoint-Decks und standardisierte Frameworks. Ich arbeite direkt mit dir als Person – an deiner Klarheit, deiner Haltung und deiner Entscheidungsfähigkeit. Aus über 25 Jahren Erfahrung in Transformationsprozessen innerhalb von Traditionsunternehmen.",
  },
  {
    question: "Muss ich mich auf ein langfristiges Programm festlegen?",
    answer:
      "Nein. Du kannst mit einem einzelnen 15-Minuten-Akut-Telefonat starten – kostenfrei und unverbindlich. Danach entscheiden wir gemeinsam, ob und wie es weitergeht. Es gibt keine Vertragsbindung, keine Mindestlaufzeiten.",
  },
  {
    question: "Wie schnell kann ich einen Termin bekommen?",
    answer:
      "In der Regel innerhalb von 24 Stunden. Bei akutem Bedarf reagiere ich noch schneller. Über den Terminbuchungs-Link wählst du dir einen passenden Slot – und wir sprechen.",
  },
  {
    question: "Bleibt alles, was besprochen wird, vertraulich?",
    answer:
      "Absolut. Diskretion ist das Fundament dieser Arbeit. Alles, was im Gespräch geteilt wird, bleibt zwischen uns. Keine Berichte an Dritte, keine Dokumentation nach außen.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-[5%] py-32 lg:py-48 bg-canvas text-slate border-b border-slate/10">
      <div className="container mx-auto max-w-4xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: VANGUARD_EASE }}
          className="mb-20 lg:mb-28"
        >
          <div className="font-serif italic text-[#C27347] text-xl md:text-2xl mb-6 flex items-center gap-4">
            <div className="w-8 h-[1px] bg-[#C27347]/40"></div>
            Häufige Fragen
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate tracking-tight leading-[1.1]">
            Was du wissen solltest,<br />
            <span className="italic text-slate/60 font-light">bevor wir sprechen.</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: VANGUARD_EASE }}
              className="border-t border-slate/10 last:border-b"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full py-7 md:py-9 flex items-center justify-between text-left group cursor-pointer"
              >
                <span className="font-serif text-lg md:text-xl lg:text-[1.4rem] text-slate pr-8 leading-snug group-hover:text-[#C27347] transition-colors duration-500">
                  {faq.question}
                </span>
                <div className="relative w-5 h-5 flex-shrink-0">
                  {/* Horizontal line */}
                  <span className="absolute top-1/2 left-0 w-full h-[1px] bg-slate/40 -translate-y-1/2 transition-colors group-hover:bg-[#C27347]" />
                  {/* Vertical line that rotates away on open */}
                  <span 
                    className={`absolute top-0 left-1/2 w-[1px] h-full bg-slate/40 -translate-x-1/2 transition-all duration-500 group-hover:bg-[#C27347] ${
                      openIndex === index ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                    }`}
                  />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: VANGUARD_EASE }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-base md:text-lg text-slate/70 leading-[1.8] font-light pb-8 md:pb-10 pr-12 max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const VANGUARD_EASE = [0.32, 0.72, 0, 1] as const;

const distinctions = [
  {
    num: "01",
    title: "Anders als klassische Unternehmensberatung",
    body: "Keine Standard-Methode, kein Maßnahmenkatalog. Ich arbeite im Material deiner Situation, nicht aus dem Methodenkoffer.",
  },
  {
    num: "02",
    title: "Anders als Coaching",
    body: "Nicht primär an deiner inneren Entwicklung — sondern an der konkreten unternehmerischen Frage, die heute auf deinem Tisch liegt.",
  },
  {
    num: "03",
    title: "Anders als Mediation",
    body: "Mediation löst einen Konflikt. Wandelbegleitung baut eine Struktur, in der Konflikte gar nicht erst eskalieren.",
  },
];

export default function WandelbegleitungDefinition() {
  return (
    <section
      id="wandelbegleitung"
      aria-labelledby="wb-headline"
      className="relative w-full bg-canvas text-slate border-b border-slate/10 overflow-hidden"
    >
      <div className="container mx-auto px-[5%] py-24 lg:py-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: VANGUARD_EASE }}
          className="text-center mb-20 lg:mb-28"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-6 lg:w-10 bg-gradient-to-l from-[#A85E3A]/40 to-transparent" />
            <div className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#A85E3A] to-slate/80 text-lg md:text-xl tracking-wider">
              Klärung der Kategorie
            </div>
            <div className="h-[1px] w-6 lg:w-10 bg-gradient-to-r from-[#A85E3A]/40 to-transparent" />
          </div>

          <h2
            id="wb-headline"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate tracking-tight leading-[1.1] max-w-4xl mx-auto"
          >
            Was ist Wandelbegleitung?
            <br />
            <span className="italic text-[#A85E3A] font-normal">Und was sie nicht ist.</span>
          </h2>
        </motion.div>

        {/* Lead + Distinctions Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column: Lead */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: VANGUARD_EASE, delay: 0.1 }}
            className="lg:sticky lg:top-32"
          >
            <p className="font-serif text-2xl lg:text-[1.75rem] leading-[1.45] text-slate italic font-normal">
              Wandelbegleitung für Familienunternehmen ist{" "}
              <span className="not-italic font-medium">eine externe Begleitung auf Entscheidungsebene</span>
              . Sie hält wirtschaftliche Notwendigkeit und menschliche Verantwortung zusammen.
            </p>
            <p className="font-sans text-base md:text-lg text-slate/70 leading-[1.7] font-light mt-6 max-w-md">
              Sie arbeitet, bevor die Krise da ist. Und sie arbeitet ohne Methodenkoffer. Klarheit entsteht in der konkreten Situation.
            </p>
          </motion.div>

          {/* Right Column: Distinctions */}
          <div className="flex flex-col gap-8">
            {distinctions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: VANGUARD_EASE, delay: 0.2 + i * 0.12 }}
                className="relative grid grid-cols-[auto_1fr] gap-6 items-start pb-8 border-b border-slate/5 last:border-b-0"
              >
                <div className="font-serif text-[#C27347] text-xl font-medium tracking-tight mt-1 opacity-75">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-sans font-medium tracking-wide text-xl md:text-2xl text-slate mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-base lg:text-lg text-slate/70 leading-[1.65] font-light max-w-md">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: VANGUARD_EASE, delay: 0.4 }}
          className="mt-24 lg:mt-32 text-center max-w-3xl mx-auto"
        >
          <div className="font-serif italic text-2xl md:text-3xl lg:text-[2rem] leading-[1.5] text-slate">
            Wenn Verantwortung schwer wird, Klarheit fehlt und Wandel spürbar näher rückt:
            <br />
            <span className="text-[#A85E3A]">wird die Lommel geholt.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ClockAlert, PhoneCall } from "lucide-react";

const VANGUARD_EASE = [0.32, 0.72, 0, 1] as const;

export default function CTA() {
  return (
    <section id="kontakt" className="relative px-[5%] py-32 lg:py-56 bg-canvas text-slate overflow-hidden border-t border-slate/10">

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">
          
          {/* Editorial Split - Left Side (Urgency) */}
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: VANGUARD_EASE }}
            className="w-full flex flex-col"
          >
            <div className="font-serif italic text-[#C27347] text-xl md:text-2xl mb-12 flex items-center gap-4">
              <ClockAlert className="w-5 h-5 shrink-0" strokeWidth={1.5} />
              <span>24-Stunden Antwortgarantie</span>
            </div>
            
            <h2 className="mb-14 text-5xl font-serif text-slate md:text-6xl lg:text-[4.8rem] leading-[1.05] tracking-tight text-balance">
              Wollen wir den Nebel lichten?<br />
              <span className="font-script text-[#A85E3A] text-6xl md:text-[6rem] lg:text-[7rem] inline-block -rotate-2 mt-8 leading-[0.7]">Dann sprich mit mir.</span>
            </h2>
            
            <div className="mb-16 flex flex-col gap-8 max-w-lg mt-4">
              <p className="font-sans text-xl md:text-2xl text-slate leading-[1.6] font-light">
                So viel Geld kann es gar nicht kosten, wie wenn du hier zögerst. Nimm den Hörer in die Hand. Das sind 15 Minuten, die <strong className="font-semibold">sofort</strong> wirken:
              </p>
              
              <ul className="flex flex-col gap-6 mt-4">
                <li className="flex items-start gap-5">
                  <ArrowUpRight className="w-5 h-5 text-[#C27347] shrink-0 mt-1" strokeWidth={2} />
                  <p className="font-sans text-lg text-slate/80 font-light leading-relaxed">
                    <strong className="font-medium text-slate">Erste Entlastung:</strong> Ein geschützter Raum, um das akute Chaos auszusprechen und durchzuatmen.
                  </p>
                </li>
                <li className="flex items-start gap-5">
                  <ArrowUpRight className="w-5 h-5 text-[#C27347] shrink-0 mt-1" strokeWidth={2} />
                  <p className="font-sans text-lg text-slate/80 font-light leading-relaxed">
                    <strong className="font-medium text-slate">Klarheit statt Panik:</strong> Wir sortieren sofort die Symptome und identifizieren den wahren Kern des Sturms.
                  </p>
                </li>
                <li className="flex items-start gap-5">
                  <ArrowUpRight className="w-5 h-5 text-[#C27347] shrink-0 mt-1" strokeWidth={2} />
                  <p className="font-sans text-lg text-slate/80 font-light leading-relaxed">
                    <strong className="font-medium text-slate">Der nächste Schritt:</strong> Du legst auf und weißt exakt, was jetzt unmittelbar zu tun ist.
                  </p>
                </li>
              </ul>
            </div>

            <h3 className="text-[3.5rem] md:text-[4.5rem] font-script text-[#C27347]/30 mt-auto select-none -rotate-2 origin-left tracking-tight">
              Holen wir die Lommel.
            </h3>
          </motion.div>
          
          {/* Contact Module - Right Side */}
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: VANGUARD_EASE, delay: 0.2 }}
            className="w-full relative"
          >
            <div className="w-full relative">
              {/* Gold Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C27347] to-[#A85E3A] z-20"></div>
              
              {/* Inner Core */}
              <div className="relative w-full border border-slate/5 bg-surface/80 backdrop-blur-sm p-8 sm:p-14 overflow-hidden shadow-[0_20px_60px_-15px_rgba(26,26,24,0.05)]">
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10 text-center sm:text-left">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-[#C27347]/20 p-1">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image 
                        src="/images/stefanie_rote_kette.jpg" 
                        alt="Stefanie Lommel" 
                        fill 
                        className="object-cover object-[center_30%] saturate-100 contrast-[1.05]"
                      />
                    </div>
                  </div>
                  <div className="sm:mt-3">
                    <h4 className="font-serif text-[1.75rem] text-slate leading-tight mb-2 tracking-tight">Wie wollen wir sprechen?</h4>
                    <p className="font-sans text-[11px] text-[#C27347] font-bold tracking-[0.2em] uppercase mt-1">Direkter Draht zu Stefanie</p>
                  </div>
                </div>

                {/* Option 1: Calendly Booking */}
                <div className="mb-10">
                  <div className="flex items-center justify-center sm:justify-start gap-4 mb-5">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#C27347]/10">
                      <PhoneCall className="w-4 h-4 text-[#C27347]" strokeWidth={2} />
                    </div>
                    <span className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-slate">Direkt Termin vereinbaren</span>
                  </div>
                  <Link
                    href="https://zeeg.me/info8723/15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-none bg-[#C27347] px-6 py-4 flex items-center justify-between text-xs font-sans font-semibold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#A85E3A] hover:shadow-[0_0_24px_rgba(194,115,71,0.25)] group"
                  >
                    <span>15 Min. Telefonat buchen</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>

                <div className="flex items-center gap-4 mb-8 w-full mt-14">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-slate/10"></div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-slate/40 font-semibold">Oder schreib mir direkt</span>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-slate/10"></div>
                </div>

                {/* Email Alternative */}
                <a
                  href="mailto:info@dieLommel.de"
                  className="w-full flex items-center justify-between border border-slate/10 px-6 py-5 transition-all duration-500 hover:border-[#C27347]/40 hover:bg-[#C27347]/[0.03] group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#C27347]/10 flex items-center justify-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C27347" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </div>
                    <div>
                      <span className="font-serif text-lg text-slate block leading-tight">info@dieLommel.de</span>
                      <span className="font-sans text-[11px] text-slate/50 uppercase tracking-wider">E-Mail schreiben</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate/30 group-hover:text-[#C27347] transition-colors" strokeWidth={1.5} />
                </a>
                
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

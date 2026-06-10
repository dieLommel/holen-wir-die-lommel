"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const VANGUARD_EASE = [0.32, 0.72, 0, 1] as const;

const teaserPosts = [
  {
    slug: "fruehwarnzeichen-familienunternehmen",
    readingTime: "8 Min",
    title: "Sieben Frühwarnzeichen, dass dein Familienunternehmen kippt",
    teaser:
      "Die nicht-bilanziellen Signale vor der Strategie-Krise. Sieben Mechanismen, die jeder Inhaber kennt — und niemand vor dem Beirat ausspricht.",
  },
  {
    slug: "loslassen-ohne-dich-zu-verlieren",
    readingTime: "8 Min",
    title: "Loslassen, ohne dich zu verlieren — die letzten 18 Monate vor der Übergabe",
    teaser:
      "Was parallel zu Verträgen und Steuern passieren muss — sonst stehst du nach der Übergabe in einem Leben, das du nicht vorbereitet hast.",
  },
  {
    slug: "sparringspartner-statt-berater",
    readingTime: "7 Min",
    title: "Sparringspartner statt Berater — wann ein Vorgespräch Sinn macht",
    teaser:
      "Was unterscheidet einen Sparringspartner von einem Berater oder Coach? Wann macht ein 15-Minuten-Vorgespräch wirklich Sinn?",
  },
];

export default function AusMeinemSchreibtisch() {
  return (
    <section
      id="schreibtisch"
      aria-labelledby="schreibtisch-headline"
      className="w-full bg-[#F2EFE9] text-slate border-b border-slate/10"
    >
      <div className="container mx-auto px-[5%] py-24 lg:py-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: VANGUARD_EASE }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <div className="font-serif italic text-[#C27347] text-xl md:text-2xl mb-6 flex items-center gap-4">
            <div className="w-8 h-[1px] bg-[#C27347]/40"></div>
            Aus meinem Schreibtisch
          </div>
          <h2
            id="schreibtisch-headline"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate tracking-tight leading-[1.1]"
          >
            Was ich gerade
            <br />
            <span className="italic text-slate/60 font-light">aufschreibe.</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-slate/70 leading-relaxed mt-8 font-light max-w-xl">
            Hier teile ich, was mir in der Arbeit mit Inhabern auffällt. Manchmal kurz nach einer Session. Manchmal lange davor.
          </p>
        </motion.div>

        {/* Blog-Teaser-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {teaserPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: VANGUARD_EASE, delay: 0.15 + i * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group relative bg-surface p-8 lg:p-10 flex flex-col h-full border border-slate/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_56px_-16px_rgba(26,26,24,0.1)] overflow-hidden block"
              >
                {/* Top accent line on hover */}
                <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#C27347] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]" />

                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate/45">
                    {post.readingTime} Lesezeit
                  </span>
                </div>

                <h3 className="font-serif text-2xl lg:text-[1.75rem] text-slate leading-[1.2] mb-4 group-hover:text-[#C27347] transition-colors duration-500">
                  {post.title}
                </h3>

                <p className="font-sans text-base text-slate/70 leading-[1.65] font-light flex-grow mb-8">
                  {post.teaser}
                </p>

                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#C27347] font-semibold inline-flex items-center gap-2 mt-auto">
                  Weiterlesen
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* CTA "All articles" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: VANGUARD_EASE, delay: 0.6 }}
          className="mt-16 lg:mt-20 flex justify-center"
        >
          <Link
            href="/blog"
            className="group rounded-full bg-slate text-canvas pl-8 pr-2 py-2 flex items-center justify-center gap-6 text-[11px] font-sans font-semibold uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl shadow-slate/20 hover:shadow-slate/30"
          >
            <span>Alle Beiträge</span>
            <div className="w-10 h-10 rounded-full bg-canvas/10 flex items-center justify-center border border-canvas/10 group-hover:bg-canvas/20 transition-colors">
              <ArrowUpRight className="w-4 h-4 text-canvas" strokeWidth={1.5} />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

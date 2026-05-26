"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const VANGUARD_EASE = [0.32, 0.72, 0, 1] as const;

interface Props {
  title: string;
  excerpt: string;
  readingTime: string;
  publishedAt: string;
  coverImage: string;
  coverImageAlt: string;
}

export default function ArticleHero({
  title,
  excerpt,
  readingTime,
  publishedAt,
  coverImage,
  coverImageAlt,
}: Props) {
  return (
    <>
      {/* Hero-Bild oben — full-width, parallax-ready */}
      <header className="relative w-full h-[60vh] min-h-[480px] lg:h-[70vh] bg-slate overflow-hidden">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: VANGUARD_EASE }}
          className="absolute inset-0"
        >
          <Image
            src={coverImage}
            alt={coverImageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        {/* Gradient für Lesbarkeit unten */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate/10 to-slate/65 pointer-events-none" />

        {/* Back-Link links oben */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: VANGUARD_EASE, delay: 0.4 }}
          className="absolute top-24 lg:top-32 left-0 right-0 z-10"
        >
          <div className="container mx-auto px-[5%] lg:px-[10%] max-w-7xl">
            <Link
              href="/blog"
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-canvas/85 hover:text-canvas transition-colors duration-500 inline-flex items-center gap-2"
            >
              ← Zurück zum Schreibtisch
            </Link>
          </div>
        </motion.div>

        {/* Meta-Tags unten links auf Bild */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: VANGUARD_EASE, delay: 0.6 }}
          className="absolute bottom-12 left-0 right-0 z-10"
        >
          <div className="container mx-auto px-[5%] lg:px-[10%] max-w-7xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-canvas/95 flex items-center gap-3 flex-wrap">
              <span>{readingTime} Lesezeit</span>
              <span className="w-1 h-1 rounded-full bg-canvas/40" />
              <span>
                {new Date(publishedAt).toLocaleDateString("de-DE", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Title-Sektion direkt darunter, magazinähnlich — VOLLBREITES Display */}
      <section className="bg-canvas pt-20 pb-12 lg:pt-28 lg:pb-16 border-b border-slate/10">
        <div className="w-full px-[5%] lg:px-[6%] max-w-[88rem] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: VANGUARD_EASE, delay: 0.2 }}
            className="font-serif text-[2.25rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[6.5rem] leading-[0.98] text-slate font-medium tracking-tight text-balance mb-10"
          >
            {title}
          </motion.h1>

          {excerpt && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: VANGUARD_EASE, delay: 0.5 }}
              className="font-serif text-xl md:text-2xl lg:text-[1.625rem] text-slate/70 italic leading-[1.5] max-w-3xl"
            >
              {excerpt}
            </motion.p>
          )}
        </div>
      </section>
    </>
  );
}

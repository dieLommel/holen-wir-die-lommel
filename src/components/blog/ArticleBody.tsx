"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion, useReducedMotion } from "framer-motion";
import NumberedSectionHeading from "./NumberedSectionHeading";

interface Props {
  content: string;
}

const VANGUARD_EASE = [0.32, 0.72, 0, 1] as const;

/**
 * Pattern, das nummerierte Sections erkennt:
 * - "Frühwarnzeichen 3 — Loyalität blockiert Klarheit"
 * - "Falle 2: Die Beratungs-Brücke"
 * - "Option 4 — Schließung mit Würde"
 * - "Schritt 1 (heute, 60 Minuten)"
 */
const NUMBERED_PATTERN =
  /^(Frühwarnzeichen|Falle|Option|Schritt|Phase|Hebel|Welle|Kipppunkt|Frage|Welle)\s+(\d+)\s*[—–\-:]\s*(.+)$/;

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.8, ease: VANGUARD_EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function ArticleBody({ content }: Props) {
  return (
    <div className="article-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => {
            // Text aus children extrahieren
            const text = String(
              Array.isArray(children)
                ? children.map((c) => (typeof c === "string" ? c : "")).join("")
                : children
            ).trim();

            const match = text.match(NUMBERED_PATTERN);
            if (match) {
              return (
                <NumberedSectionHeading
                  number={match[2]}
                  category={match[1]}
                  title={match[3]}
                />
              );
            }

            return (
              <FadeIn>
                <h2 className="font-serif text-2xl md:text-3xl lg:text-[2.5rem] text-slate font-medium tracking-tight leading-[1.15] mt-20 mb-8 first:mt-0">
                  {children}
                </h2>
              </FadeIn>
            );
          },
          h3: ({ children }) => (
            <h3 className="font-serif text-xl lg:text-2xl text-slate font-medium tracking-tight leading-[1.25] mt-12 mb-4">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="font-sans text-[17px] lg:text-[18px] text-slate/80 leading-[1.85] mb-6 max-w-[68ch]">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="text-slate font-semibold">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          blockquote: ({ children }) => (
            <FadeIn>
              <blockquote className="relative my-14 lg:my-16 max-w-[58ch]">
                <span
                  aria-hidden="true"
                  className="absolute -top-6 -left-2 font-serif text-[6rem] leading-none text-[#C27347]/15 select-none pointer-events-none"
                >
                  &ldquo;
                </span>
                <div className="relative font-serif italic text-[1.65rem] md:text-[1.95rem] lg:text-[2.25rem] text-slate leading-[1.35] pl-7 border-l-2 border-[#C27347]">
                  {children}
                </div>
              </blockquote>
            </FadeIn>
          ),
          ul: ({ children }) => (
            <ul className="font-sans text-[17px] text-slate/80 leading-[1.85] mb-8 space-y-3 list-disc pl-6 marker:text-[#C27347] max-w-[68ch]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="font-sans text-[17px] text-slate/80 leading-[1.85] mb-8 space-y-3 list-decimal pl-6 marker:text-[#C27347] marker:font-serif marker:text-lg max-w-[68ch]">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="leading-[1.7] pl-1">{children}</li>,
          a: ({ children, href }) => (
            <a
              href={href}
              className="text-[#C27347] underline decoration-[#C27347]/30 underline-offset-2 hover:decoration-[#C27347] transition-all"
            >
              {children}
            </a>
          ),
          hr: () => (
            <div className="my-16 flex items-center justify-center gap-3">
              <span className="block w-12 h-[1px] bg-slate/20" />
              <span className="block w-1 h-1 rounded-full bg-[#C27347]/40" />
              <span className="block w-12 h-[1px] bg-slate/20" />
            </div>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-10 max-w-full">
              <table className="w-full font-sans text-[15px] border-collapse">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="text-left font-semibold text-slate border-b border-slate/25 py-3 px-4">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="text-slate/75 border-b border-slate/10 py-3 px-4 align-top">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

/**
 * Editorial-CTA-Block am Artikel-Ende. Mit Reveal-Animation.
 */
export function ArticleCta() {
  const reduce = useReducedMotion();
  const motionProps = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-5%" },
        transition: { duration: 1, ease: VANGUARD_EASE },
      };

  return (
    <motion.aside
      {...motionProps}
      className="relative bg-slate text-canvas mt-20 lg:mt-28 overflow-hidden rounded-sm"
    >
      {/* Decorative diagonal accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-64 h-64 bg-[#C27347]/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
      />
      <div className="relative p-10 lg:p-16">
        <div className="font-serif italic text-[#D69970] text-lg mb-5 flex items-center gap-3">
          <span className="block w-8 h-[1px] bg-[#D69970]/50" />
          Der nächste Schritt
        </div>
        <h3 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] text-canvas font-medium mb-6 tracking-tight">
          In 15 Minuten weißt du,
          <br />
          <span className="italic text-canvas/75 font-light">ob es passt.</span>
        </h3>
        <p className="font-sans text-base lg:text-lg text-canvas/80 mb-10 leading-relaxed font-light max-w-xl">
          Ein kurzes Vorgespräch klärt, ob meine Begleitung in deiner aktuellen Phase die richtige ist. Kostenlos. Vertraulich. Kein Verkaufs-Pitch.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="https://zeeg.me/info8723/15"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full bg-surface text-slate pl-7 pr-2 py-2 flex items-center gap-5 text-[11px] font-sans font-semibold uppercase tracking-[0.2em] transition-all duration-500 shadow-lg hover:shadow-xl"
          >
            <span>15 Min · kostenlos</span>
            <div className="w-10 h-10 rounded-full bg-slate/10 flex items-center justify-center border border-slate/5 group-hover:bg-slate/15 transition-colors">
              <ArrowUpRight className="w-4 h-4 text-slate group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
            </div>
          </Link>
          <Link
            href="https://zeeg.me/info8723/90"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full border border-canvas/20 text-canvas pl-7 pr-2 py-2 flex items-center gap-5 text-[11px] font-sans font-semibold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-canvas/5"
          >
            <span>90 Min · 320 €</span>
            <div className="w-10 h-10 rounded-full bg-canvas/10 flex items-center justify-center border border-canvas/10">
              <ArrowUpRight className="w-4 h-4 text-canvas group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
            </div>
          </Link>
        </div>
      </div>
    </motion.aside>
  );
}

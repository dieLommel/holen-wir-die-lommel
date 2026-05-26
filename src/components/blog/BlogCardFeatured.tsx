"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface Props {
  post: BlogPost;
}

const VANGUARD_EASE = [0.32, 0.72, 0, 1] as const;

/**
 * Featured Hero-Card für den ersten Blog-Post auf dem Index.
 * Magazine-Stil: großes Bild links, Text rechts, asymmetrisch.
 */
export default function BlogCardFeatured({ post }: Props) {
  const reduce = useReducedMotion();
  const cover = post.frontmatter.coverImage || "/images/blog/blog-hero.jpg";
  const alt = post.frontmatter.coverImageAlt || post.frontmatter.title;

  const motionProps = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-10%" },
        transition: { duration: 1.2, ease: VANGUARD_EASE },
      };

  return (
    <motion.article {...motionProps} className="mb-20 lg:mb-28">
      <Link
        href={`/blog/${post.slug}`}
        className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
      >
        {/* Image — 7/12 columns */}
        <div className="lg:col-span-7 relative w-full aspect-[3/2] overflow-hidden bg-slate/5">
          <Image
            src={cover}
            alt={alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
          />
        </div>

        {/* Text — 5/12 columns */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="font-serif italic text-[#C27347] text-base mb-5 flex items-center gap-3">
            <span className="block w-8 h-[1px] bg-[#C27347]/40" />
            Aktuell
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] text-slate font-medium tracking-tight leading-[1.05] mb-6">
            {post.frontmatter.title}
          </h2>

          <p className="font-sans text-lg text-slate/70 leading-[1.65] mb-8 font-light max-w-xl">
            {post.frontmatter.excerpt}
          </p>

          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate/45">
              {post.readingTime} Lesezeit
            </span>
            <span className="block w-1 h-1 rounded-full bg-slate/30" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate/45">
              {new Date(post.frontmatter.publishedAt).toLocaleDateString("de-DE", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <div className="inline-flex items-center gap-3 self-start text-slate group-hover:text-[#C27347] transition-colors duration-500">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em]">
              Weiterlesen
            </span>
            <span className="w-10 h-10 rounded-full border border-slate/20 flex items-center justify-center group-hover:border-[#C27347] group-hover:bg-[#C27347]/5 transition-all duration-500">
              <ArrowUpRight
                className="w-4 h-4 group-hover:rotate-12 transition-transform"
                strokeWidth={1.5}
              />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

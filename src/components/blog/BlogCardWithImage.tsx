"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

const VANGUARD_EASE = [0.32, 0.72, 0, 1] as const;

interface Props {
  post: BlogPost;
  index?: number;
}

export default function BlogCardWithImage({ post, index = 0 }: Props) {
  const cover = post.frontmatter.coverImage || "/images/blog/blog-hero.jpg";
  const alt = post.frontmatter.coverImageAlt || post.frontmatter.title;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, ease: VANGUARD_EASE, delay: 0.1 + index * 0.08 }}
      className="h-full"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col h-full"
      >
        {/* Cover Image */}
        <div className="relative w-full aspect-[3/2] overflow-hidden bg-slate/5 mb-7">
          <Image
            src={cover}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
          />
        </div>

        {/* Card-Body — kein Card-Background, editorial-clean */}
        <div className="flex flex-col flex-grow">
          <h2 className="font-serif text-2xl lg:text-[1.875rem] leading-[1.15] text-slate font-medium mb-4 tracking-tight group-hover:text-[#A85E3A] transition-colors duration-500">
            {post.frontmatter.title}
          </h2>

          <p className="font-sans text-base text-slate/70 leading-[1.65] font-light flex-grow mb-7">
            {post.frontmatter.excerpt}
          </p>

          {/* Footer-Meta */}
          <div className="flex items-center justify-between pt-5 border-t border-slate/10">
            <div className="font-mono text-[10px] text-slate/45 uppercase tracking-[0.08em] flex items-center gap-3">
              <span>{post.readingTime}</span>
              <span className="w-1 h-1 rounded-full bg-slate/30" />
              <span>
                {new Date(post.frontmatter.publishedAt).toLocaleDateString("de-DE", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-canvas border border-slate/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#C27347] group-hover:border-[#C27347] group-hover:rotate-[-12deg]">
              <ArrowUpRight
                className="w-4 h-4 text-slate/60 transition-colors duration-500 group-hover:text-canvas"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

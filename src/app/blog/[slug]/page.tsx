import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Header } from "@/components/ui/header-1";
import Footer from "@/components/sections/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import ArticleHero from "@/components/blog/ArticleHero";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog";
import { buildArticleSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Beitrag nicht gefunden" };

  const { frontmatter } = post;
  const ogImage = frontmatter.coverImage || frontmatter.ogImage || "/images/blog/blog-hero.jpg";
  return {
    title: `${frontmatter.title} | Stefanie Lommel`,
    description: frontmatter.metaDescription,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.metaDescription,
      type: "article",
      publishedTime: frontmatter.publishedAt,
      modifiedTime: frontmatter.updatedAt || frontmatter.publishedAt,
      images: [ogImage],
      authors: ["Stefanie Lommel"],
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.metaDescription,
    },
  };
}

export default async function BlogArticle({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const cover = post.frontmatter.coverImage || "/images/blog/blog-hero.jpg";
  const alt = post.frontmatter.coverImageAlt || post.frontmatter.title;

  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <Header />
      <JsonLd data={buildArticleSchema(post)} />

      <ArticleHero
        title={post.frontmatter.title}
        excerpt={post.frontmatter.excerpt}
        readingTime={post.readingTime}
        publishedAt={post.frontmatter.publishedAt}
        coverImage={cover}
        coverImageAlt={alt}
      />

      {/* Article Body */}
      <article className="bg-canvas py-20 lg:py-28">
        <div className="container mx-auto px-[5%] max-w-3xl">
          <div className="prose-lommel">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 className="font-serif text-3xl md:text-4xl text-slate font-medium tracking-tight leading-[1.18] mt-16 mb-6 first:mt-0">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-serif text-2xl text-slate font-medium tracking-tight leading-[1.25] mt-10 mb-4">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="font-sans text-[1.0625rem] text-slate/80 leading-[1.85] mb-6">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="text-slate font-semibold">{children}</strong>
                ),
                em: ({ children }) => <em className="italic">{children}</em>,
                blockquote: ({ children }) => (
                  <blockquote className="font-serif italic text-2xl md:text-3xl text-slate leading-[1.4] border-l-2 border-[#C27347] pl-7 py-2 my-12">
                    {children}
                  </blockquote>
                ),
                ul: ({ children }) => (
                  <ul className="font-sans text-[1.0625rem] text-slate/80 leading-[1.85] mb-6 space-y-2 list-disc pl-6 marker:text-[#C27347]">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="font-sans text-[1.0625rem] text-slate/80 leading-[1.85] mb-6 space-y-2 list-decimal pl-6 marker:text-[#C27347]">
                    {children}
                  </ol>
                ),
                li: ({ children }) => <li className="leading-[1.7]">{children}</li>,
                a: ({ children, href }) => (
                  <a
                    href={href}
                    className="text-[#C27347] underline decoration-[#C27347]/30 underline-offset-2 hover:decoration-[#C27347] transition-all"
                  >
                    {children}
                  </a>
                ),
                hr: () => <hr className="my-12 border-slate/10" />,
                table: ({ children }) => (
                  <div className="overflow-x-auto my-8">
                    <table className="w-full font-sans text-sm border-collapse">{children}</table>
                  </div>
                ),
                th: ({ children }) => (
                  <th className="text-left font-semibold text-slate border-b border-slate/20 py-3 px-4">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="text-slate/75 border-b border-slate/10 py-3 px-4">{children}</td>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* CTA-Block */}
          <aside className="bg-slate text-canvas p-10 lg:p-14 mt-16 lg:mt-20 rounded-sm">
            <div className="font-serif italic text-[#D69970] text-lg mb-4 flex items-center gap-3">
              <span className="block w-6 h-[1px] bg-[#D69970]/50" />
              Der nächste Schritt
            </div>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-[2.25rem] leading-[1.2] text-canvas font-medium mb-5">
              In 15 Minuten weißt du,
              <br />
              <span className="italic text-canvas/75 font-light">ob es passt.</span>
            </h3>
            <p className="font-sans text-base text-canvas/80 mb-8 leading-relaxed font-light max-w-xl">
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
                <div className="w-10 h-10 rounded-full bg-slate/10 flex items-center justify-center border border-slate/5">
                  <ArrowUpRight className="w-4 h-4 text-slate" strokeWidth={1.5} />
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
                  <ArrowUpRight className="w-4 h-4 text-canvas" strokeWidth={1.5} />
                </div>
              </Link>
            </div>
          </aside>

          <div className="mt-20 lg:mt-24 text-center border-t border-slate/10 pt-12">
            <Link
              href="/blog"
              className="font-serif italic text-lg text-[#C27347] hover:text-[#A85E3A] transition-colors duration-500"
            >
              ← Zurück zum Schreibtisch
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

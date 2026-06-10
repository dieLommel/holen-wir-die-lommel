import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/ui/header-1";
import Footer from "@/components/sections/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import ArticleHero from "@/components/blog/ArticleHero";
import ArticleBody, { ArticleCta } from "@/components/blog/ArticleBody";
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

      {/* Article Body — editorial-magazine layout */}
      <article className="bg-canvas py-20 lg:py-28">
        <div className="container mx-auto px-[5%] max-w-4xl">
          <ArticleBody content={post.content} />
          <ArticleCta />

          <div className="mt-20 lg:mt-24 text-center border-t border-slate/10 pt-12">
            <Link
              href="/blog"
              className="font-serif italic text-lg text-[#C27347] hover:text-[#C27347] transition-colors duration-500 inline-flex items-center gap-2"
            >
              <span aria-hidden="true">←</span>
              <span>Zurück zum Schreibtisch</span>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

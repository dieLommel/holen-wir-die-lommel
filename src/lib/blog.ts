import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type FunnelStage = "Awareness" | "Consideration" | "Decision" | "Trust";

export interface BlogPostFrontmatter {
  title: string;
  slug: string;
  funnelStage: FunnelStage;
  publishedAt: string; // ISO Date
  updatedAt?: string;
  primaryKeyword: string;
  secondaryKeywords?: string[];
  excerpt: string;
  metaDescription: string;
  storyAnchor?: string;
  ogImage?: string;
  coverImage?: string; // /images/blog/articles/<slug>.png — Beitragsbild
  coverImageAlt?: string;
}

export interface BlogPost {
  frontmatter: BlogPostFrontmatter;
  content: string; // Raw Markdown (wird via react-markdown gerendert)
  readingTime: string; // e.g. "8 Min"
  slug: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/** Liste aller Blog-Slugs (für generateStaticParams) */
export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
    .map((s) => s.replace(/^\d+-/, ""));
}

/** Datei zu Slug finden (mit oder ohne Number-Prefix) */
function findFileBySlug(slug: string): string | null {
  if (!fs.existsSync(BLOG_DIR)) return null;
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  const match = files.find(
    (f) => f === `${slug}.md` || f.replace(/^\d+-/, "") === `${slug}.md`,
  );
  return match ? path.join(BLOG_DIR, match) : null;
}

/** Einzelnen Blog-Post laden */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = findFileBySlug(slug);
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const fm = data as BlogPostFrontmatter;

  const stats = readingTime(content);
  const readMin = `${Math.max(1, Math.round(stats.minutes))} Min`;

  return {
    frontmatter: { ...fm, slug },
    content,
    readingTime: readMin,
    slug,
  };
}

/** Alle Blog-Posts laden (für Index) */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/^\d+-/, "").replace(/\.md$/, "");
      return getBlogPostBySlug(slug);
    }),
  );
  return posts
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => {
      const aDate = new Date(a.frontmatter.publishedAt).getTime();
      const bDate = new Date(b.frontmatter.publishedAt).getTime();
      return bDate - aDate;
    });
}

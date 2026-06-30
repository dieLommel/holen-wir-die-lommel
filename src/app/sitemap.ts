import type { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/lib/blog";

const BASE = "https://www.dielommel.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/blog", "/datenschutz", "/impressum", "/agb"];
  const blogRoutes = getAllBlogSlugs().map((slug) => `/blog/${slug}`);

  return [...staticRoutes, ...blogRoutes].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path.startsWith("/blog/") ? 0.7 : 0.5,
  }));
}

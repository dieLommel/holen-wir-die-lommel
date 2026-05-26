import Image from "next/image";
import type { Metadata } from "next";
import { Header } from "@/components/ui/header-1";
import Footer from "@/components/sections/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import BlogCardWithImage from "@/components/blog/BlogCardWithImage";
import BlogHeroReveal from "@/components/blog/BlogHeroReveal";
import { getAllBlogPosts } from "@/lib/blog";
import { buildItemListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Aus meinem Schreibtisch | Stefanie Lommel",
  description:
    "Beiträge zu Übergabe, Krisenprävention und Entscheidungsebene — geschrieben am Starnberger See von Stefanie Lommel, Wandelbegleiterin für Familienunternehmen.",
  openGraph: {
    title: "Aus meinem Schreibtisch | Stefanie Lommel",
    description:
      "Beiträge zu Übergabe, Krisenprävention und Entscheidungsebene — vom Schreibtisch am Starnberger See.",
    images: ["/images/blog/blog-hero.jpg"],
    type: "website",
  },
};

export default async function BlogIndex() {
  const posts = await getAllBlogPosts();

  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <Header />
      <JsonLd data={buildItemListSchema(posts)} />

      {/* HERO mit Bild + animated Reveal */}
      <header className="relative w-full h-[78vh] min-h-[560px] bg-slate overflow-hidden">
        <Image
          src="/images/blog/blog-hero.jpg"
          alt="Schreibtisch mit Buch und Blick auf den Starnberger See im Morgenlicht"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate/15 to-slate/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate/35 via-transparent to-transparent pointer-events-none" />

        <BlogHeroReveal />
      </header>

      {/* Blog-Grid mit Cards + Bildern */}
      <section className="bg-canvas py-24 lg:py-32 border-b border-slate/10">
        <div className="container mx-auto px-[5%] max-w-7xl">
          {posts.length === 0 ? (
            <p className="text-center text-slate/60 font-sans">
              Noch keine Beiträge veröffentlicht.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {posts.map((post, idx) => (
                <BlogCardWithImage key={post.slug} post={post} index={idx} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

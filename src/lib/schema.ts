/**
 * Schema.org JSON-LD Helpers für dielommel.de
 *
 * Zweck: einheitliche, type-sichere Schema-Generierung für SEO + GEO (AI-Citations).
 * Wird via <JsonLd data={...} /> in den Page-Components injiziert.
 */

import type { BlogPost } from "@/lib/blog";

const SITE_URL = "https://dielommel.de";
const PERSON_ID = `${SITE_URL}/#stefanie-lommel`;
const ORG_ID = `${SITE_URL}/#organization`;

// ─────────────────────────────────────────────────────────────────────────────
// Person — Stefanie Lommel (auf jeder Page im Layout)
// ─────────────────────────────────────────────────────────────────────────────

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Stefanie Lommel",
    jobTitle: "Wandelbegleiterin für Familienunternehmen",
    description:
      "Begleitet Inhaber:innen und Geschäftsführer:innen von Familien- und Traditionsunternehmen durch komplexe Wandelprozesse — bevor Wandel zur Krise wird.",
    url: SITE_URL,
    image: `${SITE_URL}/images/stefanie-portrait.jpg`,
    worksFor: { "@id": ORG_ID },
    homeLocation: {
      "@type": "Place",
      name: "Starnberger See, Deutschland",
    },
    knowsAbout: [
      "Wandelbegleitung Familienunternehmen",
      "Generationswechsel Mittelstand",
      "Sparring auf Entscheidungsebene",
      "Krisenprävention Familienunternehmen",
      "Mediation Familienunternehmen",
    ],
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Organization — Holen wir die Lommel
// ─────────────────────────────────────────────────────────────────────────────

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Holen wir die Lommel",
    alternateName: "Stefanie Lommel — Wandelbegleitung",
    url: SITE_URL,
    founder: { "@id": PERSON_ID },
    description:
      "Wandelbegleitung für Familien- und Traditionsunternehmen. Bevor es kippt.",
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Service — Wandelbegleitung
// ─────────────────────────────────────────────────────────────────────────────

export function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/#wandelbegleitung-service`,
    name: "Wandelbegleitung für Familienunternehmen",
    alternateName: ["Holen wir die Lommel", "Sparring auf Entscheidungsebene"],
    description:
      "Externe Begleitung auf Entscheidungsebene für Inhaber:innen und Geschäftsführer:innen in Familien- und Traditionsunternehmen. Arbeitet vor der Krise, nicht danach. Bringt keine Methode mit, sondern Klarheit.",
    provider: { "@id": PERSON_ID },
    areaServed: {
      "@type": "Country",
      name: "Deutschland",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Inhaber:innen, Gesellschafter:innen und Geschäftsführer:innen von Familien- und Traditionsunternehmen",
    },
    serviceType: "Wandelbegleitung",
    url: `${SITE_URL}/#wandelbegleitung`,
    offers: [
      {
        "@type": "Offer",
        name: "15-Minuten-Vorgespräch",
        price: "0",
        priceCurrency: "EUR",
        description: "Kostenloses telefonisches Vorgespräch, unverbindlich, vertraulich",
      },
      {
        "@type": "Offer",
        name: "90-Minuten-Entlastungssession",
        price: "320",
        priceCurrency: "EUR",
        description:
          "Tiefgehende 90-Minuten-Session zur Identifikation des Kernproblems, mit Audio-Mitschnitt",
      },
    ],
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQPage — für FAQ-Sektion auf Homepage
// ─────────────────────────────────────────────────────────────────────────────

interface FaqItem {
  question: string;
  answer: string;
}

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Article — für Single-Blog-Pages
// ─────────────────────────────────────────────────────────────────────────────

export function buildArticleSchema(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: post.frontmatter.title,
    description: post.frontmatter.metaDescription,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    datePublished: post.frontmatter.publishedAt,
    dateModified: post.frontmatter.updatedAt || post.frontmatter.publishedAt,
    keywords: [
      post.frontmatter.primaryKeyword,
      ...(post.frontmatter.secondaryKeywords || []),
    ].join(", "),
    image: post.frontmatter.ogImage
      ? `${SITE_URL}${post.frontmatter.ogImage}`
      : `${SITE_URL}/images/blog/blog-hero.jpg`,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    about: {
      "@type": "Thing",
      name: post.frontmatter.primaryKeyword,
    },
    inLanguage: "de-DE",
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// ItemList — für Blog-Index
// ─────────────────────────────────────────────────────────────────────────────

export function buildItemListSchema(posts: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/blog/#itemlist`,
    name: "Aus meinem Schreibtisch — Beiträge von Stefanie Lommel",
    itemListElement: posts.map((post, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${SITE_URL}/blog/${post.slug}`,
      name: post.frontmatter.title,
    })),
  };
}

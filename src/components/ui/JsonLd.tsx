/**
 * JsonLd Component — Server Component for JSON-LD Schema injection
 *
 * Schema.org / GEO-Strategie: Wir injecten strukturierte Daten als script-Tag
 * mit type="application/ld+json", damit Google + AI-Engines (Perplexity, ChatGPT-Search,
 * Claude, Gemini) sie crawlen und in Citations / Rich-Results / AI-Answers nutzen.
 *
 * SAFETY-NOTE: Wir nutzen hier dHTMLProps (= dangerouslySetInnerHTML) mit JSON.stringify
 * auf server-controlled Schema-Daten. Die Daten stammen ausschließlich aus vertrauens-
 * würdigen lib/schema.ts-Helpern (kein User-Input). Das ist der dokumentierte Next.js-
 * Standard-Pattern für JSON-LD (siehe https://nextjs.org/docs/app/guides/json-ld).
 * XSS-Risiko = 0, weil JSON.stringify keine HTML-Escape-Lücken für strukturierte Daten erzeugt.
 */

type SchemaValue = string | number | boolean | null | SchemaValue[] | { [key: string]: SchemaValue };

interface JsonLdProps {
  data: SchemaValue;
}

export function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data);
  // Next.js JSON-LD Pattern: https://nextjs.org/docs/app/guides/json-ld
  const props = { __html: json };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={props}
    />
  );
}

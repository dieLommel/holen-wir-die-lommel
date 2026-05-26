import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Caveat } from "next/font/google";
import Script from "next/script";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildPersonSchema, buildOrganizationSchema, buildServiceSchema } from "@/lib/schema";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dielommel.de"),
  title: "Holen wir die Lommel | Wandelbegleitung für Familienunternehmen",
  description:
    "Wandelbegleitung für Familien- und Traditionsunternehmen. Bevor es kippt. Exklusives Sparring für Inhaber und Geschäftsführer von Stefanie Lommel am Starnberger See.",
  openGraph: {
    title: "Holen wir die Lommel",
    description: "Wandelbegleitung für Familien- und Traditionsunternehmen. Bevor es kippt.",
    url: "https://dielommel.de",
    siteName: "Holen wir die Lommel",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col font-sans selection:bg-mint/30 selection:text-slate"
        suppressHydrationWarning
      >
        <JsonLd data={buildPersonSchema()} />
        <JsonLd data={buildOrganizationSchema()} />
        <JsonLd data={buildServiceSchema()} />
        <Script
          id="umami-analytics"
          src="https://analytics.sabala-mentoring.com/script.js"
          data-website-id="35deb602-45f1-469e-b566-3f13e52ae97b"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}

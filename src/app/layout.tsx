import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Caveat } from "next/font/google";
import Script from "next/script";
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
  title: "Holen wir die Lommel | Business Transition",
  description: "Stefanie Lommel - High Authority Consultancy",
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

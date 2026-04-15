import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Impressum | Holen wir die Lommel",
  description: "Impressum von Stefanie Lommel",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-beige text-slate pt-24 pb-20 px-4 md:px-[5%] selection:bg-[#C27347] selection:text-white">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C27347] hover:text-[#A85E3A] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>
        
        <h1 className="font-serif text-4xl md:text-5xl text-onyx mb-10">Impressum</h1>
        
        <div className="prose prose-slate prose-headings:font-serif prose-p:font-sans prose-a:text-[#C27347] max-w-none">
          <p className="font-sans text-sm text-slate/70 mb-8 italic">
            (Platzhalter - Bitte die finalen Rechtstexte von eRecht24 oder deinem Anwalt hier einfügen)
          </p>

          <h2 className="text-xl font-serif text-onyx mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
          <p>
            Stefanie Lommel<br />
            [Straße Hausnummer]<br />
            [PLZ Ort]
          </p>

          <h2 className="text-xl font-serif text-onyx mt-8 mb-4">Kontakt</h2>
          <p>
            Telefon: [Telefonnummer]<br />
            E-Mail: info@dieLommel.de
          </p>

          <h2 className="text-xl font-serif text-onyx mt-8 mb-4">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            [DE XXX XXX XXX]
          </p>

          <h2 className="text-xl font-serif text-onyx mt-8 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </main>
  );
}

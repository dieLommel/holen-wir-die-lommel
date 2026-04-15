import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Datenschutz | Holen wir die Lommel",
  description: "Datenschutzerklärung von Stefanie Lommel",
};

export default function DatenschutzPage() {
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
        
        <h1 className="font-serif text-4xl md:text-5xl text-onyx mb-10">Datenschutzerklärung</h1>
        
        <div className="prose prose-slate prose-headings:font-serif prose-p:font-sans prose-a:text-[#C27347] max-w-none">
          <p className="font-sans text-sm text-slate/70 mb-8 italic">
            (Platzhalter - Bitte die finalen Rechtstexte von eRecht24 oder deinem Anwalt hier einfügen)
          </p>

          <h2 className="text-xl font-serif text-onyx mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-lg font-serif text-onyx mt-6 mb-2">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h3 className="text-lg font-serif text-onyx mt-6 mb-2">Datenerfassung auf dieser Website</h3>
          <p>
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>

          <h2 className="text-xl font-serif text-onyx mt-8 mb-4">2. Hosting (Vercel)</h2>
          <p>
            Wir hosten unsere Website bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
            Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen. Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
          </p>

          <h2 className="text-xl font-serif text-onyx mt-8 mb-4">3. Terminbuchung (Zeeg)</h2>
          <p>
            Wenn Sie über unsere Website einen Termin buchen, werden Sie auf den Kalender-Dienst Zeeg weitergeleitet. Die Eingabe Ihrer Daten erfolgt direkt bei Zeeg.
          </p>
        </div>
      </div>
    </main>
  );
}

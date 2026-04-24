import Link from "next/link";

export const metadata = {
  title: "Impressum | Holen wir die Lommel",
};

export default function Impressum() {
  return (
    <main className="min-h-screen bg-canvas text-slate">
      <div className="h-20" />

      <div className="container mx-auto max-w-3xl px-[5%] py-24">
        <Link href="/" className="font-sans text-xs uppercase tracking-widest text-slate/50 hover:text-slate transition-colors mb-12 inline-block">
          ← Zurück
        </Link>

        <div className="font-serif italic text-slate/50 text-lg mb-4">Rechtliches</div>
        <h1 className="font-serif text-5xl md:text-6xl text-slate mb-16 leading-tight tracking-tight">
          Impressum
        </h1>

        <div className="border-t border-slate/10 pt-16 space-y-12 font-sans text-slate/80 leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              Stefanie Lommel<br />
              Niederried 19<br />
              82069 Hohenschäftlarn<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:info@dieLommel.de" className="underline underline-offset-4 hover:text-slate transition-colors">info@dieLommel.de</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">Umsatzsteuer</h2>
            <p>
              Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              Stefanie Lommel<br />
              Niederried 19<br />
              82069 Hohenschäftlarn<br />
              Deutschland
            </p>
          </section>

        </div>

        <div className="border-t border-slate/10 mt-24 pt-8 flex gap-6 flex-wrap">
          <Link href="/datenschutz" className="font-sans text-xs uppercase tracking-widest text-slate/50 hover:text-slate transition-colors">Datenschutz</Link>
          <Link href="/agb" className="font-sans text-xs uppercase tracking-widest text-slate/50 hover:text-slate transition-colors">AGB</Link>
          <Link href="/" className="font-sans text-xs uppercase tracking-widest text-slate/50 hover:text-slate transition-colors">Startseite</Link>
        </div>
      </div>
    </main>
  );
}

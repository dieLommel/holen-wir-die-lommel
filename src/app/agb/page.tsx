import Link from "next/link";

export const metadata = {
  title: "AGB | Holen wir die Lommel",
};

export default function AGB() {
  return (
    <main className="min-h-screen bg-canvas text-slate">
      <div className="h-20" />

      <div className="container mx-auto max-w-3xl px-[5%] py-24">
        <Link href="/" className="font-sans text-xs uppercase tracking-widest text-slate/50 hover:text-slate transition-colors mb-12 inline-block">
          ← Zurück
        </Link>

        <div className="font-serif italic text-slate/50 text-lg mb-4">Rechtliches</div>
        <h1 className="font-serif text-5xl md:text-6xl text-slate mb-4 leading-tight tracking-tight">
          Allgemeine Geschäfts&shy;bedingungen
        </h1>
        <p className="font-sans text-sm text-slate/40 uppercase tracking-widest mb-16">Coaching-Leistungen · Verbraucher & Unternehmer</p>

        <div className="border-t border-slate/10 pt-16 space-y-10 font-sans text-slate/80 leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">§ 1 Geltungsbereich</h2>
            <p className="mb-3">(1) Diese AGB gelten für alle Verträge mit dem Anbieter über Coaching-Leistungen.</p>
            <p className="mb-3">(2) Unternehmer im Sinne des § 14 BGB (z. B. Firmen, Selbstständige, Freiberufler) unterliegen den Regelungen in Abschnitt A.</p>
            <p>(3) Verbraucher im Sinne des § 13 BGB (natürliche Personen, die zu überwiegend privaten Zwecken handeln) unterliegen den Regelungen in Abschnitt B – einschließlich des gesetzlichen Widerrufsrechts.</p>
          </section>

          {/* ABSCHNITT A: B2B */}
          <div className="border-l-2 border-slate/20 pl-6 py-2">
            <p className="font-sans text-xs uppercase tracking-widest text-slate/50 mb-6">Abschnitt A — Regelungen für Unternehmer (B2B)</p>

            <div className="space-y-8">
              <section>
                <h2 className="font-serif text-2xl text-slate mb-4">§ 2 Vertragsabschluss (B2B)</h2>
                <p className="mb-3">(1) Coaching wird als Einzelgespräch (90 Minuten, 500 €) oder als längerfristige Begleitung angeboten.</p>
                <p className="mb-3">(2) Vertragspartner ist, wer den Vertrag abschließt (Firma oder Einzelperson als Unternehmer).</p>
                <p className="mb-3">(3) Der Vertrag kommt durch schriftliche (inkl. E-Mail) oder mündliche Bestätigung des Termins zustande.</p>
                <p>(4) Ein Widerrufsrecht besteht nicht.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-slate mb-4">§ 3 Vergütung (B2B)</h2>
                <p className="mb-3">(1) Einzelcoaching: 500 € (Endpreis).</p>
                <p className="mb-3">(2) Alle Preise inkl. USt., soweit anwendbar. Der Anbieter ist Kleinunternehmer i. S. d. § 19 UStG – es wird keine Umsatzsteuer ausgewiesen.</p>
                <p>(3) Zahlung sofort fällig nach Rechnungserhalt.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-slate mb-4">§ 4 Terminabsage (B2B)</h2>
                <p className="mb-3">(1) Kostenfreie Absage bis 48 Stunden vor Termin.</p>
                <p>(2) Bei späterer Absage: 100 % Ausfallhonorar – außer bei unverschuldeter Verhinderung (z. B. akute Krankheit mit ärztlichem Nachweis).</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-slate mb-4">§ 5 Haftung & Vertraulichkeit (B2B)</h2>
                <p className="mb-3">(1) Haftung beschränkt auf Vorsatz und grobe Fahrlässigkeit.</p>
                <p className="mb-3">(2) Keine Erfolgsgarantie. Coaching ist ein Prozess, der von der aktiven Mitarbeit des Klienten abhängt.</p>
                <p>(3) Der Anbieter behandelt alle erhaltenen Informationen streng vertraulich.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-slate mb-4">§ 6 Schlussbestimmungen (B2B)</h2>
                <p className="mb-3">(1) Geltendes Recht: deutsches Recht.</p>
                <p className="mb-3">(2) Gerichtsstand: Sitz des Anbieters.</p>
                <p>(3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
              </section>
            </div>
          </div>

          {/* ABSCHNITT B: B2C */}
          <div className="border-l-2 border-mint/40 pl-6 py-2">
            <p className="font-sans text-xs uppercase tracking-widest text-slate/50 mb-6">Abschnitt B — Regelungen für Verbraucher (B2C)</p>

            <div className="space-y-8">
              <section>
                <h2 className="font-serif text-2xl text-slate mb-4">§ 7 Widerrufsrecht</h2>
                <p className="mb-3">(1) Verbraucher können den Vertrag innerhalb von 14 Tagen ohne Angabe von Gründen widerrufen.</p>
                <p className="mb-3">(2) Die Widerrufsfrist beginnt mit Vertragsschluss.</p>
                <p>(3) Das Widerrufsrecht erlischt vorzeitig, sobald die Leistung vollständig erbracht ist und der Kunde vor Beginn ausdrücklich zugestimmt hat, dass der Anbieter mit der Leistung beginnt – und bestätigt hat, dass ihm bewusst ist, dass er bei vollständiger Leistungserbringung sein Widerrufsrecht verliert.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-slate mb-4">§ 8 Vergütung (B2C)</h2>
                <p className="mb-3">(1) Einzelcoaching: Preis wird vor Vertragsabschluss schriftlich kommuniziert.</p>
                <p>(2) Der Anbieter ist Kleinunternehmer i. S. d. § 19 UStG – es wird keine Umsatzsteuer ausgewiesen.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-slate mb-4">§ 9 Terminabsage (B2C)</h2>
                <p className="mb-3">(1) Kostenfreie Absage bis 48 Stunden vor Termin.</p>
                <p>(2) Bei späterer Absage: 100 % Ausfallhonorar – außer bei unverschuldeter Verhinderung.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-slate mb-4">§ 10 Haftung & Vertraulichkeit (B2C)</h2>
                <p className="mb-3">(1) Haftung beschränkt auf Vorsatz und grobe Fahrlässigkeit, außer bei Verletzung von Leben, Körper oder Gesundheit.</p>
                <p className="mb-3">(2) Keine Erfolgsgarantie.</p>
                <p>(3) Strenge Vertraulichkeit aller im Rahmen des Coachings erhaltenen Informationen.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-slate mb-4">§ 11 Schlussbestimmungen (B2C)</h2>
                <p className="mb-3">(1) Geltendes Recht: deutsches Recht.</p>
                <p>(2) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
              </section>
            </div>
          </div>

        </div>

        <div className="border-t border-slate/10 mt-24 pt-8 flex gap-6 flex-wrap">
          <Link href="/impressum" className="font-sans text-xs uppercase tracking-widest text-slate/50 hover:text-slate transition-colors">Impressum</Link>
          <Link href="/datenschutz" className="font-sans text-xs uppercase tracking-widest text-slate/50 hover:text-slate transition-colors">Datenschutz</Link>
          <Link href="/" className="font-sans text-xs uppercase tracking-widest text-slate/50 hover:text-slate transition-colors">Startseite</Link>
        </div>
      </div>
    </main>
  );
}

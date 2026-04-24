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
        <p className="font-sans text-sm text-slate/40 uppercase tracking-widest mb-16">für Coaching-Leistungen gegenüber Unternehmern</p>

        <div className="border-t border-slate/10 pt-16 space-y-10 font-sans text-slate/80 leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">§ 1 Geltungsbereich</h2>
            <p className="mb-3">(1) Diese Allgemeinen Geschäftsbedingungen gelten ausschließlich gegenüber Unternehmern im Sinne des § 14 BGB. Verbraucher im Sinne des § 13 BGB werden nicht beliefert.</p>
            <p className="mb-3">(2) Die AGB gelten auch für zukünftige Geschäfte, ohne dass sie erneut ausdrücklich vereinbart werden müssen.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">§ 2 Vertragsabschluss</h2>
            <p className="mb-3">(1) Die Coaching-Leistungen werden entweder als Einzelgespräch (90 Minuten, Pauschalpreis 320,- €) oder als individuelle längerfristige Begleitung nach gesonderter Vereinbarung erbracht.</p>
            <p className="mb-3">(2) Der Vertrag kommt zustande durch schriftliche (inkl. E-Mail) Bestätigung des Termins durch den Anbieter.</p>
            <p className="mb-3">(3) Ein Widerrufsrecht besteht nicht.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">§ 3 Leistungsbeschreibung</h2>
            <p className="mb-3">(1) Das Einzelcoaching umfasst ein Online- Beratungsgespräch von 90 Minuten Dauer (persönlich, sofern angeboten).</p>
            <p className="mb-3">(2) Bei längerfristiger Begleitung wird der Umfang (Anzahl der Sitzungen, Dauer, Ziele) vor Vertragsbeginn schriftlich festgehalten.</p>
            <p className="mb-3">(3) Erfolgsgarantien werden nicht übernommen. Coaching ist ein Prozess, der von der aktiven Mitarbeit des Klienten abhängt.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">§ 4 Vergütung</h2>
            <p className="mb-3">(1) Das Einzelgespräch kostet 320,- € (Endpreis).</p>
            <p className="mb-3">(2) Für längerfristige Begleitungen wird ein individueller Honorarsatz vereinbart, der schriftlich bestätigt wird.</p>
            <p className="mb-3">(3) Alle Preise verstehen sich inkl. der gesetzlichen Umsatzsteuer, soweit diese anfällt. Der Anbieter ist Kleinunternehmer im Sinne des § 19 UStG und erhebt daher keine Umsatzsteuer.</p>
            <p className="mb-3">(4) Die Rechnung ist sofort mit Zugang fällig und ohne Abzug zu zahlen.</p>
            <p className="mb-3">(5) Bei längerfristigen Vereinbarungen wird das Honorar in der vereinbarten Form (z. B. Pauschale, Raten) fällig.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">§ 5 Terminabsage und Ausfallhonorar</h2>
            <p className="mb-3">(1) Termine können kostenfrei bis 48 Stunden vor Beginn abgesagt oder verschoben werden.</p>
            <p className="mb-3">(2) Bei Absage weniger als 48 Stunden vor dem Termin wird ein Ausfallhonorar in Höhe von 100 % des vereinbarten Preises fällig – es sei denn, die Absage erfolgt aus Gründen höherer Gewalt oder unverschuldeter Verhinderung (z. B. akute Krankheit mit ärztlichem Nachweis).</p>
            <p className="mb-3">(3) Der Anbieter behält sich vor, bei wiederholter kurzfristiger Absage künftige Termine nur gegen Vorkasse anzubieten.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">§ 6 Vertraulichkeit</h2>
            <p className="mb-3">(1) Der Anbieter verpflichtet sich, alle im Rahmen des Coachings erhaltenen Informationen streng vertraulich zu behandeln.</p>
            <p className="mb-3">(2) Eine Offenbarung Dritten erfolgt nur, soweit eine gesetzliche Verpflichtung besteht oder der Klient ausdrücklich eingewilligt hat.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">§ 7 Haftung</h2>
            <p className="mb-3">(1) Die Haftung des Anbieters ist auf Vorsatz und grobe Fahrlässigkeit beschränkt.</p>
            <p className="mb-3">(2) Keine Haftung wird übernommen für: entgangenen Gewinn, mittelbare Schäden, Folgeschäden aus Entscheidungen des Klienten auf Grundlage des Coachings.</p>
            <p className="mb-3">(3) Unbeschränkt haftet der Anbieter bei Verletzung des Lebens, des Körpers oder der Gesundheit sowie nach dem Produkthaftungsgesetz.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">§ 8 Urheberrecht</h2>
            <p className="mb-3">(1) Alle vom Anbieter erstellten Materialien (z. B. Handouts, Übungen, Protokolle) sind urheberrechtlich geschützt.</p>
            <p className="mb-3">(2) Der Klient erhält ein einfaches, nicht übertragbares Nutzungsrecht zur internen Verwendung.</p>
            <p className="mb-3">(3) Weitergabe, Vervielfältigung oder öffentliche Zugänglichmachung bedarf der ausdrücklichen schriftlichen Genehmigung.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">§ 9 Datenschutz</h2>
            <p className="mb-3">Es gilt die separate Datenschutzerklärung <Link href="/datenschutz" className="underline underline-offset-4 hover:text-slate transition-colors">hier</Link> auf der Website des Anbieters, die Bestandteil der vertraglichen Vereinbarung ist.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">§ 10 Schlussbestimmungen</h2>
            <p className="mb-3">(1) Es gilt ausschließlich deutsches Recht unter Ausschluss des UN-Kaufrechts.</p>
            <p className="mb-3">(2) Erfüllungsort und Gerichtsstand ist der Sitz des Anbieters, sofern der Vertragspartner Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.</p>
            <p className="mb-3">(3) Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Klauseln unberührt. Anstelle der unwirksamen Regelung tritt eine wirksame, die dem wirtschaftlichen Zweck am nächsten kommt.</p>
          </section>

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

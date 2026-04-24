import Link from "next/link";

export const metadata = {
  title: "Datenschutzerklärung | Holen wir die Lommel",
};

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-canvas text-slate">
      {/* Navbar-Placeholder Spacer */}
      <div className="h-20" />

      <div className="container mx-auto max-w-3xl px-[5%] py-24">
        <Link href="/" className="font-sans text-xs uppercase tracking-widest text-slate/50 hover:text-slate transition-colors mb-12 inline-block">
          ← Zurück
        </Link>

        <div className="font-serif italic text-slate/50 text-lg mb-4">Rechtliches</div>
        <h1 className="font-serif text-5xl md:text-6xl text-slate mb-4 leading-tight tracking-tight">
          Datenschutz&shy;erklärung
        </h1>
        <p className="font-sans text-sm text-slate/40 uppercase tracking-widest mb-16">Stand: April 2026</p>

        <div className="border-t border-slate/10 pt-16 space-y-12 font-sans text-slate/80 leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">1. Verantwortlicher</h2>
            <p>
              Stefanie Lommel<br />
              Niederried 17<br />
              82069 Hohenschäftlarn<br />
              E-Mail: <a href="mailto:info@dieLommel.de" className="underline underline-offset-4 hover:text-slate transition-colors">info@dieLommel.de</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">2. Hosting</h2>
            <p className="mb-3">Unsere Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet.</p>
            <p className="mb-3">Beim Aufruf der Website erfasst Vercel automatisch Logdaten (z. B. IP-Adresse, Datum und Uhrzeit der Anfrage, Browserinformationen). Diese Daten sind technisch erforderlich, um die Website bereitzustellen und die Stabilität sowie Sicherheit zu gewährleisten.</p>
            <p className="mb-3">Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und effizienten Bereitstellung unseres Online-Angebots).</p>
            <p>Eine Übermittlung von Daten in die USA kann nicht ausgeschlossen werden. Vercel verwendet Standardvertragsklauseln (SCC) der Europäischen Kommission zur Sicherstellung eines angemessenen Datenschutzniveaus.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">3. Terminbuchung über Zeeg</h2>
            <p className="mb-3">Für die Vereinbarung von Terminen nutzen wir den Dienst Zeeg.</p>
            <p className="mb-3">Wenn Sie über unsere Website einen Termin buchen, werden Sie auf die Plattform von Zeeg weitergeleitet. Die Eingabe Ihrer Daten (wie Name, E-Mail-Adresse, Terminwunsch) erfolgt direkt bei Zeeg.</p>
            <p className="mb-3">Die Verarbeitung erfolgt zum Zweck der Terminorganisation und auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertrag bzw. vorvertragliche Maßnahme).</p>
            <p>Weitere Informationen zum Datenschutz bei Zeeg finden Sie in der Datenschutzerklärung des jeweiligen Anbieters.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">4. Kontaktaufnahme per E-Mail</h2>
            <p className="mb-3">Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen übermittelten Daten (z. B. Name, E-Mail-Adresse, Inhalt der Anfrage) zum Zweck der Bearbeitung Ihrer Anfrage verarbeitet.</p>
            <p>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertrag bzw. vorvertragliche Maßnahme), sofern Ihre Anfrage auf den Abschluss eines Vertrags abzielt. In allen anderen Fällen erfolgt die Verarbeitung auf Grundlage unseres berechtigten Interesses an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">5. Speicherdauer</h2>
            <p>Personenbezogene Daten werden nur so lange gespeichert, wie dies für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">6. Ihre Rechte</h2>
            <p className="mb-3">Sie haben jederzeit das Recht auf:</p>
            <ul className="space-y-2 list-none pl-0">
              <li className="flex gap-3"><span className="text-mint mt-1">—</span><span>Auskunft über Ihre gespeicherten Daten</span></li>
              <li className="flex gap-3"><span className="text-mint mt-1">—</span><span>Berichtigung unrichtiger Daten</span></li>
              <li className="flex gap-3"><span className="text-mint mt-1">—</span><span>Löschung Ihrer Daten</span></li>
              <li className="flex gap-3"><span className="text-mint mt-1">—</span><span>Einschränkung der Verarbeitung</span></li>
              <li className="flex gap-3"><span className="text-mint mt-1">—</span><span>Datenübertragbarkeit</span></li>
              <li className="flex gap-3"><span className="text-mint mt-1">—</span><span>Widerspruch gegen die Verarbeitung</span></li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">7. Beschwerderecht</h2>
            <p>Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-slate mb-4">8. Allgemeine Hinweise zur Datenverarbeitung</h2>
            <p>Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          </section>

        </div>

        <div className="border-t border-slate/10 mt-24 pt-8 flex gap-6 flex-wrap">
          <Link href="/impressum" className="font-sans text-xs uppercase tracking-widest text-slate/50 hover:text-slate transition-colors">Impressum</Link>
          <Link href="/agb" className="font-sans text-xs uppercase tracking-widest text-slate/50 hover:text-slate transition-colors">AGB</Link>
          <Link href="/" className="font-sans text-xs uppercase tracking-widest text-slate/50 hover:text-slate transition-colors">Startseite</Link>
        </div>
      </div>
    </main>
  );
}

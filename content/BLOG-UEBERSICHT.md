# Blog-Übersicht — Aus meinem Schreibtisch

Referenzdatei für neue Blogartikel, damit der Bestand nicht bei jeder Session neu gelesen werden muss. Bewusst **nicht** in `content/blog/` — Dateien dort werden von `src/lib/blog.ts` automatisch als echte, live sichtbare Artikel eingelesen.

## Frontmatter-Schema

Pflicht-/optionale Felder gemäß `src/lib/blog.ts` (`BlogPostFrontmatter`):

```yaml
title: string
slug: string                       # ohne Nummer-Prefix; Dateiname ist NN-slug.md
funnelStage: "Awareness" | "Consideration" | "Decision" | "Trust"
publishedAt: "YYYY-MM-DD"
updatedAt: "YYYY-MM-DD"             # optional
primaryKeyword: string
secondaryKeywords: [string]         # optional
excerpt: |                          # mehrzeilig — persönlicher Anekdoten-Einstieg
metaDescription: |                  # mehrzeilig
storyAnchor: string                 # optional, Kürzel für wiederverwendete Anekdote
ogImage: "/images/blog/blog-hero.jpg"
coverImage: "/images/blog/articles/<slug>.jpg"
coverImageAlt: string
```

## Vorhandene Artikel (9 live, Stand 2026-09-29)

**Wichtig: `publishedAt` steuert nicht die Sichtbarkeit.** `src/lib/blog.ts` filtert nicht nach Datum. Jede Datei in `content/blog/` ist sofort live, sobald sie gepusht ist, unabhängig vom Datum im Frontmatter. Stefanie postet lieber nacheinander als mehrere Artikel gleichzeitig — deshalb bleibt ein fertiger Artikel in `content/drafts/`, bis er wirklich veröffentlicht werden soll, und wird erst dann nach `content/blog/` verschoben und gepusht. Nicht vorher "schon mal fertigstellen und pushen".

| # | Slug | Funnel-Stage | Published | Thema |
|---|------|-------------|-----------|-------|
| 01 | fruehwarnzeichen-familienunternehmen | Awareness | 2026-06-04 | 7 stille Frühwarnzeichen einer Unternehmenskrise |
| 02 | generationswechsel-ohne-vertrauensverlust | Consideration | 2026-06-18 | Generationswechsel gestalten, ohne Vertrauen zu verlieren |
| 03 | sparringspartner-statt-berater | Decision | 2026-07-02 | Sparringspartner vs. Berater vs. Coach; wann ein Vorgespräch sinnvoll ist |
| 04 | loslassen-ohne-dich-zu-verlieren | Trust | 2026-06-11 | Identitätsarbeit des Seniors 12–18 Monate vor der Übergabe |
| 05 | kind-uebernimmt-familienunternehmen-nicht | Trust | 2026-07-16 † | 4 Optionen, wenn das eigene Kind nicht übernehmen will |
| 06 | geschwister-streit-familienunternehmen-vermeiden | Trust | 2026-07-30 † | Geschwister-Konflikte: Warnsignale, Kipppunkte, Prävention |
| 07 | trauer-im-unternehmen-fuehrungskraefte | Trust | 2026-08-01 † | Trauer/Tod als blinder Fleck in KMU ohne Personalabteilung; wann das Unternehmen selbst Auslöser ist |
| 08 | mediation-statt-gericht-familienunternehmen | Consideration | 2026-08-01 † | Warum Unternehmer den Rechtsweg der Mediation vorziehen; was Mediation stattdessen leistet (mit Mediations-Beispiel) |
| 09 | kerngeschaeft-bricht-weg | Awareness | 2026-10-15 † | Ist ein wegbrechendes Kerngeschäft Versagen? Mit S&P-500/Innosight-Zahlen zum Tempo der Marktveränderung; verlinkt auf Artikel 01 |

† Publish-Datum liegt (Stand heute) in der Zukunft — die Seite filtert aber nicht nach Datum, alle vier sind trotzdem schon live. Falls das nicht so gewollt war, kurz Bescheid geben.

**Funnel-Verteilung (live):** 2× Awareness, 2× Consideration, 1× Decision, 4× Trust.

## Fertig, aber bewusst noch nicht live

| # | Slug | Funnel-Stage | Geplantes Datum | Thema |
|---|------|-------------|-----------|-------|
| 10 | resilienzfalle-mittelstand | Decision | 2026-11-01 | Warum die Kraft für Wandel fehlt, wenn sie am dringendsten gebraucht wird; 3-Wege-Vergleich (Risiko-Report 2026), verlinkt auf 03 und 09 |

Liegt fertig in `content/drafts/10-resilienzfalle-mittelstand.md`, Bild liegt schon unter `public/images/blog/articles/resilienzfalle-mittelstand.jpg`. Erst auf Stefanies Signal nach `content/blog/` verschieben und pushen.

**Herkunft Artikel 07:** entstanden aus Episode BBB10 des Podcasts "Business Bling Bekenntnisse" (Stefanie + Petra Kahley) — nur die Wirtschafts-/Trauer-Substanz aus Stefanies eigenen Anekdoten übernommen, Petras persönliche Geschichte bewusst ausgeschlossen. Transkript liegt in `../podcast/Episoden/`.

## Wiederverwendete Story-Anker (`storyAnchor`)

Persönliche Anekdoten, die als roter Faden durch mehrere Artikel laufen — nützlich zu kennen, um Wiederholungen zu vermeiden oder bewusst wieder aufzugreifen:

- **A1-Konzern-Insider** — Siemens & Flugsicherung, Berater vs. Sparringspartner (→ 03)
- **A2-Aqua-2008** — Insolvenzbegleitung 2008, 200 Mitarbeitende (→ 04)
- **A3-Holt-mal-die-Lommel** — Ursprung des Spitznamens in der Konzern-Zeit (→ 01)
- **A4-Tarifverhandlungen / A4-Tarif-Mediation** — 9 Jahre Flugsicherung, Tarifrunden/Mediation (→ 02 **und** 06, zweimal verwendet)
- **A5-Goldschmiedin-Story** — mit 16 wollte sie Goldschmiedin werden, Vater lehnte ab (→ 05)
- **A6-Allein-im-Teammeeting** — Mitarbeiterin verliert ihren Sohn, steht ohne Rückendeckung allein im Teammeeting da (→ 07)
- **A7-Kuendigung-Mediation** — echter Fall: Unternehmer kündigt Bereichsleiter ohne vorheriges Gespräch → Kündigungsschutzklage, Gericht, gespaltene Belegschaft; „Besser, das Gericht entscheidet, dann habe ich recht." War Stefanies persönlicher Anlass für die Mediationsausbildung (→ 08)
- **A8-Kerngeschaeft-Bricht-Weg** — Eröffnungs-Anekdote ist ein bewusst komponiertes Platzhalter-Szenario (Inhaber 3. Generation), keine reale Anekdote. Zusätzlich ein eigener, echter (aber bewusst allgemein gehaltener) Abschnitt: Stefanie hat selbst nach Jahren der Selbstständigkeit im Beraterumfeld einen Schnitt gemacht und neu angefangen, weil sich die Marktbedingungen verändert hatten — bewusst in abgeschlossener Vergangenheitsform erzählt, nicht als laufende Situation (siehe [[feedback_personal_vulnerability_framing]]) (→ 09, kurz erneut referenziert mit Link in → 10)
- **A9-Resilienzfalle-Aufschub** — Eröffnungs-Anekdote ebenfalls Platzhalter-Komposit (Unternehmerin, zweite Führungsebene seit 2 Jahren aufgeschoben), keine reale Anekdote. Reale Ergänzung: Stefanie hat nach dem eigenen Schnitt (siehe A8) erst im Nachhinein gemerkt, wie viel Kraft sie vorher schon verloren hatte — Kernbeleg für die Resilienzfalle selbst (→ 10)

## Ton & wiederkehrende Muster

- Anrede: durchgehend „du" (Inhaber:in direkt angesprochen)
- Jeder Artikel öffnet mit einer konkreten, persönlichen Anekdote — kein abstrakter Einstieg
- Struktur: „Quick Answer"-Absatz direkt nach dem Frontmatter → W-Fragen als H2 ("Was ist …", "Warum …", "Was kann ich tun …") → oft Vergleichstabelle oder nummerierte Liste → sehr konkreter, kleiner erster Schritt am Ende
- Belege über Studien/Zahlen: KfW-Research (186.000 Übergaben bis 2030, ~60 % ungeregelt), IfM Bonn, Wittener Familienforschung
- Keine Coach-Buzzwords („Journey", „Mindset" o. ä. kommen nicht vor), kein Anglizismen-Overkill
- Kein platter Verkaufs-Abschluss — der CTA ist immer in einen konkreten nächsten Schritt eingebettet

## Wenn ein neuer Artikel entsteht

Diese Datei nach dem Anlegen eines neuen Artikels mit aktualisieren (Tabelle + ggf. neuer Story-Anker).

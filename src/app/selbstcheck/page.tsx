import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/ui/header-1";
import Footer from "@/components/sections/Footer";

const PDF_PATH = "/downloads/dieLommel-Selbstcheck-Sieben-leise-Zeichen.pdf";

export const metadata: Metadata = {
  title: "Selbstcheck: Sieben leise Zeichen | Stefanie Lommel",
  description:
    "Kostenloser Selbstcheck als PDF: sieben leise Zeichen, dass dein Familienunternehmen kippt. Mit Fragen zum Durchgehen und einem ersten konkreten Schritt.",
  openGraph: {
    title: "Sieben leise Zeichen, dass dein Familienunternehmen kippt",
    description:
      "Der kostenlose Selbstcheck von Stefanie Lommel. Fünf Seiten, eine Stunde Zeit, ein klarerer Blick.",
    images: ["/images/freebies/selbstcheck-cover.jpg"],
  },
};

const inhalt = [
  "Die sieben Signale, die jeder spürt und niemand ausspricht",
  "Zu jedem Zeichen eine Frage, die du dir ehrlich beantworten kannst",
  "Eine einfache Einordnung: ab wann es wirklich kritisch wird",
  "Einen ersten konkreten Schritt, den du allein gehen kannst",
];

export default function Selbstcheck() {
  return (
    <main className="flex min-h-screen flex-col bg-canvas text-slate">
      <Header />
      <section className="bg-slate text-canvas">
        <div className="container mx-auto max-w-5xl px-[5%] pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 items-center">
          <div>
            <div className="font-serif italic text-[#C27347] text-lg mb-5 flex items-center gap-3">
              <span className="block w-8 h-[1px] bg-[#C27347]/50" />
              Kostenloser Selbstcheck
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-tight font-medium mb-8">
              Sieben leise Zeichen, dass dein Familienunternehmen{" "}
              <span className="italic text-[#C27347]">kippt</span>
            </h1>
            <p className="font-sans text-[17px] lg:text-[18px] text-canvas/80 leading-[1.85] mb-10 max-w-[52ch]">
              Unternehmen kippen nicht mit einem Knall. Sie kippen leise, über Monate, in Gesprächen,
              die nicht mehr geführt werden. Dieser Selbstcheck hilft dir, die Signale zu benennen,
              bevor andere für dich entscheiden.
            </p>

            <a
              href={PDF_PATH}
              download
              className="group inline-flex rounded-full bg-surface text-slate pl-7 pr-2 py-2 items-center gap-5 text-[11px] font-sans font-semibold uppercase tracking-[0.2em] transition-all duration-500 shadow-lg hover:shadow-xl"
            >
              <span>PDF herunterladen</span>
              <span className="w-10 h-10 rounded-full bg-slate/10 flex items-center justify-center border border-slate/5">
                <ArrowDown className="w-4 h-4 text-slate group-hover:translate-y-0.5 transition-transform" strokeWidth={1.5} />
              </span>
            </a>
            <p className="font-sans text-xs text-canvas/50 mt-4">
              5 Seiten · PDF · ohne Anmeldung
            </p>
          </div>

          <a href={PDF_PATH} download className="block mx-auto w-full max-w-sm">
            <Image
              src="/images/freebies/selbstcheck-cover.jpg"
              alt="Titelseite des Selbstchecks „Sieben leise Zeichen, dass dein Familienunternehmen kippt“"
              width={745}
              height={1054}
              className="w-full h-auto shadow-2xl ring-1 ring-canvas/15 rounded-sm rotate-[1.5deg] hover:rotate-0 transition-transform duration-700"
              priority
            />
          </a>
        </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-3xl px-[5%] py-20 lg:py-24">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-[2.5rem] font-medium tracking-tight leading-[1.15] mb-10">
            Was dich erwartet
          </h2>
          <ul className="font-sans text-[17px] text-slate/80 leading-[1.85] space-y-3 list-disc pl-6 marker:text-[#C27347] mb-12">
            {inhalt.map((punkt) => (
              <li key={punkt} className="pl-1">
                {punkt}
              </li>
            ))}
          </ul>
          <p className="font-sans text-[17px] text-slate/80 leading-[1.85] max-w-[68ch]">
            Nimm dir eine Stunde dafür, am besten dort, wo niemand zuhört. Die ausführliche
            Fassung findest du im Artikel{" "}
            <Link
              href="/blog/fruehwarnzeichen-familienunternehmen"
              className="text-[#C27347] underline decoration-[#C27347]/30 underline-offset-2 hover:decoration-[#C27347] transition-all"
            >
              Sieben Frühwarnzeichen, dass dein Familienunternehmen kippt
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-3xl px-[5%] pb-24">
        <div className="bg-slate text-canvas rounded-sm p-10 lg:p-14">
          <div className="font-serif italic text-[#C27347] text-lg mb-4">Und danach?</div>
          <p className="font-sans text-base lg:text-lg text-canvas/80 mb-8 leading-relaxed font-light max-w-xl">
            Wenn du beim Durchgehen merkst, dass du das mit jemandem teilen willst, der zuhört und
            nicht doziert: Ein Vorgespräch dauert 15 Minuten und ist kostenlos.
          </p>
          <Link
            href="https://zeeg.me/info8723/15"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex rounded-full bg-surface text-slate pl-7 pr-2 py-2 items-center gap-5 text-[11px] font-sans font-semibold uppercase tracking-[0.2em] transition-all duration-500 shadow-lg hover:shadow-xl"
          >
            <span>15 Min · kostenlos</span>
            <span className="w-10 h-10 rounded-full bg-slate/10 flex items-center justify-center border border-slate/5">
              <ArrowUpRight className="w-4 h-4 text-slate group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
            </span>
          </Link>
          <div className="font-script text-2xl text-[#C27347] mt-10">Holen wir die Lommel.</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

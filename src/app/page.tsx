import { Header } from "@/components/ui/header-1";
import Hero from "@/components/sections/Hero";
import Identification from "@/components/sections/Identification";
import ProblemSticky from "@/components/sections/ProblemSticky";
import Solution from "@/components/sections/Solution";
import AboutStory from "@/components/sections/AboutStory";
import Pricing from "@/components/sections/Pricing";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Stefanie Lommel | Holt mal die Lommel",
  description: "Wandelbegleitung für Familien- und Traditionsunternehmen. Bevor es kippt.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F7F4EF]">
      <Header />
      <Hero />
      <Identification />
      <ProblemSticky />
      <AboutStory />
      <Solution />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

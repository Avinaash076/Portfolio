import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Education } from "@/components/portfolio/education";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { SunsetBloomBackground } from "@/components/background-gradient/sunset-bloom-background";

export default function Home() {
  return (
    <SunsetBloomBackground className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 z-10 relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </SunsetBloomBackground>
  );
}

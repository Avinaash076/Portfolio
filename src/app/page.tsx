import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Education } from "@/components/portfolio/education";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { CursorGlow } from "@/components/portfolio/cursor-glow";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

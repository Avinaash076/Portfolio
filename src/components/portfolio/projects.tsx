"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { projects } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GitHubRepoCard } from "@/components/socials/github-repo-card";

export function Projects() {
  return (
    <section
      id="work"
      className="scroll-mt-14 border-y border-[var(--hair)] bg-[var(--paper-tint)]/50 px-5 py-12 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="projects" className="border-none">
            <AccordionTrigger className="hover:no-underline py-0 py-8">
              <div className="flex flex-col text-left gap-2 w-full">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-signal/80">05 — projects</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight">Shipped work</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pt-8 border-t border-[var(--hair-strong)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="flex justify-center"
                  >
                    <GitHubRepoCard
                      owner="Avinaash076"
                      name={p.name.toLowerCase().replace(/\s+/g, '-')}
                      description={p.tagline}
                      language={p.stack[0]}
                      languageColor={p.stack[0] === 'TypeScript' || p.stack[0] === 'Kotlin' ? 'bg-blue-500' : 'bg-yellow-500'}
                      stars={Math.floor(Math.random() * 50) + 10}
                      forks={Math.floor(Math.random() * 10) + 2}
                      className="w-full h-full"
                    />
                  </motion.div>
                ))}
              </div>

              {/* GitHub CTA */}
                <div className="mt-10 flex flex-col items-start justify-between gap-4 border border-dashed border-[var(--hair-strong)] p-6 sm:flex-row sm:items-center">
                  <div>
                    <p className="font-serif text-xl font-light">
                      Want to see more code?
                    </p>
                    <p className="mt-1 text-[13px] text-muted-foreground">
                      Browse every repository — experiments, side projects, and all.
                    </p>
                  </div>
                  <a
                    href="https://github.com/Avinaash076"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 bg-primary px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-foreground"
                  >
                    <Github className="h-3.5 w-3.5" />
                    github.com/Avinaash076
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { profile, stats } from "@/lib/portfolio-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MuseumPlacardCard } from "@/components/gallery/museum-placard-card";

export function About() {
  return (
    <section id="about" className="scroll-mt-14 px-5 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="about" className="border-none">
            <AccordionTrigger className="hover:no-underline py-0 py-8">
              <div className="flex flex-col text-left gap-2 w-full">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-signal/80">02 — about</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight">System details</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pt-4 border-t border-[var(--hair-strong)] grid gap-12 lg:grid-cols-12 lg:gap-16">
                {/* Bio — editorial prose */}
                <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="space-y-5 text-[17px] leading-[1.7] text-foreground/85">
              <p className="font-serif text-2xl font-light leading-relaxed italic text-foreground">
                I care about reliable web services, real-world automation, and
                maintainable enterprise software.
              </p>
              <p>
                I work end-to-end: device signals in, REST services in the middle, and dashboards out front. Recently, I built a real-time industrial monitoring platform for enterprise clients. I wired ESP32/Arduino telemetry into workflows, rendering live data through a unified dashboard.
              </p>
              <p>
                I optimized N+1 queries using eager loading, cutting page load times by{" "}
                <span className="bg-signal-dim px-1 font-mono text-[0.85em] text-signal">
                  40%
                </span>
                . I resolved a faulty SQL query affecting{" "}
                <span className="bg-signal-dim px-1 font-mono text-[0.85em] text-signal">
                  220 records
                </span>
                , fixing and reconciling the data. I also built dedup tooling that saved{" "}
                <span className="bg-signal-dim px-1 font-mono text-[0.85em] text-signal">
                  10+ hours
                </span>
                {" "}of weekly ops work.
              </p>
              <p className="text-muted-foreground">
                I focus on API validation, clean testing, RBAC, and secure sessions — the parts that ensure a system survives contact with real users.
              </p>
            </div>
          </motion.div>

          {/* Museum Placard */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <MuseumPlacardCard
              artist={profile.name}
              title={profile.role}
              year={new Date().getFullYear().toString()}
              medium="Typescript, React, Node.js"
              dimensions="Full-stack Developer"
              catalogRef={`DEV.${new Date().getFullYear()}.001`}
              curatorNote={profile.tagline}
              acquisition={`Based in ${profile.location}`}
              className="mt-8 lg:mt-0"
            />
          </motion.div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

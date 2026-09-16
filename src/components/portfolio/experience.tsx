"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { experiences } from "@/lib/portfolio-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-14 px-5 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="experience" className="border-none">
            <AccordionTrigger className="hover:no-underline py-0 py-8">
              <div className="flex flex-col text-left gap-2 w-full">
                <span className="font-sans text-sm uppercase tracking-[0.15em] text-signal/80">Experience</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight">Production systems</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pt-4 border-t border-[var(--hair-strong)]">
          {experiences.map((exp) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 border-b border-[var(--hair)] py-10 sm:grid-cols-12 sm:gap-8"
            >
              {/* Marginal date + meta */}
              <div className="mb-5 sm:col-span-3 sm:mb-0">
                <p className="font-sans text-sm uppercase tracking-[0.15em] text-signal font-medium">
                  {exp.period}
                </p>
                {exp.current && (
                  <p className="mt-2 flex items-center gap-1.5 font-sans text-sm uppercase tracking-[0.15em] text-muted-foreground">
                    <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-signal" />
                    current
                  </p>
                )}
                <p className="mt-4 font-sans text-sm uppercase tracking-[0.15em] text-muted-foreground/60">
                  {exp.location}
                </p>
              </div>

              {/* Body */}
              <div className="sm:col-span-9">
                <h3 className="font-serif text-3xl font-light tracking-tight">
                  {exp.role}
                </h3>
                <p className="mt-1 font-sans text-base text-muted-foreground font-medium">
                  {exp.company}
                </p>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/80">
                  {exp.summary}
                </p>

                {/* Highlights as a real list */}
                <ol className="mt-6 space-y-4">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[auto_1fr] gap-3 text-base leading-relaxed"
                    >
                      <span className="font-sans font-bold text-sm text-signal/80 pt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-foreground/90">
                          <span className="font-semibold">{h.title}</span>
                          {h.metric && (
                            <span className="ml-2 bg-signal-dim px-2 py-0.5 font-bold text-sm text-signal rounded">
                              {h.metric}
                            </span>
                          )}
                        </p>
                        <p className="mt-0.5 text-muted-foreground">
                          {h.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                {/* Stack inline */}
                <div className="mt-7 border-t border-[var(--hair)] pt-4">
                  <p className="mb-2 font-sans text-sm uppercase tracking-[0.15em] text-muted-foreground">
                    Stack
                  </p>
                  <p className="font-sans text-base text-foreground/80 font-medium">
                    {exp.stack.join("  ·  ")}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

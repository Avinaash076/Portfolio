"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { education, certifications } from "@/lib/portfolio-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Education() {
  return (
    <section id="education" className="scroll-mt-14 px-5 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="education" className="border-none">
            <AccordionTrigger className="hover:no-underline py-0 py-8">
              <div className="flex flex-col text-left gap-2 w-full">
                <span className="font-sans text-sm uppercase tracking-[0.15em] text-signal/80">Education</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight">Foundations & learning</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 pt-4">
                {/* Education */}
                <div className="lg:col-span-7">
            <div className="border-t border-[var(--hair-strong)]">
              <div className="flex items-center justify-between border-b border-[var(--hair)] py-2 font-sans text-sm uppercase tracking-[0.15em] text-muted-foreground">
                <span><b>Education</b></span>
                {/* <span>fig. 02</span> */}
              </div>

              {education.map((e, i) => (
                <motion.div
                  key={e.institution}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="border-b border-[var(--hair)] py-7"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-serif text-3xl font-light tracking-tight">
                      {e.institution}
                    </h3>
                    <span className="font-sans text-sm uppercase tracking-[0.15em] text-signal font-medium">
                      {e.period}
                    </span>
                  </div>

                  <p className="mt-3 text-base font-medium text-foreground/80">
                    {e.degree}
                  </p>
                  <p className="mt-1 font-sans text-sm uppercase tracking-[0.15em] text-muted-foreground">
                    {e.location}
                  </p>

                  <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                    {e.detail}
                  </p>

                  <div className="mt-6 inline-flex items-baseline gap-3 border border-[var(--hair-strong)] px-4 py-3">
                    <span className="font-sans text-sm uppercase tracking-[0.15em] text-muted-foreground">
                      {e.score.label}
                    </span>
                    <span className="font-serif text-3xl font-light text-signal">
                      {e.score.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5">
            <div className="border-t border-[var(--hair-strong)]">
              <div className="flex items-center justify-between border-b border-[var(--hair)] py-2 font-sans text-sm uppercase tracking-[0.15em] text-muted-foreground">
                <span><b>Certifications</b></span>
                {/* <span>{certifications.length} entries</span> */}
              </div>

              {certifications.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="border-b border-[var(--hair)] py-5"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-sans font-bold text-sm text-signal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <p className="text-base font-medium leading-snug">
                        {c.title}
                      </p>
                      <p className="mt-1.5 font-sans text-sm uppercase tracking-[0.15em] text-muted-foreground">
                        {c.issuer}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground/80">
                        {c.focus}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

                  {/* Currently exploring */}
                  <div className="mt-8 border border-dashed border-[var(--hair-strong)] p-5">
                    <p className="font-sans text-sm uppercase tracking-[0.15em] text-muted-foreground">
                      Currently exploring
                    </p>
                    <p className="mt-2 font-serif text-xl italic font-light text-foreground/80">
                      system design · clean architecture · distributed systems ·
                      observability
                    </p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

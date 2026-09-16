"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { skillCategories } from "@/lib/portfolio-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-14 border-y border-[var(--hair)] bg-[var(--paper-tint)]/50 px-5 py-12 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="skills" className="border-none">
            <AccordionTrigger className="hover:no-underline py-0 py-8">
              <div className="flex flex-col text-left gap-2 w-full">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-signal/80">03 — skills</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight">Toolkit & languages</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pt-4 border-t border-[var(--hair-strong)]">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="grid grid-cols-1 border-b border-[var(--hair)] py-6 sm:grid-cols-12 sm:gap-6"
            >
              {/* Title */}
              <div className="mb-3 sm:col-span-4 sm:mb-0">
                <h3 className="font-serif text-2xl font-light tracking-tight">
                  {cat.title}
                </h3>
              </div>

              {/* Items */}
              <div className="sm:col-span-8">
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {cat.skills.map((s) => (
                    <li
                      key={s}
                      className="font-mono text-[13px] text-foreground/75"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

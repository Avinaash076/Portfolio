"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { skillCategories } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-14 border-y border-[var(--hair)] bg-[var(--paper-tint)] px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          num="03"
          eyebrow="skills"
          title="A T-shaped full-stack toolkit."
          description="The languages, frameworks, databases, and tools I use across the full stack — from hardware integrations to production web services."
        />

        <div className="border-t border-[var(--hair-strong)]">
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
      </div>
    </section>
  );
}

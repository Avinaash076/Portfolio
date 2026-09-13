"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { experiences } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-14 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          num="04"
          eyebrow="experience"
          title="What I've shipped in production."
          description="A track record of building, operating, and fixing real systems used by enterprise clients."
        />

        <div className="border-t border-[var(--hair-strong)]">
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
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-signal">
                  {exp.period}
                </p>
                {exp.current && (
                  <p className="mt-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-signal" />
                    current
                  </p>
                )}
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60">
                  {exp.location}
                </p>
              </div>

              {/* Body */}
              <div className="sm:col-span-9">
                <h3 className="font-serif text-3xl font-light tracking-tight">
                  {exp.role}
                </h3>
                <p className="mt-1 font-mono text-sm text-muted-foreground">
                  {exp.company}
                </p>

                <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-foreground/80">
                  {exp.summary}
                </p>

                {/* Highlights as a real list */}
                <ol className="mt-6 space-y-3">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[auto_1fr] gap-3 text-[14px] leading-relaxed"
                    >
                      <span className="font-mono text-[11px] text-signal/80 pt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-foreground/90">
                          <span className="font-medium">{h.title}</span>
                          {h.metric && (
                            <span className="ml-2 bg-signal-dim px-1.5 py-0.5 font-mono text-[11px] text-signal">
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
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    stack
                  </p>
                  <p className="font-mono text-[12px] text-foreground/70">
                    {exp.stack.join("  ·  ")}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, ChevronRight, TrendingDown, Zap } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { experiences } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          num="04"
          eyebrow="experience"
          title="What I've shipped in production."
          description="A track record of building, operating, and fixing real systems used by enterprise clients."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--accent-emerald)]/60 via-border to-transparent sm:left-1/2" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Node */}
              <div className="absolute left-4 top-6 -translate-x-1/2 sm:left-1/2">
                <span className="relative flex h-3.5 w-3.5">
                  {exp.current && (
                    <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-[var(--accent-emerald)]" />
                  )}
                  <span
                    className={`relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-background ${
                      exp.current
                        ? "bg-[var(--accent-emerald)]"
                        : "bg-muted-foreground"
                    }`}
                  />
                </span>
              </div>

              {/* Card */}
              <div className="ml-10 sm:ml-0 sm:w-[calc(50%-2.5rem)] sm:even:ml-auto">
                <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-[var(--accent-emerald)]/40">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-[var(--accent-emerald)]" />
                        <h3 className="font-semibold text-lg">{exp.company}</h3>
                        {exp.current && (
                          <span className="rounded-full border border-[var(--accent-emerald)]/40 bg-[var(--accent-emerald)]/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--accent-emerald)]">
                            current
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {exp.role} · <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{exp.location}</span>
                      </p>
                    </div>
                    <span className="rounded-lg border border-border/60 bg-background/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                    {exp.summary}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-5 space-y-2.5">
                    {exp.highlights.map((h, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="group/item flex gap-3 text-sm"
                      >
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-emerald)] transition-transform group-hover/item:translate-x-0.5" />
                        <div className="flex-1">
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <p className="font-medium leading-snug">{h.title}</p>
                            {h.metric && (
                              <span className="inline-flex items-center gap-1 rounded-md bg-[var(--accent-emerald)]/10 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-[var(--accent-emerald)]">
                                {h.metric.includes("40") || h.metric.includes("10") ? (
                                  <TrendingDown className="h-3 w-3" />
                                ) : (
                                  <Zap className="h-3 w-3" />
                                )}
                                {h.metric}
                              </span>
                            )}
                          </div>
                          <p className="mt-0.5 text-muted-foreground leading-relaxed">
                            {h.detail}
                          </p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border/50 pt-4">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border/50 bg-muted/30 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

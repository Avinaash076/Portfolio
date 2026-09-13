"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { projects } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section
      id="work"
      className="scroll-mt-14 border-y border-[var(--hair)] bg-[var(--paper-tint)] px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          num="05"
          eyebrow="projects"
          title="Things I've designed, built, and deployed."
          description="A selection of full-stack and mobile work — from configurable workflow platforms to real-time IoT dashboards and offline-first mobile apps."
        />

        <div className="border-t border-[var(--hair-strong)]">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group grid grid-cols-1 border-b border-[var(--hair)] py-10 sm:grid-cols-12 sm:gap-8"
            >
              {/* Index + meta column */}
              <div className="mb-5 sm:col-span-3 sm:mb-0">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {p.year}
                  </span>
                </div>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/70">
                  {p.category}
                </p>
                <p
                  className={cn(
                    "mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em]",
                    p.status === "shipped" ? "text-signal" : "text-muted-foreground"
                  )}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  {p.status}
                </p>
              </div>

              {/* Body */}
              <div className="sm:col-span-9">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-serif text-4xl font-light tracking-tight sm:text-5xl">
                    {p.name}
                  </h3>
                  <p className="font-serif text-lg italic text-muted-foreground">
                    {p.tagline}
                  </p>
                </div>

                <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-foreground/80">
                  {p.description}
                </p>

                {/* Highlights */}
                <ul className="mt-6 space-y-2.5">
                  {p.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="grid grid-cols-[auto_1fr] gap-3 text-[13px] leading-relaxed"
                    >
                      <span className="font-mono text-[11px] text-signal/70 pt-0.5">
                        →
                      </span>
                      <span className="text-muted-foreground">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Stack + links */}
                <div className="mt-7 flex flex-wrap items-end justify-between gap-4 border-t border-[var(--hair)] pt-5">
                  <div>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      stack
                    </p>
                    <p className="font-mono text-[12px] text-foreground/70">
                      {p.stack.join("  ·  ")}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    {p.repoUrl && (
                      <a
                        href={p.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Source
                        <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
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
      </div>
    </section>
  );
}

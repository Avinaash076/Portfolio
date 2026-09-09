"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  CheckCircle2,
  Star,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { projects, type Project } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const accentMap = {
  emerald: {
    text: "text-[var(--accent-emerald)]",
    border: "border-[var(--accent-emerald)]/40",
    bg: "bg-[var(--accent-emerald)]/10",
    glow: "from-[var(--accent-emerald)]/20",
    chip: "bg-[var(--accent-emerald)]/10 text-[var(--accent-emerald)] border-[var(--accent-emerald)]/30",
  },
  amber: {
    text: "text-[var(--accent-amber)]",
    border: "border-[var(--accent-amber)]/40",
    bg: "bg-[var(--accent-amber)]/10",
    glow: "from-[var(--accent-amber)]/20",
    chip: "bg-[var(--accent-amber)]/10 text-[var(--accent-amber)] border-[var(--accent-amber)]/30",
  },
  rose: {
    text: "text-[var(--accent-rose)]",
    border: "border-[var(--accent-rose)]/40",
    bg: "bg-[var(--accent-rose)]/10",
    glow: "from-[var(--accent-rose)]/20",
    chip: "bg-[var(--accent-rose)]/10 text-[var(--accent-rose)] border-[var(--accent-rose)]/30",
  },
} as const;

const statusMap: Record<Project["status"], { label: string; dot: string }> = {
  shipped: { label: "Shipped", dot: "bg-emerald-500" },
  live: { label: "Live", dot: "bg-amber-500" },
  "in-progress": { label: "In Progress", dot: "bg-blue-500" },
};

export function Projects() {
  return (
    <section
      id="work"
      className="relative scroll-mt-24 border-y border-border/40 bg-card/20 py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          num="05"
          eyebrow="projects"
          title="Things I've designed, built & deployed."
          description="A selection of full-stack and mobile work — from configurable workflow platforms to real-time IoT dashboards and offline-first mobile apps."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => {
            const a = accentMap[p.accent];
            const st = statusMap[p.status];
            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-background/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-emerald)]/40 hover:shadow-2xl hover:shadow-black/20 sm:p-7",
                  i === 0 && "lg:col-span-2"
                )}
              >
                {/* Glow */}
                <div
                  className={cn(
                    "pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br to-transparent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
                    a.glow
                  )}
                />

                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-2xl border font-mono text-lg font-bold",
                        a.border,
                        a.bg,
                        a.text
                      )}
                    >
                      {p.name[0]}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                          {p.name}
                        </h3>
                        {p.featured && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-[var(--accent-amber)]/30 bg-[var(--accent-amber)]/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--accent-amber)]">
                            <Star className="h-2.5 w-2.5 fill-current" />
                            featured
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{p.tagline}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                      <span className={cn("h-1.5 w-1.5 rounded-full", st.dot)} />
                      {st.label}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground/70">
                      {p.year} · {p.category}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-5 text-pretty text-sm leading-relaxed text-foreground/80">
                  {p.description}
                </p>

                {/* Highlights */}
                <ul className="mt-5 space-y-2">
                  {p.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2.5 text-sm">
                      <CheckCircle2
                        className={cn("mt-0.5 h-4 w-4 shrink-0", a.text)}
                      />
                      <span className="text-muted-foreground leading-relaxed">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className={cn(
                        "rounded-md border px-2 py-0.5 font-mono text-[11px]",
                        a.chip
                      )}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex items-center gap-3 border-t border-border/50 pt-5">
                  {p.demoUrl && (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-[var(--accent-emerald)]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live demo
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Source
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA to GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-border/70 bg-card/30 p-6 sm:flex-row"
        >
          <div>
            <p className="font-semibold">Want to see more code?</p>
            <p className="text-sm text-muted-foreground">
              Browse all my repositories on GitHub — including experiments and
              side projects.
            </p>
          </div>
          <a
            href="https://github.com/Avinaash076"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-5 py-2.5 text-sm font-medium transition-colors hover:border-[var(--accent-emerald)]/40 hover:text-[var(--accent-emerald)]"
          >
            <Github className="h-4 w-4" />
            github.com/Avinaash076
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

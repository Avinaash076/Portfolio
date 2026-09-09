"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Lock,
  Plug,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { skillCategories } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Lock,
  Plug,
};

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 border-y border-border/40 bg-card/20 py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-dots opacity-50" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          num="03"
          eyebrow="skills"
          title="A T-shaped full-stack toolkit."
          description="From device signals to dashboards — languages, backends, databases, security, and integrations I reach for in production."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            const isEmerald = cat.accent === "emerald";
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-emerald)]/40 hover:shadow-xl hover:shadow-black/10"
              >
                <div
                  className={cn(
                    "absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100",
                    isEmerald
                      ? "bg-[var(--accent-emerald)]/20"
                      : "bg-[var(--accent-amber)]/20"
                  )}
                />
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl border",
                      isEmerald
                        ? "border-[var(--accent-emerald)]/40 bg-[var(--accent-emerald)]/10 text-[var(--accent-emerald)]"
                        : "border-[var(--accent-amber)]/40 bg-[var(--accent-amber)]/10 text-[var(--accent-amber)]"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold leading-tight">{cat.title}</h3>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")} / {skillCategories.length}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {cat.skills.map((s, j) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.06 + j * 0.03 }}
                      className="cursor-default rounded-lg border border-border/50 bg-muted/40 px-2.5 py-1 font-mono text-xs text-foreground/80 transition-colors hover:border-[var(--accent-emerald)]/50 hover:bg-[var(--accent-emerald)]/10 hover:text-foreground"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

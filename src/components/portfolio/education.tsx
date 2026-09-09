"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  MapPin,
  Calendar,
  BadgeCheck,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { education, certifications } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          num="06"
          eyebrow="education & certs"
          title="Foundations & continuous learning."
          description="A computer-science foundation backed by hands-on automation and DevOps certifications."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Education */}
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-[var(--accent-emerald)]" />
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                education
              </h3>
            </div>
            <div className="space-y-4">
              {education.map((e, i) => (
                <motion.div
                  key={e.institution}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-[var(--accent-emerald)]/40"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--accent-emerald)]/10 blur-2xl" />
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h4 className="text-lg font-semibold">{e.institution}</h4>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {e.location}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-background/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-3 font-medium">{e.degree}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {e.detail}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-3 rounded-xl border border-[var(--accent-emerald)]/30 bg-[var(--accent-emerald)]/10 px-4 py-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent-emerald)]">
                      {e.score.label}
                    </span>
                    <span className="text-2xl font-bold text-[var(--accent-emerald)]">
                      {e.score.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5">
            <div className="mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-[var(--accent-amber)]" />
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                certifications
              </h3>
            </div>
            <div className="space-y-4">
              {certifications.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-5 transition-colors hover:border-[var(--accent-amber)]/40"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--accent-amber)]/40 bg-[var(--accent-amber)]/10 text-[var(--accent-amber)]">
                      <BadgeCheck className="h-5 w-5" />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold leading-snug">
                        {c.title}
                      </p>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        {c.issuer}
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {c.focus}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Marquee strip */}
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-background/40 p-4">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  always learning
                </p>
                <div className="relative overflow-hidden">
                  <div className="flex w-max animate-marquee gap-3">
                    {[...Array(2)].map((_, k) => (
                      <div key={k} className="flex gap-3">
                        {[
                          "system design",
                          "clean architecture",
                          "testing",
                          "DevOps",
                          "real-time systems",
                          "API design",
                          "performance",
                          "security",
                        ].map((t) => (
                          <span
                            key={t + k}
                            className="rounded-full border border-border/50 bg-card/40 px-3 py-1 font-mono text-xs text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

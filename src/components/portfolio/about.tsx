"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { profile, stats } from "@/lib/portfolio-data";

export function About() {
  return (
    <section id="about" className="scroll-mt-14 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          num="02"
          eyebrow="about"
          title="Reliable software for systems that can't lie."
          description={profile.summary}
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Bio — editorial prose */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="space-y-5 text-[17px] leading-[1.7] text-foreground/85">
              <p className="font-serif text-2xl font-light leading-relaxed italic text-foreground">
                I care about reliable web services, real-world automation, and
                maintainable enterprise software.
              </p>
              <p>
                I work end-to-end: device signals in, REST services in the
                middle, dashboards out the front. At Innovascape LLP I built
                and operate a real-time industrial monitoring platform used by
                enterprise clients — wiring ESP32/Arduino telemetry into
                application workflows and rendering it through a unified web
                dashboard.
              </p>
              <p>
                The work I&apos;m proudest of is unglamorous. Refactoring N+1
                queries with eager loading and batched joins to drop
                reporting-page load times by{" "}
                <span className="bg-signal-dim px-1 font-mono text-[0.85em] text-signal">
                  40%
                </span>
                . Hunting down a faulty SQL query that had silently generated{" "}
                <span className="bg-signal-dim px-1 font-mono text-[0.85em] text-signal">
                  220 incorrect records
                </span>
                , deploying the fix, and reconciling every one of them. Building
                bulk-import and dedup tooling that removed{" "}
                <span className="bg-signal-dim px-1 font-mono text-[0.85em] text-signal">
                  10+ hours
                </span>{" "}
                of manual ops work per week.
              </p>
              <p className="text-muted-foreground">
                Strong interest in clean testing practices, API validation, RBAC,
                secure sessions, and production debugging — the parts of
                software engineering that decide whether a system survives
                contact with real users.
              </p>
            </div>
          </motion.div>

          {/* Spec sheet — data table, not floating cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="border-t border-[var(--hair-strong)]">
              <div className="flex items-center justify-between border-b border-[var(--hair)] py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span>fig. 01 — measured outcomes</span>
                <span>verified</span>
              </div>

              <table className="w-full">
                <tbody>
                  {stats.map((s, i) => (
                    <tr
                      key={s.label}
                      className="border-b border-[var(--hair)] transition-colors hover:bg-[var(--paper-tint)]"
                    >
                      <td className="py-5 align-top">
                        <div className="flex items-baseline gap-1">
                          <span className="font-serif text-4xl font-light leading-none">
                            {s.value}
                          </span>
                          <span className="font-mono text-sm text-signal">
                            {s.suffix}
                          </span>
                        </div>
                      </td>
                      <td className="py-5 pl-4 align-top text-right">
                        <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                          {s.unit}
                        </div>
                        <div className="mt-1 text-[13px] leading-tight text-foreground/80">
                          {s.label}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex items-center justify-between py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/70">
                <span>source: résumé / self-reported</span>
                <span>n = {stats.length}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

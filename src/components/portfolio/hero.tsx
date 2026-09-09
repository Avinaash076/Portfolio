"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Mail, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] scroll-mt-14 px-5 pt-32 pb-16 sm:px-8 sm:pt-36"
    >
      <div className="mx-auto max-w-6xl">
        {/* Top meta strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between border-b border-[var(--hair)] pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span>est. 2024 · Bengaluru, IN</span>
          <span className="hidden sm:inline">portfolio / v1.0</span>
          <span className="flex items-center gap-2">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-signal" />
            open to work
          </span>
        </motion.div>

        {/* Main grid */}
        <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-12">
          {/* Headline */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground"
            >
              {"// full-stack developer · 1+ yr in production"}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
              className="font-serif text-[3.25rem] font-light leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.5rem]"
            >
              Avinaash
              <br />
              Munavalli
              <span className="text-signal">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 max-w-xl font-serif text-xl font-light leading-relaxed text-foreground/85 italic sm:text-2xl"
            >
              I ship industrial monitoring platforms, workflow-automation
              tools, and the backend plumbing that keeps them honest.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground"
            >
              Based in Bengaluru. Most recently: a real-time machine-telemetry
              dashboard for enterprise clients — where I cut page-load times by
              40%, reconciled 220 corrupted production records, and automated
              10+ hours of weekly ops work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-foreground"
              >
                See the work
                <ArrowDownRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-[0.15em] underline decoration-[var(--hair-strong)] underline-offset-4 transition-colors hover:decoration-signal"
              >
                Download résumé ↓
              </a>
            </motion.div>
          </div>

          {/* Dossier sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-12 border-t border-[var(--hair)] pt-8 lg:col-span-4 lg:mt-0 lg:border-l lg:border-t-0 lg:border-l-[var(--hair)] lg:pl-8 lg:pt-0"
          >
            <dl className="font-mono text-[11px] uppercase tracking-[0.12em]">
              <Row k="Role" v="Full-Stack Developer" />
              <Row k="Based" v={profile.location} />
              <Row k="Open to" v="Bengaluru / Remote" />
              <Row k="Email" v={profile.email} href={`mailto:${profile.email}`} />
              <Row k="Phone" v={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
              <Row k="GitHub" v={`@${profile.githubHandle}`} href={profile.github} />
              <Row
                k="LinkedIn"
                v="/in/avinaash-m"
                href={profile.linkedin}
                last
              />
            </dl>

            <div className="mt-8 flex items-center gap-4 border-t border-[var(--hair)] pt-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                find me
              </span>
              <div className="flex items-center gap-3">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-foreground">
                  <Github className="h-4 w-4" />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-foreground">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted-foreground transition-colors hover:text-foreground">
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Bottom rule */}
        <div className="flex items-center justify-between border-t border-[var(--hair)] pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
          <span>scroll to read</span>
          <span>01 — 07</span>
        </div>
      </div>
    </section>
  );
}

function Row({
  k,
  v,
  href,
  last,
}: {
  k: string;
  v: string;
  href?: string;
  last?: boolean;
}) {
  const inner = (
    <div
      className={`flex items-baseline justify-between gap-4 py-2.5 ${
        last ? "" : "border-b border-[var(--hair)]"
      }`}
    >
      <dt className="shrink-0 text-muted-foreground/80">{k}</dt>
      <dd className="text-right text-foreground normal-case tracking-normal lowercase first-letter:uppercase">
        {v}
      </dd>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block transition-colors hover:[&_dd]:text-signal">
      {inner}
    </a>
  ) : (
    inner
  );
}

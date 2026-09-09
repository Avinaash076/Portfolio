"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";

function useTypewriter(words: string[], typeMs = 80, holdMs = 1400) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === "") {
      // Defer state transitions so we don't call setState synchronously
      // inside the effect body (avoids cascading renders).
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, 60);
    } else {
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      timeout = setTimeout(() => setText(next), deleting ? typeMs / 2 : typeMs);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeMs, holdMs]);

  return text;
}

const floatingTech = [
  { label: "Node.js", x: "8%", y: "22%", delay: 0 },
  { label: "React", x: "82%", y: "16%", delay: 0.4 },
  { label: "MySQL", x: "10%", y: "74%", delay: 0.8 },
  { label: "Python", x: "86%", y: "70%", delay: 1.2 },
  { label: "PHP", x: "70%", y: "88%", delay: 0.6 },
  { label: "Kotlin", x: "22%", y: "90%", delay: 1.0 },
];

export function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-70" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklch,var(--accent-emerald)_14%,transparent),transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Floating tech chips */}
      {floatingTech.map((t) => (
        <motion.span
          key={t.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + t.delay * 0.3, duration: 0.6 }}
          className="pointer-events-none absolute hidden font-mono text-[11px] font-medium text-muted-foreground/70 md:block"
          style={{ left: t.x, top: t.y }}
        >
          <span className="animate-float-slow inline-flex items-center rounded-full border border-border/60 bg-card/60 px-3 py-1 backdrop-blur">
            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent-emerald)]" />
            {t.label}
          </span>
        </motion.span>
      ))}

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-[var(--accent-emerald)]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-emerald)]" />
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              available for work · {profile.availability.toLowerCase()}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-sans text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="block text-muted-foreground text-sm font-mono uppercase tracking-[0.3em] mb-4">
              {`> hello_world.exe`}
            </span>
            <span className="block">Avinaash</span>
            <span className="block">
              Munavalli
              <span className="text-[var(--accent-emerald)]">.</span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 flex items-center gap-3"
          >
            <span className="font-mono text-lg text-muted-foreground sm:text-2xl">
              &gt;
            </span>
            <span className="font-mono text-lg font-medium sm:text-2xl">
              <span className="text-gradient-emerald">{typed}</span>
              <span className="animate-blink ml-0.5 inline-block h-5 w-[3px] -translate-y-0.5 bg-[var(--accent-emerald)] align-middle sm:h-7" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-[var(--accent-emerald)] text-[var(--primary-foreground)] hover:bg-[var(--accent-emerald)]/90"
            >
              <a href="#work">
                <Sparkles className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                View my work
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border/70 bg-card/40 backdrop-blur"
            >
              <a href={profile.resumePath} target="_blank" rel="noreferrer">
                Download résumé
              </a>
            </Button>
            <div className="ml-1 flex items-center gap-1">
              {[
                { href: profile.github, Icon: Github, label: "GitHub" },
                { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <Button
                  key={label}
                  asChild
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                >
                  <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[var(--accent-emerald)]" />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-[var(--accent-emerald)]" />
              {profile.phone}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-[var(--accent-emerald)]" />
              {profile.email}
            </span>
          </motion.div>
        </div>

        {/* Right: terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 24, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="lg:col-span-5"
        >
          <TerminalCard />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Scroll down"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
            scroll
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}

function TerminalCard() {
  const lines = [
    { p: "avinaash@portfolio", c: "~", cmd: "whoami", out: "full-stack developer · 1+ yr production" },
    { p: "avinaash@portfolio", c: "~", cmd: "cat stack.json", out: '{"runtime":"node","ui":"react","db":"mysql"}' },
    { p: "avinaash@portfolio", c: "~", cmd: "deploy --env prod", out: "✓ build passed · ✓ 0 errors · shipped" },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-[var(--accent-emerald)]/20 via-transparent to-[var(--accent-amber)]/15 blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-border/70 glass shadow-2xl shadow-black/30">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-border/60 bg-card/60 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            ~/avinaash — zsh
          </span>
        </div>

        {/* Body */}
        <div className="space-y-3 p-5 font-mono text-[13px] leading-relaxed">
          <p className="text-muted-foreground">
            <span className="text-[var(--accent-emerald)]">➜</span>{" "}
            <span className="text-[var(--accent-amber)]">cat</span> profile.md
          </p>
          <p className="text-foreground/90">
            <span className="text-[var(--accent-emerald)]"># </span>
            Full-stack developer shipping enterprise software
          </p>

          {lines.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.5, duration: 0.4 }}
              className="space-y-1"
            >
              <p>
                <span className="text-[var(--accent-emerald)]">{l.p}</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-[var(--accent-amber)]">{l.c}</span>
                <span className="text-muted-foreground">$ </span>
                <span className="text-foreground">{l.cmd}</span>
              </p>
              <p className="pl-1 text-muted-foreground">{l.out}</p>
            </motion.div>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.4 }}
          >
            <span className="text-[var(--accent-emerald)]">➜</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-[var(--accent-amber)]">~</span>
            <span className="text-muted-foreground">$ </span>
            <span className="animate-blink inline-block h-3.5 w-2 -translate-y-0.5 bg-[var(--accent-emerald)] align-middle" />
          </motion.p>
        </div>
      </div>
    </div>
  );
}

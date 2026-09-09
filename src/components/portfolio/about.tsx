"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Cpu, Gauge, Clock, DatabaseZap, Quote } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { profile, stats } from "@/lib/portfolio-data";

function CountUp({
  end,
  suffix = "",
  duration = 1400,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const statIcons = [Cpu, Gauge, Clock, DatabaseZap];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          num="02"
          eyebrow="about"
          title="Reliable software for real-world systems."
          description={profile.summary}
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-6 sm:p-8 noise">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--accent-emerald)]/10 blur-3xl" />
              <Quote className="h-8 w-8 text-[var(--accent-emerald)]/70" />
              <p className="mt-4 text-lg leading-relaxed text-foreground/90">
                I care about{" "}
                <span className="text-[var(--accent-emerald)]">
                  reliable web services
                </span>
                , real-world automation, clean testing practices, and
                maintainable enterprise software. I&apos;ve shipped a
                real-time industrial monitoring platform used by enterprise
                clients, refactored N+1 queries to cut page-load times by up to
                40%, and automated 10+ hours of weekly operations work.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { k: "Currently", v: "Full-Stack Developer @ Innovascape LLP" },
                  { k: "Based in", v: profile.location },
                  { k: "Open to", v: "Bengaluru & remote roles across India" },
                  { k: "Focus", v: "Backend, automation, performance" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="rounded-xl border border-border/50 bg-background/40 p-3"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {row.k}
                    </p>
                    <p className="mt-1 text-sm font-medium">{row.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => {
                const Icon = statIcons[i % statIcons.length];
                return (
                  <div
                    key={s.label}
                    className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-5 transition-colors hover:border-[var(--accent-emerald)]/40"
                  >
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--accent-emerald)]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <Icon className="h-5 w-5 text-[var(--accent-emerald)]" />
                    <p className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                      <CountUp end={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      {s.unit}
                    </p>
                    <p className="mt-2 text-sm text-foreground/80">{s.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

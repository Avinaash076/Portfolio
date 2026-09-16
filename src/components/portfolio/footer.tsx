"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile, navSections } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[var(--hair-strong)] bg-[var(--paper-tint)]/20 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        {/* Top: index + colophon */}
        <div className="grid gap-10 sm:grid-cols-12">
          {/* Mark + tagline */}
          <div className="sm:col-span-5">
            <p className="font-serif text-2xl font-light tracking-tight">
              Avinaash<span className="text-signal">·</span>M
            </p>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
              Full-stack developer in Bengaluru. Building reliable, real-world
              web services — industrial monitoring, workflow automation, and
              clean enterprise software.
            </p>
            <div className="mt-5 flex items-center gap-4">
              {[
                { Icon: Github, href: profile.github, label: "GitHub" },
                { Icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
                { Icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-muted-foreground transition-colors hover:text-signal"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Index */}
          <div className="sm:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              index
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-y-1.5">
              {navSections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group inline-flex items-baseline gap-2 font-mono text-[12px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="text-signal/70">{s.num}</span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status + back to top */}
          <div className="sm:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              status
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-signal" />
              <p className="text-[13px] font-medium">Available for work</p>
            </div>
            <a
              href="#home"
              className="mt-5 inline-flex items-center gap-2 border-b border-[var(--hair-strong)] pb-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:border-signal hover:text-foreground"
            >
              Back to top
              <ArrowUp className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Colophon */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--hair)] pt-6 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/70 sm:flex-row sm:items-center">
          <p>
            © {year} {profile.name}
          </p>
          <p className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-signal" />
            built with next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

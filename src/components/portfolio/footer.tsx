"use client";

import { ArrowUp, Github, Linkedin, Mail, Heart, Terminal } from "lucide-react";
import { profile, navSections } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/50 bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--accent-emerald)]/40 bg-[var(--accent-emerald)]/10 text-[var(--accent-emerald)]">
                <Terminal className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="font-mono text-sm font-semibold">
                  {profile.firstName}
                  <span className="text-[var(--accent-emerald)]">.</span>
                  {profile.lastName[0].toLowerCase()}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {profile.role}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Building reliable, real-world web services — industrial
              monitoring, workflow automation, and clean enterprise software.
            </p>
            <div className="mt-4 flex items-center gap-2">
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
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/40 text-muted-foreground transition-colors hover:border-[var(--accent-emerald)]/40 hover:text-[var(--accent-emerald)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navSections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="font-mono text-[10px] text-[var(--accent-emerald)]/70">
                      {s.num}
                    </span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status / back to top */}
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              status
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-[var(--accent-emerald)]" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent-emerald)]" />
              </span>
              <p className="text-sm font-medium">Available for work</p>
            </div>
            <a
              href="#home"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-[var(--accent-emerald)]/40 hover:text-foreground"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-6 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            © {year} {profile.name}. Built with Next.js, Tailwind & care.
          </p>
          <p className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
            <Heart className="h-3 w-3 fill-[var(--accent-rose)] text-[var(--accent-rose)]" />
            Open to Bengaluru & remote roles across India
          </p>
        </div>
      </div>
    </footer>
  );
}

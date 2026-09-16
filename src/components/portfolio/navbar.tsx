"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navSections, profile } from "@/lib/portfolio-data";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navSections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div
        className={cn(
          "rule-b transition-all duration-200",
          scrolled ? "bg-transparent/50 backdrop-blur-md" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
          {/* Mark */}
          <button
            onClick={() => go("home")}
            className="group flex items-baseline gap-2"
            aria-label="Home"
          >
            <span className="font-serif text-lg font-medium leading-none tracking-tight">
              Avinaash<span className="text-signal">·</span>M
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
              / full-stack
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-5 lg:flex">
            {navSections.map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={cn(
                  "font-mono text-[11px] uppercase tracking-[0.15em] transition-colors",
                  active === s.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="text-signal/80">{s.num}</span>
                <span className="ml-1.5">{s.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              className="hidden font-mono text-[11px] uppercase tracking-[0.15em] text-foreground underline decoration-signal decoration-2 underline-offset-4 transition-opacity hover:opacity-70 sm:block"
              onClick={() => go("contact")}
            >
              Contact
            </button>
            <button
              className="lg:hidden"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="rule-b bg-transparent/80 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8">
            {navSections.map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={cn(
                  "flex items-center gap-3 border-b border-[var(--hair)] py-3 text-left font-mono text-xs uppercase tracking-[0.15em] last:border-b-0",
                  active === s.id ? "text-foreground" : "text-muted-foreground"
                )}
              >
                <span className="text-signal/80">{s.num}</span>
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navSections, profile } from "@/lib/portfolio-data";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-2xl border px-4 py-2.5 transition-all duration-300",
            scrolled
              ? "glass border-border/60 shadow-lg shadow-black/5"
              : "border-transparent bg-transparent"
          )}
        >
          {/* Logo */}
          <button
            onClick={() => go("home")}
            className="group flex items-center gap-2.5"
            aria-label="Home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--accent-emerald)]/40 bg-[var(--accent-emerald)]/10 text-[var(--accent-emerald)] transition-transform group-hover:scale-105">
              <Terminal className="h-4.5 w-4.5" />
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-mono text-sm font-semibold tracking-tight">
                {profile.firstName}
                <span className="text-[var(--accent-emerald)]">.</span>
                {profile.lastName[0].toLowerCase()}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                full-stack dev
              </span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navSections.map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={cn(
                  "group relative rounded-lg px-3 py-1.5 font-mono text-xs transition-colors",
                  active === s.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="mr-1 text-[var(--accent-emerald)]/70">
                  {s.num}
                </span>
                {s.label}
                {active === s.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-transparent via-[var(--accent-emerald)] to-transparent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              className="hidden rounded-full bg-[var(--accent-emerald)] text-[var(--primary-foreground)] hover:bg-[var(--accent-emerald)]/90 sm:inline-flex"
            >
              <a href="#contact">Let&apos;s talk</a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden"
            >
              <div className="mt-2 grid gap-1 rounded-2xl border border-border/60 glass p-3">
                {navSections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => go(s.id)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-left font-mono text-sm transition-colors",
                      active === s.id
                        ? "bg-[var(--accent-emerald)]/10 text-foreground"
                        : "text-muted-foreground hover:bg-muted/60"
                    )}
                  >
                    <span className="text-[var(--accent-emerald)]/70">
                      {s.num}
                    </span>
                    {s.label}
                  </button>
                ))}
                <Button
                  asChild
                  className="mt-1 rounded-xl bg-[var(--accent-emerald)] text-[var(--primary-foreground)]"
                >
                  <a href="#contact">Let&apos;s talk</a>
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

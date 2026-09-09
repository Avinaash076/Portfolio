"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  const toggle = () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      className="relative h-9 w-9 rounded-full border border-border/60 bg-background/40"
      onClick={toggle}
    >
      {/* Render both icons; CSS controls visibility based on .dark class.
          This avoids the mounted-state pattern (and hydration mismatch). */}
      <Sun className="hidden h-4 w-4 text-[var(--accent-amber)] dark:block" />
      <Moon className="block h-4 w-4 text-[var(--accent-emerald)] dark:hidden" />
    </Button>
  );
}

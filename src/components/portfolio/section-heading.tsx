"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  num,
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: {
  num: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground",
          align === "center" && "justify-center"
        )}
      >
        <span className="text-[var(--accent-emerald)]">{num}</span>
        <span className="h-px w-8 bg-gradient-to-r from-[var(--accent-emerald)]/60 to-transparent" />
        {eyebrow}
      </div>
      <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-pretty text-muted-foreground sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  num,
  eyebrow,
  title,
  description,
  className,
}: {
  num: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-14", className)}>
      {/* Top rule + section marker */}
      <div className="rule-strong-t pt-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </span>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-8 max-w-3xl font-serif text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="mt-5 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted-foreground"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

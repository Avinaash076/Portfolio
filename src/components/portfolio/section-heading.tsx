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
      <div className="rule-strong-t flex items-center justify-between pt-6">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-signal">§ {num}</span>
          <span>{eyebrow}</span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
          field notes
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

"use client";

import { useEffect, useState } from "react";

/**
 * A soft radial glow that follows the cursor on pointer devices.
 * On touch devices there are no mousemove events, so the glow stays
 * parked off-screen (invisible) — no state gating needed.
 */
export function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });

  useEffect(() => {
    let raf = 0;
    let tx = -400;
    let ty = -400;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          setPos({ x: tx, y: ty });
          raf = 0;
        });
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, color-mix(in oklch, var(--accent-emerald) 8%, transparent), transparent 60%)`,
      }}
    />
  );
}

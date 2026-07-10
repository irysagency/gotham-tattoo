"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { studio } from "@/config/studio";

/**
 * Desktop-only custom cursor: a single elegant ring that follows the pointer
 * with a smooth spring (so it trails slightly behind, never jerky). On hover
 * over any interactive element it shrinks and fills with the brand accent.
 */
export default function CustomCursor() {
  const accent = studio.accentColor; // #d4a437
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  // Raw pointer position.
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Smoothed position — near-instant with just enough smoothing to feel premium.
  const ringX = useSpring(x, { stiffness: 800, damping: 35, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 800, damping: 35, mass: 0.5 });

  useEffect(() => {
    // Only enable on devices with a precise pointer (desktop).
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      setHovering(
        Boolean(
          el?.closest("a, button, input, textarea, select, [data-cursor-hover]")
        )
      );
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full md:block"
      style={{
        x: ringX,
        y: ringY,
        width: 40,
        height: 40,
        marginLeft: -20,
        marginTop: -20,
        borderWidth: 1.5,
        borderStyle: "solid",
        borderColor: "#ffffff",
      }}
      animate={{
        scale: hovering ? 0.5 : 1,
        backgroundColor: hovering ? accent : `${accent}00`,
        borderColor: hovering ? accent : "#ffffff",
      }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
    />
  );
}

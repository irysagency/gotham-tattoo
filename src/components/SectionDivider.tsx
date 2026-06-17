"use client";

import { motion } from "motion/react";

/**
 * A thin full-width line that draws itself left → right when it enters the
 * viewport. Placed between major sections on the page.
 */
export default function SectionDivider() {
  return (
    <motion.div
      aria-hidden="true"
      className="h-px w-full origin-left bg-white/10"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

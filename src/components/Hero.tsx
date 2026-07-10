"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { studio } from "@/config/studio";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Title lines: one word (or syllable) per line, capped at 3 lines. */
const titleLines = studio.name.trim().split(/\s+/).slice(0, 3);

const lineVariants = {
  hidden: { opacity: 0, y: "0.4em" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE, delay: 0.25 + i * 0.12 },
  }),
};

export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="relative isolate flex h-screen min-h-screen w-full flex-col overflow-hidden"
      >
        {/* Background tattoo image — full bleed, Ken Burns zoom */}
        <div className="ken-burns absolute inset-0 -z-10">
          <Image
            src={studio.heroImage}
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Dark overlay — max 50% so the tattoo stays clearly visible */}
        <div className="absolute inset-0 -z-10 bg-black/50" />

        {/* Film grain */}
        <div className="grain" />

        {/* Centered hero: gigantic studio name, pure white */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center md:px-10">
          <h1
            aria-label={studio.name}
            className="font-serif uppercase leading-[0.82] text-white"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(8rem, 18vw, 22rem)",
              letterSpacing: "0.01em",
            }}
          >
            {titleLines.map((line, i) => (
              <span key={`${line}-${i}`} className="block overflow-hidden">
                <motion.span
                  custom={i}
                  variants={lineVariants}
                  initial="hidden"
                  animate="show"
                  className="block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>
      </section>

      {/* Sticky bottom bar — replaces the hero CTA buttons */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <span
            className="text-lg uppercase tracking-[0.2em] text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {studio.name}
          </span>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_25px_5px_rgba(212,164,55,0.5)]"
            style={{ backgroundColor: "#d4a437" }}
          >
            {studio.ctaLabel}
          </a>
        </div>
      </div>
    </>
  );
}

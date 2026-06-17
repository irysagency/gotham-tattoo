"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { studio } from "@/config/studio";

const EASE = [0.22, 1, 0.36, 1] as const;

type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: String(studio.establishedYear), label: "Année d'ouverture" },
  { value: String(studio.artists.length), label: "Artistes résidents" },
  { value: String(studio.galleryStyles.length), label: "Styles maîtrisés" },
];

const statsContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gold/50" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold">
                Le studio
              </span>
            </div>

            <h2
              className="font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              Un atelier, pas une chaîne.
            </h2>

            <p
              className="mt-6 max-w-prose leading-relaxed text-white"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              {studio.description}
            </p>

            {/* STAT ROW */}
            <motion.div
              variants={statsContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-10 grid grid-cols-3 gap-6 border-t border-white/5 pt-8"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={statItem}>
                  <div className="font-serif text-4xl font-light tracking-tight text-gold md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-white/80">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-10">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:border-gold/50 hover:text-gold"
              >
                Nos prestations
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT — image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative"
          >
            {/* floating accent line */}
            <span
              className="absolute -left-4 top-10 hidden h-24 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent lg:block"
              aria-hidden="true"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_60px_-20px_var(--gold)]">
              <Image
                src={studio.aboutImage}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* subtle dark gradient for depth */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent"
                aria-hidden="true"
              />
              {/* inner gold frame */}
              <div
                className="pointer-events-none absolute inset-3 rounded-xl border border-gold/20"
                aria-hidden="true"
              />
            </div>

            {/* established badge */}
            <div className="absolute -bottom-5 -right-2 rounded-full border border-gold/30 bg-[#111111] px-5 py-2 lg:right-6">
              <span className="font-serif text-sm tracking-wide text-gold">
                Depuis {studio.establishedYear}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

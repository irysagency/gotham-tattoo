"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Instagram } from "@/components/icons";
import { studio } from "@/config/studio";

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export default function Artists() {
  return (
    <section id="artists" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-14 md:mb-20"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold">
              L&apos;équipe
            </span>
          </div>
          <h2
            className="font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
          >
            Nos artistes
          </h2>
          <p
            className="mt-5 max-w-xl text-white"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Des mains singulières, une même exigence. Chacun de nos tatoueurs
            cultive un style qui lui est propre — choisissez celui qui dessinera
            votre prochaine pièce.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3"
        >
          {studio.artists.map((artist) => (
            <motion.div
              key={artist.name}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 40px 8px rgba(192, 57, 43, 0.3)",
                transition: { duration: 0.3 },
              }}
              transition={{ duration: 0.4, ease: EASE }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 transition-colors duration-300 hover:border-gold/40"
            >
              {/* Portrait */}
              <Image
                src={artist.photo}
                alt={artist.name}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Always-visible name plate */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pt-16 transition-opacity duration-300 group-hover:opacity-0">
                <h3
                  className="font-sans text-xl text-foreground"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  {artist.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-gold" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                  {artist.specialty}
                </p>
              </div>

              {/* Hover overlay reveal */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end gap-4 bg-black/70 p-6 opacity-0 backdrop-blur-sm transition-opacity duration-500 ease-out group-hover:opacity-100">
                <div>
                  <h3
                    className="font-sans text-2xl text-foreground"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                  >
                    {artist.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-gold" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                    {artist.specialty}
                  </p>
                </div>
                <p
                  className="line-clamp-5 text-sm leading-relaxed text-white"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  {artist.bio}
                </p>
                <a
                  href={artist.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-medium tracking-wide text-gold transition-all duration-300 hover:border-gold/60 hover:bg-gold/20"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  @{artist.instagram.replace(/\/+$/, "").split("/").pop()}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

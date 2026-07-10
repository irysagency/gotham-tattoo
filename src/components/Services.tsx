"use client";

import { motion } from "motion/react";
import { Layers, PenTool, RefreshCw, Sparkles } from "lucide-react";
import { studio } from "@/config/studio";

const EASE = [0.22, 1, 0.36, 1] as const;

const SERVICE_ICONS = [PenTool, Sparkles, Layers, RefreshCw] as const;

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

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
        >
          {studio.services.map((service, index) => {
            const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
            const indexLabel = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={service.name}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  boxShadow: "0 0 30px 5px rgba(212, 164, 55, 0.25)",
                  transition: { duration: 0.3 },
                }}
                transition={{ duration: 0.4, ease: EASE }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-colors duration-300 hover:border-white/20 md:p-10"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-6 top-6 select-none text-9xl font-light leading-none text-white/15"
                >
                  {indexLabel}
                </span>

                <span className="inline-flex w-fit rounded-lg bg-gold/10 p-2.5 text-gold">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>

                <h3
                  className="mt-6 font-sans text-xl font-normal tracking-tight text-white md:text-2xl"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  {service.name}
                </h3>

                <p
                  className="mt-3 flex-1 text-base text-white/80 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import {
  MessageCircle,
  Clock,
  Palette,
  CalendarCheck,
  Zap,
  Heart,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const ACCENT = "#c0392b";

const STEPS = [
  {
    Icon: MessageCircle,
    title: "PRISE DE CONTACT",
    description:
      "Remplis le formulaire ci-dessous avec ton projet : emplacement, taille, style, et toute référence visuelle qui t'inspire. Plus tu nous donnes de détails, mieux on peut te conseiller.",
  },
  {
    Icon: Clock,
    title: "RÉPONSE SOUS 48H",
    description:
      "L'un de nos artistes étudie ta demande et te recontacte par email ou téléphone pour échanger sur ta vision et évaluer la faisabilité du projet.",
  },
  {
    Icon: Palette,
    title: "ESTIMATION & DEVIS",
    description:
      "Selon la complexité, la taille et le style choisi, on t'envoie une estimation personnalisée. Pas de tarif fixe : chaque pièce est unique.",
  },
  {
    Icon: CalendarCheck,
    title: "RENDEZ-VOUS AU SALON",
    description:
      "On se retrouve au studio pour valider ensemble le design, affiner les détails et fixer la date de ta séance. Un acompte est demandé pour confirmer ta réservation.",
  },
  {
    Icon: Zap,
    title: "LA SÉANCE DE TATOUAGE",
    description:
      "Le grand jour. Ton artiste prend le temps qu'il faut pour réaliser une pièce à la hauteur de tes attentes, dans un cadre soigné et une ambiance détendue.",
  },
  {
    Icon: Heart,
    title: "LES SOINS & LE SUIVI",
    description:
      "On te remet un guide de cicatrisation complet. En cas de question ou pour une retouche gratuite si nécessaire, on reste disponibles. Ton tatouage mérite un suivi impeccable.",
  },
] as const;

// Per-step orchestration: circle pops first, content fades up 0.2s later.
const stepContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
const circleVariant = {
  hidden: { scale: 0, backgroundColor: "rgba(192, 57, 43, 0)" },
  show: {
    scale: 1,
    backgroundColor: ACCENT,
    transition: {
      scale: { type: "spring", stiffness: 320, damping: 11 },
      backgroundColor: { duration: 0.4, ease: EASE },
    },
  },
};

export default function Process() {
  const timelineRef = useRef<HTMLDivElement>(null);
  // Scroll-linked draw: the line fills as the section passes through center.
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  return (
    <section id="process" className="relative bg-[#0a0a0a] py-24 md:py-32">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-16 text-center font-sans uppercase leading-[0.9] text-5xl md:mb-24 md:text-6xl"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
        >
          <span className="block text-white">Votre projet</span>
          <span className="block" style={{ color: ACCENT }}>
            Étape par étape
          </span>
        </motion.h2>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Static background line — left on mobile, centered on desktop */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-6 top-0 w-px bg-white/10 md:left-1/2"
          />
          {/* Progress line — draws itself top→bottom on scroll */}
          <motion.span
            aria-hidden="true"
            style={{ scaleY: lineScale, backgroundColor: ACCENT }}
            className="absolute bottom-0 left-6 top-0 w-px origin-top md:left-1/2"
          />

          <div className="flex flex-col gap-14 md:gap-0">
            {STEPS.map(({ Icon, title, description }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={title}
                  variants={stepContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-120px" }}
                  className="relative md:grid md:grid-cols-2 md:items-center md:gap-x-16 md:py-10"
                >
                  {/* Circle node sitting on the line (positioned via left/top so
                      Tailwind's transform never collides with motion's scale) */}
                  <motion.div
                    variants={circleVariant}
                    className="absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-shadow duration-300 hover:shadow-[0_0_20px_5px_rgba(192,57,43,0.6)] md:left-[calc(50%-1.5rem)] md:top-[calc(50%-1.5rem)]"
                    style={{ borderColor: ACCENT }}
                  >
                    <Icon
                      className="h-5 w-5 text-white"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </motion.div>

                  {/* Content — alternates sides on desktop */}
                  <motion.div
                    variants={fadeUp}
                    className={
                      "pl-16 md:pl-0 " +
                      (isLeft
                        ? "md:col-start-1 md:pr-16 md:text-right"
                        : "md:col-start-2 md:pl-16")
                    }
                  >
                    <span
                      className="text-xs font-medium uppercase tracking-[0.3em]"
                      style={{ color: ACCENT }}
                    >
                      Étape {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="mt-2 font-sans text-2xl uppercase text-white"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      className="mt-2 text-sm leading-relaxed text-white/70"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                    >
                      {description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

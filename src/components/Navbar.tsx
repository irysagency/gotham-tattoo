"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";
import { studio } from "@/config/studio";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    setScrolled(current > 24);

    if (current > previous && current > 120 && !menuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-110%" : 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || menuOpen
          ? "border-b border-white/10 bg-background/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-8">
        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="group inline-flex items-center gap-2.5"
          aria-label={studio.name}
        >
          <span className="h-2 w-2 rounded-[1px] bg-gold transition-shadow duration-300 group-hover:shadow-[0_0_14px_0_var(--gold)]" />
          <span
            className="font-sans text-2xl tracking-wide text-foreground"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
          >
            {studio.name}
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-9 md:flex">
          {studio.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative text-sm text-white transition-colors duration-300 hover:text-gold hover:[text-shadow:0_0_20px_rgba(255,255,255,0.8)]"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center justify-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-medium tracking-wide text-[#0a0a0a] transition-all duration-300 hover:shadow-[0_0_25px_5px_rgba(192,57,43,0.5)] hover:brightness-110 md:inline-flex"
          >
            {studio.ctaLabel}
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground transition-colors duration-300 hover:border-gold/40 hover:text-gold md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="overflow-hidden border-t border-white/5 bg-[#0a0a0a]/95 backdrop-blur md:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
              }}
              className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-6"
            >
              {studio.nav.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                  }}
                >
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block py-3 text-2xl font-light tracking-tight text-white transition-colors duration-300 hover:text-gold hover:[text-shadow:0_0_20px_rgba(255,255,255,0.8)]"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                }}
                className="pt-4"
              >
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-medium tracking-wide text-[#0a0a0a] transition-all duration-300 hover:shadow-[0_0_25px_5px_rgba(192,57,43,0.5)] hover:brightness-110"
                >
                  {studio.ctaLabel}
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

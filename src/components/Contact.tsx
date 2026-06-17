"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  CheckCircle,
  Circle,
  Hexagon,
  Maximize,
} from "lucide-react";
import { Instagram, TikTok } from "@/components/icons";
import { studio } from "@/config/studio";

const EASE = [0.22, 1, 0.36, 1] as const;
const ACCENT = "#c0392b";

const mapSrc = `https://www.google.com/maps?q=${studio.address.coordinates.lat},${studio.address.coordinates.lng}&z=15&output=embed`;

/** Project-size options shown as clickable cards. */
const PROJECT_SIZES = [
  { id: "small", label: "Petite pièce", range: "Moins de 10 cm", Icon: Circle },
  { id: "medium", label: "Moyenne pièce", range: "10 – 20 cm", Icon: Hexagon },
  {
    id: "large",
    label: "Grande pièce / Dos complet",
    range: "Plus de 20 cm",
    Icon: Maximize,
  },
] as const;

// Shared field styling: dark surface, white text, accent focus, no native chrome.
const inputClasses =
  "w-full appearance-none rounded-lg border border-white/10 bg-[#1a1a1a] px-4 py-3 text-white outline-none transition-colors duration-300 placeholder:text-white/30 focus:border-[#c0392b]";
const labelClasses =
  "mb-2 block text-xs uppercase tracking-[0.2em] text-white/50";
const interStyle = { fontFamily: "'Inter', sans-serif", fontWeight: 300 };

// Stagger container + item for the form fields appearing on scroll.
const formContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const fieldVariant = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [styles, setStyles] = useState<string[]>([]);
  const [size, setSize] = useState<string>("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function toggleStyle(value: string) {
    setStyles((prev) =>
      prev.includes(value)
        ? prev.filter((s) => s !== value)
        : [...prev, value]
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleReset() {
    setFullName("");
    setPhone("");
    setEmail("");
    setStyles([]);
    setSize("");
    setMessage("");
    setConsent(false);
    setSubmitted(false);
  }

  return (
    <section id="contact" className="relative bg-[#0a0a0a] py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-6 md:px-8 lg:grid-cols-[2fr_3fr] lg:gap-20">
        {/* ───────────────── LEFT (40%) ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-col gap-10"
        >
          <div>
            <h2
              className="font-sans uppercase leading-[0.9] text-white text-5xl md:text-6xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
            >
              <span className="block">Parlons de</span>
              <span className="block">votre projet</span>
            </h2>
            <p className="mt-6 max-w-md text-white/70" style={interStyle}>
              Chaque tatouage commence par une conversation. Décrivez-nous votre
              idée, nous vous répondons sous 48h.
            </p>
          </div>

          {/* Contact info blocks */}
          <div className="flex flex-col gap-6">
            {/* Phone */}
            <a
              href={`tel:${studio.phone.replace(/\s+/g, "")}`}
              className="group flex items-start gap-4"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${ACCENT}1a`, color: ACCENT }}
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Téléphone
                </span>
                <span className="mt-1 text-lg text-white transition-colors duration-300 group-hover:text-gold">
                  {studio.phone}
                </span>
              </span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${studio.email}`}
              className="group flex items-start gap-4"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${ACCENT}1a`, color: ACCENT }}
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Email
                </span>
                <span className="mt-1 text-lg text-white transition-colors duration-300 group-hover:text-gold">
                  {studio.email}
                </span>
              </span>
            </a>

            {/* Address + itinéraire */}
            <div className="flex items-start gap-4">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${ACCENT}1a`, color: ACCENT }}
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Adresse
                </span>
                <span className="mt-1 text-lg text-white">
                  {studio.address.street}
                </span>
                <span className="text-lg text-white">
                  {studio.address.zip} {studio.address.city}
                </span>
                <a
                  href={studio.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex w-fit items-center gap-1 text-sm font-medium text-gold transition-colors duration-300 hover:text-gold/80"
                >
                  Itinéraire
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider + appointment note + socials */}
          <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
            <p className="text-sm text-white/70" style={interStyle}>
              Sur rendez-vous uniquement
            </p>
            <div className="flex items-center gap-3">
              <a
                href={studio.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:border-gold/40 hover:text-gold"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={studio.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:border-gold/40 hover:text-gold"
              >
                <TikTok className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Carte"
              src={mapSrc}
              loading="lazy"
              width="100%"
              height={280}
              className="block w-full border-0"
              style={{
                filter:
                  "invert(0.92) hue-rotate(180deg) brightness(0.9) contrast(0.9) grayscale(0.2)",
              }}
            />
          </div>
        </motion.div>

        {/* ───────────────── RIGHT (60%) — form ───────────────── */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-10">
          {submitted ? (
            <div className="flex h-full min-h-[28rem] flex-col items-center justify-center gap-5 text-center">
              <CheckCircle className="h-14 w-14 text-gold" aria-hidden="true" />
              <h3
                className="text-3xl uppercase text-white"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
              >
                Demande envoyée
              </h3>
              <p className="max-w-sm text-white/70" style={interStyle}>
                Merci ! Nous revenons vers vous sous 48h pour échanger sur votre
                projet.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:border-gold/50 hover:text-gold"
              >
                Envoyer une autre demande
              </button>
            </div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              variants={formContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-7"
            >
              {/* Name + phone */}
              <motion.div
                variants={fieldVariant}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2"
              >
                <div>
                  <label htmlFor="contact-name" className={labelClasses}>
                    Nom complet
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Jeanne Dupont"
                    className={inputClasses}
                    style={interStyle}
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className={labelClasses}>
                    Téléphone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="06 12 34 56 78"
                    className={inputClasses}
                    style={interStyle}
                  />
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={fieldVariant}>
                <label htmlFor="contact-email" className={labelClasses}>
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vous@exemple.fr"
                  className={inputClasses}
                  style={interStyle}
                />
              </motion.div>

              {/* Style tags (multi-select) */}
              <motion.div variants={fieldVariant}>
                <span className={labelClasses}>Style souhaité</span>
                <div className="flex flex-wrap gap-2.5">
                  {studio.galleryStyles.map((s) => {
                    const active = styles.includes(s);
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleStyle(s)}
                        aria-pressed={active}
                        className="rounded-full px-4 py-2 text-sm tracking-wide text-white transition-all duration-300"
                        style={{
                          ...interStyle,
                          backgroundColor: active
                            ? ACCENT
                            : "rgba(255,255,255,0.1)",
                        }}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Project size cards */}
              <motion.div variants={fieldVariant}>
                <span className={labelClasses}>Taille du projet</span>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {PROJECT_SIZES.map(({ id, label, range, Icon }) => {
                    const active = size === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setSize(id)}
                        aria-pressed={active}
                        className="flex flex-col items-start gap-2 rounded-lg border p-4 text-left transition-all duration-300"
                        style={{
                          borderColor: active ? ACCENT : "rgba(255,255,255,0.1)",
                          backgroundColor: active ? `${ACCENT}1a` : "#1a1a1a",
                        }}
                      >
                        <Icon
                          className="h-5 w-5"
                          style={{ color: active ? ACCENT : "#ffffff" }}
                          aria-hidden="true"
                        />
                        <span className="text-sm font-medium text-white" style={interStyle}>
                          {label}
                        </span>
                        <span className="text-xs text-white/50" style={interStyle}>
                          {range}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Message */}
              <motion.div variants={fieldVariant}>
                <label htmlFor="contact-message" className={labelClasses}>
                  Décrivez votre projet
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Emplacement sur le corps, taille approximative, références visuelles, histoire derrière le projet..."
                  className={`${inputClasses} resize-none`}
                  style={interStyle}
                />
              </motion.div>

              {/* Consent checkbox */}
              <motion.label
                variants={fieldVariant}
                htmlFor="contact-consent"
                className="flex cursor-pointer items-start gap-3 text-sm text-white/70"
                style={interStyle}
              >
                <input
                  id="contact-consent"
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#c0392b]"
                />
                J&apos;accepte d&apos;être contacté par téléphone ou email pour
                ce projet
              </motion.label>

              {/* Submit */}
              <motion.button
                variants={fieldVariant}
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-lg py-5 text-xl uppercase tracking-[0.05em] text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_25px_5px_rgba(192,57,43,0.5)]"
                style={{
                  backgroundColor: ACCENT,
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                Envoyer ma demande
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </motion.button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}

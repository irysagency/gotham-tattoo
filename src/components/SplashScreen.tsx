"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { studio } from "@/config/studio";

/**
 * Full-screen black intro overlay shown once per session. The studio name fades
 * in after 0.8s, then the whole overlay fades out at 1.8s to reveal the site.
 */
export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Play only once per browser session.
    if (sessionStorage.getItem("noir-splash-shown")) {
      setVisible(false);
      return;
    }
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("noir-splash-shown", "1");
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="px-6 text-center text-6xl text-white md:text-8xl"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.15em",
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {studio.name}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

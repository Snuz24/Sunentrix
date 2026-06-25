"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after the user scrolls past the hero
      setVisible(window.scrollY > 600);

      // Hide once the contact section is in view (avoid redundancy)
      const contact = document.getElementById("contact");
      if (contact) {
        const rect = contact.getBoundingClientRect();
        setAtContact(rect.top < window.innerHeight * 0.75);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const show = visible && !atContact;

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -2 }}
          className="group fixed bottom-6 right-6 z-50 flex items-center gap-2.5 pl-5 pr-5 py-3.5 rounded-full bg-accent-gradient text-white text-[14px] font-semibold shadow-accent"
          aria-label="Contact me"
        >
          <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 20 20">
            <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M3.5 6l6.5 4.5L16.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Contact Me
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full ring-2 ring-accent/40 animate-ping opacity-0 group-hover:opacity-60 pointer-events-none" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

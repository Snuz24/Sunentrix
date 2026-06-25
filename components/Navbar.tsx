"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navLinks = [
  { label: "Work",     href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About",    href: "#about" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "glass-warm shadow-soft py-3" : "bg-transparent py-5"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Wordmark */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-lg bg-accent-gradient flex items-center justify-center shadow-accent-sm">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M6.5 1.5L11 4.25v5.5L6.5 12.5 2 9.75v-5.5L6.5 1.5z" fill="white" fillOpacity="0.95" />
              </svg>
            </div>
            <span className="flex items-baseline gap-1.5">
              <span className="text-[15px] font-semibold tracking-tight text-text-primary">Sunentrix</span>
              <span className="hidden sm:inline text-[10.5px] font-medium tracking-wide text-text-muted">Storytelling Studio</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[13.5px] font-medium text-text-secondary hover:text-text-primary rounded-lg hover:bg-text-primary/[0.04] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#work" className="text-[13.5px] font-medium text-text-secondary hover:text-text-primary transition-colors">
              View Work
            </a>
            <a
              href="#contact"
              className="px-4 py-2.5 text-[13px] font-semibold bg-accent-gradient rounded-xl text-white shadow-button hover:shadow-accent transition-shadow"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-text-primary/[0.05] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-[14px] flex flex-col justify-between">
              <span className={clsx("block w-full h-[1.5px] bg-current transition-all duration-300 origin-center", mobileOpen && "translate-y-[6px] rotate-45")} />
              <span className={clsx("block w-full h-[1.5px] bg-current transition-all duration-300", mobileOpen && "opacity-0")} />
              <span className={clsx("block w-full h-[1.5px] bg-current transition-all duration-300 origin-center", mobileOpen && "-translate-y-[6px] -rotate-45")} />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-[60px] z-40 glass-warm border-b border-border p-6 flex flex-col gap-1.5 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-[15px] font-medium text-text-secondary hover:text-text-primary rounded-xl hover:bg-text-primary/[0.04] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-4 border-t border-border">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-4 py-3 text-[14px] font-semibold bg-accent-gradient rounded-xl text-white"
              >
                Book a Discovery Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

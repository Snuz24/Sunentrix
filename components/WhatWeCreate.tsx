"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const items = [
  {
    title: "Story-Driven UGC",
    description: "Authentic, scroll-stopping creator-style videos that make your AI product feel real, relatable, and worth trying.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <rect x="3" y="3" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8.5 7.5v5l4-2.5-4-2.5z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Product Demo Videos",
    description: "Clear walkthroughs that show exactly what your product does and why it matters — without the jargon or confusion.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <rect x="2.5" y="4" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 8.5v3l3-1.5-3-1.5zM7 17h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Founder Storytelling",
    description: "Human-first videos that put your voice and vision front and center, building the trust that turns viewers into believers.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <path d="M10 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM4 17a6 6 0 0112 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Product Launch Videos",
    description: "Launch content that builds anticipation and turns a release into a moment people actually pay attention to.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <path d="M11 3c3 1 5 4 5 7l-3 3-4-4 2-6zM9 13l-2 2M7 10l-3 1 1.5 1.5M9 16l1-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Feature Announcements",
    description: "Short, sharp videos that help users understand new features fast — and actually start using them.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <path d="M4 8v4l9 4V4L4 8zM4 8H3a1 1 0 00-1 1v2a1 1 0 001 1h1M13 7c1.5 0 1.5 6 0 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Social-First AI Content",
    description: "Platform-ready content built for how people actually scroll — designed to earn attention on social from the first second.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <circle cx="6" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="14" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="14" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8.2 8.8l3.6-2.2M8.2 11.2l3.6 2.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function WhatWeCreate() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="section-label mb-4">What We Create</p>
          <h2 className="text-[2rem] sm:text-[2.6rem] font-bold tracking-tightest text-gradient-warm leading-tight mb-5">
            Everything You Need to Tell Your Product's Story.
          </h2>
          <p className="text-[15.5px] text-text-secondary leading-relaxed">
            Six kinds of content, all built for AI companies. Whatever stage you're at — launching, growing, or explaining something new — there's a format for it.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group p-7 rounded-2xl bg-card card-border hover:shadow-card-hover transition-shadow duration-300"
              style={{ boxShadow: "0 1px 3px rgba(28,28,46,0.05), 0 4px 20px rgba(28,28,46,0.06)" }}
              whileHover={{ y: -3 }}
            >
              <div className="w-11 h-11 rounded-xl bg-accent-light text-accent flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-[16px] font-semibold text-text-primary tracking-snug mb-2">{item.title}</h3>
              <p className="text-[13.5px] text-text-secondary leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Inline CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 px-6 py-3.5 text-[14.5px] font-semibold bg-accent-gradient rounded-xl text-white shadow-button hover:shadow-accent transition-shadow"
          >
            See the Work
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 16 16">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-[14.5px] font-semibold rounded-xl border border-border-md text-text-primary hover:bg-text-primary/[0.03] transition-all"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

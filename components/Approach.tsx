"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand the Product",
    description:
      "I start by really getting to know the product — the website, the documentation, the demo videos, whatever resources exist. I want to understand what it actually does and why it's interesting. If it helps, I'll look at competitors too, just to see how everyone else is positioning themselves and to find what genuinely makes your product different.",
    accent: "#7c6fe0",
    bg: "#ede9fb",
  },
  {
    number: "02",
    title: "Find the Human Insight",
    description:
      "Then I shift from the product to the person. What's the real frustration, ambition, desire, or curiosity that this product quietly solves? This is the part most content skips, and it's the part that matters most. I never start with features — I start with the human being on the other side of the screen.",
    accent: "#8b7ee4",
    bg: "#f0eefe",
  },
  {
    number: "03",
    title: "Build the Story",
    description:
      "Now I turn the product into something simple and memorable. I look for a strong hook, an emotional flow that carries you through, and a narrative where the product shows up naturally instead of being forced in. The aim is for it to feel like a story you'd actually want to watch — not an ad you're waiting to skip.",
    accent: "#9a8ee8",
    bg: "#f3f0fe",
  },
  {
    number: "04",
    title: "Refine Every Second",
    description:
      "This is where most of the real work happens. I rewrite until every sentence earns the next one. I'm watching for retention and clarity the whole way through — cutting words that don't pull their weight, tightening the pacing, and strengthening the emotional payoff so people actually want to keep watching to the end.",
    accent: "#a99fe8",
    bg: "#f5f0fe",
  },
  {
    number: "05",
    title: "Inspire Action",
    description:
      "Finally, I end with a call to action that feels natural rather than pushy — something that leaves people curious enough to try the product, visit the site, or learn more. The goal was never just views. It's understanding, trust, and genuine interest in what you've built.",
    accent: "#b8aff0",
    bg: "#f7f5fe",
  },
];

export default function Approach() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 px-6 bg-surface overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="section-label mb-4">My Process</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-[2rem] sm:text-[2.6rem] font-bold tracking-tightest text-gradient-warm leading-tight max-w-xl">
              From Product to Story. Five Deliberate Steps.
            </h2>
            <p className="max-w-sm text-[14.5px] text-text-secondary leading-relaxed">
              A repeatable framework developed across dozens of AI product campaigns — built to work for technical products with non-technical audiences.
            </p>
          </div>
        </motion.div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="hidden lg:block absolute left-[30px] top-8 bottom-8 w-px bg-gradient-to-b from-accent/25 via-accent/15 to-transparent" />

          <div className="flex flex-col gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -18 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.08 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex gap-5 lg:gap-8 items-start"
              >
                {/* Step bubble */}
                <div
                  className="relative flex-shrink-0 w-[60px] h-[60px] rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                  style={{ background: step.bg, border: `1px solid ${step.accent}22` }}
                >
                  <span className="text-[11.5px] font-bold tracking-widest" style={{ color: step.accent }}>
                    {step.number}
                  </span>
                </div>

                {/* Card */}
                <div
                  className="flex-1 rounded-2xl px-6 py-5 bg-card card-border group-hover:shadow-card transition-shadow duration-300"
                >
                  <h3 className="text-[17px] font-semibold text-text-primary tracking-snug mb-2">{step.title}</h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

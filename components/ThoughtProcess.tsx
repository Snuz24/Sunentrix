"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const framework = [
  {
    number: "01",
    title: "Understand the product",
    description:
      "I explore the product, its features, and what genuinely makes it different from everything else out there.",
  },
  {
    number: "02",
    title: "Understand the person",
    description:
      "I look for the real emotion behind it — the frustration, desire, or ambition that's actually driving the user.",
  },
  {
    number: "03",
    title: "Build the story",
    description:
      "I create a hook that captures attention and a story built to be remembered, not just watched once and forgotten.",
  },
  {
    number: "04",
    title: "Inspire action",
    description:
      "I connect the product to a real outcome, so by the end viewers understand exactly why it matters to them.",
  },
];

export default function ThoughtProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 px-6 bg-canvas overflow-hidden">
      <div className="absolute left-[10%] top-1/4 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header + philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label mb-5">My Thought Process</p>
            <h2 className="text-[2rem] sm:text-[2.5rem] font-bold tracking-tightest text-gradient-warm leading-[1.12]">
              Great AI products deserve more than feature lists. They deserve stories people remember.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5 text-[15.5px] leading-[1.85] text-text-secondary"
          >
            <p>
              Every project starts with one question: <span className="text-text-primary font-medium">"Why should someone care?"</span> I first understand the product, then the person using it. I look for the frustration they're trying to solve, the ambition they're chasing, and the moment that makes them stop scrolling.
            </p>
            <p>
              From there, I turn complex AI products into simple, relatable stories that capture attention, build trust, and make people want to learn more. No jargon, no feature dumps — just an idea that connects.
            </p>
            <p>
              The process is simple, and it's the same every time. Understand the product. Understand the person. Build the story. Inspire action.
            </p>
          </motion.div>
        </div>

        {/* Framework grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {framework.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-7 rounded-2xl bg-card card-border hover:shadow-card-hover transition-shadow duration-300"
              style={{ boxShadow: "0 1px 3px rgba(28,28,46,0.05), 0 4px 20px rgba(28,28,46,0.06)" }}
              whileHover={{ y: -3 }}
            >
              {/* Number watermark */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[28px] font-bold tracking-tight text-gradient-accent leading-none">{step.number}</span>
                <span className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform duration-300" />
                </span>
              </div>
              <h3 className="text-[15.5px] font-semibold text-text-primary tracking-snug leading-snug mb-2.5">
                {step.title}
              </h3>
              <p className="text-[13.5px] text-text-secondary leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 text-center"
        >
          <p className="text-[16px] sm:text-[18px] font-medium text-text-primary tracking-snug max-w-2xl mx-auto leading-relaxed">
            I don't just make videos. I know how to position products, shape perception, and communicate value — so the right people understand exactly why your product matters.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

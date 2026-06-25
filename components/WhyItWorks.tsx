"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    number: "01",
    title: "People Before Products",
    description:
      "I always start with the person, not the product. Before I think about a single feature, I'm thinking about their frustrations, their ambitions, and the things they quietly want. Get the human right and the product almost introduces itself.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <path d="M10 2a4 4 0 100 8 4 4 0 000-8zM4 18a6 6 0 0112 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    bg: "bg-[#ede9fb]",
    iconColor: "text-accent",
  },
  {
    number: "02",
    title: "Attention Is Earned",
    description:
      "Attention is the most valuable currency we have right now, and you don't get it for free. A strong hook is what gets someone to stop — but it's the storytelling that comes after it that actually gives them a reason to stay.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <path d="M7.5 2.5L3.5 9.5h4l-.5 5.5 6-8h-4l.5-4.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
    bg: "bg-[#f0eefe]",
    iconColor: "text-accent",
  },
  {
    number: "03",
    title: "Understand Before You Explain",
    description:
      "I never write a script for a product I don't actually understand. I explore the features, read the documentation, try the product when I can, and look at competitors if it helps me see what makes it genuinely different. You can't simplify something you only half-know.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <rect x="3" y="4" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 8h6M7 11h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    bg: "bg-[#f5f0fe]",
    iconColor: "text-accent",
  },
  {
    number: "04",
    title: "Stories Create Connection",
    description:
      "People rarely remember a list of features. What they remember is how a product made them feel. So I focus on emotional stories that help people understand what you've built, trust that it's for them, and still remember it later.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <path d="M10 3c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 11.5s.75 1.5 3 1.5 3-1.5 3-1.5M7.5 8h.01M12.5 8h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    bg: "bg-[#eeedfb]",
    iconColor: "text-accent",
  },
];

export default function WhyItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 px-6 bg-canvas">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">What Guides Every Story</p>
          <h2 className="text-[2rem] sm:text-[2.6rem] font-bold tracking-tightest text-gradient-warm leading-tight max-w-2xl mx-auto">
            Every AI product has features. Not every one has a story people remember.
          </h2>
          <p className="mt-5 text-[15px] text-text-secondary max-w-xl mx-auto leading-relaxed">
            My goal isn't just to make something that looks good. It's to make people stop scrolling, understand what your product actually does, and still remember it tomorrow. These are the few things I hold onto in every project to get there.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex gap-5 p-7 rounded-2xl bg-card card-border hover:shadow-card-hover transition-shadow duration-300"
              style={{ boxShadow: "0 1px 3px rgba(28,28,46,0.05), 0 4px 20px rgba(28,28,46,0.06)" }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${card.bg} ${card.iconColor} flex items-center justify-center mt-0.5`}>
                {card.icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-[16px] font-semibold text-text-primary tracking-snug">{card.title}</h3>
                  <span className="text-[10.5px] font-bold text-text-muted/60 tracking-widest">{card.number}</span>
                </div>
                <p className="text-[13.5px] text-text-secondary leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

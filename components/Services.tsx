"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    id: "01",
    title: "AI Product Demos",
    description:
      "Educational walkthroughs and feature showcases that make complex AI behavior feel intuitive and immediately valuable. Designed for users who need to see it to believe it — and believe it to adopt it.",
    deliverables: ["Product Walkthrough", "Feature Showcase", "Onboarding Content"],
    accent: "#7c6fe0",
    bg: "#ede9fb",
  },
  {
    id: "02",
    title: "Founder Storytelling Videos",
    description:
      "Human-centered narratives that put the founder's voice at the center of the brand story. The fastest path to trust with an audience of skeptical, discerning operators is a founder who can explain why they built what they built.",
    deliverables: ["Origin Story", "Vision Content", "Brand Narrative"],
    accent: "#8b7ee4",
    bg: "#f0eefe",
  },
  {
    id: "03",
    title: "AI Ad Creatives",
    description:
      "Short-form content engineered for performance. Every ad is built around a single emotional insight, structured for maximum watch time, and optimized for the click that happens when someone goes from curious to convinced.",
    deliverables: ["Paid Social Ads", "Organic Growth", "Conversion Assets"],
    accent: "#9a8ee8",
    bg: "#f3f0fe",
  },
  {
    id: "04",
    title: "Product Launch Campaigns",
    description:
      "End-to-end content strategy for feature launches and product releases. Teaser to announcement to education — a coherent narrative arc that builds anticipation and converts it into activation.",
    deliverables: ["Launch Strategy", "Announcement Content", "Education Series"],
    accent: "#a99fe8",
    bg: "#f5f0fe",
  },
  {
    id: "05",
    title: "Monthly Content Partnerships",
    description:
      "A retained creative partnership for AI startups that need consistent, high-quality content without the overhead of an in-house creative team. Strategy included — not just execution.",
    deliverables: ["Ongoing Strategy", "Monthly Content", "Performance Review"],
    accent: "#b8aff0",
    bg: "#f7f5fe",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-24 px-6 bg-canvas">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="section-label mb-4">Services</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-[2rem] sm:text-[2.6rem] font-bold tracking-tightest text-gradient-warm leading-tight max-w-xl">
              What We Can Build Together.
            </h2>
            <p className="max-w-sm text-[14.5px] text-text-secondary leading-relaxed">
              Every engagement starts with one question: what story does your product need to tell right now — and who needs to hear it?
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-3">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col sm:flex-row sm:items-center gap-6 p-6 rounded-2xl bg-card card-border hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.22 }}
            >
              {/* Number + icon */}
              <div
                className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-[11.5px] font-bold tracking-widest"
                style={{ background: service.bg, color: service.accent }}
              >
                {service.id}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-[17px] font-semibold text-text-primary tracking-snug mb-1.5">{service.title}</h3>
                <p className="text-[13.5px] text-text-secondary leading-relaxed">{service.description}</p>
              </div>

              {/* Deliverables */}
              <div className="flex flex-wrap sm:flex-col gap-1.5 sm:items-end flex-shrink-0 sm:min-w-[160px]">
                {service.deliverables.map((d) => (
                  <span
                    key={d}
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap"
                    style={{ background: service.bg, color: service.accent }}
                  >
                    {d}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <svg
                className="flex-shrink-0 w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                fill="none" viewBox="0 0 16 16"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Pricing note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 p-6 rounded-2xl bg-accent-light border border-accent-mid/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <p className="text-[14.5px] font-semibold text-text-primary">Custom-scoped to your product and stage</p>
            <p className="text-[13px] text-text-secondary mt-0.5">Tell me what you need and your budget — we'll shape deliverables and timeline around it together.</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 text-[13.5px] font-semibold bg-accent-gradient rounded-xl text-white shadow-button hover:shadow-accent-sm transition-shadow whitespace-nowrap"
          >
            Book a Discovery Call
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

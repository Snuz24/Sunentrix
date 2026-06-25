"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EMAIL = "sneha.jay@sunentrix.cfd";
const LINKEDIN = "https://www.linkedin.com/in/sneha-jayabhaye-253b27280/";

const steps = [
  {
    number: "01",
    title: "Share your product",
    description: "Email me or connect on LinkedIn and tell me a little about what you're building — your product, who it's for, and what you're hoping to achieve. You don't need a polished brief. A link and a few honest sentences about where you are right now is the perfect place to begin.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3.5 6l6.5 4.5L16.5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "I turn your product into a story",
    description: "Before I create anything, I take the time to really understand your product, the people using it, and how it's positioned. Then I shape concepts that are built around human emotions and what's actually going on in your users' heads — not just a list of features. The goal is a story people feel, not a demo they tolerate.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <path d="M10 2.5l1.8 4 4.2.5-3.1 2.9.8 4.1L10 12l-3.7 2L7.1 9.9 4 7l4.2-.5L10 2.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "We create content people remember",
    description: "Once we're aligned on the creative direction, timeline, deliverables, and pricing, I get to work. You get polished, platform-ready content designed to help people discover your product, understand what it does, trust that it's for them, and still remember it long after they've scrolled past.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <path d="M3 10.5l3.5 3.5L17 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-24 px-6 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(124,111,224,0.05)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p className="section-label mb-4">Get In Touch</p>
          <h2 className="text-[2rem] sm:text-[2.8rem] font-bold tracking-tightest text-gradient-warm leading-tight mb-5">
            Let's Build Content People<br />Actually Remember.
          </h2>
          <p className="text-[15.5px] text-text-secondary max-w-lg mx-auto leading-relaxed">
            The fastest way to start a conversation with the studio is a direct message. Send us your product, and we'll come back with a clear point of view on the story you need to tell.
          </p>
        </motion.div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="bg-card rounded-3xl p-8 sm:p-10 card-border mb-8"
          style={{ boxShadow: "0 2px 8px rgba(28,28,46,0.06), 0 16px 48px rgba(28,28,46,0.08)" }}
        >
          {/* Primary + secondary */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <a
              href={`mailto:${EMAIL}?subject=Product%20Storytelling%20Inquiry`}
              className="group flex-1 flex items-center justify-center gap-2.5 px-6 py-4 text-[15px] font-semibold bg-accent-gradient rounded-xl text-white shadow-button hover:shadow-accent transition-shadow"
            >
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 20 20">
                <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3.5 6l6.5 4.5L16.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Email Me
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 text-[15px] font-semibold rounded-xl border border-border-md text-text-primary hover:bg-accent-light hover:border-accent-mid/50 hover:text-accent transition-all"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4.98 3.5a1.75 1.75 0 11-.02 3.5 1.75 1.75 0 01.02-3.5zM3.5 8.25h3v8.25h-3V8.25zM9 8.25h2.86v1.13h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 3.58 4.57v4.34h-3v-3.85c0-.92-.02-2.1-1.28-2.1-1.28 0-1.48 1-1.48 2.03v3.92H9V8.25z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>

          {/* Email shown for easy copy */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="text-[12.5px] text-text-muted">or reach me directly at</span>
            <a href={`mailto:${EMAIL}`} className="text-[12.5px] font-medium text-accent hover:underline">{EMAIL}</a>
          </div>

          {/* Tertiary */}
          <div className="pt-5 border-t border-border text-center">
            <p className="text-[12.5px] text-text-muted mb-2.5">Prefer to talk it through first?</p>
            <a
              href={`mailto:${EMAIL}?subject=Discovery%20Call%20Request`}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[12.5px] font-medium text-text-secondary rounded-lg border border-border hover:border-border-md hover:text-text-primary transition-all"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
                <path d="M3 2.5c-.5 0-1 .5-1 1 0 4.5 4 8.5 8.5 8.5.5 0 1-.5 1-1V9.3c0-.4-.3-.7-.7-.8l-1.8-.4c-.3 0-.6.1-.8.3l-.6.6C6.4 8.2 5.2 7 4.5 5.8l.6-.6c.2-.2.3-.5.3-.8L5 2.6c-.1-.4-.4-.7-.8-.7H3z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
              </svg>
              Book a Discovery Call
            </a>
          </div>
        </motion.div>

        {/* How We'll Work Together */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center mb-8">
            <h3 className="text-[1.4rem] sm:text-[1.7rem] font-bold tracking-tighter text-gradient-warm">How We'll Work Together</h3>
            <p className="mt-2 text-[14px] text-text-secondary max-w-md mx-auto leading-relaxed">
              No lengthy onboarding, no friction. Three simple steps from first message to finished content.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.36 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative p-6 rounded-2xl bg-card card-border"
                style={{ boxShadow: "0 1px 3px rgba(28,28,46,0.05), 0 4px 18px rgba(28,28,46,0.05)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-light text-accent flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-[11px] font-bold text-text-muted/60 tracking-widest">{step.number}</span>
                </div>
                <h4 className="text-[15px] font-semibold text-text-primary tracking-snug mb-2">{step.title}</h4>
                <p className="text-[13px] text-text-secondary leading-relaxed">{step.description}</p>

                {/* Connector arrow (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden sm:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-canvas border border-border items-center justify-center">
                    <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 12 12">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-center text-[12.5px] text-text-muted">
            I typically respond within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}

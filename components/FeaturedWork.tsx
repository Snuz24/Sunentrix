"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import clsx from "clsx";

const categories = ["All", "Founder Storytelling", "Product Demos", "AI Education", "AI Ad Creatives"];

type StrategyKey =
  | "emotion" | "psychology" | "technique" | "hook"
  | "positioning" | "desire" | "audience" | "fit" | "outcome";

type Strategy = Record<StrategyKey, string>;

type Project = {
  id: number;
  title: string;
  product: string;
  category: string;
  duration: string;
  description: string;
  video: string;
  thumb: { from: string; via: string; to: string };
  strategy: Strategy;
};

const strategyMeta: { key: StrategyKey; label: string; icon: JSX.Element }[] = [
  {
    key: "emotion", label: "Core Human Emotion",
    icon: <path d="M7 12.3C4.5 10.6 2.5 9 2.5 6.8 2.5 5.2 3.7 4 5.3 4c1 0 1.5.5 1.7.8.2-.3.7-.8 1.7-.8 1.6 0 2.8 1.2 2.8 2.8 0 2.2-2 3.8-4.5 5.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />,
  },
  {
    key: "psychology", label: "Audience Psychology",
    icon: <><circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.2" /><path d="M7 4.2c.9 0 1.6.7 1.6 1.5 0 .9-1.6 1-1.6 2.1M7 10h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></>,
  },
  {
    key: "technique", label: "Storytelling Technique",
    icon: <path d="M2.5 4.5h9M2.5 7h9M2.5 9.5h5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />,
  },
  {
    key: "hook", label: "The First 3 Seconds",
    icon: <><path d="M7.5 2L3 8h3l-.5 4L10 6H7l.5-4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" /></>,
  },
  {
    key: "positioning", label: "Product Positioning",
    icon: <><circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.2" /><circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.2" /><circle cx="7" cy="7" r="0.5" fill="currentColor" /></>,
  },
  {
    key: "desire", label: "Why People Want to Try It",
    icon: <path d="M7 2l1.5 3.2 3.5.4-2.6 2.4.7 3.5L7 9.8 3.9 11.5l.7-3.5L2 5.6l3.5-.4L7 2z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />,
  },
  {
    key: "audience", label: "Ideal Target Audience",
    icon: <><circle cx="5" cy="5.5" r="2" stroke="currentColor" strokeWidth="1.2" /><circle cx="10" cy="6.5" r="1.6" stroke="currentColor" strokeWidth="1.2" /><path d="M1.5 11.5c0-1.7 1.4-3 3.3-3 1 0 1.9.4 2.5 1M8 11.5c.3-1.3 1.4-2.2 2.8-2.2 1.2 0 1.7.5 1.7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></>,
  },
  {
    key: "fit", label: "Why It Works for AI Startups",
    icon: <path d="M7 1.5L2 4v4.5L7 12l5-3.5V4L7 1.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />,
  },
  {
    key: "outcome", label: "Expected Marketing Outcome",
    icon: <path d="M2.5 9.5l3-3 2 2 4-4.5M11.5 4v2.5M11.5 4H9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />,
  },
];

const projects: Project[] = [
  {
    id: 1,
    title: "This Could Be You — Watching Someone Build the Idea You Keep Postponing.",
    product: "Replit",
    category: "Founder Storytelling",
    duration: "0:25",
    description: "A direct-to-camera wake-up call: while you wait for the perfect moment, someone just shipped a real, working app — built start to finish on Replit.",
    video: "/Videos/replit.mp4",
    thumb: { from: "#e8e4fb", via: "#d5cef7", to: "#c0b6f2" },
    strategy: {
      emotion: "Urgency laced with mild envy. The opening line 'this could be you' places the viewer on the wrong side of someone else's progress — and makes them want to switch sides immediately.",
      psychology: "Builders who keep postponing aren't lazy; they overestimate how much they need before they can start. Seeing a finished app built with no special advantage collapses that excuse in real time.",
      technique: "Contrast narrative — 'this could be you' versus what someone already did. The story is framed as a near-miss the viewer can still reverse, which converts passive watching into active intent.",
      hook: "'This could be you' spoken straight to camera is an open loop — the brain has to keep watching to find out what 'this' is and whether it's good or bad news for them.",
      positioning: "Replit as the shortest path from idea to shipped product. The reveal of a real working app ('Made with Replit') proves the claim instead of just asserting it.",
      desire: "It reframes building as something achievable this weekend, not someday. Trying Replit becomes the obvious way to make sure they're the one shipping next time, not the one watching.",
      audience: "Aspiring founders and side-project builders who have an idea and the ability but keep waiting for more time, more skill, or the perfect moment.",
      fit: "Activation is the hardest metric for AI build tools. This piece attacks hesitation directly and gives a concrete, low-friction reason to open the product today.",
      outcome: "High saves and shares, strong comment resonance ('this is literally me'), and a measurable lift in first-project sign-ups from previously hesitant builders.",
    },
  },
  {
    id: 2,
    title: "Rich People Don't Chase Money. They Buy Back Time.",
    product: "Claude Code",
    category: "AI Ad Creatives",
    duration: "0:33",
    description: "Opens on a sharp thesis — the wealthy chase time freedom, not money — then proves it by building an entire portfolio website in minutes with Claude Code.",
    video: "/Videos/rich%20people-claude%20code.mp4",
    thumb: { from: "#fdf3e8", via: "#f7e0c5", to: "#f0c99a" },
    strategy: {
      emotion: "Aspiration through identity. The desire isn't to code faster — it's to belong to the group of people who treat time as their scarcest, most valuable asset.",
      psychology: "Ambitious operators respond to status-coded ideas. Framing time freedom as a 'rich person' behaviour flatters the viewer's self-image and earns attention before any product appears.",
      technique: "Thesis-then-proof. A bold infographic establishes the worldview, then the video cuts to Claude Code building a complete project in minutes — turning an abstract belief into a concrete demonstration.",
      hook: "A wealth infographic with a contrarian claim ('rich people don't chase money') creates an unresolved tension the viewer has to follow to its conclusion.",
      positioning: "Claude Code as time leverage made literal — an entire portfolio site produced in the time most people spend planning one. The product is the proof of the thesis.",
      desire: "Watching a real project materialize in minutes makes the tool feel like a cheat code for time. Trying it becomes a way to buy back hours they didn't know they could reclaim.",
      audience: "Founders, indie hackers, and operators fluent in leverage, compounding, and time freedom — people who would rather build than wait and who value speed over busywork.",
      fit: "It pairs a premium, status-driven hook with an undeniable live demo. That combination earns both attention and proof — exactly what AI build tools need to convert skeptics.",
      outcome: "High completion rate, strong shares among a high-intent audience, and qualified sign-ups driven by a tangible 'I want to build that fast' reaction.",
    },
  },
  {
    id: 3,
    title: "The Best Investment I Made This Year Wasn't a Course. It Was Claude.",
    product: "Claude",
    category: "Product Demos",
    duration: "0:26",
    description: "A grounded, personal case for why the most worthwhile thing she invested in wasn't another course or tool — shown through Claude actually doing the work.",
    video: "/Videos/claude.mp4",
    thumb: { from: "#f3e8fb", via: "#e4d3f7", to: "#cebbf2" },
    strategy: {
      emotion: "Quiet conviction. The relief and satisfaction of finally spending on something that genuinely paid off, after a history of courses and tools that didn't.",
      psychology: "This audience is fatigued by overpriced courses and shiny tools. Positioning Claude as the thing that was actually 'worth it' speaks directly to that skepticism and earns trust by acknowledging it.",
      technique: "Personal testimonial framing. Rather than listing features, the story is told as a first-person verdict — 'best investment, worth it' — which lands as honest recommendation, not advertising.",
      hook: "Naming an investment that beat every course immediately sets up a value comparison the viewer wants resolved — what was it, and was it really better?",
      positioning: "Claude as a high-ROI investment rather than a subscription. The on-screen demo shows it doing real work, justifying the 'worth it' claim with evidence.",
      desire: "It reframes the spend as the smartest decision of the year. Trying Claude becomes a way to get the same return the creator visibly got.",
      audience: "Founders, freelancers, and operators who've spent on courses and tools before and are wary of where their money goes — but still want a genuine edge.",
      fit: "Trust is the gating factor for AI adoption. A candid 'this was worth it' from a real user does more to convert a cautious buyer than any feature list.",
      outcome: "Strong trust signals in comments, high save rate, and conversion from value-conscious users who needed proof before committing.",
    },
  },
  {
    id: 4,
    title: "The Unexpected Thing That Happened When I Let Claude Run My Strategy.",
    product: "Claude",
    category: "Founder Storytelling",
    duration: "0:24",
    description: "A founder-voice story about handing leadership thinking, SOPs, and strategy to Claude — and the results that quietly followed.",
    video: "/Videos/claude%20founder%20storytelling.mp4",
    thumb: { from: "#fef4e8", via: "#fde6c0", to: "#fcd09a" },
    strategy: {
      emotion: "Surprise resolving into relief. The 'unexpected thing' framing promises a payoff, and the payoff is the calm of finally having strategic support.",
      psychology: "Founders carry the weight of every operational and strategic decision alone. Framing Claude as a partner that handles SOPs and leadership thinking maps onto a need they feel but rarely voice.",
      technique: "Open-loop story structure — 'a thing happened' — that withholds the outcome and pulls the viewer through to the reveal that Claude was behind the result.",
      hook: "'This unexpected thing happened' is a curiosity gap with no downside to staying — the viewer keeps watching specifically to learn what happened.",
      positioning: "Claude as a strategic operator, not a writing tool. The SOP and leadership-strategy framing repositions it above the 'chatbot' category into genuine business value.",
      desire: "It makes delegating strategy to Claude feel like a discovery worth copying. Trying it becomes a way to offload the mental load of running everything solo.",
      audience: "Solo and early-stage founders overwhelmed by operations and strategy, who need leverage on thinking — not just on writing.",
      fit: "It gives a non-technical founder a concrete, high-value use case, which is exactly the adoption barrier most AI products struggle to clear.",
      outcome: "High educational engagement, strong saves (people return to replicate the workflow), and sign-ups from founders who now see a real strategic use case.",
    },
  },
  {
    id: 5,
    title: "My Best Fortune Wasn't Luck. It Was a Free App.",
    product: "ChatGPT",
    category: "AI Education",
    duration: "0:25",
    description: "A playful 'fortune teller' framing that turns into a genuine story of how ChatGPT quietly carried her through the work most people struggle with alone.",
    video: "/Videos/chatgpt.mp4",
    thumb: { from: "#e8f8f5", via: "#c8efea", to: "#a0e4da" },
    strategy: {
      emotion: "Delight followed by gratitude. The crystal-ball 'fortune' bit is fun and disarming, then resolves into sincere appreciation for something that genuinely helped.",
      psychology: "People are guarded against 'AI will change your life' claims. Leading with playful visuals lowers the defenses, so the real message lands as a personal story rather than a pitch.",
      technique: "Visual metaphor as a hook device. The fortune-teller framing creates a curiosity gap, then the payoff reframes 'fortune' from luck to a tool anyone can pick up for free.",
      hook: "An unexpected prop — a glass orb and 'best fortune' — pattern-interrupts the feed. It looks like a different kind of video, so the viewer stays to figure out where it's going.",
      positioning: "ChatGPT as an accessible, no-cost advantage — the 'fortune' that isn't gatekept by money or luck. The free angle removes the last barrier to trying it.",
      desire: "It makes trying ChatGPT feel like claiming good fortune that's just sitting there, free. The motivation is FOMO on something costless and proven.",
      audience: "Curious newcomers and early adopters who keep hearing about AI but haven't committed — students, solopreneurs, and first-time users.",
      fit: "Lowering the perceived risk to zero ('it's free, it's easy') is the fastest on-ramp for top-of-funnel AI adoption. This piece is built for first-time activation.",
      outcome: "Broad reach and high shareability from the playful hook, strong top-of-funnel awareness, and first-time sign-ups from previously hesitant viewers.",
    },
  },
];

function StrategyRow({ icon, label, value }: { icon: JSX.Element; label: string; value: string }) {
  return (
    <div className="flex gap-3.5 py-3.5 border-b border-border last:border-0">
      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-accent-light text-accent flex items-center justify-center mt-0.5">
        <svg className="w-[15px] h-[15px]" fill="none" viewBox="0 0 14 14">{icon}</svg>
      </div>
      <div className="flex-1">
        <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-accent mb-1">{label}</p>
        <p className="text-[13px] leading-relaxed text-text-secondary">{value}</p>
      </div>
    </div>
  );
}

function VideoCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col rounded-2xl overflow-hidden bg-card card-border"
      style={{ boxShadow: "0 1px 3px rgba(28,28,46,0.05), 0 6px 24px rgba(28,28,46,0.07)" }}
      whileHover={{ y: -3 }}
    >
      {/* Video player — true 9:16 vertical */}
      <div
        className="relative aspect-[9/16] overflow-hidden bg-text-primary/[0.04]"
        style={{ background: `linear-gradient(150deg, ${project.thumb.from}, ${project.thumb.via}, ${project.thumb.to})` }}
      >
        <video
          src={project.video}
          controls
          preload="metadata"
          playsInline
          controlsList="nodownload"
          className="relative z-0 w-full h-full object-cover"
        />
        <div className="pointer-events-none absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-sm text-[10.5px] font-semibold text-accent border border-accent/20 uppercase tracking-wide shadow-soft">
          {project.category}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-[11.5px] font-semibold text-accent">{project.product}</span>
          <span className="text-text-muted text-[11px]">·</span>
          <span className="text-[11px] text-text-muted">{project.duration}</span>
        </div>
        <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-text-primary mb-2">{project.title}</h3>
        <p className="text-[13px] text-text-secondary leading-relaxed flex-1 mb-4">{project.description}</p>

        {/* Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={clsx(
            "flex items-center justify-between w-full px-4 py-3 rounded-xl text-[12.5px] font-semibold transition-all duration-200",
            expanded
              ? "bg-accent-light text-accent border border-accent-mid/50"
              : "bg-surface text-text-secondary hover:bg-accent-light hover:text-accent border border-border hover:border-accent-mid/40"
          )}
        >
          <span className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
              <path d="M7 1.5l1.5 3 3.3.5-2.4 2.3.6 3.2L7 9l-2.95 1.5.56-3.2L2.2 5l3.3-.5L7 1.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
            Creative Strategy
          </span>
          <motion.svg animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }} className="w-4 h-4" fill="none" viewBox="0 0 16 16">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </button>

        {/* Expanded */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-3 px-4 pb-2 rounded-xl bg-surface border border-border">
                <div className="pt-4 pb-2 border-b border-border">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-md bg-accent-gradient text-white text-[9.5px] font-bold uppercase tracking-widest">Case Study</span>
                  </div>
                  <p className="text-[13px] font-semibold text-text-primary mt-1.5 leading-snug">{project.title}</p>
                  <p className="text-[11.5px] text-text-muted mt-0.5">Creative breakdown · {project.product} · {project.category}</p>
                </div>
                {strategyMeta.map((m) => (
                  <StrategyRow key={m.key} icon={m.icon} label={m.label} value={project.strategy[m.key]} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState("All");
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="section-label mb-4">Featured Work</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-[2rem] sm:text-[2.6rem] font-bold tracking-tightest text-gradient-warm leading-tight max-w-xl">
              Content That Moves AI Products Forward.
            </h2>
            <p className="max-w-sm text-[14.5px] text-text-secondary leading-relaxed">
              Each piece is built around a specific emotional insight. Open any card to read the full creative-director breakdown behind it.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "px-4 py-1.5 rounded-full text-[12.5px] font-semibold transition-all duration-200",
                activeCategory === cat
                  ? "bg-accent text-white shadow-accent-sm"
                  : "bg-card text-text-secondary hover:bg-accent-light hover:text-accent border border-border hover:border-accent-mid/40"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {filtered.map((project, i) => (
            <VideoCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

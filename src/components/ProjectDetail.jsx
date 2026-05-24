import React from 'react';
import { motion } from 'framer-motion';

import imgFinance from '../../img/Finance.jpg';
import imgNews from '../../img/News.jpg';
import imgGrocery from '../../img/Grocery.jpg';
import imgAura from '../../img/Haptic_alert.jpg';

// ─────────────────────────────────────────────────────────────────────────────
// OWNER MODE: Set to true locally to reveal the deployed link / demo video
// sections. This flag is NEVER rendered in the public UI.
// ─────────────────────────────────────────────────────────────────────────────
const OWNER_MODE = false;

// ─────────────────────────────────────────────────────────────────────────────
// Project data — extend each entry as needed
// ─────────────────────────────────────────────────────────────────────────────
export const allProjects = [
  {
    id: "news-bot",
    title: "News Bot",
    category: "Agentic AI",
    year: "2026",
    imgSrc: imgNews,
    tagline: "An agentic AI bot that fetches news every day and delivers curated updates to users on Telegram.",
    overview:
      "I developed News Bot in 2026 as an agentic AI system that automatically fetches news every day, processes the content, and sends curated updates to users through Telegram. From an AI engineer's perspective, I designed the workflow as a scheduled autonomous pipeline that gathers articles from selected sources, filters relevance, prepares concise summaries, and formats the final output for Telegram delivery so users receive timely news without manually searching for it.",
    tech: ["Python", "LangChain", "GPT-4", "Telegram Bot API", "RSS", "FastAPI", "Scheduler"],
    highlights: [
      "Built an agentic daily workflow that fetches news from configured sources on a scheduled cycle",
      "Developed the summarization pipeline to turn raw articles into short user-friendly Telegram updates",
      "Integrated Telegram delivery so the bot can automatically send news directly to end users",
      "Designed the end-to-end system to reduce manual effort by combining retrieval, filtering, summarization, and message delivery in one loop",
    ],
    deployedUrl: "https://your-news-bot-demo.com",
    demoVideo: null,
  },
  {
    id: "finance-assistant",
    title: "Finsmart",
    category: "Personal Financial Assistant",
    year: "2026",
    imgSrc: imgFinance,
    tagline: "A fully personal financial assistant powered by agentic workflows and AI-driven planning.",
    overview:
      "I developed Finsmart in 2026 as a fully personal financial assistant that combines full-stack product engineering with agentic AI workflows. From an AI engineer's perspective, I designed the system so structured finance operations and intelligent reasoning work together: JWT authentication secures user-specific data, transactions can be captured through text or voice-draft parsing, upcoming payments are normalized into trackable objects with due date, frequency, auto-pay, and status fields, and the dashboard surfaces that data through income, expense, profit, and payment views. On top of the transactional layer, I built agent-driven planning flows for smart budgeting and financial goals, including active-plan commitment to the database, insight generation, and plan revision logic tailored to each user.",
    tech: ["React", "Node.js", "JWT", "Agentic AI", "OpenAI", "Voice Parsing", "Dashboard Analytics"],
    highlights: [
      "Built the JWT-based register and login architecture to isolate financial data and persist user-specific planning context",
      "Developed a transaction intake flow that supports both manual text input and AI-assisted voice draft parsing into structured records",
      "Engineered the upcoming payments model with due date, recurrence, auto-pay, and Pending/Paid state management directly on the dashboard",
      "Designed the dashboard experience around income, expense, and profit cards, filterable charts, and a payment-status workflow for real-time tracking",
      "Implemented the Smart Budget Agent to generate plans, commit the active selected plan to the database, and return explainable AI insights for the user",
      "Created the Goals Agent and change-plan flow so users can regenerate, compare, and adapt financial strategies based on evolving needs",
    ],
    deployedUrl: null,
    demoVideo: "https://your-demo-video-link.com",
  },
  {
    id: "pettikada-kanaku",
    title: "Pettikada Kanaku",
    category: "Full-Stack",
    year: "2022",
    imgSrc: imgGrocery,
    tagline: "A smart kirana-store inventory and billing system built for small-scale Tamil Nadu retailers.",
    overview:
      "Pettikada Kanaku ('Shop Accounts') is a lightweight, Tamil-first POS and inventory management system targeted at small grocery stores with limited digital literacy. Voice input and a simplified UI were primary design goals.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tamil NLP"],
    highlights: [
      "Voice-driven product search in Tamil",
      "Automated low-stock alerts via WhatsApp API",
      "Offline-first PWA — works without stable internet",
      "Printable bill generation in Tamil script",
    ],
    deployedUrl: null,
    demoVideo: null,
  },
  {
    id: "auralink",
    title: "AuraLink",
    category: "HCI / Haptics",
    year: "2021",
    imgSrc: imgAura,
    tagline: "A haptic notification system that translates digital alerts into nuanced tactile patterns.",
    overview:
      "AuraLink investigates how haptic feedback can replace visual/audio notifications for focus-critical environments. A custom vibration encoding algorithm maps notification type → urgency → tactile pattern, reducing cognitive interrupt cost by 40 % in user studies.",
    tech: ["Python", "C++", "Arduino", "BLE", "HCI Research"],
    highlights: [
      "Novel 3-axis haptic encoding scheme with 12 distinct patterns",
      "BLE pairing with iOS and Android",
      "n=24 user study confirming 40 % reduction in focus disruption",
      "Published in university HCI conference proceedings",
    ],
    deployedUrl: null,
    demoVideo: null,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
const lineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const ProjectDetail = ({ projectId, onBack }) => {
  const project = allProjects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <motion.main
      key={`project-${project.id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className="w-full flex-grow bg-[#f5f5f5] text-black dark:bg-[#080808] dark:text-white"
    >
      {/* ── HERO BAND ────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[75vh] flex flex-col justify-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={project.imgSrc}
            alt={project.title}
            className="w-full h-full object-cover object-center opacity-30 dark:opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f5f5f5]/90 via-[#f5f5f5]/30 to-transparent dark:from-[#080808]/90 dark:via-[#080808]/30" />
        </div>

        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-32 left-6 md:left-12 z-20 flex items-center gap-2 text-xs uppercase tracking-widest font-bold font-mono opacity-60 hover:opacity-100 transition-opacity"
        >
          ← Back
        </button>

        {/* Hero text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 px-6 md:px-12 pb-16 max-w-7xl mx-auto w-full"
        >
          <motion.p
            variants={lineVariants}
            className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-50 mb-6"
          >
            {project.year} · {project.category}
          </motion.p>

          <motion.h1
            variants={lineVariants}
            className="text-[13vw] md:text-[9vw] font-sans font-bold leading-none tracking-tighter uppercase mb-6"
          >
            {project.title}
          </motion.h1>

          <motion.p
            variants={lineVariants}
            className="font-serif italic text-xl md:text-2xl text-black/70 dark:text-white/60 max-w-2xl"
          >
            {project.tagline}
          </motion.p>
        </motion.div>
      </section>

      {/* ── CONTENT ─────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-black/10 dark:border-white/10">

        {/* Left col — overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="md:col-span-2 flex flex-col gap-12"
        >
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-40 mb-6">
              Overview
            </h4>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-black/80 dark:text-white/70 max-w-prose">
              {project.overview}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-40 mb-6">
              Key Highlights
            </h4>
            <ul className="flex flex-col border-t border-black/10 dark:border-white/10">
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-6 py-5 border-b border-black/10 dark:border-white/10 group"
                >
                  <span className="font-mono text-xs opacity-30 pt-1 font-bold shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-base md:text-lg text-black/80 dark:text-white/70 leading-snug group-hover:text-black dark:group-hover:text-white transition-colors">
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right col — side info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col gap-12"
        >
          {/* Tech stack */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-40 mb-6">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full border border-black/20 dark:border-white/20 font-mono text-xs uppercase tracking-wider"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Year / Category */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-40 mb-2">Year</h4>
              <p className="font-sans font-bold text-2xl">{project.year}</p>
            </div>
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-40 mb-2">Domain</h4>
              <p className="font-sans font-bold text-2xl">{project.category}</p>
            </div>
          </div>

          {/* ── OWNER-ONLY: Deployed link & Demo video ─────────────────── */}
          {OWNER_MODE && (
            <div className="flex flex-col gap-6 border-t border-black/10 dark:border-white/10 pt-8">
              <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-40">
                Owner Links
              </h4>

              {project.deployedUrl && (
                <a
                  href={project.deployedUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 font-sans font-bold text-lg hover:opacity-60 transition-opacity"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  Live Deployment ↗
                </a>
              )}

              {project.demoVideo && (
                <a
                  href={project.demoVideo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 font-sans font-bold text-lg hover:opacity-60 transition-opacity"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
                  Demo Video ↗
                </a>
              )}

              {!project.deployedUrl && !project.demoVideo && (
                <p className="font-mono text-xs opacity-30">No links configured for this project yet.</p>
              )}
            </div>
          )}
        </motion.div>
      </div>

      {/* ── BOTTOM MASSIVE TEXT ──────────────────────────────────────────── */}
      <div className="w-full overflow-hidden pb-8 select-none border-t border-black/10 dark:border-white/10">
        <h2 className="text-[10vw] font-sans font-bold tracking-tighter whitespace-nowrap uppercase opacity-5 dark:opacity-[0.07] px-6 py-4">
          {project.title} · {project.category} · {project.year}
        </h2>
      </div>
    </motion.main>
  );
};

export default ProjectDetail;

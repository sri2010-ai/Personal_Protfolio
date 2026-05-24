import React from 'react';
import { motion } from 'framer-motion';

const journeyData = [
  {
    title: "Agentic AI Intern",
    entity: "Epic-x",
    year: "2026 - Present",
    desc: "Worked on building Agentic AI",
    tags: ["Python", "CrewAI", "LangChain", "RAG", "LLM"]
  },
  {
    title: "AI/ML Developer ",
    entity: "Secura,IIT Madras Research Park",
    year: "2023 - 2024",
    desc: "Worked on developing DL and Computer Vision Models",
    tags: ["Python", "PyTorch", "Computer Vision"]
  },
  {
    title: "MCA",
    entity: "Anna Univerity",
    year: "2025 - 2027",
    desc: "Learned about Generative AI and Agentic AI",
    tags: ["IOT", "GenERATIVE AI", "Agentic AI"]
  },
  {
    title: "B.Sc AI & ML",
    entity: "Bharathiar University",
    year: "2020 - 2023",
    desc: "Rigorous coursework in systems programming, data structures, and algorithms.",
    tags: ["Python", "SQL", "ML"]
  }
];

const marqueeText = "REACT • PYTHON • MACHINE LEARNING • SYSTEM DESIGN • SPATIAL COMPUTING • ";

const Journey = () => {
  return (
    <section className="w-full pt-48 pb-32 overflow-hidden bg-[#f5f5f5] text-black dark:bg-[#080808] dark:text-white" id="journey">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <h2 className="text-5xl md:text-8xl font-serif italic mb-24 opacity-90">
          The Journey <span className="font-sans font-light">↴</span>
        </h2>

        <div className="flex flex-col">
          {journeyData.map((item, idx) => (
            <div 
              key={idx} 
              className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-black/10 dark:border-white/10 group"
            >
              {/* Year Column */}
              <div className="md:col-span-3">
                <p className="font-mono text-sm uppercase tracking-widest opacity-50 pt-2 transition-opacity group-hover:opacity-100">
                  {item.year}
                </p>
              </div>

              {/* Title & Entity */}
              <div className="md:col-span-5 flex flex-col gap-2">
                <h3 className="text-2xl md:text-4xl font-sans font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="font-serif italic text-xl opacity-60">
                  {item.entity}
                </p>
              </div>

              {/* Description & Tags */}
              <div className="md:col-span-4 flex flex-col gap-6">
                <p className="text-sm md:text-base opacity-70 leading-relaxed font-sans">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider rounded-full border border-black/20 dark:border-white/20 text-black/70 dark:text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="w-full border-y border-black/10 dark:border-white/10 py-6 overflow-hidden flex whitespace-nowrap bg-black dark:bg-[#111]">
        <motion.div 
          className="flex gap-4 items-center"
          animate={{ x: [0, -1030] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {/* Repeat text block to ensure seamless loop */}
          {[1, 2, 3, 4].map((key) => (
            <span 
              key={key} 
              className="text-[80px] md:text-[140px] font-sans font-bold uppercase leading-none tracking-tighter"
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.4)",
                color: "transparent"
              }}
            >
              {marqueeText}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;

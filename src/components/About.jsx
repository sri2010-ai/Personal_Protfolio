import React from 'react';
import { motion } from 'framer-motion';

const sentence = [
  { text: "I'm", type: "sans" },
  { text: "hari", type: "sans" },
  { text: "priya,", type: "serif" },
  { text: "an", type: "sans" },
  { text: "AI", type: "sans" },
  { text: "engineer", type: "sans" },
  { text: "building", type: "sans" },
  { text: "agentic", type: "serif" },
  { text: "systems", type: "sans" },
  { text: "that", type: "sans" },
  { text: "think,", type: "sans" },
  { text: "adapt,", type: "serif" },
  { text: "and", type: "sans" },
  { text: "scale", type: "sans" },
  { text: "globally.", type: "serif" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 }
  }
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } }
};

const competencies = [
  { id: "01", title: "AI/ML Development" },
  { id: "02", title: "Agentic AI" },
  { id: "03", title: "Generative AI" },
  { id: "04", title: "Deep Learning" }
];

const techStack = [
  "Python", "PyTorch", "Computer Vision", "Agentic AI", "Generative AI", "Deep Learning","RAG","LLM","LangChain","TensorFlow","OpenCV","MLOps","Prompt Engineering","HuggingFace"
];

const About = () => {
  return (
    <motion.main 
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className="w-full flex-grow pt-28 pb-20 px-4 md:px-6 relative"
    >
      {/* Logo Removed */}

      {/* SECTION 1: MISSION HERO */}
      <section className="min-h-[calc(100dvh-9rem)] flex flex-col items-center justify-center px-6 md:px-10 max-w-7xl w-full mx-auto mb-24 relative overflow-hidden transition-colors duration-1000 bg-white rounded-[2rem] shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
        <div className="relative z-10 w-full text-black">
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold font-mono opacity-50 mb-12">
            Core AI Focus
          </h4>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2 md:gap-3 max-w-4xl"
          >
            {sentence.map((word, index) => (
              <motion.span 
                key={index} 
                variants={wordVariants}
                className={`text-[2.4rem] sm:text-[3.25rem] md:text-[4.2rem] lg:text-[4.8rem] font-bold leading-[1.05] tracking-tight ${
                  word.type === 'serif' ? 'font-serif italic font-normal pr-1 md:pr-2' : 'font-sans'
                }`}
              >
                {word.text}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CORE COMPETENCIES */}
      <section className="w-full mb-32 border-b border-black/10 dark:border-white/10">
        <div className="px-6 md:px-12 mb-8 max-w-7xl mx-auto">
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold font-mono opacity-50">
            Core Competencies
          </h4>
        </div>
        
        <div className="w-full flex flex-col border-t border-black/10 dark:border-white/10">
          {competencies.map((comp, idx) => (
            <div 
              key={idx} 
              className="w-full group cursor-pointer border-b border-black/10 dark:border-white/10 hover:bg-black/[0.03] dark:hover:bg-white/[0.02] transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-8 md:py-12 flex justify-between items-center group-hover:translate-x-[10px] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <span className="font-mono text-xs opacity-40 font-bold">{comp.id}</span>
                <span className="font-sans font-bold text-2xl md:text-5xl uppercase tracking-tighter w-full text-center group-hover:italic group-hover:font-serif group-hover:font-normal transition-all">{comp.title}</span>
                <span className="font-serif italic text-3xl opacity-50">↴</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: TECH STACK MARQUEE / CLOUD */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-12">
        <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold font-mono opacity-50 mb-12">
          Technical Arsenal
        </h4>
        
        <div className="w-full p-0 flex flex-wrap justify-between gap-x-8 gap-y-4 font-bold uppercase tracking-tighter leading-none" style={{ textAlign: "justify" }}>
          {techStack.map((tech, i) => (
            <motion.span 
              key={i} 
              className="text-4xl md:text-7xl lg:text-9xl text-zinc-400 dark:text-zinc-600 transition-all duration-300 ease-out hover:text-black dark:hover:text-white inline-block cursor-crosshair"
              whileHover={{ scale: 1.1, rotate: Math.random() * 4 - 2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </section>

    </motion.main>
  );
};

export default About;

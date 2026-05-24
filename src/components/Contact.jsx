import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [time, setTime] = useState("");
  const [copied, setCopied] = useState(false);

  // Local Time Widget
  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Europe/London', // You can change this to your specific timezone
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setTime(formatter.format(new Date()) + " GMT");
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("priyasrihari63@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } 
    }
  };

  return (
    <motion.main 
      key="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className="w-full flex-grow pt-48 pb-24 bg-[#f5f5f5] text-black dark:bg-[#080808] dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* SECTION 1: EDITORIAL HERO */}
        <section className="min-h-[40vh] flex flex-col justify-center mb-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="flex flex-col gap-2"
          >
            <div className="overflow-hidden">
              <motion.h1 variants={lineVariants} className="text-5xl md:text-8xl font-sans font-bold tracking-tight leading-[1.1]">
                Looking for a
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 variants={lineVariants} className="text-5xl md:text-8xl font-serif italic text-black/60 dark:text-white/70 leading-[1.1]">
                new perspective?
              </motion.h1>
            </div>
            <div className="overflow-hidden mt-6">
              <motion.h1 variants={lineVariants} className="text-5xl md:text-8xl font-sans font-bold tracking-tight leading-[1.1]">
                Let's connect.
              </motion.h1>
            </div>
          </motion.div>
        </section>

        {/* SECTION 2: THE PROFESSIONAL GRID */}
        <section className="w-full grid grid-cols-1 md:grid-cols-3 border-t border-black/20 dark:border-zinc-800 mb-32">
          
          {/* Column 1: Status */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-black/20 dark:border-zinc-800 flex flex-col gap-8">
            <h4 className="font-mono text-[12px] uppercase opacity-50 tracking-widest font-bold">
              01 / STATUS ↴
            </h4>
            <p className="font-sans text-xl md:text-2xl leading-relaxed font-medium text-black/80 dark:text-white/80">
              AI Engineer specializing in agentic systems, generative AI, and deep learning. Open to high-impact global AI roles, freelance projects, and research collaborations starting Summer 2026.
            </p>
          </div>

          {/* Column 2: Base */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-black/20 dark:border-zinc-800 flex flex-col gap-8">
            <h4 className="font-mono text-[12px] uppercase opacity-50 tracking-widest font-bold">
              02 / BASE ↴
            </h4>
            <div className="flex flex-col gap-4">
              <p className="font-sans text-xl md:text-2xl leading-relaxed font-medium text-black/80 dark:text-white/80">
                India. <br/>
                Remote-first — serving clients and teams globally.
              </p>
              <div className="mt-auto pt-6 border-t border-black/10 dark:border-zinc-800/50">
                <p className="font-mono text-sm opacity-60">LOCAL TIME: {time}</p>
              </div>
            </div>
          </div>

          {/* Column 3: Network */}
          <div className="p-8 md:p-12 flex flex-col gap-8">
            <h4 className="font-mono text-[12px] uppercase opacity-50 tracking-widest font-bold">
              03 / NETWORK ↴
            </h4>
            <div className="flex flex-col gap-6 font-sans text-xl md:text-2xl font-bold">
              <a href="https://www.linkedin.com/in/grsriharipriya/" target="_blank" rel="noreferrer" className="hover:text-black/50 dark:hover:text-white/50 transition-colors w-fit">LinkedIn ↗</a>
              <a href="https://github.com/sri2010-ai" target="_blank" rel="noreferrer" className="hover:text-black/50 dark:hover:text-white/50 transition-colors w-fit">GitHub ↗</a>
              <a href="mailto:priyasrihari63@gmail.com" className="hover:text-black/50 dark:hover:text-white/50 transition-colors w-fit">Email ↗</a>
            </div>
          </div>

        </section>

        {/* SECTION 3: THE ACTION */}
        <section className="w-full flex flex-col items-center justify-center pt-16 pb-32 border-t border-black/20 dark:border-zinc-800">
          <div className="relative group cursor-pointer" onClick={handleCopy}>
            <motion.h2 
              whileHover={{ scale: 1.02 }}
              className="text-[8vw] font-sans font-bold tracking-tighter uppercase"
            >
              LET'S CONNECT.
            </motion.h2>
            
            {/* Tooltip / Copied Tag */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[120%] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <div className="bg-black text-white dark:bg-white dark:text-black font-mono text-xs px-4 py-2 rounded-full shadow-xl tracking-widest uppercase">
                {copied ? "Copied!" : "Copy email"}
              </div>
            </div>
          </div>
        </section>

      </div>
    </motion.main>
  );
};

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-mesh">
      <div className="relative z-10 max-w-5xl w-full text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
          className="mb-8"
        >
          <div className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(0,122,255,0.15)] flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#007AFF] animate-pulse"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-white/80">Available for Opportunities</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-[6.5rem] font-bold leading-[1.05] tracking-tighter mb-8"
        >
          Software Engineer <br/>
          <span className="text-[#A3B1C6]">& HCI Student.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="text-lg md:text-xl text-white/50 max-w-[50ch] text-center mb-16 leading-relaxed font-sans"
        >
          Forging the intersection of rigorous systems engineering and highly-polished human-computer interaction. Building brutalist, fast, and engineered interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          <a href="#works" className="btn-primary w-full sm:w-auto">
            View Work
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-secondary w-full sm:w-auto">
            LinkedIn
            <span className="opacity-50">↗</span>
          </a>
        </motion.div>
      </div>

      {/* Fade out to black at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;

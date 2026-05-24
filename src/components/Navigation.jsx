import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Experience', 'Works', 'About'];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none flex justify-center">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-2xl px-6 py-4 shadow-2xl transition-all duration-700 ${
          isScrolled ? 'max-w-2xl px-4 py-2 opacity-95 bg-black/40 border-white/10' : ''
        }`}
      >
        <a href="#" className="font-display font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-sm bg-[#007AFF]"></div>
          PRIYA
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a 
          href="#contact"
          className="text-sm font-semibold tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-2 group"
        >
          <span>Connect</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </motion.div>
    </nav>
  );
};

export default Navigation;

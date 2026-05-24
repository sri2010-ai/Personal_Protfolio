import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MagneticLink = ({ children, href }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Calculate distance and apply a multiplier for the strength of the magnetic pull
    x.set((clientX - centerX) * 0.3);
    y.set((clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    // Reset to initial position
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block text-xl font-medium hover:opacity-70 transition-opacity p-2 -m-2"
    >
      {children}
    </motion.a>
  );
};

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("priyasrihari63@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="h-[100dvh] w-full flex flex-col justify-end bg-[#ebebeb] dark:bg-[#050505] text-[#000] dark:text-[#f4f4f5] border-t border-black/5 dark:border-white/5 relative z-20">
      <div className="w-full px-10 lg:px-24 mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          
          {/* Column 1: Blurb */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-bold opacity-40 mb-6">Focus</h4>
            <p className="font-serif italic text-lg leading-relaxed max-w-sm">
              Building production-grade AI systems — agentic pipelines, generative models, and deep learning solutions — deployed for clients and teams across the globe.
            </p>
          </div>
          
          {/* Column 2: Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-bold opacity-40 mb-6">Connect</h4>
            <div className="flex flex-col gap-6 items-start">
              <MagneticLink href="https://www.linkedin.com/in/grsriharipriya/">LinkedIn ↗</MagneticLink>
              <MagneticLink href="https://github.com/sri2010-ai">GitHub ↗</MagneticLink>
              <MagneticLink href="#">Blog ↗</MagneticLink>
            </div>
          </div>
          
          {/* Column 3: Email */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-bold opacity-40 mb-6">Inquiries</h4>
            <div className="flex flex-col gap-4 items-start">
              <a
                href="mailto:priyasrihari63@gmail.com"
                className="group relative text-xl font-medium inline-block p-2 -m-2 overflow-hidden"
              >
                <div className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-full">
                  Let's Connect ↗
                </div>
                <div className="absolute inset-0 flex items-center p-2 text-current transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] translate-y-full group-hover:translate-y-0 text-blue-500 dark:text-blue-400">
                  priyasrihari63@gmail.com
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
      
      {/* Massive Text Block */}
      <div className="w-full overflow-hidden text-center leading-none select-none flex justify-center items-end pb-4">
        <h2 className="text-[10vw] font-sans font-bold tracking-tighter whitespace-nowrap -translate-y-[0.5px] opacity-90 dark:opacity-100 uppercase">
          Let's Connect.
        </h2>
      </div>
    </footer>
  );
};

export default Footer;

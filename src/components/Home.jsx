import React from 'react';
import { motion } from 'framer-motion';
import Projects from './Projects';
import Journey from './Journey';
import Footer from './Footer';

// Load locally hosted background image
import heroBg from '../../img/comp_bg1.jpg';

const Home = ({ onExploreProject }) => {
  const [logoStyle, setLogoStyle] = React.useState(0);
  const styles = [
    "font-bold tracking-tighter",
    "font-serif italic tracking-wide",
    "font-mono font-light tracking-[0.2em]",
    "font-sans font-black uppercase"
  ];

  const handleLogoClick = () => {
    setLogoStyle((prev) => (prev + 1) % styles.length);
  };

  const bgScaleVariant = {
    hidden: { 
      width: "40%", 
      height: "40%", 
      borderRadius: "20px",
      top: "50%",
      left: "50%",
      x: "-50%",
      y: "30%",
      opacity: 0
    },
    visible: { 
      width: "100%", 
      height: "100%", 
      borderRadius: "0px",
      top: 0,
      left: 0,
      x: 0,
      y: 0,
      opacity: 1,
      transition: { 
        duration: 1.2, 
        ease: [0.32, 0.72, 0, 1] 
      }
    }
  };

const uiRevealVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 1.1, // Start 0.1s after the Navigation (which starts at 1.0s)
        duration: 0.8,
        staggerChildren: 0.1,
        ease: [0.32, 0.72, 0, 1]
      } 
    }
  };

  const lineVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.main 
      key="home"
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full flex flex-col text-black dark:text-white"
    >
      <div className="flex-grow flex items-end justify-start px-6 md:px-8 w-full min-h-[100dvh] relative overflow-hidden pb-8 md:pb-12">
        {/* Dark Mode — Black gradient: blends hero into the dark background below */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 z-10 pointer-events-none bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 dark:opacity-80 transition-opacity duration-1000" />

        {/* Light Mode — White Shadow/Glow */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 z-10 pointer-events-none bg-gradient-to-t from-white via-white/40 to-transparent opacity-100 dark:opacity-0 transition-opacity duration-1000" />


        
        {/* PHASE 1: THE BACKGROUND SCALE */}
        <motion.div 
          variants={bgScaleVariant}
          initial="hidden"
          animate="visible"
          className="absolute z-0 pointer-events-none overflow-hidden"
        >
          <img 
            src={heroBg} 
            alt="Hero Background" 
            className="w-full h-full object-cover object-[100%_5%]"
          />
        </motion.div>

        {/* PHASE 2: STAGGERED UI REVEAL */}
        <motion.div 
          className="w-full z-20"
          variants={uiRevealVariant}
          initial="hidden"
          animate="visible"
        >
          {/* AI Engineer Tag Badge */}
          <motion.div
            variants={lineVariant}
            className="absolute top-8 md:top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/20 dark:border-white/20 bg-white/10 backdrop-blur-sm select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-black dark:text-white opacity-70">AI Engineer — Global</span>
          </motion.div>

          <motion.div variants={lineVariant} className="max-w-2xl px-6 md:px-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-normal leading-[1.3] tracking-normal text-black dark:text-white">
              An <span className="font-serif italic text-black/80 dark:text-white/80">AI Engineer</span> building intelligent systems that scale globally — explore <span className="font-serif italic text-black/80 dark:text-white/80">production-grade AI</span>, agentic pipelines, and deep learning solutions crafted since 2023.
            </h1>
          </motion.div>
        </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-50 text-black dark:text-white">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-black dark:from-white to-transparent opacity-50"
        />
      </motion.div>
      </div>

      {/* Inserted Next Steps */}
      <Projects onExploreProject={onExploreProject} />
      <Journey />
      <Footer />
    </motion.main>
  );
};

export default Home;

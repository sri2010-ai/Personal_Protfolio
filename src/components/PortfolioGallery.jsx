import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';

import imgFinance from '../../img/Finance.jpg';
import imgNews from '../../img/News.jpg';
import imgGrocery from '../../img/Grocery.jpg';
import imgAura from '../../img/Haptic_alert.jpg';

const projectsData = [
  { id: "news-bot", title: "News Bot", category: "news_agent_bot", year: "2026", imgSrc: imgNews },
  { id: "finance-assistant", title: "Finsmart", category: "Personal Financial Assistant", year: "2026", imgSrc: imgFinance },
  { id: "pettikada-kanaku", title: "Pettikada Kanaku", category: "Pettikada-Kanaku", year: "2022", imgSrc: imgGrocery },
  { id: "auralink", title: "AuraLink", category: "haptic_alert", year: "2021", imgSrc: imgAura },
];

const ProjectCard = ({ project, index, setCursorText, onExploreProject }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1],
        delay: index * 0.1
      }
    }
  };

  const handleClick = () => {
    if (project.id && onExploreProject) {
      onExploreProject(project.id);
    }
  };

  return (
    <motion.div 
      variants={cardVariants}
      className={`flex flex-col gap-4 w-full ${project.id ? 'cursor-none' : 'cursor-default'}`}
      onMouseEnter={() => setCursorText(project.id ? 'VIEW' : '')}
      onMouseLeave={() => setCursorText('')}
      onClick={handleClick}
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#111]">
        {/* Absolute Meta Tag Top-Left */}
        <div className="absolute top-6 left-6 z-10 font-mono text-[10px] uppercase font-bold tracking-widest text-white pointer-events-none mix-blend-difference">
          {project.year} / {project.category}
        </div>
        
        {/* Responsive Hover Image */}
        <div className="w-full h-full overflow-hidden">
          <img 
            src={project.imgSrc} 
            alt={project.title}
            className="w-full h-full object-cover filter grayscale-[100%] hover:grayscale-0 scale-100 hover:scale-105 transition-all duration-[800ms] ease-[cubic-bezier(0.32,0.72,0,1)] object-center cursor-none"
          />
        </div>
      </div>
      
      {/* Title block beneath the image */}
      <div>
        <h3 className="font-sans font-bold text-2xl lg:text-3xl tracking-tight text-current uppercase">
          {project.title}
        </h3>
        {project.id && (
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mt-1">Click to explore →</p>
        )}
      </div>
    </motion.div>
  );
};

const PortfolioGallery = ({ onExploreProject }) => {
  const [cursorText, setCursorText] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(false);
  const cardsRef = useRef(null);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(projectsData.length / itemsPerPage);
  
  const currentProjects = projectsData.slice(
    currentPage * itemsPerPage, 
    (currentPage + 1) * itemsPerPage
  );

  // Custom cursor hooks
  const cursorX = useSpring(-100, { stiffness: 500, damping: 50 });
  const cursorY = useSpring(-100, { stiffness: 500, damping: 50 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  // Show/hide arrows: only visible when scrolled to CENTER of cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setCardsVisible(entry.isIntersecting),
      { 
        threshold: 0,
        rootMargin: '-35% 0px -35% 0px'
        // Both top and bottom clipped by 35% — only fires when element centre is in the middle viewport zone
      }
    );
    if (cardsRef.current) observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#f5f5f5] text-black dark:bg-[#080808] dark:text-white pt-32 pb-48 relative" id="portfolio">
      
      {/* Localized View Cursor */}
      <AnimatePresence>
        {cursorText && (
          <motion.div
            key="cursor"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 w-20 h-20 bg-white dark:bg-white text-black rounded-full pointer-events-none z-[9999] flex items-center justify-center font-sans tracking-widest text-[10px] font-bold shadow-xl"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%"
            }}
          >
            {cursorText}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Massive Header */}
      <div className="w-full overflow-hidden mb-24 px-4 flex justify-center relative">
        <motion.h2 
          initial={{ opacity: 0, scale: 1.2, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
          className="text-[18vw] font-sans font-bold leading-none tracking-tighter uppercase whitespace-nowrap pt-12"
        >
          PROJECTS
        </motion.h2>
      </div>

      {/* Asymmetrical 2-Column Grid */}
      <div ref={cardsRef} className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentPage}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24"
          >
            {/* Column 1 */}
            <div className="flex flex-col gap-12 lg:gap-32 pt-0 md:pt-32">
              {currentProjects.filter((_, i) => i % 2 === 0).map((project, i) => (
                <ProjectCard 
                  key={project.title} 
                  index={i} 
                  project={project} 
                  setCursorText={setCursorText}
                  onExploreProject={onExploreProject}
                />
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-12 lg:gap-32">
              {currentProjects.filter((_, i) => i % 2 !== 0).map((project, i) => (
                <ProjectCard 
                  key={project.title} 
                  index={i + 1} 
                  project={project} 
                  setCursorText={setCursorText}
                  onExploreProject={onExploreProject}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>


      {/* Left Arrow — Previous Page */}
      <AnimatePresence>
        {cardsVisible && currentPage > 0 && (
          <motion.button
            key="left-arrow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed left-8 lg:left-16 top-1/2 -translate-y-1/2 z-40 hidden md:flex items-center justify-center w-20 h-20 rounded-full border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Right Arrow — Next Page */}
      <AnimatePresence>
        {cardsVisible && currentPage < totalPages - 1 && (
          <motion.button
            key="right-arrow"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed right-8 lg:right-16 top-1/2 -translate-y-1/2 z-40 hidden md:flex items-center justify-center w-20 h-20 rounded-full border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

    </section>
  );
};

export default PortfolioGallery;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import imgFinance from '../../img/Finance.jpg';
import imgNews from '../../img/News.jpg';
import imgGrocery from '../../img/Grocery.jpg';
import imgAura from '../../img/Haptic_alert.jpg';

const projectsData = [
  {
    id: "news-bot",
    title: "News Bot",
    category: "news_agent_bot",
    year: "2026",
    imgSrc: imgNews 
  },
  {
    id: "finance-assistant",
    title: "Finsmart",
    category: "Personal Financial Assistant",
    year: "2026",
    imgSrc: imgFinance
  },
  {
    id: "pettikada-kanaku",
    title: "Pettikada Kanaku",
    category: "Pettikada-Kanaku",
    year: "2022",
    imgSrc: imgGrocery
  },
  {
    id: "auralink",
    title: "AuraLink",
    category: "haptic_alert",
    year: "2021",
    imgSrc: imgAura
  }
];

const ProjectCard = ({ project, index, progress, range, targetScale, onExploreProject }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const stackOffset = index * 30;

  return (
    <div className="h-screen w-full flex items-center justify-center sticky top-0 px-6 lg:px-24">
      <motion.div 
        style={{ scale, top: `calc(10vh + ${stackOffset}px)` }} 
        className="relative w-full max-w-6xl h-[65vh] lg:h-[75vh] flex flex-col md:flex-row shadow-2xl p-0 lg:p-0 bg-[#111111] overflow-hidden rounded-2xl border border-white/10"
      >
        <div className="w-full md:w-1/2 p-10 lg:p-16 flex flex-col justify-between z-10 bg-transparent text-white">
          <div>
            <div className="uppercase tracking-[0.2em] text-xs font-bold text-white/50 mb-8 font-sans">
              {project.year} • {project.category}
            </div>
            <h2 className="text-5xl lg:text-7xl font-serif italic font-normal leading-[1.1] tracking-tight">
              {project.title}.
            </h2>
          </div>
          
          <div className="mt-12 md:mt-0">
            <button
              onClick={() => onExploreProject && onExploreProject(project.id)}
              className="flex items-center gap-4 text-sm font-medium border border-white/20 px-8 py-4 rounded-full text-white hover:bg-white hover:text-black transition-all duration-500 group"
            >
              Explore Project 
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 border-l border-white/5 relative overflow-hidden bg-black/50">
          <img 
            src={project.imgSrc} 
            alt={project.title} 
            className="w-full h-full object-cover filter brightness-[0.6] hover:brightness-[0.9] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] scale-[1.02] hover:scale-100" 
          />
        </div>
      </motion.div>
    </div>
  );
}

const Projects = ({ onExploreProject }) => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={containerRef} className="relative w-full mt-32 z-10 text-black dark:text-white" id="projects">
      <div className="px-10 lg:px-24 max-w-7xl mx-auto mb-24">
        <h3 className="uppercase tracking-[0.3em] font-sans text-sm font-bold opacity-50 mb-4 text-black dark:text-white">Selected Works</h3>
        <p className="text-2xl md:text-5xl font-serif italic max-w-2xl text-current">
          Engineered experiences built for the modern web.
        </p>
      </div>

      {projectsData.map((project, i) => {
        const targetScale = 1 - ((projectsData.length - i) * 0.05);
        const triggerPoint = i * (1 / projectsData.length);
        const range = [triggerPoint, 1];

        return (
          <ProjectCard 
            key={i} 
            project={project} 
            index={i} 
            progress={scrollYProgress} 
            range={range} 
            targetScale={targetScale}
            onExploreProject={onExploreProject}
          />
        );
      })}
    </section>
  );
};

export default Projects;

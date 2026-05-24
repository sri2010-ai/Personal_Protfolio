import React from 'react';
import { motion } from 'framer-motion';

// Use the user's provided image from the project root
import projectImg from '../../Untitled design (4).png';

const worksData = [
  {
    title: "System OS Interface",
    context: "Capstone Project 2023",
    image: projectImg,
    span: "md:col-span-8" // Asymmetrical grid layout
  },
  {
    title: "Data Visualization Platform",
    context: "Personal Experiment 2024",
    image: projectImg,
    span: "md:col-span-4"
  },
  {
    title: "Hardware Analytics Dashboard",
    context: "Internship 2023",
    image: projectImg,
    span: "md:col-span-6"
  },
  {
    title: "Spatial Computing Demo",
    context: "Research 2024",
    image: projectImg,
    span: "md:col-span-6"
  }
];

const WorkCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.32, 0.72, 0, 1] }}
      className={`industrial-card group p-4 overflow-hidden flex flex-col gap-4 ${item.span}`}
    >
      <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-black/50">
        <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
        />
      </div>
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-2 pt-2">
        <div>
          <span className="text-xs text-[#007AFF] uppercase tracking-widest font-mono mb-2 block">{item.context}</span>
          <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
        </div>
        
        <a href="#" className="text-sm border-b border-white/20 pb-1 text-white/50 hover:text-white hover:border-white transition-colors duration-300 w-max">
          View Case Study
        </a>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section id="works" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px bg-white/20 w-12"></div>
          <span className="font-mono text-xs text-white/50 tracking-[0.2em] uppercase">Showcase</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">Selected Works.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {worksData.map((item, i) => (
          <WorkCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Works;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import PortfolioGallery from './components/PortfolioGallery';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import TransitionOverlay from './components/TransitionOverlay';
import ProjectDetail from './components/ProjectDetail';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [currentPage, setCurrentPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState(null);

  const navigateToProject = (id) => {
    setActiveProjectId(id);
    setCurrentPage('project-detail');
    window.scrollTo({ top: 0 });
  };

  const handleBackFromProject = () => {
    setCurrentPage(activeProjectId ? 'portfolio' : 'home');
    setActiveProjectId(null);
  };


  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { scrollY } = useScroll();
  
  // Navigation Style logic
  const getNavButtonStyle = (page) => {
    const isActive = currentPage === page;
    const baseClasses = "rounded-full px-6 py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-500 border backdrop-blur-md";
    
    return isActive 
      ? `${baseClasses} bg-black text-white border-black dark:bg-white dark:text-black dark:border-white` 
      : `${baseClasses} bg-white/40 border-white/50 text-black hover:bg-white/60 dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:hover:border-white/20 shadow-[0_0_10px_rgba(0,0,0,0.05)] dark:shadow-none`;
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-[100dvh] transition-colors duration-500 font-sans relative flex flex-col bg-[#f5f5f5] text-[#000000] dark:bg-[#080808] dark:text-white">
      {/* Top Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-0 left-0 right-0 p-8 md:p-12 flex justify-between items-center z-50 pointer-events-none"
      >
        {/* Left nav (Home & Portfolio) */}
        <div className="flex gap-4 pointer-events-auto">
          <button 
            onClick={() => setCurrentPage('home')} 
            className={getNavButtonStyle('home')}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentPage('portfolio')} 
            className={getNavButtonStyle('portfolio')}
          >
            Portfolio
          </button>
        </div>
        
        {/* Right nav */}
        <div className="flex gap-4 pointer-events-auto">
          <button 
            onClick={() => setCurrentPage('about')}
            className={getNavButtonStyle('about')}
          >
            About
          </button>
          <button 
            onClick={() => setCurrentPage('contact')}
            className={`${getNavButtonStyle('contact')} hidden md:block`}
          >
            Get In Touch
          </button>
          <button 
            onClick={toggleTheme} 
            className={`border rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-500 ${theme === 'dark' ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}
          >
            {theme === 'dark' ? '☀️ LI' : '🌙 DA'}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence mode="wait">
        <TransitionOverlay key={`${currentPage}-overlay`} />
        
        {currentPage === 'home' && <Home key="home-page" onExploreProject={navigateToProject} />}
        {currentPage === 'about' && (
          <motion.div key="about-page">
            <About />
            <Footer />
          </motion.div>
        )}
        {currentPage === 'portfolio' && (
          <motion.div key="portfolio-page">
            <PortfolioGallery onExploreProject={navigateToProject} />
            <Footer />
          </motion.div>
        )}
        {currentPage === 'contact' && (
          <motion.div key="contact-page">
            <Contact />
          </motion.div>
        )}
        {currentPage === 'project-detail' && activeProjectId && (
          <motion.div key={`project-${activeProjectId}`}>
            <ProjectDetail projectId={activeProjectId} onBack={handleBackFromProject} />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

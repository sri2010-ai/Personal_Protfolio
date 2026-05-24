import React from 'react';
import { motion } from 'framer-motion';

const TransitionOverlay = () => {
  return (
    <div className="fixed inset-0 z-[60] flex pointer-events-none">
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="w-1/4 h-full bg-[#0a0a0a]"
          initial={{ scaleX: 1, originX: 0 }}
          animate={{ scaleX: 0, originX: 1 }}
          exit={{ scaleX: 1, originX: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: i * 0.1, 
            ease: [0.32, 0.72, 0, 1] 
          }}
        />
      ))}
    </div>
  );
};

export default TransitionOverlay;

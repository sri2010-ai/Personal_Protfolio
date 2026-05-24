import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Smartphone, Globe, ShieldCheck, Zap } from 'lucide-react';

const BentoCard = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.32, 0.72, 0, 1] }}
    className={`double-bezel h-full ${className}`}
  >
    <div className="double-bezel-inner p-8 flex flex-col justify-between">
      {children}
    </div>
  </motion.div>
);

const BentoGrid = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="text-emerald-500 font-medium tracking-widest text-xs uppercase mb-4 block">Core Competencies</span>
        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">Systems for the <br /> modern frontier.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-6 min-h-[700px]">
        {/* Card 1: Main Focus */}
        <BentoCard className="md:col-span-8 row-span-1" delay={0.1}>
          <div className="flex justify-between items-start">
            <div className="bg-emerald-500/10 p-3 rounded-2xl">
              <Cpu className="text-emerald-500" size={32} />
            </div>
            <Zap className="text-white/20 animate-pulse" size={20} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">AI-Native Engineering</h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-[40ch]">
              Integrating agentic workflows and LLM orchestration directly into the product core for intelligent user experiences.
            </p>
          </div>
        </BentoCard>

        {/* Card 2: Metrics */}
        <BentoCard className="md:col-span-4 row-span-2" delay={0.2}>
          <div className="flex flex-col h-full">
            <div className="bg-blue-500/10 p-3 rounded-2xl w-fit mb-auto">
              <Globe className="text-blue-500" size={32} />
            </div>
            <div className="space-y-8 mt-12">
              <div className="group">
                <div className="text-5xl font-display font-bold mb-1 tracking-tighter">99.9%</div>
                <div className="text-xs uppercase text-white/30 tracking-widest">Uptime Optimization</div>
              </div>
              <div className="group">
                <div className="text-5xl font-display font-bold mb-1 tracking-tighter">12k+</div>
                <div className="text-xs uppercase text-white/30 tracking-widest">Global Deployments</div>
              </div>
              <div className="group">
                <div className="text-5xl font-display font-bold mb-1 tracking-tighter">45ms</div>
                <div className="text-xs uppercase text-white/30 tracking-widest">Average Latency</div>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Card 3: Mobile */}
        <BentoCard className="md:col-span-4 row-span-1" delay={0.3}>
          <Smartphone className="text-white/20 mb-auto" size={40} />
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Adaptive UI</h3>
            <p className="text-white/40 text-[13px]">Fluid layouts that scale across every dimension.</p>
          </div>
        </BentoCard>

        {/* Card 4: Security */}
        <BentoCard className="md:col-span-4 row-span-1" delay={0.4}>
          <ShieldCheck className="text-emerald-500/50 mb-auto" size={40} />
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Hardened Security</h3>
            <p className="text-white/40 text-[13px]">Enterprise-grade encryption by default.</p>
          </div>
        </BentoCard>
      </div>
    </section>
  );
};

export default BentoGrid;

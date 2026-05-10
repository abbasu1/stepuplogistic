import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../utils/constants';

const StatItem: React.FC<{ value: string, label: string, index: number }> = ({ value, label, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center md:items-start text-center md:text-left relative group px-8"
    >
      <div className="absolute -inset-8 bg-blue-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="flex items-baseline gap-1 mb-2 relative z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-7xl md:text-9xl font-serif tracking-tighter text-gradient"
        >
          {value}
        </motion.span>
      </div>
      
      <div className="flex items-center gap-3 relative z-10">
        <span className="w-8 h-[1px] bg-blue-500/30" />
        <span className="text-sm uppercase tracking-[0.3em] font-black text-blue-400/60 group-hover:text-blue-400 transition-colors">
          {label}
        </span>
      </div>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-40 relative overflow-hidden border-y border-white/5 bg-surface/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 md:gap-y-0 relative">
          {/* Vertical Dividers for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/3 -translate-y-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="hidden md:block absolute top-1/2 left-2/3 -translate-y-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          {STATS.map((stat, index) => (
            <StatItem key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

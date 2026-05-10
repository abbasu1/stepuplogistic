import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../utils/constants';

const BentoCards: React.FC = () => {
  return (
    <section id="services" className="py-48 px-6 bg-black">
      <div className="container mx-auto">
        <div className="relative flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-16">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-10 h-[1px] bg-blue-600" />
              <span className="text-xs uppercase tracking-[0.5em] font-black text-blue-500">Core Expertise</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-[10rem] font-serif tracking-tighter mb-10 leading-[0.85] text-white"
            >
              Precision <br /> <span className="text-blue-600 italic">Logistics.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-md text-white/40 text-lg md:text-xl leading-relaxed mb-4 relative z-10"
          >
            We transform chaotic freight markets into streamlined, predictable growth engines for modern carriers.
          </motion.p>

          {/* Restored & Refined Animated Plus Grid */}
          <div className="hidden lg:block absolute right-0 top-0 w-full h-[500px] overflow-hidden pointer-events-none z-0">
            <div className="relative w-full h-full flex justify-end pr-20 pt-10">
              <div className="grid grid-cols-4 gap-12 opacity-30">
                {[...Array(16)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                    className="text-blue-500 text-xl font-thin"
                  >
                    +
                  </motion.div>
                ))}
              </div>
              
              {/* Floating Data Point */}
              <motion.div
                animate={{ 
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-600/10 blur-[60px] rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 h-[1600px] md:h-[1000px]">
          {/* Main Card 1 - Heroic Bento */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[4rem] border border-white/5 bg-surface/10 shadow-2xl"
          >
            <img 
              src={SERVICES[0].image} 
              alt={SERVICES[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-[0.3] grayscale-[0.3]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute inset-0 p-16 flex flex-col justify-between">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">{SERVICES[0].label}</span>
              <div>
                <h3 className="text-5xl md:text-7xl font-serif mb-8 text-white group-hover:text-blue-500 transition-colors duration-500 leading-none">{SERVICES[0].title}</h3>
                <p className="text-white/40 max-w-sm text-lg leading-relaxed">{SERVICES[0].description}</p>
                <button className="mt-10 flex items-center gap-4 text-white text-xs font-black uppercase tracking-widest group/btn">
                  Explore System
                  <span className="w-8 h-[1px] bg-white/20 group-hover/btn:w-12 transition-all duration-500 bg-blue-500" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Wide Bento */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-[4rem] border border-white/5 bg-surface/10"
          >
            <img 
              src={SERVICES[1].image} 
              alt={SERVICES[1].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-[0.3]"
            />
            <div className="absolute inset-0 p-12 flex items-end justify-between">
              <h3 className="text-4xl md:text-5xl font-serif text-white group-hover:text-blue-500 transition-colors duration-500">{SERVICES[1].title}</h3>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-2">Service — 02</span>
            </div>
          </motion.div>

          {/* Card 3 - Square Bento */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-[3.5rem] border border-white/5 bg-surface/10"
          >
            <img 
              src={SERVICES[2].image} 
              alt={SERVICES[2].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-[0.3]"
            />
            <div className="absolute inset-0 p-10 flex flex-col justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/20">System — 03</span>
              <h3 className="text-3xl font-serif text-white group-hover:text-blue-500 transition-colors duration-500 leading-tight">{SERVICES[2].title}</h3>
            </div>
          </motion.div>

          {/* Card 4 - Square Bento */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-[3.5rem] border border-white/5 bg-surface/10"
          >
            <img 
              src={SERVICES[3].image} 
              alt={SERVICES[3].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-[0.3]"
            />
            <div className="absolute inset-0 p-10 flex flex-col justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/20">System — 04</span>
              <h3 className="text-3xl font-serif text-white group-hover:text-blue-500 transition-colors duration-500 leading-tight">{SERVICES[3].title}</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoCards;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoPlayer from './VideoPlayer';
import { COMPANY_NAME, TAGLINE, ROLES, HERO_VIDEO_SRC } from '../utils/constants';

interface HeroProps {
  isStarted: boolean;
}

const Hero: React.FC<HeroProps> = ({ isStarted }) => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Video with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={isStarted ? { scale: 1 } : { scale: 1.2 }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <VideoPlayer src={HERO_VIDEO_SRC} className="brightness-[0.4] grayscale-[0.2]" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      <div className="container relative z-10 px-6 mx-auto pt-32 md:pt-40 pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isStarted ? "visible" : "hidden"}
            className="hero-content max-w-4xl"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-blue-500" />
              <span className="text-xs uppercase tracking-[0.6em] font-black text-blue-400/80">
                {TAGLINE}
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-[8.5rem] font-serif tracking-tighter leading-[0.8] mb-8 text-white font-bold text-reveal-mask">
              {COMPANY_NAME.split(' ').map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-6 md:mr-10 last:mr-0 overflow-hidden py-4">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={isStarted ? { y: 0 } : { y: "100%" }}
                    transition={{ 
                      duration: 1.8, 
                      ease: [0.16, 1, 0.3, 1], 
                      delay: 0.6 + (wordIndex * 0.2) 
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Added: Technical Metadata Row to fill space */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 mb-12 opacity-40"
            >
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono tracking-widest text-blue-500 font-bold uppercase">Auth_Key</span>
                <span className="text-[10px] font-mono text-white/60 font-medium">#LOG_STP_8422</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono tracking-widest text-blue-500 font-bold uppercase">Region</span>
                <span className="text-[10px] font-mono text-white/60 font-medium">GLOBAL_CORRIDORS</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono tracking-widest text-blue-500 font-bold uppercase">Status</span>
                <span className="text-[10px] font-mono text-white/60 font-medium">LIVE_STREAM_ACTIVE</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 mb-16">
              <div className="text-lg md:text-3xl font-serif italic text-white/60">
                Specialized in 
                <span className="relative inline-block min-w-[200px] ml-4 text-white not-italic font-black tracking-tight">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentRole}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 top-0 text-blue-500"
                    >
                      {ROLES[currentRole]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
              <button className="btn-premium group">
                Initialize Project
                <span className="inline-block ml-3 transition-transform group-hover:translate-x-2">→</span>
              </button>
              <button className="btn-outline-premium group">
                View Intelligence
                <span className="inline-block ml-3 opacity-40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Design-Focused Abstract Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={isStarted ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: 50 }}
            transition={{ duration: 2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block w-[400px] mt-20 lg:mt-0"
          >
            <div className="glass-premium p-10 rounded-[3rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/20 transition-colors" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-10">
                  <div className="w-10 h-10 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-500">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                  </div>
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">Operational Metrics</span>
                </div>

                <div className="space-y-8">
                  {[
                    { label: "Network Reliability", val: "99.98%" },
                    { label: "Dispatch Efficiency", val: "+24.5%" },
                    { label: "Active Carriers", val: "1,240+" }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="text-xs text-white/40 font-medium uppercase tracking-widest">{stat.label}</span>
                        <span className="text-xl font-mono text-white tracking-tighter">{stat.val}</span>
                      </div>
                      <div className="w-full h-[1px] bg-white/5">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={isStarted ? { width: "100%" } : { width: 0 }}
                          transition={{ duration: 2, delay: 1.5 + (i * 0.2) }}
                          className="h-full bg-blue-500/40" 
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-surface/80 overflow-hidden">
                        <div className="w-full h-full bg-blue-500/20" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Trusted by 200+ Fleets</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Design Elements & Large Manifest Text */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-[30%] left-[-20%] select-none opacity-[0.03]">
          <h2 className="text-[25rem] font-black text-white whitespace-nowrap tracking-[-0.05em]">MANIFEST</h2>
        </div>
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] border border-white/5 rounded-full" />
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] border border-white/5 rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={isStarted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-black">Scroll to explore</div>
        <div className="w-[1px] h-16 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SECONDARY_VIDEO_SRC } from '../utils/constants';

const CenterFocus: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[150vh] w-full flex items-center justify-center overflow-hidden bg-black"
    >
      <motion.div 
        style={{ scale, opacity }}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* Background Video/Image Frame */}
        <div className="relative w-[90%] h-[80%] rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(59,130,246,0.2)]">
          <video 
            src={SECONDARY_VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
          />
          
          {/* Overlay Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />

          {/* Technical HUD Elements */}
          <div className="absolute inset-0 p-12 flex flex-col justify-between pointer-events-none">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black tracking-[0.5em] text-blue-500 uppercase">System Status</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-mono text-white/40">CALIBRATING_OPTIMAL_PATH_082</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-black tracking-[0.5em] text-blue-500 uppercase">Data Throughput</span>
                <div className="text-xl font-mono text-white tabular-nums tracking-tighter">842.12 GB/S</div>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div className="max-w-xs">
                <div className="text-blue-500 mb-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 5V35M5 20H35" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                    <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="20" cy="20" r="2" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-[10px] font-mono text-white/30 leading-relaxed uppercase">
                  Continuous monitoring of freight dynamics across all continental corridors. Real-time adjustment for atmospheric and traffic variables.
                </p>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <div className="w-32 h-[1px] bg-blue-500/30" />
                <span className="text-[10px] font-black tracking-[0.5em] text-white uppercase">Operational Precision</span>
              </div>
            </div>
          </div>

          {/* Central Impact Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <motion.div 
              style={{ y: textY }}
              className="text-center"
            >
              <h2 className="text-6xl md:text-[12rem] font-serif tracking-tighter leading-none text-white mb-8">
                Absolute <br />
                <span className="text-blue-500 italic">Control.</span>
              </h2>
              <p className="text-lg md:text-2xl text-white/60 font-medium tracking-wide max-w-xl mx-auto">
                We don't just move freight. We orchestrate the entire logistics ecosystem with clinical precision.
              </p>
            </motion.div>
          </div>

          {/* Glowing Scanner Line */}
          <motion.div 
            animate={{ 
              top: ["0%", "100%", "0%"]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[1px] bg-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.8)] z-30 pointer-events-none"
          />
        </div>
      </motion.div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 blur-[150px] rounded-full" />
      </div>
    </section>
  );
};

export default CenterFocus;

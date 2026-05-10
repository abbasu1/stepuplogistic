import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { INSIGHTS } from '../utils/constants';

const Insights: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-[0.5em] font-black text-blue-500 mb-6 block">Editorial Perspective</span>
              <h2 className="text-6xl md:text-[10rem] font-serif tracking-tighter leading-none mb-8">
                Insights <span className="text-white/20 italic">& Notes</span>
              </h2>
            </div>
            <div className="hidden md:block pb-4">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Scroll horizontally</span>
                <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
                  <motion.div 
                    style={{ scaleX: scrollYProgress }}
                    className="absolute top-0 left-0 w-full h-full bg-blue-500 origin-left" 
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div style={{ x }} className="flex gap-12 pl-[10%]">
          {INSIGHTS.map((item, index) => (
            <div 
              key={index} 
              className="group relative flex-shrink-0 w-[85vw] md:w-[40vw] h-[55vh] rounded-[3rem] overflow-hidden border border-white/5 bg-surface/20"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="pill border-white/20 text-white/60 font-black px-6">
                    {item.category}
                  </span>
                  <span className="text-4xl font-serif italic text-white/20">0{index + 1}</span>
                </div>
                
                <div>
                  <h3 className="text-3xl md:text-5xl font-serif text-white mb-8 group-hover:text-blue-400 transition-colors duration-500 leading-tight">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between pt-8 border-t border-white/10">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-bold">{item.date}</span>
                      <span className="text-xs font-black text-blue-500">{item.readTime}</span>
                    </div>
                    <button className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-transparent transition-all duration-500">
                      <span className="text-xl">↗</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Final Large Branding Card */}
          <div className="flex-shrink-0 w-[85vw] md:w-[40vw] h-[55vh] rounded-[3rem] border border-blue-500/20 bg-blue-500/5 flex flex-col items-center justify-center p-20 text-center gap-10">
            <h3 className="text-5xl md:text-7xl font-serif italic text-white/40 leading-none">
              Stay ahead <br /> of the <br /> <span className="text-blue-500 font-bold not-italic">curve.</span>
            </h3>
            <button className="btn-premium">Subscribe to Dispatch Digest</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Insights;

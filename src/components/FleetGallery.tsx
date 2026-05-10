import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FLEET_GALLERY } from '../utils/constants';

gsap.registerPlugin(ScrollTrigger);

const FleetGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.gallery-item');
      items.forEach((item) => {
        const el = item as HTMLElement;
        const img = el.querySelector('img');
        if (img) {
          gsap.fromTo(img, 
            { y: -50 },
            { 
              y: 50,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true
              }
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="fleet" ref={containerRef} className="py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-32 relative">
          <div className="bg-blob w-[400px] h-[400px] bg-blue-500/10 -top-20 -left-20" />
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.4em] font-black text-blue-400 mb-6 block"
          >
            Operations
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[10rem] font-serif tracking-tighter mb-10 italic leading-[0.8]"
          >
            Freight <span className="text-blue-500 font-bold not-italic">in</span> motion
          </motion.h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl text-white/60 text-xl md:text-2xl leading-relaxed font-medium"
            >
              Real-world logistics visuals showing routes, trucks, loading docks, dispatch systems, and freight coordination.
            </motion.p>
            <button className="btn-outline-premium group shrink-0">
              Explore Fleet 
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {FLEET_GALLERY.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`gallery-item group relative overflow-hidden rounded-[3rem] border border-white/5 bg-surface/30 shadow-2xl ${
                index % 3 === 1 ? "md:translate-y-24" : index % 3 === 2 ? "md:-translate-y-12" : ""
              }`}
              style={{ height: index % 3 === 1 ? '600px' : '500px' }}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-[130%] object-cover brightness-[0.4] transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <span className="text-blue-400 text-xs font-black uppercase tracking-widest mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">Operational View</span>
                <h3 className="text-3xl md:text-4xl font-serif text-white group-hover:text-blue-400 transition-colors duration-500">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetGallery;

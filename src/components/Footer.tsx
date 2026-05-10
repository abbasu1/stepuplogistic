import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LinkedInIcon, TwitterIcon, InstagramIcon } from './SocialIcons';
import VideoPlayer from './VideoPlayer';
import { HERO_VIDEO_SRC } from '../utils/constants';

const Footer: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const socials = [
    { name: 'LinkedIn', icon: LinkedInIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Instagram', icon: InstagramIcon }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer id="contact" className="relative min-h-screen flex flex-col justify-between pt-40 pb-12 bg-background overflow-hidden">
      {/* Background Video Mask - Thinking Different: Use Video as an interactive layer */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <VideoPlayer src={HERO_VIDEO_SRC} className="brightness-[0.2] saturate-[0.5]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center">
        {/* Giant Masked Brand Section */}
        <div className="relative mb-24 md:mb-40 pt-10 md:pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <h2 className="text-[18vw] md:text-[12vw] font-black tracking-tighter leading-none text-white select-none italic text-center">
              STEPUP
            </h2>
            <div className="flex items-center gap-4 md:gap-8 mt-2 md:mt-8">
              <div className="h-[1px] md:h-[2px] w-8 md:w-40 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              <span className="text-lg md:text-5xl font-serif italic text-blue-400 whitespace-nowrap">Logistics Hub</span>
              <div className="h-[1px] md:h-[2px] w-8 md:w-40 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            </div>
          </motion.div>
        </div>

        {/* The Hub Controls - Interactive CTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 items-end text-center md:text-left">
          <div className="space-y-8 flex flex-col items-center md:items-start">
            <div className="space-y-2">
              <span className="text-blue-500 text-xs font-black uppercase tracking-widest block">System Status</span>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-white font-bold tracking-tight text-sm md:text-base uppercase">OPERATIONAL / 24/7</span>
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-blue-500 text-xs font-black uppercase tracking-widest block">Local Hub Time</span>
              <span className="text-4xl md:text-6xl font-serif text-white/80 tabular-nums">{time}</span>
            </div>
          </div>

          <div className="flex justify-center py-6 md:py-0">
            <motion.a 
              href="mailto:dispatch@stepuplogistic.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-40 h-40 md:w-64 md:h-64 rounded-full border border-blue-500/30 flex items-center justify-center group overflow-hidden bg-surface/20 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
              <div className="relative z-10 text-center">
                <span className="text-[10px] md:text-sm font-black uppercase tracking-widest block mb-2 group-hover:text-background transition-colors">Start Moving</span>
                <span className="text-3xl md:text-5xl group-hover:text-background transition-colors">↗</span>
              </div>
            </motion.a>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-12">
            <nav className="flex flex-col items-center md:items-end gap-4">
              {['Services', 'Fleet', 'Insights', 'Contact'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`}
                  className="text-xl md:text-4xl font-serif italic text-white/40 hover:text-blue-400 transition-all duration-500 md:hover:translate-x-[-20px]"
                >
                  {link}
                </a>
              ))}
            </nav>
            <div className="flex gap-6">
              {socials.map((social) => (
                <a 
                  key={social.name} 
                  href="#" 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:border-transparent group transition-all duration-500"
                  title={social.name}
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5 text-white/50 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Thinking Different Bottom Bar */}
      <div className="container mx-auto px-6 pt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 pt-8 border-t border-white/5 pb-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-center md:text-left">
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white/20">StepUp Logistic © 2026</span>
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Coordinates: 34.0522° N, 118.2437° W</span>
          </div>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-blue-400 transition-colors">Legal</a>
            <a href="#" className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-blue-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

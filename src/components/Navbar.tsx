import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ["Home", "Services", "Fleet", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-[100] px-6 py-4 md:py-6 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Elegant Minimal Logo */}
          <a href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-xl transition-transform group-hover:rotate-12">
              S
            </div>
            <span className="text-xl font-bold tracking-tighter text-white hidden sm:block">StepUp</span>
          </a>
          
          {/* Minimal Floating Nav */}
          <div className={`
            glass px-2 py-2 rounded-full transition-all duration-700 flex items-center gap-2
            ${scrolled ? "translate-y-0 opacity-100 shadow-2xl" : "md:translate-y-0 opacity-100"}
          `}>
            <div className="hidden md:flex items-center">
              {links.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`}
                  className="px-6 py-2 text-[10px] uppercase tracking-[0.3em] font-black text-white/40 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
            
            <button className="pill bg-blue-600 text-white hover:bg-white hover:text-black px-8 py-3 shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)]">
              Book Call
            </button>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 text-white hover:text-blue-500 transition-colors"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center gap-12"
          >
            {links.map((link, i) => (
              <motion.a
                key={link}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-6xl font-serif italic text-white/40 hover:text-blue-500 transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

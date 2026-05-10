import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { COMPANY_NAME } from '../utils/constants';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [counter, setCounter] = useState(0);
  const words = ["Dispatch", "Freight", "Routes"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    gsap.timeline({
      onComplete: () => {
        gsap.to(".preloader", {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          onComplete
        });
      }
    });

    // Counter animation
    let count = { value: 0 };
    gsap.to(count, {
      value: 100,
      duration: 2.7,
      ease: "power1.inOut",
      onUpdate: () => setCounter(Math.floor(count.value))
    });

    // Word rotation
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 900);

    return () => {
      clearInterval(wordInterval);
    };
  }, [onComplete]);

  return (
    <div className="preloader fixed inset-0 z-[100] flex flex-col justify-between p-8 bg-background overflow-hidden">
      <div className="bg-blob w-[600px] h-[600px] bg-accent/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="flex justify-between items-start relative z-10">
        <span className="text-sm font-medium tracking-tighter uppercase text-accent/60">{COMPANY_NAME}</span>
        <span className="text-sm font-mono text-accent/40">SYSTEM_READY</span>
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="relative h-32 w-full flex items-center justify-center overflow-hidden">
          <div
            className="text-7xl md:text-[10rem] font-serif italic text-gradient transition-all duration-500 ease-in-out"
          >
            {words[currentWord]}
          </div>
        </div>
      </div>

      <div className="space-y-6 relative z-10">
        <div className="flex justify-between items-end">
          <div className="text-8xl md:text-[14rem] font-serif leading-none tracking-tighter text-white/90">
            {counter.toString().padStart(3, '0')}
          </div>
          <div className="pb-8 text-accent/60 text-xs uppercase tracking-[0.3em] font-bold">
            Synchronizing Freight Data
          </div>
        </div>
        <div className="h-[2px] w-full bg-stroke relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-accent-gradient transition-all duration-100 ease-linear shadow-[0_0_15px_rgba(78,133,191,0.5)]"
            style={{ width: `${counter}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;

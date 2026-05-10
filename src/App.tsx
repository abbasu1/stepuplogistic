import { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoCards from './components/BentoCards';
import Insights from './components/Insights';
import FleetGallery from './components/FleetGallery';
import Stats from './components/Stats';
import CenterFocus from './components/CenterFocus';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="noise-overlay" />
      
      {/* Background Depth */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="bg-blob w-[800px] h-[800px] bg-blue-600/10 -top-20 -left-20 animate-pulse" />
        <div className="bg-blob w-[600px] h-[600px] bg-indigo-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="bg-blob w-[700px] h-[700px] bg-blue-400/5 bottom-0 right-0 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <main className={`relative z-10 transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <Hero isStarted={!loading} />
        <BentoCards />
        <CenterFocus />
        <Stats />
        <FleetGallery />
        <Insights />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

export default App;

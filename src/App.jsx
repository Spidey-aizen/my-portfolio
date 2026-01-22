import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sun, Moon, Download } from 'lucide-react';

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects"; 
import Certs from "./pages/Certs";
import About from "./pages/About"; 
import MatrixBackground from './components/MatrixBackground';

const TABS = ['HOME', 'SKILLS', 'PROJECTS', 'CERTS', 'ABOUT'];

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [activeTab, setActiveTab] = useState('HOME');
  const isDark = theme === 'dark';

  const handleSwipe = (direction) => {
    const currentIndex = TABS.indexOf(activeTab);
    if (direction === 'left' && currentIndex < TABS.length - 1) setActiveTab(TABS[currentIndex + 1]);
    if (direction === 'right' && currentIndex > 0) setActiveTab(TABS[currentIndex - 1]);
  };

  return (
    <div className={`h-screen w-screen overflow-hidden transition-colors duration-700 font-mono ${isDark ? 'bg-[#05070a] text-white' : 'bg-[#fffaf5] text-slate-900'}`}>
      <MatrixBackground isDark={isDark} />
      
      <div className={`fixed inset-0 pointer-events-none z-1 ${isDark ? 'bg-[radial-gradient(circle_at_center,transparent_30%,rgba(5,7,10,0.7)_100%)]' : 'bg-[radial-gradient(circle_at_center,transparent_50%,rgba(255,250,245,0.15)_100%)]'}`} />

      <header className="fixed top-0 left-0 w-full z-[100] p-8 flex justify-between items-start pointer-events-auto">
        <h1 className="text-2xl font-black italic tracking-tighter cursor-pointer" onClick={() => setActiveTab('HOME')}>
          PRASANNA<span className="text-emerald-500">.</span>
        </h1>
        <nav className="absolute left-1/2 -translate-x-1/2 pointer-events-auto">
          <div className={`flex items-center gap-1 p-1.5 rounded-full border shadow-xl backdrop-blur-2xl ${isDark ? 'bg-black/40 border-white/10' : 'bg-white/60 border-slate-200'}`}>
            {TABS.map((item) => (
              <button key={item} onClick={() => setActiveTab(item)} className={`px-5 py-2 rounded-full text-[9px] font-black tracking-widest relative transition-all ${activeTab === item ? (isDark ? 'text-black' : 'text-white') : 'opacity-40 hover:opacity-100'}`}>
                {activeTab === item && <motion.div layoutId="nav-pill" className={`absolute inset-0 rounded-full -z-10 ${isDark ? 'bg-emerald-400' : 'bg-slate-900'}`} />}
                {item}
              </button>
            ))}
          </div>
        </nav>
        <button onClick={() => setTheme(isDark ? 'light' : 'dark')} className="p-3 rounded-xl border border-white/10 pointer-events-auto">
          {isDark ? <Sun size={18}/> : <Moon size={18}/>}
        </button>
      </header>

      {/* SWIPE CONTAINER FIX: added touch-none */}
      <motion.main 
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = offset.x;
          if (swipe < -100 || velocity.x < -500) handleSwipe('left');
          else if (swipe > 100 || velocity.x > 500) handleSwipe('right');
        }}
        className="h-full w-full flex items-center justify-center pt-24 pb-44 px-10 relative z-10 cursor-grab active:cursor-grabbing touch-none"
      >
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab} 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -50 }} 
            transition={{ duration: 0.3 }}
            className="w-full flex justify-center"
          >
            {activeTab === 'HOME' && <Home isDark={isDark} />}
            {activeTab === 'SKILLS' && <Skills isDark={isDark} />}
            {activeTab === 'PROJECTS' && <Projects isDark={isDark} />}
            {activeTab === 'CERTS' && <Certs isDark={isDark} />}
            {activeTab === 'ABOUT' && <About isDark={isDark} />}
          </motion.div>
        </AnimatePresence>
      </motion.main>
    </div>
  );
}
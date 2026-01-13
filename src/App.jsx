import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Mail, ExternalLink, Code2, Send, Loader2, Sun, Moon } from 'lucide-react';
import emailjs from '@emailjs/browser';

// --- SUB-COMPONENT: OCEAN BACKGROUND ---
const OceanBackground = () => (
  <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#0a192f] to-[#000814]">
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-white/10 rounded-full"
        style={{ width: 10, height: 10, left: `${Math.random() * 100}%`, bottom: -20 }}
        animate={{ y: '-110vh', opacity: [0, 0.5, 0] }}
        transition={{ duration: Math.random() * 10 + 5, repeat: Infinity, delay: i * 2 }}
      />
    ))}
  </div>
);

// --- SUB-COMPONENT: SPRING BACKGROUND ---
const SpringBackground = () => (
  <div className="fixed inset-0 z-0 bg-[#fffaf0]">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-yellow-50/40 to-emerald-50/30" />
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-orange-400/30"
        initial={{ x: -100, y: `${Math.random() * 100}vh` }}
        animate={{ x: '110vw', rotate: 360 }}
        transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }}
      >
        🍃
      </motion.div>
    ))}
  </div>
);

// --- MAIN APP ---
function App() {
  const [theme, setTheme] = useState('ocean');
  const [activeIndex, setActiveIndex] = useState(0);
  const isDark = theme === 'ocean';
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const toggleTheme = () => setTheme(t => t === 'ocean' ? 'spring' : 'ocean');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    // Note: Add your real IDs here later
    setTimeout(() => { setIsSending(false); alert("Message sent!"); }, 2000);
  };

  return (
    <div className={`relative h-screen w-screen overflow-hidden transition-colors duration-700 ${isDark ? 'bg-black' : 'bg-[#fffaf0]'}`}>
      
      {/* Backgrounds */}
      <AnimatePresence mode='wait'>
        {isDark ? <OceanBackground key="o" /> : <SpringBackground key="s" />}
      </AnimatePresence>

      {/* HEADER / NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all h-20 flex items-center justify-between px-10 ${isDark ? 'bg-black/50 border-white/10 text-white' : 'bg-white/50 border-orange-200 text-slate-800'}`}>
        <span className="text-2xl font-black tracking-tighter">PRASANNA<span className="text-emerald-500">.</span></span>
        
        <div className="flex items-center gap-10">
          <div className="flex gap-8 font-bold text-sm uppercase tracking-widest">
            {['Home', 'Projects', 'Contact'].map((item, idx) => (
              <button key={item} onClick={() => setActiveIndex(idx)} className={`hover:text-emerald-500 transition-colors ${activeIndex === idx ? 'text-emerald-500' : ''}`}>
                {item}
              </button>
            ))}
          </div>
          <button onClick={toggleTheme} className="p-3 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 transition-all">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* HORIZONTAL SLIDER CONTAINER */}
      <motion.div 
        className="flex h-full w-[300vw]"
        animate={{ x: `-${activeIndex * 100}vw` }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      >
        {/* SECTION 1: HOME */}
        <section className="w-[100vw] h-full flex flex-col items-center justify-center px-6 text-center">
           <motion.h1 
             initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
             className={`text-8xl md:text-[12rem] font-black leading-none mb-4 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
             PRASANNA
           </motion.h1>
           <p className={`text-xl font-medium tracking-widest uppercase ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
             Full Stack Developer & Creative Engineer
           </p>
        </section>

        {/* SECTION 2: PROJECTS */}
        <section className="w-[100vw] h-full flex items-center justify-center px-10">
          <div className="max-w-6xl w-full">
            <h2 className={`text-5xl font-bold mb-12 ${isDark ? 'text-white' : 'text-slate-800'}`}>Selected Works</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Weathering Project Card */}
              <div className={`p-8 rounded-[2rem] border backdrop-blur-xl transition-all ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white/80 border-orange-200 text-slate-800 shadow-xl'}`}>
                <h3 className="text-3xl font-bold mb-4">Weathering App</h3>
                <p className="opacity-70 mb-6">A high-performance weather tracking tool with sleek animations and real-time data integration.</p>
                <div className="flex gap-2 mb-8">
                   {['JS', 'API', 'Vite'].map(tag => <span key={tag} className="text-xs px-3 py-1 bg-emerald-500/10 rounded-full text-emerald-500 border border-emerald-500/20">{tag}</span>)}
                </div>
                <a href="https://spidey-aizen.github.io/Weathering-/" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold hover:gap-4 transition-all">
                  VIEW PROJECT <ExternalLink size={18} />
                </a>
              </div>
              
              {/* Coming Soon Card */}
              <div className={`p-8 rounded-[2rem] border border-dashed flex items-center justify-center opacity-40 ${isDark ? 'border-white/20 text-white' : 'border-slate-300 text-slate-800'}`}>
                <p className="font-mono uppercase tracking-widest">More Projects Initializing...</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CONTACT */}
        <section className="w-[100vw] h-full flex items-center justify-center px-6">
           <div className={`w-full max-w-xl p-12 rounded-[3rem] border backdrop-blur-xl ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white/80 border-orange-200 shadow-2xl text-slate-800'}`}>
              <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
              <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
                <input type="text" placeholder="Your Name" className={`p-5 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 ${isDark ? 'bg-black/40 border border-white/10' : 'bg-white border border-orange-100'}`} />
                <textarea rows="4" placeholder="Your Message" className={`p-5 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 ${isDark ? 'bg-black/40 border border-white/10' : 'bg-white border border-orange-100'}`}></textarea>
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-black py-5 rounded-2xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-3">
                  {isSending ? <Loader2 className="animate-spin" /> : <>SEND MESSAGE <Send size={18} /></>}
                </button>
              </form>
           </div>
        </section>
      </motion.div>
    </div>
  );
}

export default App;
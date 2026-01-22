import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Monitor, Zap, Paperclip } from 'lucide-react';

const Home = ({ isDark }) => {
  const neonColor = isDark ? "#00ff9d" : "#059669";

  return (
    <div className="relative flex flex-row items-center justify-between w-full h-full max-w-7xl px-8 md:px-16 select-none overflow-visible">
      
      {/* 1. TECHNICAL ICONS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Settings */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
          className="absolute top-[10%] left-[8%] opacity-30" style={{ color: neonColor }}>
          <Settings size={80} strokeWidth={1} />
        </motion.div>
        
        {/* Bottom Row Icons */}
        <div className="absolute bottom-[10%] w-[55%] left-[8%] flex justify-between items-center">
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }} 
            className="opacity-50" style={{ color: neonColor }}>
            <Zap size={55} strokeWidth={1.5} />
          </motion.div>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} 
            className="opacity-30" style={{ color: neonColor }}>
            <Monitor size={90} strokeWidth={1} />
          </motion.div>
        </div>
      </div>

      {/* 2. LEFT SECTION: IDENTITY (Shifted Left) */}
      <div className="relative z-20 flex flex-col items-start text-left pt-20">
        <h2 className={`text-[11vw] font-[1000] italic leading-none tracking-tighter uppercase transition-all duration-700 ${
          isDark ? 'text-[#00ff9d] drop-shadow-[0_0_50px_rgba(0,255,157,0.8)]' : 'text-slate-900'
        }`}>
          PRASANNA
        </h2>
        
        <div className="mt-10 flex flex-col items-start">
          <p className={`text-[12px] font-bold tracking-[1.8em] uppercase mb-6 ${isDark ? 'text-white' : 'text-slate-600'}`}>
            VISUAL ENGINEER
          </p>
          <div className="h-[2px] w-64 bg-gradient-to-r from-[#00ff9d] to-transparent mb-6" />
          <p className="text-[10px] font-bold tracking-[0.5em] opacity-40 uppercase" style={{ color: isDark ? 'white' : 'black' }}>
            CSE @ KSR COLLEGE • 8.7 CGPA
          </p>
        </div>
      </div>

      {/* 3. RIGHT SECTION: CRIMINAL POLAROID DOSSIER */}
      <motion.div 
        initial={{ x: 100, opacity: 0, rotate: 5 }}
        animate={{ x: 0, opacity: 1, rotate: -3 }}
        className="relative z-30 mr-4"
      >
        {/* The Folder/Paper Background */}
        <div className={`relative w-72 h-[450px] shadow-2xl p-6 flex flex-col gap-4 border ${
          isDark ? 'bg-[#1a1c20] border-white/10 text-white' : 'bg-[#f4f1ea] border-black/10 text-black'
        }`}>
          
          {/* Header Section */}
          <div className="border-b border-current/20 pb-4">
            <h3 className="text-xs font-black tracking-[0.3em] uppercase opacity-60">Case No#: 012024</h3>
          </div>

          {/* Polaroid Photo with Tape */}
          <div className="relative mt-4 self-center rotate-2">
            {/* Tape Elements */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-gray-500/30 backdrop-blur-sm -rotate-3 z-10" />
            
            {/* The Polaroid Frame */}
            <div className="w-52 h-60 bg-white p-3 pb-10 shadow-lg flex flex-col gap-2">
              <div className="w-full h-full bg-gray-900 flex items-center justify-center overflow-hidden grayscale contrast-125">
                 {/* Replace this icon with your actual photo <img> later */}
                 <div className="text-[10px] font-black text-white/10 uppercase tracking-widest text-center">
                   Subject_Visual<br/>Unidentified
                 </div>
              </div>
            </div>
            
            {/* Red Paperclip Detail */}
            <Paperclip size={24} className="absolute -top-2 -right-2 text-red-600 rotate-45" />
          </div>

          {/* Subject Profile Data */}
          <div className="mt-4 space-y-2 font-mono">
            <div className="flex justify-between text-[9px] font-bold border-b border-current/10 pb-1">
              <span className="opacity-50 uppercase">First Name:</span>
              <span>PRASANNA</span>
            </div>
            <div className="flex justify-between text-[9px] font-bold border-b border-current/10 pb-1">
              <span className="opacity-50 uppercase">Occupation:</span>
              <span>ENGINEER</span>
            </div>
            <div className="flex justify-between text-[9px] font-bold border-b border-current/10 pb-1">
              <span className="opacity-50 uppercase">Status:</span>
              <span className="text-red-500 animate-pulse">WANTED</span>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 opacity-10 rotate-12">
            <Fingerprint size={60} />
          </div>
        </div>
      </motion.div>

    </div>
  );
};

const Fingerprint = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z" />
    <path d="M7 12c0-2.761 2.239-5 5-5s5 2.239 5 5-2.239 5-5 5-5-2.239-5-5z" />
    <path d="M12 10v4" /><path d="M10 12h4" />
  </svg>
);

export default Home;
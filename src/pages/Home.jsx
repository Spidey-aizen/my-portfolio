import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Monitor, Zap, Paperclip } from 'lucide-react';

const Home = ({ isDark }) => {
  const neonColor = isDark ? "#00ff9d" : "#059669";

  return (
    <div className="relative flex flex-row items-center justify-between w-full h-full max-w-7xl px-8 md:px-16 select-none overflow-visible">
      
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Settings */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
          className="absolute top-[10%] left-[8%] opacity-30" style={{ color: neonColor }}>
          <Settings size={80} strokeWidth={1} />
        </motion.div>
        
        {/* Bottom Row: Monitor stays at 10%, Zap moved down 70px */}
        <div className="absolute inset-0">
          {/* Zap Icon - Shifted down 70px from original bottom-[10%] */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ duration: 3, repeat: Infinity }} 
            className="absolute bottom-[calc(10%-70px)] left-[8%] opacity-50" 
            style={{ color: neonColor }}
          >
            <Zap size={55} strokeWidth={1.5} />
          </motion.div>

          {/* Monitor Icon - Original position for balance */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 4, repeat: Infinity }} 
            className="absolute bottom-[10%] right-[35%] opacity-30" 
            style={{ color: neonColor }}
          >
            <Monitor size={90} strokeWidth={1} />
          </motion.div>
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-start text-left pt-[150px] pb-20">
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

      <motion.div 
        initial={{ x: 100, opacity: 0, rotate: -3 }}
        animate={{ x: 0, opacity: 1, rotate: -3 }}
        className="relative z-30 mr-4"
      >
        <div className={`relative w-72 h-[480px] shadow-2xl p-6 flex flex-col gap-4 border ${
          isDark ? 'bg-[#1a1c20] border-white/10 text-white' : 'bg-[#f4f1ea] border-black/10 text-black'
        }`}>
          
          <div className="border-b border-current/20 pb-4">
            <h3 className="text-xs font-black tracking-[0.3em] uppercase opacity-60">Case No#: 012024</h3>
          </div>

          <div className="relative mt-2 self-center">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-gray-500/40 z-10 border border-white/5 shadow-sm" />
            <div className="w-52 h-64 bg-white p-3 pb-10 shadow-lg flex flex-col gap-2 overflow-hidden">
              <div className="w-full h-full bg-black flex flex-col items-center justify-center relative border border-white/5 overflow-hidden">
                <motion.div 
                  animate={{ top: ['-10%', '110%'] }} 
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-[2px] bg-red-500/70 shadow-[0_0_10px_red] z-20"
                />
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(0,255,0,0.06),rgba(0,255,0,0.02),rgba(255,0,0,0.06))] bg-[length:100%_2px,3px_100%]" />
                <div className="absolute bottom-4 w-full text-center">
                  <p className="text-[6px] font-black text-red-500/60 tracking-[0.4em] uppercase">Waiting_For_Upload...</p>
                </div>
              </div>
            </div>
            <Paperclip size={24} className="absolute -top-2 -right-2 text-red-600 rotate-45" />
          </div>

          <div className="mt-6 space-y-3 font-mono">
            <div className="flex justify-between text-[9px] font-bold border-b border-current/10 pb-2">
              <span className="opacity-40 uppercase tracking-tighter">Identity:</span>
              <span className="tracking-widest">PRASANNA_G</span>
            </div>
            <div className="flex justify-between text-[9px] font-bold border-b border-current/10 pb-2">
              <span className="opacity-40 uppercase tracking-tighter">Occupation:</span>
              <span className="tracking-widest font-black uppercase">Visual Engineer</span>
            </div>
            <div className="flex justify-between text-[10px] font-black border-b border-current/10 pb-2">
              <span className="opacity-40 uppercase tracking-tighter">Status:</span>
              <span className="text-red-500 animate-pulse tracking-[0.2em]">WANTED</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
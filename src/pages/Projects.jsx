import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, ExternalLink } from 'lucide-react';

const Projects = ({ isDark, portalVariants }) => {
  const projects = [
    { 
      title: "Weathering", 
      type: "Real-time Environment", 
      icon: <Globe size={32} />, 
      link: "https://spidey-aizen.github.io/Weathering-/", 
      active: true, 
      details: "Integrated OpenWeather API with a custom 'Glassmorphism' engine.", 
      metrics: "Latency: <200ms", 
      stack: ["React", "API"] 
    },
    { 
      title: "System Core", 
      type: "Hardware Architecture", 
      icon: <Cpu size={32} />, 
      active: false, 
      details: "Mapping sensor outputs to a 3D visual workspace.", 
      metrics: "Status: Prototyping Phase", 
      stack: ["Node.js", "C++"] 
    }
  ];

  return (
    <motion.div 
      variants={portalVariants} 
      initial="initial" animate="animate" exit="exit" 
      className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl"
    >
      {projects.map((p, i) => (
        <div key={i} className={`p-8 rounded-[2.5rem] border backdrop-blur-3xl flex flex-col transition-all duration-500 ${isDark ? 'bg-white/5 border-white/10 hover:border-emerald-500/50' : 'bg-white border-slate-200 shadow-xl'}`}>
          <div className="text-emerald-500 mb-6">{p.icon}</div>
          <h3 className="text-2xl font-[1000] italic mb-1 uppercase tracking-tighter">{p.title}</h3>
          <p className="text-[10px] font-black opacity-40 uppercase tracking-[0.3em] mb-4">{p.type}</p>
          <p className="text-[11px] opacity-70 mb-6 leading-relaxed">"{p.details}"</p>
          
          <div className="mt-auto border-t border-emerald-500/10 pt-6">
            <p className="text-[8px] font-black opacity-30 uppercase tracking-widest mb-4">{p.metrics}</p>
            {p.active ? (
              <a href={p.link} target="_blank" rel="noreferrer" className={`w-full py-4 rounded-2xl flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-widest transition-all ${isDark ? 'bg-emerald-500 text-black hover:bg-white' : 'bg-slate-900 text-white hover:bg-emerald-500'}`}>
                Access System <ExternalLink size={12}/>
              </a>
            ) : (
              <div className="w-full py-4 border-2 border-dashed border-white/10 text-center rounded-2xl text-[8px] font-black opacity-20 uppercase">Encrypted_Module</div>
            )}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Projects;
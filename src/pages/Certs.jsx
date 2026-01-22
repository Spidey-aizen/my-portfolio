import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Globe, Cpu, Box } from 'lucide-react';

const Certs = ({ isDark, portalVariants }) => {
  const certificates = [
    { title: "Graphic Design", issuer: "Google Developer Groups", icon: <Palette size={24} />, details: "Professional design certification focused on visual identity." },
    { title: "Web Development", issuer: "Imagecon Academy", icon: <Globe size={24} />, details: "Comprehensive training in full-stack web technologies." },
    { title: "Matlab Courses", issuer: "MathWorks", icon: <Cpu size={24} />, details: "Specialized training in numerical computing and simulation." },
    { title: "MongoDB Basics", issuer: "MongoDB University", icon: <Box size={24} />, details: "Certification in document-oriented database management." }
  ];

  return (
    <motion.div 
      variants={portalVariants} 
      initial="initial" animate="animate" exit="exit" 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl overflow-y-auto max-h-[60vh] p-4 scrollbar-technical"
    >
      {certificates.map((cert, i) => (
        <div key={i} className={`p-6 rounded-[2rem] border backdrop-blur-3xl flex flex-col ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-xl'}`}>
          <div className="text-emerald-500 mb-4">{cert.icon}</div>
          <h3 className="text-sm font-black uppercase mb-1">{cert.title}</h3>
          <p className="text-[9px] opacity-40 uppercase mb-3">{cert.issuer}</p>
          <p className="text-[10px] opacity-60 italic leading-relaxed mb-4">"{cert.details}"</p>
          <button className="mt-auto py-2 rounded-lg border border-white/10 text-[8px] font-black uppercase hover:bg-white hover:text-black transition-all">View Proof</button>
        </div>
      ))}
    </motion.div>
  );
};

export default Certs;
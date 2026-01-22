import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Palette, Zap, Box } from 'lucide-react';

const Skills = ({ isDark, portalVariants }) => {
  const skillCards = [
    { title: "3D Modelling Softwares", tools: "Blender • Unreal Engine", icon: <Box size={24} />, color: "text-orange-500", details: "High-fidelity environment design and architectural visualization.", status: "Level: Advanced", tags: ["Blender", "UE5"] },
    { title: "Motion Design", tools: "AE • DaVinci", icon: <Monitor size={24} />, color: "text-purple-500", details: "Dynamic motion systems and procedural VFX workflows.", status: "Level: Professional", tags: ["VFX", "Grading"] },
    { title: "Visual Identity", tools: "PS • Figma", icon: <Palette size={24} />, color: "text-pink-500", details: "Crafting digital-first brand identities.", status: "Level: Senior", tags: ["UI/UX", "Branding"] },
    { title: "Editing Softwares", tools: "Illustrator • Premiere Pro", icon: <Zap size={24} />, color: "text-emerald-500", details: "Professional design and video editing using Adobe suites.", status: "Level: Specialist", tags: ["Video", "Graphics"] }
  ];

  return (
    <motion.div variants={portalVariants} initial="initial" animate="animate" exit="exit" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl overflow-y-auto max-h-[60vh] p-2">
      {skillCards.map((skill, i) => (
        <div key={i} className={`p-6 rounded-[2rem] border backdrop-blur-3xl flex flex-col ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-xl'}`}>
          <div className="flex justify-between items-start mb-4">
            <div className={`${skill.color}`}>{skill.icon}</div>
            <span className="text-[7px] font-black opacity-40 uppercase">{skill.status}</span>
          </div>
          <h3 className="text-md font-black uppercase mb-1">{skill.title}</h3>
          <p className="text-[11px] leading-relaxed opacity-60 mb-4 italic">"{skill.details}"</p>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;
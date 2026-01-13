import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, tags, link, theme }) => {
  const isDark = theme === 'ocean';

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`group relative border rounded-3xl overflow-hidden transition-all duration-500 backdrop-blur-md
        ${isDark 
          ? 'bg-white/5 border-white/10 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]' 
          : 'bg-white/60 border-white/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-green-300/50'
        }
      `}
    >
      <div className={`p-8 h-full flex flex-col`}>
        <h3 className={`text-2xl font-bold mb-3 transition-colors ${isDark ? 'text-white group-hover:text-emerald-400' : 'text-slate-800 group-hover:text-green-600'}`}>
          {title}
        </h3>
        <p className={`text-sm mb-6 leading-relaxed ${isDark ? 'text-blue-100/60' : 'text-slate-600'}`}>
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {tags.map(tag => (
            <span key={tag} className={`text-[10px] font-bold px-3 py-1 rounded-full border transition-colors
              ${isDark 
                ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' 
                : 'bg-green-100 text-green-700 border-green-200'
              }
            `}>
              {tag}
            </span>
          ))}
        </div>

        <a href={link} target="_blank" rel="noreferrer" className={`flex items-center gap-2 text-xs font-bold transition-colors ${isDark ? 'text-white hover:text-emerald-400' : 'text-slate-900 hover:text-green-600'}`}>
           LIVE DEMO <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
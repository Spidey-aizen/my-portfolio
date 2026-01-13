import { motion } from 'framer-motion';

const OceanBackground = () => {
  const fishArray = Array.from({ length: 8 });
  const bubbles = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#000814]">
      {/* Deep Sea Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#001d3d] to-[#000814]" />
      
      {/* Dynamic Light Rays */}
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[linear-gradient(110deg,transparent_40%,rgba(255,255,255,0.05)_50%,transparent_60%)]"
      />

      {/* Modern Minimalist Fish */}
      {fishArray.map((_, i) => (
        <motion.div
          key={`fish-${i}`}
          className="absolute"
          style={{ top: `${15 + i * 12}%` }}
          initial={{ x: '110vw', opacity: 0 }}
          animate={{ 
            x: '-20vw', 
            opacity: [0, 1, 1, 0],
            y: [0, 20, -20, 0] // Natural floating path
          }}
          transition={{
            duration: 15 + (i * 2), 
            repeat: Infinity,
            ease: "linear",
            delay: i * 4
          }}
        >
          {/* Subtle Tail Wag Animation */}
          <motion.div
            animate={{ rotateY: [0, 25, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center"
          >
            <svg 
              width={40 + (i * 10)} 
              height="30" 
              viewBox="0 0 100 50" 
              className="fill-emerald-400/30 filter blur-[1px]"
            >
              <path d="M10,25 C10,10 40,5 70,25 C40,45 10,40 10,25 M70,25 L90,10 L90,40 Z" />
              <circle cx="30" cy="20" r="2" fill="white" opacity="0.5" />
            </svg>
          </motion.div>
        </motion.div>
      ))}

      {/* Floating Particles (Bubbles) */}
      {bubbles.map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute bg-emerald-200/20 rounded-full"
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            left: Math.random() * 100 + '%',
            bottom: '-5%',
          }}
          animate={{
            y: '-110vh',
            opacity: [0, 0.6, 0],
            x: [0, Math.sin(i) * 50]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeOut",
            delay: Math.random() * 10
          }}
        />
      ))}
    </div>
  );
};

export default OceanBackground;
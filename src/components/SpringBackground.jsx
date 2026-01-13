import { motion } from 'framer-motion';

const SpringBackground = () => {
  const leaves = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#fffaf0]">
      {/* Warm Golden Hour Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-yellow-50/50 to-emerald-50/30" />
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-[120px]" />

      {/* Wind-blown Leaves */}
      {leaves.map((_, i) => (
        <motion.div
          key={`leaf-${i}`}
          className="absolute"
          initial={{ x: -100, y: Math.random() * 100 + 'vh', opacity: 0 }}
          animate={{ 
            x: '110vw', 
            y: [null, Math.random() * 100 - 50], 
            rotate: [0, 360], 
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 15
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
             <path d="M20.2 17.6l-2.8-7.8c-.8-2.2-3.4-3.4-5.6-2.6-2.2.8-3.4 3.4-2.6 5.6l2.8 7.8c.8 2.2 3.4 3.4 5.6 2.6 2.2-.8 3.4-3.4 2.6-5.6z" 
                   fill={['#fbbf24', '#f59e0b', '#10b981'][i % 3]} opacity="0.4"/>
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default SpringBackground;
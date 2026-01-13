const Navbar = ({ theme, toggleTheme, scrollToSection }) => {
  const isDark = theme === 'ocean';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-500 border-b ${isDark ? 'bg-[#0a192f]/70 border-white/10 text-white' : 'bg-orange-50/70 border-orange-200/50 text-slate-800'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <span className="text-xl font-bold">Prasanna<span className="text-emerald-500">.</span></span>
        
        <div className="flex items-center gap-8">
          <ul className="flex gap-8 text-sm font-medium">
            {['Home', 'Projects', 'Contact'].map((item, idx) => (
              <li key={item}>
                <button 
                  onClick={() => scrollToSection(idx)} 
                  className="hover:text-emerald-500 transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <button onClick={toggleTheme} className="p-2 rounded-full bg-black/5">
             {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};
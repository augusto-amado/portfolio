import React from 'react';

const NavbarSection = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#020202]/98 backdrop-blur-xl border-b border-cyan-500/20">
    <div className="container mx-auto px-4 md:px-8 flex items-center justify-between py-4">
      <a href="#" className="font-mono text-xl font-bold tracking-tighter text-white hover:text-cyan-400 transition-colors flex items-center gap-1">
        <span className="text-cyan-400">&lt;</span>
        <span>AUGUSTO</span>
        <span className="text-cyan-400">/&gt;</span>
      </a>

      <div className="hidden md:flex items-center justify-center flex-1 gap-8 lg:gap-12 text-sm font-medium font-mono tracking-widest">
        {['About', 'Portfolio', 'Experience', 'Education', 'Tools'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            <span className="text-cyan-400">&lt;</span>
            <span>{item}</span>
            <span className="text-cyan-400">/&gt;</span>
          </a>
        ))}
      </div>

      <div className="w-24 md:w-32 shrink-0" aria-hidden />
    </div>
  </nav>
);

export default NavbarSection;

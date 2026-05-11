import React from 'react';

const FooterSection = () => (
  <footer className="border-t border-cyan-500/20 py-12 bg-[#010101] relative overflow-hidden">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-24 bg-cyan-500/5 blur-[50px] pointer-events-none"></div>
    <div className="container mx-auto px-4 text-center space-y-4 relative z-10">
      <div className="flex items-center justify-center gap-2 font-mono text-xl font-bold tracking-tighter opacity-50 hover:opacity-100 transition-opacity cursor-default">
        <span className="text-cyan-600">&lt;</span>
        <span className="text-gray-400">AUGUSTO</span>
        <span className="text-cyan-600">/&gt;</span>
      </div>
      <p className="text-sm text-gray-600 font-mono">
        Developed with <span className="text-cyan-500">React</span> & <span className="text-purple-500">Tailwind</span>
      </p>
    </div>
  </footer>
);

export default FooterSection;

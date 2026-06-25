import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import LanguageFlag from '@/components/LanguageFlag';

const NavbarSection = () => {
  const { copy, language, toggleLanguage } = useLanguage();
  const navigationItems = [
    { id: 'about', label: copy.navigation.about },
    { id: 'portfolio', label: copy.navigation.portfolio },
    { id: 'experience', label: copy.navigation.experience },
    { id: 'education', label: copy.navigation.education },
    { id: 'tools', label: copy.navigation.tools },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#020202]/98 backdrop-blur-xl border-b border-cyan-500/20">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between py-4">
      <a href="#" className="font-mono text-xl font-bold tracking-tighter text-white hover:text-cyan-400 transition-colors flex items-center gap-1">
        <span className="text-cyan-400">&lt;</span>
        <span>AUGUSTO</span>
        <span className="text-cyan-400">/&gt;</span>
      </a>

      <div className="hidden md:flex items-center justify-center flex-1 gap-8 lg:gap-12 text-sm font-medium font-mono tracking-widest">
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            <span className="text-cyan-400">&lt;</span>
            <span>{item.label}</span>
            <span className="text-cyan-400">/&gt;</span>
          </a>
        ))}
      </div>

        <div className="w-24 md:w-32 shrink-0 flex justify-end">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={copy.language.switchLabel}
            title={copy.language.switchTitle}
            className="h-9 min-w-12 px-2 bg-cyan-500/5 hover:bg-cyan-500/15 transition-all shadow-[0_0_10px_rgba(34,211,238,0.1)] hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] flex items-center justify-center"
          >
            <LanguageFlag country={language === 'pt-BR' ? 'us' : 'br'} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;

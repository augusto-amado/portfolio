import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import LanguageFlag from '@/components/LanguageFlag';

const NavbarSection = () => {
  const { copy, language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
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

        <div className="w-32 shrink-0 flex justify-end gap-2">
          <button
            type="button"
            onClick={() => setIsOpen(current => !current)}
            aria-label={
              isOpen
                ? language === 'en-US' ? 'Close navigation' : 'Fechar navegação'
                : language === 'en-US' ? 'Open navigation' : 'Abrir navegação'
            }
            aria-expanded={isOpen}
            className="md:hidden h-9 w-10 border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 hover:bg-cyan-500/15 transition-all flex items-center justify-center"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
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
      {isOpen && (
        <div className="md:hidden border-t border-cyan-500/20 bg-[#020202]/98">
          <div className="container mx-auto px-4 py-3 grid gap-2">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between border border-cyan-500/15 bg-cyan-500/5 px-4 py-3 text-sm font-mono text-gray-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-cyan-500">#</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarSection;

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const AboutSection = () => {
  const { copy } = useLanguage();

  return (
  <section id="about" className="space-y-8">
    <h2 className="text-3xl font-bold flex items-center gap-3 text-white font-mono">
      <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">&lt;</span>
      {copy.about.title}
      <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">/&gt;</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        {copy.about.paragraphs.map((paragraph, index) => (
          <p key={paragraph} className={index === 0 ? 'text-gray-300 text-lg leading-relaxed' : 'text-gray-400 leading-relaxed'}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className="space-y-4">
        <div className="bg-[#0a0a0a] border border-cyan-500/10 p-5 rounded-sm space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-widest text-cyan-400 border-b border-cyan-500/20 pb-2">
            {copy.about.quickFactsTitle}
          </h3>
          <ul className="space-y-3 text-sm text-gray-400 font-mono">
            {copy.about.quickFacts.map(fact => (
              <li key={fact} className="flex items-start gap-2">
                <span className="text-cyan-500 mt-0.5">&#9656;</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
  );
};

export default AboutSection;

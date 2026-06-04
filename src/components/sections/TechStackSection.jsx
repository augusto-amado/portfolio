import React from 'react';
import TechIcon from '@/components/TechIcon';
import { techStackGroups } from '@/data/tech-stack';

const TechStackSection = () => (
  <section id="tools" className="space-y-12 pb-32">
    <div className="space-y-4">
      <h2 className="text-3xl font-bold flex items-center gap-3 text-white font-mono">
        <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">&gt;</span>
        Tech_Stack
      </h2>
    </div>

    <div className="space-y-10">
      {techStackGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-widest text-cyan-500/80 border-b border-cyan-500/20 pb-2">
            {group.label}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {group.techs.map((tech, index) => (
              <div key={index} className="bg-[#0a0a0a] border border-cyan-500/10 p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-cyan-500/50 transition-all group hover:bg-cyan-500/5 min-h-[150px]" data-testid={`tech-${tech.name}`}>
                <div className={`p-2.5 rounded-full bg-[#111] border border-cyan-500/20 ${tech.color} shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-all group-hover:scale-110 h-16 w-16 flex items-center justify-center overflow-visible`}>
                  <TechIcon icon={tech.icon} color={tech.barColor} alt={tech.name} className="h-11 w-11 max-w-[2.75rem] max-h-[2.75rem] object-contain object-center" useDevicon={tech.useDevicon} />
                </div>
                <span className="font-bold text-gray-200 tracking-wide text-sm font-mono">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TechStackSection;

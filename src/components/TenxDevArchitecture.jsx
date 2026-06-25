import React from 'react';

const DiagramBlock = ({ title, subtitle, children }) => (
  <div className="space-y-3">
    <div>
      <p className="text-[10px] text-cyan-500/60 font-mono uppercase tracking-[0.22em]">{title}</p>
      <p className="mt-1 text-xs text-gray-500 font-mono">{subtitle}</p>
    </div>
    <div className="border border-cyan-500/15 bg-[#070707] p-6 overflow-x-auto">
      <pre className="text-xs sm:text-sm text-cyan-300/80 font-mono leading-7 min-w-[760px]">
        {children}
      </pre>
    </div>
  </div>
);

const TenxDevArchitecture = ({ diagrams }) => (
  <div className="space-y-8">
    {diagrams.map(diagram => (
      <DiagramBlock key={diagram.title} title={diagram.title} subtitle={diagram.subtitle}>
        {diagram.content}
      </DiagramBlock>
    ))}
  </div>
);

export default TenxDevArchitecture;

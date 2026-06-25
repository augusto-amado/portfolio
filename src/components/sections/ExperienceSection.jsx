import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { experiences } from '@/data/experiences';
import { useLanguage } from '@/hooks/useLanguage';

const ExperienceSection = () => {
  const { copy, language } = useLanguage();
  const inEnglish = language === 'en-US';

  return (
  <section id="experience" className="space-y-12">
    <div className="space-y-4">
      <h2 className="text-3xl font-bold flex items-center gap-3 text-white font-mono">
        <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">#</span>
        {copy.experience.title}
      </h2>
    </div>

    <div className="relative border-l border-cyan-500/20 ml-4 space-y-16 py-4">
      {experiences.map((exp, index) => (
        <div key={index} className="relative pl-8 md:pl-12 group" data-testid={`experience-${index}`}>
          <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 bg-[#020202] border border-cyan-500 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300 rotate-45"></div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors">{inEnglish ? exp.roleEn : exp.role}</h3>
              <h4 className="text-lg text-cyan-500 font-mono mt-1 flex items-center gap-2">
                {exp.companyUrl ? (
                  <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
                <ExternalLink className="h-3 w-3 opacity-50" />
              </h4>
            </div>
            <div className="text-sm font-mono text-cyan-300/80 bg-cyan-950/10 px-4 py-1.5 border border-cyan-500/20 whitespace-nowrap shadow-[0_0_10px_rgba(34,211,238,0.05)]">
              {inEnglish ? exp.periodEn : exp.period}
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-4 flex items-center gap-2 font-mono">
            <MapPin className="h-3 w-3 text-cyan-500" /> {inEnglish ? exp.locationEn : exp.location}
          </p>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500/20 group-hover:bg-cyan-500/50 transition-colors"></div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base pl-6 py-2 bg-gradient-to-r from-cyan-950/5 to-transparent">
              {inEnglish ? exp.descriptionEn : exp.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default ExperienceSection;

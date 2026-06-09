import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import GithubIcon from '@/components/GithubIcon';
import { projects } from '@/data/projects';

const filters = ['ALL', 'CLIENTE', 'OPEN SOURCE'];

const PortfolioSection = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="space-y-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold flex items-center gap-3 text-white font-mono">
            <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">&lt;</span>
            Portfolio
            <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">/&gt;</span>
          </h2>
          <p className="text-gray-500 font-mono text-sm border-l border-cyan-500/30 pl-4 uppercase tracking-wider">My Work</p>
        </div>

        <div className="flex flex-wrap gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 font-mono text-sm uppercase tracking-wider border transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                  : 'bg-transparent border-cyan-500/20 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Card
            key={index}
            className="group overflow-hidden border border-cyan-500/10 bg-[#080808] hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:-translate-y-1 rounded-sm cursor-pointer"
            data-testid={`project-${index}`}
            onClick={() => project.slug && navigate(`/project/${project.slug}`)}
          >
            <div className="relative aspect-video overflow-hidden border-b border-cyan-500/10">
              <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale-[0.5]"
              />
              {project.status && (() => {
                const isPaused = /pausad|pausa/i.test(project.status);
                return (
                  <div className={`absolute top-3 left-3 z-30 inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-[#020202]/80 backdrop-blur-sm text-[10px] font-mono uppercase tracking-wider ${isPaused ? "border-amber-500/30 text-amber-400" : "border-cyan-500/30 text-cyan-400"}`}>
                    <span className="relative flex h-2 w-2">
                      {!isPaused && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>}
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${isPaused ? "bg-amber-500" : "bg-cyan-500"}`}></span>
                    </span>
                    {project.status}
                  </div>
                );
              })()}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-sm z-20">
                <h4 className="text-cyan-400 font-bold tracking-widest uppercase text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Project</h4>
                <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.codeUrl ? (
                    <Button variant="outline" size="sm" className="gap-2 border-cyan-500 text-cyan-400 hover:bg-cyan-950 rounded-none" asChild>
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}><GithubIcon className="h-4 w-4" /> Code</a>
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="gap-2 border-cyan-500 text-cyan-400 hover:bg-cyan-950 rounded-none" disabled><GithubIcon className="h-4 w-4" /> Code</Button>
                  )}
                  <Button size="sm" className="gap-2 bg-cyan-600 hover:bg-cyan-500 text-black font-bold rounded-none" asChild>
                    <a href={project.demoUrl || "#"} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}><ExternalLink className="h-4 w-4" /> Demo</a>
                  </Button>
                </div>
              </div>
            </div>
            <CardHeader className="space-y-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl text-gray-100 group-hover:text-cyan-400 transition-colors font-mono">
                  {project.title}
                </CardTitle>
                <Code2 className="h-5 w-5 text-gray-600 group-hover:text-cyan-500 transition-colors" />
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-[10px] bg-cyan-950/30 text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/50 rounded-none font-mono uppercase tracking-wider">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;

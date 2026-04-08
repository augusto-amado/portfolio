import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Code2,
  Download,
  BookOpen,
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import TechIcon from "@/components/TechIcon";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
import { techStackGroups } from "@/data/techStack";

const HomePage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#020202] text-gray-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Background Grid & Neon Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px] z-0 animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] z-0 animate-pulse pointer-events-none"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#020202]/98 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between py-4">
          <a href="#" className="font-mono text-xl font-bold tracking-tighter text-white hover:text-cyan-400 transition-colors flex items-center gap-1">
            <span className="text-cyan-400">&lt;</span>
            <span>AUGUSTO</span>
            <span className="text-cyan-400">/&gt;</span>
          </a>

          <div className="hidden md:flex items-center justify-center flex-1 gap-8 lg:gap-12 text-sm font-medium font-mono tracking-widest">
            {['Portfolio', 'Experience', 'Education', 'Tools'].map((item) => (
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

      <main className="relative z-10 container mx-auto px-4 md:px-8 pt-24 pb-12 space-y-32">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-16 md:pt-24 min-h-[70vh]">
          <div className="flex-1 space-y-8 relative">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-mono mb-2 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Available for work
              </div>
              <h2 className="text-cyan-400 font-mono text-lg tracking-wide drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] typing-effect">
                &gt; console.log("Hello World");
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                Augusto Amado
                <span className="text-cyan-400 animate-pulse ml-1 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">_</span>
              </h1>
              <h3 className="text-2xl md:text-3xl text-gray-400 font-light flex items-center gap-3">
                <span className="text-cyan-500 font-mono">Full Stack</span> Developer
              </h3>
            </div>

            <div className="flex flex-col gap-4 text-gray-400 max-w-lg font-mono text-sm border-l-2 border-cyan-500/30 pl-6 py-2 bg-gradient-to-r from-cyan-500/5 to-transparent">
              <div className="flex items-center gap-3 group cursor-pointer hover:text-cyan-300 transition-colors">
                <Mail className="h-5 w-5 text-cyan-500 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                <a href="mailto:augustoamado.profissional@gmail.com">
                  augustoamado.profissional@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <MapPin className="h-5 w-5 text-cyan-500 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                <span>Belo Horizonte - Brazil</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6 items-center">
              <a href="mailto:augustoamado.profissional@gmail.com">
                <Button className="h-12 px-8 bg-cyan-600 hover:bg-cyan-500 text-black font-bold border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all uppercase tracking-widest font-mono text-sm" data-testid="contact-me-btn">
                  Contact Me
                </Button>
              </a>
              <Button variant="outline" className="h-12 px-6 gap-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all font-mono" data-testid="resume-btn" asChild>
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4" /> RESUME.pdf
                </a>
              </Button>
              <div className="flex gap-4">
                <a href="https://github.com/augusto-amado" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="h-12 w-12 rounded-none border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.1)] transition-all">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/augusto-amado-89507823a/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="h-12 w-12 rounded-none border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.1)] transition-all">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="relative group flex items-center justify-center">
            <div className="absolute -inset-8 rounded-full border border-cyan-500/20 border-dashed animate-spin-slow"></div>
            <div className="absolute -inset-4 rounded-full border border-purple-500/20 border-dotted animate-spin-slow-reverse"></div>
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 opacity-30 blur-xl group-hover:opacity-60 transition-opacity duration-500"></div>

            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full p-1 bg-gradient-to-tr from-cyan-500 to-purple-600 shadow-[0_0_50px_rgba(34,211,238,0.3)] overflow-hidden z-10 flex items-center justify-center bg-[#020202]">
               <div className="h-full w-full rounded-full overflow-hidden bg-[#020202] relative flex items-center justify-center">
                  <img
                    src="/avatar.png"
                    alt="Augusto Amado"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"; }}
                  />
               </div>
            </div>
          </div>
        </section>

        <Separator className="bg-cyan-500/20" />

        {/* Portfolio Section */}
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
              {['ALL', '10XDEV', 'ALAVANCA DASH'].map((filter) => (
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
              <Card key={index} className="group overflow-hidden border border-cyan-500/10 bg-[#080808] hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:-translate-y-1 rounded-sm cursor-pointer" data-testid={`project-${index}`} onClick={() => project.slug && navigate(`/project/${project.slug}`)}>
                <div className="relative aspect-video overflow-hidden border-b border-cyan-500/10">
                  <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale-[0.5]"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-sm z-20">
                     <h4 className="text-cyan-400 font-bold tracking-widest uppercase text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Project</h4>
                    <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {project.codeUrl ? (
                          <Button variant="outline" size="sm" className="gap-2 border-cyan-500 text-cyan-400 hover:bg-cyan-950 rounded-none" asChild>
                            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}><Github className="h-4 w-4" /> Code</a>
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm" className="gap-2 border-cyan-500 text-cyan-400 hover:bg-cyan-950 rounded-none" disabled><Github className="h-4 w-4" /> Code</Button>
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

        {/* Experience Section */}
        <section id="experience" className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold flex items-center gap-3 text-white font-mono">
              <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">#</span>
              Work_Experience
            </h2>
          </div>

          <div className="relative border-l border-cyan-500/20 ml-4 space-y-16 py-4">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-12 group" data-testid={`experience-${index}`}>
                <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 bg-[#020202] border border-cyan-500 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300 rotate-45"></div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
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
                    {exp.period}
                  </div>
                </div>

                <p className="text-sm text-gray-400 mb-4 flex items-center gap-2 font-mono">
                  <MapPin className="h-3 w-3 text-cyan-500" /> {exp.location}
                </p>

                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500/20 group-hover:bg-cyan-500/50 transition-colors"></div>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base pl-6 py-2 bg-gradient-to-r from-cyan-950/5 to-transparent">
                      {exp.description}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="space-y-12">
           <div className="space-y-4">
            <h2 className="text-3xl font-bold flex items-center gap-3 text-white font-mono">
              <BookOpen className="h-8 w-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              Education
            </h2>
          </div>

          <Card className="bg-[#080808] border border-cyan-500/20 hover:border-cyan-500/50 transition-all group max-w-3xl rounded-sm hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]" data-testid="education-card">
            <CardHeader className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 pb-6 border-b border-cyan-500/10">
              <div className="space-y-1">
                <CardTitle className="text-2xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors">
                  Análise e Desenvolvimento de Sistemas
                </CardTitle>
                <div className="text-xl text-gray-400 font-mono">Anhanguera</div>
              </div>
              <Badge variant="outline" className="w-fit text-cyan-400 border-cyan-500/50 bg-cyan-950/20 px-4 py-1 rounded-none font-mono">
                STATUS: IN_PROGRESS
              </Badge>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 text-sm text-gray-400 font-mono">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
                2023 - 2026 (Previsão de conclusão)
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tech Stack Section */}
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
                    <div key={index} className="bg-[#0a0a0a] border border-cyan-500/10 p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-cyan-500/50 transition-all group hover:bg-cyan-500/5 min-h-[200px]" data-testid={`tech-${tech.name}`}>
                      <div className={`p-2.5 rounded-full bg-[#111] border border-cyan-500/20 ${tech.color} shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-all group-hover:scale-110 h-16 w-16 flex items-center justify-center overflow-visible`}>
                        <TechIcon icon={tech.icon} color={tech.barColor} alt={tech.name} className="h-11 w-11 max-w-[2.75rem] max-h-[2.75rem] object-contain object-center" useDevicon={tech.useDevicon} />
                      </div>
                      <span className="font-bold text-gray-200 tracking-wide text-sm font-mono mt-2">{tech.name}</span>
                      <div className="w-full space-y-3 mt-auto">
                        <Progress value={tech.progress} className="h-1 bg-gray-800" indicatorStyle={{ backgroundColor: tech.barColor }} />
                        <div className="text-[10px] uppercase text-center text-gray-600 tracking-widest font-mono">{tech.level}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

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
    </div>
  );
};

export default HomePage;

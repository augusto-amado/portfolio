import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/**
 * Placeholder para screenshots/vídeos que serão adicionados depois.
 * label = texto descritivo do que vai naquele espaço.
 */
export const MediaPlaceholder = ({ label, aspect = "video", span = 1 }) => {
  const aspectClass = aspect === "video" ? "aspect-video" : aspect === "square" ? "aspect-square" : "aspect-[4/3]";
  const spanClass = span === 2 ? "md:col-span-2" : "";

  return (
    <div className={`${aspectClass} ${spanClass} rounded-sm border-2 border-dashed border-cyan-500/20 bg-[#0a0a0a] flex flex-col items-center justify-center gap-3 group hover:border-cyan-500/40 transition-colors`}>
      <div className="h-12 w-12 rounded-full border border-cyan-500/30 flex items-center justify-center">
        <svg className="h-6 w-6 text-cyan-500/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
        </svg>
      </div>
      <span className="text-xs text-cyan-500/40 font-mono uppercase tracking-wider text-center px-4">{label}</span>
    </div>
  );
};

/**
 * Seção de feature com ícone, título, descrição e placeholder de mídia opcional.
 */
export const FeatureSection = ({ icon, title, description, children }) => (
  <div className="space-y-4">
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 shrink-0 rounded-sm border border-cyan-500/30 bg-cyan-500/5 flex items-center justify-center text-cyan-400">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-white font-mono">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
    {children}
  </div>
);

/**
 * Stat card para métricas/números de destaque.
 */
export const StatCard = ({ value, label }) => (
  <div className="bg-[#0a0a0a] border border-cyan-500/10 p-6 rounded-sm text-center space-y-1 hover:border-cyan-500/30 transition-colors">
    <div className="text-3xl font-bold text-cyan-400 font-mono">{value}</div>
    <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">{label}</div>
  </div>
);

/**
 * Layout principal das páginas de projeto.
 */
const ProjectLayout = ({
  title,
  subtitle,
  description,
  role,
  period,
  tags,
  demoUrl,
  codeUrl,
  children,
}) => {
  return (
    <div className="min-h-screen bg-[#020202] text-gray-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px] z-0 animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] z-0 animate-pulse pointer-events-none"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#020202]/98 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between py-4">
          <Link to="/" className="font-mono text-xl font-bold tracking-tighter text-white hover:text-cyan-400 transition-colors flex items-center gap-1">
            <span className="text-cyan-400">&lt;</span>
            <span>AUGUSTO</span>
            <span className="text-cyan-400">/&gt;</span>
          </Link>
          <Link to="/">
            <Button variant="outline" className="gap-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 font-mono text-sm">
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
          </Link>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-4 md:px-8 pt-28 pb-24 space-y-20 max-w-5xl">
        {/* Hero do projeto */}
        <section className="space-y-8">
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 text-cyan-500/60 hover:text-cyan-400 font-mono text-sm transition-colors">
              <ArrowLeft className="h-3 w-3" /> Voltar ao portfólio
            </Link>

            <h1 className="text-4xl md:text-6xl font-bold text-white font-mono tracking-tight">
              {title}
              <span className="text-cyan-400 animate-pulse ml-1 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">_</span>
            </h1>

            <p className="text-xl text-gray-400 font-light max-w-3xl">{subtitle}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-gray-500">
              {role && (
                <span className="text-cyan-400 border border-cyan-500/30 px-3 py-1 bg-cyan-500/5">
                  {role}
                </span>
              )}
              {period && <span>{period}</span>}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-[10px] bg-cyan-950/30 text-cyan-400 border border-cyan-500/20 rounded-none font-mono uppercase tracking-wider">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {demoUrl && (
              <Button className="h-12 px-8 bg-cyan-600 hover:bg-cyan-500 text-black font-bold border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all uppercase tracking-widest font-mono text-sm" asChild>
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                </a>
              </Button>
            )}
            {codeUrl && (
              <Button variant="outline" className="h-12 px-6 gap-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all font-mono" asChild>
                <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" /> Source Code
                </a>
              </Button>
            )}
          </div>

          {/* Descrição completa */}
          <div className="border-l-2 border-cyan-500/30 pl-6 py-2 bg-gradient-to-r from-cyan-500/5 to-transparent">
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </div>
        </section>

        {/* Conteúdo específico de cada projeto */}
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 py-12 bg-[#010101] relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-24 bg-cyan-500/5 blur-[50px] pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center space-y-4 relative z-10">
          <Link to="/" className="inline-flex items-center justify-center gap-2 font-mono text-xl font-bold tracking-tighter opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
            <span className="text-cyan-600">&lt;</span>
            <span className="text-gray-400">AUGUSTO</span>
            <span className="text-cyan-600">/&gt;</span>
          </Link>
          <p className="text-sm text-gray-600 font-mono">
            Developed with <span className="text-cyan-500">React</span> & <span className="text-purple-500">Tailwind</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectLayout;

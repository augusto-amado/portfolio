import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import GithubIcon from "@/components/GithubIcon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LanguageFlag from "@/components/LanguageFlag";
import { useLanguage } from "@/hooks/useLanguage";
import { getAccent } from "@/lib/accents";

const aspectMap = {
  video: "aspect-video",
  wide: "aspect-[16/10]",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  mobile: "aspect-[9/16]",
  tall: "aspect-[3/4]",
  ultrawide: "aspect-[21/9]",
};

/**
 * Placeholder para screenshots/vídeos que serão adicionados depois.
 */
export const MediaPlaceholder = ({ label, aspect = "wide", span = 1, accent = "cyan" }) => {
  const a = getAccent(accent);
  const aspectClass = aspectMap[aspect] || aspectMap.wide;
  const spanClass = span === 2 ? "md:col-span-2" : "";

  return (
    <figure className={`space-y-2 ${spanClass}`}>
      <div className={`${aspectClass} rounded-sm border-2 border-dashed ${a.b20} bg-[#0a0a0a] flex flex-col items-center justify-center gap-3 group ${a.bh40} transition-colors`}>
        <div className={`h-12 w-12 rounded-full border ${a.b30} flex items-center justify-center`}>
          <svg className={`h-6 w-6 ${a.textFaint}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
          </svg>
        </div>
        <span className={`text-[10px] ${a.textFaint} font-mono uppercase tracking-wider text-center px-4`}>
          print pendente
        </span>
      </div>
      {label && (
        <figcaption className={`text-xs ${a.textDim} font-mono uppercase tracking-wider text-center px-2`}>
          {label}
        </figcaption>
      )}
    </figure>
  );
};

/**
 * Seção de feature com ícone, título, descrição e mídia opcional.
 */
export const FeatureSection = ({ icon, title, description, children, accent = "cyan" }) => {
  const a = getAccent(accent);
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-4">
        <div className={`h-10 w-10 shrink-0 rounded-sm border ${a.b30} ${a.bg5} flex items-center justify-center ${a.text}`}>
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
};

/**
 * Stat card para métricas/números de destaque.
 */
export const StatCard = ({ value, label, accent = "cyan" }) => {
  const a = getAccent(accent);
  return (
    <div className={`bg-[#0a0a0a] border ${a.b10} p-6 rounded-sm text-center space-y-1 ${a.bh30} transition-colors`}>
      <div className={`text-3xl font-bold ${a.text} font-mono`}>{value}</div>
      <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">{label}</div>
    </div>
  );
};

/**
 * Layout principal das páginas de projeto.
 */
const ProjectLayout = ({
  title,
  subtitle,
  description,
  role,
  period,
  status,
  tags,
  demoUrl,
  demoLabel,
  codeUrl,
  accent = "cyan",
  children,
}) => {
  const { copy, language, toggleLanguage } = useLanguage();
  const a = getAccent(accent);

  return (
    <div className="min-h-screen bg-[#020202] text-gray-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className={`fixed top-[-10%] left-[-10%] w-[40%] h-[40%] ${a.blob} rounded-full blur-[120px] z-0 animate-pulse pointer-events-none`}></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] z-0 animate-pulse pointer-events-none"></div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 w-full bg-[#020202]/98 backdrop-blur-xl border-b ${a.b20}`}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between py-4">
          <Link to="/" className={`font-mono text-xl font-bold tracking-tighter text-white ${a.hoverText} transition-colors flex items-center gap-1`}>
            <span className={a.text}>&lt;</span>
            <span>AUGUSTO</span>
            <span className={a.text}>/&gt;</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="outline" className={`gap-2 ${a.b30} ${a.text} ${a.bgh10} ${a.hoverTextBright} font-mono text-sm`}>
                <ArrowLeft className="h-4 w-4" /> {copy.project.back}
              </Button>
            </Link>
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={copy.language.switchLabel}
              title={copy.language.switchTitle}
              className={`h-9 min-w-12 px-2 ${a.bg5} ${a.bgh15} transition-all ${a.glowLang} flex items-center justify-center`}
            >
              <LanguageFlag country={language === 'pt-BR' ? 'us' : 'br'} />
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-4 md:px-8 pt-28 pb-24 space-y-20 max-w-5xl">
        {/* Hero do projeto */}
        <section className="space-y-8">
          <div className="space-y-4">
            <Link to="/" className={`inline-flex items-center gap-2 ${a.textDim} ${a.hoverText} font-mono text-sm transition-colors`}>
              <ArrowLeft className="h-3 w-3" /> {copy.project.backToPortfolio}
            </Link>

            <h1 className="text-4xl md:text-6xl font-bold text-white font-mono tracking-tight">
              {title}
              <span className={`${a.text} animate-pulse ml-1 ${a.dropShadow}`}>_</span>
            </h1>

            <p className="text-xl text-gray-400 font-light max-w-3xl">{subtitle}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-gray-500">
              {role && (
                <span className={`${a.text} border ${a.b30} px-3 py-1 ${a.bg5}`}>
                  {role}
                </span>
              )}
              {period && <span>{period}</span>}
              {status && (() => {
                const isPaused = /pausad|pausa|paused/i.test(status);
                return (
                  <span className={`inline-flex items-center gap-2 border px-3 py-1 rounded-full text-xs uppercase tracking-wider ${isPaused ? "text-amber-400 border-amber-500/30 bg-amber-500/5" : `${a.text} ${a.b30} ${a.bg5}`}`}>
                    <span className="relative flex h-2 w-2">
                      {!isPaused && <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${a.ping} opacity-75`}></span>}
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${isPaused ? "bg-amber-500" : a.dot}`}></span>
                    </span>
                    {status}
                  </span>
                );
              })()}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Badge key={tag} variant="secondary" className={`text-[10px] ${a.tagBg} ${a.text} border ${a.b20} rounded-none font-mono uppercase tracking-wider`}>
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {demoUrl && (
              <Button className={`h-12 px-8 ${a.solid} ${a.solidHover} text-black font-bold border-2 ${a.solidBorder} ${a.glowBtn} transition-all uppercase tracking-widest font-mono text-sm`} asChild>
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" /> {demoLabel || copy.project.liveDemo}
                </a>
              </Button>
            )}
            {codeUrl && (
              <Button variant="outline" className={`h-12 px-6 gap-2 ${a.b50} ${a.text} ${a.bgh10} ${a.hoverTextBright} ${a.glowSoft} transition-all font-mono`} asChild>
                <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="h-4 w-4" /> {copy.project.sourceCode}
                </a>
              </Button>
            )}
          </div>

          {/* Descrição completa */}
          <div className={`border-l-2 ${a.b30} pl-6 py-2 bg-gradient-to-r ${a.gradFrom} to-transparent`}>
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </div>
        </section>

        {/* Conteúdo específico de cada projeto */}
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 py-12 bg-[#010101] relative overflow-hidden">
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-24 ${a.bg5} blur-[50px] pointer-events-none`}></div>
        <div className="container mx-auto px-4 text-center space-y-4 relative z-10">
          <Link to="/" className="inline-flex items-center justify-center gap-2 font-mono text-xl font-bold tracking-tighter opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
            <span className={a.footerBracket}>&lt;</span>
            <span className="text-gray-400">AUGUSTO</span>
            <span className={a.footerBracket}>/&gt;</span>
          </Link>
          <p className="text-sm text-gray-600 font-mono">
            {copy.footer.developedWith} <span className={a.footerText}>React</span> & <span className="text-purple-500">Tailwind</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectLayout;

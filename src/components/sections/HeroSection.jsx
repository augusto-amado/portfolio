import React from 'react';
import { Mail, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GithubIcon from '@/components/GithubIcon';
import LinkedinIcon from '@/components/LinkedinIcon';

const HeroSection = () => (
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
        <div className="flex items-center gap-3 group cursor-pointer hover:text-cyan-300 transition-colors">
          <svg className="h-5 w-5 text-cyan-500 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <a href="https://wa.me/5535999484693" target="_blank" rel="noopener noreferrer">
            +55 (35) 99948-4693
          </a>
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
              <GithubIcon className="h-5 w-5" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/augusto-amado-89507823a/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="h-12 w-12 rounded-none border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.1)] transition-all">
              <LinkedinIcon className="h-5 w-5" />
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
          <span className="absolute text-6xl font-bold font-mono text-cyan-400/40 select-none">AA</span>
          <img
            src="/avatar.png"
            alt="Augusto Amado"
            className="relative w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

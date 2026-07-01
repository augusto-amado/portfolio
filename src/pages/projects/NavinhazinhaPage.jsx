import React from 'react'
import {
  Bot,
  Boxes,
  Crosshair,
  Cpu,
  Database,
  Gamepad2,
  Gauge,
  Layers3,
  MonitorCheck,
  Music2,
  Sparkles,
  Workflow,
} from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import ProjectLayout, { FeatureSection, StatCard } from '@/components/ProjectLayout'
import { useLanguage } from '@/hooks/useLanguage'
import { navinhazinhaTranslations } from '@/i18n/projects/navinhazinha'

const ACCENT = 'purple'
const featureIcons = [Gamepad2, Crosshair, Gauge, Sparkles, Layers3, Music2]
const architectureIcons = [Workflow, Layers3, Database]

const NavinhazinhaPage = () => {
  const { language } = useLanguage()
  const content = navinhazinhaTranslations[language]

  return (
    <ProjectLayout
      accent={ACCENT}
      title="Navinhazinha"
      subtitle={content.hero.subtitle}
      description={content.hero.description}
      role={content.hero.role}
      period="2026"
      status={content.hero.status}
      tags={content.hero.tags}
      demoUrl="https://navinhazinha-webgl.vercel.app"
      demoLabel={content.hero.demoLabel}
      codeUrl="https://github.com/augusto-amado/navinhazinha"
    >
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-purple-400">#</span>
          {content.overview.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {content.overview.stats.map(([value, label]) => (
            <StatCard key={label} value={value} label={label} accent={ACCENT} />
          ))}
        </div>
      </section>

      <Separator className="bg-purple-500/20" />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-purple-400">$</span>
          {content.work.title}
        </h2>
        <div className="border-l-2 border-purple-500/30 pl-6 py-2 bg-gradient-to-r from-purple-500/5 to-transparent">
          <p className="text-gray-300 leading-relaxed">{content.work.description}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {content.work.highlights.map(([feature, detail]) => (
            <div key={feature} className="bg-[#0a0a0a] border border-purple-500/10 p-4 rounded-sm hover:border-purple-500/30 transition-colors">
              <div className="text-purple-400 font-mono font-bold text-sm">{feature}</div>
              <div className="text-[11px] text-gray-500 font-mono mt-1 leading-snug">{detail}</div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="bg-purple-500/20" />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-purple-400">&lt;</span>
          {content.preview.title}
          <span className="text-purple-400">/&gt;</span>
        </h2>
        <figure className="space-y-3">
          <div className="border border-purple-500/20 bg-[#070b12] p-3 shadow-[0_0_35px_rgba(192,132,252,0.08)]">
            <img src="/navinhazinha-gameplay.png" alt={content.preview.alt} className="w-full h-auto" />
          </div>
          <figcaption className="text-xs text-purple-500/60 font-mono uppercase tracking-wider text-center">
            {content.preview.caption}
          </figcaption>
        </figure>
      </section>

      <Separator className="bg-purple-500/20" />

      <section className="space-y-12">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-purple-400">&gt;</span>
          {content.features.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.features.items.map(([title, description], index) => {
            const Icon = featureIcons[index]
            return (
              <FeatureSection
                key={title}
                icon={<Icon className="h-5 w-5" />}
                title={title}
                description={description}
                accent={ACCENT}
              />
            )
          })}
        </div>
      </section>

      <Separator className="bg-purple-500/20" />

      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Bot className="h-6 w-6 text-purple-400" />
          <h2 className="text-2xl font-bold text-white font-mono">{content.aiErrors.title}</h2>
        </div>
        <p className="text-gray-400 leading-relaxed max-w-3xl">{content.aiErrors.intro}</p>
        <div className="grid grid-cols-1 gap-4">
          {content.aiErrors.findings.map(([title, symptom, detection, fix], index) => (
            <article key={title} className="grid grid-cols-1 md:grid-cols-[4rem_1fr] gap-4 border border-purple-500/15 bg-[#080808] p-6">
              <div className="text-3xl font-mono font-bold text-purple-500/40">0{index + 1}</div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white font-mono">{title}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm leading-relaxed">
                  {[symptom, detection, fix].map((text, detailIndex) => (
                    <p key={content.aiErrors.labels[detailIndex]} className="text-gray-400">
                      <span className="block text-purple-400 font-mono text-xs uppercase mb-1">
                        {content.aiErrors.labels[detailIndex]}
                      </span>
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Separator className="bg-purple-500/20" />

      <section className="space-y-8">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <Boxes className="h-6 w-6 text-purple-400" />
          {content.architecture.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.architecture.columns.map(([title, items], index) => {
            const Icon = architectureIcons[index]
            return (
              <article key={title} className="bg-[#0a0a0a] border border-purple-500/10 p-6 rounded-sm space-y-4">
                <div className="flex items-center gap-3 text-purple-400">
                  <Icon className="h-5 w-5" />
                  <h3 className="text-sm font-mono uppercase tracking-widest">{title}</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400 font-mono">
                  {items.map(item => <li key={item}>— {item}</li>)}
                </ul>
              </article>
            )
          })}
        </div>
        <div className="border border-purple-500/15 bg-[#070707] p-6 overflow-x-auto">
          <pre className="text-xs sm:text-sm text-purple-300/80 font-mono leading-7 min-w-[640px]">{`INPUT / TIME
     │
     ▼
STATE MACHINE ──► SPAWN TIMERS ──► ENEMIES / METEORS
     │                                  │
     ├──► PLAYER / WEAPONS ─────────────┤
     │                                  ▼
     └──► HUD / HIGH SCORE ◄──── COLLISION + SCORE
                         │
                         ▼
              SPRITES + AUDIO + FX`}</pre>
        </div>
      </section>

      <Separator className="bg-purple-500/20" />

      <section className="space-y-8">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <Cpu className="h-6 w-6 text-purple-400" />
          {content.technical.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.technical.items.map(([title, description], index) => (
            <article key={title} className="border border-purple-500/15 bg-[#080808] p-5 space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xl font-mono font-bold text-purple-500/40">0{index + 1}</span>
                <h3 className="text-white font-mono font-bold text-sm leading-snug">{title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <Separator className="bg-purple-500/20" />

      <section className="space-y-8">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <Workflow className="h-6 w-6 text-purple-400" />
          {content.decisions.title}
        </h2>
        <div className="space-y-6">
          {content.decisions.items.map(([title, description]) => (
            <div key={title} className="border-l-2 border-purple-500/20 pl-6 py-2 hover:border-purple-500/50 transition-colors">
              <h3 className="text-white font-mono font-bold text-sm">{title}</h3>
              <p className="text-gray-400 text-sm mt-1 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-l-2 border-purple-400 bg-purple-500/5 p-6 md:p-8 space-y-3">
        <div className="flex items-center gap-3 text-purple-400">
          <MonitorCheck className="h-5 w-5" />
          <h2 className="font-mono font-bold uppercase tracking-wider">{content.takeaway.title}</h2>
        </div>
        <p className="text-gray-300 leading-relaxed max-w-3xl">{content.takeaway.description}</p>
      </section>
    </ProjectLayout>
  )
}

export default NavinhazinhaPage

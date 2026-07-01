import React from 'react'
import {
  Boxes,
  Check,
  Code2,
  Container,
  Database,
  Monitor,
  Server,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Workflow,
} from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import ProjectLayout, { FeatureSection, StatCard } from '@/components/ProjectLayout'
import Screenshot from '@/components/Screenshot'
import { useLanguage } from '@/hooks/useLanguage'
import { templateNodeTranslations } from '@/i18n/projects/templateNode'

const ACCENT = 'blue'
const categoryCounts = [11, 8, 6, 5, 5, 4]
const featureIcons = [Boxes, Workflow, ShieldCheck, TestTube2, Container]
const architectureIcons = [Monitor, Server, Database]
const tags = [
  'Next.js 16', 'React 19', 'TypeScript', 'Express 5', 'Supabase',
  'PostgreSQL', 'Tailwind CSS 3', 'Radix UI', 'shadcn/ui', 'Jest',
  'Docker', 'Azure', 'GitHub Actions', 'Claude Code', 'Cursor',
]

const TemplateNodePage = () => {
  const { language } = useLanguage()
  const content = templateNodeTranslations[language]

  return (
    <ProjectLayout
      title="Template Node.js"
      subtitle={content.hero.subtitle}
      description={content.hero.description}
      role={content.hero.role}
      period="2026"
      status={content.hero.status}
      tags={tags}
      codeUrl="https://github.com/10xdev-startup/template-nodejs-express-next-supabase"
      accent={ACCENT}
    >
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-blue-400">#</span>
          {content.overview.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {content.overview.stats.map(([value, label]) => (
            <StatCard key={label} value={value} label={label} accent={ACCENT} />
          ))}
        </div>
      </section>

      <Separator className="bg-blue-500/20" />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-blue-400">$</span>
          {content.work.title}
        </h2>
        <div className="border-l-2 border-blue-500/30 pl-6 py-2 bg-gradient-to-r from-blue-500/5 to-transparent">
          <p className="text-gray-300 leading-relaxed">{content.work.description}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {content.work.highlights.map(([feature, detail]) => (
            <div key={feature} className="bg-[#0a0a0a] border border-blue-500/10 p-4 rounded-sm hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 font-mono font-bold text-sm">{feature}</div>
              <div className="text-[11px] text-gray-500 font-mono mt-1 leading-snug">{detail}</div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="bg-blue-500/20" />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-blue-400">&lt;</span>
          {content.showcase.title}
          <span className="text-blue-400">/&gt;</span>
        </h2>
        <Screenshot
          src="/template-components-showcase.png"
          alt={content.showcase.alt}
          label={content.showcase.label}
          span={2}
          accent={ACCENT}
        />
      </section>

      <Separator className="bg-blue-500/20" />

      <section className="space-y-12">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-blue-400">&gt;</span>
          {content.features.title}
        </h2>

        {content.features.items.map(([title, description], index) => {
          const Icon = featureIcons[index]
          return (
            <FeatureSection
              key={title}
              icon={<Icon className="h-5 w-5" />}
              title={title}
              description={description}
              accent={ACCENT}
            >
              {index === 0 && (
                <div className="ml-0 md:ml-14 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {content.features.categories.map((name, categoryIndex) => (
                    <div key={name} className="flex items-center justify-between bg-[#0a0a0a] border border-white/10 p-3">
                      <span className="font-mono text-xs text-gray-400">{name}</span>
                      <span className="font-mono text-sm font-bold text-blue-400">{categoryCounts[categoryIndex]}</span>
                    </div>
                  ))}
                </div>
              )}
            </FeatureSection>
          )
        })}
      </section>

      <Separator className="bg-blue-500/20" />

      <section className="space-y-8">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <Boxes className="h-6 w-6 text-blue-400" />
          {content.architecture.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.architecture.columns.map(([title, items], index) => {
            const Icon = architectureIcons[index]
            return (
              <article key={title} className="bg-[#0a0a0a] border border-blue-500/10 p-6 rounded-sm space-y-4">
                <div className="flex items-center gap-3 text-blue-400">
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

        <div className="border border-blue-500/15 bg-[#070707] p-6 overflow-x-auto">
          <pre className="text-xs sm:text-sm text-blue-300/80 font-mono leading-7 min-w-[700px]">
            {content.architecture.diagram}
          </pre>
        </div>
      </section>

      <Separator className="bg-blue-500/20" />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <Code2 className="h-6 w-6 text-blue-400" />
          {content.openSource.title}
        </h2>
        <div className="grid gap-6 md:grid-cols-[1fr_1.35fr] md:items-center">
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-gray-400">{content.openSource.description}</p>
            <div className="space-y-2 font-mono text-xs text-gray-500">
              {content.openSource.items.map(item => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <Screenshot
            src="/10xdev-templates.png"
            alt={content.openSource.alt}
            label={content.openSource.label}
            accent={ACCENT}
          />
        </div>
      </section>

      <section className="border-l-2 border-blue-400 bg-blue-500/5 p-6 md:p-8 space-y-3">
        <div className="flex items-center gap-3 text-blue-400">
          <Sparkles className="h-5 w-5" />
          <h2 className="font-mono font-bold uppercase tracking-wider">{content.integration.title}</h2>
        </div>
        <p className="text-gray-300 leading-relaxed max-w-3xl">{content.integration.description}</p>
      </section>
    </ProjectLayout>
  )
}

export default TemplateNodePage

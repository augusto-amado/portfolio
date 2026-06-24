import React from 'react'
import { Link } from 'react-router-dom'
import {
  Bell,
  BookOpen,
  Brain,
  CreditCard,
  Code2,
  Database,
  GitCompare,
  History,
  Import,
  KanbanSquare,
  LayoutTemplate,
  MessageSquare,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react'
import GithubIcon from '@/components/GithubIcon'
import { Separator } from '@/components/ui/separator'
import ProjectLayout, { FeatureSection, StatCard } from '@/components/ProjectLayout'
import Screenshot from '@/components/Screenshot'
import TenxDevArchitecture from '@/components/TenxDevArchitecture'
import { useLanguage } from '@/hooks/useLanguage'
import { tenxDevTranslations } from '@/i18n/projects/tenxDev'

const tags = [
  'Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'Express', 'Supabase',
  'PostgreSQL', 'Anthropic Claude', 'OpenAI', 'Google Gemini', 'Stripe',
  'GitHub API', 'OAuth', 'Webhooks', 'Telegram', 'Docker', 'Azure', 'Zod',
  'JWT', 'RBAC', 'DnD-Kit', 'Recharts',
]

const featureIcons = [
  GithubIcon, Sparkles, Import, GitCompare, Brain, MessageSquare, Network,
  GitCompare, History, Bell, Code2, ShieldCheck, CreditCard, Rocket,
  KanbanSquare, BookOpen, LayoutTemplate,
]

const featureScreenshots = [
  ['/10xdev-gitsync-connect.png', '/10xdev-gitsync-select.png'],
  ['/10xdev-briefing-card.png'],
  ['/10xdev-import-progress.png'],
  ['/10xdev-commit-analysis.png'],
  ['/10xdev-analyze-modal.png', '/10xdev-debate-explorer.png'],
  ['/10xdev-card-chat.png'],
  ['/10xdev-card-architecture.png'],
  [],
  ['/10xdev-project-history.png'],
  ['/10xdev-notifications.png'],
  ['/10xdev-cards-filters.png', '/10xdev-card-syntax.png'],
  ['/10xdev-admin-approval.png'],
  ['/10xdev-billing-balance.png', '/10xdev-billing-usage.png'],
  ['/10xdev-onboarding-home.png', '/10xdev-onboarding-mission.png'],
  ['/10xdev-tasks-board.png'],
  ['/10xdev-tutorials.png', '/10xdev-tutorial-card.png'],
  ['/10xdev-templates.png'],
]

const models = [
  ['Claude Sonnet 4.6', 'Anthropic'],
  ['Claude Opus 4.6', 'Anthropic'],
  ['GPT-5.4', 'OpenAI'],
  ['GPT-5.3 Codex', 'OpenAI'],
  ['Gemini 3.1 Pro', 'Google'],
  ['Gemini 2.5 Pro', 'Google'],
]

const TemplateDetails = ({ content }) => (
  <div className="space-y-4">
    <p className="text-gray-400 text-sm leading-relaxed">
      {content.beforeLink}
      <a href="https://github.com/10xdev-startup/template-nodejs-express-next-supabase" target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-mono hover:text-cyan-300 underline underline-offset-2 decoration-cyan-500/40 hover:decoration-cyan-400 transition-colors">
        10xdev-startup/template-nodejs-express-next-supabase
      </a>
      {content.afterLink}<span className="text-cyan-400 font-mono">backend/</span>
      {content.middle}<span className="text-cyan-400 font-mono">frontend/</span>
      {content.afterPaths}<span className="text-cyan-400 font-mono">.claude</span>
      {content.and}<span className="text-cyan-400 font-mono">.cursor</span>{content.ending}
    </p>
    <p className="text-gray-400 text-sm leading-relaxed">{content.evolution}</p>
    <p className="text-cyan-500/70 font-mono text-xs uppercase tracking-widest">{content.slogan}</p>
    <p className="text-gray-400 text-sm leading-relaxed">
      {content.portfolioPrefix}
      <Link to="/project/template-nodejs" className="text-cyan-400 font-mono hover:text-cyan-300 underline underline-offset-2 decoration-cyan-500/40 hover:decoration-cyan-400 transition-colors">
        {content.portfolioLink}
      </Link>.
    </p>
  </div>
)

const TenxDevPage = () => {
  const { language } = useLanguage()
  const content = tenxDevTranslations[language]

  return (
    <ProjectLayout
      title="10xDev"
      subtitle={content.hero.subtitle}
      description={content.hero.description}
      role={content.hero.role}
      period={content.hero.period}
      status={content.hero.status}
      tags={tags}
      demoUrl="https://10xdev.com.br"
      codeUrl="https://github.com/LuizBertucci/10xdev"
    >
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-cyan-400">#</span>{content.overview.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {content.overview.stats.map(([value, label]) => (
            <StatCard key={label} value={value} label={label} />
          ))}
        </div>
      </section>

      <Separator className="bg-cyan-500/20" />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-cyan-400">$</span>{content.contribution.title}
        </h2>
        <div className="border-l-2 border-cyan-500/30 pl-6 py-2 bg-gradient-to-r from-cyan-500/5 to-transparent">
          <p className="text-gray-300 leading-relaxed">{content.contribution.description}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {content.contribution.items.map(([feature, detail]) => (
            <div key={feature} className="bg-[#0a0a0a] border border-cyan-500/10 p-4 rounded-sm hover:border-cyan-500/30 transition-colors">
              <div className="text-cyan-400 font-mono font-bold text-sm">{feature}</div>
              <div className="text-[11px] text-gray-500 font-mono mt-1 leading-snug">{detail}</div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="bg-cyan-500/20" />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-cyan-400">&lt;</span>{content.preview.title}<span className="text-cyan-400">/&gt;</span>
        </h2>
        <Screenshot src="/10xdev-dashboard-home.png" alt={content.preview.alt} label={content.preview.label} span={2} />
      </section>

      <Separator className="bg-cyan-500/20" />

      <section className="space-y-12">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-cyan-400">&gt;</span>{content.featuresTitle}
        </h2>

        {content.features.map((feature, index) => {
          const Icon = featureIcons[index]
          const screenshots = featureScreenshots[index]
          return (
            <FeatureSection
              key={feature.title}
              icon={<Icon className="h-5 w-5" />}
              title={feature.title}
              description={feature.description}
            >
              {index === 16 && <TemplateDetails content={content.templateDetails} />}
              {screenshots.length > 0 && (
                <div className={`ml-0 md:ml-14 ${screenshots.length > 1 ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : ''} ${index === 16 ? 'mt-4' : ''}`}>
                  {screenshots.map((src, screenshotIndex) => (
                    <Screenshot
                      key={src}
                      src={src}
                      alt={feature.screenshots[screenshotIndex][0]}
                      label={feature.screenshots[screenshotIndex][1]}
                    />
                  ))}
                </div>
              )}
              {index === 4 && (
                <div className="ml-0 md:ml-14 mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {models.map(([name, provider]) => (
                    <div key={name} className="bg-[#0a0a0a] border border-cyan-500/10 p-4 rounded-sm text-center">
                      <div className="text-cyan-400 font-mono font-bold text-sm">{name}</div>
                      <div className="text-[10px] text-gray-500 font-mono mt-1">{provider}</div>
                    </div>
                  ))}
                </div>
              )}
            </FeatureSection>
          )
        })}
      </section>

      <Separator className="bg-cyan-500/20" />

      <section className="space-y-8">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <Database className="h-6 w-6 text-cyan-400" />{content.architecture.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.architecture.columns.map(([title, items]) => (
            <div key={title} className="bg-[#0a0a0a] border border-cyan-500/10 p-6 rounded-sm space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-widest text-cyan-400 border-b border-cyan-500/20 pb-2">{title}</h3>
              <ul className="space-y-2 text-sm text-gray-400 font-mono">
                {items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <TenxDevArchitecture diagrams={content.diagrams} />
      </section>

      <Separator className="bg-cyan-500/20" />

      <section className="space-y-8">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <Workflow className="h-6 w-6 text-cyan-400" />{content.challenges.title}
        </h2>
        <div className="space-y-6">
          {content.challenges.items.map(([title, description]) => (
            <div key={title} className="border-l-2 border-cyan-500/20 pl-6 py-2 hover:border-cyan-500/50 transition-colors">
              <h4 className="text-white font-mono font-bold text-sm">{title}</h4>
              <p className="text-gray-400 text-sm mt-1 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </ProjectLayout>
  )
}

export default TenxDevPage

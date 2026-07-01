import React from 'react'
import { Layers, ShieldCheck, FileStack, MessageSquare, LineChart, Database, Workflow } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import ProjectLayout, { FeatureSection, StatCard, MediaPlaceholder } from '@/components/ProjectLayout'
import { useLanguage } from '@/hooks/useLanguage'
import { getAccent } from '@/lib/accents'
import { ragServiceTranslations } from '@/i18n/projects/ragService'

const ACCENT = 'violet'
const a = getAccent(ACCENT)

const tags = [
  'Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'RAG', 'Busca híbrida',
  'Embeddings', 'Ollama', 'Docker', 'pytest',
]

const featureIcons = [Layers, ShieldCheck, FileStack, MessageSquare, LineChart]

const PREVIEW_SHOT = '/shots/rag-service/01-preview.png'
const FEATURE_SHOTS = [
  '/shots/rag-service/02-hybrid.png',
  '/shots/rag-service/03-permission.png',
  '/shots/rag-service/04-ingest.png',
  '/shots/rag-service/05-answer.png',
  '/shots/rag-service/06-eval.png',
]

const RagServicePage = () => {
  const { language } = useLanguage()
  const content = ragServiceTranslations[language]

  return (
    <ProjectLayout
      title="RAG Service"
      subtitle={content.hero.subtitle}
      description={content.hero.description}
      role={content.hero.role}
      period={content.hero.period}
      status={content.hero.status}
      tags={tags}
      accent={ACCENT}
      codeUrl="https://github.com/augusto-amado/rag-service"
    >
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className={a.text}>#</span>{content.overview.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {content.overview.stats.map(([value, label]) => (
            <StatCard key={label} value={value} label={label} accent={ACCENT} />
          ))}
        </div>
      </section>

      <Separator className={a.sep} />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className={a.text}>&lt;</span>{content.preview.title}<span className={a.text}>/&gt;</span>
        </h2>
        <MediaPlaceholder label={content.preview.label} aspect="wide" span={2} accent={ACCENT} src={PREVIEW_SHOT} />
      </section>

      <Separator className={a.sep} />

      <section className="space-y-12">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className={a.text}>&gt;</span>{content.featuresTitle}
        </h2>
        {content.features.map((feature, index) => {
          const Icon = featureIcons[index] || Layers
          return (
            <FeatureSection
              key={feature.title}
              icon={<Icon className="h-5 w-5" />}
              title={feature.title}
              description={feature.description}
              accent={ACCENT}
            >
              <div className="ml-0 md:ml-14">
                <MediaPlaceholder label={feature.screenshot} aspect={feature.aspect || 'wide'} accent={ACCENT} src={FEATURE_SHOTS[index]} />
              </div>
            </FeatureSection>
          )
        })}
      </section>

      <Separator className={a.sep} />

      <section className="space-y-8">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <Database className={`h-6 w-6 ${a.text}`} />{content.architecture.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.architecture.columns.map(([title, items]) => (
            <div key={title} className={`bg-[#0a0a0a] border ${a.b10} p-6 rounded-sm space-y-4`}>
              <h3 className={`text-sm font-mono uppercase tracking-widest ${a.text} border-b ${a.b20} pb-2`}>{title}</h3>
              <ul className="space-y-2 text-sm text-gray-400 font-mono">
                {items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className={`bg-[#0a0a0a] border ${a.b10} rounded-sm overflow-hidden`}>
          <div className={`border-b ${a.b20} px-5 py-3`}>
            <div className={`${a.text} font-mono text-sm font-bold`}>{content.diagram.title}</div>
            <div className="text-gray-500 font-mono text-xs mt-1">{content.diagram.subtitle}</div>
          </div>
          <pre className={`p-5 text-[11px] md:text-xs ${a.diagram} font-mono overflow-x-auto leading-relaxed`}>{content.diagram.content}</pre>
        </div>
      </section>

      <Separator className={a.sep} />

      <section className="space-y-8">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <Workflow className={`h-6 w-6 ${a.text}`} />{content.challenges.title}
        </h2>
        <div className="space-y-6">
          {content.challenges.items.map(([title, description]) => (
            <div key={title} className={`border-l-2 ${a.b20} pl-6 py-2 ${a.bh50} transition-colors`}>
              <h4 className="text-white font-mono font-bold text-sm">{title}</h4>
              <p className="text-gray-400 text-sm mt-1 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </ProjectLayout>
  )
}

export default RagServicePage

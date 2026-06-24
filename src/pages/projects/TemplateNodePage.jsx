import React from 'react';
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
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import ProjectLayout, { FeatureSection, StatCard } from '@/components/ProjectLayout';
import Screenshot from '@/components/Screenshot';

const categories = [
  { name: 'Cards', count: 11 },
  { name: 'Feedback', count: 8 },
  { name: 'Navegação', count: 6 },
  { name: 'Botões', count: 5 },
  { name: 'Conteúdo', count: 5 },
  { name: 'Marketing', count: 4 },
];

const contributionItems = [
  ['Base full-stack', 'monorepo com Next.js e Express separados'],
  ['Vitrine de componentes', '39 blocos organizados em 6 categorias'],
  ['Código copiável', 'cada preview lê o arquivo-fonte do componente'],
  ['API organizada', 'respostas, erros e chamadas seguem o mesmo contrato'],
  ['Autenticação', 'JWT do Supabase validado antes dos controllers'],
  ['Fluxo de trabalho', 'testes, lint, Docker, CI e regras para agentes'],
];

const architectureColumns = [
  {
    icon: <Monitor className="h-5 w-5" />,
    title: 'Frontend',
    items: [
      'Next.js 16 com App Router',
      'React 19 e TypeScript estrito',
      'sidebar responsiva em 3 modos',
      '39 componentes com preview',
    ],
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: 'Backend',
    items: [
      'Express 5 e TypeScript',
      'Route → Middleware → Controller',
      'Model isolando acesso ao banco',
      'respostas e erros padronizados',
    ],
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: 'Dados e entrega',
    items: [
      'Supabase Auth e PostgreSQL',
      'Dockerfiles para os dois apps',
      'deploy na Azure via GitHub Actions',
      'Jest, ESLint e typecheck',
    ],
  },
];

const TemplateNodePage = () => (
  <ProjectLayout
    title="Template Node.js"
    subtitle="Starter full-stack com Next.js, Express, Supabase e uma vitrine de componentes pronta para usar"
    description="Eu montei este template porque o começo dos projetos estava sempre consumindo as mesmas horas: criar a estrutura, ligar autenticação, organizar a API, configurar testes e refazer componentes básicos. O repositório já abre com frontend e backend funcionando, um domínio de usuário como referência e 39 blocos de interface que podem ser vistos, copiados e adaptados. Assim, quem usa começa pela regra de negócio em vez de começar pela configuração."
    role="Autor · arquitetura, base full-stack e biblioteca de componentes"
    period="2026"
    status="Open source · público"
    tags={[
      'Next.js 16', 'React 19', 'TypeScript', 'Express 5', 'Supabase',
      'PostgreSQL', 'Tailwind CSS 3', 'Radix UI', 'shadcn/ui', 'Jest',
      'Docker', 'Azure', 'GitHub Actions', 'Claude Code', 'Cursor',
    ]}
    codeUrl="https://github.com/10xdev-startup/template-nodejs-express-next-supabase"
  >
    <section className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
        <span className="text-cyan-400">#</span>
        Visão geral
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard value="39 blocos" label="componentes copiáveis" />
        <StatCard value="6 categorias" label="com filtro e preview" />
        <StatCard value="11 testes" label="backend e frontend" />
        <StatCard value="1 clique" label="use this template" />
      </div>
    </section>

    <Separator className="bg-cyan-500/20" />

    <section className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
        <span className="text-cyan-400">$</span>
        O que eu fiz
      </h2>
      <div className="border-l-2 border-cyan-500/30 pl-6 py-2 bg-gradient-to-r from-cyan-500/5 to-transparent">
        <p className="text-gray-300 leading-relaxed">
          Fiz a estrutura dos dois projetos, defini o caminho das requisições no backend e montei a
          vitrine de componentes. Também deixei pronto o fluxo de autenticação, o cliente da API, os
          testes e a automação de deploy. Na vitrine, o botão de copiar não usa um exemplo escrito à
          parte: a página lê o mesmo arquivo que está sendo renderizado. Se o componente mudar, o
          código entregue ao usuário muda junto.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {contributionItems.map(([feature, detail]) => (
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
        <span className="text-cyan-400">&lt;</span>
        Vitrine de componentes
        <span className="text-cyan-400">/&gt;</span>
      </h2>
      <Screenshot
        src="/template-components-showcase.png"
        alt="Vitrine do template com filtros, previews e botões para copiar o código"
        label="Vitrine real — filtros por categoria, preview do componente e cópia do código"
        span={2}
      />
    </section>

    <Separator className="bg-cyan-500/20" />

    <section className="space-y-12">
      <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
        <span className="text-cyan-400">&gt;</span>
        Funcionalidades
      </h2>

      <FeatureSection
        icon={<Boxes className="h-5 w-5" />}
        title="39 componentes para copiar e adaptar"
        description="A rota /componentes reúne Cards, Feedback, Navegação, Botões, Conteúdo e Marketing. Cada bloco aparece funcionando na tela, pode ser filtrado por categoria e tem um botão para copiar seu código. O fonte é lido diretamente do arquivo do componente, então preview e snippet não ficam fora de sincronia."
      >
        <div className="ml-0 md:ml-14 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {categories.map((category) => (
            <div key={category.name} className="flex items-center justify-between bg-[#0a0a0a] border border-white/10 p-3">
              <span className="font-mono text-xs text-gray-400">{category.name}</span>
              <span className="font-mono text-sm font-bold text-cyan-400">{category.count}</span>
            </div>
          ))}
        </div>
      </FeatureSection>

      <FeatureSection
        icon={<Workflow className="h-5 w-5" />}
        title="Frontend e backend no mesmo repositório"
        description="O workspace separa frontend/ e backend/, mas mantém os comandos principais na raiz. O frontend usa Next.js com App Router; o backend segue Route → Middleware → Controller → Model. Os dois lados usam TypeScript estrito e aliases @/*, o que deixa a estrutura fácil de percorrer desde o primeiro dia."
      />

      <FeatureSection
        icon={<ShieldCheck className="h-5 w-5" />}
        title="Autenticação do Supabase já ligada"
        description="O backend valida o Bearer token, cria o perfil no primeiro acesso e adiciona o usuário autenticado ao Request do Express. O domínio de usuário mostra o fluxo completo até o banco e serve como referência para os próximos domínios do projeto."
      />

      <FeatureSection
        icon={<TestTube2 className="h-5 w-5" />}
        title="Testes e verificações já configurados"
        description="Jest, React Testing Library, ESLint e typecheck já têm scripts nos dois workspaces. Os 11 testes atuais cobrem autorização por papel, formato das respostas, tratamento de erros e um componente de interface. A base é pequena, mas o caminho para testar a próxima feature já existe."
      />

      <FeatureSection
        icon={<Container className="h-5 w-5" />}
        title="Do código ao deploy"
        description="Frontend e backend têm Dockerfiles próprios. O repositório também traz o workflow do GitHub Actions e um guia de deploy na Azure. As pastas .claude e .cursor guardam as convenções e rotinas do projeto para que pessoas e agentes de código trabalhem com o mesmo contexto."
      />
    </section>

    <Separator className="bg-cyan-500/20" />

    <section className="space-y-8">
      <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
        <Boxes className="h-6 w-6 text-cyan-400" />
        Como o template está montado
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {architectureColumns.map((column) => (
          <article key={column.title} className="bg-[#0a0a0a] border border-cyan-500/10 p-6 rounded-sm space-y-4">
            <div className="flex items-center gap-3 text-cyan-400">
              {column.icon}
              <h3 className="text-sm font-mono uppercase tracking-widest">{column.title}</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-400 font-mono">
              {column.items.map((item) => <li key={item}>— {item}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <div className="border border-cyan-500/15 bg-[#070707] p-6 overflow-x-auto">
        <pre className="text-xs sm:text-sm text-cyan-300/80 font-mono leading-7 min-w-[700px]">{`BROWSER
   │
   ▼
NEXT.JS 16 / APP ROUTER
   │
   ├──► SIDEBAR + PÁGINAS
   │
   ├──► VITRINE ──► PREVIEW ──► COPIAR ARQUIVO-FONTE
   │
   └──► API CLIENT + JWT
                    │
                    ▼
              EXPRESS 5
                    │
           ROUTE → MIDDLEWARE
                    │
          CONTROLLER → MODEL
                    │
                    ▼
          SUPABASE / POSTGRESQL`}</pre>
      </div>
    </section>

    <Separator className="bg-cyan-500/20" />

    <section className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
        <Code2 className="h-6 w-6 text-cyan-400" />
        Open source
      </h2>
      <div className="grid gap-6 md:grid-cols-[1fr_1.35fr] md:items-center">
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-gray-400">
            O repositório está publicado como template na organização da 10xDev. Ao clicar em
            “Use this template”, o dev recebe uma cópia própria com a estrutura, os componentes e
            as automações, sem carregar o histórico do repositório original.
          </p>
          <div className="space-y-2 font-mono text-xs text-gray-500">
            {[
              'vitrine integrada à branch principal',
              'frontend e backend no mesmo workspace',
              'README, testes e automações versionados',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <Screenshot
          src="/10xdev-templates.png"
          alt="Repositório público template-nodejs-express-next-supabase no GitHub"
          label="Repositório público — use this template"
        />
      </div>
    </section>

    <section className="border-l-2 border-cyan-400 bg-cyan-500/5 p-6 md:p-8 space-y-3">
      <div className="flex items-center gap-3 text-cyan-400">
        <Sparkles className="h-5 w-5" />
        <h2 className="font-mono font-bold uppercase tracking-wider">Onde ele entra na 10xDev</h2>
      </div>
      <p className="text-gray-300 leading-relaxed max-w-3xl">
        O template resolve o primeiro passo. Depois disso, os cards da 10xDev entram como referência
        para adicionar novas features sobre uma estrutura que o dev já conhece. Um entrega a base;
        o outro ajuda a continuar o projeto.
      </p>
    </section>
  </ProjectLayout>
);

export default TemplateNodePage;

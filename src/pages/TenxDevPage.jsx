import React, { useEffect } from 'react';
import {
  Github,
  Brain,
  CreditCard,
  Code2,
  Layers,
  ShieldCheck,
  Sparkles,
  LayoutDashboard,
  Import,
  GitBranch,
  Workflow,
  Database,
  BookOpen,
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ProjectLayout, {
  MediaPlaceholder,
  FeatureSection,
  StatCard,
} from '@/components/ProjectLayout';

const TenxDevPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <ProjectLayout
      title="10xDev"
      subtitle="Plataforma que transforma repositórios de código em bibliotecas visuais usando inteligência artificial"
      description="Produto SaaS construído do zero como cofundador técnico. O desenvolvedor conecta seu repositório do GitHub, e a plataforma analisa o código automaticamente com 3 inteligências artificiais diferentes (Claude, GPT e Grok), gerando uma biblioteca visual organizada por funcionalidade. Inclui sistema de assinaturas com cobrança automática, painel de administração com moderação de conteúdo, e gestão de projetos em equipe."
      role="Cofundador e CTO"
      period="Jun/2025 - Presente"
      tags={[
        "Next.js 15", "React 19", "TypeScript", "Node.js", "Express",
        "Supabase", "PostgreSQL", "Anthropic Claude", "OpenAI",
        "Stripe", "GitHub API", "OAuth", "Webhooks", "Docker", "Azure",
        "Zod", "JWT", "DnD-Kit", "Recharts",
      ]}
      demoUrl="https://10xdev.com.br"
      codeUrl="https://github.com/LuizBertucci/10xdev"
    >
      {/* ─── Números de destaque ─── */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">#</span>
          Visao_Geral
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="3" label="IAs integradas" />
          <StatCard value="40+" label="Funcionalidades na API" />
          <StatCard value="6" label="Tipos de conteúdo" />
          <StatCard value="10+" label="Etapas de importação" />
        </div>
      </section>

      <Separator className="bg-cyan-500/20" />

      {/* ─── Screenshot principal ─── */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">&lt;</span>
          Preview
          <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">/&gt;</span>
        </h2>
        <MediaPlaceholder label="Screenshot principal — Dashboard de códigos com cards e filtros" aspect="video" span={2} />
      </section>

      <Separator className="bg-cyan-500/20" />

      {/* ─── Features principais ─── */}
      <section className="space-y-12">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">&gt;</span>
          Funcionalidades
        </h2>

        {/* GitSync */}
        <FeatureSection
          icon={<Github className="h-5 w-5" />}
          title="Conexão Direta com o GitHub"
          description="O desenvolvedor conecta seu repositório com um clique. A partir daí, a plataforma acompanha cada atualização automaticamente: quando código novo é enviado ao GitHub, o sistema detecta, analisa os arquivos e atualiza a biblioteca. Tudo acontece em segundo plano, sem nenhuma ação manual."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <MediaPlaceholder label="Screenshot — Tela de projeto com GitHub conectado" />
            <MediaPlaceholder label="Screenshot — Progresso de sync com GitHub" />
          </div>
        </FeatureSection>

        {/* AI Multi-modelo */}
        <FeatureSection
          icon={<Brain className="h-5 w-5" />}
          title="3 Inteligências Artificiais Trabalhando Juntas"
          description="O sistema usa Claude (Anthropic), GPT (OpenAI) e Grok (XAI) ao mesmo tempo. Cada IA analisa o código separadamente, depois elas 'debatem' entre si e criticam as sugestões umas das outras. O resultado final é só o que as três concordam — garantindo qualidade muito superior a usar apenas uma IA."
        >
          <div className="ml-14">
            <MediaPlaceholder label="Screenshot — Modal de sugestões de melhoria com múltiplos modelos" />
          </div>
          <div className="ml-14 mt-4 grid grid-cols-3 gap-3">
            {[
              { name: "Claude", desc: "Anthropic Sonnet/Opus" },
              { name: "GPT", desc: "OpenAI GPT-4" },
              { name: "Grok", desc: "XAI fallback" },
            ].map((model) => (
              <div key={model.name} className="bg-[#0a0a0a] border border-cyan-500/10 p-4 rounded-sm text-center">
                <div className="text-cyan-400 font-mono font-bold text-sm">{model.name}</div>
                <div className="text-[10px] text-gray-500 font-mono mt-1">{model.desc}</div>
              </div>
            ))}
          </div>
        </FeatureSection>

        {/* AI Card Builder */}
        <FeatureSection
          icon={<Sparkles className="h-5 w-5" />}
          title="Geração Automática de Conteúdo a Partir do Código"
          description="A IA lê cada arquivo do repositório, entende o que ele faz e cria cards organizados com várias abas: o código em si, instruções de uso, tipos de dados e rotas da API. Um supervisor automático de qualidade revisa tudo antes de publicar."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <MediaPlaceholder label="Screenshot — Card gerado pela IA com syntax highlight" />
            <MediaPlaceholder label="Screenshot — Card expandido com abas (Code, Types, API)" />
          </div>
        </FeatureSection>

        {/* Card Flow */}
        <FeatureSection
          icon={<Workflow className="h-5 w-5" />}
          title="Diagramas Automáticos de Como o Código Funciona"
          description="A IA lê o código e gera diagramas visuais mostrando como as partes do sistema se conectam — da tela do usuário até o banco de dados. Funcionalidades relacionadas são agrupadas automaticamente."
        >
          <div className="ml-14">
            <MediaPlaceholder label="Screenshot — Diagrama de fluxo gerado para um card" />
          </div>
        </FeatureSection>

        {/* CardFeatures CRUD */}
        <FeatureSection
          icon={<Code2 className="h-5 w-5" />}
          title="Biblioteca de Código Reutilizável"
          description="Todos os trechos de código ficam organizados em cards visuais com destaque de sintaxe. O usuário pode buscar, filtrar por tecnologia, salvar favoritos, reorganizar com arrastar e soltar, e fazer operações em massa. O editor suporta múltiplas abas por card."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <MediaPlaceholder label="Screenshot — Lista de cards com filtros ativos" />
            <MediaPlaceholder label="Screenshot — Editor de card com múltiplas abas" />
          </div>
        </FeatureSection>

        {/* Approval Workflow */}
        <FeatureSection
          icon={<ShieldCheck className="h-5 w-5" />}
          title="Moderação de Conteúdo e Compartilhamento"
          description="Cards publicados passam por aprovação de um administrador antes de ficarem visíveis para todos. Três níveis de visibilidade: público, somente por link, ou privado. Usuários podem compartilhar cards com pessoas específicas e salvar favoritos."
        >
          <div className="ml-14">
            <MediaPlaceholder label="Screenshot — Painel admin com cards pendentes de aprovação" />
          </div>
        </FeatureSection>

        {/* Import Jobs */}
        <FeatureSection
          icon={<Import className="h-5 w-5" />}
          title="Importação Inteligente de Repositórios"
          description="O processo de importação passa por mais de 10 etapas automáticas: baixa o código, extrai os arquivos, analisa com IA, verifica qualidade e gera os cards. O usuário acompanha o progresso em tempo real com barra de status e pode cancelar a qualquer momento."
        >
          <div className="ml-14">
            <MediaPlaceholder label="Screenshot — Modal de progresso de importação com steps" />
          </div>
        </FeatureSection>

        {/* Stripe */}
        <FeatureSection
          icon={<CreditCard className="h-5 w-5" />}
          title="Sistema de Pagamentos e Assinaturas"
          description="Cobrança automática via Stripe: o usuário assina um plano, gerencia sua assinatura e paga pelo uso de IA. O status do pagamento atualiza em tempo real e o sistema impede cobranças duplicadas automaticamente."
        >
          <div className="ml-14">
            <MediaPlaceholder label="Screenshot — Página de billing com status da assinatura" />
          </div>
        </FeatureSection>

        {/* Projetos Colaborativos */}
        <FeatureSection
          icon={<Layers className="h-5 w-5" />}
          title="Trabalho em Equipe"
          description="Crie projetos e convide membros com diferentes permissões (dono, administrador, membro). Projetos podem ser abertos para qualquer pessoa ou somente por convite. Cada projeto organiza seus cards por categoria."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <MediaPlaceholder label="Screenshot — Página de projeto com membros" />
            <MediaPlaceholder label="Screenshot — Cards organizados por categoria" />
          </div>
        </FeatureSection>

        {/* Conteúdo */}
        <FeatureSection
          icon={<BookOpen className="h-5 w-5" />}
          title="Aulas e Templates Prontos"
          description="Trilhas de aprendizado com vídeos organizados por tecnologia, acompanhamento de progresso por capítulo, e um catálogo de projetos prontos para baixar e usar como ponto de partida."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <MediaPlaceholder label="Screenshot — Trilha de aulas com progresso" />
            <MediaPlaceholder label="Screenshot — Catálogo de templates" />
          </div>
        </FeatureSection>
      </section>

      <Separator className="bg-cyan-500/20" />

      {/* ─── Arquitetura ─── */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <Database className="h-6 w-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          Arquitetura
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="bg-[#0a0a0a] border border-cyan-500/10 p-6 rounded-sm space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-widest text-cyan-400 border-b border-cyan-500/20 pb-2">
              Frontend
            </h3>
            <ul className="space-y-2 text-sm text-gray-400 font-mono">
              <li>Next.js 15 (App Router)</li>
              <li>React 19 + TypeScript</li>
              <li>shadcn/ui (30+ componentes)</li>
              <li>Recharts (dashboards)</li>
              <li>react-markdown + Prism</li>
              <li>react-hook-form + Zod</li>
              <li>DnD-Kit + Embla Carousel</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-[#0a0a0a] border border-cyan-500/10 p-6 rounded-sm space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-widest text-cyan-400 border-b border-cyan-500/20 pb-2">
              Backend
            </h3>
            <ul className="space-y-2 text-sm text-gray-400 font-mono">
              <li>Node.js + Express + TypeScript</li>
              <li>Anthropic Claude SDK</li>
              <li>OpenAI SDK</li>
              <li>Stripe SDK (billing)</li>
              <li>GitHub API (OAuth + Webhooks)</li>
              <li>JWT + Admin middleware</li>
              <li>Concurrency limiter (8 ops)</li>
            </ul>
          </div>

          {/* Infra */}
          <div className="bg-[#0a0a0a] border border-cyan-500/10 p-6 rounded-sm space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-widest text-cyan-400 border-b border-cyan-500/20 pb-2">
              Infraestrutura
            </h3>
            <ul className="space-y-2 text-sm text-gray-400 font-mono">
              <li>PostgreSQL via Supabase</li>
              <li>Supabase Auth (Google OAuth)</li>
              <li>Docker + npm workspaces</li>
              <li>Vercel (frontend)</li>
              <li>Azure (backend)</li>
              <li>HMAC-SHA256 webhook security</li>
            </ul>
          </div>
        </div>

        <MediaPlaceholder label="Diagrama de arquitetura — GitHub → Webhook → AI Pipeline → Supabase → Frontend" span={2} />
      </section>

      <Separator className="bg-cyan-500/20" />

      {/* ─── Desafios técnicos ─── */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <Workflow className="h-6 w-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          Desafios_Técnicos
        </h2>

        <div className="space-y-6">
          {[
            {
              title: "Consenso multi-modelo de IA",
              desc: "Três LLMs (Claude, GPT, Grok) rodam simultaneamente, cada um analisa o código de forma independente. Na fase de debate, cada modelo critica as sugestões dos outros. O resultado é ranqueado por consenso com tracking de tokens por provedor. Timeout de 60s por provedor com fallback automático.",
            },
            {
              title: "GitHub real-time sync com segurança",
              desc: "Verificação HMAC-SHA256 em todos os webhooks do GitHub. Concurrency limiter customizado para 8 operações paralelas na API do GitHub. Mapeamento persistente de arquivo → card para sync incremental. OAuth flow completo com exchange de token e instalação da GitHub App.",
            },
            {
              title: "Lógica de visibilidade e aprovação complexa",
              desc: "O CardFeatureModel tem 15+ filtros condicionais no buildQuery(): visibilidade (public/unlisted), status de aprovação (pending/approved/rejected), ownership (criado/compartilhado/salvo), role do usuário (user/admin), projeto. Admin vê tudo pendente para moderação, usuário vê apenas seus cards + públicos aprovados.",
            },
            {
              title: "Pipeline de importação assíncrono com recovery",
              desc: "Importação de repos pode levar minutos. Pipeline de 10+ steps com progress tracking persistido em banco, logs em array JSONB, relatório detalhado de cada arquivo (incluído vs. ignorado com razão), suporte a cancelamento graceful e retry em caso de falha parcial.",
            },
            {
              title: "Metered billing com Stripe",
              desc: "Cada chamada de IA registra meter events no Stripe com tokens consumidos. Subscriptions atualizam status via webhook em tempo real. Idempotency keys garantem que eventos duplicados não geram cobranças extras.",
            },
          ].map((challenge, i) => (
            <div key={i} className="border-l-2 border-cyan-500/20 pl-6 py-2 hover:border-cyan-500/50 transition-colors">
              <h4 className="text-white font-mono font-bold text-sm">{challenge.title}</h4>
              <p className="text-gray-400 text-sm mt-1 leading-relaxed">{challenge.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </ProjectLayout>
  );
};

export default TenxDevPage;

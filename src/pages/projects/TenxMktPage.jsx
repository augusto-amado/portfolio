import React from 'react';
import {
  Brain,
  CreditCard,
  BarChart3,
  Layers,
  MessageSquare,
  Target,
  Globe,
  Table2,
  FileText,
  Video,
} from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import ProjectLayout, {
  MediaPlaceholder,
  FeatureSection,
  StatCard,
} from '@/components/ProjectLayout';
import Screenshot from '@/components/Screenshot';

const TenxMktPage = () => {
  return (
    <ProjectLayout
      title="10xMídia"
      subtitle="Plataforma que transforma dados brutos de campanhas em análises geradas por inteligência artificial"
      description="SaaS de marketing analytics. O produto conecta planilhas do Google Sheets com dados de anúncios (Meta, Google Ads, TikTok) e usa múltiplos modelos de IA para gerar relatórios automáticos, responder perguntas sobre performance e criar roteiros de vídeo. A IA lê os dados, calcula ROAS, CPC, CTR e comparativos de período, depois sintetiza tudo em um relatório textual com recomendações práticas. Atuei em parceria com a equipe, num escopo focado em quatro sistemas de backend que sustentam o produto, detalhados na seção abaixo."
      role="Desenvolvedor Full Stack"
      period="Abr/2025 - Presente"
      status="Em produção · ativo"
      tags={[
        "Next.js 16", "React 19", "TypeScript", "Node.js", "Express 5",
        "Supabase", "PostgreSQL", "Anthropic Claude", "OpenAI GPT", "Google Gemini",
        "Stripe", "Google Sheets API", "Firecrawl", "Recharts", "shadcn/ui",
        "Tailwind CSS", "Zod", "OAuth",
      ]}
      demoUrl="https://10xmidia.com.br"
      codeUrl={null}
    >
      {/* ─── Números de destaque ─── */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">#</span>
          Visao_Geral
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="3 LLMs" label="Claude · GPT · Gemini" />
          <StatCard value="Multi-sheet" label="Google Sheets + CSV" />
          <StatCard value="Metered" label="billing por crédito de IA" />
          <StatCard value="Real-time" label="KPIs e gráficos" />
        </div>
      </section>

      <Separator className="bg-cyan-500/20" />

      {/* ─── Minha Contribuição ─── */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">$</span>
          Minha_Contribuicao
        </h2>
        <div className="border-l-2 border-cyan-500/30 pl-6 py-2 bg-gradient-to-r from-cyan-500/5 to-transparent">
          <p className="text-gray-300 leading-relaxed">
            Trabalhei em parceria com a equipe num escopo focado: não toquei na maior parte da UI de dashboards e gráficos. Minha frente foi o backend que sustenta o produto, as quatro camadas pelas quais todo dado, todo pagamento e toda chamada de IA precisam passar: identidade, ingestão de dados, billing e o motor de análise. São sistemas menores em superfície de tela, mas que ficam no caminho crítico de tudo que a plataforma faz.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
          {[
            { feature: "Login com Google", detail: "Supabase Auth signInWithOAuth + troca de code por sessão no server route do Next, com normalização de redirect contra open-redirect" },
            { feature: "Conexão Google Sheets (OAuth)", detail: "fluxo OAuth com scope spreadsheets.readonly, state nonce anti-CSRF (crypto 32 bytes), refresh token persistido e endpoints de status/disconnect" },
            { feature: "Billing Stripe metered", detail: "reuso de customer por email+platform, idempotency keys, checkout com Pix/boleto, webhook com verificação de assinatura e ledger via customer.balance" },
            { feature: "Análises de IA", detail: "gateway multi-provedor (Claude, GPT, Gemini), pre-check de saldo antes da chamada, meter events por token e audit log de uso por operação" },
          ].map((item) => (
            <div key={item.feature} className="bg-[#0a0a0a] border border-cyan-500/10 p-4 rounded-sm hover:border-cyan-500/30 transition-colors">
              <div className="text-cyan-400 font-mono font-bold text-sm">{item.feature}</div>
              <div className="text-[11px] text-gray-500 font-mono mt-1 leading-snug">{item.detail}</div>
            </div>
          ))}
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
        <Screenshot
          src="/10xmidia-overview.png"
          alt="Visão geral da 10xMídia com filtros de período e canal, KPIs e gráficos de campanhas"
          label="Dashboard — visão geral de campanhas com KPIs e gráficos de evolução"
          span={2}
        />
      </section>

      <Separator className="bg-cyan-500/20" />

      {/* ─── Features principais ─── */}
      <section className="space-y-12">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">&gt;</span>
          Funcionalidades
        </h2>

        {/* Google Sheets */}
        <FeatureSection
          icon={<Table2 className="h-5 w-5" />}
          title="Conexão com Google Sheets"
          description="O usuário cola a URL da planilha e o sistema importa os dados automaticamente via OAuth. Suporta múltiplas abas (Meta, Google Ads, TikTok) em um único projeto. Um modal de mapeamento deixa o usuário ligar cada coluna da planilha à métrica certa (spend, revenue, leads, CPC, CTR) sem precisar formatar o arquivo."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <MediaPlaceholder label="Screenshot — Modal de mapeamento de colunas" />
            <MediaPlaceholder label="Screenshot — Seleção de abas por canal" />
          </div>
        </FeatureSection>

        {/* Relatório com IA */}
        <FeatureSection
          icon={<FileText className="h-5 w-5" />}
          title="Relatórios Gerados por Inteligência Artificial"
          description="Com um clique, a IA lê todos os dados da planilha, calcula métricas como ROAS, CPC e CTR, compara com o período anterior e gera um relatório completo com análise textual e recomendações. O usuário escolhe o modelo de IA, o período (semana, mês, personalizado) e o canal (todos, Meta, Google Ads) antes de gerar."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <MediaPlaceholder label="Screenshot — Relatório gerado com análise por canal" />
            <Screenshot
              src="/10xmidia-ai-analysis-modal.png"
              alt="Modal da 10xMídia para escolher o modelo e iniciar a análise de campanhas com IA"
              label="Análise com IA — seleção do modelo antes de processar as campanhas"
            />
          </div>
        </FeatureSection>

        {/* KPI Dashboard */}
        <FeatureSection
          icon={<BarChart3 className="h-5 w-5" />}
          title="Dashboard de KPIs com Gráficos em Tempo Real"
          description="Cards de KPI mostram ROAS, CPC, CTR, Spend total e Leads com comparativo de variação em relação ao período anterior. Dois gráficos complementares: evolução semanal do ROAS e Spend vs Leads por semana. Filtros de período e canal atualizam tudo instantaneamente no lado do cliente, sem nova chamada à API."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Screenshot
              src="/10xmidia-report-kpis.png"
              alt="Resumo semanal da 10xMídia com faturamento, investimento, ROAS, CPA, vendas, leads, CTR e CPC"
              label="Resumo do relatório — KPIs e variação contra o período anterior"
            />
            <MediaPlaceholder label="Screenshot — Gráfico Spend vs Leads semanal" />
          </div>
        </FeatureSection>

        {/* QA Thread */}
        <FeatureSection
          icon={<MessageSquare className="h-5 w-5" />}
          title="Perguntas em Linguagem Natural sobre os Dados"
          description="Depois de gerar um relatório, o usuário pode fazer perguntas diretamente: 'qual campanha teve o melhor ROAS?', 'por que o CPC subiu essa semana?'. A IA responde com contexto dos dados reais da planilha. O histórico de perguntas fica salvo por relatório, permitindo retomar conversas anteriores."
        >
          <div className="ml-14">
            <MediaPlaceholder label="Screenshot — Thread de QA com perguntas e respostas sobre o relatório" />
          </div>
        </FeatureSection>

        {/* Campanhas */}
        <FeatureSection
          icon={<Target className="h-5 w-5" />}
          title="Análise de Campanhas, Adsets e Criativos"
          description="Breakdown detalhado por campanha, conjunto de anúncios e criativo. Cada nível mostra métricas individuais com comparativo de variação. O usuário configura quais métricas quer ver por card via modal de colunas personalizável. Metas por campanha com critérios de qualidade ajustáveis (conversão, cadastro ou tráfego)."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <MediaPlaceholder label="Screenshot — Cards de campanhas com métricas detalhadas" />
            <MediaPlaceholder label="Screenshot — Modal de configuração de colunas" />
          </div>
        </FeatureSection>

        {/* Roteiros */}
        <FeatureSection
          icon={<Video className="h-5 w-5" />}
          title="Geração de Roteiros com IA"
          description="A IA gera roteiros de vídeo completos usando o briefing da empresa como contexto. O usuário cria um roteiro com título, a IA preenche a estrutura com base na marca, produto e tom de voz definidos. Cada roteiro suporta múltiplas versões, permitindo iterar sobre o texto sem perder o histórico anterior."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <MediaPlaceholder label="Screenshot — Card de roteiro com versões" />
            <MediaPlaceholder label="Screenshot — Editor de roteiro gerado" />
          </div>
        </FeatureSection>

        {/* Briefing */}
        <FeatureSection
          icon={<Globe className="h-5 w-5" />}
          title="Briefing Automático a Partir do Site"
          description="O sistema rastreia o site da empresa com Firecrawl, lendo até 5 páginas (home, sobre, serviços, produtos), e usa IA para extrair nome, produto, público-alvo, diferenciais e tom de voz. O briefing gerado alimenta automaticamente a geração de roteiros e as análises de campanhas com contexto da marca."
        >
          <div className="ml-14">
            <MediaPlaceholder label="Screenshot — Card de briefing da empresa gerado pelo site" />
          </div>
        </FeatureSection>

        {/* Multi-modelo */}
        <FeatureSection
          icon={<Brain className="h-5 w-5" />}
          title="Seleção de Modelo de IA por Análise"
          description="O usuário escolhe o modelo antes de cada análise: Claude Sonnet 4.6, Claude Opus 4.6, GPT-5.4, GPT-5.4 mini, GPT-5.4 pro ou Gemini 2.5 Pro. Cada modelo tem perfil de custo e qualidade diferentes. A seleção fica salva por projeto para agilizar o workflow habitual."
        >
          <div className="ml-14 grid grid-cols-3 gap-3">
            {[
              { name: "Claude Sonnet 4.6", desc: "Anthropic · análise" },
              { name: "Claude Opus 4.6", desc: "Anthropic · análise" },
              { name: "GPT-5.4", desc: "OpenAI · análise" },
              { name: "GPT-5.4 mini", desc: "OpenAI · análise" },
              { name: "GPT-5.4 pro", desc: "OpenAI · análise" },
              { name: "Gemini 2.5 Pro", desc: "Google · análise" },
            ].map((model) => (
              <div key={model.name} className="bg-[#0a0a0a] border border-cyan-500/10 p-4 rounded-sm text-center">
                <div className="text-cyan-400 font-mono font-bold text-sm">{model.name}</div>
                <div className="text-[10px] text-gray-500 font-mono mt-1">{model.desc}</div>
              </div>
            ))}
          </div>
        </FeatureSection>

        {/* Time */}
        <FeatureSection
          icon={<Layers className="h-5 w-5" />}
          title="Projetos por Cliente com Times"
          description="Cada cliente tem seu próprio projeto com planilhas, relatórios e roteiros separados. O dono do projeto convida membros via link de convite. Projetos podem ser compartilhados internamente. A sidebar lista todos os projetos do usuário com navegação direta entre eles."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <MediaPlaceholder label="Screenshot — Lista de projetos na sidebar" />
            <MediaPlaceholder label="Screenshot — Modal de convite de membro" />
          </div>
        </FeatureSection>

        {/* Billing */}
        <FeatureSection
          icon={<CreditCard className="h-5 w-5" />}
          title="Billing por Créditos de IA"
          description="Cada geração de relatório ou roteiro consome créditos proporcionais ao número de tokens usados pelo modelo. O sistema registra meter events no Stripe com rastreabilidade completa por operação, modelo e projeto. O usuário vê o histórico de uso e pode comprar créditos diretamente pelo painel."
        >
          <div className="ml-14">
            <MediaPlaceholder label="Screenshot — Painel de billing com histórico de uso" />
          </div>
        </FeatureSection>
      </section>

      <Separator className="bg-cyan-500/20" />

      {/* ─── Arquitetura ─── */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <BarChart3 className="h-6 w-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          Arquitetura
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="bg-[#0a0a0a] border border-cyan-500/10 p-6 rounded-sm space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-widest text-cyan-400 border-b border-cyan-500/20 pb-2">
              Frontend
            </h3>
            <ul className="space-y-2 text-sm text-gray-400 font-mono">
              <li>Next.js 16 (App Router)</li>
              <li>React 19 + TypeScript</li>
              <li>shadcn/ui + Radix UI</li>
              <li>Recharts (gráficos)</li>
              <li>react-markdown + remark-gfm</li>
              <li>Filtros de período e canal client-side</li>
              <li>Google OAuth (Google Sheets)</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-[#0a0a0a] border border-cyan-500/10 p-6 rounded-sm space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-widest text-cyan-400 border-b border-cyan-500/20 pb-2">
              Backend
            </h3>
            <ul className="space-y-2 text-sm text-gray-400 font-mono">
              <li>Node.js + Express 5 + TypeScript</li>
              <li>Multi-LLM: Claude + GPT + Gemini</li>
              <li>Firecrawl (web scraping de briefing)</li>
              <li>Stripe SDK (metered credits)</li>
              <li>Google Sheets API (leitura de dados)</li>
              <li>Normalização e mapeamento de métricas</li>
              <li>Audit log de uso de IA por evento</li>
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
              <li>Stripe (credits ledger)</li>
              <li>Idempotency keys (anti-cobrança dupla)</li>
              <li>Cache de balance de créditos</li>
              <li>Billing pre-check antes de cada LLM call</li>
            </ul>
          </div>
        </div>

        <MediaPlaceholder
          label="Diagrama de arquitetura — Google Sheets → Backend → Multi-LLM → Relatório → Frontend"
          span={2}
        />
      </section>

      <Separator className="bg-cyan-500/20" />

      {/* ─── Desafios técnicos ─── */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <Brain className="h-6 w-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          Desafios_Técnicos
        </h2>

        <div className="space-y-6">
          {[
            {
              title: "Normalização de dados de múltiplos canais",
              desc: "Cada canal (Meta, Google Ads, TikTok) exporta planilhas em formatos diferentes: colunas com nomes distintos, datas em formatos variados, métricas com unidades inconsistentes. O sistema usa um modal de mapeamento onde o usuário liga cada coluna da planilha à métrica correta. Internamente, um pipeline de normalização padroniza todos os dados antes de qualquer cálculo ou chamada de IA.",
            },
            {
              title: "Cálculo de KPIs com filtros combinados client-side",
              desc: "Os gráficos e cards de KPI precisam refletir simultaneamente filtros de período (semana atual, mês, personalizado) e canal (todos, Meta, Google Ads). Toda a lógica de agregação roda no cliente usando os dados já carregados, sem re-fetches. Isso exigiu funções utilitárias precisas para calcular totais de período, tendências de variação e séries semanais a partir de arrays de linhas brutas.",
            },
            {
              title: "Geração de relatório com contexto completo da planilha",
              desc: "O prompt enviado para a IA precisa incluir os dados da planilha de forma compacta, as métricas calculadas e o briefing da empresa, sem extrapolar o context window do modelo. O backend serializa os dados em formato resumido, calcula os KPIs no servidor e monta um prompt estruturado que entrega contexto suficiente para análise sem desperdício de tokens.",
            },
            {
              title: "Briefing de empresa via rastreamento de site",
              desc: "O Firecrawl rastreia até 5 páginas do site da empresa, priorizando /sobre, /servicos, /produtos. O markdown extraído é truncado a 12.000 caracteres e enviado para a IA gerar um briefing estruturado (nome, produto, público, diferenciais, tom de voz). O briefing alimenta tanto os roteiros quanto as análises de campanha com contexto da marca.",
            },
            {
              title: "Metered billing com créditos e pre-check",
              desc: "Antes de cada chamada de LLM, o sistema verifica o saldo de créditos do usuário no Stripe via cache (invalidado por webhook). Se o saldo for insuficiente, a operação é bloqueada com alerta no frontend antes de qualquer custo ser gerado. Após a chamada, os tokens consumidos são registrados como meter events no Stripe com idempotency keys.",
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

export default TenxMktPage;

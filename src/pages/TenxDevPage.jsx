import React, { useEffect } from 'react';
import {
  Brain,
  CreditCard,
  Code2,
  Layers,
  ShieldCheck,
  Sparkles,
  Import,
  Workflow,
  Database,
  BookOpen,
} from 'lucide-react';
import GithubIcon from '@/components/GithubIcon';
import { Separator } from "@/components/ui/separator";
import ProjectLayout, {
  MediaPlaceholder,
  FeatureSection,
  StatCard,
} from '@/components/ProjectLayout';
import Screenshot from '@/components/Screenshot';

const TenxDevPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <ProjectLayout
      title="10xdev"
      subtitle="Plataforma que transforma repositórios de código em bibliotecas visuais usando inteligência artificial"
      description="SaaS construído do zero como cofundador e CTO. A premissa é simples: conecte um repositório do GitHub e a plataforma transforma automaticamente o código em uma biblioteca visual organizada, navegável e com busca. Por baixo, um agente de IA navega o repositório de forma autônoma — usa ferramentas reais para listar diretórios, ler arquivos e criar cards sem nenhuma instrução manual. Para sugestões de melhoria, 6 modelos de 3 provedores (Claude, GPT e Gemini) analisam cada card de forma independente e os resultados são cruzados por consenso. O produto é completo: SSE com pub/sub para progresso em tempo real, billing metered via Stripe LLM Gateway, webhooks do GitHub com validação HMAC, painel de admin com moderação, e gestão de equipes com permissões por nível."
      role="Cofundador e CTO"
      period="Jun/2025 - Presente"
      tags={[
        "Next.js 15", "React 19", "TypeScript", "Node.js", "Express",
        "Supabase", "PostgreSQL", "Anthropic Claude", "OpenAI", "Google Gemini",
        "Stripe", "GitHub API", "OAuth", "Webhooks", "Telegram", "Docker", "Azure",
        "Zod", "JWT", "RBAC", "DnD-Kit", "Recharts",
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
          <StatCard value="6 LLMs" label="em debate por consenso" />
          <StatCard value="Real-time" label="sync via GitHub Webhooks" />
          <StatCard value="Metered" label="billing por token de IA" />
          <StatCard value="Agente IA" label="navega repos com tool calls" />
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
            Projeto desenvolvido em parceria com Luiz Bertucci. Atuei em decisões de arquitetura, implementação de features completas e no deploy da infraestrutura. A ideia da 10xdev nasceu de uma necessidade real — usar IA pra facilitar a vida de devs — e usamos a própria plataforma pra melhorá-la: a feature de sugestões de melhoria analisa o código da 10xdev e gera melhorias que a gente implementa, criando um ciclo onde o produto evolui quase por conta própria.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { feature: "Docker + deploy Azure", detail: "Dockerfiles, Container Registry e App Service configurados do zero" },
            { feature: "Debate com juiz de IA", detail: "árbitro entre modelos + histórico de findings com status open/done/dismissed" },
            { feature: "Briefing no import", detail: "IA analisa a codebase e gera contexto antes de criar cards" },
            { feature: "RBAC + painel admin", detail: "roles, permissões e moderação completa de conteúdo" },
            { feature: "Stripe + histórico de uso", detail: "billing metered com filtros por período, modelo e feature" },
            { feature: "Sync GitHub", detail: "import e sincronização incremental por snapshot de arquivo" },
            { feature: "CMS de conteúdos", detail: "vídeos por URL com CRUD admin e organização por tecnologia" },
            { feature: "Webhook Telegram", detail: "bot notifica novos cadastros com nome e email, protegido por secret header" },
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
          src="/10xdev-dashboard-home.png"
          alt="Dashboard da 10xDev com acessos rápidos, cards e filtros"
          label="Dashboard — acessos rápidos, cards e filtros"
          aspect="wide"
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

        {/* GitSync */}
        <FeatureSection
          icon={<GithubIcon className="h-5 w-5" />}
          title="Conexão Direta com o GitHub"
          description="O desenvolvedor conecta seu repositório com um clique. A partir daí, a plataforma acompanha cada atualização: quando código novo é enviado ao GitHub, o webhook detecta os arquivos alterados e só reprocessa o que mudou — não o repo inteiro. Um snapshot persistente mapeia cada arquivo ao card correspondente, garantindo sync incremental eficiente mesmo em repositórios grandes."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Screenshot src="/10xdev-gitsync-connect.png" alt="Modal de criação com botão Conectar GitHub" label="Antes de conectar — botão de autorização do GitHub" />
            <Screenshot src="/10xdev-gitsync-select.png" alt="Modal após conectar com select de repositório" label="Após conectar — seleção do repositório" />
          </div>
        </FeatureSection>

        {/* AI Multi-modelo */}
        <FeatureSection
          icon={<Brain className="h-5 w-5" />}
          title="6 Modelos de IA em Debate com Hierarquia de Juiz"
          description="Ao pedir sugestões de melhoria, o usuário escolhe quais modelos rodar. Cada um analisa o código de forma independente. Depois, um modelo atua como juiz — avalia as respostas dos outros, identifica concordâncias e conflitos, e determina o peso de cada sugestão. O resultado final não é uma votação simples: é um veredito arbitrado, onde sugestões validadas pelo juiz têm mais peso do que as que só apareceram uma vez. Cada finding mostra de quais modelos veio, o nível de consenso (total, parcial ou único) e uma pílula identificando qual modelo atuou como árbitro naquele item. Todo o histórico de análises fica salvo: o dev abre qualquer análise passada em accordion, vê os findings e gerencia cada um individualmente — marcando como feito (tachado visualmente), dispensando ou reabrindo. É um sistema de gestão de débito técnico embutido direto no card."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <MediaPlaceholder label="Screenshot — Modal de seleção de modelos para análise" />
            <MediaPlaceholder label="Screenshot — Explorador de debate com scores de concordância" />
          </div>
          <div className="ml-14 mt-4 grid grid-cols-3 gap-3">
            {[
              { name: "Claude Sonnet 4.6", desc: "Anthropic" },
              { name: "Claude Opus 4.6", desc: "Anthropic" },
              { name: "GPT-5.4", desc: "OpenAI" },
              { name: "GPT-5.3 Codex", desc: "OpenAI" },
              { name: "Gemini 3.1 Pro", desc: "Google" },
              { name: "Gemini 3.1 Flash", desc: "Google" },
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
          title="Agente de IA que Navega o Repositório Sozinho"
          description="A importação não é um script que processa arquivos em batch. É um agente de IA com ferramentas reais: ele chama list_directory para explorar a estrutura, read_file para ler o conteúdo, search_files para encontrar padrões, e create_card quando decide que um trecho merece virar um card. Ao final, gera automaticamente um card de briefing resumindo toda a codebase. Um supervisor de qualidade detecta cards duplicados, conteúdo fraco ou trechos que deveriam ser mesclados antes de publicar."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <MediaPlaceholder label="Screenshot — Card gerado pela IA com syntax highlight" />
            <MediaPlaceholder label="Screenshot — Card de briefing da codebase gerado automaticamente" />
          </div>
        </FeatureSection>

        {/* Card Flow */}
        <FeatureSection
          icon={<Workflow className="h-5 w-5" />}
          title="Diagramas Automáticos de Como o Código Funciona"
          description="A IA lê os arquivos do card e gera um JSON de fluxo estruturado em camadas — frontend, backend, banco de dados — que é renderizado como diagrama visual navegável. Cards relacionados são agrupados automaticamente por categoria semântica: autenticação, pagamentos, banco de dados. O agrupamento usa IA para identificar similaridade de propósito, não só por nome de arquivo."
        >
          <div className="ml-14">
            <Screenshot src="/10xdev-flow-diagram.png" alt="Diagrama de fluxo gerado para um card" label="Diagrama de fluxo gerado automaticamente pela IA" />
          </div>
        </FeatureSection>

        {/* CardFeatures CRUD */}
        <FeatureSection
          icon={<Code2 className="h-5 w-5" />}
          title="Biblioteca de Código Reutilizável"
          description="Todos os trechos de código ficam organizados em cards visuais com destaque de sintaxe. O usuário busca, filtra por tecnologia, salva favoritos e edita conteúdo diretamente inline — sem abrir modal, com salvamento automático por debounce. Cada card tem múltiplas abas e um diff viewer para comparar versões, útil para acompanhar como um trecho evoluiu. As categorias do projeto são reordenáveis por arrastar e soltar, com persistência imediata."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <MediaPlaceholder label="Screenshot — Lista de cards com filtros ativos" />
            <MediaPlaceholder label="Screenshot — Diff viewer comparando versões de um card" />
          </div>
        </FeatureSection>

        {/* Approval Workflow */}
        <FeatureSection
          icon={<ShieldCheck className="h-5 w-5" />}
          title="Workflow de Aprovação e Controle de Visibilidade"
          description="Todo card criado entra em revisão antes de ser publicado. O detalhe está na edição: ao editar um card já aprovado, o sistema automaticamente volta o status para pendente e limpa os campos approved_at e approved_by — garantindo que qualquer alteração passe pela mesma revisão que a criação original. O admin tem um painel dedicado com fila de moderação separada do fluxo normal. Três níveis de visibilidade independentes: público, somente por link ou privado. Usuários podem compartilhar cards diretamente com outras pessoas e salvar favoritos com atualização otimista — sem refresh."
        >
          <div className="ml-14">
            <MediaPlaceholder label="Screenshot — Painel admin com cards pendentes de aprovação" />
          </div>
        </FeatureSection>

        {/* Import Jobs */}
        <FeatureSection
          icon={<Import className="h-5 w-5" />}
          title="Progresso em Tempo Real com Cancelamento"
          description="Durante a importação, um orquestrador pub/sub entrega cada evento do agente via SSE para o frontend — o usuário vê cada tool call em tempo real, com árvore de arquivos navegável e log de cards criados. Novos assinantes que chegam no meio do processo recebem replay do buffer completo. O usuário pode cancelar a qualquer momento e o agente para graciosamente na próxima iteração."
        >
          <div className="ml-14">
            <MediaPlaceholder label="Screenshot — Modal de importação com tool calls do agente em tempo real" />
          </div>
        </FeatureSection>

        {/* Stripe */}
        <FeatureSection
          icon={<CreditCard className="h-5 w-5" />}
          title="Billing e Roteamento de IA Unificados via Stripe"
          description="Todas as chamadas de LLM passam pelo Stripe LLM Gateway — um proxy que roteia para Anthropic, OpenAI ou Google e já registra o uso automaticamente. O sistema faz pre-check de créditos antes de cada operação: se o saldo for insuficiente, bloqueia antes de qualquer custo ser gerado. O usuário tem acesso a um painel de histórico de consumo com filtros por período, modelo e feature — útil pra entender exatamente onde os créditos foram usados. Idempotency keys garantem que eventos duplicados não geram cobranças extras."
        >
          <div className="ml-14">
            <MediaPlaceholder label="Screenshot — Página de billing com status da assinatura" />
          </div>
        </FeatureSection>

        {/* Projetos Colaborativos */}
        <FeatureSection
          icon={<Layers className="h-5 w-5" />}
          title="Projetos Colaborativos com Controle de Qualidade"
          description="Projetos têm três roles com escopos distintos: dono, administrador e membro, com visibilidade pública ou por convite. Cada projeto tem uma Visão Geral editável inline — um card rico que o dev mantém atualizado sem abrir modal, com salvamento automático. O recurso mais técnico é o card de referência de qualidade: um benchmark que a IA usa como parâmetro ao gerar melhorias. Cada projeto pode ter o seu próprio — clonado do padrão da plataforma ou criado do zero. Isso faz com que projetos diferentes tenham critérios de qualidade diferentes para a análise de IA."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <MediaPlaceholder label="Screenshot — Visão Geral do projeto editável inline" />
            <MediaPlaceholder label="Screenshot — Card de referência de qualidade do projeto" />
          </div>
        </FeatureSection>

        {/* Conteúdo */}
        <FeatureSection
          icon={<BookOpen className="h-5 w-5" />}
          title="CMS de Aulas e Templates"
          description="Sistema completo de gerenciamento de conteúdo educacional. Admins cadastram vídeos colando qualquer URL do YouTube — o sistema extrai o video ID automaticamente a partir de todos os formatos (youtube.com, youtu.be, /shorts/, /embed/) e gera a thumbnail sem nenhuma configuração manual. Cada aula pode ter um card vinculado: enquanto o dev assiste ao vídeo, o material de apoio fica ao lado — passo a passo, comandos, código de referência — sem precisar pausar e procurar em outro lugar. O conteúdo é produzido pelos próprios criadores da plataforma: aulas sobre ferramentas e recursos que aumentam produtividade real, vindas de quem testou e usa. Um catálogo de templates prontos complementa as aulas — o dev baixa um projeto base já estruturado e começa sem configurar do zero."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <MediaPlaceholder label="Screenshot — Seção de aulas com vídeos do YouTube" />
            <MediaPlaceholder label="Screenshot — Catálogo de templates para download" />
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
              <li>shadcn/ui (50+ componentes)</li>
              <li>SSE streaming (progresso em tempo real)</li>
              <li>Optimistic updates (save/unsave)</li>
              <li>react-markdown + Prism</li>
              <li>DnD-Kit + react-hook-form</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-[#0a0a0a] border border-cyan-500/10 p-6 rounded-sm space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-widest text-cyan-400 border-b border-cyan-500/20 pb-2">
              Backend
            </h3>
            <ul className="space-y-2 text-sm text-gray-400 font-mono">
              <li>Node.js + Express + TypeScript</li>
              <li>Agent loop: Claude + GPT + Gemini (6 modelos)</li>
              <li>Stripe LLM Gateway (proxy unificado de IA)</li>
              <li>SSE + pub/sub com replay de buffer</li>
              <li>GitHub App (OAuth + Webhooks HMAC)</li>
              <li>Telegram Bot (notificações de atividade)</li>
              <li>Rate limiting em 5 camadas</li>
              <li>Concurrency limiter (8 ops paralelas)</li>
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
              <li>Docker + docker-compose (dev e prod)</li>
              <li>Azure Container Registry + App Service</li>
              <li>HMAC-SHA256 webhook security</li>
              <li>Graceful shutdown (SIGTERM/SIGINT)</li>
              <li>Idempotency keys (anti-cobrança dupla)</li>
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
              desc: "Até 6 modelos de 3 provedores (Claude, GPT, Gemini) rodam em paralelo, cada um analisa o card de forma independente. Os resultados são agregados por um pipeline de consenso: sugestões que aparecem em múltiplos modelos ganham score mais alto, as isoladas ficam marcadas como opinião única. Cada provedor tem timeout configurável com fallback automático. O billing é registrado por modelo, por operação.",
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
            {
              title: "Hierarquia de juiz no debate de modelos",
              desc: "O sistema de debate não é uma votação simples. Um modelo atua como árbitro: recebe as respostas de todos os outros, avalia concordâncias e conflitos, e atribui peso a cada sugestão. Isso resolve o problema de sugestões contraditórias entre modelos — em vez de empate, há um veredito. O resultado final preserva o raciocínio de cada modelo para auditoria no explorador de debate.",
            },
            {
              title: "Infraestrutura Docker + Azure do zero",
              desc: "Toda a infraestrutura foi configurada manualmente: Dockerfiles multi-stage para frontend e backend, docker-compose com healthchecks em ambos os containers (wget nos endpoints de health), restart: unless-stopped, volumes externos e rede isolada. Azure Container Registry armazena as imagens; Azure App Service roda em produção. Deploy automatizado via GitHub Actions — push na main sobe para produção sem intervenção manual.",
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

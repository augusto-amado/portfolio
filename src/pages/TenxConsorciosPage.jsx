import React, { useEffect } from 'react';
import {
  Kanban,
  Webhook,
  Shield,
  Image,
  BarChart3,
  Layers,
  MessageSquare,
  Video,
  Workflow,
  Database,
} from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import ProjectLayout, {
  MediaPlaceholder,
  FeatureSection,
  StatCard,
} from '@/components/ProjectLayout';

const TenxConsorciosPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <ProjectLayout
      title="10xconsorcios"
      subtitle="Sistema de gestão comercial completo para empresa de consórcio — do primeiro contato até a venda fechada"
      description="Plataforma web de gestão comercial para empresas de consórcio que centraliza todas as operações de venda. Os contatos entram automaticamente no sistema (vindos de formulários e landing pages), passam por um painel visual de negociação com arrastar e soltar, e são acompanhados pela equipe até o fechamento. Inclui controle de equipe com diferentes níveis de acesso, gestão de cotas e comissões, e geração de imagens com inteligência artificial para marketing."
      role="Desenvolvedor Full Stack"
      period="2024 - Presente"
      tags={[
        "Next.js 15", "React 19", "TypeScript", "Node.js", "Express 5",
        "Supabase", "PostgreSQL", "Zod", "Docker", "Azure",
        "Gemini AI", "Webhooks", "JWT", "RBAC", "GitHub Actions",
      ]}
      demoUrl="https://www.alavancadash.com.br"
      codeUrl="https://github.com/LuizBertucci/alavanca-dash"
    >
      {/* ─── Números de destaque ─── */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">#</span>
          Visao_Geral
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="13" label="Etapas de negociação" />
          <StatCard value="3" label="Níveis de acesso" />
          <StatCard value="4" label="Integrações externas" />
          <StatCard value="25+" label="Funcionalidades na API" />
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
        <MediaPlaceholder label="Screenshot principal — Dashboard com m\u00e9tricas e vis\u00e3o geral" aspect="video" span={2} />
      </section>

      <Separator className="bg-cyan-500/20" />

      {/* ─── Features principais ─── */}
      <section className="space-y-12">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">&gt;</span>
          Funcionalidades
        </h2>

        {/* Pipeline Kanban */}
        <FeatureSection
          icon={<Kanban className="h-5 w-5" />}
          title="Painel Visual de Vendas"
          description="Todas as negociações organizadas em colunas visuais — basta arrastar um contato de uma etapa para outra. São 13 etapas configuráveis, desde o primeiro contato até a venda fechada. Cada contato mostra a origem, tipo de consórcio, valor estimado, avaliação e o consultor responsável."
        >
          <div className="ml-14">
            <MediaPlaceholder label="Screenshot — Kanban board com leads em diferentes colunas" />
          </div>
        </FeatureSection>

        {/* Webhook + BotConversa */}
        <FeatureSection
          icon={<Webhook className="h-5 w-5" />}
          title="Captação Automática de Contatos"
          description="Os contatos chegam ao sistema automaticamente — vindos de formulários (InLead), landing pages ou chatbots do WhatsApp (BotConversa). Nenhuma digitação manual: o sistema interpreta os dados recebidos, organiza as informações e já atribui o contato à equipe correta."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <MediaPlaceholder label="Diagrama do fluxo — InLead → Webhook → Dashboard" />
            <MediaPlaceholder label="Screenshot — Lead recebido automaticamente" />
          </div>
        </FeatureSection>

        {/* Clientes e Cotas */}
        <FeatureSection
          icon={<Layers className="h-5 w-5" />}
          title="Controle de Clientes, Cotas e Comissões"
          description="Quando o contato vira cliente, todo o histórico de negociação é preservado. O sistema gerencia grupos de consórcio com suas cotas individuais, controla o status de pagamento de cada cota (em dia, pendente ou atrasado) e calcula comissões automaticamente por venda realizada."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <MediaPlaceholder label="Screenshot — Lista de clientes com cotas associadas" />
            <MediaPlaceholder label="Screenshot — Detalhe do grupo de consórcio com cotas" />
          </div>
        </FeatureSection>

        {/* Atividades */}
        <FeatureSection
          icon={<MessageSquare className="h-5 w-5" />}
          title="Histórico Completo de Interações"
          description="Cada contato tem uma linha do tempo com todas as interações: ligações, reuniões, e-mails, mensagens no WhatsApp e anotações internas. O consultor agenda lembretes e vê na hora quais contatos precisam de acompanhamento."
        >
          <div className="ml-14">
            <MediaPlaceholder label="Screenshot — Timeline de atividades de um lead" />
          </div>
        </FeatureSection>

        {/* RBAC e Equipes */}
        <FeatureSection
          icon={<Shield className="h-5 w-5" />}
          title="Gestão de Equipe com Permissões"
          description="Três níveis de acesso: Administrador (controle total), Gestor (gerencia equipe e vendas) e Consultor (vê apenas seus contatos). Cada equipe trabalha isolada — um não vê os dados do outro. O admin pode convidar membros, ativar ou desativar acessos e definir quem faz o quê."
        >
          <div className="ml-14">
            <MediaPlaceholder label="Screenshot — Tela de gestão de equipe com membros e roles" />
          </div>
        </FeatureSection>

        {/* IA Gemini */}
        <FeatureSection
          icon={<Image className="h-5 w-5" />}
          title="Geração de Imagens com Inteligência Artificial"
          description="A equipe de marketing pode criar ou editar imagens direto na plataforma, usando inteligência artificial (Google Gemini). Basta descrever o que quer em texto ou enviar uma imagem para ser modificada — o resultado sai na hora, pronto para usar em campanhas."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <MediaPlaceholder label="Screenshot — Interface de edição de imagem com IA" />
            <MediaPlaceholder label="Screenshot — Resultado gerado pela IA" />
          </div>
        </FeatureSection>

        {/* Dashboard */}
        <FeatureSection
          icon={<BarChart3 className="h-5 w-5" />}
          title="Painel de Resultados"
          description="Visão clara do desempenho da equipe: faturamento do mês, comissões por consultor, de onde os contatos estão vindo e quantos estão convertendo em cada etapa. Filtre por período ou equipe para comparar resultados."
        >
          <div className="ml-14">
            <MediaPlaceholder label="Screenshot — Dashboard com gráficos e métricas" />
          </div>
        </FeatureSection>

        {/* Conteúdo */}
        <FeatureSection
          icon={<Video className="h-5 w-5" />}
          title="Treinamento da Equipe"
          description="Área com vídeos de capacitação organizados por tema. A equipe aprende direto na plataforma, sem precisar de ferramentas externas."
        >
          <div className="ml-14">
            <MediaPlaceholder label="Screenshot — Tela de vídeos de treinamento" />
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
              <li>shadcn/ui + Tailwind CSS 4</li>
              <li>DnD-Kit (drag-and-drop)</li>
              <li>Supabase Auth SSR</li>
              <li>Custom hooks por domínio</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-[#0a0a0a] border border-cyan-500/10 p-6 rounded-sm space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-widest text-cyan-400 border-b border-cyan-500/20 pb-2">
              Backend
            </h3>
            <ul className="space-y-2 text-sm text-gray-400 font-mono">
              <li>Node.js + Express 5</li>
              <li>MVC (Routes → Controllers → Services → Models)</li>
              <li>Zod para validação</li>
              <li>Helmet + Rate Limiter</li>
              <li>Google Gemini SDK</li>
              <li>JWT middleware + RBAC</li>
            </ul>
          </div>

          {/* Infra */}
          <div className="bg-[#0a0a0a] border border-cyan-500/10 p-6 rounded-sm space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-widest text-cyan-400 border-b border-cyan-500/20 pb-2">
              Infraestrutura
            </h3>
            <ul className="space-y-2 text-sm text-gray-400 font-mono">
              <li>PostgreSQL via Supabase</li>
              <li>Docker + Docker Compose</li>
              <li>Azure App Service</li>
              <li>Azure Container Registry</li>
              <li>GitHub Actions CI/CD</li>
              <li>SSL/TLS (alavancadash.com.br)</li>
            </ul>
          </div>
        </div>

        <MediaPlaceholder label="Diagrama de arquitetura — Frontend ↔ API ↔ Supabase ↔ Webhooks" span={2} />
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
              title: "Multi-tenancy com scoping automático",
              desc: "Cada query filtra automaticamente por team_id do usuário logado, garantindo isolamento total de dados entre equipes na mesma instância. O middleware enriquece cada request com role e team_id após validar o JWT.",
            },
            {
              title: "Webhook resiliente com parsing adaptativo",
              desc: "O webhook do InLead aceita múltiplas variações de nomes de campo (nome/resposta_nome/name), faz parsing de valores monetários em formato brasileiro (R$ 1.200,00 → 1200.00) e booleanos (sim/não/true/false). Token de autenticação opcional com retry automático.",
            },
            {
              title: "Pipeline Kanban performático",
              desc: "Drag-and-drop com DnD-Kit otimizado para grandes volumes de leads. Estado local sincronizado com a API em tempo real, debounced para evitar sobrecarga.",
            },
            {
              title: "Validação de JWT com retry e backoff",
              desc: "O middleware de autenticação faz 3 tentativas de validação com backoff exponencial (200ms, 400ms, 600ms), diferenciando erros de rede de tokens inválidos. Garante que instabilidades momentâneas do Supabase Auth não derrubem sessões válidas.",
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

export default TenxConsorciosPage;

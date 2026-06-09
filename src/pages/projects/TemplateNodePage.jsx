import React from 'react';
import {
  Boxes,
  Component,
  Palette,
  Rocket,
  Container,
  Cloud,
  Terminal,
  Layers,
  Code2,
} from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import ProjectLayout, {
  MediaPlaceholder,
  FeatureSection,
  StatCard,
} from '@/components/ProjectLayout';

const categorias = [
  { nome: "Cards", exemplos: "BalanceCard, SummaryCard, PricingCard, FeatureCard, StatCard" },
  { nome: "Botões", exemplos: "CtaButton, CopyButton, GoogleAuthButton, WhatsAppButton, ThemeToggle" },
  { nome: "Feedback", exemplos: "Banner, EmptyState, ProgressBar, SkeletonCard, LoadingSpinner, ConfirmDialog" },
  { nome: "Conteúdo", exemplos: "CodeBlock, DiffViewer, FileTree, FaqAccordion, YouTubeEmbed" },
  { nome: "Navegação", exemplos: "PageHeader, Tabs, Stepper, SegmentedControl, SearchInput, FilterChips" },
  { nome: "Marketing", exemplos: "HeroSection, CTASection, PricingTable, TestimonialCard, FeatureGrid" },
];

const TemplateNodePage = () => {
  return (
    <ProjectLayout
      title="Template Node.js"
      subtitle="O ponto zero pra quem vai começar um projeto: starter full-stack com 40 componentes prontos"
      description="Toda vez que um dev começa um projeto novo, perde horas montando a mesma coisa: estrutura de pastas, autenticação, convenções, build, os componentes básicos de UI. Este template existe pra apagar esse atrito e dar um ponto zero de verdade — um clique em 'Use this template' e já se começa com Next.js 16 + Express 5 + Supabase, TypeScript estrito dos dois lados e o ambiente de IA (.claude e .cursor) configurado junto. O coração do projeto é a vitrine de componentes: 40 blocos reutilizáveis em 6 categorias, cada um com preview ao vivo e filtro interativo, prontos pra copiar e adaptar. Em vez de encarar uma tela em branco, o dev (principalmente quem está começando) parte de uma base sólida e foca no que importa: o produto."
      role="Autor · base do template + biblioteca de componentes"
      period="2025"
      status="Open source · público"
      tags={[
        "Next.js 16", "React 19", "TypeScript", "Express 5", "Node.js",
        "Supabase", "PostgreSQL", "Tailwind", "Radix UI", "shadcn/ui",
        "Docker", "Azure", "ESLint", "Turbopack",
      ]}
      codeUrl="https://github.com/10xdev-startup/template-nodejs-express-next-supabase"
    >
      {/* ─── Números de destaque ─── */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">#</span>
          Visao_Geral
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="40 blocos" label="componentes reutilizáveis" />
          <StatCard value="6 categorias" label="organizados e filtráveis" />
          <StatCard value="Next 16 + Express 5" label="full-stack tipado" />
          <StatCard value="1 clique" label="use this template" />
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
            Montei a fundação do template — o setup inicial que define a estrutura full-stack, as convenções e o esqueleto que todo mundo que clona herda — e o ambiente de IA (skills e regras do Claude Code) que vem configurado junto. Mas o que mais me orgulha é a vitrine de componentes, que foi minha do começo ao fim: desenhei e implementei os 40 blocos, defini as 6 categorias, e montei o catálogo com preview ao vivo de cada componente e filtro interativo. É design system na prática — pensar API de componente, consistência visual e a experiência de quem vai consumir a biblioteca, não só de quem escreve a tela. Tudo com um objetivo claro: dar a um dev que está começando um ponto de partida onde ele aprende vendo código bom, em vez de travar numa tela em branco.
          </p>
        </div>
      </section>

      <Separator className="bg-cyan-500/20" />

      {/* ─── Preview / Vitrine ─── */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">&lt;</span>
          Preview
          <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">/&gt;</span>
        </h2>
        <MediaPlaceholder label="Vitrine de componentes — grid de 40 blocos com filtro por categoria e preview ao vivo" aspect="wide" span={2} />
      </section>

      <Separator className="bg-cyan-500/20" />

      {/* ─── Features ─── */}
      <section className="space-y-12">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
          <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">&gt;</span>
          Funcionalidades
        </h2>

        {/* Vitrine */}
        <FeatureSection
          icon={<Boxes className="h-5 w-5" />}
          title="Vitrine de 40 Componentes em 6 Categorias"
          description="O dev abre o catálogo dentro do dashboard e vê cada bloco renderizado de verdade, não num print: o componente real aparece em preview ao vivo, com filtro por categoria pra navegar rápido. São 40 blocos cobrindo Cards, Botões, Feedback, Conteúdo, Navegação e Marketing — de um BalanceCard e PricingTable a DiffViewer, FileTree, Stepper e HeroSection. Cada um é copiável e pensado pra adaptar, então a tela nova começa de um componente aprovado em vez de uma página em branco."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-3">
            {categorias.map((cat) => (
              <div key={cat.nome} className="bg-[#0a0a0a] border border-cyan-500/10 p-4 rounded-sm hover:border-cyan-500/30 transition-colors">
                <div className="text-cyan-400 font-mono font-bold text-sm">{cat.nome}</div>
                <div className="text-[11px] text-gray-500 font-mono mt-1 leading-snug">{cat.exemplos}</div>
              </div>
            ))}
          </div>
        </FeatureSection>

        {/* Starter */}
        <FeatureSection
          icon={<Layers className="h-5 w-5" />}
          title="Starter Full-Stack Tipado de Ponta a Ponta"
          description="A base separa backend/ e frontend/ com TypeScript estrito dos dois lados. O backend segue o padrão Controller → Model → Routes em Express 5, com middlewares e camada de banco já isolados. O frontend é Next.js 16 com App Router, Radix UI, Tailwind e shadcn/ui, e uma sidebar inteligente com 3 modos de layout (expandida, colapsada e hover). Path aliases dos dois lados deixam os imports limpos desde o primeiro commit."
        >
          <div className="ml-14">
            <MediaPlaceholder label="Estrutura do projeto — backend/ (Controller → Model → Routes) e frontend/ (App Router + sidebar)" aspect="wide" />
          </div>
        </FeatureSection>

        {/* DevOps */}
        <FeatureSection
          icon={<Container className="h-5 w-5" />}
          title="Pronto para Deploy e Nativo de IA"
          description="Vem com Dockerfiles para frontend e backend e um guia de deploy na Azure transformado em skill, então sair do clone para produção é caminho conhecido, não tentativa e erro. As configs de .claude e .cursor estão incluídas no repositório: quem clona já recebe o ambiente de IA configurado junto, com as mesmas convenções e skills. ESLint nos dois lados mantém o padrão desde o início."
        >
          <div className="ml-14">
            <MediaPlaceholder label="Configs de IA (.claude / .cursor) e Dockerfiles incluídos no repositório" aspect="wide" />
          </div>
        </FeatureSection>

        {/* Ecossistema 10xDev */}
        <FeatureSection
          icon={<Rocket className="h-5 w-5" />}
          title="Ponto Zero do Ecossistema 10xDev"
          description="O template é o ponto de partida e os cards da 10xDev são o caminho: cada card é uma feature pronta pra implementar, com passo a passo, comandos e código de referência. O dev clona o starter, escolhe no catálogo o que quer adicionar e vai construindo sobre uma base que já segue boas práticas. A arquitetura prevê expansão para outras stacks, cada uma com seu template base."
        >
          <div className="ml-14">
            <MediaPlaceholder label="template-nodejs-express-next-supabase — repositório público na org 10xdev-startup" aspect="wide" />
          </div>
        </FeatureSection>
      </section>
    </ProjectLayout>
  );
};

export default TemplateNodePage;

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  CreditCard,
  Code2,
  ShieldCheck,
  Sparkles,
  Import,
  Workflow,
  Network,
  GitCompare,
  Database,
  BookOpen,
  LayoutTemplate,
  History,
  Bell,
  MessageSquare,
  KanbanSquare,
  Rocket,
} from 'lucide-react';
import GithubIcon from '@/components/GithubIcon';
import { Separator } from "@/components/ui/separator";
import ProjectLayout, {
  FeatureSection,
  StatCard,
} from '@/components/ProjectLayout';
import Screenshot from '@/components/Screenshot';
import TenxDevArchitecture from '@/components/TenxDevArchitecture';

const TenxDevPage = () => {
  return (
    <ProjectLayout
      title="10xDev"
      subtitle="Plataforma que transforma repositórios de código em bibliotecas visuais usando inteligência artificial"
      description="SaaS construído do zero como cofundador e CTO. Você conecta um repositório do GitHub e a plataforma transforma o código em uma biblioteca visual organizada, navegável e com busca. Por baixo, um agente de IA percorre o repositório de forma autônoma: usa ferramentas reais para listar diretórios, ler arquivos e criar cards, sem nenhuma instrução manual. Para sugestões de melhoria, 6 modelos de 3 provedores (Claude, GPT e Gemini) analisam cada card de forma independente e os resultados passam por um consenso. O resto do produto acompanha: SSE com pub/sub para progresso em tempo real, billing metered via Stripe LLM Gateway, webhooks do GitHub com validação HMAC, painel de admin com moderação e gestão de equipes com permissões por nível. Depois ganhou um chat com os modelos dentro de cada card e um quadro de tarefas por projeto."
      role="Cofundador & Dev Full Stack"
      period="Jun/2025 - Presente"
      status="Em produção · ativo"
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
            Projeto tocado em parceria com o Luiz Bertucci. Atuei em decisões de arquitetura, implementação de features e no deploy da infraestrutura. Algumas features eu fiz sozinho: o desenho de arquitetura, em que a IA lê o código de um card e gera um diagrama ASCII do fluxo; a análise de commits, um review de IA que avalia o código novo de uma seleção de commits e fica salvo num histórico por projeto; o histórico unificado do projeto, uma timeline que junta os eventos do GitHub com o que a 10xDev gera; e o centro de notificações dentro da plataforma. Depois entreguei também o chat com as IAs dentro dos cards, com streaming e vários modelos na mesma thread; o quadro de tarefas do projeto; o debate ao vivo e a página de debate compartilhável; e a home como missão de ativação, com bônus de créditos de boas-vindas no primeiro acesso. A 10xDev existe pra usar IA e facilitar a vida de dev, e a gente usa a própria plataforma pra evoluir ela: a feature de sugestões analisa o código da 10xDev e propõe melhorias que a gente mesmo implementa.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { feature: "Chat com as IAs no card", detail: "conversa com vários modelos no mesmo card, com a resposta saindo em streaming e o saldo de créditos baixando em tempo real" },
            { feature: "Quadro de tarefas", detail: "board kanban por projeto, com colunas e cartões que se arrastam, responsáveis por tarefa e filtro por estado" },
            { feature: "Debate ao vivo e compartilhável", detail: "as respostas dos modelos aparecem ao vivo, cada debate fica salvo por job e ganha um link público read-only pra compartilhar" },
            { feature: "Home como missão de ativação", detail: "onboarding guiado no primeiro acesso e bônus de créditos de boas-vindas pra rodar IA já na primeira sessão" },
            { feature: "Sugestões de arquivos órfãos", detail: "no sync, detecta arquivos que entraram no diff e ainda não têm card e sugere criar os que faltam via IA" },
            { feature: "Acesso por notificação", detail: "o pedido pra entrar num projeto chega pro dono como notificação com botão de aprovar ou recusar; aprovar libera o acesso na hora e fecha o pedido, sem abrir a tela de membros" },
            { feature: "Import que parece instantâneo", detail: "a IA já cria o primeiro card na resposta inicial e a aba de melhorias abre sozinha, então aparece resultado antes do import terminar" },
            { feature: "Novo provider de IA no gateway", detail: "liguei a OpenAI Responses API ao agent loop e ao roteamento do gateway, o que abriu mais modelos da OpenAI pra plataforma usar" },
            { feature: "Agrupamento de findings por IA", detail: "um modelo junta os findings que são o mesmo problema escrito de jeitos diferentes, e cai num agrupamento heurístico por proximidade quando a IA não responde" },
            { feature: "Desenho de arquitetura", detail: "a IA desenha o diagrama de arquitetura de cada card sozinha, e decide quando o card realmente merece um" },
            { feature: "Análise de commits", detail: "revisor automático que lê o código novo e aponta problemas antes do merge, organizados por tipo e gravidade, com histórico por projeto" },
            { feature: "Histórico do projeto", detail: "timeline única que junta os commits do GitHub e os imports, análises e melhorias que a 10xDev gerou, com filtro por fonte" },
            { feature: "Notificações na plataforma", detail: "sino in-app com contador de não-lidas, 17 tipos em 4 níveis e barra de progresso pra job em andamento; é best-effort, então a ação principal não quebra se o aviso falhar" },
            { feature: "Código sempre atualizado", detail: "garante que a IA analise sempre o código atual, nunca uma versão antiga que já mudou" },
            { feature: "Debate com juiz de IA", detail: "vários modelos discutem o código e um juiz dá o veredito; o histórico fica salvo pra marcar o que já foi resolvido" },
            { feature: "Docker + deploy Azure", detail: "configurei toda a infra de deploy (Docker + Azure) do zero, com publicação automática em produção" },
            { feature: "Briefing no import", detail: "a IA entende a base de código antes de organizá-la, então os cards já nascem com o contexto certo" },
            { feature: "Painel admin + analytics", detail: "painel pra acompanhar usuários, atividade e a saúde dos pagamentos (Stripe), com busca, filtros e ordenação" },
            { feature: "Cobrança por uso de IA", detail: "billing pelo consumo real, com histórico que mostra quanto cada coisa gastou por período, modelo e feature" },
            { feature: "Sync GitHub", detail: "quando o código muda no GitHub, a plataforma se atualiza sozinha e só no que mudou" },
            { feature: "CMS de conteúdos", detail: "área pra cadastrar e organizar vídeos e materiais por tecnologia, gerida pelo admin" },
            { feature: "Webhook Telegram", detail: "cada novo cadastro dispara um aviso automático no Telegram pra equipe" },
            { feature: "Notificação WhatsApp via Z-API", detail: "template editável dentro da plataforma, com pre-check tratando a ambiguidade do 9º dígito e disparo em segundo plano pra não travar o cadastro" },
            { feature: "Edição segura em múltiplos usuários", detail: "se duas pessoas editam o mesmo card ao mesmo tempo, a segunda é avisada em vez de sobrescrever silenciosamente o trabalho da primeira" },
            { feature: "Suíte de testes Jest", detail: "montei a base de testes automatizados (Jest/RTL) que protege as features de IA contra regressão" },
            { feature: "Sistema de temas dark/light", detail: "tema claro/escuro consistente em todo o app (~50 telas), com atalho de teclado e sem 'piscada' ao carregar" },
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
          alt="Home da 10xDev com saldo de créditos, GitHub conectado e seus projetos"
          label="Home — créditos, GitHub conectado e seus projetos"
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
          description="O desenvolvedor conecta o repositório com um clique. A partir daí, a plataforma acompanha cada atualização: quando chega código novo no GitHub, o webhook detecta os arquivos alterados e reprocessa só eles, não o repositório inteiro. Um snapshot persistente mapeia cada arquivo ao card correspondente, o que mantém o sync incremental eficiente mesmo em repositórios grandes. Um concurrency limiter segura até 8 operações paralelas na API do GitHub para evitar throttling quando muitos arquivos mudam de uma vez. E quando o sync traz código novo, a plataforma olha o diff da branch atrás de arquivos que ainda não viraram card e sugere, via IA, criar os que faltam, pra biblioteca não ficar pra trás do repositório."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Screenshot src="/10xdev-gitsync-connect.png" alt="Modal de criação com botão Conectar GitHub" label="Antes de conectar — botão de autorização do GitHub" />
            <Screenshot src="/10xdev-gitsync-select.png" alt="Modal após conectar com select de repositório" label="Após conectar — seleção do repositório" />
          </div>
        </FeatureSection>

        {/* Importação autônoma */}
        <FeatureSection
          icon={<Sparkles className="h-5 w-5" />}
          title="Agente de IA que Navega o Repositório Sozinho"
          description="A importação não roda um script que processa arquivos em lote. Em vez disso, um agente de IA usa ferramentas reais: chama list_directory para explorar a estrutura, read_file para ler o conteúdo, search_files para encontrar padrões e create_card quando decide que um trecho merece virar card. No fim, gera automaticamente um card de briefing resumindo toda a codebase. Um supervisor de qualidade ainda detecta cards duplicados, conteúdo fraco ou trechos que deveriam ser mesclados antes de publicar."
        >
          <div className="ml-14">
            <Screenshot src="/10xdev-briefing-card.png" alt="Card de briefing da codebase gerado automaticamente" label="Card de briefing da codebase gerado automaticamente" />
          </div>
        </FeatureSection>

        {/* Progresso do import */}
        <FeatureSection
          icon={<Import className="h-5 w-5" />}
          title="Progresso e Atividade de Agentes em Tempo Real"
          description="Durante a importação, cada evento do agente chega ao frontend via SSE assim que acontece: o usuário vê cada tool call em tempo real, com árvore de arquivos navegável e log dos cards criados. Quem chega no meio do processo recebe um replay do buffer completo. Dá para cancelar a qualquer momento, e o agente para com calma na iteração seguinte. Esse mesmo streaming também roda na tela de Melhorias: ao gerar as sugestões, os findings vão aparecendo um a um conforme cada modelo responde, sem ninguém olhando pra uma tela parada. E um banner no topo do projeto mostra quais agentes estão trabalhando no momento (import, debate ou análise), tudo sobre a mesma infraestrutura de eventos via SSE."
        >
          <div className="ml-14">
            <Screenshot
              src="/10xdev-import-progress.png"
              alt="Modal de importação mostrando progresso, cards criados e arquivos avaliados pelo agente"
              label="Importação ao vivo — progresso, cards criados e arquivos avaliados"
            />
          </div>
        </FeatureSection>

        {/* Overview do projeto */}
        <FeatureSection
          icon={<GitCompare className="h-5 w-5" />}
          title="Overview do Projeto: o que mudou e onde"
          description="Depois do import, a 10xDev cruza o histórico do GitHub com os cards que representam o projeto. Dá para escolher um período e ver quantos commits entraram, quem alterou mais linhas, quais funcionalidades foram afetadas e quais análises ou melhorias aconteceram na plataforma. Na aba de funcionalidades, cada card reúne os commits e arquivos que o modificaram, mostra o que já passou por revisão e permite analisar um card ou todos os cards alterados com os modelos escolhidos. Se a branch ganhou arquivos que ainda não têm card, o próprio Overview aponta o que está faltando e oferece gerar esses cards com IA."
        >
          <div className="ml-14">
            <Screenshot
              src="/10xdev-commit-analysis.png"
              alt="Overview do projeto com período, linhas alteradas, commits e cards afetados"
              label="Overview — mudanças do período ligadas às funcionalidades do projeto"
            />
          </div>
        </FeatureSection>

        {/* AI Multi-modelo */}
        <FeatureSection
          icon={<Brain className="h-5 w-5" />}
          title="6 Modelos de IA em Debate com Hierarquia de Juiz"
          description="Ao pedir sugestões de melhoria, o usuário escolhe quais modelos rodar, e cada um analisa o código de forma independente. Depois, um modelo entra como juiz: avalia as respostas dos outros, identifica concordâncias e conflitos e define o peso de cada sugestão. O peso não sai de uma média de votos: a sugestão que o juiz validou conta mais do que outra que apareceu uma vez só. Cada finding mostra de quais modelos veio, o nível de consenso (total, parcial ou único) e uma pílula com o modelo que arbitrou aquele item. O debate roda ao vivo: as respostas dos modelos vão aparecendo na tela conforme chegam, em vez de esperar todas terminarem. Todo o histórico fica salvo: o dev abre qualquer análise passada num accordion, vê os findings e gerencia cada um, marcando como feito (fica tachado), dispensando ou reabrindo. Com o tempo isso acaba virando uma gestão de débito técnico dentro do próprio card. Cada debate é persistido por job e ganha um link público read-only: dá para compartilhar a análise com alguém de fora ou colar o contexto em outra IA, sem login. Logo no import, a plataforma dispara um auto-debate do primeiro card em background, então o usuário já chega com a primeira discussão pronta, e um onboarding guiado explica como ler o debate de IAs na primeira vez. Quando o mesmo card existe em mais de uma branch, o explorador sinaliza o debate cross-branch, e as sugestões que apareceram em um modelo só viram itens clicáveis no centro do explorador."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Screenshot src="/10xdev-analyze-modal.png" alt="Seleção de seis modelos como participantes ou juízes da análise" label="Análise — seleção de participantes e juízes" />
            <Screenshot src="/10xdev-debate-explorer.png" alt="Explorador de debate com consenso, divergências e sugestão revisada" label="Debate — consenso e divergências entre modelos" />
          </div>
          <div className="ml-14 mt-4 grid grid-cols-3 gap-3">
            {[
              { name: "Claude Sonnet 4.6", desc: "Anthropic" },
              { name: "Claude Opus 4.6", desc: "Anthropic" },
              { name: "GPT-5.4", desc: "OpenAI" },
              { name: "GPT-5.3 Codex", desc: "OpenAI" },
              { name: "Gemini 3.1 Pro", desc: "Google" },
              { name: "Gemini 2.5 Pro", desc: "Google" },
            ].map((model) => (
              <div key={model.name} className="bg-[#0a0a0a] border border-cyan-500/10 p-4 rounded-sm text-center">
                <div className="text-cyan-400 font-mono font-bold text-sm">{model.name}</div>
                <div className="text-[10px] text-gray-500 font-mono mt-1">{model.desc}</div>
              </div>
            ))}
          </div>
        </FeatureSection>

        {/* Chat conversacional */}
        <FeatureSection
          icon={<MessageSquare className="h-5 w-5" />}
          title="Chat com as IAs Dentro do Card"
          description="Enquanto o debate é uma análise com juiz, aqui o dev simplesmente conversa com os modelos dentro do card, já com o código vinculado no contexto. A resposta vai aparecendo aos poucos conforme é gerada, sem aquela espera de tela parada, e o scroll acompanha sozinho, mas para de seguir no momento em que o usuário rola pra cima pra reler alguma coisa. Dá pra colocar mais de um modelo na mesma conversa e comparar o que cada um respondeu, e a seleção de modelos fica guardada pra próxima vez. O saldo de créditos vai baixando na tela conforme a resposta consome tokens, e o código vem com syntax highlight e diff colorido pra já sair legível."
        >
          <div className="ml-14">
            <Screenshot
              src="/10xdev-card-chat.png"
              alt="Chat dentro do card com contexto do código e resposta do Claude"
              label="Chat do card — código e análises já entram como contexto"
            />
          </div>
        </FeatureSection>

        {/* Arquitetura ASCII */}
        <FeatureSection
          icon={<Network className="h-5 w-5" />}
          title="Desenho de Arquitetura em ASCII"
          description="Cada card pode gerar um diagrama de arquitetura em ASCII a partir do código vinculado. Antes de desenhar, a IA avalia se o card merece um diagrama: operação CRUD trivial não ganha; fluxo com OAuth, webhook, job assíncrono ou que atravessa várias camadas de forma não-óbvia, ganha. Quando gera, segue um template fixo de caixas e setas (│ ▼ ├──► ◄──), com a camada em maiúsculo antes de cada arquivo (FRONTEND, BACKEND, DATABASE, SERVICE, EXTERNAL) e anotações marcando o que é novo, existente ou removido. Um card pode ter vários fluxos, navegáveis por pills numa aba única de 'Arquitetura'. A geração foi feita para aguentar falha: é idempotente (não regenera o que já existe) e tem retry, timeout e cancelamento. Quando o usuário fecha o modal, o AbortSignal chega até a chamada de IA e ela para na hora."
        >
          <div className="ml-14">
            <Screenshot src="/10xdev-card-architecture.png" alt="Aba Arquitetura do card de autenticação com 5 fluxos navegáveis e diagrama ASCII do Login com Google" label="Diagrama de arquitetura em ASCII gerado pela IA a partir do código do card" />
          </div>
        </FeatureSection>

        {/* Análise de Commits */}
        <FeatureSection
          icon={<GitCompare className="h-5 w-5" />}
          title="Análise de Commits com Review de IA"
          description="O dev seleciona de 2 a 10 commits e pede uma análise. Um modelo entra como revisor sênior e avalia só a qualidade do código novo, usando os patches como evidência e ignorando o que já existia. O retorno é um resumo curto e uma lista de findings, cada um com categoria (security, performance, quality, architecture, best-practices, maintainability, scalability), severidade proporcional ao impacto provado e uma correção concreta que cabe em ~10 linhas, sempre em bloco de código. O prompt foi calibrado contra ruído: se o código está bom, a lista volta vazia em vez de inventar problema. Toda análise fica num histórico por projeto, recuperável por commit ou por finding, com rota estável: dá para copiar um link público do contexto e colar em qualquer IA, e acompanhar a evolução da qualidade ao longo do tempo. E uma rodada pode disparar vários modelos em paralelo, agrupados pelo mesmo job."
        />

        {/* Histórico do Projeto */}
        <FeatureSection
          icon={<History className="h-5 w-5" />}
          title="Histórico Unificado do Projeto"
          description="Uma timeline única que junta o que acontece no GitHub e o que acontece dentro da 10xDev. Num só lugar entram os commits do repositório, as importações (concluídas, em andamento ou com falha), as análises de commit geradas, as sugestões de melhoria e os cards adicionados, cada um com sua origem (github ou 10xdev), data e link direto pro card ou análise correspondente. Tem filtro por fonte, então dá pra ver só o que veio do Git, só o que a plataforma produziu, ou os dois lado a lado."
        >
          <div className="ml-14">
            <Screenshot
              src="/10xdev-project-history.png"
              alt="Histórico do projeto com commits e atividades da 10xDev filtráveis por origem"
              label="Histórico unificado — eventos do GitHub e da 10xDev"
            />
          </div>
        </FeatureSection>

        {/* Notificações in-app */}
        <FeatureSection
          icon={<Bell className="h-5 w-5" />}
          title="Centro de Notificações na Plataforma"
          description="Além dos avisos externos (WhatsApp/Telegram), a plataforma tem um sino de notificações próprio, com contador de não-lidas e marcação individual ou em massa. São 17 tipos em 4 níveis (info, sucesso, alerta, erro): card aprovado ou rejeitado, análise concluída, saldo baixo ou bloqueado, recarga confirmada, tarefa atribuída, e por aí vai. Alguns tipos guardam progresso, então um import em andamento mostra a barra subindo dentro da própria notificação. E tem notificação acionável: quando alguém pede pra entrar num projeto, o dono recebe um aviso com botão de aprovar ou recusar, e aprovar já libera a entrada do membro sem precisar abrir a tela de acesso. A criação é best-effort por design, então se a notificação falhar, a ação principal (aprovar um card, recarregar saldo) nunca quebra."
        >
          <div className="ml-14">
            <Screenshot
              src="/10xdev-notifications.png"
              alt="Central de notificações com tarefas, análises de IA e importações concluídas"
              label="Notificações — tarefas e atividade dos agentes"
            />
          </div>
        </FeatureSection>

        {/* CardFeatures CRUD */}
        <FeatureSection
          icon={<Code2 className="h-5 w-5" />}
          title="Biblioteca de Código Reutilizável"
          description="Trechos de código organizados em cards com syntax highlight, filtros por tecnologia e busca em tempo real. A edição acontece direto no card, sem modal e sem clique extra, com salvamento automático por debounce que garante zero perda de dados enquanto o usuário digita. Cada card suporta múltiplas abas de conteúdo e um diff viewer integrado para acompanhar a evolução de um trecho ao longo do tempo. As categorias do projeto são reordenáveis por drag and drop, com persistência imediata no backend."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Screenshot src="/10xdev-cards-filters.png" alt="Biblioteca global com filtros de Node.js e TypeScript ativos" label="Biblioteca global — busca e filtros ativos" />
            <Screenshot src="/10xdev-card-syntax.png" alt="Card aberto com abas por contexto e código TypeScript destacado" label="Card aberto — contexto e código na mesma visualização" />
          </div>
        </FeatureSection>

        {/* Approval Workflow */}
        <FeatureSection
          icon={<ShieldCheck className="h-5 w-5" />}
          title="Workflow de Aprovação e Controle de Visibilidade"
          description="Todo card criado entra em revisão antes de ser publicado. O detalhe importante está na edição: ao mexer num card já aprovado, o status volta sozinho para pendente e os campos approved_at e approved_by são limpos, então qualquer alteração passa pela mesma revisão da criação. O admin tem um painel próprio, com a fila de moderação separada do fluxo normal. São três níveis de visibilidade independentes: público, somente por link ou privado. O usuário pode compartilhar um card direto com outra pessoa e salvar favoritos com atualização otimista, sem refresh."
        >
          <div className="ml-14">
            <Screenshot src="/10xdev-admin-approval.png" alt="Biblioteca global mostrando códigos pendentes com ações de aprovar e rejeitar" label="Moderação — códigos aguardando aprovação" />
          </div>
        </FeatureSection>

        {/* Stripe */}
        <FeatureSection
          icon={<CreditCard className="h-5 w-5" />}
          title="Billing e Roteamento de IA Unificados via Stripe"
          description="Toda chamada de LLM passa por um proxy unificado que roteia para Anthropic, OpenAI ou Google e registra o uso automaticamente. Antes de cada operação há um pre-check de créditos: saldo insuficiente bloqueia antes de gerar qualquer custo. Proteção contra cobrança dupla em três camadas e rate limiting em 5 níveis garantem a integridade das operações. O gate de cobrança foi endurecido contra overdraft: o débito de cada operação é idempotente e o saldo nunca fica negativo por corrida entre chamadas concorrentes. No primeiro acesso o usuário recebe um bônus de créditos de boas-vindas, já lançado no saldo, e o painel de admin mostra no detalhe de billing de cada usuário os créditos concedidos manualmente. O usuário acompanha tudo num painel de consumo com filtros por período, modelo e feature."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Screenshot src="/10xdev-billing-balance.png" alt="Página de billing com saldo Stripe, resumo e compras recentes" label="Billing — saldo, resumo e compras recentes" />
            <Screenshot src="/10xdev-billing-usage.png" alt="Painel de consumo com histórico por feature, modelo e tokens" label="Consumo — histórico por feature, modelo e tokens" />
          </div>
        </FeatureSection>

        {/* Onboarding / Ativação */}
        <FeatureSection
          icon={<Rocket className="h-5 w-5" />}
          title="Home como Missão de Ativação"
          description="No primeiro acesso a home funciona como uma missão de ativação. Em vez de cair num dashboard vazio, o usuário é guiado pelos passos que fazem a plataforma valer a pena: conectar o GitHub, importar o primeiro repositório e abrir o primeiro debate. Pra ele não esbarrar logo de cara no paywall, já entra com um bônus de créditos de boas-vindas no saldo e consegue rodar IA na primeira sessão, antes mesmo de decidir se vai pagar."
        >
          <div className="ml-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Screenshot
                src="/10xdev-onboarding-home.png"
                alt="Home do primeiro acesso com missão de boas-vindas e vinte reais em créditos"
                label="Primeiro acesso — missão e créditos de boas-vindas"
              />
              <Screenshot
                src="/10xdev-onboarding-mission.png"
                alt="Modal da missão de boas-vindas no passo de conexão com o GitHub"
                label="Missão guiada — conectar, importar e abrir o debate"
              />
            </div>
          </div>
        </FeatureSection>

        {/* Quadro de Tarefas */}
        <FeatureSection
          icon={<KanbanSquare className="h-5 w-5" />}
          title="Quadro de Tarefas do Projeto"
          description="Cada projeto tem um quadro estilo kanban pra organizar o trabalho ao lado do código. As colunas (A fazer, Em andamento e Concluído, por padrão) e os cartões se arrastam, e a nova posição já é salva no backend. Cada tarefa tem responsáveis, e o quadro pode ser filtrado por ativas, concluídas, atrasadas ou todas. Tem um detalhe que cuidei no fluxo: reabrir uma tarefa concluída devolve ela pra primeira coluna, em vez de largar ela perdida no meio do quadro. Um feed de atividade mostra o que mudou no projeto com tempo relativo, então a equipe acompanha sem abrir cartão por cartão."
        >
          <div className="ml-14">
            <Screenshot
              src="/10xdev-tasks-board.png"
              alt="Quadro kanban com tarefas a fazer, em andamento e concluídas"
              label="Quadro de tarefas — filtros, responsáveis e colunas reordenáveis"
            />
          </div>
        </FeatureSection>

        {/* Conteúdo */}
        <FeatureSection
          icon={<BookOpen className="h-5 w-5" />}
          title="CMS de Aulas"
          description="Admins cadastram vídeos colando qualquer URL do YouTube, e o sistema extrai o video ID automaticamente a partir de todos os formatos (youtube.com, youtu.be, /shorts/, /embed/) e gera a thumbnail sem configuração manual. Cada aula pode ter um card vinculado: enquanto o dev assiste ao vídeo, o material de apoio fica do lado, com passo a passo, comandos e código de referência."
        >
          <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Screenshot src="/10xdev-tutorials.png" alt="Catálogo de tutoriais com thumbnails do YouTube" label="Catálogo de tutoriais" />
            <Screenshot src="/10xdev-tutorial-card.png" alt="Aula com card de referência vinculado ao lado do vídeo" label="Aula — card de referência ao lado do vídeo" />
          </div>
        </FeatureSection>

        {/* Templates */}
        <FeatureSection
          icon={<LayoutTemplate className="h-5 w-5" />}
          title="Templates Prontos"
          description="Cada stack tem suas decisões de arquitetura, ferramentas e configs de build, e montar isso do zero toda vez custa um tempo que poderia ir para o produto. Por isso existem templates prontos para as stacks mais usadas, cada um já estruturado com as boas práticas."
        >
          <div className="ml-14 space-y-4">
            <p className="text-gray-400 text-sm leading-relaxed">
              O <a href="https://github.com/10xdev-startup/template-nodejs-express-next-supabase" target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-mono hover:text-cyan-300 underline underline-offset-2 decoration-cyan-500/40 hover:decoration-cyan-400 transition-colors">10xdev-startup/template-nodejs-express-next-supabase</a> está publicado no GitHub como template público: um clique em "Use this template" e o repositório já está na conta do dev. A estrutura separa <span className="text-cyan-400 font-mono">backend/</span> e <span className="text-cyan-400 font-mono">frontend/</span> com TypeScript estrito dos dois lados. Já vem com sidebar de 3 modos de layout, shadcn/ui, Tailwind v4 e Supabase configurados. As configs de <span className="text-cyan-400 font-mono">.claude</span> e <span className="text-cyan-400 font-mono">.cursor</span> também estão incluídas, então o ambiente de IA entra junto.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              A partir daí, os cards da plataforma entram em cena: cada card é uma feature pronta para implementar. O dev navega pelo catálogo, escolhe o que quer adicionar e tem o passo a passo, os comandos e o código de referência à mão. A arquitetura já prevê expansão para outras stacks, cada uma com seu template base e seus cards correspondentes.
            </p>
            <p className="text-cyan-500/70 font-mono text-xs uppercase tracking-widest">
              Template como ponto zero. Cards como caminho.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              O starter tem página própria no portfólio, com a vitrine de 40 componentes que montei: <Link to="/project/template-nodejs" className="text-cyan-400 font-mono hover:text-cyan-300 underline underline-offset-2 decoration-cyan-500/40 hover:decoration-cyan-400 transition-colors">ver Template Node.js</Link>.
            </p>
            <Screenshot src="/10xdev-templates.png" alt="Repositório template-nodejs-express-next-supabase no GitHub" label="template-nodejs-express-next-supabase — repositório público na org 10xdev-startup" />
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
              <li>Supabase Realtime (status de import ao vivo)</li>
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

        <TenxDevArchitecture />
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
              desc: "Até 6 modelos de 3 provedores rodam em paralelo, cada um analisando o card de forma independente. O trabalho pesado é cruzar os resultados, já que dois modelos descrevem o mesmo bug com palavras diferentes. O agrupamento dos findings equivalentes é feito por um modelo de IA, que lê as descrições e junta o que é o mesmo problema dito de formas diferentes; se a IA falha ou fica indisponível, um fallback heurístico entra no lugar e agrupa por proximidade (mesma região de código, tolerância de ±5 linhas, validada por similaridade Jaccard), fazendo bridging por best-match, ou seja, pegando o melhor par em vez do primeiro que aparece e guardando os IDs já pareados para não duplicar na tela. O que vários modelos apontam sobe de score; o que aparece sozinho fica como opinião única. O hash de identidade do finding usa (arquivo, linha, categoria, severidade) em vez do título, que o refiner reescreve a cada rodada. Assim o mesmo bug não reaparece como 'novo' entre execuções e mantém o status done/dismissed marcado pelo usuário.",
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
              title: "Billing em conta Stripe compartilhada entre produtos",
              desc: "A 10xDev divide a mesma conta Stripe com outro produto do grupo (o 10xMídia), então um checkout de lá não pode creditar um usuário daqui. Cada checkout carrega metadata.product e o webhook ignora o que não é dele. Como rede de segurança, o processPaymentGrant tolera o erro de idempotência quando um recheck confirma que outro processador já creditou aquele payment intent: em vez de estourar, reconhece a corrida e segue. São 5 cenários cobertos em teste: caminho feliz, já creditado, corrida resolvida, corrida persistente e erro que não é de idempotência.",
            },
            {
              title: "Hierarquia de juiz no debate de modelos",
              desc: "O debate vai além de contar votos. Um modelo atua como árbitro: recebe as respostas de todos os outros, avalia concordâncias e conflitos e atribui peso a cada sugestão. Quando dois modelos se contradizem, em vez de ficar no empate, sai um veredito. O resultado preserva o raciocínio de cada modelo para auditoria no explorador de debate.",
            },
            {
              title: "Geração de arquitetura ASCII resiliente",
              desc: "A feature de desenho de arquitetura gera os diagramas ASCII por card via IA, e essa geração tem que aguentar falha. É idempotente: relê o estado fresco do banco e não regenera o que já existe, mesmo com chamadas concorrentes. O upsert usa optimistic concurrency (updatedAt) e, se toma 409, relê o card antes de decidir. Tem retry com backoff só para erros transitórios (429, 503, timeout), fallback de tool_choice de required para auto nos gateways que recusam, timeout via FLOW_TIMEOUT_MS e cancelamento real: o AbortSignal propaga até a chamada de IA, que aborta na hora quando o usuário fecha o modal.",
            },
            {
              title: "Análise de commits calibrada e anti-ruído",
              desc: "Um revisor sênior de IA avalia a qualidade do código novo de 2–10 commits selecionados, usando os patches como evidência. O prompt é desenhado contra ruído: severity 'high' só com cenário de exploração ou impacto medido, sugestão precisa caber em ~10 linhas (senão é decisão arquitetural, não patch), findings duplicados pela mesma causa-raiz são descartados, e código bom devolve lista vazia. Cada análise é persistida com rota estável (link público pra colar em IA) e uma rodada agrupa vários modelos pelo mesmo job_id.",
            },
            {
              title: "Anti-staleness: análise sobre código vivo",
              desc: "Sugestão de melhoria baseada no snapshot do import envelhece rápido, porque o código já mudou desde então. Por isso, antes de analisar, o serviço re-hidrata os blocos do card com o conteúdo vivo do repositório (lido na hora via RepoReader), troca os trechos alterados e marca os arquivos removidos. A IA analisa o que existe hoje, não o que existia no dia do import. A análise também ganhou a categoria 'scalability', que usa o briefing do projeto como contexto de crescimento (usuários, volume, multi-tenant) para apontar gargalos com evidência concreta no código atual.",
            },
            {
              title: "Infraestrutura Docker + Azure do zero",
              desc: "Toda a infraestrutura foi configurada manualmente: Dockerfiles multi-stage para frontend e backend, docker-compose com healthchecks em ambos os containers (wget nos endpoints de health), restart: unless-stopped, volumes externos e rede isolada. Azure Container Registry armazena as imagens; Azure App Service roda em produção. O deploy é automatizado via GitHub Actions: um push na main sobe para produção sem intervenção manual.",
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

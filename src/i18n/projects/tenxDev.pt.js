export const tenxDevPt = {
  hero: {
    subtitle: 'Plataforma que transforma repositórios de código em bibliotecas visuais usando inteligência artificial',
    description: 'SaaS construído do zero como cofundador e CTO. Você conecta um repositório do GitHub e a plataforma transforma o código em uma biblioteca visual organizada, navegável e com busca. Por baixo, um agente de IA percorre o repositório de forma autônoma: usa ferramentas reais para listar diretórios, ler arquivos e criar cards, sem nenhuma instrução manual. Para sugestões de melhoria, 6 modelos de 3 provedores (Claude, GPT e Gemini) analisam cada card de forma independente e os resultados passam por um consenso. O resto do produto acompanha: SSE com pub/sub para progresso em tempo real, cobrança por uso via Stripe LLM Gateway, webhooks do GitHub com validação HMAC, painel de admin com moderação e gestão de equipes com permissões por nível. A plataforma também ganhou um chat com os modelos dentro de cada card e um quadro de tarefas por projeto.',
    role: 'Cofundador & Desenvolvedor Full Stack',
    period: 'Jun/2025 - Presente',
    status: 'Em produção · ativo',
  },
  overview: {
    title: 'Visão_Geral',
    stats: [
      ['6 LLMs', 'em debate por consenso'],
      ['Tempo real', 'sincronização via webhooks do GitHub'],
      ['Por uso', 'cobrança por token de IA'],
      ['Agente IA', 'navega repos com tool calls'],
    ],
  },
  contribution: {
    title: 'Minha_Contribuição',
    description: 'Projeto tocado em parceria com o Luiz Bertucci. Atuei em decisões de arquitetura, implementação de features e no deploy da infraestrutura. Algumas features eu fiz sozinho: o desenho de arquitetura, em que a IA lê o código de um card e gera um diagrama ASCII do fluxo; a análise de commits, um review de IA que avalia o código novo de uma seleção de commits e fica salvo num histórico por projeto; o histórico unificado do projeto, uma timeline que junta os eventos do GitHub com o que a 10xDev gera; e o centro de notificações dentro da plataforma. Depois entreguei também o chat com as IAs dentro dos cards, com streaming e vários modelos na mesma thread; o quadro de tarefas do projeto; o debate ao vivo e a página de debate compartilhável; e a home como missão de ativação, com bônus de créditos de boas-vindas no primeiro acesso. A 10xDev existe para usar IA e facilitar a vida de quem desenvolve, e usamos a própria plataforma para evoluí-la: a feature de sugestões analisa o código da 10xDev e propõe melhorias que nós mesmos implementamos.',
    items: [
      ['Chat com as IAs no card', 'conversa com vários modelos no mesmo card, com a resposta saindo em streaming e o saldo de créditos baixando em tempo real'],
      ['Quadro de tarefas', 'quadro kanban por projeto, com colunas e cartões que se arrastam, responsáveis por tarefa e filtro por estado'],
      ['Debate ao vivo e compartilhável', 'as respostas dos modelos aparecem ao vivo, cada debate fica salvo por job e ganha um link público read-only para compartilhar'],
      ['Home como missão de ativação', 'onboarding guiado no primeiro acesso e bônus de créditos de boas-vindas para rodar IA já na primeira sessão'],
      ['Validação de UX e responsividade', 'testei fluxos em desktop e mobile, ajustando usabilidade, estados de tela e clareza das interações antes de levar para produção'],
      ['Sugestões de arquivos órfãos', 'durante a sincronização, detecta arquivos que entraram no diff e ainda não têm card e sugere criar os que faltam via IA'],
      ['Acesso por notificação', 'o pedido para entrar num projeto chega ao dono como notificação com botão de aprovar ou recusar; aprovar libera o acesso na hora e fecha o pedido, sem abrir a tela de membros'],
      ['Import que parece instantâneo', 'a IA já cria o primeiro card na resposta inicial e a aba de melhorias abre sozinha, então aparece resultado antes do import terminar'],
      ['Novo provedor de IA no gateway', 'liguei a OpenAI Responses API ao agent loop e ao roteamento do gateway, o que abriu mais modelos da OpenAI para a plataforma usar'],
      ['Agrupamento de findings por IA', 'um modelo junta os findings que são o mesmo problema escrito de jeitos diferentes e usa um agrupamento heurístico por proximidade quando a IA não responde'],
      ['Desenho de arquitetura', 'a IA desenha o diagrama de arquitetura de cada card sozinha e decide quando o card realmente merece um'],
      ['Análise de commits', 'revisor automático que lê o código novo e aponta problemas antes do merge, organizados por tipo e gravidade, com histórico por projeto'],
      ['Histórico do projeto', 'timeline única que junta os commits do GitHub e os imports, análises e melhorias que a 10xDev gerou, com filtro por fonte'],
      ['Notificações na plataforma', 'sino in-app com contador de não-lidas, 17 tipos em 4 níveis e barra de progresso para jobs em andamento; é best-effort, então a ação principal não quebra se o aviso falhar'],
      ['Código sempre atualizado', 'garante que a IA analise sempre o código atual, nunca uma versão antiga que já mudou'],
      ['Debate com juiz de IA', 'vários modelos discutem o código e um juiz dá o veredito; o histórico fica salvo para marcar o que já foi resolvido'],
      ['Docker + deploy no Azure', 'configurei toda a infraestrutura de deploy com Docker e Azure do zero, com publicação automática em produção'],
      ['Briefing no import', 'a IA entende a base de código antes de organizá-la, então os cards já nascem com o contexto certo'],
      ['Painel admin + analytics', 'painel para acompanhar usuários, atividade e a saúde dos pagamentos no Stripe, com busca, filtros e ordenação'],
      ['Cobrança por uso de IA', 'billing pelo consumo real, com histórico que mostra quanto cada operação gastou por período, modelo e feature'],
      ['Sync GitHub', 'quando o código muda no GitHub, a plataforma se atualiza sozinha e somente no que mudou'],
      ['CMS de conteúdos', 'área para cadastrar e organizar vídeos e materiais por tecnologia, gerida pelo admin'],
      ['Webhook Telegram', 'cada novo cadastro dispara um aviso automático no Telegram para a equipe'],
      ['Notificação WhatsApp via Z-API', 'template editável dentro da plataforma, com pre-check tratando a ambiguidade do 9º dígito e disparo em segundo plano para não travar o cadastro'],
      ['Edição simultânea segura', 'se duas pessoas editam o mesmo card ao mesmo tempo, a segunda é avisada em vez de sobrescrever silenciosamente o trabalho da primeira'],
      ['Suíte de testes Jest', 'montei a base de testes automatizados com Jest e RTL que protege as features de IA contra regressão'],
      ['Sistema de temas dark/light', 'temas claro e escuro consistentes em todo o app, com cerca de 50 telas, atalho de teclado e sem piscada ao carregar'],
    ],
  },
  preview: {
    title: 'Preview',
    alt: 'Home da 10xDev com saldo de créditos, GitHub conectado e seus projetos',
    label: 'Home — créditos, GitHub conectado e seus projetos',
  },
  featuresTitle: 'Funcionalidades',
  features: [
    {
      title: 'Conexão Direta com o GitHub',
      description: 'O desenvolvedor conecta o repositório com um clique. A partir daí, a plataforma acompanha cada atualização: quando chega código novo no GitHub, o webhook detecta os arquivos alterados e reprocessa só eles, não o repositório inteiro. Um snapshot persistente mapeia cada arquivo ao card correspondente, o que mantém o sync incremental eficiente mesmo em repositórios grandes. Um concurrency limiter segura até 8 operações paralelas na API do GitHub para evitar throttling quando muitos arquivos mudam de uma vez. E quando o sync traz código novo, a plataforma olha o diff da branch atrás de arquivos que ainda não viraram card e sugere, via IA, criar os que faltam, para a biblioteca não ficar para trás do repositório.',
      screenshots: [
        ['Modal de criação com botão Conectar GitHub', 'Antes de conectar — botão de autorização do GitHub'],
        ['Modal após conectar com seleção de repositório', 'Após conectar — seleção do repositório'],
      ],
    },
    {
      title: 'Agente de IA que Navega o Repositório Sozinho',
      description: 'A importação não roda um script que processa arquivos em lote. Em vez disso, um agente de IA usa ferramentas reais: chama list_directory para explorar a estrutura, read_file para ler o conteúdo, search_files para encontrar padrões e create_card quando decide que um trecho merece virar card. No fim, gera automaticamente um card de briefing resumindo toda a codebase. Um supervisor de qualidade ainda detecta cards duplicados, conteúdo fraco ou trechos que deveriam ser mesclados antes de publicar.',
      screenshots: [['Card de briefing da codebase gerado automaticamente', 'Card de briefing da codebase gerado automaticamente']],
    },
    {
      title: 'Progresso e Atividade de Agentes em Tempo Real',
      description: 'Durante a importação, cada evento do agente chega ao frontend via SSE assim que acontece: o usuário vê cada tool call em tempo real, com árvore de arquivos navegável e log dos cards criados. Quem chega no meio do processo recebe um replay do buffer completo. Dá para cancelar a qualquer momento, e o agente para com calma na iteração seguinte. Esse mesmo streaming também roda na tela de Melhorias: ao gerar as sugestões, os findings aparecem um a um conforme cada modelo responde. Um banner no topo do projeto mostra quais agentes estão trabalhando no momento — import, debate ou análise — sobre a mesma infraestrutura de eventos via SSE.',
      screenshots: [['Modal de importação mostrando progresso, cards criados e arquivos avaliados pelo agente', 'Importação ao vivo — progresso, cards criados e arquivos avaliados']],
    },
    {
      title: 'Overview do Projeto: o que mudou e onde',
      description: 'Depois do import, a 10xDev cruza o histórico do GitHub com os cards que representam o projeto. Dá para escolher um período e ver quantos commits entraram, quem alterou mais linhas, quais funcionalidades foram afetadas e quais análises ou melhorias aconteceram na plataforma. Na aba de funcionalidades, cada card reúne os commits e arquivos que o modificaram, mostra o que já passou por revisão e permite analisar um card ou todos os cards alterados com os modelos escolhidos. Se a branch ganhou arquivos que ainda não têm card, o próprio Overview aponta o que está faltando e oferece gerar esses cards com IA.',
      screenshots: [['Overview do projeto com período, linhas alteradas, commits e cards afetados', 'Overview — mudanças do período ligadas às funcionalidades do projeto']],
    },
    {
      title: '6 Modelos de IA em Debate com Hierarquia de Juiz',
      description: 'Ao pedir sugestões de melhoria, o usuário escolhe quais modelos rodar, e cada um analisa o código de forma independente. Depois, um modelo entra como juiz: avalia as respostas dos outros, identifica concordâncias e conflitos e define o peso de cada sugestão. O peso não sai de uma média de votos: a sugestão que o juiz validou conta mais do que outra que apareceu uma vez só. Cada finding mostra de quais modelos veio, o nível de consenso e o modelo que arbitrou o item. O debate roda ao vivo, e todo o histórico fica salvo para o usuário gerenciar cada finding como feito, dispensado ou reaberto. Cada debate é persistido por job e ganha um link público read-only. No import, a plataforma dispara um auto-debate do primeiro card em background, e um onboarding guiado explica como ler o resultado. O explorador também sinaliza debates cross-branch e sugestões que apareceram em apenas um modelo.',
      screenshots: [
        ['Seleção de seis modelos como participantes ou juízes da análise', 'Análise — seleção de participantes e juízes'],
        ['Explorador de debate com consenso, divergências e sugestão revisada', 'Debate — consenso e divergências entre modelos'],
      ],
    },
    {
      title: 'Chat com as IAs Dentro do Card',
      description: 'Enquanto o debate é uma análise com juiz, aqui o desenvolvedor conversa com os modelos dentro do card, já com o código vinculado no contexto. A resposta aparece em streaming, e o scroll acompanha sozinho até o usuário rolar para cima. É possível colocar mais de um modelo na mesma conversa, comparar respostas e preservar a seleção para a próxima vez. O saldo de créditos diminui na tela conforme a resposta consome tokens, e o código aparece com syntax highlight e diff colorido.',
      screenshots: [['Chat dentro do card com contexto do código e resposta do Claude', 'Chat do card — código e análises já entram como contexto']],
    },
    {
      title: 'Desenho de Arquitetura em ASCII',
      description: 'Cada card pode gerar um diagrama de arquitetura em ASCII a partir do código vinculado. Antes de desenhar, a IA avalia se o card merece um diagrama: uma operação CRUD trivial não gera um diagrama; um fluxo com OAuth, webhook, job assíncrono ou várias camadas não óbvias, sim. O resultado segue um template fixo de caixas e setas, identifica cada camada e marca o que é novo, existente ou removido. Um card pode ter vários fluxos navegáveis na aba Arquitetura. A geração é idempotente e tem retry, timeout e cancelamento; quando o usuário fecha o modal, o AbortSignal chega até a chamada de IA e interrompe a operação.',
      screenshots: [['Aba Arquitetura do card de autenticação com cinco fluxos navegáveis e diagrama ASCII do Login com Google', 'Diagrama de arquitetura em ASCII gerado pela IA a partir do código do card']],
    },
    {
      title: 'Análise de Commits com Review de IA',
      description: 'O desenvolvedor seleciona de 2 a 10 commits e pede uma análise. Um modelo atua como revisor sênior e avalia somente a qualidade do código novo, usando os patches como evidência. O retorno traz um resumo e findings com categoria, severidade proporcional ao impacto comprovado e uma correção concreta de aproximadamente 10 linhas. O prompt foi calibrado contra ruído: se o código está bom, a lista volta vazia. Cada análise fica no histórico do projeto com rota pública estável, e uma rodada pode disparar vários modelos em paralelo, agrupados pelo mesmo job.',
      screenshots: [],
    },
    {
      title: 'Histórico Unificado do Projeto',
      description: 'Uma timeline reúne o que acontece no GitHub e dentro da 10xDev. Ela inclui commits, importações, análises de commit, sugestões de melhoria e cards adicionados, cada item com origem, data e link direto. O filtro por fonte permite ver somente o que veio do GitHub, somente o que a plataforma produziu ou os dois lado a lado.',
      screenshots: [['Histórico do projeto com commits e atividades da 10xDev filtráveis por origem', 'Histórico unificado — eventos do GitHub e da 10xDev']],
    },
    {
      title: 'Centro de Notificações na Plataforma',
      description: 'Além dos avisos externos por WhatsApp e Telegram, a plataforma tem um sino de notificações com contador de não lidas e marcação individual ou em massa. São 17 tipos em 4 níveis, incluindo aprovação de cards, análises concluídas, saldo baixo, recargas e tarefas atribuídas. Alguns tipos guardam progresso, e pedidos de acesso podem ser aprovados ou recusados dentro da própria notificação. A criação é best-effort por design: se o aviso falhar, a ação principal nunca quebra.',
      screenshots: [['Central de notificações com tarefas, análises de IA e importações concluídas', 'Notificações — tarefas e atividade dos agentes']],
    },
    {
      title: 'Biblioteca de Código Reutilizável',
      description: 'Trechos de código são organizados em cards com syntax highlight, filtros por tecnologia e busca em tempo real. A edição acontece diretamente no card, com salvamento automático por debounce. Cada card suporta múltiplas abas e um diff viewer integrado. As categorias do projeto são reordenáveis por drag and drop, com persistência imediata no backend.',
      screenshots: [
        ['Biblioteca global com filtros de Node.js e TypeScript ativos', 'Biblioteca global — busca e filtros ativos'],
        ['Card aberto com abas por contexto e código TypeScript destacado', 'Card aberto — contexto e código na mesma visualização'],
      ],
    },
    {
      title: 'Workflow de Aprovação e Controle de Visibilidade',
      description: 'Todo card criado entra em revisão antes de ser publicado. Ao editar um card aprovado, o status volta automaticamente para pendente e os campos de aprovação são limpos. O admin tem uma fila de moderação separada. Há três níveis de visibilidade: público, somente por link ou privado. O usuário também pode compartilhar cards e salvar favoritos com atualização otimista.',
      screenshots: [['Biblioteca global mostrando códigos pendentes com ações de aprovar e rejeitar', 'Moderação — códigos aguardando aprovação']],
    },
    {
      title: 'Billing e Roteamento de IA Unificados via Stripe',
      description: 'Toda chamada de LLM passa por um proxy que roteia para Anthropic, OpenAI ou Google e registra o uso. Um pre-check bloqueia operações sem saldo antes de gerar custo. Proteção contra cobrança dupla em três camadas, rate limiting em cinco níveis e débitos idempotentes evitam overdraft e corridas entre chamadas concorrentes. O primeiro acesso inclui créditos de boas-vindas, e o usuário acompanha o consumo por período, modelo e feature.',
      screenshots: [
        ['Página de billing com saldo Stripe, resumo e compras recentes', 'Billing — saldo, resumo e compras recentes'],
        ['Painel de consumo com histórico por feature, modelo e tokens', 'Consumo — histórico por feature, modelo e tokens'],
      ],
    },
    {
      title: 'Home como Missão de Ativação',
      description: 'No primeiro acesso, a home funciona como uma missão de ativação. Em vez de um dashboard vazio, o usuário é guiado para conectar o GitHub, importar o primeiro repositório e abrir o primeiro debate. Um bônus de créditos de boas-vindas permite rodar IA já na primeira sessão, antes de decidir se vai pagar.',
      screenshots: [
        ['Home do primeiro acesso com missão de boas-vindas e vinte reais em créditos', 'Primeiro acesso — missão e créditos de boas-vindas'],
        ['Modal da missão de boas-vindas no passo de conexão com o GitHub', 'Missão guiada — conectar, importar e abrir o debate'],
      ],
    },
    {
      title: 'Quadro de Tarefas do Projeto',
      description: 'Cada projeto tem um quadro kanban para organizar o trabalho ao lado do código. As colunas e os cartões podem ser arrastados, com persistência imediata no backend. Cada tarefa tem responsáveis, e o quadro pode ser filtrado por estado. Ao reabrir uma tarefa concluída, ela volta para a primeira coluna. Um feed de atividade mostra as mudanças com tempo relativo.',
      screenshots: [['Quadro kanban com tarefas a fazer, em andamento e concluídas', 'Quadro de tarefas — filtros, responsáveis e colunas reordenáveis']],
    },
    {
      title: 'CMS de Aulas',
      description: 'Administradores cadastram vídeos com qualquer URL do YouTube, e o sistema extrai o ID automaticamente de diferentes formatos e gera a miniatura. Cada aula pode ter um card vinculado, mantendo o material de apoio, comandos e código de referência ao lado do vídeo.',
      screenshots: [
        ['Catálogo de tutoriais com thumbnails do YouTube', 'Catálogo de tutoriais'],
        ['Aula com card de referência vinculado ao lado do vídeo', 'Aula — card de referência ao lado do vídeo'],
      ],
    },
    {
      title: 'Template Full-Stack Open Source',
      description: 'O template transforma decisões repetitivas do início de um produto em uma base reutilizável e conecta a fundação técnica da aplicação ao catálogo de códigos e features da 10xDev.',
      screenshots: [['Repositório template-nodejs-express-next-supabase no GitHub', 'template-nodejs-express-next-supabase — repositório público na organização 10xdev-startup']],
    },
  ],
  templateDetails: {
    beforeLink: 'O ',
    afterLink: ' está publicado no GitHub como template público: um clique em “Use this template” cria uma cópia pronta na conta do desenvolvedor. A estrutura separa ',
    middle: ' e ',
    afterPaths: ' com TypeScript estrito dos dois lados. Também entrega 39 componentes copiáveis, sidebar com 3 modos, Supabase, Tailwind CSS 3 e um ambiente de engenharia versionado em ',
    and: ' e ',
    ending: '.',
    evolution: 'O template resolve o ponto de partida; os cards da plataforma resolvem a evolução. O desenvolvedor navega pelo catálogo, escolhe a próxima feature e encontra contexto, comandos e código de referência para adaptar sobre uma arquitetura já conhecida.',
    slogan: 'Template como ponto zero. Cards como caminho.',
    portfolioPrefix: 'O starter tem uma página própria no portfólio, com a arquitetura e a vitrine de 39 componentes que implementei: ',
    portfolioLink: 'ver Template Node.js',
  },
  architecture: {
    title: 'Arquitetura',
    columns: [
      ['Frontend', ['Next.js 15 (App Router)', 'React 19 + TypeScript', 'shadcn/ui (50+ componentes)', 'SSE streaming (progresso em tempo real)', 'Supabase Realtime (status de import ao vivo)', 'Optimistic updates (save/unsave)', 'react-markdown + Prism', 'DnD-Kit + react-hook-form']],
      ['Backend', ['Node.js + Express + TypeScript', 'Agent loop: Claude + GPT + Gemini (6 modelos)', 'Stripe LLM Gateway (proxy unificado de IA)', 'SSE + pub/sub com replay de buffer', 'GitHub App (OAuth + Webhooks HMAC)', 'Telegram Bot (notificações de atividade)', 'Rate limiting em 5 camadas', 'Concurrency limiter (8 ops paralelas)']],
      ['Infraestrutura', ['PostgreSQL via Supabase', 'Supabase Auth (Google OAuth)', 'Docker + docker-compose (dev e prod)', 'Azure Container Registry + App Service', 'HMAC-SHA256 webhook security', 'Graceful shutdown (SIGTERM/SIGINT)', 'Idempotency keys (anti-cobrança dupla)']],
    ],
  },
  challenges: {
    title: 'Desafios_Técnicos',
    items: [
      ['Consenso multi-modelo de IA', 'Até 6 modelos de 3 provedores rodam em paralelo. Um modelo agrupa findings equivalentes; se ele falha, um fallback heurístico agrupa por proximidade de código e similaridade Jaccard. O melhor par é escolhido sem duplicar IDs. Findings apontados por vários modelos ganham score maior. A identidade usa arquivo, linha, categoria e severidade, não o título reescrito, preservando o status feito ou dispensado entre execuções.'],
      ['GitHub real-time sync com segurança', 'Todos os webhooks usam verificação HMAC-SHA256. Um concurrency limiter permite até 8 operações paralelas na API do GitHub. O mapeamento persistente de arquivo para card sustenta o sync incremental, e o fluxo OAuth cobre troca de token e instalação da GitHub App.'],
      ['Lógica de visibilidade e aprovação complexa', 'O CardFeatureModel combina mais de 15 filtros condicionais: visibilidade, aprovação, ownership, papel do usuário e projeto. O admin vê itens pendentes para moderação; usuários veem os próprios cards e os públicos aprovados.'],
      ['Pipeline de importação assíncrono com recovery', 'Importar um repositório pode levar minutos. O pipeline tem mais de 10 etapas, progresso persistido, logs em JSONB, relatório por arquivo, cancelamento graceful e retry após falha parcial.'],
      ['Cobrança por uso com Stripe', 'Cada chamada de IA registra meter events no Stripe com os tokens consumidos. Webhooks atualizam subscriptions em tempo real, e idempotency keys impedem cobranças duplicadas.'],
      ['Billing em conta Stripe compartilhada entre produtos', 'A 10xDev compartilha a conta Stripe com o 10xMídia. Cada checkout carrega metadata.product, e o webhook ignora eventos de outros produtos. O processPaymentGrant reconhece corridas de idempotência quando outro processador já creditou o payment intent. Cinco cenários cobrem o fluxo em testes.'],
      ['Hierarquia de juiz no debate de modelos', 'Um modelo atua como árbitro: recebe as respostas dos demais, avalia concordâncias e conflitos e atribui peso às sugestões. Contradições produzem um veredito, e o raciocínio de cada modelo permanece disponível para auditoria.'],
      ['Geração de arquitetura ASCII resiliente', 'A geração é idempotente, relê o estado atual e não sobrescreve diagramas existentes. O upsert usa optimistic concurrency e trata conflitos 409. Há retry com backoff somente para erros transitórios, fallback de tool_choice, timeout e cancelamento propagado por AbortSignal.'],
      ['Análise de commits calibrada e anti-ruído', 'Um revisor de IA avalia o código novo de 2 a 10 commits usando patches como evidência. Severidade alta exige impacto comprovado, correções devem ser pequenas e findings duplicados são descartados. Código bom retorna lista vazia. As análises têm rota pública estável e agrupamento por job.'],
      ['Anti-staleness: análise sobre código vivo', 'Antes da análise, o serviço reidrata os blocos do card com o conteúdo atual do repositório, substitui trechos alterados e marca arquivos removidos. A categoria scalability usa o briefing para avaliar gargalos de crescimento com evidência concreta no código atual.'],
      ['Infraestrutura Docker + Azure do zero', 'Dockerfiles multi-stage, docker-compose com healthchecks, restart policy, volumes e rede isolada foram configurados manualmente. O Azure Container Registry armazena as imagens, o App Service roda em produção e o GitHub Actions publica automaticamente a partir da main.'],
    ],
  },
  diagrams: [
    {
      title: 'Fluxo 01 · Importação e GitSync',
      subtitle: 'Do push no GitHub aos cards atualizados no projeto',
      content: `GITHUB APP
     │  OAuth / installation token
     │
     ├── push ──► WEBHOOK HMAC ──► EXPRESS API ──► IMPORT JOB
     │                                                │
     │                                                ▼
     │                                          AGENT LOOP
     │                              list · read · search · create_card
     │                                                │
     │                                                ▼
     └──────────────────────────────────────► CARDS + SNAPSHOT
                                                      │
                                                      ▼
                                                  SUPABASE

NEXT.JS ◄── SSE + REPLAY ◄── AGENT ORCHESTRATOR ◄── eventos do job`,
    },
    {
      title: 'Fluxo 02 · Análises e debate',
      subtitle: 'O mesmo gateway atende melhorias, chat, arquitetura e review de commits',
      content: `CARD / COMMITS
      │  código vivo + briefing + patches
      ▼
SERVIÇOS DE IA ──► STRIPE LLM GATEWAY
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
           CLAUDE       GPT       GEMINI
              └──────────┼──────────┘
                         ▼
                DEBATE + CONSENSO
                         │
                         ▼
NEXT.JS ◄── SSE / NDJSON ◄── RESULTADOS + USO ──► SUPABASE

        Auth/RBAC · rate limits · débito idempotente · Docker/Azure`,
    },
  ],
}

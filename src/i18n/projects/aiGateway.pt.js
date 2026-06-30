export const aiGatewayPt = {
  hero: {
    subtitle: 'Gateway de LLM em Go: um prompt, vários modelos respondendo em paralelo, com consenso e streaming',
    description: 'Serviço HTTP escrito em Go que fica na frente de vários provedores de modelos de IA (Ollama local, OpenAI e Anthropic) atrás de uma API única. Ele roteia por provedor, dispara todos os modelos em paralelo no endpoint de consenso e devolve as respostas via streaming. Acompanha uma interface em React e Vite que manda o mesmo prompt para vários modelos e mostra as respostas saindo lado a lado, ao vivo. Roda sem nenhuma API key usando modelos locais via Ollama, e aceita modelos pagos como Claude Sonnet, Claude Opus e GPT trocando uma variável de ambiente. O projeto nasceu do mesmo padrão de orquestração multi-modelo que mantenho em produção, aqui reescrito em Go para explorar concorrência.',
    role: 'Autor & Desenvolvedor',
    period: '2026',
    status: 'Open source · público',
  },
  overview: {
    title: 'Visão_Geral',
    stats: [
      ['Go', 'backend concorrente, sem dependências'],
      ['Paralelo', 'todos os modelos no mesmo tempo'],
      ['Streaming', 'resposta token a token via SSE'],
      ['Sem key', 'roda grátis com Ollama local'],
    ],
  },
  preview: {
    title: 'Preview',
    label: 'Compare Models: um prompt, vários modelos respondendo lado a lado em streaming',
  },
  featuresTitle: 'Funcionalidades',
  features: [
    {
      title: 'Consenso entre modelos em paralelo',
      description: 'O endpoint de consenso recebe um prompt e dispara todos os modelos registrados ao mesmo tempo, cada um na sua goroutine, e junta as respostas quando todas terminam. A latência total fica próxima da do modelo mais lento, não da soma de todos, o que prova o ganho da concorrência. Cada resposta volta com o nome do modelo e o tempo que levou, então dá para comparar qualidade e velocidade no mesmo lugar.',
      screenshot: 'Resposta do consenso com vários modelos e a latência de cada um',
      aspect: 'wide',
    },
    {
      title: 'Roteamento por provedor numa API única',
      description: 'Cada modelo vira uma entrada própria no gateway e é chamável por nome. Por baixo, uma interface comum abstrai os provedores: um mock determinístico para testes, o Ollama local para modelos grátis e os adapters de OpenAI e Anthropic para modelos pagos. Adicionar um modelo novo é registrar mais uma entrada, sem tocar no resto do código.',
      screenshot: 'Listagem dos modelos disponíveis no gateway',
      aspect: 'wide',
    },
    {
      title: 'Streaming via Server-Sent Events',
      description: 'As respostas saem token a token por SSE, tanto na chamada direta a um modelo quanto na interface de comparação. O cliente recebe os pedaços conforme o modelo gera, com eventos separados para conteúdo, fim e erro. No front, como o navegador não faz POST com EventSource, o stream é consumido via fetch e ReadableStream.',
      screenshot: 'Stream de uma resposta chegando token a token',
      aspect: 'wide',
    },
    {
      title: 'Interface Compare Models em React e Vite',
      description: 'A SPA puxa os modelos disponíveis do próprio gateway e monta uma coluna por modelo. Ao enviar o prompt, todas as colunas começam a transmitir ao mesmo tempo, com indicador de status e latência por modelo. O dev server usa proxy para falar com o gateway sem CORS.',
      screenshot: 'Tela Compare Models com colunas por modelo em streaming',
      aspect: 'wide',
    },
    {
      title: 'Pronto para produção',
      description: 'O serviço encerra de forma graciosa em SIGINT e SIGTERM, parando de aceitar conexões novas e aguardando as em andamento. Tem testes table-driven com provider mock, um pipeline de CI no GitHub Actions que roda format, vet, testes e build, e um Dockerfile multi-stage que gera uma imagem mínima distroless.',
      screenshot: 'Pipeline de CI verde no GitHub Actions',
      aspect: 'wide',
    },
  ],
  architecture: {
    title: 'Arquitetura',
    columns: [
      ['Backend (Go)', ['net/http com roteamento por método', 'Interface Provider (mock, Ollama, OpenAI, Anthropic)', 'Consenso em paralelo (goroutines + WaitGroup)', 'Registry de modelos por env', 'Graceful shutdown (SIGTERM/SIGINT)']],
      ['Front (React/Vite)', ['SPA Compare Models', 'Tailwind CSS', 'Streaming POST via fetch + ReadableStream', 'Proxy de dev sem CORS', 'Uma coluna por modelo, em tempo real']],
      ['Qualidade & Deploy', ['Testes table-driven com mock', 'CI: gofmt, vet, go test, build', 'Dockerfile multi-stage (distroless)', 'Sem dependências externas no core', 'Embeddings e modelos locais via Ollama']],
    ],
  },
  diagram: {
    title: 'Fluxo · Consenso em paralelo',
    subtitle: 'Um prompt entra, todos os modelos rodam ao mesmo tempo, as respostas voltam juntas',
    content: `POST /consensus
      │  { prompt }
      ▼
   REGISTRY ── escolhe todos os providers
      │
      ├──────────┬──────────┬──────────┐
      ▼          ▼          ▼          ▼
   OLLAMA     SONNET      OPUS        GPT      (cada um em sua goroutine)
      └──────────┴──────────┴──────────┘
                 │  WaitGroup
                 ▼
        RESPOSTAS + LATÊNCIA  ──►  cliente / Compare Models`,
  },
  challenges: {
    title: 'Decisões_Técnicas',
    items: [
      ['Concorrência como o ponto central', 'O caso de uso casa com o forte do Go. O consenso faz fan-out das chamadas em goroutines e fan-in com WaitGroup, então N modelos custam o tempo do mais lento, não a soma. Cada provider recebe o contexto da requisição, o que permite cancelamento limpo.'],
      ['Abstração de provider sem inflar', 'Uma única interface cobre modelos locais e pagos. Registrar um modelo é só adicionar uma entrada no registry, e dois modelos do mesmo provedor coexistem por terem nomes próprios. O mock determinístico deixa rodar e testar tudo sem rede e sem custo.'],
      ['Streaming POST no navegador', 'O EventSource do browser só faz GET, mas o gateway expõe o streaming via POST. No front, o stream é lido com fetch e ReadableStream, com um parser de SSE feito à mão que separa conteúdo, fim e erro.'],
      ['Roda grátis, aceita pago', 'O default prefere o modelo local do Ollama para evitar custo inesperado. Os provedores pagos só entram quando a API key existe, e os identificadores de modelo são configuráveis por env.'],
    ],
  },
}

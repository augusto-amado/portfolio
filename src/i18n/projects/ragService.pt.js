export const ragServicePt = {
  hero: {
    subtitle: 'RAG permission-aware em Python: busca híbrida sobre pgvector, com a resposta gerada pelo AI Gateway',
    description: 'Serviço de RAG escrito em Python com FastAPI que transforma documentos em uma camada de conhecimento consultável. Ele ingere o texto, gera embeddings, guarda no PostgreSQL com pgvector e responde com busca híbrida que junta similaridade vetorial e full-text, fundidos por Reciprocal Rank Fusion. A recuperação é permission-aware: cada usuário só encontra o que tem permissão de ver, e o filtro de dono entra nas duas metades da busca. O endpoint de resposta monta o contexto recuperado e delega a geração ao AI Gateway, o projeto irmão, fechando o ciclo do RAG. Os embeddings rodam localmente via Ollama, então tudo funciona sem nenhuma API key.',
    role: 'Autor & Desenvolvedor',
    period: '2026',
    status: 'Open source · público',
  },
  overview: {
    title: 'Visão_Geral',
    stats: [
      ['pgvector', 'busca vetorial no Postgres'],
      ['Híbrida', 'vetorial + full-text via RRF'],
      ['Permission', 'cada um vê só o que pode'],
      ['hit@3 1.0', 'na avaliação de exemplo'],
    ],
  },
  preview: {
    title: 'Preview',
    label: 'Busca permission-aware: o mesmo query retorna documentos diferentes conforme quem pergunta',
  },
  featuresTitle: 'Funcionalidades',
  features: [
    {
      title: 'Busca híbrida com Reciprocal Rank Fusion',
      description: 'A busca combina dois rankings: a similaridade vetorial por cosseno, com índice HNSW do pgvector, e o full-text do Postgres, com tsvector e índice GIN. Os dois rankings são fundidos por RRF, uma técnica simples e robusta que soma o inverso da posição de cada documento em cada lista. Tudo acontece num único SQL com CTEs, então a fusão roda dentro do banco. O resultado pega tanto a busca por significado quanto a por palavra exata.',
      screenshot: 'Resultado de busca com score híbrido e a origem de cada trecho',
      aspect: 'wide',
    },
    {
      title: 'Recuperação permission-aware',
      description: 'Cada trecho guarda o dono, e a busca filtra por dono nas duas metades, a vetorial e a full-text. Na prática, dois usuários fazem a mesma pergunta e recebem resultados diferentes: um documento privado de um nunca aparece para o outro. É a governança que separa um RAG de demonstração de um que poderia ir para produção.',
      screenshot: 'Mesmo query, donos diferentes, resultados diferentes',
      aspect: 'wide',
    },
    {
      title: 'Ingestão com chunking e embeddings locais',
      description: 'A ingestão quebra o texto em janelas com sobreposição, respeitando limites de palavra, gera os embeddings via Ollama com o modelo nomic-embed-text e grava cada trecho no pgvector junto de um tsvector materializado. Como os embeddings rodam localmente, a ingestão não tem custo nem depende de API externa.',
      screenshot: 'Resposta da ingestão com documento e número de trechos',
      aspect: 'wide',
    },
    {
      title: 'Resposta completa via AI Gateway',
      description: 'O endpoint de resposta faz a busca permission-aware, monta um prompt com o contexto recuperado e delega a geração ao AI Gateway. A resposta volta com as fontes usadas, então dá para auditar de onde veio cada afirmação. Se o gateway estiver fora do ar, o serviço degrada com elegância: devolve as fontes e reporta o erro, sem quebrar.',
      screenshot: 'Resposta gerada com as fontes recuperadas listadas',
      aspect: 'wide',
    },
    {
      title: 'Avaliação de recuperação e testes',
      description: 'Um script de avaliação ingere um corpus rotulado, roda as queries em paráfrase e mede hit@k e MRR, então a qualidade da busca é medida e não suposta. No corpus de exemplo, a recuperação acerta o documento certo no topo em todas as queries. A suíte de testes cobre o chunking e a montagem do prompt sem depender de banco nem de rede.',
      screenshot: 'Saída da avaliação com hit@k e MRR por query',
      aspect: 'wide',
    },
  ],
  architecture: {
    title: 'Arquitetura',
    columns: [
      ['API (Python)', ['FastAPI async + Pydantic', 'Pool de conexões psycopg', 'Embeddings via Ollama', 'Cliente do AI Gateway', 'Schema aplicado na subida']],
      ['Dados (Postgres)', ['pgvector: vector(768) + HNSW', 'Full-text: tsvector + GIN', 'Busca híbrida com RRF em SQL', 'Filtro de permissão por dono', 'Schema isolado rag_demo']],
      ['Qualidade & Deploy', ['Avaliação hit@k e MRR', 'Testes com pytest', 'docker-compose com pgvector', 'Dockerfile com uv', 'CI no GitHub Actions']],
    ],
  },
  diagram: {
    title: 'Fluxo · Busca híbrida e resposta',
    subtitle: 'Da pergunta às fontes recuperadas e à resposta gerada',
    content: `QUERY  ──►  EMBEDDING (Ollama)
   │
   ├──────────────┬──────────────┐
   ▼              ▼              │
VETORIAL       FULL-TEXT        │   filtro por dono
(cosseno,      (tsvector,       │   nas duas metades
 HNSW)          GIN)            │
   └──────┬───────┘             │
          ▼   RRF              ◄┘
        TOP-K
          │
          ▼
   AI GATEWAY  ──►  RESPOSTA + FONTES`,
  },
  challenges: {
    title: 'Decisões_Técnicas',
    items: [
      ['Busca híbrida dentro do banco', 'O ranking vetorial e o full-text são fundidos por RRF num único SQL com CTEs. Manter a fusão no Postgres evita trazer listas grandes para a aplicação e deixa o banco fazer o trabalho que ele faz bem.'],
      ['Permissão como parte da consulta', 'O filtro por dono entra nas duas metades da busca, não como um filtro depois. Assim, um documento sem permissão nunca chega nem a competir pelo ranking, o que é mais seguro e mais barato.'],
      ['Custo zero por design', 'Os embeddings rodam localmente via Ollama, então ingestão e busca não têm custo. O serviço também aceita um provedor de geração pago pelo AI Gateway quando se quer, sem mudar o resto.'],
      ['Degradação graciosa', 'Se o gateway de geração cai, o endpoint de resposta ainda devolve as fontes recuperadas e reporta o erro em vez de quebrar. A recuperação, que é o núcleo, continua funcionando sozinha.'],
    ],
  },
}

export const projects = [
  {
    title: "10xDev",
    slug: "10xdev",
    category: "product",
    status: "Em produção · ativo",
    statusEn: "In production · active",
    tags: ["Next.js", "TypeScript", "Supabase", "Multi-LLM", "GitHub Sync", "Stripe", "SSE"],
    tagsEn: ["Next.js", "TypeScript", "Supabase", "Multi-LLM", "GitHub Sync", "Stripe", "SSE"],
    image: "/10xdev-banner.png",
    description: "SaaS para desenvolvedores que conecta repositórios GitHub, organiza funcionalidades em uma biblioteca visual e automatiza análises técnicas com múltiplos modelos de IA. Inclui billing por uso, painel admin, webhooks e sincronização em tempo real.",
    descriptionEn: "Developer SaaS that connects GitHub repositories, organizes features into a visual code library, and automates technical analysis with multiple AI models. Includes usage-based billing, admin tooling, webhooks, and real-time sync.",
    demoUrl: "https://10xdev.com.br",
    codeUrl: "https://github.com/LuizBertucci/10xdev"
  },
  /* OCULTO TEMPORARIAMENTE enquanto a página está incompleta — não remover, é só descomentar pra voltar.
  {
    title: "10xMídia",
    slug: "10xmkt",
    category: "product",
    status: "Em produção · ativo",
    statusEn: "In production · active",
    tags: ["Next.js", "TypeScript", "Supabase", "Claude", "GPT", "Gemini"],
    image: "/10xmidia-banner-v2.png",
    description: "Plataforma de marketing analytics que conecta Google Sheets com múltiplos modelos de IA para gerar relatórios automáticos, analisar campanhas e criar roteiros de vídeo.",
    descriptionEn: "Marketing analytics platform that connects Google Sheets to multiple AI models to generate automated reports, analyze campaigns, and create video scripts.",
    demoUrl: "https://10xmidia.com.br",
    codeUrl: null
  },
  */
  {
    title: "Template Node.js",
    slug: "template-nodejs",
    category: "openSource",
    status: "Open source · público",
    statusEn: "Open source · public",
    tags: ["Next.js 16", "React 19", "Express 5", "TypeScript", "Supabase", "shadcn/ui"],
    image: "/template-banner.svg",
    description: "Starter full-stack open-source com Next.js 16, Express 5 e Supabase. Inclui uma vitrine de 39 componentes copiáveis, autenticação, testes e um fluxo de engenharia preparado para evoluir.",
    descriptionEn: "Open-source full-stack starter built with Next.js 16, Express 5, and Supabase. Includes a showcase of 39 copy-and-paste components, authentication, tests, and an engineering workflow designed to scale.",
    demoUrl: null,
    codeUrl: "https://github.com/10xdev-startup/template-nodejs-express-next-supabase"
  },
  {
    title: "AI Gateway",
    slug: "ai-gateway",
    category: "personal",
    status: "Open source · público",
    statusEn: "Open source · public",
    tags: ["Go", "React", "Vite", "Multi-LLM", "SSE", "Ollama"],
    tagsEn: ["Go", "React", "Vite", "Multi-LLM", "SSE", "Ollama"],
    image: "/ai-gateway-banner.png",
    description: "Gateway de LLM em Go que coloca vários modelos (Ollama, OpenAI, Anthropic) atrás de uma API única. Dispara todos em paralelo no endpoint de consenso, transmite via SSE e tem uma interface em React e Vite que compara os modelos lado a lado, ao vivo. Roda grátis com modelos locais.",
    descriptionEn: "LLM gateway in Go that puts several models (Ollama, OpenAI, Anthropic) behind a single API. It fires them all in parallel on the consensus endpoint, streams over SSE, and ships a React and Vite interface that compares the models side by side, live. Runs free with local models.",
    demoUrl: null,
    codeUrl: "https://github.com/augusto-amado/ai-gateway"
  },
  {
    title: "RAG Service",
    slug: "rag-service",
    category: "personal",
    status: "Open source · público",
    statusEn: "Open source · public",
    tags: ["Python", "FastAPI", "pgvector", "RAG", "Busca híbrida", "Ollama"],
    tagsEn: ["Python", "FastAPI", "pgvector", "RAG", "Hybrid search", "Ollama"],
    image: "/rag-service-banner.png",
    description: "RAG permission-aware em Python com FastAPI. Ingere documentos, faz busca híbrida sobre pgvector (vetorial + full-text fundidos por RRF) respeitando permissão por usuário, e gera a resposta via AI Gateway. Embeddings locais via Ollama, sem API key.",
    descriptionEn: "Permission-aware RAG in Python with FastAPI. Ingests documents, runs hybrid search over pgvector (vector + full-text fused by RRF) respecting per-user permission, and generates the answer via the AI Gateway. Local embeddings via Ollama, no API key.",
    demoUrl: null,
    codeUrl: "https://github.com/augusto-amado/rag-service"
  },
  {
    title: "Navinhazinha",
    slug: "navinhazinha",
    category: "personal",
    status: "Projeto concluído",
    statusEn: "Completed project",
    tags: ["Unity 6.5", "C#", "Game Loop", "Pixel Art"],
    tagsEn: ["Unity 6.5", "C#", "Game Loop", "Pixel Art"],
    image: "/navinhazinha-cover.svg",
    description: "Shoot'em-up retrô criado em um fim de semana, com arte, áudio, colisões, efeitos e ranking gerados por código. O dev log documenta decisões técnicas, bugs encontrados e correções feitas durante o desenvolvimento.",
    descriptionEn: "Retro shoot 'em up built over a weekend, with code-generated art, audio, collisions, effects, and high scores. The dev log documents technical decisions, bugs found, and fixes made during development.",
    demoUrl: "https://navinhazinha-webgl.vercel.app",
    demoLabel: "Jogar",
    demoLabelEn: "Play",
    codeUrl: "https://github.com/augusto-amado/navinhazinha"
  }
];

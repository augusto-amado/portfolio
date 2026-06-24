export const templateNodeTranslations = {
  'pt-BR': {
    hero: {
      subtitle: 'Starter full-stack com Next.js, Express, Supabase e uma vitrine de componentes pronta para usar',
      description: 'Eu montei este template porque o começo dos projetos estava sempre consumindo as mesmas horas: criar a estrutura, ligar autenticação, organizar a API, configurar testes e refazer componentes básicos. O repositório já abre com frontend e backend funcionando, um domínio de usuário como referência e 39 blocos de interface que podem ser vistos, copiados e adaptados. Assim, quem usa pode começar pela regra de negócio, não pela configuração.',
      role: 'Autor · arquitetura, base full-stack e biblioteca de componentes',
      status: 'Open source · público',
    },
    overview: {
      title: 'Visão geral',
      stats: [
        ['39 blocos', 'componentes copiáveis'],
        ['6 categorias', 'com filtro e preview'],
        ['11 testes', 'backend e frontend'],
        ['1 clique', 'use this template'],
      ],
    },
    work: {
      title: 'O que eu fiz',
      description: 'Estruturei as duas aplicações, defini o caminho das requisições no backend e montei a vitrine de componentes. Também deixei pronto o fluxo de autenticação, o cliente da API, os testes e a automação de deploy. Na vitrine, o botão de copiar não usa um exemplo escrito à parte: a página lê o mesmo arquivo que está sendo renderizado. Se o componente mudar, o código entregue ao usuário muda junto.',
      highlights: [
        ['Base full-stack', 'monorepo com Next.js e Express separados'],
        ['Vitrine de componentes', '39 blocos organizados em 6 categorias'],
        ['Código copiável', 'cada preview lê o arquivo-fonte do componente'],
        ['API organizada', 'respostas, erros e chamadas seguem o mesmo contrato'],
        ['Autenticação', 'JWT do Supabase validado antes dos controllers'],
        ['Fluxo de trabalho', 'testes, lint, Docker, CI e regras para agentes'],
      ],
    },
    showcase: {
      title: 'Vitrine de componentes',
      alt: 'Vitrine do template com filtros, previews e botões para copiar o código',
      label: 'Vitrine real — filtros por categoria, preview do componente e cópia do código',
    },
    features: {
      title: 'Funcionalidades',
      categories: ['Cards', 'Feedback', 'Navegação', 'Botões', 'Conteúdo', 'Marketing'],
      items: [
        ['39 componentes para copiar e adaptar', 'A rota /componentes reúne Cards, Feedback, Navegação, Botões, Conteúdo e Marketing. Cada bloco aparece funcionando na tela, pode ser filtrado por categoria e tem um botão para copiar seu código. O código-fonte é lido diretamente do arquivo do componente, então preview e snippet não ficam fora de sincronia.'],
        ['Frontend e backend no mesmo repositório', 'O workspace separa frontend/ e backend/, mas mantém os comandos principais na raiz. O frontend usa Next.js com App Router; o backend segue Route → Middleware → Controller → Model. Os dois lados usam TypeScript estrito e aliases @/*, o que deixa a estrutura fácil de percorrer desde o primeiro dia.'],
        ['Autenticação do Supabase já ligada', 'O backend valida o Bearer token, cria o perfil no primeiro acesso e adiciona o usuário autenticado ao Request do Express. O domínio de usuário mostra o fluxo completo até o banco e serve como referência para os próximos domínios do projeto.'],
        ['Testes e verificações já configurados', 'Jest, React Testing Library, ESLint e typecheck já têm scripts nos dois workspaces. Os 11 testes atuais cobrem controle de acesso baseado em papéis, formato das respostas, tratamento de erros e um componente de interface. A base é pequena, mas o caminho para testar a próxima feature já existe.'],
        ['Do código ao deploy', 'Frontend e backend têm Dockerfiles próprios. O repositório também traz o workflow do GitHub Actions e um guia de deploy no Azure. As pastas .claude e .cursor guardam as convenções e rotinas do projeto para que pessoas e agentes de código trabalhem com o mesmo contexto.'],
      ],
    },
    architecture: {
      title: 'Como o template está montado',
      columns: [
        ['Frontend', ['Next.js 16 com App Router', 'React 19 e TypeScript estrito', 'sidebar responsiva em 3 modos', '39 componentes com preview']],
        ['Backend', ['Express 5 e TypeScript', 'Route → Middleware → Controller', 'Model isolando acesso ao banco', 'respostas e erros padronizados']],
        ['Dados e entrega', ['Supabase Auth e PostgreSQL', 'Dockerfiles para os dois apps', 'deploy no Azure via GitHub Actions', 'Jest, ESLint e typecheck']],
      ],
      diagram: `BROWSER
   │
   ▼
NEXT.JS 16 / APP ROUTER
   │
   ├──► SIDEBAR + PÁGINAS
   │
   ├──► VITRINE ──► PREVIEW ──► COPIAR ARQUIVO-FONTE
   │
   └──► API CLIENT + JWT
                    │
                    ▼
              EXPRESS 5
                    │
           ROUTE → MIDDLEWARE
                    │
          CONTROLLER → MODEL
                    │
                    ▼
          SUPABASE / POSTGRESQL`,
    },
    openSource: {
      title: 'Open source',
      description: 'O repositório está publicado como template na organização da 10xDev. Ao clicar em “Use this template”, o desenvolvedor recebe uma cópia própria com a estrutura, os componentes e as automações, sem carregar o histórico do repositório original.',
      items: ['vitrine integrada à branch principal', 'frontend e backend no mesmo workspace', 'README, testes e automações versionados'],
      alt: 'Repositório público template-nodejs-express-next-supabase no GitHub',
      label: 'Repositório público — use this template',
    },
    integration: {
      title: 'Onde ele entra na 10xDev',
      description: 'O template resolve o primeiro passo. Depois disso, os cards da 10xDev entram como referência para adicionar novas features sobre uma estrutura que o dev já conhece. Um entrega a base; o outro ajuda a continuar o projeto.',
    },
  },
  'en-US': {
    hero: {
      subtitle: 'Full-stack starter with Next.js, Express, Supabase, and a ready-to-use component showcase',
      description: 'I built this template because every new project required the same repetitive setup work: creating the structure, setting up authentication, organizing the API, configuring tests, and rebuilding basic components. The repository starts with a working frontend and backend, a user domain as a reference implementation, and 39 UI components ready to preview, copy, and adapt. This lets developers begin with business logic instead of setup.',
      role: 'Author · architecture, full-stack foundation, and component library',
      status: 'Open source · public',
    },
    overview: {
      title: 'Overview',
      stats: [
        ['39 blocks', 'copy-and-paste components'],
        ['6 categories', 'with filters and previews'],
        ['11 tests', 'backend and frontend'],
        ['1 click', 'use this template'],
      ],
    },
    work: {
      title: 'What I built',
      description: 'I structured both applications, defined the backend request flow, and built the component showcase. I also prepared the authentication flow, API client, tests, and deployment automation. In the showcase, the copy button does not use a separately maintained example: the page reads the same source file that renders the component. When a component changes, the code delivered to the user changes with it.',
      highlights: [
        ['Full-stack foundation', 'monorepo with separate Next.js and Express apps'],
        ['Component showcase', '39 blocks organized into 6 categories'],
        ['Copyable code', 'each preview reads the component source file'],
        ['Consistent API', 'responses, errors, and requests follow one contract'],
        ['Authentication', 'Supabase JWT validated before controllers'],
        ['Development workflow', 'tests, linting, Docker, CI, and agent guidelines'],
      ],
    },
    showcase: {
      title: 'Component showcase',
      alt: 'Template showcase with filters, component previews, and buttons to copy the code',
      label: 'Live showcase — category filters, component previews, and one-click code copying',
    },
    features: {
      title: 'Features',
      categories: ['Cards', 'Feedback', 'Navigation', 'Buttons', 'Content', 'Marketing'],
      items: [
        ['39 components to copy and adapt', 'The /componentes route brings together Cards, Feedback, Navigation, Buttons, Content, and Marketing. Each block runs directly on the page, can be filtered by category, and includes a button to copy its code. The source code is read directly from the component file, keeping the preview and snippet in sync.'],
        ['Frontend and backend in one repository', 'The workspace separates frontend/ and backend/ while keeping the main commands at the root. The frontend uses Next.js with the App Router; the backend follows Route → Middleware → Controller → Model. Both applications use strict TypeScript and @/* aliases, making the structure easy to navigate from day one.'],
        ['Supabase authentication already connected', 'The backend validates the Bearer token, creates a profile on first access, and attaches the authenticated user to the Express Request. The user domain demonstrates the complete flow to the database and serves as a reference for future domains.'],
        ['Tests and quality checks preconfigured', 'Jest, React Testing Library, ESLint, and type checking already have scripts in both workspaces. The existing 11 tests cover role-based authorization, response formats, error handling, and a UI component. The suite is small, but the path for testing the next feature is already in place.'],
        ['From code to deployment', 'The frontend and backend have separate Dockerfiles. The repository also includes a GitHub Actions workflow and an Azure deployment guide. The .claude and .cursor folders store project conventions and routines so developers and coding agents work with the same context.'],
      ],
    },
    architecture: {
      title: 'How the template is structured',
      columns: [
        ['Frontend', ['Next.js 16 with App Router', 'React 19 and strict TypeScript', 'responsive sidebar with 3 modes', '39 components with live previews']],
        ['Backend', ['Express 5 and TypeScript', 'Route → Middleware → Controller', 'Model isolates database access', 'standardized responses and errors']],
        ['Data and deployment', ['Supabase Auth and PostgreSQL', 'Dockerfiles for both applications', 'Azure deployment through GitHub Actions', 'Jest, ESLint, and type checking']],
      ],
      diagram: `BROWSER
   │
   ▼
NEXT.JS 16 / APP ROUTER
   │
   ├──► SIDEBAR + PAGES
   │
   ├──► SHOWCASE ──► PREVIEW ──► COPY SOURCE FILE
   │
   └──► API CLIENT + JWT
                    │
                    ▼
              EXPRESS 5
                    │
           ROUTE → MIDDLEWARE
                    │
          CONTROLLER → MODEL
                    │
                    ▼
          SUPABASE / POSTGRESQL`,
    },
    openSource: {
      title: 'Open source',
      description: 'The repository is published as a template under the 10xDev organization. By clicking “Use this template,” developers receive their own copy with the structure, components, and automation, without inheriting the original repository history.',
      items: ['showcase integrated into the main branch', 'frontend and backend in one workspace', 'README, tests, and automation tracked in version control'],
      alt: 'Public template-nodejs-express-next-supabase repository on GitHub',
      label: 'Public repository — use this template',
    },
    integration: {
      title: 'How it fits into 10xDev',
      description: 'The template handles the first step. From there, 10xDev cards provide practical references for adding new features to a structure the developer already understands. One delivers the foundation; the other helps move the project forward.',
    },
  },
}

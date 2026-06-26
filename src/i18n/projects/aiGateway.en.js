export const aiGatewayEn = {
  hero: {
    subtitle: 'LLM gateway in Go: one prompt, several models answering in parallel, with consensus and streaming',
    description: 'An HTTP service written in Go that sits in front of multiple AI model providers (local Ollama, OpenAI and Anthropic) behind a single API. It routes by provider, fires every model in parallel on the consensus endpoint and returns the answers over streaming. It ships with a React and Vite interface that sends the same prompt to several models and shows the answers streaming side by side, live. It runs with no API key at all using local models via Ollama, and accepts paid models such as Claude Sonnet, Claude Opus and GPT by switching one environment variable. The project grew out of the same multi-model orchestration I keep in production, rewritten here in Go to explore concurrency.',
    role: 'Author & Developer',
    period: '2026',
    status: 'Open source · public',
  },
  overview: {
    title: 'Overview',
    stats: [
      ['Go', 'concurrent backend, zero deps'],
      ['Parallel', 'every model at the same time'],
      ['Streaming', 'token by token over SSE'],
      ['No key', 'runs free with local Ollama'],
    ],
  },
  preview: {
    title: 'Preview',
    label: 'Compare Models: one prompt, several models answering side by side in streaming',
  },
  featuresTitle: 'Features',
  features: [
    {
      title: 'Parallel consensus across models',
      description: 'The consensus endpoint takes a prompt and fires every registered model at the same time, each on its own goroutine, then gathers the answers when they all finish. Total latency stays close to the slowest model, not the sum of all of them, which proves the concurrency gain. Each answer comes back with the model name and how long it took, so you compare quality and speed in one place.',
      screenshot: 'Consensus response with several models and each one latency',
      aspect: 'wide',
    },
    {
      title: 'Provider routing behind a single API',
      description: 'Each model becomes its own entry in the gateway, callable by name. Underneath, a common interface abstracts the providers: a deterministic mock for tests, local Ollama for free models and OpenAI and Anthropic adapters for paid ones. Adding a new model is registering one more entry, without touching the rest of the code.',
      screenshot: 'List of models available in the gateway',
      aspect: 'wide',
    },
    {
      title: 'Streaming over Server-Sent Events',
      description: 'Answers come out token by token over SSE, both on a direct model call and in the comparison interface. The client receives the chunks as the model generates them, with separate events for content, end and error. On the front, since the browser cannot POST with EventSource, the stream is consumed via fetch and ReadableStream.',
      screenshot: 'A response stream arriving token by token',
      aspect: 'wide',
    },
    {
      title: 'Compare Models interface in React and Vite',
      description: 'The SPA pulls the available models from the gateway itself and lays out one column per model. On submit, all columns start streaming at the same time, with a status indicator and latency per model. The dev server uses a proxy to talk to the gateway with no CORS.',
      screenshot: 'Compare Models screen with one streaming column per model',
      aspect: 'wide',
    },
    {
      title: 'Production ready',
      description: 'The service shuts down gracefully on SIGINT and SIGTERM, stopping new connections and waiting for in-flight ones. It has table-driven tests with a provider mock, a CI pipeline on GitHub Actions running format, vet, tests and build, and a multi-stage Dockerfile that produces a minimal distroless image.',
      screenshot: 'Green CI pipeline on GitHub Actions',
      aspect: 'wide',
    },
  ],
  architecture: {
    title: 'Architecture',
    columns: [
      ['Backend (Go)', ['net/http with method routing', 'Provider interface (mock, Ollama, OpenAI, Anthropic)', 'Parallel consensus (goroutines + WaitGroup)', 'Model registry from env', 'Graceful shutdown (SIGTERM/SIGINT)']],
      ['Front (React/Vite)', ['Compare Models SPA', 'Tailwind CSS', 'POST streaming via fetch + ReadableStream', 'CORS-free dev proxy', 'One column per model, in real time']],
      ['Quality & Deploy', ['Table-driven tests with mock', 'CI: gofmt, vet, go test, build', 'Multi-stage Dockerfile (distroless)', 'No external deps in the core', 'Local models and embeddings via Ollama']],
    ],
  },
  diagram: {
    title: 'Flow · Parallel consensus',
    subtitle: 'One prompt comes in, every model runs at once, the answers come back together',
    content: `POST /consensus
      │  { prompt }
      ▼
   REGISTRY ── picks every provider
      │
      ├──────────┬──────────┬──────────┐
      ▼          ▼          ▼          ▼
   OLLAMA     SONNET      OPUS        GPT      (each on its own goroutine)
      └──────────┴──────────┴──────────┘
                 │  WaitGroup
                 ▼
        ANSWERS + LATENCY  ──►  client / Compare Models`,
  },
  challenges: {
    title: 'Technical_Decisions',
    items: [
      ['Concurrency as the core', 'The use case matches Go strengths. Consensus fans out the calls across goroutines and fans in with a WaitGroup, so N models cost the time of the slowest, not the sum. Each provider receives the request context, which allows clean cancellation.'],
      ['Provider abstraction without bloat', 'A single interface covers local and paid models. Registering a model is just adding an entry to the registry, and two models from the same provider coexist because they have their own names. The deterministic mock lets everything run and be tested with no network and no cost.'],
      ['POST streaming in the browser', 'The browser EventSource only does GET, but the gateway exposes streaming over POST. On the front, the stream is read with fetch and ReadableStream, with a hand-written SSE parser that splits content, end and error.'],
      ['Free to run, paid when wanted', 'The default prefers the local Ollama model to avoid surprise cost. Paid providers only join when the API key exists, and model identifiers are configurable via env.'],
    ],
  },
}

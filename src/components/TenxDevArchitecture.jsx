import React from 'react';

const DiagramBlock = ({ title, subtitle, children }) => (
  <div className="space-y-3">
    <div>
      <p className="text-[10px] text-cyan-500/60 font-mono uppercase tracking-[0.22em]">{title}</p>
      <p className="mt-1 text-xs text-gray-500 font-mono">{subtitle}</p>
    </div>
    <div className="border border-cyan-500/15 bg-[#070707] p-6 overflow-x-auto">
      <pre className="text-xs sm:text-sm text-cyan-300/80 font-mono leading-7 min-w-[760px]">
        {children}
      </pre>
    </div>
  </div>
);

const TenxDevArchitecture = () => (
  <div className="space-y-8">
    <DiagramBlock
      title="Fluxo 01 · Importação e GitSync"
      subtitle="Do push no GitHub aos cards atualizados no projeto"
    >{`GITHUB APP
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

NEXT.JS ◄── SSE + REPLAY ◄── AGENT ORCHESTRATOR ◄── eventos do job`}</DiagramBlock>

    <DiagramBlock
      title="Fluxo 02 · Análises e debate"
      subtitle="O mesmo gateway atende melhorias, chat, arquitetura e review de commits"
    >{`CARD / COMMITS
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

        Auth/RBAC · rate limits · débito idempotente · Docker/Azure`}</DiagramBlock>
  </div>
);

export default TenxDevArchitecture;

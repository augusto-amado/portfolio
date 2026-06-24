import React from 'react';

const AboutSection = () => (
  <section id="about" className="space-y-8">
    <h2 className="text-3xl font-bold flex items-center gap-3 text-white font-mono">
      <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">&lt;</span>
      About_Me
      <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">/&gt;</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <p className="text-gray-300 text-lg leading-relaxed">
          Desenvolvedor full stack que constrói o produto inteiro, do banco de dados à interface.
          Já trabalhei em plataformas SaaS com IA, sistemas de gestão comercial em produção e integrações
          com pagamento, GitHub e WhatsApp.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Gosto de tirar a ideia do papel rápido e deixar de pé um produto que funciona: autenticação,
          painel de admin e deploy automatizado. No dia a dia trabalho com Next.js, React, Node.js,
          TypeScript, Supabase e PostgreSQL.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Hoje trabalho na 10xDev, na arquitetura e no desenvolvimento full-stack do produto.
          Procuro projetos onde eu possa fazer o mesmo: entregar algo que funciona, no prazo.
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-[#0a0a0a] border border-cyan-500/10 p-5 rounded-sm space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-widest text-cyan-400 border-b border-cyan-500/20 pb-2">
            Quick Facts
          </h3>
          <ul className="space-y-3 text-sm text-gray-400 font-mono">
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-0.5">&#9656;</span>
              <span>Desenvolvedor full-stack, 2+ anos em TI (Next.js, Node, TypeScript, Supabase)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-0.5">&#9656;</span>
              <span>Atuação em produtos web em produção com usuários reais</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-0.5">&#9656;</span>
              <span>Desenvolvimento assistido por IA (Claude, GPT, Gemini) com revisão crítica do código gerado</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-0.5">&#9656;</span>
              <span>Deploy em Azure e Vercel, Docker e CI/CD com GitHub Actions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-0.5">&#9656;</span>
              <span>Cursando Análise e Desenvolvimento de Sistemas (conclusão dez/2026)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-0.5">&#9656;</span>
              <span>Inglês avançado &middot; disponível para remoto</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

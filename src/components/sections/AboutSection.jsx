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
          Desenvolvedor Full Stack com experiência real construindo produtos do zero — do banco de dados à interface do usuário.
          Já criei plataformas SaaS com inteligência artificial, sistemas de gestão comercial em produção e integrações
          com APIs de pagamento, GitHub e WhatsApp.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Meu diferencial é transformar ideias em software funcionando rápido. Não entrego só código — entrego
          produto: com autenticação, painel admin, deploy automatizado e pronto pra escalar. Trabalho com
          Next.js, React, Node.js, TypeScript, Supabase e PostgreSQL no dia a dia.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Atualmente sou cofundador e CTO da 10xdev, onde lidero toda a arquitetura técnica.
          Busco projetos freelance onde posso aplicar essa mesma mentalidade: entregar valor real, no prazo, com qualidade.
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
              <span>2+ anos em TI, foco em desenvolvimento full-stack</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-0.5">&#9656;</span>
              <span>2 produtos em produção com usuários reais</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-0.5">&#9656;</span>
              <span>Experiência com IA (Claude, GPT, Gemini)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-0.5">&#9656;</span>
              <span>Deploy em Azure, Vercel e Docker</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-0.5">&#9656;</span>
              <span>Disponível para projetos remotos</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

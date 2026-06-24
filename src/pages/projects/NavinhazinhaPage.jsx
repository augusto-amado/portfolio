import React from 'react';
import {
  Bot,
  Boxes,
  Crosshair,
  Cpu,
  Database,
  Gamepad2,
  Gauge,
  Layers3,
  MonitorCheck,
  Music2,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import ProjectLayout, { FeatureSection, StatCard } from '@/components/ProjectLayout';

const aiFindings = [
  {
    title: 'Input incompatível com o projeto',
    symptom: 'O código compilava, mas quebrava assim que o jogo tentava ler o teclado.',
    detection: 'Antes de rodar, conferi o activeInputHandler nas configurações do Unity.',
    fix: 'Ativei o modo Both para manter a API usada pelo jogo sem desabilitar o Input System novo.',
  },
  {
    title: 'Sprites piscando sem erro nos logs',
    symptom: 'Os inimigos piscavam quando um tiro ou outro sprite passava por cima.',
    detection: 'Não havia erro no console. O problema só apareceu jogando e olhando a tela.',
    fix: 'Separei fundo, inimigos, nave, tiros e efeitos com sortingOrder explícito.',
  },
  {
    title: 'Inimigo teleportando na transição',
    symptom: 'O atirador saltava para o lado quando terminava a descida e começava a atacar.',
    detection: 'Outra falha sem log: dava para perceber apenas acompanhando o movimento.',
    fix: 'Fiz a amplitude da senoide crescer de zero até o valor final durante a transição.',
  },
];

const technicalChallenges = [
  {
    title: 'Dar uma identidade para cada inimigo',
    description: 'O atirador entra em posição e solta rajadas; o zigue atravessa a tela em senoide; o perseguidor mira a nave e avança oscilando; o tanque acompanha devagar e dispara em leque. Não são apenas sprites diferentes: cada um obriga o jogador a reagir de um jeito.',
  },
  {
    title: 'Fazer a partida crescer sem usar fases fixas',
    description: 'Cada tipo de inimigo tem seu próprio relógio. Com o passar do tempo entram novos padrões, as ondas ficam maiores e os intervalos diminuem. Fácil, Normal e Difícil reaproveitam a mesma lógica e mudam apenas ritmo, velocidade e vidas.',
  },
  {
    title: 'Remover objetos no meio do frame sem quebrar os loops',
    description: 'Tiros, meteoros, itens, partículas e inimigos ficam em listas separadas. Eu percorro todas de trás para frente, então uma colisão pode destruir e remover um item sem deslocar os índices que ainda serão processados.',
  },
  {
    title: 'O limite de colocar o jogo inteiro em um script',
    description: 'Para terminar meu primeiro jogo em um fim de semana, concentrei tudo em um MonoBehaviour. Funcionou para esse tamanho, mas o arquivo já mistura controles, regras, desenho, áudio e ranking. Se eu continuar o projeto, a primeira mudança será separar esses sistemas e reaproveitar objetos em vez de criar e destruir tantos GameObjects.',
  },
];

const desafiosTecnicos = [
  {
    title: 'O jogo inteiro sem o motor de física',
    desc: 'Não usei Rigidbody nem Collider: toda colisão é AABB própria com bounds.Intersects, e cada tipo de objeto vive em sua lista. Dá controle total e previsível, mas exigiu percorrer as listas de trás para frente para destruir um objeto no mesmo frame sem bagunçar os índices ainda não processados.',
  },
  {
    title: 'Inimigos com comportamento próprio, sem pathfinding',
    desc: 'Cada inimigo é uma função de movimento, não um agente de navegação. O atirador se reposiciona no seu X e dispara rajadas; o perseguidor mira uma vez e desce em linha reta com zigzag; o tanque mira o leque em você. O perseguidor ainda antecipa: estimo sua velocidade e aponto para onde você vai estar.',
  },
  {
    title: 'Mísseis teleguiados que não bugam',
    desc: 'O problema clássico de homing é o míssil orbitar o alvo sem nunca acertar. Resolvi travando o eixo vertical: o míssil sempre sobe e só corrige o X em direção ao alvo mais próximo acima — então ele converge e acerta, sem U-turn nem giro.',
  },
  {
    title: 'Arte e áudio gerados em tempo de execução',
    desc: 'Zero asset importado. Cada sprite nasce de uma matriz de caracteres convertida em Texture2D com FilterMode.Point; cada som é montado com AudioClip.Create — ondas quadradas nos tiros, ruído nas explosões e arpejos nos power-ups.',
  },
  {
    title: 'Game feel na unha, sem bibliotecas',
    desc: 'Screen shake guardando a posição-base da câmera no LateUpdate para o tremor não acumular, flash de dano em overlay, partículas com anel de choque e os números de pontos convertendo a posição do mundo para a tela.',
  },
];

const NavinhazinhaPage = () => (
  <ProjectLayout
    title="Navinhazinha"
    subtitle="Meu primeiro jogo: um shoot'em-up retrô feito em Unity e C#"
    description="Fiz a Navinhazinha em um fim de semana. Queria aprender o ciclo completo de um jogo pequeno, então deixei tudo nascer pelo código: naves, inimigos, tiros, fundo, sons, efeitos e interface. Usei Claude Code e Codex durante o desenvolvimento, mas não escondi os erros que apareceram. O DEV-LOG registra o que saiu errado, como percebi e o que precisei corrigir."
    role="Desenvolvedor solo"
    period="2026"
    status="Projeto concluído"
    tags={['Unity 6.5', 'C#', '2D', 'Pixel Art', 'Áudio procedural', 'IA assistida']}
  >
    <section className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
        <span className="text-cyan-400">#</span>
        Visão geral
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard value="1.094" label="linhas de C#" />
        <StatCard value="0" label="assets externos" />
        <StatCard value="4" label="tipos de inimigo" />
        <StatCard value="3" label="falhas de IA documentadas" />
      </div>
    </section>

    <Separator className="bg-cyan-500/20" />

    <section className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
        <span className="text-cyan-400">$</span>
        O que eu fiz
      </h2>
      <div className="border-l-2 border-cyan-500/30 pl-6 py-2 bg-gradient-to-r from-cyan-500/5 to-transparent">
        <p className="text-gray-300 leading-relaxed">
          Fiz o projeto sozinho, do primeiro movimento da nave até a tela de recordes. Isso incluiu
          regras, inimigos, progressão, colisões, arte e som. Claude Code e Codex ajudaram a escrever
          partes do jogo, mas eu conferi as configurações do Unity, rodei cada mudança e corrigi o
          que não funcionava. Dois dos bugs mais chatos nem apareciam no console: só ficaram claros
          quando joguei e observei o resultado.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[
          ['Jogo completo', 'menu, partida, recordes e game over'],
          ['Visual', 'sprites, fundo e HUD feitos por código'],
          ['Som', 'tons, ruídos e arpejos gerados em C#'],
          ['Inimigos', 'quatro padrões de movimento e ataque'],
          ['Dificuldade', 'três modos e ritmo crescente'],
          ['DEV-LOG', 'os erros da IA que apareceram no caminho'],
        ].map(([feature, detail]) => (
          <div key={feature} className="bg-[#0a0a0a] border border-cyan-500/10 p-4 rounded-sm hover:border-cyan-500/30 transition-colors">
            <div className="text-cyan-400 font-mono font-bold text-sm">{feature}</div>
            <div className="text-[11px] text-gray-500 font-mono mt-1 leading-snug">{detail}</div>
          </div>
        ))}
      </div>
    </section>

    <Separator className="bg-cyan-500/20" />

    <section className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
        <span className="text-cyan-400">&lt;</span>
        Preview
        <span className="text-cyan-400">/&gt;</span>
      </h2>
      <figure className="space-y-3">
        <div className="border border-cyan-500/20 bg-[#070b12] p-3 shadow-[0_0_35px_rgba(34,211,238,0.08)]">
          <img
            src="/navinhazinha-gameplay.png"
            alt="Navinhazinha rodando no Unity, com nave, inimigos, meteoro e power-up"
            className="w-full h-auto"
          />
        </div>
        <figcaption className="text-xs text-cyan-500/60 font-mono uppercase tracking-wider text-center">
          Nada aqui é asset importado: nave, inimigos, fundo, HUD e efeitos são gerados por código
        </figcaption>
      </figure>
    </section>

    <Separator className="bg-cyan-500/20" />

    <section className="space-y-12">
      <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
        <span className="text-cyan-400">&gt;</span>
        Funcionalidades
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FeatureSection
          icon={<Gamepad2 className="h-5 w-5" />}
          title="Do menu ao ranking"
          description="O jogo tem tela de título, seleção de dificuldade, partida, entrada de iniciais e game over. Os cinco melhores resultados ficam salvos localmente com PlayerPrefs."
        />
        <FeatureSection
          icon={<Crosshair className="h-5 w-5" />}
          title="Inimigos que pedem reações diferentes"
          description="Atiradores soltam rajadas, inimigos zigue cruzam a tela, perseguidores avançam na direção da nave e tanques atacam em leque. Meteoros grandes ainda explodem em cinco a sete pedras menores."
        />
        <FeatureSection
          icon={<Gauge className="h-5 w-5" />}
          title="A partida aperta aos poucos"
          description="A cada 18 segundos o nível sobe. As ondas ganham mais inimigos, novos tipos entram em cena e o tempo entre os spawns diminui. Os três modos também mudam velocidade e quantidade inicial de vidas."
        />
        <FeatureSection
          icon={<Sparkles className="h-5 w-5" />}
          title="Power-ups e resposta visual"
          description="Tiro triplo, mísseis teleguiados e laser duram dez segundos. Explosões, rastros, números de pontos, tremor de câmera, flash de dano e fumaça na última vida deixam claro o que está acontecendo."
        />
        <FeatureSection
          icon={<Layers3 className="h-5 w-5" />}
          title="Pixel art escrita como texto"
          description="Cada sprite começa como uma pequena matriz de letras. Uma paleta transforma essas letras em pixels de uma Texture2D. Foi assim que desenhei a nave, os quatro inimigos, meteoros, tiros, corações e power-ups sem importar imagens."
        />
        <FeatureSection
          icon={<Music2 className="h-5 w-5" />}
          title="Sons gerados pelo próprio jogo"
          description="Os tiros são ondas quadradas, as explosões usam ruído e cada power-up toca um arpejo diferente. Tudo é montado com AudioClip.Create; não há arquivos de áudio no projeto."
        />
      </div>
    </section>

    <Separator className="bg-cyan-500/20" />

    <section className="space-y-8">
      <div className="flex items-center gap-3">
        <Bot className="h-6 w-6 text-cyan-400" />
        <h2 className="text-2xl font-bold text-white font-mono">Erros que a IA cometeu</h2>
      </div>
      <p className="text-gray-400 leading-relaxed max-w-3xl">
        Estes foram os três casos que mais ensinaram durante o projeto. Todos pareciam corretos
        lendo apenas o código; dois deles só apareceram quando olhei o jogo rodando.
      </p>
      <div className="grid grid-cols-1 gap-4">
        {aiFindings.map((finding, index) => (
          <article key={finding.title} className="grid grid-cols-1 md:grid-cols-[4rem_1fr] gap-4 border border-cyan-500/15 bg-[#080808] p-6">
            <div className="text-3xl font-mono font-bold text-cyan-500/40">0{index + 1}</div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white font-mono">{finding.title}</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm leading-relaxed">
                <p className="text-gray-400"><span className="block text-cyan-400 font-mono text-xs uppercase mb-1">Sintoma</span>{finding.symptom}</p>
                <p className="text-gray-400"><span className="block text-cyan-400 font-mono text-xs uppercase mb-1">Detecção</span>{finding.detection}</p>
                <p className="text-gray-400"><span className="block text-cyan-400 font-mono text-xs uppercase mb-1">Correção</span>{finding.fix}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <Separator className="bg-cyan-500/20" />

    <section className="space-y-8">
      <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
        <Boxes className="h-6 w-6 text-cyan-400" />
        Como o jogo está montado
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: <Workflow className="h-5 w-5" />,
            title: 'Partida',
            items: ['Update roteia o estado atual', 'LateUpdate aplica camera shake', 'timers dirigem spawn e armas', 'listas atualizadas de trás para frente'],
          },
          {
            icon: <Layers3 className="h-5 w-5" />,
            title: 'Imagem e som',
            items: ['Texture2D para sprites e fundos', 'AudioClip para tons e ruído', 'GameObjects criados por código', 'sortingOrder por tipo visual'],
          },
          {
            icon: <Database className="h-5 w-5" />,
            title: 'Regras e recordes',
            items: ['bounds para colisão AABB', 'PlayerPrefs para top 5', 'curva de dificuldade temporal', 'drops probabilísticos e score'],
          },
        ].map((column) => (
          <article key={column.title} className="bg-[#0a0a0a] border border-cyan-500/10 p-6 rounded-sm space-y-4">
            <div className="flex items-center gap-3 text-cyan-400">
              {column.icon}
              <h3 className="text-sm font-mono uppercase tracking-widest">{column.title}</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-400 font-mono">
              {column.items.map((item) => <li key={item}>— {item}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <div className="border border-cyan-500/15 bg-[#070707] p-6 overflow-x-auto">
        <pre className="text-xs sm:text-sm text-cyan-300/80 font-mono leading-7 min-w-[640px]">{`INPUT / TIME
     │
     ▼
STATE MACHINE ──► SPAWN TIMERS ──► ENEMIES / METEORS
     │                                  │
     ├──► PLAYER / WEAPONS ─────────────┤
     │                                  ▼
     └──► HUD / HIGH SCORE ◄──── COLLISION + SCORE
                         │
                         ▼
              SPRITES + AUDIO + FX`}</pre>
      </div>
    </section>

    <Separator className="bg-cyan-500/20" />

    <section className="space-y-8">
      <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
        <Cpu className="h-6 w-6 text-cyan-400" />
        Desafios técnicos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {desafiosTecnicos.map((d, index) => (
          <article key={d.title} className="border border-cyan-500/15 bg-[#080808] p-5 space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-xl font-mono font-bold text-cyan-500/40">0{index + 1}</span>
              <h3 className="text-white font-mono font-bold text-sm leading-snug">{d.title}</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{d.desc}</p>
          </article>
        ))}
      </div>
    </section>

    <Separator className="bg-cyan-500/20" />

    <section className="space-y-8">
      <h2 className="text-2xl font-bold flex items-center gap-3 text-white font-mono">
        <Workflow className="h-6 w-6 text-cyan-400" />
        Decisões e limites
      </h2>
      <div className="space-y-6">
        {technicalChallenges.map((challenge) => (
          <div key={challenge.title} className="border-l-2 border-cyan-500/20 pl-6 py-2 hover:border-cyan-500/50 transition-colors">
            <h3 className="text-white font-mono font-bold text-sm">{challenge.title}</h3>
            <p className="text-gray-400 text-sm mt-1 leading-relaxed">{challenge.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="border-l-2 border-cyan-400 bg-cyan-500/5 p-6 md:p-8 space-y-3">
      <div className="flex items-center gap-3 text-cyan-400">
        <MonitorCheck className="h-5 w-5" />
        <h2 className="font-mono font-bold uppercase tracking-wider">O que ficou deste projeto</h2>
      </div>
      <p className="text-gray-300 leading-relaxed max-w-3xl">
        Ver o código compilar foi só o começo. Eu precisei conferir o projeto, jogar, observar os
        movimentos e prestar atenção no que não aparecia nos logs. Foi aí que este primeiro jogo
        virou também uma aula prática sobre como usar IA sem entregar a revisão para ela.
      </p>
    </section>
  </ProjectLayout>
);

export default NavinhazinhaPage;

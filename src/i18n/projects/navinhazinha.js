export const navinhazinhaTranslations = {
  'pt-BR': {
    hero: {
      subtitle: "Meu primeiro jogo: um shoot 'em up retrô feito em Unity e C#",
      description: 'Fiz a Navinhazinha em um fim de semana. Queria aprender o ciclo completo de um jogo pequeno, então deixei tudo nascer pelo código: naves, inimigos, tiros, fundo, sons, efeitos e interface. Usei Claude Code e Codex durante o desenvolvimento, mas não escondi os erros que apareceram. O DEV-LOG registra o que saiu errado, como percebi e o que precisei corrigir.',
      role: 'Desenvolvedor solo',
      status: 'Projeto concluído',
      tags: ['Unity 6.5', 'C#', '2D', 'Pixel Art', 'Áudio procedural', 'IA assistida'],
      demoLabel: 'Jogar agora',
    },
    overview: {
      title: 'Visão geral',
      stats: [
        ['1.094', 'linhas de C#'],
        ['0', 'assets externos'],
        ['4', 'tipos de inimigo'],
        ['3', 'falhas de IA documentadas'],
      ],
    },
    work: {
      title: 'O que eu fiz',
      description: 'Fiz o projeto sozinho, do primeiro movimento da nave até a tela de recordes. Isso incluiu regras, inimigos, progressão, colisões, arte e som. Claude Code e Codex ajudaram a escrever partes do jogo, mas eu conferi as configurações do Unity, rodei cada mudança e corrigi o que não funcionava. Dois dos bugs mais chatos nem apareciam no console: só ficaram claros quando joguei e observei o resultado.',
      highlights: [
        ['Jogo completo', 'menu, partida, recordes e game over'],
        ['Visual', 'sprites, fundo e HUD feitos por código'],
        ['Som', 'tons, ruídos e arpejos gerados em C#'],
        ['Inimigos', 'quatro padrões de movimento e ataque'],
        ['Dificuldade', 'três modos e ritmo crescente'],
        ['DEV-LOG', 'os erros da IA que apareceram no caminho'],
      ],
    },
    preview: {
      title: 'Preview',
      alt: 'Navinhazinha rodando no Unity, com nave, inimigos, meteoro e power-up',
      caption: 'Nada aqui é asset importado: nave, inimigos, fundo, HUD e efeitos são gerados por código',
    },
    features: {
      title: 'Funcionalidades',
      items: [
        ['Do menu ao ranking', 'O jogo tem tela de título, seleção de dificuldade, partida, entrada de iniciais e game over. Os cinco melhores resultados ficam salvos localmente com PlayerPrefs.'],
        ['Inimigos que pedem reações diferentes', 'Atiradores soltam rajadas, inimigos em zigue-zague cruzam a tela, perseguidores avançam na direção da nave e tanques atacam em leque. Meteoros grandes ainda explodem em cinco a sete pedras menores.'],
        ['A partida aperta aos poucos', 'A cada 18 segundos o nível sobe. As ondas ganham mais inimigos, novos tipos entram em cena e o tempo entre os spawns diminui. Os três modos também mudam velocidade e quantidade inicial de vidas.'],
        ['Power-ups e resposta visual', 'Tiro triplo, mísseis teleguiados e laser duram dez segundos. Explosões, rastros, números de pontos, tremor de câmera, flash de dano e fumaça na última vida deixam claro o que está acontecendo.'],
        ['Pixel art escrita como texto', 'Cada sprite começa como uma pequena matriz de letras. Uma paleta transforma essas letras em pixels de uma Texture2D. Foi assim que desenhei a nave, os quatro inimigos, meteoros, tiros, corações e power-ups sem importar imagens.'],
        ['Sons gerados pelo próprio jogo', 'Os tiros são ondas quadradas, as explosões usam ruído e cada power-up toca um arpejo diferente. Tudo é montado com AudioClip.Create; não há arquivos de áudio no projeto.'],
      ],
    },
    aiErrors: {
      title: 'Erros que a IA cometeu',
      intro: 'Estes foram os três casos que mais ensinaram durante o projeto. Todos pareciam corretos lendo apenas o código; dois deles só apareceram quando olhei o jogo rodando.',
      labels: ['Sintoma', 'Detecção', 'Correção'],
      findings: [
        ['Input incompatível com o projeto', 'O código compilava, mas quebrava assim que o jogo tentava ler o teclado.', 'Antes de rodar, conferi o activeInputHandler nas configurações do Unity.', 'Ativei o modo Both para manter a API usada pelo jogo sem desabilitar o Input System novo.'],
        ['Sprites piscando sem erro nos logs', 'Os inimigos piscavam quando um tiro ou outro sprite passava por cima.', 'Não havia erro no console. O problema só apareceu jogando e olhando a tela.', 'Separei fundo, inimigos, nave, tiros e efeitos com sortingOrder explícito.'],
        ['Inimigo teleportando na transição', 'O atirador saltava para o lado quando terminava a descida e começava a atacar.', 'Outra falha sem log: dava para perceber apenas acompanhando o movimento.', 'Fiz a amplitude da senoide crescer de zero até o valor final durante a transição.'],
      ],
    },
    architecture: {
      title: 'Como o jogo está montado',
      columns: [
        ['Partida', ['Update roteia o estado atual', 'LateUpdate aplica camera shake', 'timers dirigem spawn e armas', 'listas atualizadas de trás para frente']],
        ['Imagem e som', ['Texture2D para sprites e fundos', 'AudioClip para tons e ruído', 'GameObjects criados por código', 'sortingOrder por tipo visual']],
        ['Regras e recordes', ['bounds para colisão AABB', 'PlayerPrefs para top 5', 'curva de dificuldade temporal', 'drops probabilísticos e pontuação']],
      ],
    },
    technical: {
      title: 'Desafios técnicos',
      items: [
        ['O jogo inteiro sem o motor de física', 'Não usei Rigidbody nem Collider: toda colisão é AABB própria com bounds.Intersects, e cada tipo de objeto vive em sua lista. Dá controle total e previsível, mas exigiu percorrer as listas de trás para frente para destruir um objeto no mesmo frame sem bagunçar os índices ainda não processados.'],
        ['Inimigos com comportamento próprio, sem pathfinding', 'Cada inimigo é uma função de movimento, não um agente de navegação. O atirador se reposiciona no seu X e dispara rajadas; o perseguidor mira uma vez e desce em linha reta com zigzag; o tanque mira o leque em você. O perseguidor ainda antecipa: estimo sua velocidade e aponto para onde você vai estar.'],
        ['Mísseis teleguiados que não bugam', 'O problema clássico de homing é o míssil orbitar o alvo sem nunca acertar. Resolvi travando o eixo vertical: o míssil sempre sobe e só corrige o X em direção ao alvo mais próximo acima — então ele converge e acerta, sem U-turn nem giro.'],
        ['Arte e áudio gerados em tempo de execução', 'Zero asset importado. Cada sprite nasce de uma matriz de caracteres convertida em Texture2D com FilterMode.Point; cada som é montado com AudioClip.Create — ondas quadradas nos tiros, ruído nas explosões e arpejos nos power-ups.'],
        ['Game feel construído do zero, sem bibliotecas', 'Screen shake guardando a posição-base da câmera no LateUpdate para o tremor não acumular, flash de dano em overlay, partículas com anel de choque e os números de pontos convertendo a posição do mundo para a tela.'],
      ],
    },
    decisions: {
      title: 'Decisões e limites',
      items: [
        ['Dar uma identidade para cada inimigo', 'O atirador entra em posição e solta rajadas; o zigue atravessa a tela em senoide; o perseguidor mira a nave e avança oscilando; o tanque acompanha devagar e dispara em leque. Não são apenas sprites diferentes: cada um obriga o jogador a reagir de um jeito.'],
        ['Fazer a partida crescer sem usar fases fixas', 'Cada tipo de inimigo tem seu próprio relógio. Com o passar do tempo entram novos padrões, as ondas ficam maiores e os intervalos diminuem. Fácil, Normal e Difícil reaproveitam a mesma lógica e mudam apenas ritmo, velocidade e vidas.'],
        ['Remover objetos no meio do frame sem quebrar os loops', 'Tiros, meteoros, itens, partículas e inimigos ficam em listas separadas. Eu percorro todas de trás para frente, então uma colisão pode destruir e remover um item sem deslocar os índices que ainda serão processados.'],
        ['O limite de colocar o jogo inteiro em um script', 'Para terminar meu primeiro jogo em um fim de semana, concentrei tudo em um MonoBehaviour. Funcionou para esse tamanho, mas o arquivo já mistura controles, regras, desenho, áudio e ranking. Se eu continuar o projeto, a primeira mudança será separar esses sistemas e reaproveitar objetos em vez de criar e destruir tantos GameObjects.'],
      ],
    },
    takeaway: {
      title: 'O que ficou deste projeto',
      description: 'Ver o código compilar foi só o começo. Eu precisei conferir o projeto, jogar, observar os movimentos e prestar atenção no que não aparecia nos logs. Foi aí que este primeiro jogo virou também uma aula prática sobre como usar IA sem entregar a revisão para ela.',
    },
  },
  'en-US': {
    hero: {
      subtitle: "My first game: a retro shoot 'em up built with Unity and C#",
      description: 'I built Navinhazinha over a weekend to learn the complete development cycle of a small game. Everything was created through code: ships, enemies, projectiles, backgrounds, sounds, effects, and UI. I used Claude Code and Codex during development, but I did not hide the mistakes they introduced. The DEV-LOG documents what went wrong, how I identified each issue, and what I changed to fix it.',
      role: 'Solo Developer',
      status: 'Completed project',
      tags: ['Unity 6.5', 'C#', '2D', 'Pixel Art', 'Procedural Audio', 'AI-assisted'],
      demoLabel: 'Play now',
    },
    overview: {
      title: 'Overview',
      stats: [
        ['1,094', 'lines of C#'],
        ['0', 'external assets'],
        ['4', 'enemy types'],
        ['3', 'documented AI failures'],
      ],
    },
    work: {
      title: 'What I built',
      description: 'I built the project independently, from the ship\'s first movement to the high-score screen. That included game rules, enemies, progression, collisions, art, and sound. Claude Code and Codex helped write parts of the game, but I checked the Unity settings, tested every change, and fixed what did not work. Two of the most difficult bugs never appeared in the Console; they only became clear through hands-on playtesting.',
      highlights: [
        ['Complete game', 'menu, gameplay, high scores, and game over'],
        ['Visuals', 'code-generated sprites, background, and HUD'],
        ['Sound', 'tones, noise, and arpeggios generated in C#'],
        ['Enemies', 'four movement and attack patterns'],
        ['Difficulty', 'three modes with increasing intensity'],
        ['DEV-LOG', 'AI mistakes discovered during development'],
      ],
    },
    preview: {
      title: 'Preview',
      alt: 'Navinhazinha running in Unity with the player ship, enemies, a meteor, and a power-up',
      caption: 'No imported assets: the ship, enemies, background, HUD, and effects are generated through code',
    },
    features: {
      title: 'Features',
      items: [
        ['From the main menu to the leaderboard', 'The game includes a title screen, difficulty selection, gameplay, initials entry, and a game-over screen. The five highest scores are saved locally with PlayerPrefs.'],
        ['Enemies that require different reactions', 'Shooters fire bursts, zigzag enemies cross the screen, pursuers charge toward the ship, and tanks attack with spread shots. Large meteors also explode into five to seven smaller rocks.'],
        ['Difficulty that ramps up over time', 'The level increases every 18 seconds. Waves gain more enemies, new types enter the game, and spawn intervals decrease. The three difficulty modes also change enemy speed and the player\'s starting lives.'],
        ['Power-ups and visual feedback', 'Triple shot, homing missiles, and laser power-ups last ten seconds. Explosions, trails, score popups, camera shake, damage flashes, and smoke when the player is down to the final life clearly communicate the game state.'],
        ['Pixel art written as text', 'Each sprite starts as a small matrix of characters. A palette maps those characters to pixels in a Texture2D. I used this approach to draw the ship, four enemy types, meteors, projectiles, hearts, and power-ups without importing images.'],
        ['Audio generated by the game', 'Projectiles use square waves, explosions use noise, and each power-up plays a different arpeggio. Everything is built with AudioClip.Create; the project contains no audio files.'],
      ],
    },
    aiErrors: {
      title: 'Mistakes the AI made',
      intro: 'These three cases taught me the most during the project. All of them looked correct when reviewing the code alone; two only surfaced when I watched the game running.',
      labels: ['Symptom', 'Detection', 'Fix'],
      findings: [
        ['Input setup incompatible with the project', 'The code compiled, but the game crashed as soon as it tried to read keyboard input.', 'Before running it, I checked activeInputHandler in the Unity project settings.', 'I enabled Both mode to preserve the API used by the game without disabling the new Input System.'],
        ['Sprites flickering without log errors', 'Enemies flickered whenever a projectile or another sprite passed over them.', 'The Console showed no errors. The problem only appeared while playing and watching the screen.', 'I separated the background, enemies, ship, projectiles, and effects with explicit sortingOrder values.'],
        ['Enemy teleporting during a transition', 'The shooter jumped sideways when it finished descending and began attacking.', 'This was another issue with no log output; I could only identify it by watching the movement.', 'I made the sine-wave amplitude grow from zero to its final value during the transition.'],
      ],
    },
    architecture: {
      title: 'How the game is structured',
      columns: [
        ['Game loop', ['Update routes the current state', 'LateUpdate applies camera shake', 'timers drive spawning and weapons', 'lists are iterated in reverse']],
        ['Visuals and audio', ['Texture2D for sprites and backgrounds', 'AudioClip for tones and noise', 'GameObjects created through code', 'sortingOrder by visual type']],
        ['Rules and high scores', ['bounds for AABB collision checks', 'PlayerPrefs for the top five scores', 'time-based difficulty curve', 'probabilistic drops and scoring']],
      ],
    },
    technical: {
      title: 'Technical challenges',
      items: [
        ['Building the entire game without the physics engine', 'I did not use Rigidbody or Collider components. Every collision uses custom AABB checks with bounds.Intersects, and each object type lives in its own list. This provides complete, predictable control, but required iterating through lists in reverse so objects could be destroyed within the same frame without shifting indices that had not yet been processed.'],
        ['Distinct enemy behavior without pathfinding', 'Each enemy follows a custom movement function rather than acting as a navigation agent. The shooter repositions along the X axis and fires bursts; the pursuer aims once and descends in a zigzag line; the tank aims its spread at the player. The pursuer also leads its target by estimating the player\'s velocity and aiming at the predicted position.'],
        ['Homing missiles that reliably hit their targets', 'A classic homing problem occurs when a missile orbits its target without ever hitting it. I solved this by constraining vertical movement: the missile always moves upward and only corrects its X position toward the nearest target above it. This makes it converge without U-turns or loops.'],
        ['Runtime-generated art and audio', 'The project uses no imported assets. Each sprite begins as a character matrix converted into a Texture2D with FilterMode.Point. Every sound is built with AudioClip.Create: square waves for projectiles, noise for explosions, and arpeggios for power-ups.'],
        ['Game feel built from scratch', 'Camera shake stores the camera\'s base position in LateUpdate to prevent drift. Other feedback includes a damage-flash overlay, shock-ring particles, and score popups that convert world positions to screen coordinates.'],
      ],
    },
    decisions: {
      title: 'Decisions and trade-offs',
      items: [
        ['Giving each enemy a distinct identity', 'The shooter moves into position and fires bursts; the zigzag enemy crosses the screen in a sine wave; the pursuer targets the ship and charges while oscillating; the tank tracks slowly and fires a spread. They are not merely different sprites: each one requires a different reaction from the player.'],
        ['Scaling the run without fixed stages', 'Each enemy type has its own timer. New patterns appear over time, waves grow larger, and intervals become shorter. Easy, Normal, and Hard reuse the same logic while changing pace, speed, and starting lives.'],
        ['Removing objects mid-frame without breaking loops', 'Projectiles, meteors, items, particles, and enemies are stored in separate lists. I iterate through every list in reverse, allowing a collision to destroy and remove an item without shifting indices that still need to be processed.'],
        ['The trade-off of building the entire game in one script', 'To finish my first game over a weekend, I kept everything in one MonoBehaviour. It worked at this scale, but the file now mixes input, rules, rendering, audio, and high-score logic. If I continue the project, my first change will be to separate these systems and pool objects instead of repeatedly creating and destroying GameObjects.'],
      ],
    },
    takeaway: {
      title: 'What I took away from this project',
      description: 'Getting the code to compile was only the beginning. I had to inspect the project, play the game, observe movement, and pay attention to issues that never appeared in the logs. That turned my first game into a practical lesson in using AI without outsourcing the review process to it.',
    },
  },
}

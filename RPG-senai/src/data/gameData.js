export const CLASSES = {
  WARRIOR: {
    name: 'HTML',
    title: 'O Construtor',
    icon: '🏗️',
    desc: 'Monta o esqueleto da página: títulos, textos, botões e imagens.',
    hp: 100, maxHp: 100, attack: 15, defense: 10, potions: 3
  },
  MAGE: {
    name: 'JavaScript',
    title: 'O Mago da Lógica',
    icon: '✨',
    desc: 'Dá vida ao site: faz botões reagirem, calcula e toma decisões.',
    hp: 60, maxHp: 60, attack: 25, defense: 5, potions: 4
  },
  ROGUE: {
    name: 'CSS',
    title: 'O Estilista',
    icon: '🎨',
    desc: 'Deixa tudo bonito: cores, tamanhos, fontes e animações.',
    hp: 80, maxHp: 80, attack: 20, defense: 7, potions: 3
  }
};

// ENEMIES: os vilões são os erros que todo programador encontra.
// "hint" explica o conceito com uma comparação do dia a dia.
export const ENEMIES = [
  {
    name: 'Bug de Sintaxe', icon: '🐛',
    hp: 40, maxHp: 40, attack: 10, defense: 2,
    hint: 'Esqueceu um ponto e vírgula ou fechou um parêntese errado. É como escrever uma frase sem pontuação: o computador não entende.'
  },
  {
    name: 'Loop Infinito', icon: '🌀',
    hp: 70, maxHp: 70, attack: 12, defense: 8,
    hint: 'Uma repetição que nunca termina. É como mandar alguém "dar voltas na quadra" e esquecer de dizer quando parar.'
  },
  {
    name: 'Erro 404', icon: '🚫',
    hp: 55, maxHp: 55, attack: 18, defense: 4,
    hint: 'Página não encontrada. O endereço existe no mapa, mas não tem ninguém morando lá.'
  },
  { name: 'Conflito de Merge', icon: '⚔️',
   hp: 60, maxHp: 60, attack: 20, defense: 10,
   hint: 'Dois desenvolvedores tentaram alterar a mesma linha de código ao mesmo tempo. É como dois autores disputando a mesma página.'
   },
   { name: 'Stack Overflow', icon: '📚',
    hp: 80, maxHp: 80, attack: 12, defense: 6, 
    hint: 'A memória estourou de tantas tarefas acumuladas sem resolução. Como empilhar pratos até a torre perder o equilíbrio e desabar.'
    },
    { name: 'Git sem commit', icon: '🐈‍⬛',
    hp: 90, maxHp: 90, attack: 22, defense: 6, 
    hint: 'Você alterou o código, mas não empacotou as mudanças. Se o computador reiniciar agora, todo o seu progresso vai desaparecer no vazio.'
    },
    { name: 'Race Condition', icon: '🏃',
      hp: 45, maxHp: 45, attack: 13, defense: 3,
      hint: 'Duas tarefas correndo para mudar o mesmo dado ao mesmo tempo. O resultado depende de quem chegar primeiro, gerando o caos.'
     },
     { name: 'Erro 500 (Internal Server Error)', icon: '💥', 
      hp: 75, maxHp: 75, attack: 17, defense: 8, 
      hint: 'O servidor pegou fogo por dentro, mas não sabe dizer o motivo. É o equivalente a responder "deu ruim" sem dar nenhuma explicação.'

      }
];

// SCENARIOS: lugares que um desenvolvedor visita no dia a dia.
export const SCENARIOS = [
  'Você abre o VS Code pela primeira vez. A tela está em branco e o cursor pisca, esperando o primeiro comando. Uma pasta chamada "meu-site" está à sua frente.',
  'Você entra no arquivo index.html. Algumas tags <div> foram abertas e nunca fechadas, e algo se mexe entre as linhas de código.',
  'Na pasta do CSS, as cores brigam entre si. Um botão fugiu da tela e ninguém sabe onde ele foi parar.',
  'No console do navegador, mensagens vermelhas aparecem uma atrás da outra. Alguém esqueceu de testar o código antes de publicar.'
];

export const DICAS = [
  'HTML é o esqueleto da página, CSS é a roupa e JavaScript é o cérebro.',
  'Uma variável é uma caixinha com nome que guarda uma informação.',
  'Todo erro é uma pista. Leia a mensagem em vermelho com calma.',
  'Programar é dar instruções passo a passo para o computador.'
];
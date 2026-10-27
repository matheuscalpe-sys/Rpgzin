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
import React from 'react';
import { Code } from 'lucide-react';
import { CLASSES } from '../data/gameData';
import { TermButton } from './ui/TermButton';

const ACCENT = {
  WARRIOR: { border: 'border-orange-400', title: 'text-orange-400', bg: 'bg-orange-950/40', glow: 'shadow-[0_0_15px_rgba(251,146,60,0.35)]' },
  MAGE: { border: 'border-yellow-300', title: 'text-yellow-300', bg: 'bg-yellow-950/40', glow: 'shadow-[0_0_15px_rgba(253,224,71,0.35)]' },
  ROGUE: { border: 'border-blue-400', title: 'text-blue-400', bg: 'bg-blue-950/40', glow: 'shadow-[0_0_15px_rgba(96,165,250,0.35)]' }
};

export const Customization = ({ player, setPlayer, onStartGame }) => {
  const selected = player.classKey ? CLASSES[player.classKey] : null;
  const nomeHeroi = player.name || '';

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[80vh] px-4 animate-fade-in">
      {/* Título */}
      <div className="text-center mb-8 w-full">
        <Code className="w-20 h-20 mx-auto mb-4 text-sky-400 opacity-90 animate-pulse" aria-hidden="true" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-[0.2em] mb-3 text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)] border-b border-sky-800 pb-4">
          CODE QUEST
        </h1>
        <p className="text-sky-500 text-sm tracking-widest uppercase">
          Aprenda programação derrotando bugs
        </p>
      </div>

      {/* Container principal */}
      <div className="w-full bg-sky-950/20 p-6 md:p-8 border border-sky-800/80 rounded-lg shadow-[0_0_20px_rgba(56,189,248,0.08)]">

        {/* Passo 1: nome (variável) */}
        <div className="mb-8">
          <label htmlFor="nome-heroi" className="block text-xs md:text-sm mb-2 text-sky-300">
            <span className="com">{'// 1. Dê um nome ao seu herói (um dado que o programa vai guardar)'}</span>
          </label>
          <input
            id="nome-heroi"
            type="text"
            value={nomeHeroi}
            onChange={(e) => setPlayer({ ...player, name: e.target.value })}
            className="w-full bg-black border-b-2 border-sky-500 text-sky-300 focus:outline-none focus:border-sky-300 font-mono text-xl py-2 placeholder-slate-600 tracking-wider transition-colors"
            placeholder="Digite seu nome"
            maxLength={15}
          />
        </div>

        {/* Passo 2: linguagem (classe) */}
        <div className="mb-8">
          <p className="block text-xs md:text-sm mb-4 text-sky-300 text-center">
            <span className="com">{'// 2. Escolha sua linguagem (cada uma tem um superpoder)'}</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(CLASSES).map(([key, c]) => {
              const isSelected = player.classKey === key;
              const a = ACCENT[key];
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setPlayer({ ...player, ...c, name: player.name, classKey: key })}
                  className={`p-4 border text-left transition-all duration-200 cursor-pointer rounded ${
                    isSelected
                      ? `${a.border} ${a.bg} ${a.glow} scale-105`
                      : 'border-slate-700 bg-black/50 hover:border-sky-500 hover:bg-sky-950/20'
                  }`}
                >
                  <div className="text-3xl mb-1" aria-hidden="true">{c.icon}</div>
                  <h3 className={`font-bold text-lg ${a.title}`}>{c.name}</h3>
                  <p className="text-xs text-slate-400 mb-2 border-b border-slate-700 pb-2">{c.title}</p>
                  <p className="text-xs text-slate-300 mb-3 leading-snug">{c.desc}</p>
                  <div className="text-xs space-y-1 text-sky-300/90 font-mono">
                    <p>vida: {c.hp}</p>
                    <p>ataque: {c.attack}</p>
                    <p>defesa: {c.defense}</p>
                    <p>cafés ☕: {c.potions}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Prévia do código: mostra na tela o que é uma variável/objeto */}
        <div className="mb-8">
          <p className="text-xs md:text-sm mb-2 text-sky-300">
            <span className="com">{'// Olha só: suas escolhas viram código de verdade!'}</span>
          </p>
          <pre className="code-block" aria-label="Prévia do código do personagem">
            <span className="kw">const</span> <span className="var">jogador</span> = {'{'}{'\n'}
            {'  '}nome: <span className="str">{`"${nomeHeroi}"`}</span>,{'\n'}
            {'  '}linguagem: <span className="str">{`"${selected ? selected.name : ''}"`}</span>,{'\n'}
            {'  '}vida: <span className="num">{selected ? selected.hp : 0}</span>,{'\n'}
            {'  '}cafes: <span className="num">{selected ? selected.potions : 0}</span>{'\n'}
            {'}'};
          </pre>
        </div>

        {/* Botão de iniciar */}
        <div className="flex justify-center mt-6">
          <TermButton
            onClick={onStartGame}
            disabled={!nomeHeroi.trim() || !player.classKey}
            className="w-full md:w-2/3 text-center py-3 text-lg tracking-widest shadow-[0_0_10px_rgba(56,189,248,0.2)]"
          >
            ▶ RODAR CÓDIGO
          </TermButton>
        </div>
      </div>
    </div>
  );
};
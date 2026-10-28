import React from 'react';
import { Trophy, ArrowRight, RefreshCw, Heart, Coffee } from 'lucide-react';
import { TermButton } from './ui/TermButton';

export const Victory = ({ player, onContinue, onRestart }) => {

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-4 max-w-2xl mx-auto">
      {/* Ícone e Título de Vitória */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500 mb-4 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
        <Trophy size={32} />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2 tracking-wide">
        SISTEMA CORRIGIDO!
      </h1>
      
      <p className="mb-6 text-slate-300">
        Parabéns, <span className="text-emerald-300 font-bold">{player.name}</span>! Você exterminou os 3 bugs e limpou o código do sistema.
      </p>

      {/* Exibição dos status salvos */}
      <div className="bg-sky-950/20 border border-sky-900/60 rounded-lg p-4 mb-6 w-full max-w-md flex justify-around items-center text-sm">
        <div className="flex items-center gap-2">
          <Heart size={16} className="text-red-400" />
          <span className="text-slate-300">Vida atual:</span>
          <span className="font-bold text-white">{player.hp}/{player.maxHp}</span>
        </div>
        <div className="flex items-center gap-2">
          <Coffee size={16} className="text-amber-400" />
          <span className="text-slate-300">Cafés restantes:</span>
          <span className="font-bold text-white">{player.potions}</span>
        </div>
      </div>

      {/* Bloco de terminal ilustrativo */}
      <pre className="code-block mb-8 w-full max-w-md text-left text-xs sm:text-sm bg-black/60 p-4 rounded border border-emerald-900/50">
        <code className="text-emerald-400">
          {`> npm run build --release\n`}
          <span className="text-slate-400">{`✔ Analyzing code base...\n`}</span>
          <span className="text-slate-400">{`✔ 0 bugs found.\n`}</span>
          <span className="text-emerald-300">{`✨ Build completed successfully!`}</span>
        </code>
      </pre>

      {/* Botões de Ação */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
        <TermButton
          onClick={onContinue}
          className="border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-black"
        >
          <span className="flex items-center justify-center gap-2 font-bold">
            CONTINUAR MODO INFINITO <ArrowRight size={18} />
          </span>
        </TermButton>

        <TermButton
          onClick={onRestart}
          className="border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white"
        >
          <span className="flex items-center justify-center gap-2">
            <RefreshCw size={18} /> NOVO JOGO (F5)
          </span>
        </TermButton>
      </div>
    </div>
  );
};
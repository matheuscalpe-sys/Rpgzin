import React, { useMemo } from 'react';
import { Heart, Coffee, Search, Bug } from 'lucide-react';
import { TermButton } from './ui/TermButton';
import { TypewriterText } from './ui/TypewriterText';
import { CLASSES, DICAS } from '../data/gameData';

export const Exploration = ({ player, storyText, typingComplete, setTypingComplete, onExplore, onEngageCombat }) => {
  const lang = player.classKey ? CLASSES[player.classKey] : null;

  // Uma dica nova a cada cena (muda sempre que o texto da história muda)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dica = useMemo(() => DICAS[Math.floor(Math.random() * DICAS.length)], [storyText]);

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col h-full">
      {/* Barra de status do desenvolvedor */}
      <div className="flex justify-between items-center border-b border-sky-900 pb-4 mb-6">
        <div>
          <span className="opacity-70 text-xs">DEV:</span>
          <span className="ml-2 font-bold">{player.name}</span>
          {lang && <span className="ml-2 text-xs text-slate-400">({lang.icon} {lang.name})</span>}
        </div>
        <div className="flex gap-4 text-sm">
          <span className="flex items-center gap-1" aria-label={`Vida: ${player.hp} de ${player.maxHp}`}>
            <Heart size={14} /> {player.hp}/{player.maxHp}
          </span>
          <span className="flex items-center gap-1" aria-label={`Cafés: ${player.potions}`}>
            <Coffee size={14} /> {player.potions}
          </span>
        </div>
      </div>

      {/* História */}
      <div className="flex-1 bg-sky-950/10 border border-sky-900/50 p-6 min-h-[300px] mb-4 whitespace-pre-wrap leading-relaxed shadow-[inset_0_0_20px_rgba(56,189,248,0.06)]">
        <TypewriterText text={storyText} speed={40} onComplete={() => setTypingComplete(true)} />
      </div>

      {/* Dica educativa (o espaço fica reservado para os botões não pularem) */}
      <div className="mb-6 min-h-[3rem]">
        {typingComplete && (
          <p className="text-sm text-yellow-200/90 border-l-2 border-yellow-300 pl-3">
            💡 Dica: {dica}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TermButton onClick={onExplore} disabled={!typingComplete}>
          <span className="flex items-center justify-center gap-2"><Search size={18} /> EXPLORAR O CÓDIGO</span>
        </TermButton>
        <TermButton
          onClick={onEngageCombat}
          disabled={!typingComplete}
          className="border-red-900 text-red-500 hover:bg-red-900 hover:text-red-100"
        >
          <span className="flex items-center justify-center gap-2"><Bug size={18} /> CAÇAR UM BUG</span>
        </TermButton>
      </div>
    </div>
  );
};
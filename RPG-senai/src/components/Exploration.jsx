import React from 'react';
import { Activity } from 'lucide-react';
import { TermButton } from './ui/TermButton';
import { TypewriterText } from './ui/TypewriterText';


export const Exploration = ({ player, storyText, typingComplete, setTypingComplete, onExplore, onEngageCombat }) => {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col h-full">
      <div className="flex justify-between items-center border-b border-green-900 pb-4 mb-6">
        <div>
          <span className="opacity-70 text-xs">OPERADOR:</span>
          <span className="ml-2 font-bold">{player.name}</span>
        </div>
        <div className="flex gap-4 text-sm">
          <span className="flex items-center gap-1"><Activity size={14}/> {player.hp}/{player.maxHp}</span>
        </div>
      </div>


      <div className="flex-1 bg-green-950/10 border border-green-900/50 p-6 min-h-[300px] mb-6 whitespace-pre-wrap leading-relaxed shadow-[inset_0_0_20px_rgba(0,255,0,0.05)]">
        <TypewriterText text={storyText} speed={40} onComplete={() => setTypingComplete(true)} />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TermButton onClick={onExplore} disabled={!typingComplete}>
          [ SCANEAR ÁREA ]
        </TermButton>
        <TermButton onClick={onEngageCombat} disabled={!typingComplete} className="border-red-900 text-red-500 hover:bg-red-900 hover:text-red-100">
          [ ENGAJAR HOSTIL ]
        </TermButton>
      </div>
    </div>
  );
};
import React from 'react';
import { Crosshair, Activity } from 'lucide-react';
import { TermButton } from './ui/TermButton';
import { ProgressBar } from './ui/ProgressBar';


export const Combat = ({ player, enemy, combatLog, logEndRef, onAttack, onHeal }) => {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-8 border border-green-900 p-4 bg-black relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-900 opacity-30 font-bold text-4xl italic">
          VS
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-2 uppercase">{player.name}</h3>
          <ProgressBar current={player.hp} max={player.maxHp} label="INTEGRIDADE (HP)" />
          <div className="flex gap-4 text-xs opacity-70 mt-2">
            <span>ATK: {player.attack}</span>
            <span>DEF: {player.defense}</span>
          </div>
        </div>


        <div className="text-right">
          <h3 className="font-bold text-lg mb-2 text-red-400 uppercase">{enemy?.name}</h3>
          <ProgressBar current={enemy?.hp || 0} max={enemy?.maxHp || 1} label="INTEGRIDADE HOSTIL" colorClass="bg-red-600" />
          <div className="flex gap-4 justify-end text-xs opacity-70 mt-2 text-red-300">
            <span>ATK: {enemy?.attack}</span>
            <span>DEF: {enemy?.defense}</span>
          </div>
        </div>
      </div>


      <div className="h-64 border border-green-900 bg-green-950/10 p-4 overflow-y-auto font-mono text-sm space-y-2">
        {combatLog.map((log, i) => (
          <div key={i} className={log.includes('eliminado') ? 'text-green-300 font-bold' : log.includes('atacou você') ? 'text-red-400' : 'text-green-500'}>
            {log}
          </div>
        ))}
        <div ref={logEndRef} />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TermButton onClick={onAttack} disabled={enemy?.hp <= 0 || player.hp <= 0}>
          <span className="flex items-center justify-center gap-2"><Crosshair size={18}/> EXECUTAR ATAQUE</span>
        </TermButton>
        <TermButton onClick={onHeal} disabled={enemy?.hp <= 0 || player.hp <= 0}>
          <span className="flex items-center justify-center gap-2"><Activity size={18}/> USAR REPARO ({player.potions})</span>
        </TermButton>
      </div>
    </div>
  );
};
import React from 'react';
import { Zap, Coffee } from 'lucide-react';
import { TermButton } from './ui/TermButton';
import { ProgressBar } from './ui/ProgressBar';

// Cada linguagem ataca de um jeito (são só textos, a lógica do dano não muda)
const ATAQUES = {
  WARRIOR: 'LANÇAR <div>',
  MAGE: 'CHAMAR funcao()',
  ROGUE: 'APLICAR estilo'
};

// Define a cor de cada linha do registro de batalha
const corDoLog = (log) => {
  if (/eliminado|derrotado|corrigido/i.test(log)) return 'text-emerald-300 font-bold';
  if (/atacou você/i.test(log)) return 'text-red-400';
  return 'text-sky-400';
};

export const Combat = ({ player, enemy, combatLog, logEndRef, onAttack, onHeal }) => {
  const fimDeBatalha = enemy?.hp <= 0 || player.hp <= 0;

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
      {/* Placar: você x bug */}
      <div className="grid grid-cols-2 gap-8 border border-sky-900 p-4 bg-black relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sky-900 opacity-30 font-bold text-4xl italic" aria-hidden="true">
          VS
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">{player.name}</h3>
          <ProgressBar current={player.hp} max={player.maxHp} label="VIDA (HP)" colorClass="bg-emerald-400" />
          <div className="flex gap-4 text-xs opacity-70 mt-2">
            <span>ataque: {player.attack}</span>
            <span>defesa: {player.defense}</span>
          </div>
        </div>

        <div className="text-right">
          <h3 className="font-bold text-lg mb-2 text-red-400">{enemy?.icon} {enemy?.name}</h3>
          <ProgressBar current={enemy?.hp || 0} max={enemy?.maxHp || 1} label="VIDA DO BUG" colorClass="bg-red-600" />
          <div className="flex gap-4 justify-end text-xs opacity-70 mt-2 text-red-300">
            <span>ataque: {enemy?.attack}</span>
            <span>defesa: {enemy?.defense}</span>
          </div>
        </div>
      </div>

      {/* Explicação do bug em linguagem simples */}
      {enemy?.hint && (
        <div className="border border-yellow-900/60 bg-yellow-950/10 p-3 text-sm text-yellow-100/90">
          <span className="font-bold text-yellow-300">💡 Entenda o bug: </span>
          {enemy.hint}
        </div>
      )}

      {/* Registro da batalha */}
      <div
        role="log"
        aria-live="polite"
        className="h-64 border border-sky-900 bg-sky-950/10 p-4 overflow-y-auto font-mono text-sm space-y-2"
      >
        {combatLog.map((log, i) => (
          <div key={i} className={corDoLog(log)}>{log}</div>
        ))}
        <div ref={logEndRef} />
      </div>

      {/* Ações */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TermButton onClick={onAttack} disabled={fimDeBatalha}>
          <span className="flex items-center justify-center gap-2">
            <Zap size={18} /> {ATAQUES[player.classKey] || 'ATACAR'}
          </span>
        </TermButton>
        <TermButton onClick={onHeal} disabled={fimDeBatalha}>
          <span className="flex items-center justify-center gap-2">
            <Coffee size={18} /> TOMAR CAFÉ ({player.potions})
          </span>
        </TermButton>
      </div>
    </div>
  );
};
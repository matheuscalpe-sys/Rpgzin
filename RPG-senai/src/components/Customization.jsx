import React from 'react';
import { Terminal } from 'lucide-react';
import { CLASSES } from '../data/gameData';
import { TermButton } from './ui/TermButton';

export const Customization = ({ player, setPlayer, onStartGame }) => {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[80vh] px-4 animate-fade-in">
      {/* Título com destaque no centro */}
      <div className="text-center mb-8 w-full">
        <Terminal className="w-20 h-20 mx-auto mb-4 text-green-400 opacity-90 animate-pulse" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-[0.3em] mb-3 text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)] border-b border-green-800 pb-4">
          SISTEMA C.R.I.S.
        </h1>
        <p className="text-green-600 text-sm tracking-widest uppercase">
          INICIALIZANDO PERFIL DE USUÁRIO...
        </p>
      </div>

      {/* Container Principal */}
      <div className="w-full bg-green-950/20 p-6 md:p-8 border border-green-800/80 rounded-lg shadow-[0_0_20px_rgba(0,255,0,0.05)]">
        
        {/* Campo de Nome */}
        <div className="mb-8">
          <label className="block text-xs md:text-sm mb-2 opacity-80 text-green-400">
            {'>'} INSIRA SUA IDENTIFICAÇÃO:
          </label>
          <input 
            type="text" 
            value={player.name}
            onChange={(e) => setPlayer({ ...player, name: e.target.value.toUpperCase() })}
            className="w-full bg-black border-b-2 border-green-500 text-green-400 focus:outline-none focus:border-green-300 font-mono text-xl py-2 uppercase placeholder-green-900 tracking-wider transition-colors"
            placeholder="NOME DO OPERADOR"
            maxLength={15}
          />
        </div>

        {/* Seleção de Classes Centralizada */}
        <div className="mb-8">
          <label className="block text-xs md:text-sm mb-4 opacity-80 text-green-400 text-center">
            {'>'} SELECIONE O PROTOCOLO DE CLASSE:
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(CLASSES).map(([key, c]) => {
              const isSelected = player.classKey === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setPlayer({ ...player, classKey: key, ...c })}
                  className={`p-4 border text-left transition-all duration-200 cursor-pointer rounded ${
                    isSelected 
                      ? 'border-green-400 bg-green-900/40 shadow-[0_0_15px_rgba(34,197,94,0.3)] scale-105' 
                      : 'border-green-900/80 bg-black/50 hover:border-green-600 hover:bg-green-950/20'
                  }`}
                >
                  <h3 className="font-bold text-lg mb-2 text-green-400 border-b border-green-900/50 pb-1">
                    {c.name}
                  </h3>
                  <div className="text-xs space-y-1 text-green-500/80 font-mono">
                    <p>HP: {c.hp}</p>
                    <p>ATK: {c.attack}</p>
                    <p>DEF: {c.defense}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Botão de Iniciar */}
        <div className="flex justify-center mt-6">
          <TermButton 
            onClick={onStartGame} 
            disabled={!player.name || !player.classKey}
            className="w-full md:w-2/3 text-center py-3 text-lg tracking-widest shadow-[0_0_10px_rgba(34,197,94,0.2)]"
          >
            INICIAR CONEXÃO
          </TermButton>
        </div>

      </div>
    </div>
  );
};
import React from 'react';
import { RefreshCw } from 'lucide-react';
import { TermButton } from './ui/TermButton';


export const GameOver = ({ playerName }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center animate-pulse">
      <h1 className="text-6xl font-bold text-red-600 mb-6 tracking-widest">SINAL PERDIDO</h1>
      <p className="mb-12 text-red-400">O operador {playerName} foi eliminado.</p>
      <TermButton onClick={() => window.location.reload()} className="border-red-600 text-red-500 hover:bg-red-600 hover:text-black">
        <span className="flex items-center gap-2"><RefreshCw size={18}/> REINICIAR SISTEMA</span>
      </TermButton>
    </div>
  );
};

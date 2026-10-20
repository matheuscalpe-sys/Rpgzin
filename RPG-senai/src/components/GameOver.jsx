import React from 'react';
import { RefreshCw } from 'lucide-react';
import { TermButton } from './ui/TermButton';

export const GameOver = ({ playerName }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-red-500 mb-6 tracking-widest motion-safe:animate-pulse">
        ERRO FATAL
      </h1>
      <p className="mb-6 text-red-300">O programa travou! {playerName} foi derrotado pelos bugs.</p>

      {/* Mensagem de erro de mentirinha, igual à que aparece no navegador */}
      <pre className="code-block mb-6 max-w-full">
        <span className="msg-err">{`Uncaught Error: ${playerName} ficou sem vida\n    at batalha.js:42`}</span>
      </pre>

      <p className="mb-10 text-sm text-slate-400 max-w-md">
        Calma: errar faz parte. Todo programador já viu uma tela de erro, e cada erro ensina alguma coisa.
      </p>

      <TermButton onClick={() => window.location.reload()} className="border-red-600 text-red-500 hover:bg-red-600 hover:text-black">
        <span className="flex items-center gap-2"><RefreshCw size={18} /> TENTAR DE NOVO (F5)</span>
      </TermButton>
    </div>
  );
};
import React, { useState, useEffect } from 'react';

export const TypewriterText = ({ text, speed = 30, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    // Reseta o texto imediatamente ao mudar a propriedade "text"
    setDisplayedText('');
    let i = 0;

    const interval = setInterval(() => {
      // Usa a string 'text' original para pegar o caractere correto pelo índice 'i'
      setDisplayedText(text.slice(0, i + 1));
      i++;

      if (i >= text.length) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, speed);

    // Limpa o intervalo caso o efeito seja reexecutado (evita duplicidade no StrictMode)
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      <span className="animate-pulse">_</span>
    </span>
  );
};
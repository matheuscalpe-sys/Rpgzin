import React from 'react';


export const TermButton = ({ onClick, children, disabled, className = "" }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`border border-green-500 px-4 py-2 uppercase tracking-widest font-bold transition-all duration-200 
      ${disabled ? 'opacity-50 cursor-not-allowed border-gray-600 text-gray-600' : 'hover:bg-green-500 hover:text-black text-green-400'} 
      ${className}`}
  >
    {children}
  </button>
);
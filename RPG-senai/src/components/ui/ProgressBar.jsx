import React from 'react';

export const ProgressBar = ({ current, max, label, colorClass = "bg-green-500" }) => {
  const percentage = Math.max(0, Math.min(100, (current / max) * 100));
  return (
    <div className="w-full mb-2">
      <div className="flex justify-between text-xs mb-1">
        <span>{label}</span>
        <span>{current}/{max}</span>
      </div>
      <div className="h-3 border border-green-800 bg-black p-[1px]">
        <div className={`h-full ${colorClass} transition-all duration-300`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};
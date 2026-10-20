import React, { useState, useEffect, useRef } from 'react';
import { CLASSES, ENEMIES, SCENARIOS } from './data/gameData';
import { Customization } from './components/Customization';
import { Exploration } from './components/Exploration';
import { Combat } from './components/Combat';
import { GameOver } from './components/GameOver';


export default function TerminalRPG() {
  const [gameState, setGameState] = useState('CUSTOMIZATION');
  
  const [player, setPlayer] = useState({ name: '', classKey: null, ...CLASSES.WARRIOR });
  const [enemy, setEnemy] = useState(null);
  
  const [storyText, setStoryText] = useState("RPG - Em site");
  const [combatLog, setCombatLog] = useState([]);
  const [typingComplete, setTypingComplete] = useState(false);

  const logEndRef = useRef(null);

  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [combatLog]);

  // --- ACTIONS ---

  const startGame = () => {
    if (!player.name || !player.classKey) return;
    setGameState('EXPLORATION');
    setStoryText(SCENARIOS[0]);
    setTypingComplete(false);
  };

  const explore = () => {
    const randomScenario = SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
    setStoryText("EXPLORANDO SETOR...\n\n" + randomScenario);
    setTypingComplete(false);
  };

  const engageCombat = () => {
    const randomEnemy = { ...ENEMIES[Math.floor(Math.random() * ENEMIES.length)] };
    setEnemy(randomEnemy);
    setGameState('COMBAT');
    setCombatLog([`> AVISO: ${randomEnemy.name} detectado. Iniciando modo de combate.`]);
  };

  const attack = () => {
    let newEnemyHp = enemy.hp;
    let newPlayerHp = player.hp;
    let newLogs = [];

    const pDamage = Math.max(1, player.attack - enemy.defense + Math.floor(Math.random() * 5));
    newEnemyHp -= pDamage;
    newLogs.push(`> Você atacou ${enemy.name} causando ${pDamage} de dano.`);

    if (newEnemyHp <= 0) {
      newLogs.push(`> ${enemy.name} foi eliminado.`);
      setCombatLog(prev => [...prev, ...newLogs]);
      setEnemy({ ...enemy, hp: 0 });
      setTimeout(() => {
        setGameState('EXPLORATION');
        setStoryText(`A ameaça foi neutralizada. O caminho está livre por enquanto.`);
        setTypingComplete(false);
      }, 2000);
      return;
    }

    const eDamage = Math.max(1, enemy.attack - player.defense + Math.floor(Math.random() * 3));
    newPlayerHp -= eDamage;
    newLogs.push(`> ${enemy.name} atacou você causando ${eDamage} de dano.`);

    newLogs.push('----------------------------------------');

    setPlayer({ ...player, hp: newPlayerHp });
    setEnemy({ ...enemy, hp: newEnemyHp });
    setCombatLog(prev => [...prev, ...newLogs]);

    if (newPlayerHp <= 0) {
      setTimeout(() => setGameState('GAME_OVER'), 1500);
    }
  };

  const heal = () => {
    if (player.potions <= 0) {
      setCombatLog(prev => [...prev, `> ERRO: Suprimentos médicos esgotados.`]);
      return;
    }
    
    const healAmount = 40;
    const newHp = Math.min(player.maxHp, player.hp + healAmount);
    setPlayer({ ...player, hp: newHp, potions: player.potions - 1 });
    
    const eDamage = Math.max(1, enemy.attack - player.defense + Math.floor(Math.random() * 3));
    const finalHp = newHp - eDamage;
    
    setPlayer(prev => ({ ...prev, hp: finalHp }));
    setCombatLog(prev => [
      ...prev, 
      `> Você se curou em ${healAmount} HP. (Restam ${player.potions - 1} usos)`,
      `> ${enemy.name} atacou você causando ${eDamage} de dano enquanto você se curava.`
    ]);

    if (finalHp <= 0) {
      setTimeout(() => setGameState('GAME_OVER'), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 sm:p-8 flex flex-col items-center relative overflow-hidden">
      {/* Scanline CRT Effect Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>
      
      {/* Vignette */}
      <div className="pointer-events-none fixed inset-0 z-40 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]"></div>

      <div className="w-full max-w-4xl flex-1 flex flex-col z-10">
        {gameState === 'CUSTOMIZATION' && (
          <Customization 
            player={player} 
            setPlayer={setPlayer} 
            onStartGame={startGame} 
          />
        )}
        
        {gameState === 'EXPLORATION' && (
          <Exploration 
            player={player} 
            storyText={storyText} 
            typingComplete={typingComplete} 
            setTypingComplete={setTypingComplete} 
            onExplore={explore} 
            onEngageCombat={engageCombat} 
          />
        )}
        
        {gameState === 'COMBAT' && (
          <Combat 
            player={player} 
            enemy={enemy} 
            combatLog={combatLog} 
            logEndRef={logEndRef} 
            onAttack={attack} 
            onHeal={heal} 
          />
        )}
        
        {gameState === 'GAME_OVER' && (
          <GameOver playerName={player.name} />
        )}
      </div>
    </div>
  );
}
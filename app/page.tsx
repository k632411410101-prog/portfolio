'use client';

import { useEffect } from 'react';
import { GameWorld } from '@/components/GameWorld';
import { UI } from '@/components/UI';
import { WorldClock } from '@/components/WorldClock';
import { useGameStore } from '@/lib/store/gameStore';

export default function Home() {
  const initializeGame = useGameStore((state) => state.initialize);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-sky-bright">
      <GameWorld />
      <UI />
      <WorldClock />
    </div>
  );
}

'use client';

import { ReactNode } from 'react';
import { GameProvider } from '@/lib/store/gameStore';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <GameProvider>
      {children}
    </GameProvider>
  );
}
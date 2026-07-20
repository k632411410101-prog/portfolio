'use client';

import { create } from 'zustand';
import { ReactNode } from 'react';

interface GameState {
  scrollProgress: number;
  dayTime: 'morning' | 'afternoon' | 'sunset' | 'night';
  isPlaying: boolean;
  soundEnabled: boolean;
  musicEnabled: boolean;
  scrollX: number;
  setScrollProgress: (progress: number) => void;
  setDayTime: (time: GameState['dayTime']) => void;
  setIsPlaying: (playing: boolean) => void;
  toggleSound: () => void;
  toggleMusic: () => void;
  setScrollX: (x: number) => void;
  initialize: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  scrollProgress: 0,
  dayTime: 'morning',
  isPlaying: true,
  soundEnabled: true,
  musicEnabled: true,
  scrollX: 0,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  setDayTime: (time) => set({ dayTime: time }),
  setIsPlaying: (playing) => set({ isPlaying: playing }),
  toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
  toggleMusic: () => set((state) => ({ musicEnabled: !state.musicEnabled })),
  setScrollX: (x) => set({ scrollX: x }),
  initialize: () => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', (e) => {
        const scrollX = window.scrollX || 0;
        set({ scrollX });
      });
    }
  },
}));

export function GameProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
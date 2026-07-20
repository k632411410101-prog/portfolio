'use client';

import { useGameStore } from '@/lib/store/gameStore';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Music, Music2 } from 'lucide-react';

export function UI() {
  const dayTime = useGameStore((state) => state.dayTime);
  const soundEnabled = useGameStore((state) => state.soundEnabled);
  const musicEnabled = useGameStore((state) => state.musicEnabled);
  const toggleSound = useGameStore((state) => state.toggleSound);
  const toggleMusic = useGameStore((state) => state.toggleMusic);

  const getDayIcon = () => {
    switch (dayTime) {
      case 'morning':
        return '☀️';
      case 'afternoon':
        return '🌞';
      case 'sunset':
        return '🌅';
      case 'night':
        return '🌙';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Top right controls */}
      <div className="fixed top-6 right-6 flex gap-4 pointer-events-auto">
        <motion.button
          onClick={toggleSound}
          className="p-3 bg-wood-600 hover:bg-wood-700 text-white rounded-lg pixel-border transition-all hover-lift"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {soundEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
        </motion.button>

        <motion.button
          onClick={toggleMusic}
          className="p-3 bg-wood-600 hover:bg-wood-700 text-white rounded-lg pixel-border transition-all hover-lift"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {musicEnabled ? <Music size={24} /> : <Music2 size={24} />}
        </motion.button>

        <div className="p-3 bg-wood-600 text-white rounded-lg pixel-border text-2xl">
          {getDayIcon()}
        </div>
      </div>

      {/* Bottom mini-map */}
      <div className="fixed bottom-6 left-6 pointer-events-auto">
        <div className="p-4 bg-wood-100 rounded-lg pixel-border">
          <p className="font-pixel text-xs text-wood-800 mb-2">MINI MAP</p>
          <div className="w-32 h-12 bg-gradient-to-r from-sky-light via-green-300 to-sky-bright rounded border-2 border-wood-600 flex items-center justify-center">
            <span className="text-lg">📍</span>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import { motion } from 'framer-motion';
import { PixelCharacter } from '../PixelCharacter';

export function LandingSection() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-light to-sky-bright">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#87CEEB] via-[#E0F6FF] to-[#90EE90]" />

      {/* Clouds */}
      <motion.div
        className="absolute top-20 left-10 text-6xl opacity-80"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        ☁️
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 text-7xl opacity-70"
        animate={{ x: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      >
        ☁️
      </motion.div>

      {/* Sun */}
      <motion.div
        className="absolute top-10 right-32 text-8xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        ☀️
      </motion.div>

      {/* Mountains */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-[#90EE90] to-[#228B22] opacity-90" />

      {/* Trees */}
      <div className="absolute bottom-40 left-1/4 text-9xl opacity-60">🌲</div>
      <div className="absolute bottom-40 right-1/4 text-9xl opacity-60">🌲</div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl md:text-8xl font-pixel text-wood-900 mb-4 drop-shadow-lg">
          LY'S FARM
        </h1>
        <p className="text-2xl md:text-3xl font-body font-semibold text-wood-800 mb-8">
          Nguyễn Thị Khánh Ly
        </p>
        <p className="text-lg md:text-xl font-body text-wood-700 mb-12">
          International Economics Student
        </p>

        <motion.button
          className="px-8 py-4 bg-pink-400 hover:bg-pink-500 text-white font-pixel text-lg rounded-lg transition-all hover-lift"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ▶ START JOURNEY
        </motion.button>
      </motion.div>

      {/* Character */}
      <div className="absolute bottom-40 left-1/3">
        <PixelCharacter />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 font-pixel text-sm text-wood-800"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        SCROLL TO MOVE →
      </motion.div>
    </div>
  );
}
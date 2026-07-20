'use client';

import { motion } from 'framer-motion';

export function HomeSection() {
  return (
    <div className="relative w-screen h-screen flex items-end bg-gradient-to-b from-sky-bright to-[#90EE90]">
      {/* Grass */}
      <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-b from-[#90EE90] to-[#7CB342]" />

      {/* Clouds - parallax effect */}
      <motion.div className="absolute top-20 left-1/4 text-8xl opacity-60" animate={{ x: [0, 50, 0] }} transition={{ duration: 10, repeat: Infinity }}>
        ☁️
      </motion.div>

      {/* House */}
      <div className="relative z-20 ml-20 mb-20">
        <div className="text-9xl">🏠</div>
        <p className="font-pixel text-sm text-wood-800 mt-4">MY FARMHOUSE</p>
      </div>

      {/* Trees */}
      <div className="absolute bottom-32 right-1/4 text-9xl opacity-80 animate-sway">🌳</div>
      <div className="absolute bottom-32 right-1/3 text-8xl opacity-70">🌲</div>

      {/* Fences */}
      <div className="absolute bottom-28 left-0 right-0 flex gap-8 px-20 text-4xl">🪵 🪵 🪵 🪵 🪵</div>

      {/* Interactive elements */}
      <motion.div
        className="absolute bottom-20 right-20 text-6xl cursor-pointer hover-lift"
        whileHover={{ scale: 1.2 }}
        onClick={() => alert('Welcome to the farmhouse!')}
      >
        🚪
      </motion.div>
    </div>
  );
}
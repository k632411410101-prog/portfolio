'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const ACHIEVEMENTS = [
  { title: 'IELTS 7.5', emoji: '📘', color: 'from-blue-400 to-blue-600' },
  { title: 'HSK 6', emoji: '🏮', color: 'from-red-400 to-red-600' },
  { title: 'GPA 3.60', emoji: '🎓', color: 'from-yellow-400 to-yellow-600' },
  { title: '2+ Years Teaching', emoji: '👨‍🏫', color: 'from-purple-400 to-purple-600' },
  { title: 'Customer Service', emoji: '❤️', color: 'from-pink-400 to-pink-600' },
];

export function AchievementsSection() {
  const [openChest, setOpenChest] = useState(false);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-gradient-to-b from-sky-bright to-gray-700">
      {/* Cave entrance */}
      <div className="absolute left-1/4 bottom-20 text-9xl cursor-pointer" onClick={() => setOpenChest(!openChest)}>
        🕳️
      </div>

      {/* Treasure chest */}
      <motion.div
        className="absolute left-1/4 bottom-32 text-8xl cursor-pointer"
        animate={openChest ? { rotateZ: 20, y: -20 } : { y: 0, rotateZ: 0 }}
        onClick={() => setOpenChest(!openChest)}
        transition={{ duration: 0.5 }}
      >
        {openChest ? '📦' : '📦'}
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl bg-wood-100 p-12 rounded-lg pixel-border"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-pixel text-3xl text-wood-900 mb-8">ACHIEVEMENTS</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((achievement, idx) => (
            <motion.div
              key={idx}
              className={`p-8 bg-gradient-to-br ${achievement.color} rounded-lg text-center text-white shadow-lg hover-lift`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-6xl mb-3">{achievement.emoji}</div>
              <p className="font-pixel text-sm">{achievement.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Fireflies */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          animate={{
            x: [Math.random() * 100, Math.random() * 100],
            y: [Math.random() * 100, Math.random() * 100],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{ duration: Math.random() * 5 + 3, repeat: Infinity }}
          style={{ left: `${Math.random() * 80 + 10}%`, top: `${Math.random() * 60 + 20}%` }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  );
}
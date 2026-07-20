'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const SKILLS = [
  { name: 'English', emoji: '🌐', level: 5 },
  { name: 'Chinese', emoji: '中', level: 4 },
  { name: 'Teaching', emoji: '👨‍🏫', level: 5 },
  { name: 'Communication', emoji: '💬', level: 5 },
  { name: 'Customer Service', emoji: '🤝', level: 5 },
  { name: 'Problem Solving', emoji: '🧩', level: 4 },
];

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-gradient-to-b from-[#90EE90] to-sky-bright">
      {/* Garden background */}
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-b from-[#90EE90] to-[#228B22]" />

      {/* Crops/Plants decorations */}
      <div className="absolute bottom-32 left-1/4 text-8xl animate-sway">🌱</div>
      <div className="absolute bottom-32 right-1/4 text-8xl animate-sway" style={{ animationDelay: '1s' }}>🌻</div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl bg-wood-100 p-12 rounded-lg pixel-border"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-pixel text-3xl text-wood-900 mb-8">SKILLS</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              className="p-6 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg cursor-pointer hover-lift transition-all"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-5xl mb-3">{skill.emoji}</div>
              <p className="font-pixel text-sm text-wood-900 mb-3">{skill.name}</p>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      i < skill.level ? 'bg-yellow-500' : 'bg-gray-300'
                    }`}
                    animate={hoveredSkill === skill.name ? { scale: [1, 1.3, 1] } : {}}
                    transition={{ delay: i * 0.1 }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scarecrow */}
      <div className="absolute right-20 bottom-32 text-9xl opacity-70">👨‍🌾</div>
    </div>
  );
}
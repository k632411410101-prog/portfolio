'use client';

import { motion } from 'framer-motion';

const LANGUAGES = [
  { name: 'IELTS', score: '7.5', emoji: '📘' },
  { name: 'HSK', score: '6', emoji: '📗' },
];

export function LanguagesSection() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-gradient-to-b from-sky-bright to-[#87CEEB]">
      {/* Library building */}
      <div className="absolute left-20 bottom-20 text-9xl">📚</div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl bg-wood-100 p-12 rounded-lg pixel-border"
        initial={{ opacity: 0, rotateX: 90 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-pixel text-3xl text-wood-900 mb-8">LANGUAGES</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {LANGUAGES.map((lang) => (
            <motion.div
              key={lang.name}
              className="p-8 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg text-center hover-lift"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-7xl mb-4">{lang.emoji}</div>
              <p className="font-pixel text-2xl text-wood-900 mb-2">{lang.name}</p>
              <motion.p
                className="font-pixel text-3xl text-yellow-600"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {lang.score}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* English note */}
        <motion.div
          className="mt-8 p-6 bg-yellow-50 rounded-lg border-2 border-yellow-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="font-body text-center text-wood-800">
            <span className="font-pixel text-lg">🌐 ENGLISH</span> - Advanced Level
          </p>
          <p className="font-body text-sm text-wood-700 mt-2 text-center">
            Advanced communication and academic English
          </p>
        </motion.div>
      </motion.div>

      {/* Bookshelf animated */}
      <motion.div
        className="absolute right-20 top-1/2 transform -translate-y-1/2 text-9xl opacity-60"
        animate={{ rotateZ: [-2, 2, -2] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        📚
      </motion.div>
    </div>
  );
}
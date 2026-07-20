'use client';

import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    title: 'English Teacher',
    period: 'Nov 2024 - Present',
    emoji: '👨‍🏫',
    duties: ['IELTS Teacher', 'Speaking Coach', '1-1 Tutor', 'Small Group Classes'],
  },
  {
    title: 'Chinese Tutor',
    period: 'Ongoing',
    emoji: '中',
    duties: ['Primary Students'],
  },
  {
    title: 'Math Tutor & TA',
    period: '2024 - 2025',
    emoji: '🧮',
    duties: [],
  },
  {
    title: 'Customer Success',
    period: 'Ongoing',
    emoji: '🤝',
    duties: ['An Khang Gift', 'EZCustomize'],
  },
];

export function ExperienceSection() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-gradient-to-b from-[#87CEEB] to-sky-bright">
      {/* Barn */}
      <div className="absolute left-1/4 bottom-20 text-9xl">🏚️</div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl bg-wood-100 p-12 rounded-lg pixel-border max-h-96 overflow-y-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-pixel text-3xl text-wood-900 mb-8 sticky top-0 bg-wood-100">EXPERIENCE</h2>
        
        <div className="space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border-l-4 border-wood-600"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl">{exp.emoji}</div>
                <div className="flex-1">
                  <h3 className="font-pixel text-xl text-wood-900 mb-1">{exp.title}</h3>
                  <p className="font-body text-sm text-wood-600 mb-3">{exp.period}</p>
                  {exp.duties.length > 0 && (
                    <ul className="space-y-1">
                      {exp.duties.map((duty, i) => (
                        <li key={i} className="font-body text-sm text-wood-700">• {duty}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Animals */}
      <motion.div className="absolute right-20 bottom-32 text-8xl" animate={{ x: [0, 20, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        🐄
      </motion.div>
      <div className="absolute right-32 bottom-20 text-6xl animate-sway">🐔</div>
    </div>
  );
}
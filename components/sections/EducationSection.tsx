'use client';

import { motion } from 'framer-motion';

export function EducationSection() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-gradient-to-b from-sky-bright to-[#90EE90]">
      {/* School building */}
      <div className="absolute left-20 bottom-20 text-9xl">🏫</div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-2xl bg-wood-100 p-12 rounded-lg pixel-border"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-pixel text-3xl text-wood-900 mb-8">EDUCATION</h2>
        
        <div className="mb-8">
          <h3 className="font-pixel text-xl text-wood-800 mb-3">Foreign Trade University</h3>
          <p className="font-body text-lg text-wood-700 mb-2">📚 Faculty of International Economics</p>
          <p className="font-body text-lg text-wood-700 mb-2">🎓 Major: International Economics</p>
          <p className="font-body text-base text-wood-600">📊 GPA: 3.60/4.00 (8.56/10)</p>
        </div>

        {/* Certificate glow effect */}
        <motion.div
          className="inline-block"
          animate={{ boxShadow: ['0 0 0px rgba(255,215,0,0)', '0 0 20px rgba(255,215,0,0.8)', '0 0 0px rgba(255,215,0,0)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-6xl">🏆</span>
        </motion.div>
      </motion.div>

      {/* Flag */}
      <div className="absolute right-20 top-20 text-8xl animate-sway">🚩</div>

      {/* Trees */}
      <div className="absolute bottom-0 left-1/4 text-9xl opacity-50 -ml-20">🌳</div>
      <div className="absolute bottom-0 right-1/4 text-9xl opacity-50">🌳</div>
    </div>
  );
}
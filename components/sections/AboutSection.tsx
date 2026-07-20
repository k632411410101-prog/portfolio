'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);

  return (
    <div ref={ref} className="relative w-screen h-screen flex items-center justify-center bg-gradient-to-b from-[#90EE90] to-sky-bright">
      {/* Interior house background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D2B48C] to-[#F4A460] opacity-80" />

      {/* Fireplace */}
      <motion.div className="absolute left-20 top-1/2 text-8xl" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
        🔥
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-2xl bg-wood-100 p-12 rounded-lg pixel-border"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-pixel text-3xl text-wood-900 mb-6">ABOUT ME</h2>
        <p className="font-body text-lg text-wood-800 mb-4 leading-relaxed">
          Xin chào! Mình là Nguyễn Thị Khánh Ly, sinh viên năm hai ngành Kinh tế Quốc tế tại Đại học Ngoại thương.
        </p>
        <p className="font-body text-lg text-wood-800 mb-4 leading-relaxed">
          Mình yêu thích ngoại ngữ, giáo dục và giao tiếp với con người. Hiện mình vừa giảng dạy ngoại ngữ vừa làm trong lĩnh vực Chăm sóc khách hàng.
        </p>
        <p className="font-body text-sm text-wood-700">
          📚 Passionate about education • 🌍 Language enthusiast • 💬 Communication advocate
        </p>
      </motion.div>

      {/* Bookshelves */}
      <div className="absolute right-20 top-1/2 transform -translate-y-1/2 text-8xl opacity-60 animate-sway">📚</div>

      {/* Window */}
      <motion.div className="absolute top-20 right-1/4 text-6xl" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        🪟
      </motion.div>
    </div>
  );
}
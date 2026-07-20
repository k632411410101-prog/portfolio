'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function PixelCharacter() {
  const [animation, setAnimation] = useState<'idle' | 'walk' | 'wave'>('idle');

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.random();
      if (random < 0.3) setAnimation('walk');
      else if (random < 0.6) setAnimation('wave');
      else setAnimation('idle');
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="text-8xl"
      animate={{
        x: animation === 'walk' ? [0, 50, 0] : 0,
        y: animation === 'idle' ? [0, -10, 0] : 0,
        rotate: animation === 'wave' ? 0 : 0,
      }}
      transition={{ duration: animation === 'walk' ? 2 : 1.5, repeat: Infinity }}
    >
      👩
    </motion.div>
  );
}
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const CONTACTS = [
  { icon: '📍', label: 'Location', value: 'Hải Phòng' },
  { icon: '✉️', label: 'Email', value: 'ntkhanhly2709@gmail.com', link: 'mailto:ntkhanhly2709@gmail.com' },
  { icon: '📱', label: 'Phone', value: '0948342301', link: 'tel:0948342301' },
  { icon: '💼', label: 'LinkedIn', value: 'LinkedIn Profile', link: 'https://linkedin.com/in/nguyenthikhanhly' },
  { icon: '👥', label: 'Facebook', value: 'Facebook Profile', link: 'https://facebook.com/nguyenthikhanhly' },
];

export function ContactSection() {
  const [mailboxOpen, setMailboxOpen] = useState(false);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-gradient-to-b from-gray-700 to-gray-900">
      {/* Snow/winter background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200 to-gray-600" />

      {/* Mailbox */}
      <motion.div
        className="absolute left-20 bottom-32 text-9xl cursor-pointer"
        animate={mailboxOpen ? { rotateY: 180 } : {}}
        onClick={() => setMailboxOpen(!mailboxOpen)}
        transition={{ duration: 0.5 }}
      >
        📬
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl bg-wood-100 p-12 rounded-lg pixel-border"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-pixel text-3xl text-wood-900 mb-8 text-center">CONTACT</h2>
        
        <div className="space-y-4">
          {CONTACTS.map((contact, idx) => (
            <motion.a
              key={idx}
              href={contact.link || '#'}
              target={contact.link?.startsWith('http') ? '_blank' : '_self'}
              rel={contact.link?.startsWith('http') ? 'noopener noreferrer' : ''}
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg hover-lift transition-all hover:from-amber-100 hover:to-orange-100"
              whileHover={{ scale: 1.05, x: 10 }}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <span className="text-4xl">{contact.icon}</span>
              <div className="flex-1">
                <p className="font-pixel text-sm text-wood-700">{contact.label}</p>
                <p className="font-body text-lg text-wood-900">{contact.value}</p>
              </div>
              {contact.link && <span className="text-2xl">→</span>}
            </motion.a>
          ))}
        </div>

        <motion.p
          className="mt-8 text-center font-pixel text-wood-800 text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ❄️ THANKS FOR VISITING! ❄️
        </motion.p>
      </motion.div>

      {/* Snowman */}
      <div className="absolute right-20 bottom-20 text-9xl">☃️</div>

      {/* Falling snow */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl"
          animate={{ y: [0, window.innerHeight], opacity: [1, 0] }}
          transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: 'linear' }}
          style={{ left: `${Math.random() * 100}%`, top: '-50px' }}
        >
          ❄️
        </motion.div>
      ))}
    </div>
  );
}
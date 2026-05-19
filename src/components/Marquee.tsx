'use client';

import React from 'react';
import { motion } from 'motion/react';

export const Marquee = () => {
  const items = [
    'RAPID DEPLOYMENT',
    '1-YEAR BUG WARRANTY',
    'HIGH-INTENT SEO',
    'PRIORITY SUPPORT',
    'FASTEST DELIVERY'
  ];

  return (
    <div className="py-12 border-y border-brand-border overflow-hidden bg-brand-accent flex whitespace-nowrap">
      <motion.div 
        className="flex items-center gap-12 pr-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {[...items, ...items].map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-brand-ink">
              {item}
            </span>
            <span className="text-5xl md:text-7xl font-black text-brand-ink opacity-40">•</span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

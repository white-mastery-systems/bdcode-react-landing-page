'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

export const MagneticButton = ({ children, className = '', href }: MagneticButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const el = e.currentTarget;
    const { clientX, clientY } = e;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const motionProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    animate: { x: position.x, y: position.y },
    transition: { type: 'spring' as const, damping: 15, stiffness: 150, mass: 0.1 },
    className: `relative cursor-pointer ${className}`,
  };

  if (href) {
    return (
      <motion.a href={href} target="_blank" rel="noopener noreferrer" {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" {...motionProps}>
      {children}
    </motion.button>
  );
};

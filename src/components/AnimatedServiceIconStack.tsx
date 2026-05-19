'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

const SERVICE_ICON_CYCLE_MS = 2400;

export function AnimatedServiceIconStack({ icons }: { icons: LucideIcon[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (icons.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % icons.length);
    }, SERVICE_ICON_CYCLE_MS);
    return () => window.clearInterval(id);
  }, [icons.length]);

  return (
    <div className="relative flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-brand-border bg-slate-50 md:h-32 md:w-32">
      {icons.map((Icon, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden={i !== active}
          initial={false}
          animate={
            icons.length === 1
              ? { opacity: 1, scale: 1, y: 0, rotate: 0 }
              : {
                  opacity: i === active ? 1 : 0,
                  scale: i === active ? 1 : 0.82,
                  y: i === active ? 0 : 8,
                  rotate: i === active ? 0 : -8,
                }
          }
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Icon
            className="h-11 w-11 shrink-0 text-brand-accent md:h-12 md:w-12"
            strokeWidth={1.5}
          />
        </motion.div>
      ))}
    </div>
  );
}

'use client';

import React from 'react';

interface SectionLabelProps {
  text: string;
  dark?: boolean;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ text, dark = false, className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`w-1.5 h-1.5 rounded-full ${dark ? 'bg-white' : 'bg-brand-ink'}`} />
      <p className={`label-micro font-bold uppercase tracking-widest ${dark ? 'text-white' : 'text-brand-ink'}`}>
        {text}
      </p>
    </div>
  );
};

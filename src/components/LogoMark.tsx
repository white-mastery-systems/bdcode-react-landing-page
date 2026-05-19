'use client';

import React from 'react';
import type { StaticImageData } from 'next/image';
import logoSrc from '../assets/bdcode-logo.png';

type LogoMarkProps = {
  className?: string;
};

const logoUrl = (logoSrc as StaticImageData).src;

export const LogoMark = ({ className }: LogoMarkProps) => (
  <img src={logoUrl} alt="bdcode_" className={`w-auto object-contain object-left ${className ?? ''}`} />
);

'use client';

import React from 'react';
import Link from 'next/link';
import { LogoMark } from './LogoMark';

export const Footer = () => {
  return (
    <footer className="p-8 md:p-12 border-t border-brand-border">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <Link href="/" className="space-y-6 cursor-pointer hover:opacity-70 transition-opacity">
          <LogoMark className="h-10 md:h-11" />
        </Link>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-4">
            <p className="label-micro">OFFICE</p>
            <p className="text-sm text-brand-muted">
              14, Gulmohar Avenue<br />
              Velachery Main Road, Guindy<br />
              Chennai 600032
            </p>
          </div>
          <div className="space-y-4">
            <p className="label-micro">SALES</p>
            <div className="flex flex-col gap-2 text-sm font-medium text-brand-muted">
              <a
                href="mailto:sales@bdcode.in"
                className="w-fit text-brand-ink underline decoration-brand-border underline-offset-4 transition-colors hover:text-brand-accent hover:decoration-brand-accent"
              >
                sales@bdcode.in
              </a>
              <a
                href="tel:+919176760013"
                className="w-fit text-brand-ink underline decoration-brand-border underline-offset-4 transition-colors hover:text-brand-accent hover:decoration-brand-accent"
              >
                +91 91 7676 0013
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between gap-4">
        <p className="label-micro">&copy; 2026 BDCODE_ ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

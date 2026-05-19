'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export type BreadcrumbItem = {
  label: string;
  /** Omit for the current page (renders as text with aria-current). */
  to?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

const crumbClass =
  'font-mono text-[10px] font-bold uppercase tracking-[0.2em] transition-colors';

export const Breadcrumbs = ({ items, className = '' }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className={`w-full min-w-0 ${className}`}>
      <ol className="flex w-full min-w-0 flex-nowrap items-center gap-x-1.5 sm:gap-x-2">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          const textClass = `${crumbClass} min-w-0 ${isLast ? 'flex-1 truncate text-brand-ink' : 'shrink-0 text-brand-muted hover:text-brand-ink'}`;

          return (
            <li
              key={`${item.label}-${i}`}
              className={`flex min-w-0 items-center gap-1.5 sm:gap-2 ${isLast ? 'flex-1' : 'shrink-0'}`}
            >
              {i > 0 && (
                <ChevronRight
                  size={14}
                  className="shrink-0 text-brand-border"
                  aria-hidden
                />
              )}
              {item.to ? (
                <Link href={item.to} className={`${textClass} hover:text-brand-ink`} title={item.label}>
                  {item.label}
                </Link>
              ) : (
                <span className={textClass} aria-current="page" title={item.label}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

'use client';

import React from 'react';
import { ArrowUpRight, ArrowRight, ChevronRight } from 'lucide-react';
import { useWhatsAppHref } from '../hooks/useWhatsAppHref';
import { SectionLabel } from './SectionLabel';

export const CTA = () => {
  const now = new Date();
  const currentQuarterYear = `Q${Math.floor(now.getMonth() / 3) + 1} ${now.getFullYear()}`;
  const bookCallHref = useWhatsAppHref(
    'Could we book a short strategy call? I’d like to understand how you work and whether we’re a fit.',
  );
  const caseStudiesHref = useWhatsAppHref(
    'I’d love to see relevant case studies or past work, especially anything close to what we’re trying to build.',
  );

  return (
    <section id="contact" className="swiss-grid border-y border-brand-border bg-brand-accent">
      <div className="grid lg:grid-cols-2">
        <div className="swiss-cell text-brand-ink flex flex-col justify-between min-h-[500px] border-r border-brand-ink/10 py-16 md:py-12">
          <SectionLabel text="Ready to get started?" />
          <h2 className="text-6xl md:text-7xl font-black uppercase leading-[0.85] text-brand-ink">
            Let's <br className="hidden md:block" /> Build <br className="hidden md:block" /> It.
          </h2>
          <div className="flex justify-end">
            <ArrowUpRight size={80} strokeWidth={1} className="opacity-20 text-brand-ink" />
          </div>
        </div>
        <div className="swiss-cell flex flex-col justify-between bg-white py-16 md:py-12">
          <p className="text-2xl font-medium leading-relaxed mb-12 text-brand-ink">
            We are currently accepting new projects for {currentQuarterYear}. Secure your spot in our engineering sprint.
          </p>
          <div className="space-y-4">
            <a
              href={bookCallHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-swiss w-full flex justify-between items-center group bg-brand-ink text-white hover:bg-white hover:text-brand-ink transition-all duration-300"
            >
              Book Strategy Call <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href={caseStudiesHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full flex justify-between items-center group border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-white transition-all duration-300"
            >
              View Case Studies <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

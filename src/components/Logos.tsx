'use client';

import React from 'react';
import { SectionLabel } from './SectionLabel';
import { CLIENT_LOGOS, logoUrl } from '../constants/clientLogos';

export const Logos = () => {
  return (
    <section className="py-16 md:py-20 border-b border-brand-border bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-20">
        <div className="flex flex-col items-stretch gap-12 md:gap-16 w-full">
          <div className="w-full">
            <SectionLabel text="Our clients" className="mb-6" />
            <h2 className="text-4xl md:text-7xl font-black uppercase leading-[0.85] tracking-tighter">
              <span className="text-brand-muted">Organisations</span>
              <br className="hidden md:block" />{" we've worked with"}
            </h2>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
            {CLIENT_LOGOS.map((logo) => (
              <div
                key={logo.name}
                role="group"
                aria-label={`${logo.name}, ${logo.country}`}
                className="flex h-full min-h-[140px] sm:min-h-[152px] md:min-h-[160px] flex-col items-center rounded-sm border border-brand-border bg-white p-3 shadow-sm sm:p-4 md:p-5"
              >
                <div className="flex w-full flex-1 min-h-[72px] items-center justify-center pb-2 sm:pb-3">
                  <img
                    src={logoUrl(logo.src)}
                    alt=""
                    className="max-h-12 sm:max-h-14 md:max-h-16 lg:max-h-[4.25rem] w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] object-contain object-center"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mt-auto flex w-full flex-col items-center gap-1 border-t border-brand-border/80 pt-2.5 text-center sm:gap-1.5 sm:pt-3">
                  <span className="text-base sm:text-lg leading-none" aria-hidden>
                    {logo.flag}
                  </span>
                  <p className="w-full max-w-full text-center text-[10px] font-bold uppercase leading-snug tracking-wide text-brand-ink sm:text-[11px]">
                    {logo.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { StaticImageData } from 'next/image';
import { SectionLabel } from './SectionLabel';
import { clientLogoSrcByName } from '../constants/clientLogos';
import kamalaDentalCareLogo from '../assets/kamala_dental_care_logo.png';
import riseUpChampionshipLogo from '../assets/rise_up_championship_logo.png';

type Testimonial = {
  logoBrandName?: string;
  logoImage?: string | StaticImageData;
  logoAlt?: string;
  logoFallback?: string;
  text: string;
  author: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    logoBrandName: 'AIIMS Delhi',
    text: 'bdcode_ was exceptional: rigorous engineering, clear communication, and an AI/ML triaging system our clinical teams rely on every day. We are very happy with how it turned out.',
    author: 'Dr Somesh Gupta',
    role: 'AIIMS',
  },
  {
    logoImage: kamalaDentalCareLogo,
    logoAlt: 'Dr. Kamala Dental Care logo',
    text: 'They elevated our practice online with thoughtful design, fast iterations, and a site that finally matches the care we give patients. We could not be more pleased with bdcode_.',
    author: 'Dr Kamala Kakumanu',
    role: 'Website revamp',
  },
  {
    logoImage: riseUpChampionshipLogo,
    logoAlt: 'Rise Up Championship logo',
    text: 'We went from scattered spreadsheets to one dependable tournament system, and bdcode_ delivered work we are proud to put in front of athletes and partners. They were a pleasure to work with.',
    author: 'Thomas Abraham',
    role: 'Tournament platform',
  },
  {
    logoBrandName: 'Tulsi Silks',
    text: 'The SEO work actually moved the needle for us, with transparent reporting, sharp recommendations, and results we could feel in enquiries. bdcode_ has been outstanding.',
    author: 'Suresh Parekh',
    role: 'SEO',
  },
  {
    logoBrandName: 'Kumaran Silks',
    text: 'A stunning website revamp with performance, storytelling, and polish beyond what we expected. The team was responsive and detail-oriented, and we would recommend bdcode_ without hesitation.',
    author: 'Preetham Kumar',
    role: 'Website revamp',
  },
];

export const Partners = () => {
  const count = testimonials.length;
  const [index, setIndex] = useState(0);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goPrev, goNext]);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (document.visibilityState !== 'visible') return;
      goNext();
    }, 4000);
    return () => window.clearInterval(id);
  }, [goNext]);

  const slidePct = 100 / count;

  return (
    <section className="bg-brand-accent px-8 py-16 md:px-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:mb-16 md:flex-row md:items-end">
          <div className="space-y-4">
            <SectionLabel text="Client Satisfaction" />
            <h2 className="text-4xl font-black uppercase leading-none text-brand-ink md:text-7xl">
              Words from <br className="hidden md:block" />
              <span className="opacity-60">Our Partners</span>
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="flex h-16 w-16 items-center justify-center rounded-sm border border-brand-ink/20 bg-white/10 transition-all duration-300 hover:bg-brand-ink hover:text-white"
            >
              <ArrowLeft size={24} aria-hidden />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="flex h-16 w-16 items-center justify-center rounded-sm border border-brand-ink/20 bg-white/10 transition-all duration-300 hover:bg-brand-ink hover:text-white"
            >
              <ArrowRight size={24} aria-hidden />
            </button>
          </div>
        </div>

        <div
          className="relative overflow-hidden"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <motion.div
            className="flex"
            style={{ width: `${count * 100}%` }}
            animate={{ x: `${-index * slidePct}%` }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {testimonials.map((t, idx) => {
              const logoSrc =
                t.logoImage !== undefined
                  ? typeof t.logoImage === 'string'
                    ? t.logoImage
                    : t.logoImage.src
                  : t.logoBrandName
                    ? clientLogoSrcByName(t.logoBrandName)
                    : undefined;
              const logoAltText =
                t.logoAlt ??
                (t.logoBrandName
                  ? `${t.logoBrandName} logo`
                  : t.logoFallback
                    ? `${t.logoFallback} partner`
                    : 'Partner');

              return (
                <div
                  key={`${t.author}-${idx}`}
                  className="shrink-0 px-2 md:px-4"
                  style={{ width: `${slidePct}%` }}
                  aria-hidden={idx !== index}
                >
                  <motion.article
                    initial={false}
                    animate={{ opacity: idx === index ? 1 : 0.35 }}
                    transition={{ duration: 0.35 }}
                    className="mx-auto flex min-h-[380px] max-w-2xl flex-col justify-between rounded-sm border border-brand-ink/5 bg-white p-10 shadow-xl transition-colors duration-500 hover:border-brand-ink"
                  >
                    <div className="space-y-8">
                      <div className="flex min-h-[3.5rem] items-center border-b border-brand-ink/10 pb-6">
                        {logoSrc ? (
                          <img
                            src={logoSrc}
                            alt={logoAltText}
                            className="max-h-16 w-full max-w-[220px] object-contain object-left"
                            loading={idx === 0 ? 'eager' : 'lazy'}
                            decoding="async"
                          />
                        ) : (
                          <div className="flex w-full max-w-[220px] flex-col gap-1 rounded-sm border border-brand-ink/15 bg-brand-ink/[0.03] px-4 py-3">
                            <span className="font-display text-xs font-black uppercase tracking-[0.12em] text-brand-ink/80">
                              {t.logoFallback}
                            </span>
                            <span className="label-micro text-[9px] text-brand-ink/45">Partner</span>
                          </div>
                        )}
                      </div>
                      <p className="text-xl font-medium leading-[30px] text-brand-ink">&ldquo;{t.text}&rdquo;</p>
                    </div>

                    <div className="border-t border-brand-ink/20 pt-8">
                      <p className="text-lg font-bold text-brand-ink">{t.author}</p>
                      <p className="label-micro mt-1 text-[10px] text-brand-ink/60">{t.role}</p>
                    </div>
                  </motion.article>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-10 flex justify-center gap-2 md:mt-12" role="tablist" aria-label="Testimonial slides">
          {testimonials.map((t, i) => (
            <button
              key={`dot-${t.author}-${i}`}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial ${i + 1} of ${count}: ${t.author}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-10 bg-brand-ink' : 'w-2.5 bg-brand-ink/25 hover:bg-brand-ink/45'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

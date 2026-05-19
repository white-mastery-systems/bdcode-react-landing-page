'use client';

import React from 'react';
import { motion } from 'motion/react';
import { marketingPhotos } from '../constants/marketingPhotos';
import { SectionLabel } from './SectionLabel';

export const Agency = () => {
  return (
    <section id="about" className="relative py-16 md:py-32 px-8 md:px-20 bg-brand-accent overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none opacity-[0.03]">
        <h3 className="text-[40vw] font-black text-brand-ink uppercase whitespace-nowrap">
          EXCELLENCE
        </h3>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Label */}
        <div className="flex justify-center mb-12">
          <SectionLabel text="About us" />
        </div>

        {/* Central Statement */}
        <div className="max-w-4xl mx-auto text-center relative z-20 flex flex-col items-center gap-6 md:gap-8">
          <h2 className="text-4xl md:text-7xl font-black uppercase leading-none text-brand-ink tracking-tighter">
            Engineering-led.
            <br className="hidden md:block" />{' '}
            <span className="opacity-60">Design-driven.</span>
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-ink leading-[1.1] tracking-tight">
            We are a high performance digital agency designed specifically for market leaders and innovators. We prioritise
            technical excellence and bold design.
          </p>
          {/* Meet our team (WhatsApp) — hidden for now */}
        </div>
      </div>

      {/* Floating Testimonials - Positioned relative to section for maximum spread */}
      {/* Top Right */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="absolute top-12 right-8 md:right-12 hidden xl:block w-64 z-30 cursor-pointer"
      >
        <div className="w-24 h-24 rounded-xl overflow-hidden mb-4 shadow-2xl border-2 border-white rotate-3">
          <img
            src={marketingPhotos.testimonialPortraitA}
            alt="Illustrative Indian corporate headshot (UI/UX testimonial quote)"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <p className="text-xs font-bold text-brand-ink/80 leading-relaxed bg-white p-4 rounded-lg shadow-xl border border-brand-ink/5">
          "Their expertise in UI/UX design made our app easy to navigate and visually stunning. Our users love it!"
        </p>
      </motion.div>

      {/* Bottom Left */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="absolute bottom-12 left-8 md:left-12 hidden xl:block w-64 z-30 cursor-pointer"
      >
        <div className="w-24 h-24 rounded-xl overflow-hidden mb-4 shadow-2xl border-2 border-white -rotate-3">
          <img
            src={marketingPhotos.testimonialPortraitB}
            alt="Illustrative Indian corporate headshot (branding testimonial quote)"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <p className="text-xs font-bold text-brand-ink/80 leading-relaxed bg-white p-4 rounded-lg shadow-xl border border-brand-ink/5">
          "From branding to web design, everything was seamless. They transformed our online presence with a fresh, modern look."
        </p>
      </motion.div>
    </section>
  );
};

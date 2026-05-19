'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { marketingPhotos } from '../constants/marketingPhotos';
import { useWhatsAppHref } from '../hooks/useWhatsAppHref';
import { MagneticButton } from './MagneticButton';

export const Hero = () => {
  const heroCtaHref = useWhatsAppHref(
    'I’d love to talk about kicking off something new with you, whether that is product, web, or growth. When might work for a quick chat?',
  );
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col swiss-grid overflow-hidden bg-white">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="flex-1 grid lg:grid-cols-[1.2fr_0.8fr] items-stretch relative z-10">
        {/* Left Content Pane */}
        <div className="swiss-cell flex flex-col justify-between pt-24 md:pt-32 pb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mb-8 aspect-[4/3] w-full max-w-md overflow-hidden rounded-sm border border-brand-border shadow-[0_32px_80px_-40px_rgba(0,0,0,0.25)] lg:hidden">
              <img
                src={marketingPhotos.heroPortrait}
                alt="Team collaborating on a digital product build"
                className="h-full w-full object-cover brightness-110"
                referrerPolicy="no-referrer"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-ink/15 to-transparent" aria-hidden />
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black uppercase leading-[0.8] md:leading-[0.75] tracking-[-0.06em] mb-8 md:mb-12">
              BUILD <span className="text-brand-accent">BEYOND</span> LIMITS.
            </h1>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-end">
              <p className="text-lg md:text-xl font-medium leading-relaxed md:leading-[30px] text-brand-ink/80 max-w-sm">
                We don't just build websites. We engineer high-stakes digital ecosystems that dominate search, automate growth, and redefine your market position.
              </p>
              <div className="flex flex-col gap-6">
                <MagneticButton href={heroCtaHref} className="btn-swiss p-4 md:py-6 md:px-12 text-lg group overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3 text-[18px] md:text-lg text-left leading-[28px] md:leading-normal">
                    START YOUR EVOLUTION <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-500" />
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-brand-accent -z-0"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                </MagneticButton>
                <div className="flex items-center gap-4 px-4">
                  <div className="flex -space-x-3">
                    {['🇮🇳', '🇦🇪', '🇸🇦', '🇰🇼'].map((flag, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-xl cursor-pointer hover:scale-110 transition-transform shadow-sm">
                        {flag}
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-brand-muted">
                    TRUSTED BY <br /> 50+ GLOBAL BRANDS
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            style={{ opacity }}
            className="mt-20 hidden items-center justify-between border-t border-brand-border pt-8 md:flex"
          >
            <div className="flex gap-12">
              {['WEB', 'APP', 'AI', 'SEO'].map((tag, i) => (
                <div key={tag} className="flex flex-col gap-1">
                  <span className="label-micro text-[8px] opacity-40">0{i+1}</span>
                  <span className="font-display font-bold text-sm tracking-widest">{tag}</span>
                </div>
              ))}
            </div>
            <div className="hidden sm:block">
            </div>
          </motion.div>
        </div>

        {/* Right Visual Pane */}
        <div className="hidden lg:flex swiss-cell bg-slate-50 flex-col justify-center items-center relative overflow-hidden">
          <motion.div 
            style={{ y: imageY }}
            className="relative z-10 w-full max-w-md aspect-[3/4] rounded-sm overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border border-brand-border"
          >
            <img 
              src={marketingPhotos.heroPortrait} 
              alt="Team collaborating on a digital product build" 
              className="w-full h-full object-cover brightness-110 transition-all duration-1000 ease-in-out scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/20 to-transparent" />
          </motion.div>

          {/* Floating Decorative Text */}
          <motion.div 
            style={{ y: textY }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none"
          >
            <h2 className="text-[20vw] font-black text-brand-ink/[0.03] uppercase leading-none text-center whitespace-nowrap">
              SUPERIORITY
            </h2>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

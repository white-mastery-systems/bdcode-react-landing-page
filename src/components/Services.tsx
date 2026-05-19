'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { marketingPhotos } from '../constants/marketingPhotos';
import { SectionLabel } from './SectionLabel';

export const Services = () => {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const steps = [
    { 
      title: 'Product Architecture', 
      desc: 'Defining the blueprint for scalable, future-proof digital ecosystems.',
      image: marketingPhotos.serviceArchitecture,
      path: '/services/product-architecture'
    },
    { 
      title: 'Full-Stack Engineering', 
      desc: 'High-performance development across the entire technical stack.',
      image: marketingPhotos.serviceFullStack,
      path: '/services/full-stack-engineering'
    },
    { 
      title: 'DevOps & Cloud', 
      desc: 'Automated deployment pipelines and resilient cloud infrastructure.',
      image: marketingPhotos.serviceDevOps,
      path: '/services/devops-cloud'
    },
    { 
      title: 'Mobile Development', 
      desc: 'Native and cross-platform apps designed for maximum engagement.',
      image: marketingPhotos.serviceMobile,
      path: '/services/mobile-development'
    },
    { 
      title: 'AI Engineering', 
      desc: 'Integrating advanced machine learning and LLMs into your workflow.',
      image: marketingPhotos.serviceAi,
      path: '/services/ai-engineering'
    },
    { 
      title: 'UI/UX Design', 
      desc: 'Human-centric interfaces that prioritise usability and conversion.',
      image: marketingPhotos.serviceUiUx,
      path: '/services/ui-ux-design'
    },
    { 
      title: 'SEO & Growth', 
      desc: 'Data-driven strategies to dominate search and scale acquisition.',
      image: marketingPhotos.serviceSeo,
      path: '/services/seo-growth'
    }
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  const handleServiceClick = (path?: string) => {
    if (path) {
      router.push(path);
    }
  };

  return (
    <section
      id="services"
      className="scroll-mt-20 py-16 md:py-32 px-6 md:px-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
          <div>
            <SectionLabel text="What we do" className="mb-4" />
            <h2 className="text-4xl md:text-7xl font-black uppercase leading-none">Our Services</h2>
          </div>
          <p className="label-micro max-w-xs md:text-right opacity-60">
            COMPREHENSIVE DIGITAL SOLUTIONS <br className="hidden md:block" />
            FOR THE MODERN ENTERPRISE.
          </p>
        </div>

        <div className="relative border-y border-brand-border">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleServiceClick(step.path)}
              className="relative py-10 md:py-16 border-b border-brand-border last:border-b-0 group cursor-pointer transition-colors duration-300 hover:bg-brand-accent"
            >
              <div className="flex items-center justify-between px-2 md:px-8 relative z-10">
                <div className="flex items-center gap-6 md:gap-24">
                  <span className="font-mono text-[10px] md:text-xs font-bold text-brand-muted group-hover:text-white transition-colors">
                    0{idx + 1}
                  </span>
                  <h4 className="text-2xl md:text-8xl font-bold group-hover:text-white transition-colors tracking-tight">
                    {step.title}
                  </h4>
                </div>
                
                <div className="opacity-40 md:opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 md:translate-x-4 group-hover:translate-x-0">
                  <ArrowRight size={32} className="md:w-[60px] md:h-[60px] text-brand-ink group-hover:text-white" strokeWidth={1} />
                </div>
              </div>

              {/* Hover Image Reveal - Hidden on Mobile */}
              <div className="hidden md:block">
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                      className="fixed pointer-events-none z-50 w-80 h-56 rounded-xl overflow-hidden shadow-2xl border-4 border-white"
                      style={{ 
                        left: mousePosition.x + 40, 
                        top: mousePosition.y - 100 
                      }}
                    >
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

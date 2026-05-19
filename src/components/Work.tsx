'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { marketingPhotos } from '../constants/marketingPhotos';
import { SectionLabel } from './SectionLabel';

type WorkProject = {
  title: string;
  category: string;
  image: string;
  path?: string;
};

export const Work = () => {
  const projects: WorkProject[] = [
    {
      title: 'Premium sauces & condiments brand',
      category: 'SEO · AEO & AI search visibility',
      image: marketingPhotos.workCaseSeoCondiments,
      path: '/work/premium-sauces-aeo',
    },
    {
      title: 'Private label clothing manufacturer',
      category: 'SEO · Google & AI discovery for bulk buyers',
      image: marketingPhotos.workCaseSeoApparel,
      path: '/work/private-label-clothing-seo',
    },
  ];

  return (
    <section id="work" className="scroll-mt-20 py-16 md:py-32 px-8 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <SectionLabel text="300+ Projects Delivered" className="mb-6" />
          <h2 className="text-4xl md:text-7xl font-black uppercase leading-[0.85] tracking-tighter">
            <span className="text-brand-muted">Our past</span>
            <br className="hidden md:block" /> work
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex min-h-[400px] flex-col justify-between rounded-sm border border-brand-border bg-slate-50 p-10"
          >
            <div>
              <p className="label-micro mb-12">(RECENT PROJECTS)</p>
              <div className="flex items-baseline gap-4">
                <span className="text-8xl font-black">171</span>
                <p className="text-brand-muted text-sm font-bold uppercase leading-tight">
                  Completed <br /> Projects
                </p>
              </div>
            </div>
          </motion.div>

          {/* Project Cards */}
          {projects.map((project, idx) => {
            const body = (
              <>
                <div className="relative mb-6 aspect-square overflow-hidden rounded-sm bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {project.path ? (
                    <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-sm bg-brand-ink/85 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-white">
                      Case study <ArrowRight className="h-3 w-3" aria-hidden />
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <span className="font-medium text-brand-muted">{project.category}</span>
                </div>
              </>
            );

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx + 1) * 0.1 }}
                className={project.path ? '' : 'cursor-default'}
              >
                {project.path ? (
                  <Link
                    href={project.path}
                    className="group block cursor-pointer rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-ink focus-visible:ring-offset-2"
                    aria-label={`Open case study: ${project.title}`}
                  >
                    {body}
                  </Link>
                ) : (
                  <div className="group block">{body}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

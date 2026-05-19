'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useWhatsAppHref } from '../hooks/useWhatsAppHref';
import { SectionLabel } from './SectionLabel';
import { BLOG_INDEX, getArticle } from '../data/blog';

const INSIGHTS_COUNT = 4;

function byNewestFirst(a: (typeof BLOG_INDEX)[0], b: (typeof BLOG_INDEX)[0]) {
  return new Date(b.dateLabel).getTime() - new Date(a.dateLabel).getTime();
}

export const Insights = () => {
  const viewBlogHref = useWhatsAppHref(
    'I was hoping to read your latest insights. Could you share where to find your blog or send me a good place to start?',
  );
  const latestFour = [...BLOG_INDEX].sort(byNewestFirst).slice(0, INSIGHTS_COUNT);
  const primary = latestFour[0];
  const secondary = latestFour.slice(1);
  const primaryArticle = primary ? getArticle(primary.slug) : undefined;

  if (!primary) {
    return (
      <section id="insights" className="scroll-mt-20 bg-slate-50 px-8 py-16 md:px-20 md:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <SectionLabel text="Blogs" className="mb-4 justify-center" />
          <h2 className="mb-6 text-4xl font-black uppercase leading-[0.88] tracking-tighter md:text-6xl">
            <span className="block">Insights</span>
            <span className="block text-brand-muted">&amp; ideas</span>
          </h2>
          <a href={viewBlogHref} target="_blank" rel="noopener noreferrer" className="btn-swiss inline-flex">
            View blog
          </a>
        </div>
      </section>
    );
  }

  const primaryHref = `/blog/${primary.slug}`;

  return (
    <section id="insights" className="scroll-mt-20 bg-slate-50 px-8 py-16 md:px-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-4">
            <SectionLabel text="Blogs" />
            <h2 className="text-4xl font-black uppercase leading-[0.88] tracking-tighter md:text-7xl">
              <span className="block">Insights</span>
              <span className="block text-brand-muted">&amp; ideas</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="group flex shrink-0 items-center gap-2 text-sm font-bold transition-colors hover:text-brand-accent"
          >
            All blogs{' '}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" strokeWidth={2} />
          </Link>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <Link href={primaryHref} className="group block cursor-pointer">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-sm border border-brand-border bg-slate-100">
                <img
                  src={primary.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
              </div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="bg-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-brand-ink shadow-sm ring-1 ring-brand-border/80">
                  {primary.category}
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-muted">
                  {primary.dateLabel}
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-muted">
                  {primary.readTime}
                </span>
              </div>
              <h3 className="text-3xl font-bold leading-tight tracking-tight transition-colors group-hover:text-brand-accent md:text-4xl">
                {primary.title}
              </h3>
              <p className="mt-4 line-clamp-3 max-w-xl text-sm font-medium leading-relaxed text-brand-muted md:text-base">
                {primary.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-brand-ink transition-colors group-hover:text-brand-accent">
                Read article <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden />
              </span>
            </motion.div>
          </Link>

          <div className="flex flex-col gap-12 lg:gap-16">
            {secondary.length > 0 ? (
              secondary.map((post, idx) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block cursor-pointer">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="bg-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-brand-ink ring-1 ring-brand-border/80">
                        {post.category}
                      </span>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-muted">
                        {post.dateLabel}
                      </span>
                    </div>
                    <h3 className="mb-4 text-2xl font-bold leading-tight tracking-tight transition-colors group-hover:text-brand-accent md:text-3xl">
                      {post.title}
                    </h3>
                    <p className="mb-6 max-w-md text-sm font-medium leading-relaxed text-brand-muted">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-xs font-bold transition-colors group-hover:text-brand-accent">
                      <ArrowRight size={14} className="text-brand-accent" strokeWidth={2} aria-hidden /> Read now
                    </span>
                  </motion.div>
                </Link>
              ))
            ) : primaryArticle ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border border-brand-border bg-white p-8 shadow-sm md:p-10"
              >
                <SectionLabel text="From this piece" className="mb-6" />
                <ul className="mb-8 space-y-4">
                  {primaryArticle.tldr.slice(0, 4).map((line) => (
                    <li key={line} className="flex gap-3 text-sm font-medium leading-snug text-brand-ink/85 md:text-base">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={primaryHref}
                  className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-brand-ink transition-colors hover:text-brand-accent"
                >
                  Read full article <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                </Link>
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

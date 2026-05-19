'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, Clock } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { useWhatsAppHref } from '../hooks/useWhatsAppHref';
import { MagneticButton } from '../components/MagneticButton';
import { getArticle, type ArticleBlock } from '../data/blog';

function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  let h2Count = 0;
  return (
    <div className="blog-prose">
      {blocks.map((block, i) => {
        if (block.type === 'lead') {
          return (
            <p
              key={i}
              className="mb-10 border-l-4 border-brand-accent bg-slate-50/80 py-4 pl-6 pr-4 text-xl font-medium leading-relaxed text-brand-ink/90 md:text-2xl"
            >
              {block.text}
            </p>
          );
        }
        if (block.type === 'p') {
          return (
            <p key={i} className="mb-6 text-lg leading-[1.75] text-brand-ink/80 md:text-[1.0625rem]">
              {block.text}
            </p>
          );
        }
        if (block.type === 'h2') {
          const isFirstH2 = h2Count++ === 0;
          return (
            <h2
              key={i}
              id={block.id}
              className={`scroll-mt-28 mb-6 text-2xl font-black uppercase leading-[1.05] tracking-tight text-brand-ink md:mb-8 md:text-4xl ${
                isFirstH2 ? 'mt-10 md:mt-14' : 'mt-14 md:mt-20'
              }`}
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === 'ul') {
          return (
            <ul
              key={i}
              className="mb-10 space-y-3 border border-brand-border bg-white px-6 py-6 md:px-8 md:py-7"
            >
              {block.items.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-brand-ink/85 md:text-lg">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </div>
  );
}

export const BlogPost = ({ slug }: { slug: string }) => {
  const article = slug ? getArticle(slug) : undefined;
  const conversationIntent = article
    ? `I just read “${article.meta.title}” and would love to talk through how some of this could apply to our product or roadmap.`
    : 'I was reading something on your blog and would love to connect with someone on the team.';
  const conversationHref = useWhatsAppHref(conversationIntent);

  if (!article) {
    return (
      <div className="pt-20">
        <div className="border-b border-brand-border px-6 py-4 md:px-20">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Insights', to: '/blog' }, { label: 'Not found' }]} />
          </div>
        </div>
        <section className="px-6 py-32 md:px-20">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="mb-4 text-4xl font-black uppercase tracking-tight">Post not found</h1>
            <p className="mb-10 text-brand-muted">This article does not exist or has been moved.</p>
            <Link href="/blog" className="btn-swiss inline-flex">
              Back to insights
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const { meta, seoDescription, tldr, toc, body } = article;

  return (
    <div className="pt-20">
      <div className="border-b border-brand-border bg-white px-6 py-4 md:px-20">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Insights', to: '/blog' },
              { label: meta.title },
            ]}
          />
        </div>
      </div>

      <article>
        <header className="relative overflow-hidden border-b border-brand-border bg-gradient-to-b from-slate-50 to-white px-6 py-16 md:px-20 md:py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              maskImage: 'radial-gradient(ellipse 80% 70% at 50% 0%, black, transparent)',
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-4xl">
            <SectionLabel text="Insights" className="mb-6" />
            <div className="mb-6 flex flex-wrap items-center gap-3 text-[11px] font-mono font-bold uppercase tracking-widest text-brand-muted">
              <span className="rounded-full border border-brand-border bg-white px-3 py-1 text-brand-ink">{meta.category}</span>
              <span>{meta.dateLabel}</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                {meta.readTime}
              </span>
            </div>
            <h1 className="mb-8 text-4xl font-black uppercase leading-[0.95] tracking-tight text-brand-ink md:text-6xl lg:text-7xl">
              {meta.title}
            </h1>
            <p className="max-w-3xl text-lg font-medium leading-relaxed text-brand-ink/70 md:text-xl">{seoDescription}</p>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-6 py-12 md:px-20 md:py-16">
          <div className="mb-10 lg:hidden">
            <p className="label-micro mb-3">On this page</p>
            <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="shrink-0 rounded-full border border-brand-border bg-slate-50 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-brand-ink transition-colors hover:border-brand-ink hover:bg-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_16rem]">
            <div>
              <div className="relative mb-12 overflow-hidden rounded-2xl border border-brand-border bg-slate-100 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.25)]">
                <div className="aspect-[21/9] min-h-[200px] md:aspect-[2.4/1]">
                  <img
                    src={meta.image}
                    alt=""
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/50 via-transparent to-transparent" aria-hidden />
              </div>

              <aside className="mb-14 rounded-2xl border border-brand-ink/10 bg-brand-ink p-8 text-white shadow-xl md:p-10">
                <p className="label-micro mb-4 text-brand-accent">TL;DR</p>
                <ul className="space-y-4">
                  {tldr.map((line) => (
                    <li key={line} className="flex gap-3 text-sm font-medium leading-snug text-white/90 md:text-base">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </aside>

              <ArticleBody blocks={body} />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 border border-brand-border bg-slate-50 p-8 md:p-12"
              >
                <p className="mb-6 text-lg font-bold uppercase tracking-tight text-brand-ink md:text-xl">
                  Map your workflow with us
                </p>
                <p className="mb-8 max-w-2xl text-brand-ink/70">
                  Whether you need automation, an agent, or a hybrid, and we&apos;ll help you decide and ship.
                </p>
                <MagneticButton href={conversationHref} className="btn-swiss">
                  Start a conversation
                </MagneticButton>
              </motion.div>
            </div>

            <aside className="hidden lg:block">
              <nav
                className="sticky top-28 border border-brand-border bg-white p-6 shadow-sm"
                aria-label="Table of contents"
              >
                <p className="label-micro mb-4 text-brand-muted">Contents</p>
                <ol className="space-y-3 border-l-2 border-brand-border pl-4">
                  {toc.map((item, idx) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="group flex gap-2 text-sm font-semibold leading-snug text-brand-ink/70 transition-colors hover:text-brand-ink"
                      >
                        <span className="font-mono text-[10px] text-brand-muted group-hover:text-brand-accent">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          </div>
        </div>

        <footer className="border-t border-brand-border bg-white px-6 py-12 md:px-20">
          <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-brand-ink transition-colors hover:text-brand-accent"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden />
              All articles
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
};

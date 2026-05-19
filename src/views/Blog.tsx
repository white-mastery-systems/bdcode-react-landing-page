'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Search, Sparkles } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { BLOG_INDEX, getCategoriesFromIndex } from '../data/blog';

const BLOG_NEWSLETTER_FORMSUBMIT = 'https://formsubmit.co/ajax/sales@bdcode.in';

export const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const categories = useMemo(() => getCategoriesFromIndex(), []);

  const filteredPosts = BLOG_INDEX.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const heroFeatured =
    BLOG_INDEX.find((p) => p.featured) ?? (BLOG_INDEX.length > 0 ? BLOG_INDEX[0] : undefined);

  const showFeaturedBand = Boolean(
    heroFeatured &&
      filteredPosts.some((p) => p.slug === heroFeatured.slug) &&
      searchQuery === '' &&
      (activeCategory === 'All' || heroFeatured.category === activeCategory)
  );

  const archiveList = showFeaturedBand ? filteredPosts.filter((p) => !p.featured) : filteredPosts;

  return (
    <div className="pt-20">
      <div className="border-b border-brand-border bg-white px-6 py-4 md:px-20">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Insights' }]} />
        </div>
      </div>
      <section className="relative overflow-hidden border-b border-brand-border bg-white px-6 py-16 md:px-20 md:py-24 lg:py-28">
        <div
          className="pointer-events-none absolute right-0 top-0 h-[min(70vw,520px)] w-[min(70vw,520px)] translate-x-1/4 -translate-y-1/4 rounded-full bg-brand-accent/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full bg-slate-200/80 blur-2xl"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel text="Blogs" className="mb-6" />
            <h1 className="mb-6 text-5xl font-black uppercase leading-[0.88] tracking-tighter text-brand-ink sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block">Insights</span>
              <span className="block text-brand-muted">&amp; ideas</span>
            </h1>
            <p className="max-w-xl text-lg font-medium leading-relaxed text-brand-ink/70 md:text-xl">
              Design, engineering, AI, and growth. practical notes from how we build and ship.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative border border-brand-border bg-slate-50/80 p-6 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-8">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.2]"
                style={{
                  backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
                aria-hidden
              />
              <div className="relative">
                <div className="mb-3 flex items-center gap-2 text-brand-muted">
                  <Sparkles className="h-4 w-4 text-brand-accent" strokeWidth={2} aria-hidden />
                  <span className="label-micro">Search blogs</span>
                </div>
                <div className="relative">
                  <Search
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-muted"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <input
                    type="search"
                    placeholder="Keywords, topics…"
                    className="w-full border border-brand-border bg-white py-4 pl-12 pr-4 font-sans text-sm font-medium text-brand-ink placeholder:text-brand-muted/70 focus:border-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-ink/10 md:text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-20 z-40 border-b border-brand-border bg-white/90 px-6 py-4 backdrop-blur-md md:px-20">
        <div className="mx-auto flex max-w-7xl items-center gap-4 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <span className="label-micro shrink-0 text-brand-muted">Filter</span>
          <div className="flex shrink-0 gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap rounded-full border px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] transition-all ${
                  activeCategory === cat
                    ? 'border-brand-ink bg-brand-ink text-white'
                    : 'border-brand-border bg-white text-brand-ink hover:border-brand-ink/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {showFeaturedBand && heroFeatured ? (
        <section className="border-b border-brand-border bg-gradient-to-b from-slate-50 to-white px-6 py-16 md:px-20 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <SectionLabel text="Featured" className="mb-2" />
                <h2 className="text-3xl font-black uppercase leading-none tracking-tight text-brand-ink md:text-5xl">
                  Start here
                </h2>
              </div>
              <span className="hidden font-mono text-[10px] font-bold uppercase tracking-widest text-brand-muted sm:block">
                {String(BLOG_INDEX.length).padStart(2, '0')} articles
              </span>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link
                href={`/blog/${heroFeatured.slug}`}
                className="group relative grid overflow-hidden rounded-3xl border border-brand-border bg-brand-ink text-white shadow-[0_32px_100px_-40px_rgba(0,0,0,0.45)] lg:grid-cols-[1.15fr_1fr]"
              >
                <div className="relative aspect-[16/11] min-h-[240px] lg:aspect-auto lg:min-h-[420px]">
                  <img
                    src={heroFeatured.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-brand-ink/50 lg:to-brand-ink"
                    aria-hidden
                  />
                  <div className="absolute left-6 top-6 flex items-center gap-2 md:left-8 md:top-8">
                    <span className="rounded-full bg-brand-accent px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-brand-ink">
                      {heroFeatured.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-between p-8 md:p-12 lg:p-14">
                  <div>
                    <div className="mb-6 flex flex-wrap items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-widest text-white/50">
                      <span>{heroFeatured.dateLabel}</span>
                      <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden />
                      <span>{heroFeatured.readTime}</span>
                    </div>
                    <h3 className="mb-6 text-3xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-4xl lg:text-5xl">
                      {heroFeatured.title}
                    </h3>
                    <p className="max-w-xl text-base font-medium leading-relaxed text-white/65 md:text-lg">
                      {heroFeatured.excerpt}
                    </p>
                  </div>
                  <div className="mt-10 flex items-center justify-between gap-4 border-t border-white/10 pt-8">
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-brand-accent transition-transform group-hover:gap-3">
                      Read article <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                    </span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-brand-ink">
                      <ArrowUpRight className="h-5 w-5" strokeWidth={2} aria-hidden />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      ) : null}

      <section className="px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel text="Archive" className="mb-3" />
              <h2 className="text-3xl font-black uppercase leading-none tracking-tight md:text-4xl">All articles</h2>
            </div>
          </div>

          {archiveList.length > 0 ? (
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {archiveList.map((post, idx) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-xl border border-brand-border bg-slate-100">
                      <img
                        src={post.image}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-brand-ink/0 transition-colors group-hover:bg-brand-ink/10" aria-hidden />
                    </div>
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="rounded-sm border border-brand-border bg-slate-50 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-brand-ink">
                        {post.category}
                      </span>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-muted">
                        {post.dateLabel}
                      </span>
                    </div>
                    <h3 className="mb-3 text-xl font-black uppercase leading-tight tracking-tight text-brand-ink transition-colors group-hover:text-brand-accent md:text-2xl">
                      {post.title}
                    </h3>
                    <p className="mb-5 line-clamp-3 text-sm font-medium leading-relaxed text-brand-muted">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-brand-ink">
                      Read
                      <ArrowRight className="h-3.5 w-3.5 text-brand-accent" strokeWidth={2} aria-hidden />
                    </span>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="rounded-2xl border border-brand-border bg-slate-50 px-8 py-20 text-center">
              <h3 className="mb-3 text-2xl font-black uppercase tracking-tight">No matches</h3>
              <p className="mx-auto mb-8 max-w-md text-brand-muted">Try another keyword or clear filters.</p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="btn-swiss"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-brand-border bg-slate-50/50 px-8 py-20 text-center">
              <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-brand-muted">Coming soon</p>
              <p className="text-lg font-bold uppercase tracking-tight text-brand-ink/80">More articles in the works.</p>
              <p className="mx-auto mt-3 max-w-md text-sm text-brand-muted">
                We publish when we have something worth your time. Check back or read the featured piece above.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-brand-border bg-brand-ink px-6 py-20 text-white md:px-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel text="Stay updated" dark className="mx-auto mb-6 justify-center [&_p]:text-white/50" />
          <h2 className="mb-6 text-4xl font-black uppercase leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl">
            New drops in <span className="text-brand-accent">your inbox</span>
          </h2>
          <p className="mx-auto mb-12 max-w-lg text-lg font-medium text-white/55 md:text-xl">
            Long-form notes and playbooks. no fluff. We&apos;ll only write when it&apos;s worth reading.
          </p>
          <form
            className="mx-auto flex max-w-lg flex-col gap-3"
            onSubmit={async (e) => {
              e.preventDefault();
              const trimmed = newsletterEmail.trim();
              if (!trimmed) return;
              setNewsletterStatus('sending');
              try {
                const body = new URLSearchParams({
                  email: trimmed,
                  _replyto: trimmed,
                  _subject: 'Blog newsletter signup — bdcode.in',
                  _captcha: 'false',
                  message: 'Subscribed from Insights (/blog). Add this address to the newsletter list.',
                });
                const res = await fetch(BLOG_NEWSLETTER_FORMSUBMIT, {
                  method: 'POST',
                  headers: { Accept: 'application/json' },
                  body,
                });
                const data = (await res.json().catch(() => null)) as {
                  success?: string | boolean;
                  message?: string;
                } | null;
                const accepted =
                  res.ok &&
                  data &&
                  (data.success === true || data.success === 'true');
                if (!accepted) {
                  throw new Error(data?.message ?? 'Request failed');
                }
                setNewsletterStatus('success');
                setNewsletterEmail('');
              } catch (err) {
                console.error('Blog newsletter submit failed', err);
                setNewsletterStatus('error');
              }
            }}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <label htmlFor="blog-email" className="sr-only">
                Email
              </label>
              <input
                id="blog-email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                value={newsletterEmail}
                onChange={(e) => {
                  setNewsletterEmail(e.target.value);
                  if (newsletterStatus !== 'idle') setNewsletterStatus('idle');
                }}
                disabled={newsletterStatus === 'sending'}
                className="min-h-[52px] flex-1 border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white placeholder:text-white/35 focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent disabled:opacity-60 md:text-base"
              />
              <button
                type="submit"
                disabled={newsletterStatus === 'sending'}
                className="min-h-[52px] shrink-0 bg-brand-accent px-8 font-mono text-[11px] font-bold uppercase tracking-widest text-brand-ink transition-colors hover:bg-white disabled:opacity-60"
              >
                {newsletterStatus === 'sending' ? 'Sending…' : 'Subscribe'}
              </button>
            </div>
            <p className="min-h-[1.25rem] text-center text-sm font-medium text-white/70" role="status" aria-live="polite">
              {newsletterStatus === 'success'
                ? 'Thanks — we received your email.'
                : newsletterStatus === 'error'
                  ? 'Something went wrong. Please try again in a moment.'
                  : null}
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

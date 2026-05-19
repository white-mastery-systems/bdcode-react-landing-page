'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  Bot,
  Layers,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  ChevronRight,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { MagneticButton } from '../components/MagneticButton';
import { marketingPhotos } from '../constants/marketingPhotos';
import { useWhatsAppHref } from '../hooks/useWhatsAppHref';

const waPrimary = (extra: string) =>
  `We saw your premium sauces / CPG case study on the site.${extra} Could we book a short call to see if a similar SEO + AEO programme fits our brand?`;

export const CaseStudyPremiumSaucesAeo = () => {
  const waHero = useWhatsAppHref(waPrimary(' We sell in competitive categories and care about Google plus AI-assisted discovery.'));
  const waMid = useWhatsAppHref(
    waPrimary(' We want clearer product entities, FAQs, and schema so assistants and search can cite us correctly.'),
  );
  const waFooter = useWhatsAppHref(
    'We’re ready to scope SEO + AEO for our CPG brand (similar to your sauces & condiments engagement). Please share next steps and typical timelines.',
  );

  const outcomes = [
    {
      title: 'AI-ready answers',
      desc: 'Pages structured so assistants and AI overviews can surface accurate product facts, not a competitor’s guess.',
      icon: Bot,
    },
    {
      title: 'Organic discovery',
      desc: 'Category and “best for…” demand captured with clusters, internal links, and intent-led copy, not one lonely homepage.',
      icon: Search,
    },
    {
      title: 'Entity & trust signals',
      desc: 'Schema, reviews, and brand consistency so Google (and shoppers) understand who you are across the catalogue.',
      icon: Sparkles,
    },
  ];

  const approach = [
    {
      title: 'Answer Engine Optimisation (AEO)',
      items: [
        'FAQ and HowTo patterns where buyers actually ask questions',
        'Concise answer blocks + depth for humans and machines',
        'Monitoring how the brand appears in AI-style answers vs. blue links alone',
      ],
    },
    {
      title: 'Technical & on-page SEO',
      items: [
        'Core Web Vitals, crawl budget, and indexation hygiene for large catalogues',
        'Title/meta and H-structure aligned to flavour lines, use-cases, and distribution',
        'Structured data (Product, Organization, BreadcrumbList) implemented safely',
      ],
    },
    {
      title: 'Content architecture',
      items: [
        'Pillar + cluster map for sauces, pairings, recipes, and retail / D2C journeys',
        'Internal linking that pushes authority to money pages without cannibalisation',
        'Editorial guidelines so new SKU launches stay SEO- and AEO-consistent',
      ],
    },
  ];

  const proofPoints = [
    'Stronger visibility where shoppers compare ingredients, heat levels, and pairings',
    'Richer SERP real estate through eligible rich results where it matters for CPG',
    'Clearer paths from discovery → category → SKU → cart or store locator',
    'Less “wrong brand” risk when assistants summarise the category',
  ];

  const faqs = [
    {
      q: 'Is this only for Google?',
      a: 'No. The same entity clarity, structured data, and answer-first content helps traditional search and AI-assisted experiences that pull from the open web.',
    },
    {
      q: 'How long before we see movement?',
      a: 'Technical and schema wins can surface quickly; competitive queries typically need 8–16 weeks of sustained iteration. We’ll set expectations on your exact category difficulty in discovery.',
    },
    {
      q: 'Do you replace our SEO agency?',
      a: 'We can lead end-to-end or partner with your team. Many CPG brands bring us in for an AEO + technical sprint, then keep us on a monthly optimisation cadence.',
    },
  ];

  return (
    <div className="pt-20">
      <div className="border-b border-brand-border bg-white px-6 py-4 md:px-20">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Work', to: '/#work' },
              { label: 'Premium sauces · AEO case study' },
            ]}
          />
        </div>
      </div>

      <section className="border-b border-brand-border bg-white px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionLabel text="Case study · CPG / SEO" className="mb-6" />
            <h1 className="mb-6 text-4xl font-black uppercase leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl">
              Premium sauces <span className="text-brand-accent">&amp;</span> condiments
            </h1>
            <p className="mb-4 text-lg font-bold uppercase tracking-wide text-brand-ink/70 md:text-xl">
              Improved AI search visibility &amp; organic discovery with AEO
            </p>
            <p className="mb-10 max-w-xl text-lg font-medium leading-relaxed text-brand-ink/80 md:text-xl">
              When buyers ask assistants for the &ldquo;best&rdquo; hot sauce, marinade, or table condiment, the winner is
              whoever is clearest, fastest, and most trusted. This engagement rebuilt discovery for a premium brand in
              that exact fight.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <MagneticButton href={waHero} className="btn-swiss p-4 md:px-10 md:py-5 text-base">
                Book a 15-min fit call
              </MagneticButton>
              <a
                href="#approach"
                className="px-4 text-center text-sm font-bold uppercase tracking-widest text-brand-ink underline decoration-brand-accent decoration-2 underline-offset-4 hover:text-brand-accent"
              >
                See how we did it
              </a>
            </div>
            <p className="mt-8 max-w-lg text-sm font-medium leading-relaxed text-brand-muted">
              Based on bdcode_&apos;s SEO case study: premium sauces &amp; condiments. AI search visibility and organic
              discovery through Answer Engine Optimisation (AEO). Exact metrics available under NDA on enquiry.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square overflow-hidden rounded-sm border border-brand-border bg-slate-100 shadow-xl"
          >
            <img
              src={marketingPhotos.workCaseSeoCondiments}
              alt="Premium sauces and condiments case study"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-ink/90 to-transparent px-6 py-8 text-white">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent">Outcome</p>
              <p className="mt-1 text-lg font-black uppercase leading-tight md:text-xl">
                Discovery that survives AI summaries &amp; crowded SERPs
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:px-20 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <SectionLabel text="Why it worked" className="justify-center" />
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
              Built for how people <span className="text-brand-accent">actually search now</span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {outcomes.map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="rounded-sm border border-brand-border bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-brand-accent/15">
                  <Icon className="text-brand-ink" size={24} strokeWidth={2} />
                </div>
                <h3 className="mb-3 text-lg font-black uppercase leading-tight">{title}</h3>
                <p className="text-sm font-medium leading-relaxed text-brand-ink/75">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="scroll-mt-24 border-y border-brand-border bg-white px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <SectionLabel text="The programme" className="mb-4" />
            <h2 className="text-3xl font-black uppercase tracking-tighter md:text-6xl">What we shipped</h2>
            <p className="mt-6 text-lg font-medium leading-relaxed text-brand-ink/75">
              A coordinated SEO + AEO programme: make the brand the obvious, quotable answer for humans and for machines,
              without gimmicks or grey-hat schema.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-3">
            {approach.map((block) => (
              <div key={block.title} className="space-y-5">
                <div className="flex items-center gap-2">
                  <Layers className="text-brand-accent" size={22} />
                  <h3 className="text-xl font-black uppercase leading-tight">{block.title}</h3>
                </div>
                <ul className="space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm font-bold uppercase leading-snug tracking-tight text-brand-ink/85">
                      <ChevronRight className="mt-0.5 shrink-0 text-brand-accent" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-ink px-6 py-16 text-white md:px-20 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent">Proof</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight md:text-4xl">
              Tangible shifts in how the brand shows up
            </h2>
            <ul className="mt-8 space-y-4">
              {proofPoints.map((line) => (
                <li key={line} className="flex items-start gap-3 text-base font-medium leading-relaxed text-white/85 md:text-lg">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brand-accent" size={22} />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <MagneticButton href={waMid} className="btn-swiss-accent shrink-0 px-8 py-5 text-base md:px-10 md:py-6 md:text-lg">
            Get the same playbook <ArrowRight className="ml-2 inline" size={20} />
          </MagneticButton>
        </div>
      </section>

      <section className="px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel text="Fit check" className="mb-6" />
              <h2 className="text-3xl font-black uppercase leading-none tracking-tighter md:text-5xl">
                Selling in <br />
                <span className="text-brand-accent">noisy</span> categories?
              </h2>
              <p className="mt-8 text-lg font-medium leading-relaxed text-brand-ink/75">
                If assistants summarise your category and your name never appears, you are paying for shelf space while
                digital demand leaks elsewhere. We fix that with structured answers, entities, and technical rigour, using
                the same stack we used for this sauces &amp; condiments brand.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent/15">
                  <Target className="text-brand-ink" size={28} />
                </div>
                <p className="text-sm font-bold uppercase leading-snug text-brand-ink">
                  Free scoping: send your domain + top 3 competitors on WhatsApp.
                </p>
              </div>
            </div>
            <div className="space-y-10 rounded-sm border border-brand-border bg-slate-50 p-8 md:p-12">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="text-lg font-black uppercase tracking-tight text-brand-ink">{faq.q}</h3>
                  <p className="mt-3 text-base font-medium leading-relaxed text-brand-ink/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-border bg-white px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <TrendingUp className="mx-auto mb-6 text-brand-accent" size={40} strokeWidth={2} />
          <h2 className="text-3xl font-black uppercase leading-tight md:text-6xl">
            Ready for <span className="text-brand-accent">AI-era</span> discovery?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-brand-ink/70">
            Book a short WhatsApp-led conversation. We&apos;ll confirm fit, share a sensible roadmap, and (if helpful)
            walk through how this case study maps to your catalogue.
          </p>
          <div className="mt-10 flex justify-center">
            <MagneticButton href={waFooter} className="btn-swiss p-5 text-lg md:px-14 md:py-7">
              Start on WhatsApp <ArrowRight className="ml-3 inline" size={22} />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

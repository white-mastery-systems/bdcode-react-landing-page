'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Type,
  FileText,
  Target,
  FolderTree,
  Link2,
  Search,
  Percent,
  BarChart3,
  TrendingUp,
  LineChart,
  Gauge,
  Activity,
  Rocket,
  Crosshair,
  RefreshCw,
  type LucideIcon,
} from 'lucide-react';
import { AnimatedServiceIconStack } from '../components/AnimatedServiceIconStack';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { marketingPhotos } from '../constants/marketingPhotos';
import { MagneticButton } from '../components/MagneticButton';
import { useWhatsAppHref } from '../hooks/useWhatsAppHref';

const techStack = ['GA4', 'Google Search Console', 'Ahrefs', 'Semrush', 'Hotjar', 'Looker Studio', 'Tag Manager'];

const processSteps = ['Audit', 'Strategy', 'Execute', 'Measure', 'Iterate'];

const workSamples = [
  {
    title: 'Organic pipeline for B2B SaaS',
    category: 'SEO & content',
    image: marketingPhotos.seoSampleA,
  },
  {
    title: 'Landing funnel CRO sprint',
    category: 'Conversion',
    image: marketingPhotos.seoSampleB,
  },
];

const resultMetrics = [
  {
    title: 'Traffic growth',
    description: 'Organic and total addressable sessions. trended, segmented, and tied to campaigns.',
    Icon: TrendingUp,
  },
  {
    title: 'Conversion lift',
    description: 'Form fills, sign-ups, and revenue-attributed actions across your priority funnels.',
    Icon: Percent,
  },
  {
    title: 'Keyword visibility',
    description: 'Share of voice and ranking movement across the clusters that matter to pipeline.',
    Icon: Search,
  },
];

export const SeoGrowth = () => {
  const waHero = useWhatsAppHref(
    'We’re trying to grow qualified organic traffic and tighten funnel copy. Would you be open to a conversation (and possibly an SEO audit)?',
  );
  const waFooter = useWhatsAppHref(
    'We’d like to request the SEO / growth audit you mention. Happy to share access and context so you can tell us what quick wins look like.',
  );
  const pillars = [
    {
      id: '01',
      title: 'Sales & landing page copy',
      subtitle: 'CONVERSION-FOCUSED COPYWRITING',
      Icons: [Type, FileText, Target] as LucideIcon[],
      desc: 'We write structured, conversion-focused copy for product pages, campaign pages, and core website funnels. Every word earns its place.',
      scope: [
        'Offer positioning',
        'Value proposition clarity',
        'Objection handling',
        'Structured CTAs',
        'Funnel-aligned messaging',
      ],
    },
    {
      id: '02',
      title: 'Content architecture & SEO clustering',
      subtitle: 'SEO CONTENT PLANNING & INFORMATION ARCHITECTURE',
      Icons: [FolderTree, Link2, Search] as LucideIcon[],
      desc: 'We define how your website content should be structured to rank, scale, and support product positioning. Strategy before content, always.',
      scope: [
        'Keyword research',
        'Topic mapping',
        'Page hierarchy definition',
        'Internal linking structure',
        'Content roadmap planning',
      ],
    },
    {
      id: '03',
      title: 'Conversion rate optimisation',
      subtitle: 'FUNNEL & CONVERSION OPTIMIZATION',
      Icons: [BarChart3, Percent, Activity] as LucideIcon[],
      desc: 'We analyse user behaviour and improve pages and funnels to increase sign-ups, enquiries, and sales. Data-driven decisions, not guesswork.',
      scope: [
        'Funnel analysis',
        'Page-level optimisation',
        'A/B testing strategy',
        'Drop-off diagnosis',
        'Conversion tracking refinement',
      ],
    },
    {
      id: '04',
      title: 'Analytics & reporting infrastructure',
      subtitle: 'ANALYTICS IMPLEMENTATION & PERFORMANCE TRACKING',
      Icons: [LineChart, Gauge, Activity] as LucideIcon[],
      desc: 'We implement structured tracking systems so you know what is working and what is not. Clear data, actionable insights.',
      scope: [
        'Event tracking setup',
        'Funnel tracking',
        'Goal configuration',
        'Custom dashboards',
        'KPI reporting frameworks',
      ],
    },
    {
      id: '05',
      title: 'Performance-led content strategy',
      subtitle: 'PERFORMANCE-DRIVEN CONTENT STRATEGY',
      Icons: [Rocket, Crosshair, RefreshCw] as LucideIcon[],
      desc: 'We develop content strategies tied to measurable outcomes. traffic, leads, and pipeline growth. No vanity metrics, only results.',
      scope: [
        'Organic growth modelling',
        'Competitive gap analysis',
        'Content performance audits',
        'ROI-focused planning',
        'Iterative optimisation cycles',
      ],
    },
  ];

  const outcomes = [
    {
      title: 'Rank with intent',
      description: 'Content and IA aligned to how people search. not scattershot blog volume.',
      Icon: Search,
    },
    {
      title: 'Convert the visit',
      description: 'Copy, layout, and tracking tuned so traffic turns into qualified actions.',
      Icon: Target,
    },
    {
      title: 'Prove it in the data',
      description: 'Dashboards and events your team trusts for weekly and board-level decisions.',
      Icon: LineChart,
    },
  ];

  return (
    <div className="pt-20">
      <div className="border-b border-brand-border bg-white px-6 md:px-20 py-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Services', to: '/#services' },
              { label: 'SEO & growth' },
            ]}
          />
        </div>
      </div>

      <section className="py-16 md:py-32 px-6 md:px-20 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <SectionLabel text="Service detail" className="mb-8" />
            <h1 className="text-[28px] sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight mb-8">
              <span className="block whitespace-nowrap">Grow faster.</span>
              <span className="block whitespace-nowrap">
                Rank higher. <span className="text-brand-accent">Convert</span>
              </span>
              <span className="block whitespace-nowrap">better.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-brand-ink/80 max-w-2xl mb-12">
              We build growth systems grounded in data. from conversion-focused copy and content architecture to
              analytics infrastructure and performance-led strategy.
            </p>
            <MagneticButton href={waHero} className="btn-swiss p-4 md:py-6 md:px-12 text-lg">
              GET A FREE SEO AUDIT
            </MagneticButton>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-32 px-6 md:px-20 bg-brand-accent border-y border-brand-ink/10 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 max-w-2xl">
            <SectionLabel text="Results we measure" className="mb-6" />
            <p className="text-2xl md:text-3xl font-black uppercase leading-tight tracking-tight text-brand-ink">
              Traffic, conversions, and rankings. on one coherent scorecard.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {resultMetrics.map(({ title, description, Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                className="flex flex-col gap-4 rounded-sm border border-brand-ink/10 bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-brand-border bg-slate-50 text-brand-ink">
                  <Icon size={24} strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="text-lg font-black uppercase leading-tight tracking-tight text-brand-ink">{title}</h3>
                <p className="text-sm font-medium leading-relaxed text-brand-ink/70">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-32 px-6 md:px-20 bg-slate-50 border-b border-brand-border overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 max-w-2xl">
            <SectionLabel text="How we work" className="mb-6" />
            <p className="text-2xl md:text-3xl font-black uppercase leading-tight tracking-tight text-brand-ink">
              Systems, not one-off tactics.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {outcomes.map(({ title, description, Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                className="flex flex-col gap-5 rounded-sm border border-brand-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-ink/15 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-sm border border-brand-border bg-slate-50 text-brand-ink">
                  <Icon size={28} strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="text-xl font-black uppercase leading-tight tracking-tight text-brand-ink">{title}</h3>
                <p className="text-base font-medium leading-relaxed text-brand-ink/70">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-[0.5fr_1.5fr] gap-12 md:gap-24"
            >
              <div className="space-y-6">
                <span className="label-micro font-bold text-brand-accent">[ {pillar.id} ]</span>
                <AnimatedServiceIconStack icons={pillar.Icons} />
              </div>
              <div className="space-y-8">
                <div>
                  <p className="label-micro mb-4">{pillar.subtitle}</p>
                  <h2 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter mb-6">
                    {pillar.title}
                  </h2>
                  <p className="text-xl md:text-2xl font-medium leading-relaxed text-brand-ink/70 max-w-3xl">
                    {pillar.desc}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                  <p className="label-micro md:col-span-2 mb-2">Scope includes:</p>
                  {pillar.scope.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                      <span className="text-sm font-bold uppercase tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-brand-border bg-slate-50 py-16 md:py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <SectionLabel text="Tools we use" className="mb-8" />
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tighter mb-10 max-w-3xl">
            Analytics, search, and behaviour in one stack
          </h2>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {techStack.map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-brand-border bg-white px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-brand-ink"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-6 md:px-20 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto">
          <SectionLabel text="Process" className="mb-8" />
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tighter mb-12 md:mb-16">
            Audit to iteration
          </h2>
          <ol className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 md:gap-8">
            {processSteps.map((step, i) => (
              <li key={step} className="flex flex-col gap-4 border border-brand-border bg-slate-50 p-6">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-lg font-black uppercase leading-tight tracking-tight">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-32 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionLabel text="Work samples" className="mb-8" />
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tighter mb-12">
            Recent growth engagements
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {workSamples.map((sample) => (
              <div
                key={sample.title}
                className="group overflow-hidden rounded-sm border border-brand-border bg-slate-50"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={sample.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="border-t border-brand-border bg-white p-6">
                  <p className="label-micro mb-2 text-brand-muted">{sample.category}</p>
                  <p className="text-xl font-bold uppercase tracking-tight">{sample.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-6 md:px-20 bg-brand-ink text-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-8xl font-black uppercase leading-none tracking-tighter">
            Get a free <br className="hidden md:block" />
            <span className="text-brand-accent">SEO audit</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium opacity-60">
            We&apos;ll review crawlability, content gaps, tracking, and quick wins, then propose a sequenced plan.
          </p>
          <div className="flex justify-center">
            <MagneticButton href={waFooter} className="btn-swiss-accent p-6 md:py-8 md:px-16 text-xl">
              REQUEST YOUR AUDIT <ArrowRight className="ml-4" />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

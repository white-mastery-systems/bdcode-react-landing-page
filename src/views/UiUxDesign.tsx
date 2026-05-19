'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Map,
  LayoutGrid,
  Layers,
  Palette,
  Sparkles,
  Boxes,
  Library,
  MousePointerClick,
  Play,
  ClipboardList,
  Users,
  Accessibility,
  Smartphone,
  Eye,
  Gauge,
  type LucideIcon,
} from 'lucide-react';
import { AnimatedServiceIconStack } from '../components/AnimatedServiceIconStack';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { marketingPhotos } from '../constants/marketingPhotos';
import { MagneticButton } from '../components/MagneticButton';
import { useWhatsAppHref } from '../hooks/useWhatsAppHref';

const techStack = ['Figma', 'FigJam', 'Maze', 'Hotjar', 'Notion', 'Lighthouse', 'Storybook'];

const processSteps = ['Discovery', 'Wireframe', 'UI', 'Prototype', 'Test'];

const workSamples = [
  {
    title: 'Fintech onboarding redesign',
    category: 'Product UI',
    image: marketingPhotos.uiUxSampleA,
  },
  {
    title: 'B2B dashboard design system',
    category: 'Systems',
    image: marketingPhotos.uiUxSampleB,
  },
  {
    title: 'Mobile commerce flows',
    category: 'Mobile-first',
    image: marketingPhotos.uiUxSampleC,
  },
];

export const UiUxDesign = () => {
  const waHero = useWhatsAppHref(
    'Our product UX feels uneven and we’d value a proper design audit. flows, IA, and what to fix first for conversion.',
  );
  const waFooter = useWhatsAppHref(
    'We’d like to book a discovery call for UI/UX work. brand, design system, and how you’d partner with our eng team.',
  );
  const pillars = [
    {
      id: '01',
      title: 'Product discovery & wireframing',
      subtitle: 'EXPERIENCE MAPPING & WIREFRAMING',
      Icons: [Map, LayoutGrid, Layers] as LucideIcon[],
      desc: 'We translate raw product ideas into structured, usable blueprints that define user flows and system logic. The foundation that prevents expensive rebuilds later.',
      scope: [
        'User journey mapping',
        'Information architecture',
        'Low-fidelity wireframes',
        'Feature prioritization',
        'MVP structure planning',
      ],
    },
    {
      id: '02',
      title: 'High-fidelity UI design',
      subtitle: 'UI SYSTEMS & VISUAL DESIGN',
      Icons: [Palette, Sparkles, Eye] as LucideIcon[],
      desc: 'We design polished, modern interfaces that balance clarity, aesthetics, and usability. Every screen is intentional and brand-aligned.',
      scope: [
        'Web & mobile UI design',
        'Interaction design',
        'Visual hierarchy systems',
        'Micro-interactions',
        'Brand-aligned design language',
      ],
    },
    {
      id: '03',
      title: 'Design systems',
      subtitle: 'SCALABLE DESIGN SYSTEM ARCHITECTURE',
      Icons: [Boxes, Library, LayoutGrid] as LucideIcon[],
      desc: 'We build scalable component libraries and design systems that keep products consistent and speed up developer handoff.',
      scope: [
        'Component libraries',
        'Token-based design foundations',
        'Responsive layout systems',
        'Cross-platform UI guidelines',
        'Dev-ready design documentation',
      ],
    },
    {
      id: '04',
      title: 'Interactive prototyping',
      subtitle: 'CLICKABLE PROTOTYPES & EXPERIENCE SIMULATION',
      Icons: [MousePointerClick, Play, Smartphone] as LucideIcon[],
      desc: 'We create interactive prototypes that simulate real product behaviour before development. reducing risk and aligning stakeholders faster.',
      scope: [
        'Click-through product flows',
        'User testing prototypes',
        'Stakeholder demo prototypes',
        'Motion & interaction previews',
        'Iteration-ready mockups',
      ],
    },
    {
      id: '05',
      title: 'UX research & validation',
      subtitle: 'UX RESEARCH & USABILITY TESTING',
      Icons: [ClipboardList, Users, Gauge] as LucideIcon[],
      desc: 'We validate product decisions through structured research and usability analysis. Build what users actually need, not what you think they need.',
      scope: [
        'User interviews',
        'Behavioural analysis',
        'Usability testing sessions',
        'Feedback synthesis',
        'Conversion friction analysis',
      ],
    },
    {
      id: '06',
      title: 'Accessibility & mobile-first',
      subtitle: 'ACCESSIBLE & MOBILE-OPTIMIZED DESIGN',
      Icons: [Accessibility, Smartphone, Layers] as LucideIcon[],
      desc: 'We design inclusive, mobile-first experiences that work across devices and user capabilities. Compliance meets great design.',
      scope: [
        'Mobile-first layout strategy',
        'Responsive design systems',
        'Accessibility compliance (WCAG principles)',
        'Performance-aware design',
        'Touch-optimised interaction design',
      ],
    },
  ];

  const outcomes = [
    {
      title: 'Design that converts',
      description: 'Interfaces tuned for clarity, trust, and the actions that matter to your business.',
      Icon: Sparkles,
    },
    {
      title: 'Experiences that stick',
      description: 'Coherent flows and systems so users recognise your product and come back.',
      Icon: Eye,
    },
    {
      title: 'Dev-ready handoff',
      description: 'Specs, tokens, and components your engineers can implement without guesswork.',
      Icon: Boxes,
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
              { label: 'UI/UX design' },
            ]}
          />
        </div>
      </div>

      <section className="py-16 md:py-32 px-6 md:px-20 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <SectionLabel text="Service detail" className="mb-8" />
            <h1 className="text-[28px] sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight mb-8">
              <span className="block whitespace-nowrap">Design that</span>
              <span className="block whitespace-nowrap">
                converts. <span className="text-brand-accent">Experiences</span>
              </span>
              <span className="block whitespace-nowrap">that stick.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-brand-ink/80 max-w-2xl mb-12">
              We design digital products that are intuitive, beautiful, and built for conversion. From wireframe to
              dev-ready design system. every pixel has a purpose.
            </p>
            <MagneticButton href={waHero} className="btn-swiss p-4 md:py-6 md:px-12 text-lg">
              START WITH A DESIGN AUDIT
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
            <SectionLabel text="At a glance" className="mb-6" />
            <p className="text-2xl md:text-3xl font-black uppercase leading-tight tracking-tight text-brand-ink">
              Discovery through validation. one coherent design practice.
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
                className="flex flex-col gap-5 rounded-sm border border-brand-ink/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-ink/20 hover:shadow-lg"
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
          <SectionLabel text="Tool stack" className="mb-8" />
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tighter mb-10 max-w-3xl">
            Figma to insight: the tools we integrate
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
            Discovery to shipped UI
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
          <SectionLabel text="Portfolio preview" className="mb-8" />
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tighter mb-12">
            Recent design work
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
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
            Start with a <br className="hidden md:block" />
            <span className="text-brand-accent">design audit</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium opacity-60">
            Bring your product, metrics, and constraints, so we&apos;ll map the fastest path to clearer UX and stronger
            conversion.
          </p>
          <div className="flex justify-center">
            <MagneticButton href={waFooter} className="btn-swiss-accent p-6 md:py-8 md:px-16 text-xl">
              BOOK A DISCOVERY CALL <ArrowRight className="ml-4" />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

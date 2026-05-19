'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Monitor,
  Code2,
  Layers,
  Server,
  Network,
  Cpu,
  Database,
  HardDrive,
  Cloud,
  Gauge,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { AnimatedServiceIconStack } from '../components/AnimatedServiceIconStack';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { marketingPhotos } from '../constants/marketingPhotos';
import { MagneticButton } from '../components/MagneticButton';
import { useWhatsAppHref } from '../hooks/useWhatsAppHref';

const techStack = [
  'React',
  'Next.js',
  'Vue',
  'Angular',
  'Node.js',
  'Python',
  'Django',
  'FastAPI',
  'PostgreSQL',
  'MongoDB',
  'Firebase',
  'Supabase',
];

const processSteps = ['Discovery', 'Architecture', 'Build', 'QA', 'Launch'];

const workSamples = [
  {
    title: 'SaaS platform launch',
    category: 'Full stack',
    image: marketingPhotos.fullStackSampleA,
  },
  {
    title: 'High-traffic consumer web',
    category: 'Performance',
    image: marketingPhotos.fullStackSampleB,
  },
];

export const FullStackEngineering = () => {
  const waHero = useWhatsAppHref(
    'We have a build coming up (web / product) and want a senior full-stack partner. can we talk stack, team shape, and timelines?',
  );
  const waFooter = useWhatsAppHref(
    'We’d like to book a discovery call for a full-stack engagement. scope, ways of working, and what good would look like in the first 90 days.',
  );
  const pillars = [
    {
      id: '01',
      title: 'Frontend development',
      subtitle: 'MODERN WEB APPLICATION DEVELOPMENT',
      Icons: [Monitor, Code2, Layers] as LucideIcon[],
      desc: 'We design and build fast, scalable, and conversion-optimised web applications using modern frameworks. Every interface is component-driven, mobile-responsive, and built for performance.',
      scope: [
        'Interactive dashboards',
        'SaaS product interfaces',
        'High-performance websites',
        'Mobile-responsive web apps',
        'Component-driven UI systems',
      ],
    },
    {
      id: '02',
      title: 'Backend development',
      subtitle: 'SCALABLE BACKEND & API ENGINEERING',
      Icons: [Server, Network, Cpu] as LucideIcon[],
      desc: 'We build secure, high-performance backend systems and APIs that power modern digital products. From authentication to third-party integrations, we handle the full server-side stack.',
      scope: [
        'REST & GraphQL APIs',
        'Authentication & authorisation systems',
        'Payment & third-party integrations',
        'Microservices architecture',
        'Admin panels & internal tools',
      ],
    },
    {
      id: '03',
      title: 'Database design',
      subtitle: 'DATABASE ARCHITECTURE & MANAGEMENT',
      Icons: [Database, HardDrive, Cloud] as LucideIcon[],
      desc: 'We design optimised, secure, and scalable data systems. Whether you need real-time sync, cloud deployment, or high-volume query performance, we build the data layer right.',
      scope: [
        'Schema design & optimisation',
        'Performance tuning',
        'Real-time database setups',
        'Cloud database deployment',
        'Migration & scaling strategies',
      ],
    },
  ];

  const outcomes = [
    {
      title: 'One team, one stack',
      description: 'Aligned frontends, APIs, and data models so features ship without hand-off friction.',
      Icon: Layers,
    },
    {
      title: 'Performance by default',
      description: 'Measured latency, caching, and query plans, not afterthought tuning in production.',
      Icon: Gauge,
    },
    {
      title: 'Secure foundations',
      description: 'Auth, validation, and data integrity baked in from the first sprint.',
      Icon: ShieldCheck,
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
              { label: 'Full-stack engineering' },
            ]}
          />
        </div>
      </div>

      <section className="py-16 md:py-32 px-6 md:px-20 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <SectionLabel text="Service detail" className="mb-8" />
            <h1 className="text-[28px] sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight mb-8">
              <span className="block whitespace-nowrap">Full-stack</span>
              <span className="block whitespace-nowrap">
                engineering <span className="text-brand-accent">that</span>
              </span>
              <span className="block whitespace-nowrap">ships.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-brand-ink/80 max-w-2xl mb-12">
              End-to-end web application development. from pixel-perfect frontends to scalable backends
              and optimised databases. We build digital products that perform.
            </p>
            <MagneticButton href={waHero} className="btn-swiss p-4 md:py-6 md:px-12 text-lg">
              START YOUR BUILD
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
              Frontend, backend, and data. engineered as one system.
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
                <h3 className="text-xl font-black uppercase leading-tight tracking-tight text-brand-ink">
                  {title}
                </h3>
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
          <SectionLabel text="Tech stack" className="mb-8" />
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tighter mb-10 max-w-3xl">
            Tools we ship with every day
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
            From discovery to launch
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
            Recent full-stack work
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
            Let&apos;s build <br className="hidden md:block" />
            <span className="text-brand-accent">together</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium opacity-60">
            Tell us about your product. We&apos;ll assemble the right full-stack squad and delivery plan.
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

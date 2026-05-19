'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  Layout,
  Layers,
  Network,
  Database,
  Server,
  Gauge,
  Rocket,
  Target,
  Sparkles,
  RefreshCw,
  Cpu,
  ShieldAlert,
  ShieldCheck,
  PiggyBank,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { AnimatedServiceIconStack } from '../components/AnimatedServiceIconStack';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { marketingPhotos } from '../constants/marketingPhotos';
import { MagneticButton } from '../components/MagneticButton';
import { useWhatsAppHref } from '../hooks/useWhatsAppHref';

export const ProductArchitecture = () => {
  const waHero = useWhatsAppHref(
    'We’re early in shaping the product and would love an architecture / technical discovery review before we commit build bandwidth.',
  );
  const waFooter = useWhatsAppHref(
    'We’d like to book a proper architecture review and roadmap session. Could you walk us through how you’d run that?',
  );
  const services = [
    {
      id: '01',
      title: 'System Design & Technical Scoping',
      subtitle: 'TECHNICAL DISCOVERY & SYSTEM ARCHITECTURE',
      Icons: [Layout, Layers, Network] as LucideIcon[],
      desc: 'We define the technical foundation of your product: mapping out system components, data flows, and integration points before development begins. This is the blueprint that engineers build from.',
      scope: [
        'Requirements analysis & technical scoping',
        'System component mapping',
        'Data flow & state architecture',
        'API surface design',
        'Technology stack selection'
      ]
    },
    {
      id: '02',
      title: 'Scalability & Infrastructure Planning',
      subtitle: 'SCALE-READY ARCHITECTURE DESIGN',
      Icons: [Database, Server, Gauge] as LucideIcon[],
      desc: "We design systems that handle growth: whether you're going from 0 to 1 or 10x to 100x. Load patterns, bottlenecks, and failure modes are planned for, not discovered in production.",
      scope: [
        'Scalability pattern selection',
        'Load & traffic modelling',
        'Database architecture for scale',
        'Caching & performance layers',
        'Failure mode & resilience planning'
      ]
    },
    {
      id: '03',
      title: 'MVP Architecture & Roadmap Planning',
      subtitle: 'MVP SCOPING & TECHNICAL ROADMAPPING',
      Icons: [Rocket, Target, Sparkles] as LucideIcon[],
      desc: 'We help founders and product teams define the smallest, most impactful version of their product, and map out a technical roadmap for what comes next.',
      scope: [
        'Core feature scoping for MVP',
        'Build vs buy decisions',
        'Technical debt risk assessment',
        'Phase-based development roadmap',
        'Engineering effort estimation'
      ]
    },
    {
      id: '04',
      title: 'Legacy System Modernisation',
      subtitle: 'TECHNICAL AUDIT & MODERNISATION STRATEGY',
      Icons: [RefreshCw, Cpu, ShieldAlert] as LucideIcon[],
      desc: 'We audit existing systems, identify architectural risks, and define a path to modernisation, reducing technical debt without stopping the business.',
      scope: [
        'Codebase & architecture audit',
        'Technical debt mapping',
        'Modernisation strategy & sequencing',
        'Migration risk assessment',
        'Refactoring roadmap'
      ]
    }
  ];

  const deliverables = [
    'System architecture diagram',
    'Technology stack recommendation with rationale',
    'Data model & API surface documentation',
    'Scalability & risk assessment report',
    'Phase-based development roadmap'
  ];

  const architectureBenefits: {
    title: string;
    description: string;
    Icon: LucideIcon;
  }[] = [
    {
      title: 'Risk reduction',
      description:
        'Identify bottlenecks and failure modes before they impact your users or budget.',
      Icon: ShieldCheck,
    },
    {
      title: 'Cost savings',
      description:
        'Avoid expensive refactors by choosing the right technology stack from day one.',
      Icon: PiggyBank,
    },
    {
      title: 'Faster execution',
      description: 'A clear blueprint allows engineers to build with confidence and speed.',
      Icon: Zap,
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
              { label: 'Product architecture' },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-32 px-6 md:px-20 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <SectionLabel text="Service Detail" className="mb-8" />
            <h1 className="text-[28px] sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight mb-8">
              <span className="block whitespace-nowrap">Architecture</span>
              <span className="block whitespace-nowrap">
                that <span className="text-brand-accent">scales</span> with
              </span>
              <span className="block whitespace-nowrap">your ambition</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-brand-ink/80 max-w-xl mb-12">
              Before a single line of code is written, we help you define the right system. We architect products that are built to scale, built to ship, and built to last.
            </p>
            <MagneticButton href={waHero} className="btn-swiss p-4 md:py-6 md:px-12 text-lg">
              BOOK AN ARCHITECTURE REVIEW
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Why Architecture First */}
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
            <SectionLabel text="Why architecture first" className="mb-6" />
            <p className="text-2xl md:text-3xl font-black uppercase leading-tight tracking-tight text-brand-ink">
              De-risk the build before you commit engineering time.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {architectureBenefits.map(({ title, description, Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                className="group flex flex-col gap-6 bg-white rounded-sm border border-brand-ink/10 p-8 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-ink/20 hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-sm border border-brand-border bg-slate-50 text-brand-ink transition-colors duration-300 group-hover:border-brand-ink/20 group-hover:bg-brand-accent/40">
                  <Icon size={30} strokeWidth={1.5} aria-hidden />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-black uppercase leading-none tracking-tight text-brand-ink">
                    {title}
                  </h3>
                  <p className="text-base md:text-lg font-medium leading-relaxed text-brand-ink/70">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-32 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-[0.5fr_1.5fr] gap-12 md:gap-24"
              >
                <div className="space-y-6">
                  <span className="label-micro text-brand-accent font-bold">[ {service.id} ]</span>
                  <AnimatedServiceIconStack icons={service.Icons} />
                </div>
                <div className="space-y-8">
                  <div>
                    <p className="label-micro mb-4">{service.subtitle}</p>
                    <h2 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter mb-6">
                      {service.title}
                    </h2>
                    <p className="text-xl md:text-2xl font-medium leading-relaxed text-brand-ink/70 max-w-3xl">
                      {service.desc}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                    <p className="label-micro md:col-span-2 mb-2">Scope Includes:</p>
                    {service.scope.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                        <span className="font-bold text-sm uppercase tracking-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 md:py-32 px-6 md:px-20 bg-slate-50 border-y border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="The Outcome" className="mb-8" />
              <h2 className="text-4xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-12">
                What you <br className="hidden md:block" /> receive
              </h2>
              <div className="space-y-6">
                {deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <CheckCircle2 className="text-brand-accent group-hover:scale-110 transition-transform" size={24} />
                    <span className="text-xl font-bold uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 md:p-12 border border-brand-border shadow-2xl rounded-sm">
              <div className="aspect-[4/3] border border-brand-border rounded-sm relative overflow-hidden bg-slate-100">
                <img
                  src={marketingPhotos.architectureHeroWide}
                  alt="Structural blueprint and building design, metaphor for technical architecture"
                  className="absolute inset-0 h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <p className="label-micro absolute bottom-4 left-4 z-10 bg-white px-4 py-2 border border-brand-border shadow-sm">
                  SYSTEM ARCHITECTURE BLUEPRINT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-32 px-6 md:px-20 bg-brand-ink text-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-8xl font-black uppercase leading-none tracking-tighter">
            Ready to build <br className="hidden md:block" />
            <span className="text-brand-accent">the right way?</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium opacity-60">
            Secure your spot for a comprehensive architecture review and roadmap session.
          </p>
          <div className="flex justify-center">
            <MagneticButton href={waFooter} className="btn-swiss-accent p-6 md:py-8 md:px-16 text-xl">
              BOOK A REVIEW <ArrowRight className="ml-4" />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

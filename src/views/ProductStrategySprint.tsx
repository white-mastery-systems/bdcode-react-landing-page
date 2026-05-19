'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  ArrowRight,
  Users,
  Layout,
  ListOrdered,
  Target,
  ShieldAlert,
  ChevronRight,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { MagneticButton } from '../components/MagneticButton';
import { useWhatsAppHref } from '../hooks/useWhatsAppHref';

export const ProductStrategySprint = () => {
  const waHero = useWhatsAppHref(
    'We’re considering a Product Strategy Sprint before we commit build budget. Could we book a discovery call and confirm fit, timeline, and deliverables?',
  );
  const waFooter = useWhatsAppHref(
    'We’d like to book a strategy sprint (or reserve a slot), covering discovery through roadmap, KPIs, and risk. Let’s align on scope for the next quarter.',
  );

  const inclusions = [
    {
      title: 'Discovery',
      icon: <Users className="text-brand-accent" size={24} />,
      items: [
        'Stakeholder interviews',
        'User research synthesis',
        'Market positioning review',
        'Competitive landscape analysis',
      ],
    },
    {
      title: 'System architecture',
      icon: <Layout className="text-brand-accent" size={24} />,
      items: [
        'Tech stack recommendation',
        'System design overview',
        'Integration mapping',
        'Scalability & cost modelling',
      ],
    },
    {
      title: 'Roadmap & prioritisation',
      icon: <ListOrdered className="text-brand-accent" size={24} />,
      items: [
        'Feature prioritisation (MoSCoW / RICE)',
        'Phased delivery roadmap',
        'MVP definition',
        'Sprint planning structure',
      ],
    },
    {
      title: 'KPI framework',
      icon: <Target className="text-brand-accent" size={24} />,
      items: [
        'Success metric definition',
        'Leading & lagging indicators',
        'Analytics tracking plan',
        'Reporting structure',
      ],
    },
    {
      title: 'Risk assessment',
      icon: <ShieldAlert className="text-brand-accent" size={24} />,
      items: [
        'Technical risk identification',
        'Market & product risk mapping',
        'Mitigation strategies',
        'Go / no-go criteria',
      ],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Kickoff & alignment',
      desc: 'Goals, constraints, and stakeholders aligned in session one.',
    },
    {
      step: '02',
      title: 'Discovery sessions',
      desc: 'Structured interviews and research synthesis.',
    },
    {
      step: '03',
      title: 'Architecture design',
      desc: 'Tech stack and system design documented.',
    },
    {
      step: '04',
      title: 'Roadmap workshop',
      desc: 'Features prioritised, phases defined, roadmap finalised.',
    },
    {
      step: '05',
      title: 'KPI & risk review',
      desc: 'Success metrics and risk register delivered.',
    },
    {
      step: '06',
      title: 'Execution briefing',
      desc: 'Full handoff document plus walkthrough with your team.',
    },
  ];

  const faqs = [
    {
      q: 'How long is the sprint?',
      a: 'Typically 2–3 weeks from kickoff to final deliverable.',
    },
    {
      q: 'What do we receive at the end?',
      a: 'A full strategy document including system architecture, phased roadmap, KPI framework, and risk register.',
    },
    {
      q: 'Can this lead into a build engagement?',
      a: 'Yes. Many clients move directly from a Strategy Sprint into an MVP Launch or Full Product Build.',
    },
  ];

  return (
    <div className="pt-20">
      <div className="border-b border-brand-border bg-white px-6 py-4 md:px-20">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Packages', to: '/#packages' },
              { label: 'Product Strategy Sprint' },
            ]}
          />
        </div>
      </div>
      <section className="border-b border-brand-border bg-white px-6 py-16 md:px-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionLabel text="Package 05" className="mb-8" />
              <h1 className="mb-8 text-5xl font-black uppercase leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
                Product strategy <br />
                <span className="text-brand-accent">sprint</span>
              </h1>
              <p className="mb-12 max-w-xl text-xl font-medium leading-relaxed text-brand-ink/80 md:text-2xl">
                For teams that need clarity before building, you get a structured, validated execution plan across
                discovery, architecture, roadmap, KPIs, and risk, so every engineering investment is spent intentionally.
              </p>
              <div className="flex flex-col gap-6 sm:flex-row">
                <MagneticButton href={waHero} className="btn-swiss p-4 md:px-12 md:py-6 text-lg">
                  BOOK YOUR STRATEGY SPRINT
                </MagneticButton>
                <div className="flex items-center gap-4 px-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10">
                    <Compass className="text-brand-accent" size={24} />
                  </div>
                  <div>
                    <p className="label-micro text-[10px]">OUTCOME</p>
                    <p className="text-sm font-bold uppercase leading-tight">
                      A clear execution plan with zero guesswork
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-sm border border-brand-border bg-slate-50 p-12">
                <motion.div
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10 w-full max-w-sm rounded-sm border border-brand-ink/10 bg-white p-8 shadow-lg"
                >
                  <p className="label-micro mb-4 text-brand-muted">Sprint output</p>
                  <ul className="space-y-2 font-mono text-[10px] font-bold uppercase tracking-wider text-brand-ink/80">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                      Architecture & integrations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                      Phased roadmap & MVP cut
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                      KPI & risk register
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:px-20 md:py-32">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <SectionLabel text="Overview" className="justify-center" />
          <h2 className="text-3xl font-black uppercase leading-tight md:text-5xl">
            Know what to build <br />
            before you build it
          </h2>
          <p className="text-xl font-medium leading-relaxed text-brand-ink/70">
            Building without a strategy is the most expensive mistake a product team can make. Our Product Strategy Sprint
            gives you a structured, validated execution plan, covering discovery, architecture, roadmap, KPI frameworks,
            and risk assessment, so every engineering investment is spent intentionally.
          </p>
        </div>
      </section>

      <section className="border-y border-brand-border bg-white px-6 py-16 md:px-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20">
            <SectionLabel text="The scope" className="mb-6" />
            <h2 className="text-4xl font-black uppercase tracking-tighter md:text-7xl">What&apos;s included</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {inclusions.map((inc, i) => (
              <div
                key={i}
                className="group space-y-6 rounded-sm border border-brand-border p-8 transition-colors hover:border-brand-accent"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-slate-50 transition-colors group-hover:bg-brand-accent/10">
                  {inc.icon}
                </div>
                <h3 className="text-xl font-black uppercase">{inc.title}</h3>
                <ul className="space-y-3">
                  {inc.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <ChevronRight size={16} className="mt-1 shrink-0 text-brand-accent" />
                      <span className="text-sm font-bold uppercase leading-tight tracking-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20">
            <SectionLabel text="The journey" className="mb-6" />
            <h2 className="text-4xl font-black uppercase tracking-tighter md:text-7xl">Delivery process</h2>
          </div>
          <div className="grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <div key={i} className="space-y-4">
                <span className="font-mono font-bold text-brand-accent">[ {p.step} ]</span>
                <h3 className="text-2xl font-black uppercase">{p.title}</h3>
                <p className="font-medium leading-relaxed text-brand-ink/70">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-brand-border bg-slate-50 px-6 py-16 md:px-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionLabel text="Common questions" className="mb-8" />
              <h2 className="text-4xl font-black uppercase leading-none tracking-tighter md:text-6xl">
                Frequently <br /> asked
              </h2>
            </div>
            <div className="space-y-12">
              {faqs.map((faq, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="text-2xl font-bold uppercase tracking-tight">{faq.q}</h3>
                  <p className="text-lg font-medium leading-relaxed text-brand-ink/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-ink px-6 py-16 text-white md:px-20 md:py-32">
        <div className="mx-auto max-w-4xl space-y-12 text-center">
          <h2 className="text-4xl font-black uppercase leading-none tracking-tighter md:text-8xl">
            Clarity first. <br />
            <span className="text-brand-accent">Build second.</span>
          </h2>
          <p className="text-xl font-medium opacity-60 md:text-2xl">
            Book a discovery call. We&apos;ll confirm sprint scope, timeline (typically 2–3 weeks), and how handoff
            fits your team.
          </p>
          <div className="flex justify-center">
            <MagneticButton href={waFooter} className="btn-swiss-accent p-6 text-xl md:px-16 md:py-8">
              BOOK A DISCOVERY CALL <ArrowRight className="ml-4" />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

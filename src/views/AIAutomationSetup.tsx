'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Zap,
  ArrowRight,
  ClipboardList,
  GitBranch,
  Sparkles,
  Plug2,
  ChevronRight,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { MagneticButton } from '../components/MagneticButton';
import { useWhatsAppHref } from '../hooks/useWhatsAppHref';

export const AIAutomationSetup = () => {
  const waHero = useWhatsAppHref(
    'We’re interested in your AI Automation Setup: mapping manual workflows and shipping reliable automations. Could we book a discovery call or start with an automation audit?',
  );
  const waFooter = useWhatsAppHref(
    'We’d like to scope workflow automation across our stack (CRM, support, ops). Let’s book a call to map priorities and timelines.',
  );

  const inclusions = [
    {
      title: 'Workflow mapping',
      icon: <ClipboardList className="text-brand-accent" size={24} />,
      items: [
        'Current-state process documentation',
        'Manual bottleneck identification',
        'Automation opportunity scoring',
        'Priority matrix for implementation',
      ],
    },
    {
      title: 'Automation design',
      icon: <GitBranch className="text-brand-accent" size={24} />,
      items: [
        'Trigger & action logic design',
        'Conditional workflow branching',
        'Error handling & fallback paths',
        'Human-in-the-loop escalation points',
      ],
    },
    {
      title: 'AI-assisted processes',
      icon: <Sparkles className="text-brand-accent" size={24} />,
      items: [
        'CRM automation',
        'Support ticket handling & routing',
        'Lead qualification systems',
        'Data enrichment pipelines',
        'Internal operations automation',
      ],
    },
    {
      title: 'Tool integrations',
      icon: <Plug2 className="text-brand-accent" size={24} />,
      items: [
        'CRM & sales tool connections',
        'Communication platform integrations',
        'Data source connectors',
        'API bridging between existing tools',
      ],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Workflow audit',
      desc: 'We document your current processes and score automation potential.',
    },
    {
      step: '02',
      title: 'Priority & design',
      desc: 'Top automations selected; trigger/action logic designed.',
    },
    {
      step: '03',
      title: 'Build & integrate',
      desc: 'Automations built and connected to your existing stack.',
    },
    {
      step: '04',
      title: 'Testing & QA',
      desc: 'Each automation tested across edge cases and failure scenarios.',
    },
    {
      step: '05',
      title: 'Deployment',
      desc: 'Live in production with monitoring and alerting.',
    },
    {
      step: '06',
      title: 'Review & expand',
      desc: 'Post-launch review to identify next automation opportunities.',
    },
  ];

  const faqs = [
    {
      q: 'What tools do you integrate with?',
      a: 'We work with HubSpot, Salesforce, Notion, Slack, Gmail, custom APIs, and many other tools.',
    },
    {
      q: 'Do we need technical staff to maintain automations?',
      a: 'No. We build for operational handoff with clear documentation and low-maintenance design.',
    },
    {
      q: 'How quickly can automations be live?',
      a: 'Simple automations can go live in 1–2 weeks. Complex multi-system workflows typically take 3–6 weeks.',
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
              { label: 'AI Automation Setup' },
            ]}
          />
        </div>
      </div>
      <section className="border-b border-brand-border bg-white px-6 py-16 md:px-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionLabel text="Package 04" className="mb-8" />
              <h1 className="mb-8 text-5xl font-black uppercase leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
                AI automation <br />
                <span className="text-brand-accent">setup</span>
              </h1>
              <p className="mb-12 max-w-xl text-xl font-medium leading-relaxed text-brand-ink/80 md:text-2xl">
                For businesses looking to eliminate manual workflows. We map operations, prioritise wins, and implement
                AI-assisted automations that run reliably, so your team spends time on judgment work, not copy-paste.
              </p>
              <div className="flex flex-col gap-6 sm:flex-row">
                <MagneticButton href={waHero} className="btn-swiss p-4 md:px-12 md:py-6 text-lg">
                  MAP YOUR WORKFLOWS
                </MagneticButton>
                <div className="flex items-center gap-4 px-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10">
                    <Zap className="text-brand-accent" size={24} />
                  </div>
                  <div>
                    <p className="label-micro text-[10px]">OUTCOME</p>
                    <p className="text-sm font-bold uppercase leading-tight">
                      Faster operations with reduced manual effort
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-sm border border-brand-border bg-slate-50 p-12">
                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, transparent 45%, rgba(0,0,0,0.06) 45%, rgba(0,0,0,0.06) 55%, transparent 55%)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <div className="relative z-10 w-full max-w-xs space-y-4">
                  <div className="rounded-sm border border-brand-border bg-white p-4 text-center font-mono text-[10px] font-bold uppercase tracking-widest text-brand-muted">
                    Manual
                  </div>
                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex justify-center"
                  >
                    <ArrowRight className="text-brand-accent" size={28} strokeWidth={2} aria-hidden />
                  </motion.div>
                  <div className="rounded-sm border border-brand-accent/40 bg-brand-accent/10 p-4 text-center font-mono text-[10px] font-bold uppercase tracking-widest text-brand-ink">
                    Automated
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:px-20 md:py-32">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <SectionLabel text="Overview" className="justify-center" />
          <h2 className="text-3xl font-black uppercase leading-tight md:text-5xl">
            Time back for <br />
            work that matters
          </h2>
          <p className="text-xl font-medium leading-relaxed text-brand-ink/70">
            Manual workflows slow growth, introduce errors, and consume your team&apos;s time. We map your operations,
            identify automation opportunities, and implement AI-assisted processes that run reliably, so your team
            focuses on work that actually requires human judgment.
          </p>
        </div>
      </section>

      <section className="border-y border-brand-border bg-white px-6 py-16 md:px-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20">
            <SectionLabel text="The scope" className="mb-6" />
            <h2 className="text-4xl font-black uppercase tracking-tighter md:text-7xl">What&apos;s included</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
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
            Less manual. <br />
            <span className="text-brand-accent">More momentum.</span>
          </h2>
          <p className="text-xl font-medium opacity-60 md:text-2xl">
            Book a discovery call. We&apos;ll map workflows, estimate operational ROI, and propose a sensible rollout
            order.
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

'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  ArrowRight,
  ClipboardList,
  Bug,
  Gauge,
  Container,
  Activity,
  ChevronRight,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { MagneticButton } from '../components/MagneticButton';
import { useWhatsAppHref } from '../hooks/useWhatsAppHref';

export const VibeCodingAudit = () => {
  const waHero = useWhatsAppHref(
    'We’re interested in your Vibe Coding Audit, Fix & Deploy package, from audit through refactor, performance, and production handoff. Could we book a code audit?',
  );
  const waFooter = useWhatsAppHref(
    'We’d like to scope a hardening engagement (audit → fix → deploy). We can share repo access and discuss NDA. Let’s align on stack and severity.',
  );

  const inclusions = [
    {
      title: 'Codebase audit',
      icon: <ClipboardList className="text-brand-accent" size={24} />,
      items: [
        'Architecture & structure review',
        'Scalability bottleneck identification',
        'Security vulnerability scan',
        'Dependency and technical debt mapping',
      ],
    },
    {
      title: 'Bug fixing & refactoring',
      icon: <Bug className="text-brand-accent" size={24} />,
      items: [
        'Critical bug identification & resolution',
        'Code refactoring for clarity and maintainability',
        'Dead code removal',
        'Test coverage introduction',
      ],
    },
    {
      title: 'Performance optimization',
      icon: <Gauge className="text-brand-accent" size={24} />,
      items: [
        'Frontend load time improvements',
        'API response time optimization',
        'Database query optimization',
        'Caching strategy implementation',
      ],
    },
    {
      title: 'DevOps setup & deployment',
      icon: <Container className="text-brand-accent" size={24} />,
      items: [
        'CI/CD pipeline implementation',
        'Containerization with Docker',
        'Environment configuration (dev / staging / prod)',
        'Cloud deployment on AWS / GCP / Azure',
      ],
    },
    {
      title: 'Production hardening',
      icon: <Activity className="text-brand-accent" size={24} />,
      items: [
        'Monitoring & alerting setup',
        'Logging & observability implementation',
        'Incident response planning',
        'Security hardening & secrets management',
      ],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Codebase intake',
      desc: 'We receive access, review structure, and document initial findings.',
    },
    {
      step: '02',
      title: 'Audit report',
      desc: 'Full written audit with severity ratings and priority order.',
    },
    {
      step: '03',
      title: 'Fix & refactor',
      desc: 'Critical issues resolved, code cleaned, tests introduced.',
    },
    {
      step: '04',
      title: 'Performance pass',
      desc: 'Frontend, API, and database performance optimized.',
    },
    {
      step: '05',
      title: 'DevOps setup',
      desc: 'CI/CD, Docker, environment configs, and cloud deployment.',
    },
    {
      step: '06',
      title: 'Production handoff',
      desc: 'Monitoring live, documentation delivered, team briefed.',
    },
  ];

  const faqs = [
    {
      q: 'How much access do you need?',
      a: 'Repository access and environment credentials. We handle everything securely, with NDAs when required.',
    },
    {
      q: 'Will you rewrite everything from scratch?',
      a: 'Only if necessary. We prefer targeted refactoring so working functionality is preserved while quality improves.',
    },
    {
      q: 'What if the code was AI-generated?',
      a: 'That’s exactly who this is for. AI-generated codebases often have structural and security issues this package is built to address.',
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
              { label: 'Vibe Coding Audit, Fix & Deploy' },
            ]}
          />
        </div>
      </div>
      <section className="border-b border-brand-border bg-white px-6 py-16 md:px-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionLabel text="Package 08" className="mb-8" />
              <h1 className="mb-8 text-5xl font-black uppercase leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
                Audit, fix <br />
                <span className="text-brand-accent">& deploy</span>
              </h1>
              <p className="mb-4 font-mono text-sm font-bold uppercase tracking-wider text-brand-ink/50">
                Vibe coding. ship fast, then harden
              </p>
              <p className="mb-12 max-w-xl text-xl font-medium leading-relaxed text-brand-ink/80 md:text-2xl">
                For builders who shipped fast, and now need it to actually work. We audit what you&apos;ve built, fix
                what&apos;s broken, refactor what&apos;s fragile, and deploy it properly.
              </p>
              <div className="flex flex-col gap-6 sm:flex-row">
                <MagneticButton href={waHero} className="btn-swiss p-4 md:px-12 md:py-6 text-lg">
                  BOOK A CODE AUDIT
                </MagneticButton>
                <div className="flex items-center gap-4 px-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10">
                    <ShieldCheck className="text-brand-accent" size={24} />
                  </div>
                  <div>
                    <p className="label-micro text-[10px]">OUTCOME</p>
                    <p className="text-sm font-bold uppercase leading-tight">
                      From &quot;it works&quot; to &quot;it scales&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-sm border border-brand-border bg-gradient-to-br from-slate-50 to-brand-accent/10 p-12">
                <motion.div
                  initial={{ opacity: 0.9 }}
                  animate={{ opacity: [0.9, 1, 0.9] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex w-full max-w-sm flex-col gap-2 font-mono text-[10px] font-bold uppercase tracking-wider"
                >
                  {['Audit', 'Fix', 'Deploy'].map((label, i) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-sm border border-brand-border bg-white px-4 py-3 shadow-sm"
                    >
                      <span className="text-brand-accent">[ {String(i + 1).padStart(2, '0')} ]</span>
                      <span className="text-brand-ink/70">{label}</span>
                    </div>
                  ))}
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
            You built it fast. <br />
            Let&apos;s make it last.
          </h2>
          <p className="text-xl font-medium leading-relaxed text-brand-ink/70">
            Bugs you can&apos;t explain, performance under load, and a codebase that&apos;s harder to touch every week. We surface it in a structured audit, then remediate, optimize, and ship with CI/CD and observability so your
            product can grow.
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
            Ship fast. <br />
            <span className="text-brand-accent">Stay fast.</span>
          </h2>
          <p className="text-xl font-medium opacity-60 md:text-2xl">
            Submit your codebase for review. We&apos;ll align on severity, timeline, and what &quot;production
            ready&quot; means for your stack.
          </p>
          <div className="flex justify-center">
            <MagneticButton href={waFooter} className="btn-swiss-accent p-6 text-xl md:px-16 md:py-8">
              START HARDENING <ArrowRight className="ml-4" />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

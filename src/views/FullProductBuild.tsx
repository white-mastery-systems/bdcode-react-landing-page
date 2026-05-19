'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Layers,
  ArrowRight,
  Layout,
  Code2,
  Cloud,
  Bot,
  Gauge,
  ChevronRight,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { MagneticButton } from '../components/MagneticButton';
import { useWhatsAppHref } from '../hooks/useWhatsAppHref';

export const FullProductBuild = () => {
  const waHero = useWhatsAppHref(
    'We’re evaluating your Full Product Build package for a long-term product. Could we book a discovery call to talk scale, DevOps, and how you structure phases?',
  );
  const waFooter = useWhatsAppHref(
    'We’d like to scope a full production build (architecture through launch). Happy to share context and hear how you’d run discovery and milestones.',
  );

  const inclusions = [
    {
      title: 'End-to-end architecture',
      icon: <Layout className="text-brand-accent" size={24} />,
      items: [
        'System design for scale',
        'Microservices or monolith decision',
        'API-first architecture',
        'Data infrastructure planning',
      ],
    },
    {
      title: 'Scalable engineering',
      icon: <Code2 className="text-brand-accent" size={24} />,
      items: [
        'Frontend: React, Next.js, Vue, Angular',
        'Backend: Node.js, Python (Django, FastAPI), Java',
        'Database: PostgreSQL, MySQL, MongoDB, Supabase',
        'REST & GraphQL APIs',
      ],
    },
    {
      title: 'DevOps setup',
      icon: <Cloud className="text-brand-accent" size={24} />,
      items: [
        'CI/CD pipeline engineering',
        'Containerisation (Docker) & orchestration (Kubernetes)',
        'Multi-region cloud deployment',
        'Infrastructure as Code (IaC)',
      ],
    },
    {
      title: 'AI integration (if needed)',
      icon: <Bot className="text-brand-accent" size={24} />,
      items: [
        'LLM integration for product features',
        'RAG pipelines for knowledge-based features',
        'AI agents & workflow automation',
        'Usage monitoring & cost control',
      ],
    },
    {
      title: 'Ongoing optimisation',
      icon: <Gauge className="text-brand-accent" size={24} />,
      items: [
        'Performance monitoring & tuning',
        'Cost optimisation cycles',
        'Feature iteration support',
        'Quarterly architecture reviews',
      ],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & architecture',
      desc: 'Full system design, tech stack finalised, roadmap confirmed.',
    },
    {
      step: '02',
      title: 'Design sprint',
      desc: 'UX/UI design for all core flows.',
    },
    {
      step: '03',
      title: 'Engineering phase 1',
      desc: 'Core infrastructure, APIs, and primary features.',
    },
    {
      step: '04',
      title: 'Engineering phase 2',
      desc: 'Secondary features, integrations, AI layer (if applicable).',
    },
    {
      step: '05',
      title: 'DevOps & hardening',
      desc: 'CI/CD, containerisation, monitoring, security hardening.',
    },
    {
      step: '06',
      title: 'Launch & optimisation',
      desc: 'Production deployment, post-launch tuning, handoff.',
    },
  ];

  const faqs = [
    {
      q: 'How is this different from the MVP package?',
      a: 'This is a full production system built for scale, not just validation. More engineering depth, DevOps, and optional AI.',
    },
    {
      q: 'Do you support ongoing development after launch?',
      a: 'Yes. We offer retainer and sprint-based ongoing support after launch.',
    },
    {
      q: 'Can AI features be added later?',
      a: 'Yes. AI integration can be phased in post-launch if not included initially.',
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
              { label: 'Full Product Build' },
            ]}
          />
        </div>
      </div>
      <section className="border-b border-brand-border bg-white px-6 py-16 md:px-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionLabel text="Package 02" className="mb-8" />
              <h1 className="mb-8 text-5xl font-black uppercase leading-[0.9] tracking-tighter md:text-8xl">
                Full <br />
                <span className="text-brand-accent">Product</span> <br />
                build
              </h1>
              <p className="mb-12 max-w-xl text-xl font-medium leading-relaxed text-brand-ink/80 md:text-2xl">
                For teams building scalable, long-term products. A production-grade engagement: architecture, engineering,
                DevOps, optional AI, and optimisation cycles. built for reliability and growth.
              </p>
              <div className="flex flex-col gap-6 sm:flex-row">
                <MagneticButton href={waHero} className="btn-swiss p-4 md:px-12 md:py-6 text-lg">
                  BOOK A DISCOVERY CALL
                </MagneticButton>
                <div className="flex items-center gap-4 px-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10">
                    <Layers className="text-brand-accent" size={24} />
                  </div>
                  <div>
                    <p className="label-micro text-[10px]">OUTCOME</p>
                    <p className="text-sm font-bold uppercase">A robust, scalable product built for growth</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-sm border border-brand-border bg-slate-50 p-12">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                  className="pointer-events-none absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: 'radial-gradient(#000 2px, transparent 2px)',
                    backgroundSize: '40px 40px',
                  }}
                />
                <div className="relative z-10 w-full space-y-8">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-brand-border">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 2.2, ease: 'easeInOut' }}
                      className="h-full bg-brand-accent"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="h-20 rounded-sm border border-brand-border bg-white shadow-sm" />
                    ))}
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
            Built for scale, <br />
            not just launch day
          </h2>
          <p className="text-xl font-medium leading-relaxed text-brand-ink/70">
            This is our full-scope engagement for teams that need more than an MVP. a production-grade product designed
            for scale, reliability, and long-term growth. We handle end-to-end architecture, engineering, DevOps, and
            optional AI integration with ongoing optimisation cycles built in.
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
            Ready to <br />
            <span className="text-brand-accent">scale?</span>
          </h2>
          <p className="text-xl font-medium opacity-60 md:text-2xl">
            Book a discovery call. We&apos;ll align on scope, milestones, and how architecture, engineering, and DevOps
            fit together for your product.
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

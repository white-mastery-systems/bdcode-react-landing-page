'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Bot,
  ArrowRight,
  Search,
  MessageSquare,
  Database,
  Workflow,
  Cable,
  ChevronRight,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { MagneticButton } from '../components/MagneticButton';
import { useWhatsAppHref } from '../hooks/useWhatsAppHref';

export const AISystemImplementation = () => {
  const waHero = useWhatsAppHref(
    'We want to explore your AI System Implementation package. embedding LLMs / RAG / agents into real workflows. Could we book an AI discovery call?',
  );
  const waFooter = useWhatsAppHref(
    'Ready to map AI use cases with you: discovery, guardrails, and a sensible path to production. Let’s book a call to scope the engagement.',
  );

  const inclusions = [
    {
      title: 'Use-case discovery',
      icon: <Search className="text-brand-accent" size={24} />,
      items: [
        'AI readiness assessment',
        'Workflow mapping for AI insertion points',
        'ROI estimation per use case',
        'Prioritisation framework',
      ],
    },
    {
      title: 'LLM integration',
      icon: <MessageSquare className="text-brand-accent" size={24} />,
      items: [
        'OpenAI, Claude, or open-source model integration',
        'Prompt engineering & optimisation',
        'Secure API implementation',
        'Usage cost control & monitoring',
      ],
    },
    {
      title: 'RAG pipelines',
      icon: <Database className="text-brand-accent" size={24} />,
      items: [
        'Document ingestion pipelines',
        'Embedding generation',
        'Vector database setup (Pinecone, Weaviate, pgvector)',
        'Context-aware response systems & private knowledge assistants',
      ],
    },
    {
      title: 'AI agents & automation',
      icon: <Workflow className="text-brand-accent" size={24} />,
      items: [
        'Tool-using agents',
        'Multi-agent workflows',
        'Goal-driven automation systems',
        'Agent monitoring & guardrails',
      ],
    },
    {
      title: 'API orchestration',
      icon: <Cable className="text-brand-accent" size={24} />,
      items: [
        'Multi-API chaining',
        'Conditional logic systems',
        'Data transformation layers',
        'Failover & reliability setup',
      ],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'AI discovery',
      desc: 'We map your workflows and identify the highest-value AI insertion points.',
    },
    {
      step: '02',
      title: 'Architecture design',
      desc: 'AI system architecture planned. models, pipelines, storage, APIs.',
    },
    {
      step: '03',
      title: 'Pipeline development',
      desc: 'RAG systems, LLM integrations, and agent workflows built.',
    },
    {
      step: '04',
      title: 'Integration & testing',
      desc: 'Connected to your existing systems with rigorous testing.',
    },
    {
      step: '05',
      title: 'Monitoring setup',
      desc: 'Observability, cost tracking, and guardrails implemented.',
    },
    {
      step: '06',
      title: 'Deployment & handoff',
      desc: 'Production launch with full documentation and team onboarding.',
    },
  ];

  const faqs = [
    {
      q: 'We already have a product. Can AI be added to it?',
      a: 'Yes. most engagements start with an existing product or workflow.',
    },
    {
      q: 'Which AI models do you work with?',
      a: 'OpenAI, Anthropic Claude, Mistral, LLaMA, and other open-source models depending on your needs and budget.',
    },
    {
      q: 'How do you handle data privacy with LLMs?',
      a: 'We design for privacy-first. private deployments, secure API calls, and keeping sensitive data out of external model contexts wherever possible.',
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
              { label: 'AI System Implementation' },
            ]}
          />
        </div>
      </div>
      <section className="border-b border-brand-border bg-white px-6 py-16 md:px-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionLabel text="Package 03" className="mb-8" />
              <h1 className="mb-8 text-5xl font-black uppercase leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
                AI system <br />
                <span className="text-brand-accent">implementation</span>
              </h1>
              <p className="mb-12 max-w-xl text-xl font-medium leading-relaxed text-brand-ink/80 md:text-2xl">
                For companies integrating AI into real workflows. We architect LLMs, RAG, agents, and orchestration so
                AI runs in production. with measurable value, not slide-deck demos.
              </p>
              <div className="flex flex-col gap-6 sm:flex-row">
                <MagneticButton href={waHero} className="btn-swiss p-4 md:px-12 md:py-6 text-lg">
                  BOOK AI DISCOVERY CALL
                </MagneticButton>
                <div className="flex items-center gap-4 px-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10">
                    <Bot className="text-brand-accent" size={24} />
                  </div>
                  <div>
                    <p className="label-micro text-[10px]">OUTCOME</p>
                    <p className="text-sm font-bold uppercase leading-tight">
                      AI embedded into operations, not just a feature
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-sm border border-brand-border bg-slate-50 p-12">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)',
                    backgroundSize: '32px 32px',
                  }}
                />
                <div className="relative z-10 grid w-full max-w-sm grid-cols-2 gap-4">
                  {['LLM', 'RAG', 'Agents', 'API'].map((label) => (
                    <div
                      key={label}
                      className="flex h-24 items-center justify-center rounded-sm border border-brand-border bg-white font-mono text-[10px] font-bold uppercase tracking-widest text-brand-ink/70 shadow-sm"
                    >
                      {label}
                    </div>
                  ))}
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
            AI in your workflows, <br />
            not just your pitch deck
          </h2>
          <p className="text-xl font-medium leading-relaxed text-brand-ink/70">
            We don&apos;t bolt AI onto your product as an afterthought. We design it into your core operations. From LLM
            integration and RAG pipelines to autonomous agents and API orchestration, we architect AI systems that work in
            production and deliver measurable business value.
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
            Map your <br />
            <span className="text-brand-accent">AI use cases</span>
          </h2>
          <p className="text-xl font-medium opacity-60 md:text-2xl">
            Book a discovery call. We&apos;ll align on workflows, risk, and the smallest high-impact slice to ship first.
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

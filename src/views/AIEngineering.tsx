'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  MessageSquare,
  Brain,
  Gauge,
  Bot,
  GitBranch,
  Cpu,
  BookOpen,
  Database,
  Search,
  Sparkles,
  Layers,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { AnimatedServiceIconStack } from '../components/AnimatedServiceIconStack';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { MagneticButton } from '../components/MagneticButton';
import { useWhatsAppHref } from '../hooks/useWhatsAppHref';

const techStack = [
  'OpenAI',
  'Anthropic',
  'LangChain',
  'LlamaIndex',
  'HuggingFace',
  'Pinecone',
  'Weaviate',
  'Python',
  'FastAPI',
  'pgvector',
];

export const AIEngineering = () => {
  const waHero = useWhatsAppHref(
    'We’re exploring practical AI (agents, RAG, or workflow automation) inside our product. Would love a grounded conversation on what’s realistic.',
  );
  const waFooter = useWhatsAppHref(
    'We’d like to book an AI discovery session. use cases, risks, and a sensible phased plan rather than a science project.',
  );
  const pillars = [
    {
      id: '01',
      title: 'LLM integration & prompt engineering',
      subtitle: 'PRODUCTION LLM IMPLEMENTATION',
      Icons: [MessageSquare, Brain, Gauge] as LucideIcon[],
      desc: 'We integrate large language models into your product stack with structured prompting, context management, and output reliability built in from day one.',
      scope: [
        'LLM API integration (OpenAI, Anthropic, Gemini)',
        'Prompt engineering & optimisation',
        'Context window management',
        'Output parsing & structured responses',
        'Cost & latency optimisation',
      ],
    },
    {
      id: '02',
      title: 'AI agent development',
      subtitle: 'AUTONOMOUS AGENT SYSTEMS',
      Icons: [Bot, GitBranch, Cpu] as LucideIcon[],
      desc: 'We design and build multi-step AI agents that can reason, plan, and take actions across tools and APIs. turning complex workflows into automated pipelines.',
      scope: [
        'Agentic workflow design',
        'Tool use & function calling',
        'Multi-agent orchestration',
        'Memory & state management',
        'Human-in-the-loop systems',
      ],
    },
    {
      id: '03',
      title: 'RAG & knowledge systems',
      subtitle: 'RETRIEVAL-AUGMENTED GENERATION',
      Icons: [BookOpen, Database, Search] as LucideIcon[],
      desc: 'We build AI systems grounded in your data. combining vector search, document retrieval, and LLMs to deliver accurate, context-aware responses at scale.',
      scope: [
        'Vector database setup (Pinecone, Weaviate, pgvector)',
        'Document ingestion pipelines',
        'Embedding model selection & tuning',
        'Semantic search implementation',
        'Accuracy & hallucination reduction',
      ],
    },
    {
      id: '04',
      title: 'AI-powered feature development',
      subtitle: 'PRODUCT AI INTEGRATION',
      Icons: [Sparkles, Layers, Zap] as LucideIcon[],
      desc: 'We add intelligent features to your existing product. from smart search and classification to recommendation engines and generative tools.',
      scope: [
        'AI feature scoping & architecture',
        'Model selection & benchmarking',
        'API design for AI features',
        'Frontend integration',
        'Monitoring & feedback loops',
      ],
    },
  ];

  const useCases = [
    {
      title: 'Automation',
      description: 'Turn repetitive operational flows into reliable, auditable agent or LLM pipelines.',
      Icon: Zap,
    },
    {
      title: 'Intelligence',
      description: 'Ground answers in your documents and metrics. not generic model drift.',
      Icon: Brain,
    },
    {
      title: 'Scale',
      description: 'Cost, latency, and guardrails designed for real traffic. not demo-day loads.',
      Icon: Gauge,
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
              { label: 'AI engineering' },
            ]}
          />
        </div>
      </div>

      <section className="py-16 md:py-32 px-6 md:px-20 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <SectionLabel text="Service detail" className="mb-8" />
            <h1 className="text-[26px] sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tight mb-8">
              <span className="block">Build AI that</span>
              <span className="block text-brand-accent">actually works in production</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-brand-ink/80 max-w-2xl mb-12">
              We build production-grade AI systems. from LLM integrations and intelligent agents to custom
              model pipelines. AI that works in the real world, not just in demos.
            </p>
            <MagneticButton href={waHero} className="btn-swiss p-4 md:py-6 md:px-12 text-lg">
              EXPLORE AI FOR YOUR PRODUCT
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
            <SectionLabel text="Where AI helps" className="mb-6" />
            <p className="text-2xl md:text-3xl font-black uppercase leading-tight tracking-tight text-brand-ink">
              Automation, intelligence, and scale. without sacrificing reliability.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {useCases.map(({ title, description, Icon }, i) => (
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
          <div className="max-w-3xl">
            <SectionLabel text="Core service areas" className="mb-6" />
            <p className="text-lg md:text-xl font-medium leading-relaxed text-brand-ink/75">
              Our AI engineering practice covers the full spectrum of applied AI. from integrating LLMs into
              existing products to building autonomous agent systems from scratch.
            </p>
          </div>
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
          <SectionLabel text="Technology stack" className="mb-8" />
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tighter mb-10 max-w-3xl">
            Tools we integrate and ship with
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

      <section className="py-16 md:py-32 px-6 md:px-20 bg-gradient-to-b from-slate-50 to-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <SectionLabel text="Before / after" className="mb-8" />
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tighter mb-4">
              Manual process vs AI-assisted workflow
            </h2>
            <p className="mb-10 text-base font-medium leading-relaxed text-brand-ink/65 md:text-lg">
              Drag anywhere on the card, use the circular handle, or scrub the bar below to compare before and after.
            </p>
            <BeforeAfterSlider
              beforeItems={[
                'Tickets routed through manual triage and copy-paste responses',
                'Knowledge trapped in docs nobody can search consistently',
                'Fragile scripts when integrations or schemas change',
              ]}
              afterItems={[
                'Guardrailed LLM + agent flows with evaluation and fallbacks',
                'RAG over your sources with citations and freshness controls',
                'Observable pipelines: traces, cost, and quality metrics in one place',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-6 md:px-20 bg-brand-ink text-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-8xl font-black uppercase leading-none tracking-tighter">
            Explore what AI <br className="hidden md:block" />
            <span className="text-brand-accent">can do</span> for your product
          </h2>
          <p className="text-xl md:text-2xl font-medium opacity-60">
            Bring your workflows, data, and risk profile, so we&apos;ll map the smallest high-impact AI slice to ship first.
          </p>
          <div className="flex justify-center">
            <MagneticButton href={waFooter} className="btn-swiss-accent p-6 md:py-8 md:px-16 text-xl">
              BOOK AN AI DISCOVERY SESSION <ArrowRight className="ml-4" />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

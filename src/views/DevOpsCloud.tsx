'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Cloud,
  Map,
  Shield,
  GitBranch,
  Rocket,
  RefreshCw,
  Package,
  Boxes,
  Network,
  FileCode,
  Terminal,
  Settings,
  ArrowRightLeft,
  TrendingDown,
  CloudCog,
  Activity,
  LineChart,
  Bell,
  Gauge,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { AnimatedServiceIconStack } from '../components/AnimatedServiceIconStack';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { marketingPhotos } from '../constants/marketingPhotos';
import { MagneticButton } from '../components/MagneticButton';
import { useWhatsAppHref } from '../hooks/useWhatsAppHref';

const cloudProviders = ['AWS', 'GCP', 'Azure'];

const processSteps = ['Plan', 'Provision', 'Automate', 'Monitor', 'Optimise'];

const metrics = [
  { label: 'Uptime target', value: '99.9%+', hint: 'Architecture & SLO-led design' },
  { label: 'Release cadence', value: 'Daily', hint: 'CI/CD when your risk profile allows' },
  { label: 'Infra efficiency', value: '−30%', hint: 'Typical waste reduction after cost audit' },
];

const workSamples = [
  {
    title: 'Multi-region SaaS platform',
    category: 'DevOps & Cloud',
    image: marketingPhotos.devOpsSampleA,
  },
  {
    title: 'Zero-downtime migration',
    category: 'Migration',
    image: marketingPhotos.devOpsSampleB,
  },
];

export const DevOpsCloud = () => {
  const waHero = useWhatsAppHref(
    'Our infra / releases feel heavier than they should, so we’d love an experienced review of pipelines, cloud setup, and reliability.',
  );
  const waFooter = useWhatsAppHref(
    'We’d like to line up an infrastructure audit (cost, security, deploy cadence, observability). What does that usually look like on your side?',
  );
  const pillars = [
    {
      id: '01',
      title: 'Cloud architecture & deployment',
      subtitle: 'CLOUD INFRASTRUCTURE DESIGN',
      Icons: [Cloud, Map, Shield] as LucideIcon[],
      desc: 'We design, deploy, and manage scalable cloud environments on AWS, GCP, and Azure, built for reliability, security, and performance from day one.',
      scope: [
        'Cloud architecture planning',
        'Multi-region deployments',
        'Secure VPC / network setup',
        'IAM & access control configuration',
        'Production-ready cloud environments',
      ],
    },
    {
      id: '02',
      title: 'CI/CD & release automation',
      subtitle: 'CI/CD PIPELINE ENGINEERING',
      Icons: [GitBranch, Rocket, RefreshCw] as LucideIcon[],
      desc: 'We build automated deployment pipelines that reduce manual effort and eliminate release risk. Shipping becomes a push, not a process.',
      scope: [
        'Automated testing pipelines',
        'Continuous deployment setup',
        'Branch-based release workflows',
        'Staging & production environment automation',
        'Zero-downtime deployments',
      ],
    },
    {
      id: '03',
      title: 'Containerisation & orchestration',
      subtitle: 'DOCKER & KUBERNETES IMPLEMENTATION',
      Icons: [Package, Boxes, Network] as LucideIcon[],
      desc: 'We containerise applications and implement scalable orchestration for high-availability systems. Your workloads run anywhere, reliably.',
      scope: [
        'Dockerisation of applications',
        'Kubernetes cluster setup',
        'Auto-scaling configuration',
        'Load balancing',
        'Container security hardening',
      ],
    },
    {
      id: '04',
      title: 'Infrastructure as code',
      subtitle: 'INFRASTRUCTURE AUTOMATION & CONFIGURATION MANAGEMENT',
      Icons: [FileCode, Terminal, Settings] as LucideIcon[],
      desc: 'We automate infrastructure provisioning to ensure consistency, speed, and scalability. No more snowflake servers.',
      scope: [
        'Infrastructure as Code setup',
        'Environment replication',
        'Version-controlled infrastructure',
        'Automated provisioning',
        'Disaster recovery readiness',
      ],
    },
    {
      id: '05',
      title: 'Cloud migration & cost optimisation',
      subtitle: 'CLOUD MIGRATION & PERFORMANCE OPTIMISATION',
      Icons: [ArrowRightLeft, TrendingDown, CloudCog] as LucideIcon[],
      desc: 'We migrate legacy systems to the cloud and optimise existing infrastructure for cost, speed, and reliability. Cut waste and improve performance.',
      scope: [
        'Legacy system migration',
        'Monolith to microservices transition',
        'Cloud cost audits',
        'Performance tuning',
        'Resource optimisation',
      ],
    },
    {
      id: '06',
      title: 'Monitoring & observability',
      subtitle: 'INFRASTRUCTURE MONITORING & RELIABILITY ENGINEERING',
      Icons: [Activity, LineChart, Bell] as LucideIcon[],
      desc: 'We implement monitoring and hardening strategies to ensure your systems stay secure and performant. Know what is happening before your users do.',
      scope: [
        'Real-time monitoring setup',
        'Logging & observability frameworks',
        'Performance bottleneck detection',
        'Security hardening',
        'Incident response planning',
      ],
    },
  ];

  const outcomes = [
    {
      title: 'Reliability first',
      description: 'SLOs, health checks, and runbooks so incidents shrink instead of your brand.',
      Icon: Shield,
    },
    {
      title: 'Automate everything repeatable',
      description: 'Pipelines and IaC so environments are reproducible, not hand-tuned snowflakes.',
      Icon: Zap,
    },
    {
      title: 'Observable systems',
      description: 'Metrics, logs, and traces that answer why latency spiked before support tickets pile up.',
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
              { label: 'DevOps & Cloud' },
            ]}
          />
        </div>
      </div>

      <section className="py-16 md:py-32 px-6 md:px-20 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <SectionLabel text="Service detail" className="mb-8" />
            <h1 className="text-[28px] sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight mb-8">
              <span className="block whitespace-nowrap">Ship faster.</span>
              <span className="block whitespace-nowrap text-brand-accent">Scale smarter.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-brand-ink/80 max-w-2xl mb-12">
              We design, automate, and manage cloud infrastructure that is reliable, secure, and built to scale.
              From zero to production-ready. with no compromises on performance or uptime.
            </p>
            <MagneticButton href={waHero} className="btn-swiss p-4 md:py-6 md:px-12 text-lg">
              BOOK AN INFRASTRUCTURE REVIEW
            </MagneticButton>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-border bg-slate-50 py-10 md:py-14 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p className="label-micro font-bold text-brand-muted">Cloud providers</p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {cloudProviders.map((name) => (
              <span
                key={name}
                className="rounded-sm border border-brand-border bg-white px-6 py-3 font-mono text-xs font-black uppercase tracking-[0.2em] text-brand-ink"
              >
                {name}
              </span>
            ))}
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
            <SectionLabel text="Why DevOps & Cloud" className="mb-6" />
            <p className="text-2xl md:text-3xl font-black uppercase leading-tight tracking-tight text-brand-ink">
              Production-grade infrastructure. automated, observable, and cost-aware.
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
          <SectionLabel text="Delivery flow" className="mb-8" />
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tighter mb-12 md:mb-16">
            Plan to optimise, continuously
          </h2>
          <ol className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
            {processSteps.map((step, i) => (
              <li
                key={step}
                className="flex flex-col gap-3 border border-brand-border bg-white p-5 md:p-6"
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-base font-black uppercase leading-tight tracking-tight md:text-lg">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-32 px-6 md:px-20 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto">
          <SectionLabel text="Outcomes" className="mb-8" />
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tighter mb-12">
            Metrics that matter
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="border border-brand-border bg-slate-50 p-8 md:p-10"
              >
                <p className="label-micro mb-4 text-brand-muted">{m.label}</p>
                <p className="mb-3 text-4xl font-black uppercase tracking-tighter md:text-5xl">
                  {m.value}
                </p>
                <p className="text-sm font-medium leading-relaxed text-brand-ink/60">{m.hint}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionLabel text="Work samples" className="mb-8" />
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tighter mb-12">
            Recent DevOps & Cloud work
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
            Audit your <br className="hidden md:block" />
            <span className="text-brand-accent">infrastructure</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium opacity-60">
            Get a clear picture of risk, cost, and delivery bottlenecks. with a prioritised remediation roadmap.
          </p>
          <div className="flex justify-center">
            <MagneticButton href={waFooter} className="btn-swiss-accent p-6 md:py-8 md:px-16 text-xl">
              BOOK AN INFRASTRUCTURE AUDIT <ArrowRight className="ml-4" />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

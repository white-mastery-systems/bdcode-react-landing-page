'use client';

import React from 'react';
import { motion } from 'motion/react';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Rocket, 
  Layers, 
  Bot, 
  Zap, 
  Compass, 
  Palette, 
  TrendingUp, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { whatsappHref } from '../lib/whatsapp';
import { SectionLabel } from './SectionLabel';

export const Packages = () => {
  const pathname = usePathname();
  const router = useRouter();
  const packages = [
    { 
      id: '01', 
      title: 'MVP Launch', 
      icon: <Rocket />, 
      desc: 'For founders going from idea → live product. Includes architecture, UX/UI, and full-stack build.',
      outcome: 'A production-ready MVP you can launch and validate.',
      path: '/packages/mvp-launch',
    },
    {
      id: '02',
      title: 'Full Product Build',
      icon: <Layers />,
      desc: 'For teams building scalable, long-term products with end-to-end engineering and DevOps.',
      outcome: 'A robust, scalable product built for growth.',
      path: '/packages/full-product-build',
    },
    {
      id: '03',
      title: 'AI System Implementation',
      icon: <Bot />,
      desc: 'For companies integrating AI into real workflows, with LLMs, RAG, agents, and API orchestration in production.',
      outcome: 'AI embedded into operations, not just a feature.',
      path: '/packages/ai-system-implementation',
    },
    {
      id: '04',
      title: 'AI Automation Setup',
      icon: <Zap />,
      desc: 'For businesses looking to eliminate manual workflows through mapping, design, AI-assisted processes, and tool integrations.',
      outcome: 'Faster operations with reduced manual effort.',
      path: '/packages/ai-automation-setup',
    },
    {
      id: '05',
      title: 'Product Strategy Sprint',
      icon: <Compass />,
      desc: 'For teams that need clarity before building, in one sprint: discovery, architecture, roadmap, KPIs, and risk.',
      outcome: 'A clear execution plan with zero guesswork.',
      path: '/packages/product-strategy-sprint',
    },
    {
      id: '06',
      title: 'UI/UX Design System',
      icon: <Palette />,
      desc: 'For products that need better usability and conversion, from research and UI through a documented system and dev-ready handoff.',
      outcome: 'A scalable, conversion-focused product experience.',
      path: '/packages/ui-ux-design-system',
    },
    {
      id: '07',
      title: 'SEO Growth Engine',
      icon: <TrendingUp />,
      desc: 'Full audit → keyword & cluster strategy → technical and on-page SEO → conversion-ready funnels for compounding organic growth.',
      outcome: 'Compounding organic traffic and lead flow.',
      path: '/packages/seo-growth-engine',
    },
    {
      id: '08',
      title: 'Vibe Coding Audit, Fix & Deploy',
      icon: <ShieldCheck />,
      desc: 'Audit → fix → deploy for fast-shipped code: refactor, performance, CI/CD, cloud deploy, and production hardening.',
      outcome: 'From “it works” to “it scales.”',
      path: '/packages/vibe-coding-audit-fix-deploy',
    },
  ];

  return (
    <section id="packages" className="scroll-mt-20 py-16 md:py-32 px-8 md:px-20 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-12">
          <div>
            <SectionLabel text="Our Packages" className="mb-6" />
            <h2 className="text-4xl md:text-7xl font-black uppercase leading-none tracking-tighter">
              Our <br className="hidden md:block" />
              <span className="text-brand-muted">Packages</span>
            </h2>
          </div>
          <a
            href={whatsappHref({
              pathname,
              intent:
                'We’re ready to scope a new build and would love to understand timelines, process, and next steps with bdcode_.',
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-swiss shrink-0 self-start md:self-auto"
          >
            Start project
          </a>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-l border-brand-border">
          {packages.map((pkg, idx) => {
            const packageWa = whatsappHref({
              pathname,
              intent: `I’m interested in your “${pkg.title}” package. Could we chat about fit, scope, and pricing?`,
            });
            const openPackage = () => {
              if (pkg.path) {
                router.push(pkg.path);
              } else {
                window.open(packageWa, '_blank');
              }
            };
            const footerCta = pkg.path ? 'View package' : 'Learn more';
            return (
            <motion.div
              key={pkg.id}
              role="button"
              tabIndex={0}
              aria-label={
                pkg.path
                  ? `${pkg.title}: open full package page`
                  : `${pkg.title}: contact us on WhatsApp about this package`
              }
              onClick={openPackage}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openPackage();
                }
              }}
              className="p-10 border-r border-b border-brand-border group transition-all duration-500 flex flex-col justify-between min-h-[450px] cursor-pointer hover:bg-slate-50"
            >
              <div>
                <p className="label-micro group-hover:text-black/60 mb-12">[ {pkg.id} ]</p>
                <div className="mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                  {React.cloneElement(pkg.icon as React.ReactElement<{ size?: number }>, { size: 40 })}
                </div>
                <h3 className="text-3xl font-bold mb-4 leading-tight">{pkg.title}</h3>
                <p className="text-sm leading-relaxed opacity-60 group-hover:opacity-100 mb-6">
                  {pkg.desc}
                </p>
              </div>
              
              <div className="pt-6 border-t border-brand-border/20 group-hover:border-black/20 space-y-6">
                <div>
                  <p className="label-micro text-[10px] opacity-40 group-hover:opacity-60 mb-1">OUTCOME</p>
                  <p className="font-bold text-sm">{pkg.outcome}</p>
                </div>
                <div className="flex items-center gap-2 font-bold text-sm group-hover:text-black transition-colors">
                  <ArrowRight size={20} className="text-brand-accent group-hover:translate-x-1 transition-transform" /> 
                  <span>{footerCta}</span>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

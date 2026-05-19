'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, 
  CheckCircle2, 
  ArrowRight, 
  Layout, 
  Code2, 
  Cloud, 
  Users,
  Clock,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { MagneticButton } from '../components/MagneticButton';
import { useWhatsAppHref } from '../hooks/useWhatsAppHref';

export const MVPLaunch = () => {
  const waHero = useWhatsAppHref(
    'We’re a founder-led team looking at your MVP Launch offering. Could we book a discovery call to sanity-check scope, timeline, and fit?',
  );
  const waFooter = useWhatsAppHref(
    'Still on the MVP Launch track, and we’d love to book a discovery call and understand what “production-ready” looks like in your engagement model.',
  );
  const inclusions = [
    {
      title: 'Product Architecture',
      icon: <Layout className="text-brand-accent" size={24} />,
      items: [
        'Feature scoping & prioritisation',
        'System design & data modelling',
        'Tech stack selection',
        'Scalability planning from day one'
      ]
    },
    {
      title: 'UI/UX Design',
      icon: <Users className="text-brand-accent" size={24} />,
      items: [
        'User journey mapping & wireframes',
        'High-fidelity UI design',
        'Mobile-responsive layouts',
        'Interactive prototype for stakeholder review'
      ]
    },
    {
      title: 'Full-Stack Engineering',
      icon: <Code2 className="text-brand-accent" size={24} />,
      items: [
        'Frontend (React / Next.js)',
        'Backend APIs (Node.js / Python)',
        'Database setup (PostgreSQL / MongoDB)',
        'Authentication & third-party integrations'
      ]
    },
    {
      title: 'Cloud Deployment',
      icon: <Cloud className="text-brand-accent" size={24} />,
      items: [
        'Production environment setup (AWS / GCP)',
        'CI/CD pipeline',
        'Domain, SSL, environment configuration',
        'Monitoring & uptime setup'
      ]
    }
  ];

  const process = [
    { step: '01', title: 'Discovery & Scoping', desc: 'We align on product goals, define scope, and confirm tech choices.' },
    { step: '02', title: 'Architecture & Design', desc: 'System design and UX wireframes delivered for review.' },
    { step: '03', title: 'High-Fidelity UI', desc: 'Full UI design system built and approved.' },
    { step: '04', title: 'Engineering Sprint', desc: 'Frontend, backend, and integrations built iteratively.' },
    { step: '05', title: 'QA & Hardening', desc: 'Bug fixes, performance checks, and security review.' },
    { step: '06', title: 'Deployment & Handoff', desc: 'Production launch, documentation, and knowledge transfer.' }
  ];

  const faqs = [
    {
      q: 'How long does an MVP take?',
      a: 'Typically 6–12 weeks depending on complexity. We will scope this precisely in discovery.'
    },
    {
      q: 'Do I own the code?',
      a: 'Yes. All code, assets, and infrastructure are fully yours at handoff.'
    },
    {
      q: 'Can we add features after launch?',
      a: 'Absolutely: many clients move into a Full Product Build engagement after validating their MVP.'
    }
  ];

  return (
    <div className="pt-20">
      <div className="border-b border-brand-border bg-white px-6 py-4 md:px-20">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Packages', to: '/#packages' },
              { label: 'MVP Launch' },
            ]}
          />
        </div>
      </div>
      {/* Hero Section */}
      <section className="py-16 md:py-32 px-6 md:px-20 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="Package 01" className="mb-8" />
              <h1 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
                MVP <br />
                <span className="text-brand-accent">Launch</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-brand-ink/80 max-w-xl mb-12">
                For founders going from idea to live product. We take your concept to a fully deployed, production-ready MVP: shipping fast without cutting corners.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <MagneticButton href={waHero} className="btn-swiss p-4 md:py-6 md:px-12 text-lg">
                  BOOK A DISCOVERY CALL
                </MagneticButton>
                <div className="flex items-center gap-4 px-4">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center">
                    <Rocket className="text-brand-accent" size={24} />
                  </div>
                  <div>
                    <p className="label-micro text-[10px]">OUTCOME</p>
                    <p className="font-bold text-sm uppercase">Production-ready MVP</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="aspect-square bg-slate-50 border border-brand-border rounded-sm p-12 flex items-center justify-center overflow-hidden">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '40px 40px' }}
                />
                <div className="relative z-10 space-y-8 w-full">
                  <div className="h-2 w-full bg-brand-border rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      className="h-full bg-brand-accent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="h-24 bg-white border border-brand-border rounded-sm shadow-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-32 px-6 md:px-20 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <SectionLabel text="Overview" className="justify-center" />
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">
            End-to-end engineering <br /> from concept to scale
          </h2>
          <p className="text-xl font-medium text-brand-ink/70 leading-relaxed">
            We combine product architecture, UX/UI design, full-stack engineering, and cloud deployment into a single engagement. You focus on the business: we handle the entire technical execution.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-32 px-6 md:px-20 bg-white border-y border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <SectionLabel text="The Scope" className="mb-6" />
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">What's Included</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {inclusions.map((inc, i) => (
              <div key={i} className="p-8 border border-brand-border rounded-sm space-y-6 hover:border-brand-accent transition-colors group">
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-sm group-hover:bg-brand-accent/10 transition-colors">
                  {inc.icon}
                </div>
                <h3 className="text-xl font-black uppercase">{inc.title}</h3>
                <ul className="space-y-3">
                  {inc.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <ChevronRight size={16} className="text-brand-accent mt-1 shrink-0" />
                      <span className="text-sm font-bold uppercase tracking-tight leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-32 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <SectionLabel text="The Journey" className="mb-6" />
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">Delivery Process</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {process.map((p, i) => (
              <div key={i} className="space-y-4">
                <span className="font-mono text-brand-accent font-bold">[ {p.step} ]</span>
                <h3 className="text-2xl font-black uppercase">{p.title}</h3>
                <p className="text-brand-ink/70 font-medium leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-32 px-6 md:px-20 bg-slate-50 border-y border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
            <div>
              <SectionLabel text="Common Questions" className="mb-8" />
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter">
                Frequently <br /> Asked
              </h2>
            </div>
            <div className="space-y-12">
              {faqs.map((faq, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="text-2xl font-bold uppercase tracking-tight">{faq.q}</h3>
                  <p className="text-lg font-medium text-brand-ink/70 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-32 px-6 md:px-20 bg-brand-ink text-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-8xl font-black uppercase leading-none tracking-tighter">
            Ready to get <br />
            <span className="text-brand-accent">started?</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium opacity-60">
            Book a discovery call and let's scope your project.
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

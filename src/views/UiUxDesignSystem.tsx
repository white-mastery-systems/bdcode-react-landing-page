'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Palette,
  ArrowRight,
  Search,
  LayoutTemplate,
  Sparkles,
  Layers,
  MousePointerClick,
  ChevronRight,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { MagneticButton } from '../components/MagneticButton';
import { useWhatsAppHref } from '../hooks/useWhatsAppHref';

export const UiUxDesignSystem = () => {
  const waHero = useWhatsAppHref(
    'We’re interested in your UI/UX Design System package, from research through dev-ready system and prototypes. Could we book a design audit or discovery call?',
  );
  const waFooter = useWhatsAppHref(
    'We’d like to start a UI/UX engagement (design system + key flows). Let’s book a call to align on scope, brand constraints, and handoff to engineering.',
  );

  const inclusions = [
    {
      title: 'UX research',
      icon: <Search className="text-brand-accent" size={24} />,
      items: [
        'User interviews & behavioural analysis',
        'Usability testing sessions',
        'Feedback synthesis',
        'Conversion friction analysis',
      ],
    },
    {
      title: 'Wireframes',
      icon: <LayoutTemplate className="text-brand-accent" size={24} />,
      items: [
        'User journey mapping',
        'Information architecture',
        'Low-fidelity wireframes',
        'Feature prioritisation & MVP structure planning',
      ],
    },
    {
      title: 'High-fidelity UI',
      icon: <Sparkles className="text-brand-accent" size={24} />,
      items: [
        'Web & mobile UI design',
        'Interaction design & micro-interactions',
        'Visual hierarchy systems',
        'Brand-aligned design language',
      ],
    },
    {
      title: 'Design system',
      icon: <Layers className="text-brand-accent" size={24} />,
      items: [
        'Component libraries',
        'Token-based design foundations',
        'Responsive layout systems',
        'Cross-platform UI guidelines',
        'Dev-ready design documentation',
      ],
    },
    {
      title: 'Prototyping & testing',
      icon: <MousePointerClick className="text-brand-accent" size={24} />,
      items: [
        'Click-through product flows',
        'User testing prototypes',
        'Stakeholder demo prototypes',
        'Iteration-ready mockups',
      ],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'UX research',
      desc: 'User interviews, behavioural analysis, and friction audit.',
    },
    {
      step: '02',
      title: 'Information architecture',
      desc: 'Navigation, hierarchy, and user flow mapping.',
    },
    {
      step: '03',
      title: 'Wireframing',
      desc: 'Low-fidelity wireframes reviewed and approved.',
    },
    {
      step: '04',
      title: 'High-fidelity design',
      desc: 'Full UI design across all key screens.',
    },
    {
      step: '05',
      title: 'Design system build',
      desc: 'Component library, tokens, and documentation.',
    },
    {
      step: '06',
      title: 'Prototype & handoff',
      desc: 'Interactive prototype delivered with dev-ready specs.',
    },
  ];

  const faqs = [
    {
      q: 'What design tools do you use?',
      a: 'Figma is our primary tool. All files are delivered in Figma with full dev handoff specs.',
    },
    {
      q: 'Is the design system developer-ready?',
      a: 'Yes. We deliver annotated components, spacing tokens, and interaction notes ready for engineering.',
    },
    {
      q: 'Can you work with our existing brand?',
      a: 'Absolutely. We can extend an existing brand system or rebuild it if needed.',
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
              { label: 'UI/UX Design System' },
            ]}
          />
        </div>
      </div>
      <section className="border-b border-brand-border bg-white px-6 py-16 md:px-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionLabel text="Package 06" className="mb-8" />
              <h1 className="mb-8 text-5xl font-black uppercase leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
                UI/UX design <br />
                <span className="text-brand-accent">system</span>
              </h1>
              <p className="mb-12 max-w-xl text-xl font-medium leading-relaxed text-brand-ink/80 md:text-2xl">
                For products that need better usability and conversion, from research through a documented design system,
                with visual quality, usability, and measurable outcomes in one engagement.
              </p>
              <div className="flex flex-col gap-6 sm:flex-row">
                <MagneticButton href={waHero} className="btn-swiss p-4 md:px-12 md:py-6 text-lg">
                  START YOUR DESIGN SYSTEM
                </MagneticButton>
                <div className="flex items-center gap-4 px-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10">
                    <Palette className="text-brand-accent" size={24} />
                  </div>
                  <div>
                    <p className="label-micro text-[10px]">OUTCOME</p>
                    <p className="text-sm font-bold uppercase leading-tight">
                      A scalable, conversion-focused product experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-sm border border-brand-border bg-gradient-to-br from-slate-50 to-brand-accent/10 p-12">
                <motion.div
                  initial={{ opacity: 0.85 }}
                  animate={{ opacity: [0.85, 1, 0.85] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="grid w-full max-w-xs grid-cols-3 gap-2 rounded-sm border border-brand-border/60 bg-white p-4 shadow-md"
                >
                  {['Aa', 'Btn', '•••'].map((cell) => (
                    <div
                      key={cell}
                      className="flex aspect-square items-center justify-center rounded border border-brand-border/40 bg-slate-50 font-mono text-[10px] font-bold text-brand-ink/50"
                    >
                      {cell}
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
            Great products don&apos;t <br />
            just work, and they feel right
          </h2>
          <p className="text-xl font-medium leading-relaxed text-brand-ink/70">
            We design end-to-end product experiences that balance visual quality, usability, and conversion. From UX
            research through a fully documented design system, we give your product the design foundation it needs to
            scale.
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
            Design that <br />
            <span className="text-brand-accent">converts.</span>
          </h2>
          <p className="text-xl font-medium opacity-60 md:text-2xl">
            Book a discovery call. We&apos;ll align on WCAG-minded patterns, mobile-first layouts, and how dev handoff
            fits your stack.
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

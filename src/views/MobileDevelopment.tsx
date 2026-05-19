'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Smartphone,
  Layers,
  Sparkles,
  Code2,
  RefreshCw,
  Cpu,
  Shield,
  Apple,
  Store,
  Gauge,
  Heart,
  type LucideIcon,
} from 'lucide-react';
import { AnimatedServiceIconStack } from '../components/AnimatedServiceIconStack';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { marketingPhotos } from '../constants/marketingPhotos';
import { MagneticButton } from '../components/MagneticButton';
import { useWhatsAppHref } from '../hooks/useWhatsAppHref';

const platforms = ['Flutter', 'React Native', 'Android', 'iOS'];

const shipSteps = ['Discovery', 'Build', 'QA', 'Store submission'];

const mockups = [
  { src: marketingPhotos.mobileMockupA, alt: 'Smartphone product frame' },
  { src: marketingPhotos.mobileMockupB, alt: 'Hand holding phone showing app UI' },
  { src: marketingPhotos.mobileMockupC, alt: 'Mobile device on desk' },
];

export const MobileDevelopment = () => {
  const waHero = useWhatsAppHref(
    'We’re planning a mobile app (new or rebuild) and want to talk platforms, UX, and a realistic ship plan with your team.',
  );
  const waFooter = useWhatsAppHref(
    'Same as above, we’re serious about moving forward on mobile and would love to pick your brain on approach and next steps.',
  );
  const pillars = [
    {
      id: '01',
      title: 'Flutter app development',
      subtitle: 'CROSS-PLATFORM APP DEVELOPMENT',
      Icons: [Layers, Smartphone, Sparkles] as LucideIcon[],
      desc: 'We build high-performance, cross-platform mobile applications using Flutter. delivering native-like experiences across Android and iOS from a single codebase. Faster to market, cheaper to maintain.',
      scope: [
        'MVP app development',
        'Custom UI/UX implementation',
        'API integrations',
        'Real-time features',
        'App Store & Play Store deployment',
      ],
    },
    {
      id: '02',
      title: 'React Native app development',
      subtitle: 'CROSS-PLATFORM REACT-BASED APPS',
      Icons: [Code2, Smartphone, RefreshCw] as LucideIcon[],
      desc: 'We develop scalable, production-ready mobile apps using React Native for faster iteration and shared logic across platforms. Ideal for teams that already use React on the web.',
      scope: [
        'Cross-platform app architecture',
        'Third-party SDK integrations',
        'Push notifications',
        'Performance optimisation',
        'OTA updates',
      ],
    },
    {
      id: '03',
      title: 'Native Android development',
      subtitle: 'NATIVE ANDROID APP DEVELOPMENT',
      Icons: [Smartphone, Cpu, Shield] as LucideIcon[],
      desc: 'We build fully native Android applications optimised for performance, security, and deep device integration using Kotlin and Java.',
      scope: [
        'Kotlin / Java-based development',
        'Android SDK integrations',
        'Custom hardware integrations',
        'Background services',
        'Play Store publishing & compliance',
      ],
    },
    {
      id: '04',
      title: 'Native iOS development',
      subtitle: 'NATIVE IOS APP DEVELOPMENT',
      Icons: [Apple, Smartphone, Sparkles] as LucideIcon[],
      desc: 'We develop high-performance native iOS applications tailored for the Apple ecosystem. from Swift code to App Store submission.',
      scope: [
        'Swift-based development',
        'iOS SDK integrations',
        'Apple-specific optimisations',
        'App Store deployment',
        'Device-level feature integration',
      ],
    },
  ];

  const outcomes = [
    {
      title: 'Feels native',
      description: 'Motion, gestures, and platform patterns that match user expectations on iOS and Android.',
      Icon: Heart,
    },
    {
      title: 'Ship on one roadmap',
      description: 'Shared product goals whether you choose Flutter, React Native, or fully native lanes.',
      Icon: Gauge,
    },
    {
      title: 'Store-ready delivery',
      description: 'Builds, signing, listings, and review cycles handled with clear ownership and checklists.',
      Icon: Store,
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
              { label: 'Mobile development' },
            ]}
          />
        </div>
      </div>

      <section className="py-16 md:py-32 px-6 md:px-20 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <SectionLabel text="Service detail" className="mb-8" />
            <h1 className="text-[28px] sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight mb-8">
              <span className="block whitespace-nowrap">Apps that users love.</span>
              <span className="block whitespace-nowrap text-brand-accent">Platforms that scale.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-brand-ink/80 max-w-2xl mb-12">
              From cross-platform Flutter apps to fully native iOS and Android experiences, we build mobile
              products that feel right on every device.
            </p>
            <MagneticButton href={waHero} className="btn-swiss p-4 md:py-6 md:px-12 text-lg">
              START YOUR APP PROJECT
            </MagneticButton>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-border bg-slate-50 py-10 md:py-14 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="label-micro font-bold text-brand-muted">Platforms</p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {platforms.map((name) => (
              <span
                key={name}
                className="rounded-sm border border-brand-border bg-white px-5 py-2.5 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-brand-ink md:px-6 md:py-3"
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
            <SectionLabel text="Mobile engineering" className="mb-6" />
            <p className="text-2xl md:text-3xl font-black uppercase leading-tight tracking-tight text-brand-ink">
              One product vision. native polish, cross-platform speed, or a hybrid path.
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
          <SectionLabel text="UI in context" className="mb-8" />
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tighter mb-12 md:mb-16">
            Device mockups
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {mockups.map((m) => (
              <div key={m.alt} className="flex flex-col items-center">
                <div className="w-full max-w-[260px] rounded-[2rem] border-[10px] border-brand-ink bg-brand-ink p-1.5 shadow-xl">
                  <div className="overflow-hidden rounded-[1.35rem] bg-brand-ink">
                    <img
                      src={m.src}
                      alt={m.alt}
                      className="aspect-[9/19] w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-6 md:px-20 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel text="App store delivery" className="mb-8" />
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tighter mb-6">
              From code to store listing
            </h2>
            <p className="text-lg md:text-xl font-medium leading-relaxed text-brand-ink/70">
              We handle signing, build flavours, screenshots guidance, metadata, review notes, and resubmission
              loops, so your team spends time on product, not portal friction.
            </p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {shipSteps.map((step, i) => (
              <li
                key={step}
                className="flex flex-col gap-2 border border-brand-border bg-slate-50 p-6"
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-base font-black uppercase tracking-tight">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-32 px-6 md:px-20 bg-brand-ink text-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-8xl font-black uppercase leading-none tracking-tighter">
            Start your <br className="hidden md:block" />
            <span className="text-brand-accent">app project</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium opacity-60">
            Share your audience, platforms, and timeline. We&apos;ll propose the right stack and a milestone plan.
          </p>
          <div className="flex justify-center">
            <MagneticButton href={waFooter} className="btn-swiss-accent p-6 md:py-8 md:px-16 text-xl">
              START YOUR APP PROJECT <ArrowRight className="ml-4" />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

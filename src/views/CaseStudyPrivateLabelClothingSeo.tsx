'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  Bot,
  Layers,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  ChevronRight,
  Globe2,
  Package,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { MagneticButton } from '../components/MagneticButton';
import { marketingPhotos } from '../constants/marketingPhotos';
import { useWhatsAppHref } from '../hooks/useWhatsAppHref';

const waPrimary = (extra: string) =>
  `We saw your private label clothing manufacturer SEO case study on the site.${extra} Could we book a short call to see if a similar SEO + AEO programme fits our manufacturing or export business?`;

export const CaseStudyPrivateLabelClothingSeo = () => {
  const waHero = useWhatsAppHref(
    waPrimary(' We need stronger Google and AI search visibility for bulk buyers and export clients.'),
  );
  const waMid = useWhatsAppHref(
    waPrimary(' We want FAQs, structured content, and a trustworthy B2B site that ranks for high-intent manufacturing keywords.'),
  );
  const waFooter = useWhatsAppHref(
    'We’re ready to scope SEO + AEO for our apparel / manufacturing brand (similar to your private label clothing engagement). Please share next steps and typical timelines.',
  );

  const stats = [
    { value: '75%', label: 'Search impressions', sub: 'Lift after initial SEO setup' },
    { value: '8+', label: 'Keywords ranked', sub: 'Including high-intent manufacturing terms' },
    { value: '12', label: 'Days to launch', sub: 'SEO-ready website live' },
    { value: '10+', label: 'Lead forms', sub: 'In the first 6 weeks post-launch' },
  ];

  const challenges = [
    {
      title: 'No digital presence',
      desc: 'The business had no credible online footprint before the project—buyers could not verify or discover the manufacturer.',
      icon: Globe2,
    },
    {
      title: 'Catalog & content gap',
      desc: 'Multiple product lines existed, but there was no structured catalog or page-level content to rank or convert.',
      icon: Package,
    },
    {
      title: 'Competitive keywords',
      desc: 'Targets like “private label clothing manufacturer” sit in a crowded niche—generic pages would not compete.',
      icon: Search,
    },
    {
      title: 'Trust & AI visibility',
      desc: 'Export and bulk buyers need proof of legitimacy; the brand also needed to show up in Google and AI-assisted search.',
      icon: Bot,
    },
  ];

  const outcomes = [
    {
      title: 'B2B discovery',
      desc: 'Service and product pages tuned for bulk buyers, uniforms, and private-label intent—not only a thin brochure site.',
      icon: Target,
    },
    {
      title: 'AI-ready structure',
      desc: 'FAQs, answer blocks, and structured content so assistants and AI overviews can surface accurate facts about the business.',
      icon: Bot,
    },
    {
      title: 'Export-grade trust',
      desc: 'Clear navigation, fast mobile experience, and lead paths (WhatsApp, call, forms) that match how international buyers enquire.',
      icon: Sparkles,
    },
  ];

  const approach = [
    {
      title: 'Website & UX',
      items: [
        'Mobile-friendly build with fast load and clear navigation',
        'Professional presentation of services and catalog-style product coverage',
        'Lead capture: WhatsApp, click-to-call, and inquiry forms',
      ],
    },
    {
      title: 'SEO foundation',
      items: [
        'Keyword research centred on private label and bulk manufacturing intent',
        'On-page optimisation: headings, metadata, and copy aligned to target terms',
        'Product coverage for t-shirts, uniforms, and bulk clothing lines',
      ],
    },
    {
      title: 'AEO & structured answers',
      items: [
        'FAQ and Q&A-style content for answer engines and rich results',
        'Business and service entities spelled out for humans and machines',
        'Visibility patterns suited to Google and major AI search experiences',
      ],
    },
  ];

  const proofPoints = [
    'Roughly +75% increase in search impressions after the initial SEO setup',
    '10+ inquiry form submissions within the first six weeks of launch',
    'Stronger credibility and trust signals for B2B and export buyers',
    'New enquiries from additional cities and global regions',
  ];

  const faqs = [
    {
      q: 'Is 12 days realistic for every manufacturing site?',
      a: 'This client shipped with a focused scope: essential pages, technical SEO baseline, and lead capture. Larger catalogs or custom integrations take longer—we scope honestly in discovery.',
    },
    {
      q: 'Do you only optimise for Google?',
      a: 'No. The same structured answers, FAQs, and entity clarity help traditional search and AI-assisted answers that pull from the open web.',
    },
    {
      q: 'What if we already have a website?',
      a: 'We can refactor IA, speed, schema, and content without a full rebuild. This case study shows a net-new launch; many engagements start from an existing domain.',
    },
  ];

  return (
    <div className="pt-20">
      <div className="border-b border-brand-border bg-white px-6 py-4 md:px-20">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Work', to: '/#work' },
              { label: 'Private label clothing · SEO case study' },
            ]}
          />
        </div>
      </div>

      <section className="border-b border-brand-border bg-white px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionLabel text="Case study · B2B apparel / SEO" className="mb-6" />
            <h1 className="mb-6 text-4xl font-black uppercase leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl">
              Private label <span className="text-brand-accent">clothing</span> manufacturer
            </h1>
            <p className="mb-4 text-lg font-bold uppercase tracking-wide text-brand-ink/70 md:text-xl">
              Ranked on Google &amp; AI search to attract bulk buyers and export clients
            </p>
            <p className="mb-10 max-w-xl text-lg font-medium leading-relaxed text-brand-ink/80 md:text-xl">
              From no digital presence to an SEO-ready site in twelve days: keyword-led pages, AEO-friendly FAQs, and lead
              paths built for how bulk and export buyers actually research suppliers.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <MagneticButton href={waHero} className="btn-swiss p-4 text-base md:px-10 md:py-5">
                Book a 15-min fit call
              </MagneticButton>
              <a
                href="#approach"
                className="px-4 text-center text-sm font-bold uppercase tracking-widest text-brand-ink underline decoration-brand-accent decoration-2 underline-offset-4 hover:text-brand-accent"
              >
                See how we did it
              </a>
            </div>
            <p className="mt-8 max-w-lg text-sm font-medium leading-relaxed text-brand-muted">
              Based on bdcode_&apos;s SEO case study for a private label clothing manufacturer. Exact domain and
              screenshots available under NDA on enquiry.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square overflow-hidden rounded-sm border border-brand-border bg-slate-100 shadow-xl"
          >
            <img
              src={marketingPhotos.workCaseSeoApparel}
              alt="Private label clothing manufacturer case study"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-ink/90 to-transparent px-6 py-8 text-white">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent">Outcome</p>
              <p className="mt-1 text-lg font-black uppercase leading-tight md:text-xl">
                Organic visibility &amp; qualified B2B enquiries
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-brand-border bg-brand-ink px-6 py-12 text-white md:px-20 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map(({ value, label, sub }) => (
            <div key={label}>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent">{label}</p>
              <p className="mt-2 text-4xl font-black tracking-tighter md:text-5xl">{value}</p>
              <p className="mt-2 text-sm font-medium leading-snug text-white/65">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:px-20 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <SectionLabel text="Starting point" className="justify-center" />
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
              Challenges <span className="text-brand-accent">we solved</span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {challenges.map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="rounded-sm border border-brand-border bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-brand-accent/15">
                  <Icon className="text-brand-ink" size={24} strokeWidth={2} />
                </div>
                <h3 className="mb-3 text-lg font-black uppercase leading-tight">{title}</h3>
                <p className="text-sm font-medium leading-relaxed text-brand-ink/75">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-20 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <SectionLabel text="Why it worked" className="justify-center" />
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tighter md:text-5xl">
              Built for <span className="text-brand-accent">bulk &amp; export</span> buyers
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {outcomes.map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="rounded-sm border border-brand-border bg-slate-50 p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-brand-accent/15">
                  <Icon className="text-brand-ink" size={24} strokeWidth={2} />
                </div>
                <h3 className="mb-3 text-lg font-black uppercase leading-tight">{title}</h3>
                <p className="text-sm font-medium leading-relaxed text-brand-ink/75">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="scroll-mt-24 border-y border-brand-border bg-slate-50 px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <SectionLabel text="The programme" className="mb-4" />
            <h2 className="text-3xl font-black uppercase tracking-tighter md:text-6xl">What we shipped</h2>
            <p className="mt-6 text-lg font-medium leading-relaxed text-brand-ink/75">
              New website launch plus coordinated SEO and AEO: make the manufacturer discoverable on Google and in
              AI-style search, with pages and trust signals that convert serious buyers.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-3">
            {approach.map((block) => (
              <div key={block.title} className="space-y-5 rounded-sm border border-brand-border bg-white p-8">
                <div className="flex items-center gap-2">
                  <Layers className="text-brand-accent" size={22} />
                  <h3 className="text-xl font-black uppercase leading-tight">{block.title}</h3>
                </div>
                <ul className="space-y-3">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm font-bold uppercase leading-snug tracking-tight text-brand-ink/85"
                    >
                      <ChevronRight className="mt-0.5 shrink-0 text-brand-accent" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-ink px-6 py-16 text-white md:px-20 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent">Results</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight md:text-4xl">
              What moved after go-live
            </h2>
            <ul className="mt-8 space-y-4">
              {proofPoints.map((line) => (
                <li key={line} className="flex items-start gap-3 text-base font-medium leading-relaxed text-white/85 md:text-lg">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brand-accent" size={22} />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <MagneticButton href={waMid} className="btn-swiss-accent shrink-0 px-8 py-5 text-base md:px-10 md:py-6 md:text-lg">
            Get the same playbook <ArrowRight className="ml-2 inline" size={20} />
          </MagneticButton>
        </div>
      </section>

      <section className="px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel text="Fit check" className="mb-6" />
              <h2 className="text-3xl font-black uppercase leading-none tracking-tighter md:text-5xl">
                Manufacturing <br />
                <span className="text-brand-accent">without</span> digital proof?
              </h2>
              <p className="mt-8 text-lg font-medium leading-relaxed text-brand-ink/75">
                Export and bulk buyers compare suppliers online first. If your site is thin, slow, or invisible in search
                and AI answers, you lose deals before the conversation starts. This engagement is the playbook we use for
                similar B2B manufacturing brands.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent/15">
                  <Target className="text-brand-ink" size={28} />
                </div>
                <p className="text-sm font-bold uppercase leading-snug text-brand-ink">
                  Free scoping: send your domain + top export markets on WhatsApp.
                </p>
              </div>
            </div>
            <div className="space-y-10 rounded-sm border border-brand-border bg-slate-50 p-8 md:p-12">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="text-lg font-black uppercase tracking-tight text-brand-ink">{faq.q}</h3>
                  <p className="mt-3 text-base font-medium leading-relaxed text-brand-ink/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-border bg-white px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <TrendingUp className="mx-auto mb-6 text-brand-accent" size={40} strokeWidth={2} />
          <h2 className="text-3xl font-black uppercase leading-tight md:text-6xl">
            Ready for <span className="text-brand-accent">B2B-grade</span> discovery?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-brand-ink/70">
            Book a short WhatsApp-led conversation. We&apos;ll confirm fit, share a sensible roadmap, and map this case
            study to your catalog and export goals.
          </p>
          <div className="mt-10 flex justify-center">
            <MagneticButton href={waFooter} className="btn-swiss p-5 text-lg md:px-14 md:py-7">
              Start on WhatsApp <ArrowRight className="ml-3 inline" size={22} />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

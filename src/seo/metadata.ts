import type { Metadata } from 'next';

const BRAND = 'bdcode_';
/** Public site origin for canonicals and Open Graph. Override in production via NEXT_PUBLIC_SITE_URL. */
export const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bdcode.in';

function pageMeta(title: string, description: string, path: string): Metadata {
  const url = `${siteOrigin}${path === '/' ? '' : path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND,
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

/** Root layout: defaults, metadataBase, and title template for pages that use short titles. */
export const rootLayoutMetadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: `${BRAND} | Digital Product, Web, Mobile & AI Engineering | Chennai, India`,
    template: `%s | ${BRAND}`,
  },
  description:
    'bdcode_ is a Chennai-based digital studio for product architecture, full-stack and mobile engineering, AI systems, UI/UX, and SEO—not just launch-day code.',
  applicationName: BRAND,
  authors: [{ name: BRAND, url: siteOrigin }],
  creator: BRAND,
  publisher: BRAND,
  openGraph: {
    type: 'website',
    siteName: BRAND,
    locale: 'en_IN',
    url: siteOrigin,
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: { index: true, follow: true },
};

export const pages = {
  home: pageMeta(
    `${BRAND} | Web, Mobile App & Software Development Company | Chennai, India`,
    'Build web apps, mobile products, and AI-powered systems with bdcode_ in Chennai—from MVP to scale: engineering, UX, DevOps, and SEO that compound growth. Trusted by enterprises and growth teams.',
    '/',
  ),

  blog: pageMeta(
    `Insights & Articles on AI, Product, Engineering & SEO | ${BRAND}`,
    'Practical articles from bdcode_ on AI agents vs automation, SEO and content strategy, analytics, backend scale, cloud cost, and shipping reliable product—written for founders and engineering leaders.',
    '/blog',
  ),

  services: {
    productArchitecture: pageMeta(
      `Product Architecture & Technical Strategy | ${BRAND}`,
      'Turn vision into a scalable blueprint: system design, integration maps, risk trade-offs, and an execution-ready architecture before you overbuild. Ideal for platforms, marketplaces, and regulated domains.',
      '/services/product-architecture',
    ),
    fullStackEngineering: pageMeta(
      `Full-Stack Engineering & Web Application Development | ${BRAND}`,
      'High-performance full-stack development—APIs, modern frontends, data layers, and performance budgets—with code you can operate and extend. Built for conversion, reliability, and shipping velocity.',
      '/services/full-stack-engineering',
    ),
    devopsCloud: pageMeta(
      `DevOps, CI/CD & Cloud Infrastructure | ${BRAND}`,
      'Automated pipelines, observable production environments, and cloud architecture that survives traffic spikes and audits. From first deploy to hardened multi-environment operations.',
      '/services/devops-cloud',
    ),
    mobileDevelopment: pageMeta(
      `Mobile App Development—iOS, Android, React Native & Flutter | ${BRAND}`,
      'Native-quality mobile apps and cross-platform delivery: performance, offline-ready UX, store submission, and ongoing releases. For consumer, B2B, and field teams.',
      '/services/mobile-development',
    ),
    aiEngineering: pageMeta(
      `AI Engineering—LLMs, RAG, Agents & Production ML | ${BRAND}`,
      'Ship AI in real workflows: RAG over your data, agent orchestration, guardrails, evaluation, and API integration—not demos that break in production.',
      '/services/ai-engineering',
    ),
    uiUxDesign: pageMeta(
      `UI/UX Design & Product Experience | ${BRAND}`,
      'Research-backed UI/UX for clarity and conversion: flows, components, accessibility-aware patterns, and handoff that engineering can ship without rework.',
      '/services/ui-ux-design',
    ),
    seoGrowth: pageMeta(
      `SEO & Organic Growth—Technical SEO, Content & Funnels | ${BRAND}`,
      'Technical SEO, keyword and cluster strategy, on-page refinement, and measurement so organic traffic turns into qualified demand—aligned to how search and AI overviews surface answers.',
      '/services/seo-growth',
    ),
  },

  packages: {
    mvpLaunch: pageMeta(
      `MVP Launch Package—Idea to Production-Ready Product | ${BRAND}`,
      'Fixed-scope MVP package: architecture, UX/UI, and full-stack build to get a validated product live—so you can learn from users, not slide decks.',
      '/packages/mvp-launch',
    ),
    fullProductBuild: pageMeta(
      `Full Product Build—Scalable Engineering & DevOps | ${BRAND}`,
      'End-to-end product delivery for teams that need breadth and longevity: engineering quality, scaling paths, and operational maturity beyond a single release.',
      '/packages/full-product-build',
    ),
    aiSystemImplementation: pageMeta(
      `AI System Implementation Package | ${BRAND}`,
      'Production AI implementation: LLMs, retrieval, tooling, and integration into your stack—with ownership, monitoring, and iteration—not a one-off integration.',
      '/packages/ai-system-implementation',
    ),
    aiAutomationSetup: pageMeta(
      `AI Automation Setup—Workflow Mapping & Tool Integration | ${BRAND}`,
      'Map painful manual workflows, design AI-assisted processes, and integrate tools so teams ship faster with less operational drag.',
      '/packages/ai-automation-setup',
    ),
    productStrategySprint: pageMeta(
      `Product Strategy Sprint—Discovery, Architecture & Roadmap | ${BRAND}`,
      'A concentrated sprint for clarity before building: discovery, architecture options, roadmap, KPIs, and risk—so the next quarter of engineering has a single source of truth.',
      '/packages/product-strategy-sprint',
    ),
    uiUxDesignSystem: pageMeta(
      `UI/UX Design System Package | ${BRAND}`,
      'Research through UI, component systems, documentation, and dev-ready handoff—so product and engineering stay aligned as the surface area grows.',
      '/packages/ui-ux-design-system',
    ),
    seoGrowthEngine: pageMeta(
      `SEO Growth Engine Package—Audit to Compounding Organic Demand | ${BRAND}`,
      'Audit → strategy → technical and on-page execution → funnels tied to conversion—packaged for teams that want organic to compound, not fluctuate.',
      '/packages/seo-growth-engine',
    ),
    vibeCodingAudit: pageMeta(
      `Vibe Coding Audit, Fix & Deploy | ${BRAND}`,
      'Audit fast-shipped code, refactor hotspots, performance and CI/CD hardening, and production deployment—when “it works locally” is not enough.',
      '/packages/vibe-coding-audit-fix-deploy',
    ),
  },

  work: {
    premiumSaucesAeo: pageMeta(
      `SEO & AEO Case Study: Premium Sauces Brand | ${BRAND}`,
      'How bdcode_ improved discoverability for a premium sauces and condiments brand—SEO, answer-engine visibility, and funnels aimed at high-intent buyers and retail partners.',
      '/work/premium-sauces-aeo',
    ),
    privateLabelClothing: pageMeta(
      `SEO Case Study: Private Label Clothing Manufacturer | ${BRAND}`,
      'Organic search strategy for a private-label apparel manufacturer targeting bulk buyers—technical SEO, topical authority, and lead paths for wholesale discovery.',
      '/work/private-label-clothing-seo',
    ),
  },
} as const;

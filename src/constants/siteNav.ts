/** Primary routes for Services and Packages — keep in sync with `App.tsx`. */

export const SITE_SERVICE_LINKS = [
  { label: 'Product Architecture', to: '/services/product-architecture' },
  { label: 'Full-Stack Engineering', to: '/services/full-stack-engineering' },
  { label: 'DevOps & Cloud', to: '/services/devops-cloud' },
  { label: 'Mobile Development', to: '/services/mobile-development' },
  { label: 'AI Engineering', to: '/services/ai-engineering' },
  { label: 'UI/UX Design', to: '/services/ui-ux-design' },
  { label: 'SEO & Growth', to: '/services/seo-growth' },
] as const;

export const SITE_PACKAGE_LINKS = [
  { label: 'MVP Launch', to: '/packages/mvp-launch' },
  { label: 'Full Product Build', to: '/packages/full-product-build' },
  { label: 'AI System Implementation', to: '/packages/ai-system-implementation' },
  { label: 'AI Automation Setup', to: '/packages/ai-automation-setup' },
  { label: 'Product Strategy Sprint', to: '/packages/product-strategy-sprint' },
  { label: 'UI/UX Design System', to: '/packages/ui-ux-design-system' },
  { label: 'SEO Growth Engine', to: '/packages/seo-growth-engine' },
  { label: 'Vibe Coding Audit, Fix & Deploy', to: '/packages/vibe-coding-audit-fix-deploy' },
] as const;

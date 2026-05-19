/** E.164 without + (wa.me format) */
export const WHATSAPP_PHONE_E164 = '919176760013';

export type WhatsAppHrefParams = {
  pathname: string;
  /** Short, natural sentence: what they want from you (no “Page:” / “Interest:” labels). */
  intent: string;
  /** Optional extra line (e.g. email). keep conversational. */
  note?: string;
};

function normalizePath(pathname: string): string {
  const raw = (pathname || '/').trim() || '/';
  if (raw.length > 1 && raw.endsWith('/')) return raw.slice(0, -1);
  return raw;
}

/** Readable place on the site for the opening line (no raw paths unless unknown). */
export function humanWhereOnSite(pathname: string): string {
  const p = normalizePath(pathname);
  const map: Record<string, string> = {
    '/': 'your homepage',
    '/blog': 'your Insights / blog',
    '/packages/mvp-launch': 'your MVP Launch package page',
    '/services/product-architecture': 'your Product architecture page',
    '/services/full-stack-engineering': 'your Full-stack engineering page',
    '/services/devops-cloud': 'your DevOps & Cloud page',
    '/services/mobile-development': 'your Mobile development page',
    '/services/ai-engineering': 'your AI engineering page',
    '/services/ui-ux-design': 'your UI/UX design page',
    '/services/seo-growth': 'your SEO & growth page',
  };
  if (map[p]) return map[p];
  if (p.startsWith('/blog/')) return 'one of your blog articles';
  return 'your website';
}

export function whatsappHref({ pathname, intent, note }: WhatsAppHrefParams): string {
  const where = humanWhereOnSite(pathname);
  const lines = [
    `Hi! I came across bdcode_ and was looking at ${where}.`,
    '',
    intent.trim(),
  ];
  if (note?.trim()) {
    lines.push('', note.trim());
  }
  lines.push('', 'Thanks!');
  const text = lines.join('\n');
  return `https://wa.me/${WHATSAPP_PHONE_E164}?text=${encodeURIComponent(text)}`;
}

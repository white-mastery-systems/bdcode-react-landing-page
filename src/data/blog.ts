import type { BlogArticle, BlogPostMeta } from './blogTypes';
export type { ArticleBlock, BlogArticle, BlogPostMeta } from './blogTypes';
import { marketingPhotos } from '../constants/marketingPhotos';
import { NEW_ARTICLES } from './blogArticlesNew';

const agentsArticle: BlogArticle = {
  meta: {
    slug: 'ai-agents-vs-automation-which-do-you-need',
    title: "AI Agents vs. Automation: What's the Difference and Which One Do You Need?",
    excerpt:
      "Most people use 'AI agents' and 'automation' interchangeably. They're not the same thing. here's how to choose the right approach for your workflow.",
    category: 'AI',
    dateLabel: 'April 11, 2026',
    readTime: '8 min read',
    image: marketingPhotos.blogAiAgents,
    featured: true,
  },
  seoDescription:
    "Not every workflow needs an AI agent. Not every problem can be solved with rules-based automation. Here's how bdcode_ decides which approach fits, with a real example of getting it right.",
  tldr: [
    'Automation follows fixed rules. Agents make decisions and handle ambiguity.',
    'If the logic tree gets too complex, you need an agent. not more rules.',
    'A client asked for automated support replies. The queries were context-dependent. We built an agent.',
    'Automation would have collapsed under real-world query complexity.',
    'The right choice depends on whether your workflow has predictable or ambiguous decision points.',
  ],
  toc: [
    { id: 'core-distinction', label: 'The core distinction' },
    { id: 'when-automation', label: 'When automation is the right tool' },
    { id: 'when-agent', label: 'When you need an agent' },
    { id: 'real-example', label: 'A real example: support' },
    { id: 'how-to-decide', label: 'How to decide which you need' },
  ],
  body: [
    {
      type: 'lead',
      text: "Most people use 'AI agents' and 'automation' interchangeably. They're not the same thing, and building the wrong one for a given workflow is an expensive mistake.",
    },
    {
      type: 'p',
      text: "Here's how to tell them apart, and how to know which one your problem actually needs.",
    },
    { type: 'h2', id: 'core-distinction', text: 'The core distinction' },
    {
      type: 'p',
      text: 'The difference comes down to one word: judgment.',
    },
    {
      type: 'p',
      text: "Automation operates on fixed rules and predictable decision paths. If X happens, do Y. It's deterministic, reliable, and fast. when the world cooperates.",
    },
    {
      type: 'p',
      text: 'An AI agent makes decisions. It takes in context, evaluates a situation that may be ambiguous or novel, chooses a course of action, and adapts when circumstances change. It handles the cases that fall outside the rule tree.',
    },
    {
      type: 'p',
      text: "Simple rule of thumb: if your logic tree keeps growing because reality keeps producing cases you didn't anticipate. you need an agent, not more rules.",
    },
    { type: 'h2', id: 'when-automation', text: 'When automation is the right tool' },
    {
      type: 'p',
      text: 'Automation is ideal when:',
    },
    {
      type: 'ul',
      items: [
        'The inputs are clean and consistent',
        "The decision logic is stable and doesn't require interpretation",
        'Every relevant case can be anticipated in advance',
        'The cost of a wrong action is low enough to accept occasional errors',
      ],
    },
    {
      type: 'p',
      text: 'Good examples: moving files when a form is submitted, sending a confirmation email after a payment, triggering a Slack alert when a metric crosses a threshold. These are predictable flows with predictable inputs. Automation handles them perfectly.',
    },
    { type: 'h2', id: 'when-agent', text: 'When you need an agent' },
    {
      type: 'p',
      text: 'An agent is appropriate when:',
    },
    {
      type: 'ul',
      items: [
        'Inputs vary significantly and require interpretation',
        'Context from outside the immediate input affects the right decision',
        'Novel situations arise that no pre-written rule covers',
        'The workflow requires judgment, not just pattern-matching',
      ],
    },
    {
      type: 'p',
      text: "Customer communications are the clearest example. The range of things people write in a support ticket is effectively infinite. A rules-based system can handle the top 20% of cases. An agent can handle 80%+. because it can read context, identify intent, retrieve relevant information, and respond appropriately to situations it's never seen before.",
    },
    { type: 'h2', id: 'real-example', text: 'A real example: support automation vs agent' },
    {
      type: 'p',
      text: 'A client came to us with a clear request: automate our support replies.',
    },
    {
      type: 'p',
      text: 'On the surface, this sounded like a standard automation project. But when we mapped the actual support queue, a different picture emerged:',
    },
    {
      type: 'ul',
      items: [
        'Queries were messily worded and required intent interpretation',
        'Many queries referenced previous conversations or account-specific context',
        'The right response often depended on factors not stated in the ticket',
      ],
    },
    {
      type: 'p',
      text: 'A rules-based automation would have handled maybe 15-20% of tickets cleanly. The rest would have either failed silently or produced wrong responses. worse than no automation at all.',
    },
    {
      type: 'p',
      text: 'We built an AI support agent with context retrieval and decision logic. It reads each ticket, retrieves relevant account and product information, determines intent, and generates an appropriate response. escalating to a human when it identifies a case outside its confidence range.',
    },
    {
      type: 'p',
      text: "That's a fundamentally different system from automation. And it was the right one for this workflow.",
    },
    { type: 'h2', id: 'how-to-decide', text: 'How to decide which you need' },
    {
      type: 'p',
      text: 'Ask these questions about your workflow:',
    },
    {
      type: 'ul',
      items: [
        'Can every meaningful input state be defined in advance? → Automation',
        'Does the right action depend on context that varies unpredictably? → Agent',
        'Will edge cases be rare and low-stakes? → Automation',
        'Are edge cases frequent and consequential? → Agent',
        'Is the logic stable over time? → Automation',
        'Does the logic need to evolve as the world changes? → Agent',
      ],
    },
    {
      type: 'p',
      text: 'Many workflows need both: automation for the predictable high-volume cases, and an agent layer for the ones that require judgment. The architecture is as important as the technology choice.',
    },
    {
      type: 'p',
      text: "If you're trying to figure out which approach fits your workflow, bring it to us. We'll map the decision points and tell you exactly what you need.",
    },
  ],
};

export const ARTICLES: Record<string, BlogArticle> = {
  [agentsArticle.meta.slug]: agentsArticle,
  ...NEW_ARTICLES,
};

/** Featured first, then newest by date label (April 2026 ordering). */
export const BLOG_INDEX: BlogPostMeta[] = [
  agentsArticle.meta,
  NEW_ARTICLES['content-clustering-strategy-compounding-organic-traffic'].meta,
  NEW_ARTICLES['ai-system-implementation-package-explained'].meta,
  NEW_ARTICLES['build-analytics-stack-that-tells-you-whats-working'].meta,
  NEW_ARTICLES['why-backend-breaks-at-scale-engineer-for-growth'].meta,
  NEW_ARTICLES['cloud-cost-audit-how-companies-overpay'].meta,
];

export function getArticle(slug: string): BlogArticle | undefined {
  return ARTICLES[slug];
}

export function getCategoriesFromIndex(): string[] {
  const cats = new Set(BLOG_INDEX.map((p) => p.category));
  return ['All', ...Array.from(cats).sort()];
}

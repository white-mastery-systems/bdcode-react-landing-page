export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  dateLabel: string;
  readTime: string;
  image: string;
  featured?: boolean;
};

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; id: string; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'lead'; text: string };

export type BlogArticle = {
  meta: BlogPostMeta;
  seoDescription: string;
  tldr: string[];
  toc: { id: string; label: string }[];
  body: ArticleBlock[];
};

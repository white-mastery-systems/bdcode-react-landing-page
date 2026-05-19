import type { Metadata } from 'next';
import { BlogPost } from '@/views/BlogPost';
import { ARTICLES, getArticle } from '@/data/blog';
import { siteOrigin } from '@/seo/metadata';

const BRAND = 'bdcode_';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    const url = `${siteOrigin}/blog/${slug}`;
    return {
      title: { absolute: `Article not found | ${BRAND}` },
      description: 'This article does not exist or has been moved. Browse insights on AI, product, engineering, and SEO from bdcode_.',
      alternates: { canonical: url },
      robots: { index: false, follow: true },
    };
  }

  const { meta, seoDescription } = article;
  const description = (seoDescription || meta.excerpt).slice(0, 320);
  const title = `${meta.title} | Insights | ${BRAND}`;
  const url = `${siteOrigin}/blog/${slug}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: meta.title,
      description,
      url,
      siteName: BRAND,
      locale: 'en_IN',
      type: 'article',
      images: meta.image ? [{ url: meta.image, alt: meta.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <BlogPost slug={slug} />;
}

import { Blog } from '@/views/Blog';
import { pages } from '@/seo/metadata';

export const metadata = pages.blog;

export default function Page() {
  return <Blog />;
}

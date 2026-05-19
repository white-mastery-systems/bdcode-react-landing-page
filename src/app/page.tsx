import { Home } from '@/views/Home';
import { pages } from '@/seo/metadata';

export const metadata = pages.home;

export default function Page() {
  return <Home />;
}

import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import { rootLayoutMetadata } from '@/seo/metadata';
import './globals.css';

export const metadata: Metadata = rootLayoutMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

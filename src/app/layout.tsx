import type { Metadata } from 'next';
import Script from 'next/script';
import { SiteShell } from '@/components/SiteShell';
import { rootLayoutMetadata } from '@/seo/metadata';
import './globals.css';

const GA_MEASUREMENT_ID = 'G-NWMNW8WDJ4';

export const metadata: Metadata = rootLayoutMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

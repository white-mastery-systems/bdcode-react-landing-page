'use client';

import { CustomCursor } from '@/components/CustomCursor';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ScrollToTop } from '@/components/ScrollToTop';

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
}

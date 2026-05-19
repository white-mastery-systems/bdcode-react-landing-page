'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

/** Navbar is `h-20` (5rem); sections use `scroll-mt-20` so anchors clear the bar. */
function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export const ScrollToTop = () => {
  const pathname = usePathname();
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;

    const run = () => {
      const hash = window.location.hash;
      if (!hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        return;
      }

      const id = decodeURIComponent(hash.replace(/^#/, ''));
      if (!id) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        return;
      }

      const apply = () => {
        if (!cancelled) scrollToId(id);
      };

      apply();
      if (timerRef.current !== undefined) {
        window.clearTimeout(timerRef.current);
      }
      timerRef.current = window.setTimeout(apply, 120);
    };

    run();
    window.addEventListener('hashchange', run);
    return () => {
      cancelled = true;
      if (timerRef.current !== undefined) {
        window.clearTimeout(timerRef.current);
      }
      window.removeEventListener('hashchange', run);
    };
  }, [pathname]);

  return null;
};

'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { whatsappHref } from '../lib/whatsapp';

export function useWhatsAppHref(intent: string, note?: string): string {
  const pathname = usePathname();
  return useMemo(() => whatsappHref({ pathname, intent, note }), [pathname, intent, note]);
}

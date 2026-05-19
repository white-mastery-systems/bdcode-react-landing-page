'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { LogoMark } from './LogoMark';
import { SITE_PACKAGE_LINKS, SITE_SERVICE_LINKS } from '../constants/siteNav';

const NAV_LINK_CLASS =
  'font-display font-bold text-sm tracking-widest text-brand-ink hover:text-brand-accent transition-colors';

const DESK_DROPDOWN_TRIGGER_BASE =
  'inline-flex items-center gap-1 rounded-sm px-1 py-1 font-display text-sm font-bold tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ink focus-visible:ring-offset-2';

const ANCHOR_ITEMS = [
  { label: 'WORK', href: '/#work' },
  { label: 'INSIGHTS', href: '/#insights' },
] as const;

const MD_MIN = 768;

const deskPanelTransition = { duration: 0.22, ease: [0.16, 1, 0.3, 1] as const };

type DesktopNavPanelProps = {
  kind: 'services' | 'packages';
  onNavigate: () => void;
  menuId: string;
};

const DesktopNavPanel: React.FC<DesktopNavPanelProps> = ({ kind, onNavigate, menuId }) => {
  const items = kind === 'services' ? SITE_SERVICE_LINKS : SITE_PACKAGE_LINKS;
  const title = kind === 'services' ? 'Services' : 'Packages';
  const eyebrow =
    kind === 'services' ? 'What we build & ship' : 'Structured engagements — fixed scope';
  const overviewHref = kind === 'services' ? '/#services' : '/#packages';

  return (
    <motion.div
      id={menuId}
      role="menu"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={deskPanelTransition}
      className="absolute left-1/2 top-full z-[10120] mt-2 w-[min(44rem,calc(100vw-2rem))] max-h-[min(32rem,calc(100vh-6rem))] -translate-x-1/2 overflow-hidden rounded-sm border border-brand-border bg-white shadow-[0_24px_56px_-16px_rgba(0,0,0,0.2)]"
    >
      <div className="flex items-start gap-4 border-b border-brand-border bg-gradient-to-r from-slate-50 to-white px-5 py-4 md:px-6">
        <div
          className="mt-1 hidden h-10 w-1 shrink-0 bg-brand-accent sm:block"
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-ink">{title}</p>
          <p className="mt-1.5 max-w-md font-mono text-[10px] uppercase leading-relaxed tracking-widest text-brand-muted">
            {eyebrow}
          </p>
        </div>
      </div>

      <div className="slim-scroll max-h-[min(22rem,calc(100vh-11rem))] overflow-y-auto p-2 md:p-3">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
          {items.map(({ label, to }, i) => (
            <Link
              key={to}
              role="menuitem"
              href={to}
              onClick={onNavigate}
              className="group flex gap-3 rounded-sm border border-transparent bg-slate-50/70 px-3 py-3 transition-colors hover:border-brand-border hover:bg-white md:px-4 md:py-3.5"
            >
              <span className="mt-0.5 w-6 shrink-0 font-mono text-[10px] font-bold tabular-nums text-brand-muted group-hover:text-brand-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="min-w-0 flex-1 font-display text-sm font-semibold leading-snug tracking-tight text-brand-ink group-hover:text-brand-accent">
                {label}
              </span>
              <ArrowUpRight
                strokeWidth={1.5}
                className="size-4 shrink-0 text-brand-border transition-colors group-hover:text-brand-accent"
                aria-hidden
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-brand-border bg-slate-50/50 px-5 py-3.5 md:px-6">
        <Link
          href={overviewHref}
          onClick={onNavigate}
          className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-brand-ink transition-colors hover:text-brand-accent"
        >
          <span>Section on homepage</span>
          <ArrowUpRight className="size-3.5 shrink-0" strokeWidth={1.75} aria-hidden />
        </Link>
      </div>
    </motion.div>
  );
};

function MobileNavSection({
  title,
  eyebrow,
  items,
  overviewTo,
  overviewLabel,
  onNavigate,
}: {
  title: string;
  eyebrow: string;
  items: readonly { label: string; to: string }[];
  overviewTo: string;
  overviewLabel: string;
  onNavigate: () => void;
}) {
  return (
    <section className="mt-5 overflow-hidden rounded-sm border border-brand-border bg-white first:mt-0">
      <div className="border-b border-brand-border bg-slate-50 px-4 py-3.5">
        <div className="flex items-center gap-3">
          <span className="h-8 w-1 shrink-0 bg-brand-accent" aria-hidden />
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-widest text-brand-ink">{title}</h2>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-brand-muted">{eyebrow}</p>
          </div>
        </div>
      </div>
      <ul className="divide-y divide-brand-border">
        {items.map(({ label, to }, i) => (
          <li key={to}>
            <Link
              href={to}
              onClick={onNavigate}
              className="flex items-start gap-3 px-4 py-3.5 transition-colors active:bg-slate-50"
            >
              <span className="w-7 shrink-0 pt-0.5 font-mono text-[10px] font-bold text-brand-muted">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="min-w-0 flex-1 font-display text-[15px] font-semibold leading-snug tracking-tight text-brand-ink">
                {label}
              </span>
              <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-brand-border" strokeWidth={1.5} aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
      <div className="border-t border-brand-border bg-slate-50/60 px-4 py-3">
        <Link
          href={overviewTo}
          onClick={onNavigate}
          className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-brand-muted transition-colors hover:text-brand-accent"
        >
          {overviewLabel}
          <ArrowUpRight className="size-3.5" strokeWidth={1.75} aria-hidden />
        </Link>
      </div>
    </section>
  );
}

export const Navbar = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [portalReady, setPortalReady] = useState(false);
  const [openDesk, setOpenDesk] = useState<'services' | 'packages' | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    const syncHash = () => setHash(typeof window !== 'undefined' ? window.location.hash : '');
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, [pathname]);

  useLayoutEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      return;
    }

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      /* Only pad `body` — padding the fixed `<nav>` inset the flex row and shifted the menu button. */
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDesk(null);
  }, [pathname, hash]);

  useEffect(() => {
    if (!menuOpen && openDesk === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setOpenDesk(null);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen, openDesk]);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${MD_MIN}px)`);
    const onChange = () => setMenuOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!openDesk) return;
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDesk(null);
      }
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [openDesk]);

  const toggleMenu = () => setMenuOpen((o) => !o);
  const closeDesk = () => setOpenDesk(null);
  const closeMobile = () => setMenuOpen(false);

  const mobileOverlay =
    portalReady && menuOpen ? (
      <>
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 top-20 z-[10045] cursor-default bg-black/30 backdrop-blur-[2px] md:hidden"
          onClick={closeMobile}
        />
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="slim-scroll fixed inset-x-0 bottom-0 top-20 z-[10050] overflow-y-auto border-t border-brand-border bg-slate-100/95 shadow-[0_8px_40px_rgba(0,0,0,0.12)] md:hidden"
        >
          <div className="mx-auto max-w-7xl space-y-0 px-4 py-4 pb-12">
            <MobileNavSection
              title="Services"
              eyebrow="Capabilities"
              items={SITE_SERVICE_LINKS}
              overviewTo="/#services"
              overviewLabel="All services on homepage"
              onNavigate={closeMobile}
            />
            <MobileNavSection
              title="Packages"
              eyebrow="Engagements"
              items={SITE_PACKAGE_LINKS}
              overviewTo="/#packages"
              overviewLabel="All packages on homepage"
              onNavigate={closeMobile}
            />

            <section className="mt-5 overflow-hidden rounded-sm border border-brand-border bg-white">
              <div className="border-b border-brand-border bg-slate-50 px-4 py-3.5">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-1 shrink-0 bg-brand-accent" aria-hidden />
                  <h2 className="font-display text-sm font-bold uppercase tracking-widest text-brand-ink">More</h2>
                </div>
              </div>
              <ul className="divide-y divide-brand-border">
                {ANCHOR_ITEMS.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      onClick={closeMobile}
                      className="flex items-center justify-between px-4 py-4 font-display text-lg font-bold tracking-widest text-brand-ink transition-colors active:bg-slate-50"
                    >
                      {label}
                      <ArrowUpRight className="size-4 text-brand-border" strokeWidth={1.5} aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </>
    ) : null;

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-[10100] border-b border-brand-border bg-white md:bg-white/80 md:backdrop-blur-sm"
      >
        <div className="relative z-10 flex h-20 items-stretch">
          <Link
            href="/"
            className="flex items-center px-4 md:px-8 border-r border-brand-border cursor-pointer hover:bg-slate-50 transition-colors"
          >
            <LogoMark className="h-8 md:h-9" />
          </Link>
          <div className="hidden flex-1 items-center justify-center gap-5 md:flex lg:gap-9">
            <div className="relative">
              <button
                type="button"
                className={`${DESK_DROPDOWN_TRIGGER_BASE} ${
                  openDesk === 'services' ? 'text-brand-accent' : 'text-brand-ink hover:text-brand-accent'
                }`}
                aria-expanded={openDesk === 'services'}
                aria-haspopup="true"
                aria-controls="nav-services-menu"
                onClick={() => setOpenDesk((d) => (d === 'services' ? null : 'services'))}
              >
                SERVICES
                <ChevronDown
                  strokeWidth={1.75}
                  className={`size-3.5 shrink-0 transition-transform duration-200 ${
                    openDesk === 'services' ? 'rotate-180' : ''
                  }`}
                  aria-hidden
                />
              </button>
              <AnimatePresence mode="popLayout">
                {openDesk === 'services' ? (
                  <DesktopNavPanel
                    key="nav-desk-services"
                    kind="services"
                    menuId="nav-services-menu"
                    onNavigate={closeDesk}
                  />
                ) : null}
              </AnimatePresence>
            </div>
            <div className="relative">
              <button
                type="button"
                className={`${DESK_DROPDOWN_TRIGGER_BASE} ${
                  openDesk === 'packages' ? 'text-brand-accent' : 'text-brand-ink hover:text-brand-accent'
                }`}
                aria-expanded={openDesk === 'packages'}
                aria-haspopup="true"
                aria-controls="nav-packages-menu"
                onClick={() => setOpenDesk((d) => (d === 'packages' ? null : 'packages'))}
              >
                PACKAGES
                <ChevronDown
                  strokeWidth={1.75}
                  className={`size-3.5 shrink-0 transition-transform duration-200 ${
                    openDesk === 'packages' ? 'rotate-180' : ''
                  }`}
                  aria-hidden
                />
              </button>
              <AnimatePresence mode="popLayout">
                {openDesk === 'packages' ? (
                  <DesktopNavPanel
                    key="nav-desk-packages"
                    kind="packages"
                    menuId="nav-packages-menu"
                    onNavigate={closeDesk}
                  />
                ) : null}
              </AnimatePresence>
            </div>
            {ANCHOR_ITEMS.map(({ label, href }) => (
              <Link key={label} href={href} className={NAV_LINK_CLASS}>
                {label}
              </Link>
            ))}
          </div>
          <div className="flex flex-1 items-center justify-end md:hidden pr-4">
            <button
              type="button"
              className="relative z-20 flex h-11 w-11 shrink-0 items-center justify-center border border-brand-border bg-white text-brand-ink touch-manipulation transition-colors hover:bg-slate-50"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={toggleMenu}
            >
              {menuOpen ? <X size={22} strokeWidth={1.75} aria-hidden /> : <Menu size={22} strokeWidth={1.75} aria-hidden />}
            </button>
          </div>
        </div>
      </nav>

      {portalReady && mobileOverlay ? createPortal(mobileOverlay, document.body) : null}
    </>
  );
};

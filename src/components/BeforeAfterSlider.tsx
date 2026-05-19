'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MIN_PCT = 0;
const MAX_PCT = 100;

function clampPct(n: number) {
  return Math.min(MAX_PCT, Math.max(MIN_PCT, n));
}

type BeforeAfterSliderProps = {
  beforeLabel?: string;
  afterLabel?: string;
  beforeItems: string[];
  afterItems: string[];
  className?: string;
};

function ListBlock({
  label,
  labelMuted,
  items,
  bulletClass,
  itemWrapClass,
}: {
  label: string;
  labelMuted?: boolean;
  items: string[];
  bulletClass: string;
  itemWrapClass: string;
}) {
  return (
    <>
      <span
        className={`mb-8 inline-flex items-center rounded-full border px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] ${
          labelMuted
            ? 'border-brand-border bg-white/70 text-brand-muted'
            : 'border-brand-ink/15 bg-white/90 text-brand-ink shadow-sm'
        }`}
      >
        {label}
      </span>
      <ul className="space-y-3 md:space-y-4">
        {items.map((line) => (
          <li
            key={line}
            className={`flex min-w-0 gap-3 rounded-xl border px-4 py-3 md:px-5 md:py-3.5 ${itemWrapClass}`}
          >
            <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${bulletClass}`} aria-hidden />
            <span className="min-w-0 text-[15px] font-semibold leading-snug tracking-tight text-brand-ink/90 md:text-base md:leading-relaxed">
              {line}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export function BeforeAfterSlider({
  beforeLabel = 'Before',
  afterLabel = 'After',
  beforeItems,
  afterItems,
  className = '',
}: BeforeAfterSliderProps) {
  const [pct, setPct] = useState(50);
  const [trackW, setTrackW] = useState(0);
  const dragging = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(() => {
      setTrackW(el.getBoundingClientRect().width);
    });
    ro.observe(el);
    setTrackW(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  const setFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    if (width <= 0) return;
    setPct(clampPct(((clientX - left) / width) * 100));
  }, []);

  useEffect(() => {
    const stop = () => {
      dragging.current = false;
    };
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    window.addEventListener('pointerup', stop);
    window.addEventListener('pointercancel', stop);
    window.addEventListener('pointermove', move);
    return () => {
      window.removeEventListener('pointerup', stop);
      window.removeEventListener('pointercancel', stop);
      window.removeEventListener('pointermove', move);
    };
  }, [setFromClientX]);

  const startDragFromTrack = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('[data-ba-handle]')) return;
    dragging.current = true;
    setFromClientX(e.clientX);
  };

  const afterShiftPx = trackW > 0 ? (pct / 100) * trackW : 0;
  const innerWidthPx = trackW > 0 ? trackW : undefined;

  return (
    <div className={`space-y-6 ${className}`}>
      <div
        ref={trackRef}
        role="presentation"
        onPointerDown={startDragFromTrack}
        className="relative min-h-[300px] w-full min-w-0 cursor-ew-resize overflow-hidden rounded-3xl border border-brand-border/80 bg-slate-200/90 shadow-[0_28px_90px_-28px_rgba(0,0,0,0.28),0_0_0_1px_rgba(255,255,255,0.5)_inset] ring-1 ring-black/[0.04] select-none touch-none md:min-h-[360px]"
      >
        {/* Ambient frame */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_90%_70%_at_0%_0%,rgba(246,192,4,0.14),transparent_50%),radial-gradient(ellipse_80%_60%_at_100%_100%,rgba(15,23,42,0.06),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
          }}
          aria-hidden
        />

        {/* Before */}
        <div
          className="absolute inset-0 z-0 min-h-0 overflow-hidden bg-gradient-to-br from-slate-200/95 via-slate-50 to-white"
          style={{
            clipPath: `inset(0 ${100 - pct}% 0 0)`,
          }}
        >
          <div
            className="box-border min-h-full min-w-0 p-5 sm:p-6 md:p-8"
            style={innerWidthPx ? { width: innerWidthPx } : { width: '100%' }}
          >
            <ListBlock
              label={beforeLabel}
              labelMuted
              items={beforeItems}
              bulletClass="bg-brand-muted/40 ring-2 ring-white/80"
              itemWrapClass="border-brand-border/70 bg-white/55 shadow-[0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-[2px]"
            />
          </div>
        </div>

        {/* After */}
        <div
          className="absolute inset-y-0 z-10 min-w-0 overflow-hidden bg-gradient-to-br from-brand-accent/50 via-amber-50/90 to-white shadow-[inset_1px_0_0_rgba(255,255,255,0.65)]"
          style={{
            left: `${pct}%`,
            right: 0,
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(246,192,4,0.35),transparent_60%)]"
            aria-hidden
          />
          <div
            className="relative box-border min-h-full min-w-0 p-5 sm:p-6 md:p-8 will-change-transform"
            style={
              innerWidthPx
                ? {
                    width: innerWidthPx,
                    transform: `translateX(-${afterShiftPx}px)`,
                  }
                : { width: '100%' }
            }
          >
            <ListBlock
              label={afterLabel}
              items={afterItems}
              bulletClass="bg-brand-accent shadow-[0_0_0_2px_rgba(255,255,255,0.9)]"
              itemWrapClass="border-brand-ink/10 bg-white/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Seam + glow */}
        <div
          className="pointer-events-none absolute inset-y-0 z-20 flex w-5 -translate-x-1/2 justify-center"
          style={{ left: `${pct}%` }}
          aria-hidden
        >
          <div className="absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-brand-ink/25 to-transparent" />
          <div className="relative h-full w-[5px] rounded-full bg-gradient-to-b from-white via-white to-slate-100 shadow-[0_0_24px_rgba(0,0,0,0.18),4px_0_12px_rgba(246,192,4,0.15),-4px_0_12px_rgba(0,0,0,0.08)]" />
        </div>

        <button
          type="button"
          data-ba-handle
          tabIndex={0}
          aria-label="Drag to compare before and after"
          className="absolute top-1/2 z-30 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 cursor-ew-resize touch-none items-center justify-center rounded-full border-2 border-brand-ink/90 bg-gradient-to-b from-white via-white to-slate-100 p-0 shadow-[0_14px_40px_-6px_rgba(0,0,0,0.35),0_0_0_8px_rgba(255,255,255,0.75),inset_0_1px_0_rgba(255,255,255,0.95)] outline-none transition-[box-shadow,transform] duration-200 hover:scale-[1.03] hover:shadow-[0_18px_48px_-8px_rgba(0,0,0,0.38),0_0_0_10px_rgba(255,255,255,0.85)] active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
          style={{ left: `${pct}%` }}
          onPointerDown={(e) => {
            e.stopPropagation();
            dragging.current = true;
            setFromClientX(e.clientX);
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') {
              e.preventDefault();
              setPct((p) => clampPct(p - 2));
            }
            if (e.key === 'ArrowRight') {
              e.preventDefault();
              setPct((p) => clampPct(p + 2));
            }
          }}
        >
          <span className="pointer-events-none flex items-center gap-0.5">
            <ChevronLeft className="h-4 w-4 shrink-0 text-brand-ink/45" strokeWidth={2.25} aria-hidden />
            <span className="mx-0.5 h-9 w-[3px] shrink-0 rounded-full bg-gradient-to-b from-brand-ink to-brand-ink/70" aria-hidden />
            <ChevronRight className="h-4 w-4 shrink-0 text-brand-ink/45" strokeWidth={2.25} aria-hidden />
          </span>
        </button>
      </div>

      <div className="mx-auto flex w-full max-w-lg flex-col gap-3">
        <div className="flex items-center justify-between px-1">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand-muted">
            {beforeLabel}
          </span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand-ink">
            {afterLabel}
          </span>
        </div>
        <div className="rounded-full border border-brand-border/90 bg-gradient-to-b from-white to-slate-50 p-4 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.2)]">
          <div className="relative flex h-8 items-center px-1">
            <div
              className="pointer-events-none absolute inset-x-3 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-slate-200/90 shadow-inner"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-3 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-gradient-to-r from-slate-300 via-brand-accent/50 to-brand-accent/70 opacity-90"
              style={{
                clipPath: `inset(0 ${100 - pct}% 0 0)`,
              }}
              aria-hidden
            />
            <input
              type="range"
              min={MIN_PCT}
              max={MAX_PCT}
              value={pct}
              onChange={(e) => setPct(Number(e.target.value))}
              className="ba-range ba-range--elevated relative z-10 h-8 w-full cursor-pointer appearance-none bg-transparent"
              style={{ ['--ba-pct' as string]: `${pct}%` }}
              aria-label="Before and after split position"
              aria-valuetext={`${Math.round(pct)} percent before, ${Math.round(100 - pct)} percent after`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

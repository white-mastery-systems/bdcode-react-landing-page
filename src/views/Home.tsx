'use client';

import React from 'react';
import { Hero } from '../components/Hero';
import { Logos } from '../components/Logos';
import { Agency } from '../components/Agency';
import { Packages } from '../components/Packages';
import { Marquee } from '../components/Marquee';
import { Services } from '../components/Services';
import { Partners } from '../components/Partners';
import { Work } from '../components/Work';
import { Insights } from '../components/Insights';
import { CTA } from '../components/CTA';

export const Home = () => {
  return (
    <main>
      <Hero />
      <Logos />
      <Agency />
      <Packages />
      <Marquee />
      <Services />
      <Partners />
      <Work />
      <Insights />
      <CTA />
    </main>
  );
};

import type { StaticImageData } from 'next/image';
import aiimsDelhi from '../assets/aiims_delhi_logo.png';
import bharatBiotech from '../assets/bharat_biotech_logo.png';
import ijm from '../assets/ijm_logo.png';
import inhsAsvini from '../assets/inhs_asvini_logo.png';
import kluesAi from '../assets/klues_ai_logo.png';
import kumaranSilks from '../assets/kumaran_silks_logo.png';
import ministryOfInvestment from '../assets/ministry_of_investment_logo.png';
import orbitWiresCables from '../assets/orbit_logo.png';
import polux from '../assets/polux_logo.png';
import pricol from '../assets/pricol_logo.png';
import pwc from '../assets/pwc_logo.png';
import tulsiSilks from '../assets/tulsi_silks_logo.png';

export type ClientLogoEntry = {
  name: string;
  flag: string;
  country: string;
  src: string | StaticImageData;
};

export function logoUrl(src: string | StaticImageData): string {
  return typeof src === 'string' ? src : src.src;
}

export const CLIENT_LOGOS: ClientLogoEntry[] = [
  { name: 'Bharat Biotech', flag: '🇮🇳', country: 'India', src: bharatBiotech },
  { name: 'AIIMS Delhi', flag: '🇮🇳', country: 'India', src: aiimsDelhi },
  { name: 'INHS Asvini', flag: '🇮🇳', country: 'India', src: inhsAsvini },
  { name: 'MISA', flag: '🇸🇦', country: 'Saudi Arabia', src: ministryOfInvestment },
  { name: 'IJM', flag: '🇲🇾', country: 'Malaysia', src: ijm },
  { name: 'Pricol', flag: '🇮🇳', country: 'India', src: pricol },
  { name: 'Polux', flag: '🇦🇪', country: 'United Arab Emirates', src: polux },
  { name: 'Orbit Wires & Cables', flag: '🇮🇳', country: 'India', src: orbitWiresCables },
  { name: 'PwC', flag: '🇸🇦', country: 'Saudi Arabia', src: pwc },
  { name: 'Klues AI', flag: '🇸🇦', country: 'Saudi Arabia', src: kluesAi },
  { name: 'Tulsi Silks', flag: '🇮🇳', country: 'India', src: tulsiSilks },
  { name: 'Kumaran Silks', flag: '🇮🇳', country: 'India', src: kumaranSilks },
];

export function clientLogoSrcByName(brandName: string): string | undefined {
  const raw = CLIENT_LOGOS.find((l) => l.name === brandName)?.src;
  return raw === undefined ? undefined : logoUrl(raw);
}

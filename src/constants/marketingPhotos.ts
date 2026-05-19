/**
 * Curated stock imagery for bdcode_ (digital product / engineering / growth).
 * Source: Unsplash. https://unsplash.com/license
 */
function stock(id: string, w: number, h: number): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=85`;
}

/** Unsplash+ (plus.unsplash.com) assets use a different host than regular Unsplash photos. */
function stockPlus(photoPath: string, w: number, h: number): string {
  return `https://plus.unsplash.com/${photoPath}?auto=format&fit=crop&w=${w}&h=${h}&q=85`;
}

export const marketingPhotos = {
  /** Homepage hero. team collaboration / delivery */
  heroPortrait: stock('photo-1522071820081-009f0129c71c', 1000, 1400),

  /** Services row hover. one per line of business */
  serviceArchitecture: stock('photo-1581291518857-4e27b48ff24e', 600, 400),
  serviceFullStack: stock('photo-1498050108023-c5249f4df085', 600, 400),
  serviceDevOps: stock('photo-1558494949-ef010cbdcc31', 600, 400),
  serviceMobile: stock('photo-1512941937669-90a1b58e7e9c', 600, 400),
  serviceAi: stock('photo-1677442136019-21780ecad995', 600, 400),
  serviceUiUx: stock('photo-1561070791-2526d30994b5', 600, 400),
  serviceSeo: stock('photo-1460925895917-afdab827c52f', 600, 400),

  /** Portfolio / work strip */
  workWebDelivery: stock('photo-1517694712202-14dd9538aa97', 800, 800),
  workProductUi: stock('photo-1523205771623-e0faa4d2813d', 800, 800),
  /** Premium sauces case study / #work. https://unsplash.com/photos/vEFomtwLcD4 (Getty, Unsplash+) */
  workCaseSeoCondiments: stockPlus('premium_photo-1663040601657-4a70e97fb891', 800, 800),
  workCaseSeoApparel: stock('photo-1441984904996-e0b6ba687e04', 800, 800),

  /** About. illustrative Indian corporate headshots (Unsplash “indian corporate headshot”). S3FoV56-Wbk · KDLoZmytJsc */
  testimonialPortraitA: stock('photo-1584940120505-117038d90b05', 300, 300),
  testimonialPortraitB: stock('photo-1594540637720-9b14714212f4', 300, 300),

  /** Product architecture page. blueprint / build metaphor */
  architectureHeroWide: stock('photo-1503387762-592deb58ef4e', 1200, 900),

  /** Service “work sample” grids */
  fullStackSampleA: stock('photo-1555066931-4365d14bab8c', 800, 600),
  fullStackSampleB: stock('photo-1460925895917-afdab827c52f', 800, 600),
  devOpsSampleA: stock('photo-1544197150-b99a580bb7a8', 800, 600),
  devOpsSampleB: stock('photo-1451187580459-43490279c0fa', 800, 600),
  seoSampleA: stock('photo-1551288049-bebda4e38f71', 800, 600),
  seoSampleB: stock('photo-1552664730-d307ca884978', 800, 600),
  uiUxSampleA: stock('photo-1572044162444-ad60f128bdea', 800, 600),
  uiUxSampleB: stock('photo-1542744173-8e7e53415bb0', 800, 600),
  uiUxSampleC: stock('photo-1531403009284-440f080d1e12', 800, 600),

  /** Mobile page. phones / product in hand */
  mobileMockupA: stock('photo-1558655146-d09347e92766', 600, 1200),
  mobileMockupB: stock('photo-1512941937669-90a1b58e7e9c', 600, 1200),
  mobileMockupC: stock('photo-1511707171634-5f897ff02aa9', 600, 1200),

  /** Blog cover. topic aligned */
  blogAiAgents: stock('photo-1620712943543-bcc4688e7485', 1600, 900),
  blogAiImplementation: stock('photo-1677442136019-21780ecad995', 1600, 900),
  blogAnalytics: stock('photo-1460925895917-afdab827c52f', 1600, 900),
  blogBackend: stock('photo-1555066931-4365d14bab8c', 1600, 900),
  blogCloud: stock('photo-1451187580459-43490279c0fa', 1600, 900),
  blogContentSeo: stock('photo-1454165804606-c3d57bc86b40', 1600, 900),
} as const;

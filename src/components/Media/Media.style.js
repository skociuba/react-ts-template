export const screen = {
  xSmallMin: 320,
  xSmallMax: 479,
  smallMin: 480,
  smallMax: 759,
  mediumSmallMin: 760,
  mediumSmallMax: 959,
  mediumMin: 960,
  mediumMax: 1279,
  largeMin: 1280,
  largeMax: 1599,
  xLargeMin: 1600,
  mobileMin: 0,
  mobileMax: 599,
  tabletMin: 600,
  tabletMax: 959,
  desktopMin: 960,
  desktopMax: 1279,
};

export const media = {
  device: {
    desktop: `only screen and (min-width:${screen.desktopMin}px)`,
    desktopSmall: `only screen and (min-width:${screen.desktopMin}px) and (max-width:${screen.desktopMax}px)`,
    tablet: `only screen and  (min-width:${screen.tabletMin}px) and (max-width:${screen.tabletMax}px)`,
    mobile: `only screen and (min-width:${screen.mobileMin}px) and (max-width:${screen.mobileMax}px)`,
    xs: `only screen and (min-width:0 px)`,
    sm: `only screen and (min-width:${screen.smallMin}px)`,
    ms: `only screen and (min-width:${screen.mediumSmallMin}px)`,
    md: `only screen and (min-width:${screen.mediumMin}px)`,
    lg: `only screen and (min-width:${screen.largeMin}px)`,
    xl: `only screen and (min-width:${screen.xLargeMin}px)`,
    orientation: {
      portrait: `only screen and (orientation:portrait)`,
      landscape: `only screen and (orientation:landscape)`,
    },
  },
};

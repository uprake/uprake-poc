import { Theme, ThemeConfiguration } from "twind/style";

export const fontTokenConfig: Partial<ThemeConfiguration> = {
  fontFamily: {
    primary: (theme: any) => theme('fontFamily.sans'),
    default: (theme: any) => theme('fontFamily.sans'),
    // heading: theme("fontFamily.primary"),
  },
  fontSize: {
    // custom: ['32px', {letterSpacing: '-0.02em',lineHeight: '40px'}],
    body: (theme: any) => theme('fontSize.base'),
    h6: (theme: any) => theme('fontSize.sm'),
    h5: (theme: any) => theme('fontSize.base'),
    h4: (theme: any) => theme('fontSize.lg'),
    h3: (theme: any) => theme('fontSize.xl'),
    h2: (theme: any) => theme('fontSize.2xl'),
    h1: (theme: any) => theme('fontSize.3xl'),
    subTitle: ['0.8em', { letterSpacing: '-0.01em', lineHeight: '0.9em' }],
  },
};

export const fontVariantConfig = {
  h1: {
    font: 'primary',
    size: 'h1',
  },
  h2: {
    font: 'primary',
    size: 'h2',
  },
  h3: {
    font: 'primary',
    size: 'h3',
  },
  h4: {
    font: 'primary',
    size: 'h4',
  },
  h5: {
    font: 'primary',
    size: 'h5',
  },
  h6: {
    font: 'primary',
    size: 'h6',
  },
  subTitle: {
    size: 'subTitle',
  },
  body: {
    font: 'default',
  },
  small: {
    font: 'default',
    size: 'small',
  },
  link: {
    font: 'default',
  },
};

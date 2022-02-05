import { theme } from 'twind';

export const fontTokenConfig = {
  fontFamily: {
    primary: theme('fontFamily.sans'),
    default: theme('fontFamily.sans'),
    // heading: theme("fontFamily.primary"),
  },
  fontSize: {
    // custom: ['32px', {letterSpacing: '-0.02em',lineHeight: '40px'}],
    body: theme('fontSize.base'),
    h6: theme('fontSize.sm'),
    h5: theme('fontSize.base'),
    h4: theme('fontSize.lg'),
    h3: theme('fontSize.xl'),
    h2: theme('fontSize.2xl'),
    h1: theme('fontSize.3xl'),
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

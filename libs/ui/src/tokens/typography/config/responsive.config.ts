import { ResponsiveConfig } from 'libs/ui/src/interfaces/responsive.type';

export const fontSizeMapping: Record<string, ResponsiveConfig> = {
  xs: {
    default: 'xs',
  },
  sm: {
    default: 'sm',
  },
  base: {
    default: 'base',
  },
  lg: {
    default: 'lg',
  },
  xl: {
    default: 'xl',
  },
  '2xl': {
    default: '2xl',
  },
  '3xl': {
    default: '3xl',
  },
  '4xl': {
    default: '3xl',
    md: '4xl',
  },
  '5xl': {
    default: '4xl',
    md: '5xl',
  },
  '6xl': {
    default: '5xl',
    md: '6xl',
  },
  '7xl': {
    default: '6xl',
    md: '7xl',
  },
  '8xl': {
    default: '7xl',
    lg: '8xl',
  },
  '9xl': {
    default: '8xl',
    lg: '9xl',
  },
  h1: {
    default: '3xl',
    md: 'h1',
  },
  h2: {
    default: '2xl',
    md: 'h2',
  },
  h3: {
    default: 'xl',
    md: 'h3',
  },
};

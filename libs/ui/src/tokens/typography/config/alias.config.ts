import { Theme } from 'twind';

const aliasConfig: Partial<Theme> = {
  fontFamily: () => ({}),
  fontSize: (theme) => ({
    h1: theme('fontSize.4xl'),
    h2: theme('fontSize.3xl'),
    h3: theme('fontSize.2xl'),
  }),
  fontWeight: () => ({}),
};

export default aliasConfig;

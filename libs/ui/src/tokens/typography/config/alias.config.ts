import { Theme } from 'twind';

const aliasConfig: Partial<Theme> = {
  fontSize: (theme) => ({
    h1: theme('fontSize.4xl'),
  }),
};

export default aliasConfig;

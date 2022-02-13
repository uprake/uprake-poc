import { themeGenerator } from '../theme';

const theme = themeGenerator();

export const config = {
  // Prevent preflight rules to be added into sheet
  preflight: false,
  // Do not prefix properties and values
  prefix: false,
  theme,
};

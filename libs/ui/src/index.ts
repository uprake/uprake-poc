import { themeGenerator } from './theme';

const theme = themeGenerator();

const twindConfig = {
  // Prevent preflight rules to be added into sheet
  preflight: false,
  // Do not prefix properties and values
  prefix: false,
  theme,
};

export type TwindConfig = typeof twindConfig;

export default twindConfig;

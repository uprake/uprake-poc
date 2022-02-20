import {
  FontSpacingTokenConfig,
  FontStyleTokenConfig,
  FontTokenConfig,
} from '../typography.type';

export const defaultFontTokenConfig: FontTokenConfig = {
  family: 'sans',
  size: 'base',
};

export const defaultFontStyleTokenConfig: FontStyleTokenConfig = {
  weight: 'normal',
};

export const defaultFontSpacingTokenConfig: FontSpacingTokenConfig = {
  letterSpacing: 'normal',
  lineHeight: 'normal',
};

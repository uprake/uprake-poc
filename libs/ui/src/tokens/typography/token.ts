import { decorateToken, tokenGen } from '../../utils/token.utils';
import {
  defaultFontSpacingTokenConfig as fontSpacingConfig,
  defaultFontTokenConfig as fontTokenConfig,
} from './config/default.config';
import {
  FontSpacingTokenConfig,
  FontStyleTokenConfig,
  FontTokenConfig,
} from './typography.type';

export function fontToken(config: FontTokenConfig, decorator?: string) {
  let tokens = [
    tokenGen('fontFamily', 'font', config.family, fontTokenConfig.family),
    tokenGen('fontSize', 'text', config.size, fontTokenConfig.size),
    tokenGen('fontWeight', 'font', config.weight, fontTokenConfig.weight),
    config.antialiased ? 'antialiased' : 'subpixel-antialiased',
    config.italics ? 'italic' : 'not-italic',
  ];

  return decorateToken(tokens, decorator);
}

export function fontStyleToken(
  config: FontStyleTokenConfig,
  decorator?: string
) {
  let tokens = [
    tokenGen('fontWeight', 'font', config.weight, fontTokenConfig.weight),
    config.decoration ?? '',
    config.transform ?? '',
    config.italics ?? '',
  ];

  return decorateToken(tokens, decorator);
}

export function fontSpacingToken(
  config: FontSpacingTokenConfig,
  decorator?: string
) {
  return decorateToken(
    [
      tokenGen(
        'letterSpacing',
        'tracking',
        config.letterSpacing,
        fontSpacingConfig.letterSpacing
      ),
      tokenGen(
        'lineHeight',
        'leading',
        config.lineHeight,
        fontSpacingConfig.lineHeight
      ),
    ],
    decorator
  );
}

import { decorateToken, tokenClean, tokenGen } from '../../utils/token.utils';
import {
  defaultFontSpacingTokenConfig as fontSpacingConfig,
  defaultFontStyleTokenConfig as fontStyleConfig,
  defaultFontTokenConfig as fontTokenConfig,
} from './config/default.config';
import { fontSizeMapping } from './config/responsive.config';
import {
  FontSpacingTokenConfig,
  FontStyleTokenConfig,
  FontTokenConfig,
} from './typography.type';

export function fontSizeToken(size?: string, config: any = fontSizeMapping) {
  if (size) {
    const mappings: any = config[size];
    console.log(size);
    console.log(mappings);
    const tokens = [];
    if (config.hasOwnProperty(size)) {
      Object.keys(mappings).forEach((decorator) => {
        if (decorator == 'default') {
          tokens.push(
            tokenGen('fontSize', 'text', mappings.default, fontTokenConfig.size)
          );
        } else {
          tokens.push(
            decorateToken(
              [
                tokenGen(
                  'fontSize',
                  'text',
                  mappings[decorator],
                  fontTokenConfig.size
                ),
              ],
              decorator
            )
          );
        }
      });
    } else {
      tokens.push(tokenGen('fontSize', 'text', size, fontTokenConfig.size));
    }

    return tokenClean(tokens);
  }
  return '';
}

export function fontToken(config: FontTokenConfig, decorator?: string) {
  let tokens = [
    tokenGen('fontFamily', 'font', config.family, fontTokenConfig.family),
    fontSizeToken(config.size),
    config.antialiased ? 'antialiased' : 'subpixel-antialiased',
  ];

  return decorateToken(tokens, decorator);
}

export function fontStyleToken(
  config: FontStyleTokenConfig,
  decorator?: string
) {
  let tokens = [
    tokenGen('fontWeight', 'font', config.weight, fontStyleConfig.weight),
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
        fontSpacingConfig.letterSpacing,
        true
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

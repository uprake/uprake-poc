import { FontTokenConfig } from './typography.type';
import { tokenClean, tokenGen } from '../../utils/token.utils';
import { defaultFontTokenConfig as fontTokenConfig } from './config/default.config';

export function fontToken(config: FontTokenConfig, decorator?: string) {
  let tokens = [
    tokenGen('fontFamily', 'font', config.family, fontTokenConfig.family),
    tokenGen('fontSize', 'text', config.size, fontTokenConfig.size),
    tokenGen('fontWeight', 'font', config.weight, fontTokenConfig.weight),
    config.antialiased ? 'antialiased' : 'subpixel-antialiased',
    config.italics ? 'italic' : 'not-italic',
  ];

  if (decorator) {
    tokens = tokens.map((token) => `${decorator}:${token}`);
  }

  return tokenClean(tokens);
}

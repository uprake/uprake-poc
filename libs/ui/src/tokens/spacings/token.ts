import { decorateToken, tokenGen } from '../../utils/token.utils';
import { ISpacingTokenConfig } from './spacing.type';

export function spacingToken(config: ISpacingTokenConfig, decorator?: string) {
  return decorateToken(
    [
      tokenGen('spacing', 'm', config.m, 0, true),
      tokenGen('spacing', 'mx', config.mx, 0, true),
      tokenGen('spacing', 'my', config.my, 0, true),
      tokenGen('spacing', 'mt', config.mt, 0, true),
      tokenGen('spacing', 'mr', config.mr, 0, true),
      tokenGen('spacing', 'mb', config.mb, 0, true),
      tokenGen('spacing', 'ml', config.ml, 0, true),
      tokenGen('spacing', 'p', config.p, 0, false),
      tokenGen('spacing', 'px', config.px, 0, false),
      tokenGen('spacing', 'py', config.py, 0, false),
      tokenGen('spacing', 'pt', config.pt, 0, false),
      tokenGen('spacing', 'pr', config.pr, 0, false),
      tokenGen('spacing', 'pb', config.pb, 0, false),
      tokenGen('spacing', 'pl', config.pl, 0, false),
    ],
    decorator
  );
}

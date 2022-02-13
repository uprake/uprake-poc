import { decorateToken } from '../../utils/token.utils';

export function spacingToken(config: any, decorator?: string) {
  return decorateToken([], decorator);
}

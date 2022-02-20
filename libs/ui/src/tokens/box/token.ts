import { decorateToken } from '../../utils/token.utils';
import { spacingToken } from '../spacings';
import { ISpacingTokenConfig } from '../spacings/spacing.type';

export function boxToken(config: any, decorator: string) {
  return decorateToken(
    [spacingToken(config as ISpacingTokenConfig)],
    decorator
  );
}

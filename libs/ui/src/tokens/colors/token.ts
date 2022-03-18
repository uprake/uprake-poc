import { decorateToken, tokenGen } from '../../utils/token.utils';
import { IColorTokenConfig } from './color.type';
import { defaultColorTokenConfig as defaultConfig } from './config/default.config';

export function colorToken(config: IColorTokenConfig, decorator?: string) {
  return decorateToken(
    [
      tokenGen(
        'colors',
        'accent',
        config.accentColor,
        defaultConfig.accentColor
      ),
      tokenGen('colors', 'bg', config.bgColor, defaultConfig.bgColor),
      tokenGen(
        'colors',
        'border',
        config.borderColor,
        defaultConfig.borderColor
      ),
      tokenGen(
        'colors',
        'shadow',
        config.boxShadowColor,
        defaultConfig.boxShadowColor
      ),
      tokenGen('colors', 'caret', config.caretColor, defaultConfig.caretColor),
      tokenGen(
        'colors',
        'divide',
        config.divideColor,
        defaultConfig.divideColor
      ),
      tokenGen(
        'colors',
        'outline',
        config.outlineColor,
        defaultConfig.outlineColor
      ),
      tokenGen('colors', 'ring', config.ringColor, defaultConfig.ringColor),
      tokenGen(
        'colors',
        'ring-offset',
        config.ringOffsetColor,
        defaultConfig.ringOffsetColor
      ),
      tokenGen('colors', 'text', config.textColor, defaultConfig.textColor),
      tokenGen(
        'colors',
        'decoration',
        config.textDecorationColor,
        defaultConfig.textDecorationColor
      ),
    ],
    decorator
  );
}

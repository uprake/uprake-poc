import { Theme } from 'twind';
import { themeResolverUtil } from './theme.utils';
import { cleanSpace } from './string.utils';
import { ITokenFallbackStrategyDict } from '../interfaces/tokens.type';

const tokenStrategyDict: ITokenFallbackStrategyDict = {
  default: (prefix, val) => tokenClassGen(prefix, val),
  custom: (prefix, val) => tokenClassGen(prefix, `[${val}]`, false),
};

type ITokenStrategy = 'default' | 'custom';

export function tokenClassGen(
  prefix: string,
  value: string | number,
  skipPrefix: boolean = true
) {
  if (value && prefix) {
    return `${prefix}-${value}`;
  } else if (!prefix && skipPrefix) {
    return value.toString();
  }
  return '';
}

export function tokenGen(
  token: keyof Theme,
  prefix: string,
  value?: string | number,
  fallback?: string | number,
  negativeAllowed: boolean = false
): string {
  const tokenConfig = themeResolverUtil(token);

  // handling negativeAllowed case
  if (negativeAllowed) {
    if (typeof value == 'string' && value.charAt(0) == '-') {
      prefix = '-' + prefix;
      value = value.slice(1);
    } else if (typeof value == 'number' && value < 0) {
      prefix = '-' + prefix;
      value = value * -1;
    }
  }

  if (value) {
    const isDefined = tokenConfig.hasOwnProperty(value);
    if (isDefined) {
      return tokenClassGen(prefix, value);
    } else if (fallback) {
      /**
       * How do we handle the other case.
       * Do we allow them to use custom values
       * Or just use the fallback
       * */

      // custom values
      // return `${prefix}-[${value}]`

      // Use Fallback
      return tokenClassGen(prefix, value);
    } else {
      return '';
    }
  }
  return '';
}

export function tokenClean(tokens: string[]) {
  tokens = tokens.map(cleanSpace);
  return tokens.join(' ');
}

export function decorateToken(tokens: string[], decorator?: string): string {
  if (decorator) {
    tokens = tokens.map((token) => `${decorator}:${token}`);
  }
  return tokenClean(tokens);
}

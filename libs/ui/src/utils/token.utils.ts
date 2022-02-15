import { Theme } from 'twind';
import { themeResolverUtil } from './theme.utils';
import { cleanSpace } from './string.utils';

export function tokenClassGen(token: string, value: string | number | Symbol) {
  if (value) {
    return `${token}-${value}`;
  }
  return '';
}

export function tokenGen(
  token: keyof Theme,
  prefix: string,
  value?: string | number,
  fallback?: string | number,
  negativeAllowed: boolean = false
) {
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
      return `${prefix}-${value}`;
    } else {
      /**
       * How do we handle the other case.
       * Do we allow them to use custom values
       * Or just use the fallback
       * */

      // custom values
      // return `${prefix}-[${value}]`

      // Use Fallback
      return `${prefix}-${fallback}`;
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

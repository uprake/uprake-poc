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
  fallback?: string | number
) {
  const tokenConfig = themeResolverUtil(token);
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
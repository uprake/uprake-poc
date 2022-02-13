import { Theme } from 'twind';
import { IThemeConfig } from '../interfaces/theme';
import { CurrentTheme } from '../theme/current.theme';

export function themeCompose(
  themeArr: IThemeConfig[],
  key: keyof IThemeConfig
): Partial<Theme> {
  const theme: Partial<Theme> = {};

  return themeArr.reduce(
    (theme, config) => ({ ...theme, ...config[key] }),
    theme
  );
}

export function themeResolverUtil(key: keyof Theme) {
  return CurrentTheme.resolver()(key);
}

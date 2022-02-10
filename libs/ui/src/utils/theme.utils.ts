import { Theme } from 'twind';
import { IThemeConfig } from '../interfaces/theme';

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

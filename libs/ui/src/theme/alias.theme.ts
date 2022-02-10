import { ThemeConfiguration } from 'twind';
import config from '../config';
import { themeCompose } from '../utils/theme.utils';

export const aliasTheme = (): Partial<ThemeConfiguration> =>
  themeCompose(config, 'aliasConfig');

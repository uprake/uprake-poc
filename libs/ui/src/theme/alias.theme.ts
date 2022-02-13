import { ThemeConfiguration } from 'twind';
import config from '../config/theme.config';
import { themeCompose } from '../utils/theme.utils';

export const aliasTheme = (): Partial<ThemeConfiguration> =>
  themeCompose(config, 'aliasConfig');

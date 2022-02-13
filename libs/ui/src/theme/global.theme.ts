import { ThemeConfiguration } from 'twind';
import config from '../config/theme.config';
import { themeCompose } from '../utils/theme.utils';

export const globalTheme = (): Partial<ThemeConfiguration> =>
  themeCompose(config, 'globalConfig');

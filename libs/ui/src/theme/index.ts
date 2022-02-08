import { ThemeConfiguration } from 'twind';
import { aliasTheme } from './alias.theme';
import { globalTheme } from './global.theme';

/**
 * Three types of tokens
 * 1. Global tokens -> directly goes into the theme
 * 2. alias tokens -> extends
 * 3. Component Tokens
 *  */

const globalThemeConfig = globalTheme();
const aliasThemeConfig = aliasTheme();

export function themeGenerator(): ThemeConfiguration {
  return {
    ...globalThemeConfig,
    extend: aliasThemeConfig,
  };
}

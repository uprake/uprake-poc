import { DefaultTheme } from 'libs/ui/src/theme/default.theme';
import { Theme } from 'twind';

const global: Partial<Theme> = {
  fontFamily: {
    ...DefaultTheme.resolver()('fontFamily'),
  },
  fontSize: {
    ...DefaultTheme.resolver()('fontSize'),
  },
  fontWeight: {
    ...DefaultTheme.resolver()('fontWeight'),
  },
};

export default global;

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };

import { config } from '@uprake/ui';
import { setup } from 'twind';

// setup(twindConfig);

console.log('ui', config);

setup(config);

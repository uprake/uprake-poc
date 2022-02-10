// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };

import ui from '@zoratrox/ui';
import { create, setup } from 'twind';

// setup(twindConfig);

console.log('ui', ui);

setup(ui);

const voidCtx = create(ui);

console.log('ctx', voidCtx);

console.log(voidCtx.tw.theme('fontSize'));

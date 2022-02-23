import { loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import svgr from 'vite-plugin-svgr';
import react from 'vite-preset-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default ({ mode }: any) => {
  // @ts-ignore:
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      react({ removeDevtoolsInProd: true, injectReact: false }),
      svgr(),
      createHtmlPlugin({
        minify: true,
        // template: './index.html',

        // entry: 'src/main.tsx',
        inject: {
          data: {
            title: env.VITE_SITE_TITLE || 'Collab POC',
          },
        },
      }),
      tsconfigPaths({ projects: ['tsconfig.app.json'] }),
    ],

    build: {
      outDir: 'build',
    },
  };
};

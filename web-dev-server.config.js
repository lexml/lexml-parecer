// import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';
import path from 'path';
import { fileURLToPath } from 'url';
import { fromRollup } from '@web/dev-server-rollup';
import rollupAlias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';

/** Use Hot Module replacement by adding --hmr to the start command */
// ✅ ESM-friendly __dirname / __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hmr = process.argv.includes('--hmr');

const alias = fromRollup(rollupAlias);
const rollupReplace = fromRollup(replace);
const rollupCommonjs = fromRollup(commonjs);

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  open: '/demo/',
  /** Use regular watch mode if HMR is not enabled. */
  watch: !hmr,
  /** Resolve bare module imports */
  nodeResolve: {
    browser: true,
    preferBuiltins: false,
    exportConditions: ['browser', 'development', 'module', 'import', 'default'],
  },

  /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
  // esbuildTarget: 'auto'

  /** Set appIndex to enable SPA routing */
  // appIndex: 'demo/index.html',

  plugins: [
    rollupReplace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),

    rollupCommonjs(),

    alias({ 
      entries: [
        { find: '@ui-commons', replacement: path.resolve(__dirname, './ui-commons/dist/index.js') },
        { find: '@lexml-eta', replacement: path.resolve(__dirname, './lexml-eta/dist/index.js') },
      ],
    }),
    
    /** Use Hot Module Replacement by uncommenting. Requires @open-wc/dev-server-hmr plugin */
    // hmr && hmrPlugin({ exclude: ['**/*/node_modules/**/*'], presets: [presets.lit] }),
  ],

  // See documentation for all available options
});

// import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';
import path from 'path';
import { fileURLToPath } from 'url';
import commonjs from '@rollup/plugin-commonjs';
import { fromRollup } from '@web/dev-server-rollup';

/** Use Hot Module replacement by adding --hmr to the start command */
// ✅ ESM-friendly __dirname / __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hmr = process.argv.includes('--hmr');

const isolateQuillRegistry = {
  name: 'isolate-quill-registry',
  resolveImport({ source }) {
    if (source === 'quill') return '/__lexml/quill.js';
  },
  serve(context) {
    if (context.path !== '/__lexml/quill.js') return;

    return {
      type: 'js',
      body: `
        import { __require } from '/node_modules/quill/dist/quill.js';
        const Quill = __require();
        export default Quill;
      `,
    };
  },
  transform(context) {
    if (!context.path.includes('/node_modules/@lexml/lexml-ui-commons/dist/index.js')) return;
    if (typeof context.body !== 'string') return;

    return {
      body: context.body.replace(/\bwindow\.Quill\s*=\s*Quill\s*;/g, ''),
    };
  },
};

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  open: '/demo/',
  /** Use regular watch mode if HMR is not enabled. */
  watch: !hmr,
  /** Resolve bare module imports */
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },

  /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
  // esbuildTarget: 'auto'

  /** Set appIndex to enable SPA routing */
  // appIndex: 'demo/index.html',

  plugins: [
    isolateQuillRegistry,
    fromRollup(commonjs)(),
    /** Use Hot Module Replacement by uncommenting. Requires @open-wc/dev-server-hmr plugin */
    // hmr && hmrPlugin({ exclude: ['**/*/node_modules/**/*'], presets: [presets.lit] }),
  ],

  // See documentation for all available options
});

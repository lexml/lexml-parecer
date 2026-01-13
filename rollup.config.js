import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import alias from '@rollup/plugin-alias';
import litCss from 'rollup-plugin-lit-css';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uiCommonsPath = path.resolve(__dirname, './ui-commons/dist/index.js'); // <-- aqui!
console.log('[alias @ui-commons] =>', uiCommonsPath);


const basePlugins = [
  alias({
    entries: [{ find: '@ui-commons', replacement: uiCommonsPath }]
  }),
  nodeResolve({ browser: true, preferBuiltins: false, exportConditions: ['browser','module','import','default'] }),
  typescript({ tsconfig: 'tsconfig.json', sourceMap: true }),
  litCss({ include: ['**/*.css'], uglify: true }),
];


const configTs = {
	input: 'src/index.ts',
	output: {
		// dir: 'dist',
    file: 'dist/index.js',
		sourcemap: true,
    inlineDynamicImports: true,
	},
	plugins: [
		...basePlugins,
	],
  external: []
};

const configTsMin = {
	input: 'src/index.ts',
	output: {
		// dir: 'dist',
    file: 'dist/index.min.js',
    sourcemap: true,
    inlineDynamicImports: true,
	},
	plugins: [
		...basePlugins,
    terser({
			format: {
				comments: false
			},
			compress: {
				drop_console: true
			}
		}),
	],
};

export default defineConfig([configTs, configTsMin]);

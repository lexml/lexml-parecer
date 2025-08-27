import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const configTs = {
	input: 'src/index.ts',
	output: {
		// dir: 'dist',
    file: 'dist/index.js',
		sourcemap: true,
    inlineDynamicImports: true,
	},
	plugins: [
		typescript({tsconfig: 'tsconfig.json', sourceMap: true}),
    nodeResolve({
			browser: true,
			preferBuiltins: false,
			exportConditions: ['browser', 'module', 'import', 'default']
		}),
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
		typescript({tsconfig: 'tsconfig.json', sourceMap: true}),
    nodeResolve({
			browser: true,
			preferBuiltins: false,
			exportConditions: ['browser', 'module', 'import', 'default']
		}),
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

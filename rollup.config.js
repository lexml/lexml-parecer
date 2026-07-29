import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isolateBundledQuill = {
  name: 'isolate-bundled-quill',
  transform(code, id) {
    const normalizedId = id.replaceAll('\\', '/');
    if (!normalizedId.includes('@lexml/lexml-ui-commons/dist/index.js')) return null;

    return {
      code: code.replace(/\bwindow\.Quill\s*=\s*Quill\s*;/g, ''),
      map: null,
    };
  },
};

const basePlugins = [
  nodeResolve({ browser: true, preferBuiltins: false, exportConditions: ['browser','module','import','default'] }),
  isolateBundledQuill,
  commonjs(),
  typescript({ tsconfig: 'tsconfig.json', sourceMap: true }),
];

const isExternal = id =>
  id === 'lit' ||
  id.startsWith('lit/') ||
  id === '@awesome.me/webawesome' ||
  id.startsWith('@awesome.me/webawesome/');


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
  external: isExternal
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
  external: isExternal
};

export default defineConfig([configTs, configTsMin]);

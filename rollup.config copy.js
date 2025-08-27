import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
// import copy from 'rollup-plugin-copy';

// export default defineConfig([
//   // Build para desenvolvimento (não-minificado)
//   {
//     input: 'src/index.ts',
//     output: {
//       // file: 'dist/lexml-eta-parecer.js',
//       dir: 'dist',
//       format: 'es',
//       sourcemap: true
//     },
//     plugins: [
//       nodeResolve({
//         browser: true,
//         preferBuiltins: false
//       }),
//       typescript({
//         tsconfig: './tsconfig.json',
//         outDir: 'dist',
//         declaration: true,
//         declarationDir: 'dist/types'
//       }),
//       // copy({
//       //   targets: [
//       //     // Copia themes e assets do Shoelace
//       //     {
//       //       src: 'node_modules/@shoelace-style/shoelace/dist/themes',
//       //       dest: 'dist'
//       //     },
//       //     {
//       //       src: 'node_modules/@shoelace-style/shoelace/dist/assets',
//       //       dest: 'dist'
//       //     }
//       //   ]
//       // })
//     ],
//     // Mantenha dependências externas se você não quiser incluí-las no bundle
//     // external: ['lit', '@shoelace-style/shoelace', 'quill']
//     external: []
//   },

//   // Build para produção (minificado)
//   {
//     input: 'src/index.ts',
//     output: {
//       file: 'dist/index.min.js',
//       format: 'es',
//       sourcemap: true
//     },
//     plugins: [
//       nodeResolve({
//         browser: true,
//         preferBuiltins: false
//       }),
//       typescript({
//         tsconfig: './tsconfig.json',
//         outDir: 'dist'
//       }),
//       terser({
//         format: {
//           comments: false
//         },
//         compress: {
//           drop_console: true
//         }
//       })
//     ],
//     external: []
//   },

//   // // Build para UMD (compatibilidade com browsers mais antigos)
//   // {
//   //   input: 'src/index.ts',
//   //   output: {
//   //     file: 'dist/lexml-eta-parecer.umd.js',
//   //     format: 'umd',
//   //     name: 'LexmlEtaParecer',
//   //     sourcemap: true
//   //   },
//   //   plugins: [
//   //     resolve({
//   //       browser: true,
//   //       preferBuiltins: false
//   //     }),
//   //     typescript({
//   //       tsconfig: './tsconfig.json',
//   //       outDir: 'dist'
//   //     }),
//   //     terser()
//   //   ],
//   //   external: []
//   // }
// ]);

const configTs = {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    sourcemap: true,
  },
  plugins: [
    typescript({tsconfig: 'tsconfig.json'}),
    nodeResolve(),
  ],
};

const configTsMin = {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.min.js',
    sourcemap: true,
  },
  plugins: [
    typescript({tsconfig: 'tsconfig.json'}),
    nodeResolve(),
    terser(),
  ],
};

export default defineConfig([configTs, configTsMin]);


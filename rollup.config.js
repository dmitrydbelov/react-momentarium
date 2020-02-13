import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import bundleScss from 'rollup-plugin-bundle-scss';
import sass from 'rollup-plugin-sass';
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import copy from 'rollup-plugin-copy'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    bundleScss({
      output: 'styles.scss',
    }),
    sass({
      output: 'dist/styles.css',
    }),
    copy({
      targets: [
        { src: 'src/scss/**.scss', dest: 'dist/scss' },
      ]
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    resolve(),
    commonjs()
  ],
  external: ['moment']
}

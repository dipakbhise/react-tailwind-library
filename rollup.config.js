import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

import React from 'react';
import ReactIs from 'react-is';
import ReactDOM from 'react-dom';

export default [
  {
    input: './src/lib/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      }
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("development")
    }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
      commonjs({
        include: /node_modules/,
        namedExports: {
            'react-is': Object.keys(ReactIs),
            'react': Object.keys(React),
            'react-dom': Object.keys(ReactDOM),
            '@apollo/client': ['ApolloProvider', 'ApolloClient', 'HttpLink', 'InMemoryCache', 'useQuery', 'gql'],
            'styled-components': [ 'styled', 'css', 'ThemeProvider' ]
        }
    }),
      external(),
      resolve(),
      terser(),
    ]
  }
];
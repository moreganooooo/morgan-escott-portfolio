import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import * as mdx from 'eslint-plugin-mdx';

export default [
  {
    ignores: [
      'dist/**',
      '.astro/**',
      '.vercel/**',
      'node_modules/**',
      'tina/__generated__/**',
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,

  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,astro}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.nodeBuiltin,
      },
    },
  },

  {
    files: ['**/*.astro'],
    ...astro.configs['flat/jsx-a11y-recommended'],
  },

  {
    files: ['**/*.mdx'],
    ...mdx.flat,
  },
];

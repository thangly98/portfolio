import baselineJs from 'eslint-plugin-baseline-js';

import tsParser from '@typescript-eslint/parser';

export default [
  // Enable type information (required for instance member detection)
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: { parser: tsParser, parserOptions: { project: ['./tsconfig.json'] } },
  },
  { plugins: { 'baseline-js': baselineJs } },
  baselineJs.configs['recommended-ts']({ available: 'widely' }),
];

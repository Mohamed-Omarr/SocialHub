import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['react', 'typescript', 'oxc', 'unicorn', 'jsx-a11y', 'import'],
  categories: {
    correctness: 'error',
    suspicious: 'warn',
  },
  env: {
    browser: true,
  },
  ignorePatterns: ['dist', 'node_modules'],
  settings: {
    react: {
      version: '19.3.0',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/no-unassigned-import': ['error', { allow: ['**/*.css'] }],
    'react/rules-of-hooks': 'error',
    'react/only-export-components': ['warn', { allowConstantExport: true }],
  },
});

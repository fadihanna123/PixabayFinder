// @ts-check
/**
 * @type { import("eslint").Linter.Config }
 */
const config = {
  env: {
    browser: true,
    es2023: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'html'],
  rules: {
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};

module.exports = config;

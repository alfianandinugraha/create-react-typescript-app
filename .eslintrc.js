const { NODE_ENV } = require('dotenv').config().parsed

const config = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'no-console': [NODE_ENV === 'dev' ? 'off' : 'error'],
    'import/newline-after-import': 'error',
    quotes: ['error', 'single'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    semi: 'off',
    '@typescript-eslint/semi': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    '@typescript-eslint/no-var-requires': ['off'],
    'import/order': 'error',
    'import/first': 'error',
  },
}

module.exports = config

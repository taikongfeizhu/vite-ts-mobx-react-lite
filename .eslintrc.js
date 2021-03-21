module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    'max-len': ['warn', { code: 80 }],
    'block-spacing': ['error', 'always'],
    'sort-imports': 'warn',
    'no-console': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};

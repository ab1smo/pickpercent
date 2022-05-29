module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'comma-dangle': 'off',
    'no-unused-vars': 'warn',
    semi: ['warn', 'always'],
    'space-before-function-paren': ['error', 'never'],
  },
};

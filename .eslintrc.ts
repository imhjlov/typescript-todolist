module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['standard-with-typescript', 'prettier', 'plugin:prettier/recommended', 'react-app'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};

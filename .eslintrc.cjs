module.exports = {
  root: true,
  env: { es2022: true, node: true, browser: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    extraFileExtensions: ['.html'],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.json'], // ou seu tsconfig usado pelo editor
        alwaysTryTypes: true,
      },
    },
  },
  ignorePatterns: ['dist/', 'out-tsc/', '*.d.ts', '**/*.js'],
  plugins: ['@typescript-eslint', 'import', 'html'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended', // ou só 'prettier'
  ],
  rules: {
    eqeqeq: 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-extra-semi': 'error',
    semi: 'error',
    'no-trailing-spaces': 'error',
    'max-len': [
      'error',
      {
        code: 450,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'default-case': 'off',
    'no-console': 'off',
    'no-cond-assign': 'off',
    'import/named': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};

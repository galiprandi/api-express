'use strict'

module.exports = {
  extends: ['standard-with-typescript', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    include: ['src/**/*.ts', 'src/**/*.js'],
    projectFolderIgnoreList: ['build/**/*.js'],
    warnOnUnsupportedTypeScriptVersion: false,
  },
  ignorePatterns: ['build'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-console': 'warn',
  },
}

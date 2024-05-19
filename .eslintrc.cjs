const config = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ['import', 'react', 'react-hooks', 'jsx-a11y'],
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    // TODO: アクセシビリティを考慮するタイミングでコメントアウトを解除
    // 'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  rules: {
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'parent',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'never',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // 'jsx-a11y/accessible-emoji': 'warn',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'error',
    eqeqeq: 'error',
    'no-console': 'warn',
    'prefer-const': 'error',
  },
}

module.exports = config

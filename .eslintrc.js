module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/standard',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    parser: 'babel-eslint',
  },
  rules: {
    'linebreak-style': [
      'error',
      'unix',
    ],

    quotes: [
      'error',
      'single',
    ],

    semi: [
      'error',
      'always',
    ],

    'comma-style': [
      'error',
      'last',
    ],

    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'never',
      exports: 'never',
      functions: 'ignore',
    }],

    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],

    'vue/singleline-html-element-content-newline': ['error', {
      ignoreWhenNoAttributes: true,
      ignores: ['pre', 'textarea'],
    }],

    'vue/html-closing-bracket-newline': [
      'error', { multiline: 'never' },
    ],

    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-new': 0,
    // кидает ошибку при использовании слотов в v-data-table. Вернуться к этому вопросу 1.02.2021

    'vue/valid-v-slot': 0,
    'vue/attributes-order': ['error', {
      alphabetical: true,
    }],
  },
};

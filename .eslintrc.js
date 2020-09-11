module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['import'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'no-console': 'error',
    'no-unused-vars': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['external', ['builtin', 'internal'], 'parent', 'sibling', 'index'],
      },
    ],
    'prettier/prettier': 'error',
    'import/no-named-as-default': 0,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
};

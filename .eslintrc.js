module.exports = {
    env: { browser: true, es2021: true },
    extends: [
      'eslint:recommended', 
      'plugin:react/recommended'
      // Removed 'prettier' since it's not installed
    ],
    parserOptions: { 
      ecmaVersion: 'latest', 
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    plugins: ['react'],
    settings: { 
      react: { version: 'detect' } 
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/prop-types': 'off', // Disable prop-types requirement
      'no-unused-vars': 'warn', // Change unused vars from error to warning
      'react/no-unescaped-entities': 'warn' // Change unescaped entities from error to warning
    },
  };
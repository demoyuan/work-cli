module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    // parser: 'babel-eslint',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here (0: off, 1: warn, 2: error)
  rules: {
    'no-console': 0,
    'dot-notation': 0,
    'prefer-const': 0,
    'no-return-await': 0,
    '@typescript-eslint/no-unused-vars': 'off'
  }
}

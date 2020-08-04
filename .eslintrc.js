module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  // add your custom rules here (0: off, 1: warn, 2: error)
  rules: {
    'no-console': 0, // 禁用 console
    'dot-notation': 0, // 强制尽可能地使用点号
    'prefer-const': 0, // 要求使用 const 声明那些声明后不再被修改的变量
    'no-return-await': 0, // 禁用不必要的 return await
    'no-unused-vars': 0, // 禁止出现未使用过的变量
    'no-useless-constructor': 0, // 禁用不必要的构造函数
    'space-before-function-paren': ['warn', 'never'], // 强制在 function的左括号之前使用一致的空格
    'quote-props': ['warn', 'as-needed'], // 要求对象字面量属性名称使用引号
    'arrow-parens': ['warn', 'as-needed'], // 要求箭头函数的参数使用圆括号
    '@typescript-eslint/no-unused-vars': [1, {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: false
    }]
  }
}

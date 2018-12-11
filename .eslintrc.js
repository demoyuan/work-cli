module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/prettier'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'prettier/prettier': [
            'error',
            {
                eslintIntegration: true,
                stylelintIntegration: true,
                tabWidth: 4,
                singleQuote: true,
                semi: false,
                bracketSpacing: true
            }
        ],
        // 禁止使用空解构模式
        'no-empty-pattern': 0
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}

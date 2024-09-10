import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'


export default [
  {files: ['**/*.{js,mjs,cjs,ts,vue}']},
  {files: ['**/*.js'], languageOptions: {sourceType: 'script'}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {files: ['**/*.vue'], languageOptions: {parserOptions: {parser: tseslint.parser}}},
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-undef': 'off',
      'semi': ['error', 'never'], // セミコロン禁止
      'quotes': ['error', 'single'], // シングルクォートを使用
      'comma-dangle': ['error', 'never'] // 末尾のカンマを禁止
    }
  },
  {
    ignores: ['.nuxt/**', '.vscode/**']
  }
]
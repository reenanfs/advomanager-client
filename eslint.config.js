import vuetify from 'eslint-config-vuetify'

export default {
  ...vuetify(),

  extends: [
    ...vuetify().extends,
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier + displays Prettier errors as ESLint errors
    'prettier', // Disables ESLint rules that conflict with Prettier
  ],

  rules: {
    ...vuetify().rules,

    // Optional: turn off rules that conflict with Prettier formatting
    'vue/script-indent': 'off',
    'vue/html-indent': 'off',
    'prettier/prettier': 'warn', // Show prettier issues as warnings (or use 'error')
  },
}

import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt({
  rules: {
    "no-console": "warn",
    "vue/component-tags-order": [
      "error",
      {
        order: ["script", "template", "style"],
      },
    ],
    "vue/multi-word-component-names": "off",
    "eol-last": "error",
  },
  files: ["**/*.{js,ts,vue}"],
  ignores: ["node_modules/**"],
})

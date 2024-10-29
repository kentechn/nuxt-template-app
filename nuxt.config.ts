// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxt/eslint"],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: "/api",
    },
    jwtSecretKey: "secret",
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-04-03",
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: "double",
        semi: false,
      },
    },
  },
  shadcn: {
    prefix: "",
    componentDir: "./app/components/shadcn",
  },
})

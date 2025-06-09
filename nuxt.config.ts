// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
  css: ['~/assets/css/tailwind.css'],
  imports: {
    dirs: ["stores"],
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  content: {
    build: {
      markdown: {
        highlight: {
          // Theme used in all color schemes.
          // theme: "github-light",
          // OR
          theme: {
            // Default theme (same as single string)
            default: "solarized-light",
            // Theme used if `html.dark`
            dark: "solarized-dark",
            // Theme used if `html.sepia`
            sepia: "monokai",
          },
        },
      },
    },
  },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  nitro: {
    prerender: {
      // routes: ["/sitemap.xml"],
    },
  },
});

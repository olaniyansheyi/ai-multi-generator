// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
  build: {
    transpile: ["@supabase/auth-ui-shared", "@supabase/auth-ui-vue"], // Add necessary transpile dependencies
  },
  vite: {
    server: {
      hmr: {
        overlay: false, // Disable HMR overlay for temporary troubleshooting
      },
    },
  },

  components: [
    {
      path: "~/components/ui",
      extensions: [".vue"],
      prefix: "",
    },
    {
      path: "~/components",
      extensions: [".vue"],
      prefix: "",
    },
  ],
  supabase: {
    redirectOptions: {
      login: "/auth",
      callback: "/confirm",
      exclude: ["/"],
    },
  },
});

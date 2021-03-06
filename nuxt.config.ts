import { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "ts_fire_practice",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/composition-api"
  ],

  modules: ["@nuxtjs/firebase"],
  firebase: {
    config: {
      apiKey: "ここの値は人それぞれ違います",
      authDomain: "ここの値は人それぞれ違います",
      databaseURL: "ここの値は人それぞれ違います",
      projectId: "ここの値は人それぞれ違います",
      storageBucket: "ここの値は人それぞれ違います",
      messagingSenderId: "ここの値は人それぞれ違います",
      appId: "ここの値は人それぞれ違います",
      measurementId: "ここの値は人それぞれ違います"
    },
    services: {
      auth: true,
      firestore: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};

export default config;

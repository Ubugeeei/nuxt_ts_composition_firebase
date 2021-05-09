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

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyDh54hdeC-1hZhjAa5FWFfvrib0Sz9ltuM",
          authDomain: "ts-fire-practice.firebaseapp.com",
          databaseURL: "https://ts-fire-practice.firebaseio.com",
          projectId: "ts-fire-practice",
          storageBucket: "ts-fire-practice.appspot.com",
          messagingSenderId: "519588662982",
          appId: "1:519588662982:web:38beae9a58daaccc6b51c7",
          measurementId: "G-L0GEER9GTP"
        },
        services: {
          auth: true // Just as example. Can be any other service.
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};

export default config;

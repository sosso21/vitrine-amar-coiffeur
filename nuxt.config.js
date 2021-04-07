export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Amar Coiffeur',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      //<meta name="google-site-verification" content="o7vE04gAoE_TPXejFD2uMlk_m3mltKl2vcrTwmE8oY4" />
      
      { charset: 'utf-8' },
      {name:"google-site-verification", content:"o7vE04gAoE_TPXejFD2uMlk_m3mltKl2vcrTwmE8oY4"},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Salon de coiffure pour homme. Soins capillaire ; cheveux et barbe ,Accueil chaleureux et travaille professionnel.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "bootstrap-icons/font/bootstrap-icons.css",
    "@/assets/index.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

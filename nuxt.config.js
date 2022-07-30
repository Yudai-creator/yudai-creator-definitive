export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Yudai Creator',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', 
        name: 'description', 
        content: 'Yudai H portfolio website, showing up his skills as a UI designer and Frontend Developer.' 
      },
      { name: 'format-detection', content: 'telephone=no' },
      // { hid: 'description', name: 'description', content:  'Yudai H portfolio website, showing up his skills as a designer and frontend developer.' },
      // { hid: 'og:title', property: 'og:title', content: 'Yudai Creator' },
      // { hid: 'og:url', property: 'og:url', content: 'https://yudaicreator.com/' },
      // { hid: 'og:description', property: 'og:description', content: this.description },
      // { hid: 'og:image', property: 'og:image', content: 'https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Meta_Images/portfolio-og-image___1_0QRxF6SIp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659147850094'},
      // { property: 'og:image', content: 'https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Meta_Images/portfolio-og-image___1_0QRxF6SIp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659147850094'}

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bungee&family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

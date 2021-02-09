import path from 'path';
import loadEnv from './assets/utils/loadEnv';

const env = loadEnv(process.env.MODE);

export default {
  server: {
    port: env.VUE_APP_PORT || 8080,
  },
  ssr: true,
  router: {
    base: '/pwa-test/',
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ru',
    },
    titleTemplate: '%s - ' + env.VUE_APP_TITLE,
    title: env.VUE_APP_TITLE,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { namr: 'msapplication-TileColor', content: '#ffffff' },
      { namr: 'theme-color', content: '#ffffff' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', id: 'theme-font-css', media: 'all', href: '/pwa-test/fonts/Gilroy/stylesheet.css' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3F50FB' },
  /*
  ** Global CSS
  */
  css: [
    'assets/scss/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuex-router-sync',
    '@/plugins/theme.js',
  ],
  buildModules: [
    '@nuxtjs/pwa',
  ],
  pwa: {
    manifest: {
      lang: 'ru',
      name: 'PWATestApp',
      short_name: 'PWA/Nuxt - Test App',
      display: 'standalone',
      theme_color: '#555',
    },
    workbox: {
      // dev: true, // or use a global variable to track the current NODE_ENV, etc to determine dev mode
    },
  },
  /*
  ** Build configuration
  */
  /*
  ** Nuxt.js modules
  */
  modules: [
    'cookie-universal-nuxt',
  ],
  build: {
    transpile: [
      'lodash-es',
    ],
    loaders: {
      vue: {
        transformAssetUrls: {
          img: 'src',
          image: 'xlink:href',
        },
      },
    },
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 },
            },
          ],
        ];
      },
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.resolve.alias['@'] = path.join(__dirname, './');
      config.resolve.alias['@pages'] = path.join(__dirname, 'pages');
      config.resolve.alias['@layouts'] = path.join(__dirname, 'layouts');
      config.resolve.alias['@views'] = path.join(__dirname, 'views');
      config.resolve.alias.assets = path.join(__dirname, 'assets');
      config.resolve.alias['@images'] = path.join(__dirname, 'assets/images/');
      config.resolve.alias['@mixins'] = path.join(__dirname, 'assets/mixins/');
      config.resolve.alias['@modules'] = path.join(__dirname, 'store/');
      config.resolve.alias['@cp'] = path.join(__dirname, 'components/');
      config.resolve.alias.vue = 'vue/dist/vue.common';
    },
    extractCSS: process.env.NODE_ENV === 'production',
    // extractCSS cannot work with parallel build due to limited work pool in thread-loader
    parallel: process.env.NODE_ENV !== 'production',
  },
  env,
  vue: {
    config: {
      productionTip: false,
    },
  },
  loadingIndicator: {
    name: 'three-bounce',
    color: '#4CAF50',
    background: 'white',
  },
};

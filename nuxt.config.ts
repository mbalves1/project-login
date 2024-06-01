// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    '@nuxtjs/tailwindcss',
    'radix-vue/nuxt',
    'nuxt-lucide-icons',
    './src/module',
    "shadcn-nuxt"
  ],
  lucide: {
    namePrefix: 'Lucide'
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/style.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  autoImports: {
    dirs: [
      'store',
      'components',
      'composables',
      'composables/*/index.{ts,js,mjs,mts}'
    ], // Importa automaticamente componentes do diretório 'components'
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
    ],
    storesDirs: ['./store/**', './custom-folder/stores/**'],
  }
})
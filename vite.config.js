
const { defineConfig } = require('vite')
import vueSFCDocumentation from './plugins/plugin-vue-sfc-documentation'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import path from 'path'

module.exports = defineConfig({
    resolve: {
      alias: {
        '@' : `${path.resolve(__dirname, './playground')}/`
      }
    },
    plugins: [
      vueSFCDocumentation(),
      vue(),
      Unocss()
    ],
    build: {
        minify: false,
        watch: false,
        lib: {
          entry: path.resolve(__dirname, './src/index.js'),
          formats: ['es'],
          name: 'Nebula',
          fileName: (format) => `index.mjs`
        },
        rollupOptions: {
          plugins: [],
          // make sure to externalize deps that shouldn't be bundled
          // into your library
          external: ['vue'],
          output: {
            // Provide global variables to use in the UMD build
            // for externalized deps
            globals: {
              vue: 'Vue'
            }
          }
        }
      }
})
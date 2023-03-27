const { defineConfig } = require('@vue/cli-service');
const Dotenv = require('dotenv-webpack');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/styles/index.scss";`
      },
      postcss: {
        postcssOptions: {
          path: __dirname
        }
      },
    }
  },
  configureWebpack: {
    plugins: [
      new Dotenv()
    ]
  }
})

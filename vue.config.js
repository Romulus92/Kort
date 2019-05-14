module.exports = {
  filenameHashing: false,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/main.scss";
        `
      }
    }
  },
  pluginOptions: {
    svgSprite: {
      dir: 'src/assets/icons',
      test: /\.(svg)(\?.*)?$/,
      loaderOptions: {
        extract: true,
        spriteFilename: 'img/icons.svg' // or 'img/icons.[hash:8].svg'
      },
      pluginOptions: {
        plainSprite: true
      }
    }
  }
}

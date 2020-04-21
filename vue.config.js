module.exports = {
    // アプリケーション全体に関わるcssの設定
    css: {
      loaderOptions: {
        sass: {
          data: `@import "@/public/scss/style.scss";`
        }
      }
    }
  }
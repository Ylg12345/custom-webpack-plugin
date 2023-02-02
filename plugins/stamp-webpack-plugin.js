const HtmlWebpackPlugin = require('html-webpack-plugin');

class StampWebpackPlugin {
  apply(compiler) {

    compiler.hooks.compilation.tap('StampWebpackPlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tap('StampWebpackPlugin',(htmlData) => {
        let scriptSrc = htmlData.assets.js[0];
        htmlData.assets.js[0] = `${htmlData.assets.js[0]}?${new Date().getTime()}`
      })
    })
  }
}


module.exports = StampWebpackPlugin;
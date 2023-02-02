# custom-webpack-plugin



#### 1. 使用express, webpack-dev-middleware, webpack-hot-middleware启动服务，实现模块热替换。

#### 2. 自定义StampWebpackPlugin插件，在不使用hash的情况，在文件名后面加上时间戳，也可让html引用的文件名不同，起到规避缓存的效果。

```
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
```


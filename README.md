# custom-webpack-plugin



#### 1. 使用express, webpack-dev-middleware, webpack-hot-middleware启动服务。


```
  const express = require('express');
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const app = express();
  const config = require('./webpack.config.js');
  const compiler = webpack(config);
  
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    })
  );

  app.use(webpackHotMiddleware(compiler));

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
  });
```

#### 2. 实现模块热替换。

if(module.hot) {

  let lastEditor = editor;

  module.hot.accept('./editor.js', () => {
  
    const value = lastEditor.value;
    document.body.removeChild(lastEditor);
    const newEditor = createEditor();
    newEditor.value = value;
    document.body.appendChild(newEditor);
    lastEditor = newEditor;
  })
}

#### 3. 自定义StampWebpackPlugin插件，在不使用hash的情况，在文件名后面加上时间戳，也可让html引用的文件名不同，起到规避缓存的效果。

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


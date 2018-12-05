const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
  {
    entry: './src/host-selectors/main.js',
    output: {
      filename: '[name].js',
      path: __dirname + '/dist/host-selectors'
    },
    mode: 'production',
    plugins: [
      new CopyWebpackPlugin([{
        from: 'src/host-selectors/styles.css',
        to: 'styles.css'
      }, {
        from: 'src/host-selectors/index.html',
        to: 'index.html'
      }])
    ]
  }, {
    entry: './src/popup-info-box-web-component/main.js',
    output: {
      filename: '[name].js',
      path: __dirname + '/dist/popup-info-box-web-component'
    },
    mode: 'production',
    plugins: [
      new CopyWebpackPlugin([{
        from: 'src/popup-info-box-web-component/**/*.png',
        to: 'img/[name].png'
      }, {
        from: 'src/popup-info-box-web-component/index.html',
        to: 'index.html'
      }]),
    ]
  }];
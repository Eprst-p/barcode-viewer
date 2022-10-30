const path = require('path');

module.exports = [{
  mode: 'development',
  entry: './js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  devtool: 'source-map',
  devServer: {
    hot: false
  },
  module: {
    rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|gif|jpg|jpeg|ico|pdf)$/,
          type: 'asset/resource'
        },
    ]
  }
},
{
  mode: 'production',
  entry: './js/main.js',
  output: {
    filename: 'bundleProd.js',
    path: path.resolve('C:\\production', 'public/js'),
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  devtool: 'source-map',
  devServer: {
    hot: false
  },
  module: {
    rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|gif|jpg|jpeg|ico|pdf)$/,
          type: 'asset/resource'
        },
    ]
  }
}];
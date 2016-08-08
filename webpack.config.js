const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: 'build',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'sinon': 'sinon/pkg/sinon'
    },
    root: path.resolve(path.join(__dirname, 'src'))
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    noParse: [
      /node_modules\/sinon\//,
    ],
    loaders: [
     {
       test: /\.jsx?$/,
       loader: 'babel',
       include: path.join(__dirname, 'src')
     },
     {
       test: /\.scss$/,
       loaders: ['style', 'css', 'sass']
     },
     { test: /\.(png|jpg)$/,
       loader: 'url-loader?limit=8192',
       include: path.join(__dirname, 'src')
     }
    ],
  },
   devServer: {
     contentBase: './',
     historyApiFallback: true,
     inline: true,
     hot: true
   },
   externals: {
      'cheerio' : 'window',
      'react/addons' : true,
      'react/lib/ExecutionEnvironment' : true,
      'react/lib/ReactContext' : true
    },
    colors: true,
  };
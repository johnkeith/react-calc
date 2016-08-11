var webpack = require('karma-webpack')
var webpackConfig = require('./webpack.config')
webpackConfig.module.loaders = [
  {
    test: /\.(js|jsx)$/, exclude: /(bower_components|node_modules)/,
    loader: 'babel-loader'
  },
  {
    test: /\.scss$/,
    loaders: [ 'style', 'css', 'sass' ]
  },
  { test: /\.(png|jpg)$/,
    loader: 'url-loader?limit=8192'
  }
]
webpackConfig.module.postLoaders = [ {
  test: /\.(js|jsx)$/, exclude: /(node_modules|bower_components|tests)/,
  loader: 'istanbul-instrumenter'
} ]

module.exports = function (config) {
  var sourcePreprocessors = ['webpack', 'coverage'];

  config.set({
    frameworks: [ 'mocha', 'chai' ],
    files: [
      './node_modules/babel-polyfill/dist/polyfill.js',
      'tests/**/*_spec.js'
    ],
    plugins: [
      webpack,
      'karma-mocha',
      'karma-chai',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-spec-reporter',
      'karma-sourcemap-loader',
      'enzyme'
    ],
    browsers: [ 'PhantomJS' ],
    preprocessors: {
      'tests/**/**.js': sourcePreprocessors,
      'src/**/*.js': sourcePreprocessors
    },
    reporters: [ 'spec', 'coverage' ],
    coverageReporter: {
      dir: 'build/reports/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
      ]
    },
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true },
    // enable / disable colors in the output (reporters and logs)
    colors: true
  })
}
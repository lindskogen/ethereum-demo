var autoprefixer = require('autoprefixer');
var precss = require('precss');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  devtool: 'source-map',
  output: {
    path: __dirname + '/public',
    publicPath: 'build/'
  },
  module: {
    loaders: [
      {
        test:   /\.json$/,
        loader: 'json'
      },
      {
        test: /(\.jsx|\.js)$/,
        loaders: ['react-hot', 'babel'],
        exclude: /(node_modules|bower_components)/
      },
      {
        test:   /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1!postcss'
      }
    ]

  },
  postcss: function() {
    return [autoprefixer, precss];
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './public',
    publicPath: '/build',
    hot:true,
    stats: {
        colors: true,
        chunks: false
    },
    historyApiFallback: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

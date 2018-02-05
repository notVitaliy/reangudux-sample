const webpack = require('webpack')

const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const ROOT = path.resolve(__dirname)

const extractCSS = new ExtractTextPlugin({
  filename: '[name].css',
})

const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    app: './src/app/index.ts',
    vendor: './src/app/vendor.ts',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.css$/,
        loader: extractCSS.extract('css-loader?minimize'),
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.join(ROOT, './dist'),
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      template: path.join(ROOT, 'src/public/index.html'),
    }),
    extractCSS,
  ],
  devServer: {
    historyApiFallback: true,
  },
}

module.exports = config

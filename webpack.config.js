const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

const host = process.env.HOST || 'localhost'

module.exports = {
  entry: {
    'main-app': './src/main-app.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist', '.'),
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[chunkhash].js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js']
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        include: path.join(__dirname, 'imgs'),
        loader: 'url-loader?limit=30000&name=imgs/[name].[ext]',
        test: /\.(png|svg|jpg|gif)$/
      },
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: process.cwd(),
    compress: true,
    hot: true,
    host,
    port: 2000,
    watchContentBase: true
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true
    })
  ]
}

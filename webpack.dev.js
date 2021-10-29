const path = require('path');
require('dotenv').config();
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var commBrowserConfig = {
  entry: {
    homepage: './src/universal/HomepageRoot.js', 
    dashboard: './src/universal/DashRoot.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build', 'static'),
    publicPath: 'static/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.svg$/,
        type: 'asset/inline'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/].*\.js$/,
          enforce: true,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'src', 'server', 'views'),
          globOptions: {
            ignore: ["**/layouts/**"],
          },
          to: path.join(__dirname, 'build', 'views'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'build', 'views', 'layouts', 'homepage.hbs'),
      template: path.resolve(__dirname, 'src', 'server', 'views', 'layouts', 'homepage.hbs'),
      excludeChunks: ['dashboard'],
      // favicon: path.resolve(__dirname, 'src', 'favicons', 'favicon.ico'),
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        despription:
          'Firebase Fuel Manager',
        robots: 'index,follow',
      },
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'build', 'views', 'layouts', 'dashboard.hbs'),
      template: path.resolve(__dirname, 'src', 'server', 'views', 'layouts', 'dashboard.hbs'),
      excludeChunks: ['homepage'],
      // favicon: path.resolve(__dirname, 'src', 'favicons', 'favicon.ico'),
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        despription:
          'Firebase Fuel Manager',
        robots: 'index,follow',
      },
    }),
    new webpack.DefinePlugin({
      'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      'process.env.FIREBASE_MESSAGING': JSON.stringify(process.env.FIREBASE_MESSAGING),
      'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
    }),
  ],
};

var commServerConfig = {
  entry: './src/server/server.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'server.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.svg$/,
        type: 'asset/inline'
      },
      {
        test: /\.css$/,
        use: ['null-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
  ],
};

module.exports = [ commBrowserConfig, commServerConfig ];

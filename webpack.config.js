const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;
const mode = isProd ? 'production' : 'development';
const target = isProd ? 'browserslist' : 'web';
const filename = (urlFolder, ext) => (isDev ? `${urlFolder}bundle.${ext}` : `${urlFolder}bundle.[contenthash].${ext}`);

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
    },
  ];
  if (isDev) {
    loaders.push('eslint-loader');
  }
  return loaders;
};

module.exports = {
  entry: './src/index.ts',
  mode: mode,
  target: target,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: filename('js/', 'js'),
    assetModuleFilename: 'img/[name][ext][query]',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utils': path.resolve(__dirname, 'utils'),
    },
  },
  devtool: isDev ? 'source-map' : false,
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: isDev,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
        type: 'javascript/auto',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './static/index.html',
      filename: 'index.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd,
      },
    }),
    new MiniCssExtractPlugin({
      filename: filename('css/', 'css'),
    }),
  ],
};

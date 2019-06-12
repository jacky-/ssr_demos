const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



//定义了一些文件夹的路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const COMPONENTS_PATH = path.resolve(APP_PATH, 'src/components');
const STYLE_PATH = path.resolve(APP_PATH, 'styles');
const BUILD_PATH = path.resolve(APP_PATH, 'dist');

module.exports = {
  entry: {
    react: ['react'],
    reactDom: ['react-dom'],
    main: `${APP_PATH}/src/main.js`
  },
  output: {
    path: BUILD_PATH,
    filename: 'js/bundle-[name]-[hash].js',
    chunkFilename: 'js/[name].chunk.js',
  },
  resolve: {
    alias: {
      _css: STYLE_PATH,
      _cp: COMPONENTS_PATH
    },
  },

  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: './images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        //注意：这里还需要更改一下
        loader: [
          MiniCssExtractPlugin.loader,
          'css-loader?modules',
        ]
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new HtmlwebpackPlugin({
      filename: 'index.html',
      template: `${APP_PATH}/static/MainPage.html`
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css",
      chunkFilename: "[id].css"
    })
  ]
};

const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const uglifyjswebpackPlugin = require('uglifyjs-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



const myplugin = require('./app/webpackplugin/myplugin.js');
//定义了一些文件夹的路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const COMPONENTS_PATH = path.resolve(ROOT_PATH, 'app/src/components');
const STYLE_PATH = path.resolve(ROOT_PATH, 'app/styles');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: {
    //第三方库显示声明
    // moment: ['moment'],
    react: ['react'],
    reactDom: ['react-dom'],
    router: ['react-router-dom'],
    //公共组件声明为common
    // common: [`${APP_PATH}/src/sub.js`],
    main: `${APP_PATH}/src/main.js`,
    // other: [
    //   `${APP_PATH}/src/b.js`,
    //   `${APP_PATH}/src/c.js`
    // ],

  },
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: 'js/bundle-[name]-[hash].js',
    chunkFilename: 'js/[name].chunk.js',
    publicPath: '/' //确保文件资源能够在 http://localhost:3000 下正确访问
  },
  // 引用但不打包的文件
  // externals: { react: 'React', 'react-dom': 'ReactDOM' },
  resolve: {
    // 给src目录一个路径，避免出现'../../'这样的引入
    alias: {
      _css: STYLE_PATH,
      _cp: COMPONENTS_PATH
    },
  },

  // 环境
  mode: "development",
  // 开发者工具 source-map
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
      // 当图片文件大于10KB时，复制文件到指定目录，小于10KB转为base64编码
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
  //添加我们的插件 会自动生成一个html文件
  plugins: [
    new ProgressBarPlugin(),
    new HtmlwebpackPlugin({
      filename: 'index.html',
      template: `${APP_PATH}/static/MainPage.html`
    }),
    // 提取css文件
    new MiniCssExtractPlugin({
      filename: "css/style.css",
      chunkFilename: "[id].css"
    })



    // new uglifyjswebpackPlugin({
    //   uglifyOptions: {
    //     output: {
    //   // 是否注释
    //       comments: false
    //     },
    //     compress: {
    //       warnings: false,
    //       drop_debugger: true,
    //       drop_console: true
    //     }
    //   }
    // }),
    // new myplugin(),
  ]
};

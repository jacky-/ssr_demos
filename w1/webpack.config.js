const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const uglifyjswebpackPlugin = require('uglifyjs-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const myplugin = require('./app/webpackplugin/myplugin.js');
//定义了一些文件夹的路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const STYLE_PATH = path.resolve(ROOT_PATH, 'app/styles');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: {
    //第三方库显示声明
    react: ['react'],
    moment: ['moment'],
    //公共组件声明为common
    common: [`${APP_PATH}/src/sub.js`],
    main: `${APP_PATH}/src/main.js`,
    other: [
      `${APP_PATH}/src/b.js`,
      `${APP_PATH}/src/c.js`
    ],

  },
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: 'js/bundle-[name]-[hash].js',
    chunkFilename: 'js/[name].chunk.js',
    publicPath: '/' //确保文件资源能够在 http://localhost:3000 下正确访问
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
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          // style-loader
          { loader: 'style-loader' },
          // css-loader
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  //添加我们的插件 会自动生成一个html文件
  plugins: [
    new ProgressBarPlugin(),
    new HtmlwebpackPlugin({
      title: 'Hello World app'
    }),
    new uglifyjswebpackPlugin({
      uglifyOptions: {
        output: {
      // 是否注释
          comments: false
        },
        // compress: {
        //   warnings: false,
        //   drop_debugger: true,
        //   drop_console: true
        // }
      }
    }),
    // new myplugin(),
  ]
};

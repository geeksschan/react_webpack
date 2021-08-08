const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve("./dist"),
    index: "index.html",
    port: 9000,
    open: true,
    proxy: {
      '/api': { // /api/로 시작하는 url은 아래의 전체 도메인을 추가하고, 옵션을 적용,
        pathRewrite: { '^/api': '' }, 
        target: 'https://e77374c506f5.ngrok.io', // 클라이언트에서 api로 보내는 요청은 주소를 3095로 바꿔서 보내겠다 라는 뜻
        changeOrigin: true, // cross origin 허용 설정
      },
    },
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: "[local]--[hash:base64:5]",
              }
            }
          },
          'postcss-loader', 'resolve-url-loader', 'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'resolve-url-loader',]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/presentation/components'),
      '@common': path.resolve(__dirname, 'src/presentation/common'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    }
  }
}
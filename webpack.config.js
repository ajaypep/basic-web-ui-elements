const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
    // main: {
    //   import: path.resolve(__dirname, 'src/index.js'),
    // },
    // test: path.resolve(__dirname, 'test/script.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    // clean: true,
    globalObject: 'this',
    library: {
      name: 'MyLib',
      type: 'umd',
    },
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/i,
        type: 'javascript/auto',
      },
      {
        test: /\.js$/i,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: 'test/template.html',
  //     excludeChunks: ['main'],
  //   }),
  // ],
  optimization: {
    runtimeChunk: 'single',
  },
};

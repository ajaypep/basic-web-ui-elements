const path = require('node:path');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: 'auto',
    globalObject: 'this',
    library: {
      name: 'BasicWebUIElements',
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
};

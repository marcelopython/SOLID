const path = require('path');

module.exports = {
    mode:'development',
  entry: './src/A0019-exercicio/A0019-exercicio.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile:'tsconfig.frontend.json'
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontEnd', 'assets', 'js'),
  },
  devtool: 'source-map',
};
const path = require('path');

module.exports = {
  watch: true,
  performance: { hints: false },
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'oly-client-gate.js',
    library: 'olyclientgate',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
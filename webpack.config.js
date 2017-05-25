const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'oo2fn.min.js',
    library: "oo2fn",
    libraryTarget: "umd"
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 3000
  }
};

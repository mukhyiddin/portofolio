const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  outputDir: 'dist',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
    // Add your other pages here if you have multiple pages
  },
  // Add the following configuration to include 404.html in the output directory
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src/404.html'),
            to: path.resolve(__dirname, 'dist/404.html'),
          },
        ],
      }),
    ],
  },
};

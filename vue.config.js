const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  outputDir: 'dist',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'index.html',
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
            from: '404.html',
            to: '404.html',
          },
        ],
      }),
    ],
  },
};

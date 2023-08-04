const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/portofolio/'
  : '/',
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
            from: 'public/404.html',
            to: '404.html',
          },
        ],
      }),
    ],
  },
};

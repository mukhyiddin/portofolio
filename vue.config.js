export const publicPath = process.env.NODE_ENV === 'production'
  ? '/portofolio/'
  : '/';
export const outputDir = 'dist';
export const pages = {
  index: {
    entry: 'src/main.js',
    template: 'public/index.html',
    filename: 'index.html',
  },
  // Add your other pages here if you have multiple pages
};
export const configureWebpack = {
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
};

// next.config.js

const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

module.exports = withPlugins([
  withCSS({
    webpack(config) {
      config.module.rules.push({
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('tailwindcss'), require('autoprefixer')],
            },
          },
        ],
      });
      return config;
    },
  }),
  withImages({
    webpack(config) {
      return config;
    },
  }),
]);

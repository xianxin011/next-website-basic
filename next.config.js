const withLess = require('next-with-less');
const withImages = require('next-images');

const nextConfig = {
  distDir: 'dist',
  cssModules: true,
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        "@primary-color": "#f74a49",
        "@border-radius-base": ".5em"
      }
    },
  },
  webpack(config, options) {
    return config
  }

}


module.exports = withImages(withLess(nextConfig));
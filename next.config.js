const withImage = require('next-images');
const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');
const {
  serverRuntimeConfig,
  publicRuntimeConfig,
} = require('./next.runtimeConfig');

module.exports = withImage(
  withCSS(
    withSASS({
      cssModules: true,
      serverRuntimeConfig,
      publicRuntimeConfig,
      env: {
        BACKEND_API: process.env.BACKEND_API,
      },
    })
  )
);

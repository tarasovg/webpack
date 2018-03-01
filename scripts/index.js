
// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

function getDefaultConfig(c) {
  return c;
}

function dev(getConfig = getDefaultConfig) {
  const devSetup = require('./config/dev.setup');
  const developmentConfig = require('../config/webpack.config.dev');
  devSetup(getConfig(developmentConfig));
}

function build(getConfig = getDefaultConfig) {
  const buildSetup = require('./config/build.setup');
  const productionConfig = require('../config/webpack.config.prod');
  buildSetup(getConfig(productionConfig));
}

module.exports = {
  build,
  dev,
};

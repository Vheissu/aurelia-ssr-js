module.exports = require('aurelia-ssr-bootstrapper-webpack').default(function (aurelia, headers) {
  let PLATFORM = require('aurelia-pal').PLATFORM;

  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
});

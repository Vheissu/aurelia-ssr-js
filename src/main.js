import environment from './environment';
import {PLATFORM} from 'aurelia-pal';
import 'babel-polyfill';
import * as Bluebird from 'bluebird';

Bluebird.config({ warnings: { wForgottenReturn: false } });

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}

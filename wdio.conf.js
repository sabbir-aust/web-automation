// wdio.conf.js
// import { specs } from './specs/specsAndSuites.js';

export const config = {
  runner: 'local',
  specs: [
    './test/login/login.spec.js',
    //'./test/addToCart/addToCart.spec.js',
    //'./test/registration/registration.spec.js',
  ],
  maxInstances: 1, // Ensures sequential run
  capabilities: [{
    maxInstances: 1, // Enforce sequential execution per browser instance
    browserName: 'chrome',
    acceptInsecureCerts: true
  }],
  logLevel: 'error',
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};

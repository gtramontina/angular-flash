var PORT = process.env.PORT || 8000;
require('http').createServer(require('./test.server')).listen(PORT);

module.exports = function(config) { config.set({
  proxies       : { '/': 'http://localhost:'+PORT },
  urlRoot       : '/_karma_/',
  frameworks    : ['ng-scenario', 'mocha'],
  files         : [
    'app/components/angular-mocks/angular-mocks.js',
    'scenarios.js'
  ],
  reporters     : ['dots'],
  browsers      : ['Firefox'],
  captureTimeout: 10000
});};

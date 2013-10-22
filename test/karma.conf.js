var st = require('st');
var http = require('http');
var PORT = process.env.PORT || 8000;
http.createServer(st('test/app')).listen(PORT);

module.exports = function(config) { config.set({
  proxies       : { '/': 'http://localhost:'+PORT },
  urlRoot       : '/_karma_/',
  frameworks    : ['ng-scenario', 'mocha'],
  files         : [
    'app/components/angular/angular-mocks.js',
    'scenarios.js'
  ],
  reporters     : ['dots'],
  logLevel      : config.LOG_ERROR,

  browsers      : ['Firefox'],
  captureTimeout: 10000
});};

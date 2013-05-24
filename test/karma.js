files = [
  'libs/angular-scenario.js',
  ANGULAR_SCENARIO_ADAPTER,
  MOCHA,
  'libs/angular.min.js',
  'libs/angular-mocks.js',
  'scenarios.js'
];

proxies = { '/': 'http://localhost:8000/' };
browsers = ['PhantomJS'];
autoWatch = false;
singleRun = true;
Package.describe({
    summary: 'Port of some underscore-js functions for meteor ui.'
});
 
Package.on_use(function (api) {
  api.use([
    'coffeescript',
    'standard-app-packages'
  ],'client');
 
  api.add_files('client.coffee', 'client');
});

Package.on_test(function (api) {
  api.use([
    'coffeescript',
    'standard-app-packages',
    'ui-underscore',
    'test-helpers',
    'tinytest'
  ], 'client');
  api.add_files([
    'test.html',
    'test.coffee'
  ], 'client');
});
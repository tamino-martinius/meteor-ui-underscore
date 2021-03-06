Package.describe({
  name: 'zaku:ui-underscore',
  summary: 'Port of some underscore-js functions for meteor ui.',
  version: '0.9.1',
  git: 'https://github.com/tamino-martinius/meteor-ui-underscore.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use([
    'coffeescript@1.0.17',
    'standard-app-packages'
  ],'client');

  api.add_files('zaku:ui-underscore.coffee', 'client');
});

Package.onTest(function(api) {
  api.use([
    'coffeescript',
    'standard-app-packages',
    'zaku:ui-underscore',
    'tinytest'
  ], 'client');
  api.add_files([
    'zaku:ui-underscore-tests.html',
    'zaku:ui-underscore-tests.coffee'
  ], 'client');
});

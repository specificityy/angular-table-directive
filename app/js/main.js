'use strict';

require.config({
  baseUrl: 'app/js',
  paths: {
    angular: ['//ajax.googleapis.com/ajax/libs/angularjs/1.3.13/angular.min'],
    angularRoute: ['//ajax.googleapis.com/ajax/libs/angularjs/1.3.13/angular-route.min'],
    angularAnimate: ['//ajax.googleapis.com/ajax/libs/angularjs/1.3.13/angular-animate.min']
  },

  waitSeconds: 30,
  shim: {
    angular: {
      exports: 'angular'
    },
    angularRoute: {
      deps: ['angular']
    },
    angularAnimate: {
      deps: ['angular']
    }
  }
});

require([
    'angular',
    'hmhApp',
    'angularRoute',
    'angularAnimate',
    'controllers/searchCtrl',
    'controllers/detailsCtrl',
    'services/getContentSvc',
    'directives/search-table',
    'filters/pageStartFilter'
  ],

  function() {
    angular.bootstrap(document, ['hmhApp']);
  });
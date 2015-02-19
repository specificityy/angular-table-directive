define(['angular', 'controllers/controllers', 'services/services', 'filters/filters', 'directives/directives'],
  function(angular) {

    var hmhApp = angular.module('hmhApp', ['controllers', 'services', 'filters', 'directives', 'ngAnimate', 'ngRoute'])

    .config(['$routeProvider', '$httpProvider',
      function($routeProvider, $httpProvider) {

        $routeProvider.when('/search', {
          templateUrl: 'app/partials/search.html',
          controller: 'searchCtrl'
        })

        .when('/details', {
          templateUrl: 'app/partials/details.html',
          controller: 'detailsCtrl'
        })

        .otherwise({
          redirectTo: '/search'
        });
      }
    ]);

    return hmhApp;
  });
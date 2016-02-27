angular.module('hackathon')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'MainController'
      })

      .state('app.search', {
        url: "/search",
        views: {
          'menuContent': {
            templateUrl: "templates/search.html",
            controller: "SearchController"
          }
        }
      })

      .state('app.imprint', {
        url: "/imprint",
        views: {
          'menuContent': {
            templateUrl: "templates/imprint.html"
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/search');
  }
);

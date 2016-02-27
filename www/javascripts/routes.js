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

      .state('app.result', {
        url: "/result",
        views: {
          'menuContent': {
            templateUrl: "templates/result.html",
            controller: "ResultController"
          }
        }
      })

      .state('app.history', {
        url: "/history",
        views: {
          'menuContent': {
            templateUrl: "templates/history.html",
            controller: "HistoryController"
          }
        }
      })

      .state('app.contact', {
        url: "/contact",
        views: {
          'menuContent': {
            templateUrl: "templates/contact.html",
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

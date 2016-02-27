// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'templates/settings.html',
        controller: 'SettingsCtrl'
      }
    }
  })

  .state('app.discover', {
    url: '/discover',
    views: {
      'menuContent': {
        templateUrl: 'templates/discover.html',
        controller: 'DiscoverCtrl'
      }
    }
  })

  .state('app.favourites', {
    url: '/favourites',
    views: {
      'menuContent': {
        templateUrl: 'templates/favourites.html',
        controller: 'FavouritesCtrl'
      }
    }
  })

  .state('app.searches', {
    url: '/searches',
    views: {
      'menuContent': {
        templateUrl: 'templates/searches.html',
        controller: 'SearchesCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/discover');
})
.constant('SERVER', {
  url: "http://demo2144154.mockable.io"
})
.constant('LEARN_LINE', {
  url: "https://marcal.cepheus.uberspace.de/nrwhack.php?url=http://llnrw.test.publicplan.de/learnline3-rest/rest/e4863bbb-6edb-4995-b2c6-a8a9791bf9d0",
  search: "/search?q=",
  facets: []
});
